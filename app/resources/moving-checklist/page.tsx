import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Ultimate Kenya Relocation Checklist | MoveToKenya.org",
  description:
    "A premium relocation checklist that guides your move to Kenya step by step, from planning to settling in.",
};

const phases = [
  {
    title: "6–12 Months Before Moving",
    items: [
      "Research visas",
      "Budget planning",
      "Passport validity",
      "School research",
      "Healthcare planning",
      "Housing research",
    ],
  },
  {
    title: "3–6 Months Before Moving",
    items: [
      "Begin visa process",
      "Gather documents",
      "Obtain police clearances",
      "Research banking",
      "Secure international insurance",
    ],
  },
  {
    title: "1–3 Months Before Moving",
    items: [
      "Book flights",
      "Secure housing",
      "Arrange shipping",
      "Notify employers",
      "Transfer finances",
    ],
  },
  {
    title: "30 Days Before Departure",
    items: [
      "Purchase travel insurance",
      "Backup documents",
      "Prepare medication",
      "Confirm airport transfers",
    ],
  },
  {
    title: "First Week in Kenya",
    items: [
      "Obtain local SIM card",
      "Activate M-PESA",
      "Register with healthcare providers",
      "Explore neighborhoods",
      "Open local bank account",
    ],
  },
  {
    title: "First 90 Days",
    items: [
      "Finalize permits",
      "Establish routines",
      "Join local communities",
      "Build professional networks",
      "Explore investment opportunities",
    ],
  },
];

export default function MovingChecklistPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#111111]">
      <Navbar />

      <section className="px-4 py-20 sm:px-6 md:px-12 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-semibold leading-tight text-[#111111] sm:text-6xl">
                The Ultimate Kenya Relocation Checklist
              </h1>
              <div className="mt-4 h-1 w-16 rounded-full bg-[#C8102E]" />
              <p className="mt-8 text-xl leading-9 text-[#4f4f4f]">
                Everything you should complete before boarding your flight.
              </p>
            </div>

            <div className="rounded-[2.5rem] overflow-hidden border border-[#ece8e4] shadow-[0_30px_90px_rgba(17,17,17,0.08)]">
              <Image
                src="/images/the-ultimate-kenya-relocation-moving-checklist.jpg"
                alt="Family preparing documents and luggage for moving to Kenya"
                width={1600}
                height={900}
                className="h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 md:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl space-y-12">
          {phases.map((phase) => (
            <div key={phase.title} className="rounded-[2.5rem] border border-[#f2e7e4] bg-[#ffffff] p-10 shadow-sm">
              <h2 className="text-3xl font-semibold text-[#111111]">{phase.title}</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {phase.items.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-[1.75rem] border border-[#ece8e4] bg-[#fdfdfc] p-4">
                    <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#006B3F] text-sm font-semibold text-white">✓</span>
                    <span className="text-base leading-8 text-[#4f4f4f]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-4 pb-24 sm:px-6 md:px-12 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[3rem] bg-[#fdf6f6] p-10 text-center shadow-[0_24px_90px_rgba(17,17,17,0.08)] sm:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C8102E]">Ready To Make The Move?</p>
            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
              Your relocation plan starts with the right support.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4f4f4f] sm:text-xl">
              Use this checklist to stay organized and feel confident as you move to Kenya.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-full bg-[#C8102E] px-10 py-4 text-base font-semibold text-white transition hover:bg-[#a00b1b]"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
