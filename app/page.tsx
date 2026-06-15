"use client";

import CookoutSection from "@/components/CookoutSection";
import SiteHeader from "@/components/SiteHeader";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/nairobi-skyline.jpg",
    title: "Your Journey to Kenya Starts Here",
    subtitle:
      "Guidance and support for individuals and families preparing for a new chapter abroad.",
  },
  {
    image: "/images/diani-beach-sunrise.jpg",
    title: "Discover Peace, Culture, and Opportunity",
    subtitle:
      "Explore a lifestyle rooted in connection, community, and possibility.",
  },
  {
    image: "/images/kenya-safari-drive.jpg",
    title: "Experience The Beauty Of Kenya",
    subtitle:
      "From unforgettable safaris to breathtaking landscapes, Kenya offers adventure and peace together.",
  },
  {
    image: "/images/diani-resort-sunset.jpg",
    title: "Luxury Coastal Living",
    subtitle:
      "Enjoy beautiful resorts, ocean views, and a slower, more connected lifestyle abroad.",
  },
  {
    image: "/images/luxury-coastal-resort.jpg",
    title: "A Fresh Start Awaits",
    subtitle:
      "Start exploring what life in Kenya could look like for you and your family.",
  },
  {
    image: "/images/modern-kenya-market.jpg",
    title: "Modern Convenience Meets Culture",
    subtitle:
      "Enjoy modern shopping, fresh markets, and everyday essentials while embracing Kenyan culture.",
  },
  {
    image: "/images/nairobi-luxury-mall.jpg",
    title: "Modern City Life",
    subtitle:
      "Kenya offers modern infrastructure, luxury shopping, restaurants, and growing business opportunities.",
  },
  {
    image: "/images/nairobi-parliament.jpg",
    title: "A Growing Nation Full Of Opportunity",
    subtitle:
      "Kenya continues to grow with expanding infrastructure, innovation, and international connections.",
  },
  {
    image: "/images/kenya-safari-sunset.jpg",
    title: "Reconnect With Nature",
    subtitle:
      "Experience unforgettable wildlife, open landscapes, and breathtaking sunsets across Kenya.",
  },
  {
    image: "/images/cave-restaurant-kenya.jpg",
    title: "Unique Experiences Await",
    subtitle:
      "From luxury dining to hidden destinations, Kenya offers experiences unlike anywhere else.",
  },
  {
    image: "/images/mountain-peak-kenya.jpg",
    title: "Adventure Beyond The Ordinary",
    subtitle:
      "Explore mountain peaks, hiking adventures, and stunning views throughout Kenya.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [formData, setFormData] = useState({
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  location: "",
  passport_status: "",
  move_timeline: "",
  interest_type: "",
  moving_with: "",
  questions: "",
});

const [loading, setLoading] = useState(false);
const [successMessage, setSuccessMessage] = useState("");
const [showCalendlySuccess, setShowCalendlySuccess] = useState(false);

const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);

  try {
    const response = await fetch("/api/consultation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Something went wrong.");
    }

    setSuccessMessage(
      "Your consultation request has been submitted successfully."
    );

    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      location: "",
      passport_status: "",
      move_timeline: "",
      interest_type: "",
      moving_with: "",
      questions: "",
    });
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  }

  setLoading(false);
};

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("booked") === "true") {
      setShowCalendlySuccess(true);

      setTimeout(() => {
        setShowCalendlySuccess(false);
      }, 9000);
    }
  }, []);

  return (
    <main className="overflow-x-hidden bg-white text-[#111111]">
      <SiteHeader />

      {showCalendlySuccess && (
        <div className="fixed left-4 right-4 top-32 z-[100] max-w-md rounded-[2rem] border border-[#D4AF37]/30 bg-white p-5 shadow-[0_25px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:left-auto sm:right-6 sm:top-36 sm:p-6">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0E6B4B] text-2xl text-white">
            ✓
          </div>
          <h4 className="mb-3 text-2xl font-bold text-[#111111]">
            Consultation Request Received
          </h4>
          <p className="leading-8 text-gray-600">
            Thank you for scheduling your consultation with Move To Kenya.
            Our team will reach out within 24 hours.
            Please keep a lookout for your meeting preparation email with additional information and next steps.
          </p>
        </div>
      )}
      
      <section className="relative min-h-[calc(100svh-7.25rem)] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/45" />
          </div>
        ))}

        <div className="relative z-10 flex min-h-[calc(100svh-7.25rem)] items-center px-4 py-16 sm:px-6 md:px-12">
          <div className="max-w-3xl text-white">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-green-300 sm:mb-4 sm:text-sm sm:tracking-[0.3em]">
              Free Relocation Guidance & Support
            </p>

            <h2 className="mb-4 text-3xl font-bold leading-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-7xl">
              {slides[currentSlide].title}
            </h2>

            <p className="mb-6 max-w-2xl text-base leading-7 text-gray-200 sm:mb-8 sm:text-lg sm:leading-8 md:text-xl">
              {slides[currentSlide].subtitle}
            </p>

            <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:gap-4">
              <a
                href="https://calendly.com/artejagrier-movetokenya/start-your-move-to-kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#0E6B4B] px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#0b573d] sm:px-8 sm:py-4"
              >
                Book Your Free Consultation
              </a>

              <a
                href="#why-kenya"
                className="rounded-full border border-white/50 px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-black sm:px-8 sm:py-4"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 z-20 flex max-w-[calc(100%-2rem)] -translate-x-1/2 flex-wrap justify-center gap-2 sm:bottom-8 sm:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 w-2.5 shrink-0 rounded-full border transition-all duration-500 sm:h-3 sm:w-3 ${
                currentSlide === index
                  ? index % 3 === 0
                    ? "w-6 border-[#0E6B4B] bg-[#0E6B4B] sm:w-10"
                    : index % 3 === 1
                      ? "w-6 border-[#C62828] bg-[#C62828] sm:w-10"
                      : "w-6 border-white bg-black sm:w-10"
                  : "border-white/30 bg-white/60"
              }`}
            />
          ))}
        </div>
      </section>

      <CookoutSection />

      <section className="bg-white px-4 py-16 text-[#111111] sm:px-6 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 max-w-4xl md:mb-20">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Luxury Living Potential
            </p>

            <h3 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:mb-8 md:text-5xl lg:text-7xl">
              Your USD Goes Further In Kenya
            </h3>

            <p className="max-w-3xl text-base leading-8 text-gray-600 sm:text-lg md:text-xl md:leading-10">
              Many people are shocked when they realize how far remote income,
              retirement income, or U.S. dollars can stretch in Kenya. From luxury
              apartments and oceanfront living to private transportation, dining,
              domestic help, and unforgettable experiences — your lifestyle options
              can expand dramatically.
            </p>
          </div>

          <div className="mb-12 rounded-[2rem] border border-gray-200 bg-[#F8F6F2] p-6 shadow-2xl sm:p-8 md:mb-16 md:p-10">

            <div className="mb-8 flex flex-col gap-6 sm:mb-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
              <div>
                <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                  Live Currency Estimate
                </p>

                <h4 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                  $1,000 USD
                </h4>
              </div>

              <div className="sm:text-right">
                <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                  Estimated Kenyan Value
                </p>

                <h4 className="text-3xl font-bold text-[#D4AF37] sm:text-4xl md:text-5xl">
                  KSh 129,000+
                </h4>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-3xl border border-[#222] bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
                  Luxury Apartment
                </p>

                <h5 className="mb-3 text-3xl font-bold text-[#111111]">
                  KSh 45K–85K
                </h5>

                <p className="leading-7 text-gray-500">
                  Modern apartments in Nairobi with security, amenities, and upscale finishes.
                </p>
              </div>

              <div className="rounded-3xl border border-[#222] bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
                  Private Driver / Uber
                </p>

                <h5 className="mb-3 text-3xl font-bold text-[#111111]">
                  Affordable Daily
                </h5>

                <p className="leading-7 text-gray-500">
                  Transportation costs are often dramatically lower compared to major U.S. cities.
                </p>
              </div>

              <div className="rounded-3xl border border-[#222] bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
                  Coastal Lifestyle
                </p>

                <h5 className="mb-3 text-3xl font-bold text-[#111111]">
                  Diani & Mombasa
                </h5>

                <p className="leading-7 text-gray-500">
                  Oceanfront experiences, resorts, beaches, and luxury escapes become more accessible.
                </p>
              </div>

              <div className="rounded-3xl border border-[#222] bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
                  Dining & Experiences
                </p>

                <h5 className="mb-3 text-3xl font-bold text-[#111111]">
                  Elevated Living
                </h5>

                <p className="leading-7 text-gray-500">
                  Enjoy restaurants, nightlife, safari experiences, cafés, and entertainment at lower costs.
                </p>
              </div>

            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">

            <div className="rounded-[2rem] border border-[#1E1E1E] bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                Remote Workers
              </p>

              <h4 className="mb-6 text-3xl font-bold text-[#111111]">
                Keep Your USD Income
              </h4>

              <p className="leading-8 text-gray-500">
                Many digital nomads and remote workers discover they can maintain a
                higher quality lifestyle while working remotely abroad.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#1E1E1E] bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                Families
              </p>

              <h4 className="mb-6 text-3xl font-bold text-[#111111]">
                Slower, Connected Living
              </h4>

              <p className="leading-8 text-gray-500">
                Many families are drawn to stronger community culture, family-centered
                lifestyles, and new educational opportunities abroad.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#1E1E1E] bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                Entrepreneurs
              </p>

              <h4 className="mb-6 text-3xl font-bold text-[#111111]">
                Expanding Opportunity
              </h4>

              <p className="leading-8 text-gray-500">
                Kenya continues to grow rapidly with expanding infrastructure,
                international business, tourism, and innovation sectors.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="bg-[#111111] px-4 py-16 text-white sm:px-6 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center md:mb-20">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Relocation Journey
            </p>

            <h3 className="mb-4 text-3xl font-bold sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
              How We Help You Move To Kenya
            </h3>

            <p className="mx-auto max-w-4xl text-base leading-8 text-gray-300 sm:text-lg md:text-xl md:leading-10">
              We meet with you throughout the relocation process as many times as needed,
              helping guide you step-by-step toward your move to Kenya with clarity,
              planning, and support.
            </p>
          </div>

          <div className="space-y-10">

            <div className="flex flex-col gap-6 rounded-[2rem] border border-[#222] bg-[#181818] p-6 sm:gap-8 sm:p-8 md:p-10 lg:flex-row lg:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#0E6B4B] text-2xl font-bold text-white sm:h-20 sm:w-20 sm:text-3xl">
                1
              </div>

              <div>
                <h4 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl">
                  Discovery Consultation
                </h4>

                <p className="text-base leading-8 text-gray-300 sm:text-lg sm:leading-9">
                  We begin by understanding your goals, lifestyle preferences,
                  budget, family needs, business interests, and long-term vision
                  for relocating to Kenya.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 rounded-[2rem] border border-[#222] bg-[#0E6B4B] p-6 sm:gap-8 sm:p-8 md:p-10 lg:flex-row lg:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-2xl font-bold text-[#0E6B4B] sm:h-20 sm:w-20 sm:text-3xl">
                2
              </div>

              <div>
                <h4 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl">
                  Build Your Relocation Plan
                </h4>

                <p className="text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
                  We discuss your ideal relocation timeline and determine whether
                  you are interested in renting, purchasing a home or condo,
                  securing land for future development, or investing in property opportunities.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 rounded-[2rem] border border-[#222] bg-[#181818] p-6 sm:gap-8 sm:p-8 md:p-10 lg:flex-row lg:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#C62828] text-2xl font-bold text-white sm:h-20 sm:w-20 sm:text-3xl">
                3
              </div>

              <div>
                <h4 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl">
                  Documentation & Travel Preparation
                </h4>

                <p className="text-base leading-8 text-gray-300 sm:text-lg sm:leading-9">
                  We help guide you through preparing for travel, including ETA/visa
                  guidance, passport readiness, budgeting, housing preparation,
                  transportation planning, and understanding what documents may be needed.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 rounded-[2rem] border border-[#222] bg-[#181818] p-6 sm:gap-8 sm:p-8 md:p-10 lg:flex-row lg:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] text-2xl font-bold text-black sm:h-20 sm:w-20 sm:text-3xl">
                4
              </div>

              <div>
                <h4 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl">
                  Transition & Arrival
                </h4>

                <p className="text-base leading-8 text-gray-300 sm:text-lg sm:leading-9">
                  As your move approaches, we continue helping you prepare for your transition,
                  arrival experience, temporary accommodations if needed, transportation,
                  and adjusting to life in Kenya.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#0E6B4B] bg-gradient-to-r from-[#0E6B4B] to-[#063b29] p-6 text-center shadow-2xl sm:p-8 md:p-12">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                Final Step
              </p>

              <h3 className="mb-4 text-3xl font-bold text-white sm:mb-6 sm:text-4xl md:text-5xl">
                You’re On Your Way To Kenya
              </h3>

              <p className="mx-auto max-w-3xl text-base leading-8 text-white/80 sm:text-lg md:text-xl md:leading-10">
                Whether you are preparing for a scouting trip, temporary relocation,
                retirement abroad, business opportunities, or a permanent move —
                our goal is to help make your transition smoother, clearer, and more organized.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section
        id="consultation"
        className="relative overflow-hidden bg-gradient-to-br from-[#FFF9EE] via-white to-[#F5E7BE] px-4 py-16 sm:px-6 md:px-12 md:py-28"
      >
        <div className="absolute left-[-120px] top-20 h-[320px] w-[320px] rounded-full bg-[#D4AF37]/20 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-80px] h-[280px] w-[280px] rounded-full bg-[#C62828]/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="pt-0 lg:pt-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#B88A28]">
              Consultation Request
            </p>

            <h3 className="mb-6 max-w-2xl text-3xl font-bold leading-[1.05] text-[#111111] sm:text-4xl md:mb-8 md:text-5xl lg:text-7xl">
              Book Your Free Consultation
            </h3>

            <p className="max-w-xl text-base leading-8 text-gray-600 sm:text-lg md:text-xl md:leading-10">
              Schedule a free consultation to discuss your relocation goals, lifestyle interests, and next steps for moving to Kenya. Our team will guide you through the early planning process and help you understand what to expect.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#E7D6A8] bg-white/95 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:p-8 md:p-10 lg:mt-6">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#D4AF37]/10 blur-3xl" />
            <div className="space-y-6 sm:space-y-8">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                <div className="rounded-3xl border border-gray-100 bg-gradient-to-br from-[#FFF8E7] to-white p-6 transition hover:-translate-y-2 hover:shadow-xl">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0E6B4B] text-xl font-bold text-white">
                    1
                  </div>

                  <h4 className="mb-3 text-2xl font-semibold text-[#111111]">
                    Book Free Consultation
                  </h4>

                  <p className="leading-7 text-gray-600">
                    Select your preferred date and time directly through our consultation booking calendar.
                  </p>
                </div>

                <div className="rounded-3xl border border-gray-100 bg-gradient-to-br from-[#D4AF37] to-[#B88A28] p-6 text-white transition hover:-translate-y-2 hover:shadow-xl">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#C62828] text-xl font-bold text-white">
                    2
                  </div>

                  <h4 className="mb-3 text-2xl font-semibold text-white">
                    Receive Confirmation
                  </h4>

                  <p className="leading-7 text-white/90">
                    We will send you a confirmation email with your consultation details and next steps.
                  </p>
                </div>

                <div className="rounded-3xl border border-gray-100 bg-gradient-to-br from-[#111111] to-[#1D1D1D] p-6 text-white transition hover:-translate-y-2 hover:shadow-xl">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-xl font-bold text-[#D4AF37]">
                    3
                  </div>

                  <h4 className="mb-3 text-2xl font-semibold text-white">
                    Begin Planning
                  </h4>

                  <p className="leading-7 text-white/80">
                    Prepare for your consultation and review our future pre-qualification page to understand what you may need before moving to Kenya.
                  </p>
                </div>

              </div>

              <div className="rounded-[2.5rem] border border-[#E8D6A4] bg-gradient-to-br from-[#FFFDF8] to-[#F9F1DA] p-6 text-center shadow-[0_25px_80px_rgba(0,0,0,0.10)] sm:p-8 md:p-12">

                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                  Free Relocation Consultation
                </p>

                <h3 className="mb-4 text-2xl font-bold text-[#111111] sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
                  Ready To Explore Your Move To Kenya?
                </h3>

                <p className="mx-auto mb-8 max-w-3xl text-base leading-8 text-gray-600 sm:mb-10 sm:text-lg sm:leading-9">
                  Book a free consultation and speak with our team about relocation guidance, lifestyle planning, remote work opportunities, and preparing for your transition abroad.
                </p>

                <a
                  href="https://calendly.com/artejagrier-movetokenya/start-your-move-to-kenya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full max-w-full items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B88A28] px-6 py-4 text-sm font-semibold tracking-[0.15em] text-black shadow-xl transition duration-300 hover:scale-105 sm:w-auto sm:px-12 sm:py-5"
                >
                  Book Your Free Consultation
                </a>

                <p className="mt-6 text-sm leading-7 text-gray-500">
                  You will be able to choose your preferred day and time directly through our scheduling calendar.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="why-kenya"
        className="relative overflow-hidden bg-[#F8F6F2] px-4 py-16 sm:px-6 md:px-12 md:py-28"
      >
        <div className="absolute left-[-120px] top-10 h-[280px] w-[280px] rounded-full bg-[#0E6B4B]/10 blur-3xl" />
        <div className="absolute bottom-[-80px] right-[-80px] h-[260px] w-[260px] rounded-full bg-[#D4AF37]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="mb-12 max-w-4xl md:mb-20">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#B88A28]">
              Why Kenya
            </p>

            <h3 className="mb-6 text-3xl font-bold leading-tight text-[#111111] sm:text-4xl md:mb-8 md:text-5xl lg:text-7xl">
              A Different Pace Of Life.
              <br />
              A Different Kind Of Opportunity.
            </h3>

            <p className="max-w-3xl text-base leading-8 text-gray-600 sm:text-lg md:text-xl md:leading-10">
              Kenya continues to attract remote workers, entrepreneurs, retirees,
              investors, families, and individuals seeking a lifestyle rooted in
              community, modern convenience, natural beauty, and greater flexibility.
              From luxury city living in Nairobi to peaceful coastal life in Diani,
              Kenya offers experiences and opportunities that feel both refreshing and transformational.
            </p>
          </div>

          <div className="mb-12 grid gap-6 md:mb-20 md:gap-8 lg:grid-cols-3">

            <div className="rounded-[2.5rem] border border-[#E5E5E5] bg-white p-6 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8 md:p-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#0E6B4B] text-2xl text-white">
                🌍
              </div>

              <h4 className="mb-4 text-2xl font-bold text-[#111111] sm:mb-6 sm:text-3xl">
                Lower Cost Of Living
              </h4>

              <p className="leading-8 text-gray-600 sm:leading-9">
                Many people relocating from the U.S. discover they can access more spacious housing,
                dining, transportation, domestic assistance, and lifestyle experiences at significantly lower costs depending on location.
              </p>
            </div>

            <div className="rounded-[2.5rem] border border-[#E5E5E5] bg-gradient-to-br from-[#111111] to-[#1A1A1A] p-6 text-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8 md:p-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37] text-2xl text-black">
                ✈️
              </div>

              <h4 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">
                International Lifestyle
              </h4>

              <p className="leading-8 text-gray-300 sm:leading-9">
                Kenya offers modern malls, luxury apartments, resorts, airports,
                restaurants, coworking spaces, and expanding infrastructure while still maintaining strong culture and community.
              </p>
            </div>

            <div className="rounded-[2.5rem] border border-[#E5E5E5] bg-white p-6 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8 md:p-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#C62828] text-2xl text-white">
                🌴
              </div>

              <h4 className="mb-4 text-2xl font-bold text-[#111111] sm:mb-6 sm:text-3xl">
                Coastal & Nature Living
              </h4>

              <p className="leading-8 text-gray-600 sm:leading-9">
                From Diani Beach and Mombasa to safari destinations and mountain landscapes,
                Kenya offers beautiful scenery, warm weather, wildlife, and unforgettable experiences year-round.
              </p>
            </div>

          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">

            <div className="rounded-[2.5rem] border border-[#E5D4A4] bg-gradient-to-br from-[#FFFDF8] to-[#F7EFD6] p-6 shadow-2xl sm:p-8 md:p-12">

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A28]">
                Remote Work & Entrepreneurship
              </p>

              <h4 className="mb-6 text-3xl font-bold leading-tight text-[#111111] sm:mb-8 sm:text-4xl md:text-5xl">
                Build While Living Better
              </h4>

              <p className="mb-6 text-base leading-8 text-gray-700 sm:mb-8 sm:text-lg md:text-xl md:leading-10">
                Many digital entrepreneurs, creators, consultants, and remote workers are exploring Kenya while continuing to work online internationally.
                The combination of lower living expenses, growing infrastructure, and access to modern conveniences creates new possibilities for lifestyle and business.
              </p>

              <div className="grid gap-6 md:grid-cols-2">

                <div className="rounded-3xl bg-white p-6 shadow-lg">
                  <h5 className="mb-3 text-2xl font-bold text-[#111111]">
                    Modern Infrastructure
                  </h5>

                  <p className="leading-8 text-gray-600">
                    Kenya continues expanding with modern roads, shopping centers, banking systems, internet access, and growing business sectors.
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-lg">
                  <h5 className="mb-3 text-2xl font-bold text-[#111111]">
                    Flexible Lifestyle
                  </h5>

                  <p className="leading-8 text-gray-600">
                    Many people enjoy slower living, greater flexibility, family-centered culture, and the ability to experience more while spending less.
                  </p>
                </div>

              </div>
            </div>

            <div className="rounded-[2.5rem] bg-[#111111] p-6 text-white shadow-2xl sm:p-8 md:p-12">

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                What People Love
              </p>

              <div className="space-y-8">

                <div className="border-b border-white/10 pb-6">
                  <h5 className="mb-3 text-2xl font-bold">
                    Strong Community Culture
                  </h5>

                  <p className="leading-8 text-gray-400">
                    Kenya is known for hospitality, community connection, and relationship-centered living.
                  </p>
                </div>

                <div className="border-b border-white/10 pb-6">
                  <h5 className="mb-3 text-2xl font-bold">
                    Beautiful Weather
                  </h5>

                  <p className="leading-8 text-gray-400">
                    Many areas of Kenya experience warm weather year-round with beautiful coastal and highland climates.
                  </p>
                </div>

                <div className="border-b border-white/10 pb-6">
                  <h5 className="mb-3 text-2xl font-bold">
                    Modern + Cultural Balance
                  </h5>

                  <p className="leading-8 text-gray-400">
                    Kenya blends modern convenience with strong traditions, creating a unique international experience.
                  </p>
                </div>

                <div>
                  <h5 className="mb-3 text-2xl font-bold">
                    Adventure & Exploration
                  </h5>

                  <p className="leading-8 text-gray-400">
                    Safaris, beaches, hiking, resorts, restaurants, nightlife, and travel opportunities create unforgettable experiences.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      <footer
        id="contact"
        className="bg-[#111111] px-4 py-10 text-center text-white sm:px-6 md:px-12 md:py-12"
      >
        <h4 className="mb-4 text-xl font-bold sm:text-2xl">MoveToKenya.org</h4>

        <p className="mb-6 text-sm leading-7 text-gray-400 sm:text-base">
          Relocation guidance and consultation support for individuals and
          families preparing to move to Kenya.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 sm:gap-6">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="/contact">Contact</a>
        </div>
      </footer>
    </main>
  );
}