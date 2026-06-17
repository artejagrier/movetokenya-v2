"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import { useState } from "react";

const EVENTBRITE_URL =
  "https://www.eventbrite.com/e/welcome-to-the-cookout-exploring-life-opportunities-in-kenya-tickets-1991870594568?aff=oddtdtcreator";

const learnItems = [
  "How to relocate to Kenya step-by-step",
  "Housing, land, and real estate opportunities",
  "Starting and operating a business in Kenya",
  "Banking, M-Pesa, and managing finances",
  "Schools, family life, and healthcare options",
  "Investment opportunities and emerging markets",
  "Life in Diani, Nairobi, and other regions of Kenya",
  "Answers to your relocation questions in real time",
];

const highlights = [
  "Live Q&A Sessions",
  "Real Relocation Stories",
  "Business & Investment Opportunities",
  "Community Networking",
  "Kenya Lifestyle Discussions",
  "Weekly Guest Speakers",
];

function CookoutLineAccent() {
  return (
    <svg
      className="pointer-events-none absolute -left-[12%] -top-[8%] z-0 h-[116%] w-[124%] rotate-[18deg]"
      viewBox="0 0 420 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 60 C90 20 180 80 260 40 S380 70 410 30"
        stroke="#BB0000"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.22"
      />
      <path
        d="M30 140 Q130 100 220 160 T390 120"
        stroke="#006B3F"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.2"
      />
      <path
        d="M50 240 C120 200 200 260 290 220 S370 250 400 210"
        stroke="#000000"
        strokeWidth="1.75"
        strokeLinecap="round"
        opacity="0.14"
      />
      <path
        d="M20 340 Q110 300 200 360 T380 320"
        stroke="#BB0000"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.18"
      />
      <path
        d="M60 430 C150 390 240 450 330 410 S400 440 410 400"
        stroke="#006B3F"
        strokeWidth="2.25"
        strokeLinecap="round"
        opacity="0.16"
      />
      <path
        d="M80 90 C160 130 240 70 320 110"
        stroke="#000000"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.12"
      />
    </svg>
  );
}

export default function CookoutSection() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");

    try {
      const response = await fetch("/api/cookout-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setSuccessMessage(
        "You are registered! We will send your Google Meet details before the event."
      );
      setFormData({ first_name: "", last_name: "", email: "", phone: "" });
    } catch {
      alert("Something went wrong. Please try again or email artejagrier@movetokenya.org.");
    }

    setLoading(false);
  };

  const scrollToDetails = () => {
    document
      .getElementById("cookout-details")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="welcome-to-the-cookout" className="flow-section flow-section--soft">
      <FadeIn>
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative flex justify-center lg:justify-start">
              <CookoutLineAccent />
              <div className="relative z-10 w-full max-w-lg shadow-[0_24px_64px_rgba(0,0,0,0.1)]">
                <Image
                  src="/images/welcome-to-the-cookout-virtual-event.jpg"
                  alt="Welcome To The Cookout virtual event flyer"
                  width={800}
                  height={1000}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>

            <div>
              <p className="editorial-eyebrow mb-5">Free Weekly Virtual Event</p>
              <h2 className="editorial-headline mb-6">Welcome To The Cookout</h2>
              <p className="mb-8 text-lg font-medium leading-relaxed text-[#1a1a1a] sm:text-xl">
                Your Weekly Gateway to Life, Opportunity, and Community in Kenya
              </p>

              <div className="space-y-4 text-base leading-8 text-[#6b6b6b] sm:text-lg sm:leading-9">
                <p>Thinking about moving to Kenya but not sure where to start?</p>
                <p>
                  Welcome To The Cookout is a free weekly virtual gathering
                  created for members of the African Diaspora, future expats,
                  entrepreneurs, investors, retirees, families, and anyone
                  curious about building a life in Kenya.
                </p>
                <p>
                  Every Saturday, we come together online to discuss the real
                  side of relocation — from visas, housing, schools, healthcare,
                  banking, transportation, business opportunities, and investment
                  strategies to everyday life on the ground in Kenya.
                </p>
                <p>
                  Whether you&apos;re planning a move next month, next year, or
                  simply exploring your options, this community gives you direct
                  access to people who are already living, working, investing,
                  and thriving in Kenya.
                </p>
              </div>

              <div className="mt-10 flex w-full flex-col gap-4 sm:flex-row">
                <a
                  href={EVENTBRITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary sm:w-auto"
                >
                  Register Free
                </a>
                <button type="button" onClick={scrollToDetails} className="btn-secondary sm:w-auto">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div id="cookout-details" className="mt-20 scroll-mt-28 md:mt-28">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h3 className="section-title mb-8">What You&apos;ll Learn</h3>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {learnItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base leading-7 text-[#6b6b6b]">
                      <span className="mt-0.5 shrink-0 font-bold text-[#C8102E]">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="section-title mb-8">Why Attend?</h3>
                <div className="space-y-4 text-base leading-8 text-[#6b6b6b] sm:text-lg sm:leading-9">
                  <p>
                    Moving to another country is one of the biggest decisions
                    you&apos;ll ever make. Our goal is to make that journey
                    easier by connecting you with trusted resources, practical
                    information, and a growing community of people who share the
                    same vision.
                  </p>
                  <p>This isn&apos;t just another webinar.</p>
                  <p>
                    It&apos;s a movement of people exploring new opportunities,
                    building generational wealth, creating freedom, and
                    discovering what is possible when you expand your horizons
                    beyond borders.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="section-title mb-8">Highlights</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item} className="soft-card px-6 py-5">
                    <p className="font-semibold text-[#1a1a1a]">
                      <span className="mr-2 text-[#C8102E]">✓</span>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 soft-card bg-[#fafafa] p-8 md:p-10">
              <h3 className="mb-6 text-xl font-bold text-[#1a1a1a] sm:text-2xl">Event Details</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <p className="text-base font-medium text-[#6b6b6b] sm:text-lg">📅 Every Saturday</p>
                <p className="text-base font-medium text-[#6b6b6b] sm:text-lg">🕐 1:00 PM EST</p>
                <p className="text-base font-medium text-[#6b6b6b] sm:text-lg">🌍 Live on Google Meet</p>
                <p className="text-base font-semibold text-[#C8102E] sm:text-lg">🎟️ The First Event Is FREE</p>
              </div>
            </div>
          </div>

          <div id="cookout-register" className="mt-16 scroll-mt-28 soft-card bg-[#fafafa] p-8 md:mt-20 md:p-10">
            <p className="editorial-eyebrow mb-2">Free Registration</p>
            <h3 className="mb-2 text-2xl font-bold text-[#1a1a1a] sm:text-3xl">
              Register For Welcome To The Cookout
            </h3>
            <p className="mb-8 text-base leading-8 text-[#6b6b6b]">
              Reserve your spot for our free weekly virtual event. We will send
              your Google Meet link before each session.
            </p>

            {successMessage && (
              <div className="mb-6 rounded-2xl border border-[#C8102E]/20 bg-[#C8102E]/5 p-4 text-[#C8102E]">
                {successMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  required
                  value={formData.first_name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-[#1a1a1a] outline-none transition focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10"
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  required
                  value={formData.last_name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-[#1a1a1a] outline-none transition focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-[#1a1a1a] outline-none transition focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (optional)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-[#1a1a1a] outline-none transition focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10"
              />
              <a
                href={EVENTBRITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary sm:w-auto"
              >
                Register Free
              </a>
            </form>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
