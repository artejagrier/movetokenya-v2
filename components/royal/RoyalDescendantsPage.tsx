"use client";

import AnimatedCounter from "@/components/royal/AnimatedCounter";
import RoyalLogo from "@/components/royal/RoyalLogo";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroSlides = [
  { src: "/images/diani-beach-paradise.jpg", alt: "Diani coastline" },
  { src: "/images/nairobi-skyline.jpg", alt: "Nairobi skyline" },
  { src: "/images/luxury-coastal-resort.jpg", alt: "Luxury coastal living" },
  { src: "/images/founder-arteja-grier.jpg", alt: "Diaspora connections" },
];

const bridgeFocus = [
  "Land",
  "Modern Homes",
  "Apartments",
  "Attorneys",
  "Commercial Buildings",
  "Resorts",
  "Business Opportunities",
  "Visa Resources",
  "Relocation Support",
  "Community Connections",
];

const whyCards = [
  {
    title: "Relocation Resources",
    description: "Guidance and trusted pathways for your move to Kenya.",
  },
  {
    title: "Real Estate Connections",
    description: "Land, homes, apartments, and investment opportunities.",
  },
  {
    title: "Professional Networks",
    description: "Attorneys, advisors, and vetted professionals on the ground.",
  },
  {
    title: "Visa Resources",
    description: "Navigate requirements with clarity and confidence.",
  },
  {
    title: "Business Opportunities",
    description: "Partnerships and ventures across East Africa.",
  },
  {
    title: "Community Support",
    description: "Events, mentorship, and diaspora relationships that last.",
  },
  {
    title: "Local Knowledge",
    description: "On-the-ground insight from people who know Kenya.",
  },
  {
    title: "Diaspora Relationships",
    description: "Connections that open doors before you arrive.",
  },
];

const realEstateShowcase = [
  {
    title: "Modern Homes",
    description:
      "Elegant residences designed for comfort, security, and modern living.",
    image: "/images/kenya-modern-luxury-villa.png",
    alt: "Contemporary luxury villa with pool in Kenya",
  },
  {
    title: "Luxury Apartments",
    description:
      "Upscale apartment living in Kenya\u2019s most desirable locations.",
    image: "/images/kenya-luxury-apartment-interior.png",
    alt: "Modern luxury apartment interior with Nairobi city views",
  },
  {
    title: "Beachfront Properties",
    description:
      "Wake up to ocean views and coastal luxury along Kenya\u2019s beautiful coastline.",
    image: "/images/kenya-beachfront-villa.png",
    alt: "Luxury beachfront villa with infinity pool at sunset on Kenya\u2019s coast",
  },
  {
    title: "Executive Villas",
    description:
      "Contemporary villas and gated communities for discerning families and investors.",
    image: "/images/kenya-executive-villa-sunset.png",
    alt: "Executive villa with infinity pool overlooking Kenya hills at sunset",
  },
];

const stats = [
  { label: "Families Connected", value: 847, suffix: "+" },
  { label: "Business Relationships Built", value: 312, suffix: "+" },
  { label: "Community Members", value: 4200, suffix: "+" },
  { label: "Events Hosted", value: 56, suffix: "+" },
];

function RoyalCurve({ fill = "#ffffff" }: { fill?: string }) {
  return (
    <div className="royal-curve-bottom" aria-hidden="true">
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="relative block h-14 w-full sm:h-20 md:h-24"
      >
        <path
          d="M0,60 C480,100 960,20 1440,55 L1440,100 L0,100 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

function RealEstateCard({
  title,
  description,
  image,
  alt,
}: {
  title: string;
  description: string;
  image: string;
  alt: string;
}) {
  return (
    <article className="royal-realestate-card group">
      <div className="royal-realestate-card-image">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="royal-realestate-card-image-overlay" aria-hidden="true" />
      </div>
      <div className="royal-realestate-card-body">
        <div className="royal-realestate-card-accent" aria-hidden="true" />
        <h3 className="royal-realestate-card-title">{title}</h3>
        <p className="royal-realestate-card-desc">{description}</p>
      </div>
    </article>
  );
}

function OrganicImage({
  src,
  alt,
  mask,
  aspect = "aspect-[4/3] lg:aspect-[5/4]",
  sizes = "(max-width: 1024px) 100vw, 55vw",
  priority = false,
}: {
  src: string;
  alt: string;
  mask: string;
  aspect?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`royal-organic-wrap ${mask} ${aspect}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="royal-img-parallax object-cover"
        sizes={sizes}
      />
    </div>
  );
}

export default function RoyalDescendantsPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="royal-page overflow-x-hidden text-[#0A1628]">
      <Navbar />

      {/* ——— HERO ——— */}
      <section className="relative flex min-h-[68vh] max-h-[780px] flex-col justify-center overflow-hidden bg-[#0A1628]">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.src}
            className={`royal-hero-slide absolute inset-0 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/55 to-[#0A1628]/40" />
        <div className="royal-noise absolute inset-0" />

        <div
          className="royal-float absolute right-[6%] top-[22%] h-40 w-40 rounded-full bg-[#C9A961]/8 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="royal-float-delayed absolute bottom-[28%] left-[4%] h-56 w-56 rounded-full bg-[#142D4A]/40 blur-3xl"
          aria-hidden="true"
        />

        <div className="royal-hero-content relative z-10 mx-auto flex w-full max-w-5xl flex-col items-start px-6 pb-16 text-left sm:px-10 md:pb-20 lg:px-20">
          <div className="royal-fade-up mb-10 md:mb-12">
            <RoyalLogo variant="light" size="hero" />
          </div>

          <h1 className="royal-fade-up royal-fade-up-delay-1 royal-display royal-text-gradient mb-5 max-w-4xl text-[clamp(2rem,6vw,4.75rem)] uppercase tracking-tight">
            Royal Descendants Group LTD
          </h1>

          <p className="royal-fade-up royal-fade-up-delay-2 mb-4 max-w-xl text-lg font-light leading-snug text-white/92 sm:text-xl md:text-2xl">
            Connecting the Diaspora to Opportunity Across Africa
          </p>

          <p className="royal-fade-up royal-fade-up-delay-3 mb-10 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base md:mb-12">
            Royal Descendants Group LTD helps connect individuals, families,
            entrepreneurs, and investors with the resources needed to relocate,
            invest, build, and thrive in Kenya.
          </p>

          <div className="royal-fade-up royal-fade-up-delay-4 flex flex-wrap gap-4">
            <Link href="#bridge" className="royal-btn-primary">
              Explore Opportunities
            </Link>
            <Link href="/" className="royal-btn-light">
              Move To Kenya
            </Link>
          </div>
        </div>

        <RoyalCurve fill="#ffffff" />
      </section>

      {/* ——— MISSION ——— */}
      <section className="royal-section-pad relative bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 lg:flex-row lg:items-end lg:gap-24">
          <FadeIn className="flex-1 lg:pb-16">
            <div className="royal-gold-line mb-8" />
            <p className="royal-eyebrow royal-eyebrow-dark mb-6">Our Mission</p>
            <h2 className="royal-display mb-8 text-[clamp(2.25rem,5vw,4rem)] text-[#0A1628]">
              We believe Africa&apos;s future is built through connection.
            </h2>
            <p className="royal-body-short max-w-md">
              Pathways for individuals, families, entrepreneurs, and investors
              to build meaningful relationships throughout Kenya and East Africa.
            </p>
          </FadeIn>

          <FadeIn className="royal-flow-image royal-bleed-up flex-1 lg:max-w-[48%]">
            <OrganicImage
              src="/images/diani-beach-sunrise.jpg"
              alt="Kenya at sunrise"
              mask="royal-organic-1"
              aspect="aspect-[3/4] sm:aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </FadeIn>
        </div>
      </section>

      {/* ——— BRIDGE ——— */}
      <section
        id="bridge"
        className="relative overflow-hidden bg-[#0A1628] royal-section-pad text-white"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#142D4A]/60 via-transparent to-[#0A1628]" />
        <div className="royal-noise absolute inset-0" />

        <div className="relative mx-auto max-w-6xl">
          <FadeIn>
            <p className="royal-eyebrow mb-8">Your Bridge From The U.S. To Kenya</p>
            <h2 className="royal-display mb-8 max-w-4xl text-[clamp(2.5rem,6vw,5rem)] leading-[0.98]">
              Everything You Need To Build Your Life In Kenya
            </h2>
            <p className="royal-body-short mb-12 max-w-xl text-white/60">
              Relocating, investing, retiring, or starting a business — we connect
              you with the resources and relationships to move forward with confidence.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="royal-bridge-list mb-16 md:mb-24">
              {bridgeFocus.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn className="relative mx-auto max-w-[90rem] px-4 sm:px-8">
          <OrganicImage
            src="/images/nairobi-skyline.jpg"
            alt="Nairobi skyline at dusk"
            mask="royal-organic-panorama"
            aspect="aspect-[21/9] min-h-[280px] sm:min-h-[360px] md:min-h-[440px]"
            sizes="100vw"
          />
        </FadeIn>

        <div className="relative mt-8">
          <RoyalCurve fill="#ffffff" />
        </div>
      </section>

      {/* ——— REAL ESTATE ——— */}
      <section className="relative overflow-hidden bg-[#0A1628] royal-section-pad text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-[#142D4A]/40 to-[#0A1628]" />
        <div className="royal-noise absolute inset-0" />

        <div className="relative mx-auto max-w-6xl">
          <FadeIn className="mb-16 md:mb-20 lg:mb-28">
            <p className="royal-eyebrow mb-6">Modern Homes &amp; Apartments</p>
            <h2 className="royal-display mb-8 max-w-3xl text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.98]">
              Find Your Place In Kenya
            </h2>
            <p className="royal-body-short max-w-xl text-white/60">
              Whether you&apos;re looking for a luxury villa, modern apartment,
              retirement home, beachfront property, or investment opportunity,
              Royal Descendants Group LTD helps connect you with resources and
              opportunities throughout Kenya.
            </p>
          </FadeIn>

          <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:gap-12">
            {realEstateShowcase.map((item) => (
              <FadeIn key={item.title}>
                <RealEstateCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  alt={item.alt}
                />
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="relative mt-16 md:mt-24">
          <RoyalCurve fill="#ffffff" />
        </div>
      </section>

      {/* ——— FULL-WIDTH IMMERSIVE ——— */}
      <section className="relative min-h-[55vh] overflow-hidden bg-[#0A1628]">
        <Image
          src="/images/cave-restaurant-kenya.jpg"
          alt="Kenya dining and lifestyle"
          fill
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/70 to-transparent" />
        <div className="royal-noise absolute inset-0" />

        <div className="relative flex min-h-[55vh] items-center royal-section-pad">
          <FadeIn className="max-w-3xl">
            <p className="royal-eyebrow mb-8">Our Vision</p>
            <h2 className="royal-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] text-white">
              Building Bridges.
              <br />
              <span className="text-[#C9A961]">Creating Opportunities.</span>
              <br />
              Strengthening Community.
            </h2>
          </FadeIn>
        </div>
      </section>

      {/* ——— WHY PEOPLE WORK WITH US ——— */}
      <section className="royal-section-pad bg-white">
        <div className="mx-auto max-w-6xl">
          <FadeIn className="mb-14 md:mb-20">
            <div className="royal-gold-line mb-8" />
            <p className="royal-eyebrow royal-eyebrow-dark mb-6">
              Why People Work With Us
            </p>
            <h2 className="royal-display max-w-2xl text-[clamp(2rem,4.5vw,3.5rem)] text-[#0A1628]">
              Resources. Relationships. Real pathways forward.
            </h2>
          </FadeIn>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {whyCards.map((card) => (
              <FadeIn key={card.title}>
                <div className="royal-glass-card group h-full">
                  <div className="royal-glass-card-accent" aria-hidden="true" />
                  <h3 className="royal-glass-card-title">{card.title}</h3>
                  <p className="royal-glass-card-desc">{card.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ——— COMMUNITY IMPACT ——— */}
      <section className="relative overflow-hidden bg-[#FAFAFA] royal-section-pad">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#C9A961]/5 to-transparent" />

        <div className="relative mx-auto max-w-6xl">
          <FadeIn className="mb-16 md:mb-20">
            <RoyalLogo variant="dark" size="md" className="mb-8" />
            <p className="royal-eyebrow royal-eyebrow-dark mb-5">
              Community Impact
            </p>
            <h2 className="royal-display text-[clamp(2rem,4vw,3.25rem)]">
              Growing together across continents
            </h2>
          </FadeIn>

          <div className="max-w-3xl">
            {stats.map((stat) => (
              <FadeIn key={stat.label}>
                <div className="royal-stat-line flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#4A5568]">
                    {stat.label}
                  </p>
                  <p className="royal-display text-[clamp(2.5rem,5vw,4rem)] text-[#C9A961]">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ——— FINAL CTA ——— */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#142D4A] to-[#0A1628] royal-section-pad">
        <div
          className="royal-float absolute left-[8%] top-[15%] h-72 w-72 rounded-full bg-[#C9A961]/6 blur-3xl"
          aria-hidden="true"
        />
        <div className="royal-noise absolute inset-0" />

        <FadeIn className="relative mx-auto max-w-3xl text-center">
          <RoyalLogo variant="light" size="md" className="mx-auto mb-10" />
          <h2 className="royal-display mb-8 text-[clamp(2.25rem,5vw,4rem)] text-white">
            Ready To Explore Life In Kenya?
          </h2>
          <p className="royal-body-short mx-auto mb-12 max-w-lg text-white/60">
            Discover the resources, relationships, and opportunities that can
            help you take the next step.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="royal-btn-primary">
              MoveToKenya.org
            </Link>
            <Link href="/contact" className="royal-btn-light">
              Contact Us
            </Link>
          </div>
        </FadeIn>
      </section>

      <SiteFooter />
    </div>
  );
}
