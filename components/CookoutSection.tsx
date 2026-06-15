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

export default function CookoutSection() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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
    <section
      id="welcome-to-the-cookout"
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-28"
    >
      <FadeIn>
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-lg overflow-hidden rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.12)] transition duration-300 hover:shadow-[0_30px_70px_rgba(0,0,0,0.16)]">
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
              <p className="mb-4 inline-block rounded-full bg-[#0E6B4B]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#0E6B4B] sm:text-sm">
                Free Weekly Virtual Event
              </p>

              <h2 className="mb-4 text-3xl font-bold leading-tight text-[#111111] sm:text-4xl md:text-5xl">
                Welcome To The Cookout
              </h2>

              <p className="mb-6 text-lg font-medium leading-relaxed text-[#0E6B4B] sm:text-xl">
                Your Weekly Gateway to Life, Opportunity, and Community in Kenya
              </p>

              <div className="space-y-4 text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">
                <p>
                  Thinking about moving to Kenya but not sure where to start?
                </p>

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

              <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  href={EVENTBRITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#0E6B4B] px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#0b573d] sm:w-auto"
                >
                  Register Free
                </a>

                <button
                  type="button"
                  onClick={scrollToDetails}
                  className="inline-flex w-full items-center justify-center rounded-full border-2 border-[#0E6B4B] px-8 py-4 text-sm font-semibold text-[#0E6B4B] transition duration-300 hover:bg-[#0E6B4B] hover:text-white sm:w-auto"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div id="cookout-details" className="mt-16 scroll-mt-28 md:mt-24">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h3 className="mb-6 text-2xl font-bold text-[#111111] sm:text-3xl">
                  What You&apos;ll Learn
                </h3>

                <ul className="grid gap-3 sm:grid-cols-2">
                  {learnItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-base leading-7 text-gray-600"
                    >
                      <span className="mt-0.5 shrink-0 font-bold text-[#0E6B4B]">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-6 text-2xl font-bold text-[#111111] sm:text-3xl">
                  Why Attend?
                </h3>

                <div className="space-y-4 text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">
                  <p>
                    Moving to another country is one of the biggest decisions
                    you&apos;ll ever make. Our goal is to make that journey
                    easier by connecting you with trusted resources, practical
                    information, and a growing community of people who share the
                    same vision.
                  </p>

                  <p>
                    This isn&apos;t just another webinar.
                  </p>

                  <p>
                    It&apos;s a movement of people exploring new opportunities,
                    building generational wealth, creating freedom, and
                    discovering what is possible when you expand your horizons
                    beyond borders.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="mb-6 text-2xl font-bold text-[#111111] sm:text-3xl">
                Highlights
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-gray-200 bg-[#F8F6F2] px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-[#0E6B4B]/30 hover:shadow-md"
                  >
                    <p className="font-semibold text-[#111111]">
                      <span className="mr-2 text-[#0E6B4B]">✓</span>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-3xl border border-[#0E6B4B]/20 bg-gradient-to-br from-[#F0FDF4] to-white p-6 shadow-lg sm:p-8 md:p-10">
              <h3 className="mb-6 text-xl font-bold text-[#111111] sm:text-2xl">
                Event Details
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <p className="text-base font-medium text-gray-700 sm:text-lg">
                  📅 Every Saturday
                </p>
                <p className="text-base font-medium text-gray-700 sm:text-lg">
                  🕐 1:00 PM EST
                </p>
                <p className="text-base font-medium text-gray-700 sm:text-lg">
                  🌍 Live on Google Meet
                </p>
                <p className="text-base font-semibold text-[#0E6B4B] sm:text-lg">
                  🎟️ The First Event Is FREE
                </p>
              </div>
            </div>
          </div>

          <div
            id="cookout-register"
            className="mt-16 scroll-mt-28 rounded-3xl border border-gray-200 bg-[#F8F6F2] p-6 shadow-xl sm:p-8 md:mt-20 md:p-10"
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Free Registration
            </p>

            <h3 className="mb-2 text-2xl font-bold text-[#111111] sm:text-3xl">
              Register For Welcome To The Cookout
            </h3>

            <p className="mb-8 text-base leading-8 text-gray-600">
              Reserve your spot for our free weekly virtual event. We will send
              your Google Meet link before each session.
            </p>

            {successMessage && (
              <div className="mb-6 rounded-2xl border border-[#0E6B4B]/30 bg-[#0E6B4B]/10 p-4 text-[#0E6B4B]">
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
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[#111111] outline-none transition focus:border-[#0E6B4B]"
                />

                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  required
                  value={formData.last_name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[#111111] outline-none transition focus:border-[#0E6B4B]"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[#111111] outline-none transition focus:border-[#0E6B4B]"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (optional)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[#111111] outline-none transition focus:border-[#0E6B4B]"
              />

              <a
                href={EVENTBRITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#0E6B4B] to-[#063b29] px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#0b573d] sm:w-auto"
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
