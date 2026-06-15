"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavbarProps = {
  showAnnouncementOffset?: boolean;
};

export default function Navbar({ showAnnouncementOffset = false }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav
      className={`w-full border-b border-gray-200 bg-white ${
        showAnnouncementOffset ? "" : "sticky top-0 z-50"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:gap-4 sm:px-6 sm:py-2.5 md:px-12 md:py-3">
        <Link
          href="/"
          className="flex min-w-0 max-w-[calc(100%-3rem)] items-center gap-2.5 sm:max-w-none sm:gap-3.5 md:gap-4"
          onClick={closeMobile}
        >
          <Image
            src="/images/movetokenya-logo.png"
            alt="MoveToKenya.org"
            width={250}
            height={100}
            priority
            className="h-[34px] w-auto shrink-0 object-contain sm:h-[42px] md:h-[48px]"
          />
          <span className="truncate text-xs font-extrabold uppercase leading-none tracking-[0.08em] text-[#111111] sm:text-sm sm:tracking-[0.1em] md:text-base md:tracking-[0.12em] lg:text-lg lg:tracking-[0.14em]">
            MOVETOKENYA.ORG
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-[#111111] lg:flex">
          <Link href="/" className="transition duration-300 hover:text-[#D4AF37]">
            Home
          </Link>

          <a
            href={isHome ? "#why-kenya" : "/#why-kenya"}
            className="transition duration-300 hover:text-[#D4AF37]"
          >
            Why Kenya
          </a>

          <Link
            href="/about"
            className="transition duration-300 hover:text-[#D4AF37]"
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className="transition duration-300 hover:text-[#D4AF37]"
          >
            Contact
          </Link>

          {isHome ? (
            <a
              href="https://calendly.com/artejagrier-movetokenya/start-your-move-to-kenya"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-[#0E6B4B] to-[#063b29] px-6 py-3 text-sm font-semibold tracking-[0.08em] text-white transition duration-300 hover:bg-[#0b573d]"
            >
              Book Free Consultation
            </a>
          ) : (
            <a
              href="/#consultation"
              className="rounded-full bg-gradient-to-r from-[#0E6B4B] to-[#063b29] px-6 py-3 text-sm font-semibold tracking-[0.08em] text-white transition duration-300 hover:bg-[#0b573d]"
            >
              Book Free Consultation
            </a>
          )}
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-[#111111] lg:hidden"
        >
          {mobileOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 sm:px-6 lg:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium text-[#111111]">
            <Link
              href="/"
              className="transition duration-300 hover:text-[#D4AF37]"
              onClick={closeMobile}
            >
              Home
            </Link>

            <a
              href={isHome ? "#why-kenya" : "/#why-kenya"}
              className="transition duration-300 hover:text-[#D4AF37]"
              onClick={closeMobile}
            >
              Why Kenya
            </a>

            <Link
              href="/about"
              className="transition duration-300 hover:text-[#D4AF37]"
              onClick={closeMobile}
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="transition duration-300 hover:text-[#D4AF37]"
              onClick={closeMobile}
            >
              Contact
            </Link>

            {isHome ? (
              <a
                href="https://calendly.com/artejagrier-movetokenya/start-your-move-to-kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#0E6B4B] to-[#063b29] px-6 py-3 text-sm font-semibold tracking-[0.08em] text-white transition duration-300 hover:bg-[#0b573d]"
                onClick={closeMobile}
              >
                Book Free Consultation
              </a>
            ) : (
              <a
                href="/#consultation"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#0E6B4B] to-[#063b29] px-6 py-3 text-sm font-semibold tracking-[0.08em] text-white transition duration-300 hover:bg-[#0b573d]"
                onClick={closeMobile}
              >
                Book Free Consultation
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
