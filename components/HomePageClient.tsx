"use client";

import Image from "next/image";
import CookoutSection from "@/components/CookoutSection";
import ConsultationSection from "@/components/ConsultationSection";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import WaveDivider from "@/components/WaveDivider";
import WhyKenyaSection from "@/components/WhyKenyaSection";
import { useEffect, useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";

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

export default function HomePageClient({
  kenyaDailyPreview,
}: {
  kenyaDailyPreview?: ReactNode;
}) {
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
const searchParams = useSearchParams();
const bookedFromUrl = searchParams.get("booked") === "true";
const [dismissedCalendlySuccess, setDismissedCalendlySuccess] = useState(false);
const showCalendlySuccess = bookedFromUrl && !dismissedCalendlySuccess;

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
    if (!bookedFromUrl) return;

    const timer = setTimeout(() => {
      setDismissedCalendlySuccess(true);
    }, 9000);

    return () => clearTimeout(timer);
  }, [bookedFromUrl]);

  return (
    <main className="overflow-x-hidden bg-white text-[#111111]">
      <SiteHeader />

      {showCalendlySuccess && (
        <div className="fixed left-4 right-4 top-32 z-[100] max-w-md rounded-2xl border border-[#C8102E]/20 bg-white p-5 shadow-[0_25px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:left-auto sm:right-6 sm:top-36 sm:p-6">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#C8102E] text-2xl text-white">
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
      
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-slate-700 sm:text-base">
              MoveToKenya.org
            </p>

            <h1 className="mb-6 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {slides[currentSlide].title}
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              {slides[currentSlide].subtitle}
            </p>

            <p className="mx-auto mb-6 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              Book a free consultation or register your business interest today — clear guidance for your move to Kenya.
            </p>

            <div className="mx-auto flex max-w-md flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://calendly.com/artejagrier-movetokenya/start-your-move-to-kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center sm:w-auto"
              >
                Start Your Move To Kenya (Free Consultation)
              </a>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScIWIuEBG2eaa_jEgDcCDNlIyaq0a-imgeY7PcQRqrSmAuoNw/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full border border-transparent bg-[#15803D] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#166534] sm:w-auto"
              >
                Diani Business Registration
              </a>
            </div>
          </div>

          <div className="mt-12 sm:mt-14">
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-[16/9] min-h-[260px] sm:min-h-[320px]">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                      currentSlide === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      priority={index === 0}
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-200 bg-white px-4 py-4 sm:px-6">
                <div className="mx-auto flex w-full max-w-xs items-center justify-center gap-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? "w-10 bg-[#C8102E]"
                          : "w-2.5 bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CookoutSection />

      {kenyaDailyPreview}

      <section className="flow-section flow-section--warm">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-4xl md:mb-20">
            <p className="editorial-eyebrow mb-5">Luxury Living Potential</p>
            <h3 className="editorial-headline mb-8">Your USD Goes Further In Kenya</h3>
            <p className="editorial-subhead max-w-3xl">
              Many people are shocked when they realize how far remote income,
              retirement income, or U.S. dollars can stretch in Kenya. From luxury
              apartments and oceanfront living to private transportation, dining,
              domestic help, and unforgettable experiences — your lifestyle options
              can expand dramatically.
            </p>
          </div>

          <div className="mb-16 rounded-3xl bg-white p-8 shadow-[0_8px_48px_rgba(0,0,0,0.04)] sm:p-10 md:mb-20 md:p-14">
            <div className="mb-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="stat-label mb-2">Live Currency Estimate</p>
                <p className="stat-value text-[#1a1a1a]">$1,000 USD</p>
              </div>
              <div className="sm:text-right">
                <p className="stat-label mb-2">Estimated Kenyan Value</p>
                <p className="stat-value">KSh 129,000+</p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="soft-card p-6">
                <p className="editorial-eyebrow mb-3">Luxury Apartment</p>
                <h5 className="mb-3 text-2xl font-bold text-[#1a1a1a]">KSh 45K–85K</h5>
                <p className="text-sm leading-7 text-[#6b6b6b]">
                  Modern apartments in Nairobi with security, amenities, and upscale finishes.
                </p>
              </div>
              <div className="soft-card p-6">
                <p className="editorial-eyebrow mb-3">Private Driver / Uber</p>
                <h5 className="mb-3 text-2xl font-bold text-[#1a1a1a]">Affordable Daily</h5>
                <p className="text-sm leading-7 text-[#6b6b6b]">
                  Transportation costs are often dramatically lower compared to major U.S. cities.
                </p>
              </div>
              <div className="soft-card p-6">
                <p className="editorial-eyebrow mb-3">Coastal Lifestyle</p>
                <h5 className="mb-3 text-2xl font-bold text-[#1a1a1a]">Diani & Mombasa</h5>
                <p className="text-sm leading-7 text-[#6b6b6b]">
                  Oceanfront experiences, resorts, beaches, and luxury escapes become more accessible.
                </p>
              </div>
              <div className="soft-card p-6">
                <p className="editorial-eyebrow mb-3">Dining & Experiences</p>
                <h5 className="mb-3 text-2xl font-bold text-[#1a1a1a]">Elevated Living</h5>
                <p className="text-sm leading-7 text-[#6b6b6b]">
                  Enjoy restaurants, nightlife, safari experiences, cafés, and entertainment at lower costs.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="soft-card p-8">
              <p className="editorial-eyebrow mb-4">Remote Workers</p>
              <h4 className="mb-4 text-2xl font-bold text-[#1a1a1a]">Keep Your USD Income</h4>
              <p className="leading-8 text-[#6b6b6b]">
                Many digital nomads and remote workers discover they can maintain a
                higher quality lifestyle while working remotely abroad.
              </p>
            </div>
            <div className="soft-card p-8">
              <p className="editorial-eyebrow mb-4">Families</p>
              <h4 className="mb-4 text-2xl font-bold text-[#1a1a1a]">Slower, Connected Living</h4>
              <p className="leading-8 text-[#6b6b6b]">
                Many families are drawn to stronger community culture, family-centered
                lifestyles, and new educational opportunities abroad.
              </p>
            </div>
            <div className="soft-card p-8">
              <p className="editorial-eyebrow mb-4">Entrepreneurs</p>
              <h4 className="mb-4 text-2xl font-bold text-[#1a1a1a]">Expanding Opportunity</h4>
              <p className="leading-8 text-[#6b6b6b]">
                Kenya continues to grow rapidly with expanding infrastructure,
                international business, tourism, and innovation sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-surface relative overflow-hidden bg-[#1a1a1a] px-4 py-20 text-white sm:px-6 md:px-12 md:py-28">
        <div className="organic-blob -right-20 top-0 h-80 w-80 bg-[#C8102E]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-16 text-center md:mb-20">
            <p className="editorial-eyebrow mb-5">Relocation Journey</p>
            <h3 className="editorial-headline mb-6 text-[#FFFFFF]">How We Help You Move To Kenya</h3>
            <p className="editorial-subhead mx-auto max-w-3xl text-[#FFFFFF]">
              We meet with you throughout the relocation process as many times as needed,
              helping guide you step-by-step toward your move to Kenya with clarity,
              planning, and support.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col gap-6 rounded-2xl bg-white/5 p-8 backdrop-blur-sm lg:flex-row lg:items-center lg:gap-10">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#C8102E] text-xl font-bold text-white">1</div>
              <div>
                <h4 className="mb-3 text-xl font-bold text-[#FFFFFF] sm:text-2xl">Discovery Consultation</h4>
                <p className="leading-8 text-[#FFFFFF]">
                  We begin by understanding your goals, lifestyle preferences,
                  budget, family needs, business interests, and long-term vision
                  for relocating to Kenya.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-2xl bg-[#C8102E]/90 p-8 lg:flex-row lg:items-center lg:gap-10">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-xl font-bold text-[#C8102E]">2</div>
              <div>
                <h4 className="mb-3 text-xl font-bold text-[#FFFFFF] sm:text-2xl">Build Your Relocation Plan</h4>
                <p className="leading-8 text-[#FFFFFF]">
                  We discuss your ideal relocation timeline and determine whether
                  you are interested in renting, purchasing a home or condo,
                  securing land for future development, or investing in property opportunities.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-2xl bg-white/5 p-8 backdrop-blur-sm lg:flex-row lg:items-center lg:gap-10">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#C8102E] text-xl font-bold text-white">3</div>
              <div>
                <h4 className="mb-3 text-xl font-bold text-[#FFFFFF] sm:text-2xl">Documentation & Travel Preparation</h4>
                <p className="leading-8 text-[#FFFFFF]">
                  We help guide you through preparing for travel, including ETA/visa
                  guidance, passport readiness, budgeting, housing preparation,
                  transportation planning, and understanding what documents may be needed.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-2xl bg-white/5 p-8 backdrop-blur-sm lg:flex-row lg:items-center lg:gap-10">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#C8102E] text-xl font-bold text-white">4</div>
              <div>
                <h4 className="mb-3 text-xl font-bold text-[#FFFFFF] sm:text-2xl">Transition & Arrival</h4>
                <p className="leading-8 text-[#FFFFFF]">
                  As your move approaches, we continue helping you prepare for your transition,
                  arrival experience, temporary accommodations if needed, transportation,
                  and adjusting to life in Kenya.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-10 text-center md:p-14">
              <p className="editorial-eyebrow mb-4">Final Step</p>
              <h3 className="section-title mb-4 text-[#1a1a1a]">You&apos;re On Your Way To Kenya</h3>
              <p className="editorial-subhead mx-auto max-w-3xl">
                Whether you are preparing for a scouting trip, temporary relocation,
                retirement abroad, business opportunities, or a permanent move —
                our goal is to help make your transition smoother, clearer, and more organized.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ConsultationSection />

      <WhyKenyaSection />

      <SiteFooter />
    </main>
  );
}