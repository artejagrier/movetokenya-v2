"use client";

import FadeIn from "@/components/FadeIn";
import WaveDivider from "@/components/WaveDivider";
import Image from "next/image";

export default function WhyKenyaSection() {
  return (
    <>
      <div className="wave-divider -mt-px bg-[#fafafa]" aria-hidden="true">
        <WaveDivider fill="#fafafa" />
      </div>

      <section
        id="why-kenya"
        className="relative overflow-hidden bg-[#fafafa] pb-24 pt-8 md:pb-32 md:pt-12"
      >
        <div
          className="organic-blob -left-32 top-20 h-96 w-96 bg-[#C8102E]"
          aria-hidden="true"
        />
        <div
          className="organic-blob -right-24 bottom-32 h-80 w-80 bg-[#C8102E]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <FadeIn>
            <div className="mb-16 grid items-end gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="editorial-eyebrow mb-5">Why Kenya</p>
                <h3 className="editorial-headline mb-8">
                  A Different Pace Of Life.
                  <br />
                  A Different Kind Of Opportunity.
                </h3>
                <p className="editorial-subhead max-w-xl">
                  Kenya continues to attract remote workers, entrepreneurs, retirees,
                  investors, families, and individuals seeking a lifestyle rooted in
                  community, modern convenience, natural beauty, and greater flexibility.
                  From luxury city living in Nairobi to peaceful coastal life in Diani,
                  Kenya offers experiences and opportunities that feel both refreshing and transformational.
                </p>
              </div>

              <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:ml-auto">
                <div className="blob-mask shadow-[0_24px_64px_rgba(0,0,0,0.12)]">
                  <Image
                    src="/images/diani-beach-sunrise.jpg"
                    alt=""
                    width={600}
                    height={700}
                    className="h-[320px] w-full object-cover sm:h-[400px] md:h-[480px]"
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mb-20 flex justify-center gap-12 sm:gap-20">
              <span className="text-4xl" aria-hidden="true">🌍</span>
              <span className="text-4xl" aria-hidden="true">✈️</span>
              <span className="text-4xl" aria-hidden="true">🌴</span>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mb-20 max-w-3xl">
              <div className="benefit-item">
                <div className="benefit-icon">🌍</div>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-[#1a1a1a] sm:text-2xl">
                    Lower Cost Of Living
                  </h4>
                  <p className="leading-8 text-[#6b6b6b]">
                    Many people relocating from the U.S. discover they can access more spacious housing,
                    dining, transportation, domestic assistance, and lifestyle experiences at significantly lower costs depending on location.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">✈️</div>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-[#1a1a1a] sm:text-2xl">
                    International Lifestyle
                  </h4>
                  <p className="leading-8 text-[#6b6b6b]">
                    Kenya offers modern malls, luxury apartments, resorts, airports,
                    restaurants, coworking spaces, and expanding infrastructure while still maintaining strong culture and community.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">🌴</div>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-[#1a1a1a] sm:text-2xl">
                    Coastal & Nature Living
                  </h4>
                  <p className="leading-8 text-[#6b6b6b]">
                    From Diani Beach and Mombasa to safari destinations and mountain landscapes,
                    Kenya offers beautiful scenery, warm weather, wildlife, and unforgettable experiences year-round.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              <div className="rounded-3xl bg-white p-8 shadow-[0_8px_40px_rgba(0,0,0,0.04)] sm:p-10 md:p-12">
                <p className="editorial-eyebrow mb-4">Remote Work & Entrepreneurship</p>
                <h4 className="section-title mb-6">Build While Living Better</h4>
                <p className="mb-8 text-base leading-8 text-[#6b6b6b] sm:text-lg sm:leading-9">
                  Many digital entrepreneurs, creators, consultants, and remote workers are exploring Kenya while continuing to work online internationally.
                  The combination of lower living expenses, growing infrastructure, and access to modern conveniences creates new possibilities for lifestyle and business.
                </p>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#fafafa] p-6">
                    <h5 className="mb-2 text-lg font-bold text-[#1a1a1a]">Modern Infrastructure</h5>
                    <p className="text-sm leading-7 text-[#6b6b6b]">
                      Kenya continues expanding with modern roads, shopping centers, banking systems, internet access, and growing business sectors.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#fafafa] p-6">
                    <h5 className="mb-2 text-lg font-bold text-[#1a1a1a]">Flexible Lifestyle</h5>
                    <p className="text-sm leading-7 text-[#6b6b6b]">
                      Many people enjoy slower living, greater flexibility, family-centered culture, and the ability to experience more while spending less.
                    </p>
                  </div>
                </div>
              </div>

              <div className="dark-surface rounded-3xl bg-[#1a1a1a] p-8 text-white sm:p-10 md:p-12">
                <p className="editorial-eyebrow mb-6 text-[#C8102E]">What People Love</p>
                <div className="space-y-8">
                  <div className="border-b border-white/10 pb-6">
                    <h5 className="mb-2 text-xl font-bold text-[#FFFFFF]">Strong Community Culture</h5>
                    <p className="leading-8 text-[#FFFFFF]">
                      Kenya is known for hospitality, community connection, and relationship-centered living.
                    </p>
                  </div>
                  <div className="border-b border-white/10 pb-6">
                    <h5 className="mb-2 text-xl font-bold text-[#FFFFFF]">Beautiful Weather</h5>
                    <p className="leading-8 text-[#FFFFFF]">
                      Many areas of Kenya experience warm weather year-round with beautiful coastal and highland climates.
                    </p>
                  </div>
                  <div className="border-b border-white/10 pb-6">
                    <h5 className="mb-2 text-xl font-bold text-[#FFFFFF]">Modern + Cultural Balance</h5>
                    <p className="leading-8 text-[#FFFFFF]">
                      Kenya blends modern convenience with strong traditions, creating a unique international experience.
                    </p>
                  </div>
                  <div>
                    <h5 className="mb-2 text-xl font-bold text-[#FFFFFF]">Adventure & Exploration</h5>
                    <p className="leading-8 text-[#FFFFFF]">
                      Safaris, beaches, hiking, resorts, restaurants, nightlife, and travel opportunities create unforgettable experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
