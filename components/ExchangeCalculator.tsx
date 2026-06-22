"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Props = {
  defaultRate?: number;
};

export default function ExchangeCalculator({ defaultRate = 129 }: Props) {
  const [usd, setUsd] = useState<number | string>(1);
  const [rate] = useState<number>(defaultRate);
  const [swap, setSwap] = useState(false);

  const formatted = useMemo(() => {
    const value = Number(usd) || 0;
    if (!swap) {
      const ksh = Math.round(value * rate);
      return new Intl.NumberFormat("en-US").format(ksh);
    } else {
      const dollars = value / rate;
      return new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(dollars);
    }
  }, [usd, rate, swap]);

  return (
    <div className="rounded-[2rem] bg-white p-8 shadow-[0_30px_80px_rgba(17,17,17,0.08)] max-w-3xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-[#6b6b6b]">Live Exchange Calculator</p>
          <h3 className="mt-3 text-2xl font-bold text-[#111111]">Convert USD ↔ KSh</h3>
          <p className="mt-2 text-sm text-[#6b6b6b]">Start with USD → KSh. Rates change daily.</p>
        </div>
        <button
          type="button"
          onClick={() => setSwap((s) => !s)}
          className="rounded-full border px-3 py-2 text-sm text-[#111111]"
          aria-pressed={swap}
        >
          {swap ? "KSh → USD" : "USD → KSh"}
        </button>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="flex w-full flex-col">
          <span className="text-xs font-semibold text-[#6b6b6b]">{swap ? "KSh amount" : "USD amount"}</span>
          <input
            type="number"
            min="0"
            step="any"
            value={String(usd)}
            onChange={(e) => {
              const v = e.currentTarget.value;
              setUsd(v === "" ? "" : Number(v));
            }}
            className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-2xl font-semibold outline-none focus:border-[#C8102E]"
          />
        </label>

        <div className="flex flex-col items-start justify-center gap-2">
          <span className="text-xs font-semibold text-[#6b6b6b]">Converted</span>
          <div className="mt-2 rounded-2xl bg-[#f4fbf8] px-5 py-4 text-2xl font-bold text-[#006B3F]">
            {!swap ? `KSh ${formatted}` : `$ ${formatted}`}
          </div>
          <p className="mt-2 text-sm text-[#6b6b6b]">Rate: 1 USD = {rate} KSh (default)</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {[1, 10, 100, 500, 1000, 5000].map((val) => (
          <button
            key={val}
            type="button"
            onClick={() => setUsd(val)}
            className="rounded-full border px-3 py-2 text-sm text-[#111111] hover:bg-[#faf8f6]"
          >
            {swap ? `${new Intl.NumberFormat("en-US").format(Math.round(val * rate))} KSh` : `$${val}`}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <Link href="/contact" className="inline-flex rounded-full bg-[#C8102E] px-6 py-3 text-sm font-semibold text-white">
          Book A Free Consultation
        </Link>
      </div>
    </div>
  );
}
