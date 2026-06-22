import Link from "next/link";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Nomad Guide to Kenya | MoveToKenya.org",
  description:
    "Work remotely, live better, and explore more. Kenya is a top destination for digital nomads with affordable living, strong connectivity, and incredible adventures.",
};

const destinations = [
  {
    name: "Nairobi",
    highlights: ["Tech capital of East Africa", "Westlands", "Kilimani", "Karen", "Lavington", "Coworking spaces", "Startup ecosystem", "Nightlife"],
  },
  {
    name: "Diani Beach",
    highlights: ["Beachfront lifestyle", "Expat community", "Cafes with WiFi", "Affordable coastal living", "Marine parks"],
  },
  {
    name: "Kilifi",
    highlights: ["Creative community", "Entrepreneurs", "Artists", "Relaxed lifestyle"],
  },
  {
    name: "Lamu",
    highlights: ["UNESCO Heritage Site", "Swahili culture", "Historic architecture", "Island lifestyle"],
  },
];

const internetProviders = ["Safaricom", "Airtel Kenya", "Faiba"];
const coworkingSpaces = ["Nairobi Garage", "iHub", "Ikigai Nairobi", "Workstyle Africa"];
const workCapabilities = ["Video Conferencing", "Cloud Computing", "Streaming", "Remote Work", "Content Creation"];

const mistakesToAvoid = [
  "Working long-term on tourist authorization",
  "Ignoring immigration requirements",
  "Missing permit renewals",
  "Tax compliance issues",
  "Assuming remote work is unregulated",
];

const adventures = ["Maasai Mara", "Amboseli", "Tsavo", "Diani Beach", "Watamu Marine Park", "Mount Kenya", "Nairobi National Park"];

const whyPoints = [
  "Affordable Cost of Living",
  "Strong Internet Connectivity",
  "Modern Housing",
  "Thriving Tech Ecosystem",
  "Beautiful Beaches",
  "Incredible Wildlife",
  "Friendly Communities",
  "Growing Expat Networks",
  "Easy Regional Travel",
  "Year-Round Warm Weather",
];

export default function DigitalNomadPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#111111]">
      <Navbar />

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:px-12 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold leading-tight text-[#111111] sm:text-6xl">
                Digital Nomad Guide to Kenya
              </h1>
              <div className="mt-4 h-1 w-16 bg-[#C8102E]" />
            </div>

            <div className="space-y-6 text-lg leading-9 text-[#4f4f4f]">
              <p>
                <span className="font-semibold">Work Remotely From Kenya</span> — Kenya has quickly become one of Africa&apos;s most attractive destinations for digital nomads, remote workers, freelancers, entrepreneurs, and online business owners. Known as the &quot;Silicon Savannah,&quot; Kenya combines modern infrastructure, growing technology hubs, reliable internet, beautiful landscapes, and a lower cost of living than many Western countries.
              </p>
              <p>
                Whether you&apos;re looking for a fast-paced city environment or a relaxed beach lifestyle, Kenya offers options for every type of remote worker. This comprehensive guide covers visas, permits, best locations, internet reliability, cost of living, tax considerations, and practical tips for building your remote work life in Kenya.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Immigration</p>
                <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                  Visa & Immigration Options
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#111111]">Kenya Electronic Travel Authorization (ETA)</h3>
                  <p className="mt-2 text-base leading-8 text-[#4f4f4f]">
                    Short-term entry permit for tourism and initial visits while preparing longer-term documentation.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#111111]">Digital Nomad Permit (Class N)</h3>
                  <p className="mt-2 text-base leading-8 text-[#4f4f4f]">
                    Designed for remote workers earning income from outside Kenya while living in the country long-term.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#111111]">Investor Permits</h3>
                  <p className="mt-2 text-base leading-8 text-[#4f4f4f]">
                    For entrepreneurs and business owners establishing operations or investing in Kenya.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#111111]">Special Passes</h3>
                  <p className="mt-2 text-base leading-8 text-[#4f4f4f]">
                    Additional authorization options for specific professional and business categories.
                  </p>
                </div>
              </div>

              <div className="rounded-[2.5rem] border border-[#f2e7e4] bg-[#fffdfb] p-8">
                <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-[#C8102E]">General Requirements:</p>
                <ul className="space-y-3 text-base leading-8 text-[#4f4f4f]">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#006B3F]">✓</span>
                    <span>Proof of remote employment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#006B3F]">✓</span>
                    <span>Income earned outside Kenya</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#006B3F]">✓</span>
                    <span>Accommodation information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#006B3F]">✓</span>
                    <span>Valid passport</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#006B3F]">✓</span>
                    <span>Clean criminal record</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#006B3F]">✓</span>
                    <span>Supporting documentation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-[#ece8e4] bg-white p-8 shadow-[0_30px_90px_rgba(17,17,17,0.08)]">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-[#006B3F] px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white">
                    eCitizen Kenya Portal
                  </span>
                  <span className="inline-flex items-center rounded-full border border-[#e8e8e8] bg-[#f8fafc] px-3 py-1 text-xs font-semibold text-[#111111]">
                    Official Government Website
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-[#111111]">
                  Official Kenya Electronic Travel Authorization (ETA)
                </h3>

                <p className="text-base leading-8 text-[#4f4f4f]">
                  Apply online for entry into Kenya through the Government of Kenya&apos;s official Electronic Travel Authorization platform.
                </p>

                <ul className="space-y-4 py-4 text-base leading-8 text-[#4f4f4f]">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#006B3F]">✓</span>
                    Entry Authorization Applications
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#006B3F]">✓</span>
                    Travel Requirements
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#006B3F]">✓</span>
                    Application Status Tracking
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#006B3F]">✓</span>
                    Secure Online Portal
                  </li>
                </ul>

                <Link
                  href="https://etakenya.go.ke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#C8102E] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#a00b1b]"
                >
                  Visit Official ETA Website →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Destinations</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
              Best Places for Digital Nomads
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {destinations.map((dest) => (
              <div key={dest.name} className="rounded-[2.5rem] border border-[#f2e7e4] bg-[#ffffff] p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#111111]">{dest.name}</h3>
                <ul className="mt-6 space-y-3 text-base leading-8 text-[#4f4f4f]">
                  {dest.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-1 text-[#006B3F]">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C8102E]">Connectivity</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
              Internet & Coworking Spaces
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <h3 className="mb-8 text-2xl font-bold text-[#111111]">Internet Providers</h3>
              <div className="space-y-4">
                {internetProviders.map((provider) => (
                  <div key={provider} className="rounded-[1.75rem] border border-[#e8e8e8] bg-[#fafafa] p-4 text-base font-semibold text-[#111111]">
                    {provider}
                  </div>
                ))}
              </div>

              <h3 className="mb-8 mt-12 text-2xl font-bold text-[#111111]">Coworking Spaces</h3>
              <div className="space-y-4">
                {coworkingSpaces.map((space) => (
                  <div key={space} className="rounded-[1.75rem] border border-[#e8e8e8] bg-[#fafafa] p-4 text-base font-semibold text-[#111111]">
                    {space}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-[#f2e7e4] bg-[#f4fcf7] p-10">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-[#006B3F]">Work Capabilities</p>
              <div className="space-y-5">
                {workCapabilities.map((capability) => (
                  <div key={capability} className="flex items-center gap-4 text-lg font-semibold text-[#111111]">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#C8102E] text-base text-white">✓</span>
                    {capability}
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-[1.75rem] border-2 border-[#006B3F] bg-white p-6">
                <p className="text-base leading-8 text-[#4f4f4f]">
                  Kenya&apos;s digital infrastructure supports video conferencing, cloud computing, streaming, content creation, and all modern remote work needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Budget Planning</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
              Cost of Living for Digital Nomads
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-[2.5rem] border border-[#f2e7e4] bg-[#fffdfb] p-8">
              <h3 className="mb-6 text-2xl font-bold text-[#111111]">Nairobi Housing</h3>
              <ul className="space-y-4 text-base leading-8 text-[#4f4f4f]">
                <li>
                  <p className="font-semibold text-[#111111]">1 Bedroom Apartment</p>
                  <p>$400–$700/month</p>
                </li>
                <li>
                  <p className="font-semibold text-[#111111]">Luxury Apartment</p>
                  <p>$700–$1,500+/month</p>
                </li>
              </ul>
            </div>

            <div className="rounded-[2.5rem] border border-[#f2e7e4] bg-[#fffdfb] p-8">
              <h3 className="mb-6 text-2xl font-bold text-[#111111]">Diani Housing</h3>
              <ul className="space-y-4 text-base leading-8 text-[#4f4f4f]">
                <li>• Beach Apartments</li>
                <li>• Beach Villas</li>
                <li>• Ocean View Rentals</li>
              </ul>
            </div>

            <div className="rounded-[2.5rem] border border-[#f2e7e4] bg-[#fffdfb] p-8">
              <h3 className="mb-6 text-2xl font-bold text-[#111111]">Food & Dining</h3>
              <ul className="space-y-4 text-base leading-8 text-[#4f4f4f]">
                <li>• Local Meals: $3–$6</li>
                <li>• Restaurant Meals: $6–$12</li>
                <li>• Coffee: $1.50–$3</li>
              </ul>
            </div>

            <div className="rounded-[2.5rem] border border-[#E7F7ED] bg-[#F4FCF7] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#006B3F]">Monthly Budget</p>
              <p className="mt-4 text-4xl font-bold text-[#111111]">$1,300–$2,500 USD</p>
              <p className="mt-4 text-base leading-8 text-[#4f4f4f]">
                Many digital nomads spend less living in Kenya than they would in most major U.S. cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C8102E]">Financial Planning</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                Taxes & Legal Considerations
              </h2>

              <div className="mt-8 space-y-6 text-base leading-8 text-[#4f4f4f]">
                <p>
                  As a digital nomad in Kenya, you&apos;ll need to understand tax residency rules, KRA PIN requirements, and compliance obligations for remote work.
                </p>
                <p>
                  Kenya has double taxation agreements with many countries, which can help prevent being taxed twice on the same income.
                </p>
                <p>
                  Always consult a licensed tax professional or accountant to ensure full compliance with both Kenyan and home country tax requirements.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-[#006B3F]">•</span>
                  <span className="text-base leading-8 text-[#4f4f4f]">Tax Residency</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-[#006B3F]">•</span>
                  <span className="text-base leading-8 text-[#4f4f4f]">KRA PIN Requirements</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-[#006B3F]">•</span>
                  <span className="text-base leading-8 text-[#4f4f4f]">Annual Tax Filings</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-[#006B3F]">•</span>
                  <span className="text-base leading-8 text-[#4f4f4f]">Double Taxation Agreements</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-[#006B3F]">•</span>
                  <span className="text-base leading-8 text-[#4f4f4f]">Professional Tax Advice</span>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-[#FFB3B3] bg-[#FFF4F4] p-10">
              <div className="mb-6 flex items-start gap-3">
                <span className="text-3xl">⚠️</span>
              </div>
              <p className="mb-6 text-lg font-semibold text-[#C8102E]">Important Disclaimer</p>
              <p className="text-base leading-8 text-[#4f4f4f]">
                MoveToKenya.org does not provide legal or tax advice. Always consult a licensed professional to understand your specific tax obligations and compliance requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Best Practices</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
              Common Mistakes to Avoid
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {mistakesToAvoid.map((mistake, idx) => (
              <div key={idx} className="rounded-[2rem] border-2 border-[#FFB3B3] bg-[#FFF9F9] p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-2xl">⚠️</span>
                </div>
                <p className="font-semibold text-[#C8102E]">{mistake}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C8102E]">Explore</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
              Lifestyle & Weekend Adventures
            </h2>
          </div>

          <div className="mb-12 grid gap-6 sm:grid-cols-2">
            {adventures.map((adventure) => (
              <div key={adventure} className="rounded-[2rem] border border-[#e8e8e8] bg-[#fafafa] p-6 text-center text-base font-semibold text-[#111111] shadow-sm">
                {adventure}
              </div>
            ))}
          </div>

          <div className="rounded-[2.5rem] border border-[#f2e7e4] bg-[#ffffff] p-10 shadow-[0_30px_90px_rgba(17,17,17,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Featured Travel</p>
            <h3 className="mt-4 text-3xl font-bold text-[#111111]">The Madaraka Express (SGR)</h3>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#4f4f4f]">
              Travel comfortably between Nairobi and Mombasa while experiencing some of Kenya&apos;s most beautiful scenery. The Standard Gauge Railway connects major cities and coastal destinations, making weekend travel and regional exploration seamless.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Why Choose Kenya</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
              Why Digital Nomads Choose Kenya
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyPoints.map((point) => (
              <div key={point} className="rounded-[2rem] border border-[#f2e7e4] bg-[#ffffff] p-8 shadow-sm">
                <p className="text-lg font-semibold text-[#111111]">✓ {point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 pb-24 sm:px-6 md:px-12 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[3rem] bg-[#fdf6f6] p-10 text-center shadow-[0_24px_90px_rgba(17,17,17,0.08)] sm:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C8102E]">Ready to Start?</p>
            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
              Ready to Live and Work From Kenya?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4f4f4f] sm:text-xl">
              Whether you&apos;re building a business, working remotely, freelancing, or exploring life abroad, Kenya offers an incredible balance of opportunity, affordability, and lifestyle.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#C8102E] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#a00b1b]"
              >
                Book Free Consultation
              </Link>
              <Link
                href="https://www.eventbrite.com/e/welcome-to-the-cookout-tickets-1992351991439?aff=oddtdtcreator"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-[#C8102E] px-8 py-4 text-base font-semibold text-[#C8102E] transition hover:bg-[#C8102E] hover:text-white"
              >
                Register For Welcome To The Cookout
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
