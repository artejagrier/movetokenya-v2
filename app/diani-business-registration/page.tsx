import Image from "next/image";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diani Business Opportunity Ecosystem | MoveToKenya.org",
  description:
    "Join the Diani Business Opportunity Ecosystem—connecting investors, entrepreneurs, residents, visitors, developers, service providers, and local businesses throughout Diani and Kenya's South Coast.",
};

const joinCategories = [
  {
    title: "Real Estate Professionals",
    description: "Agents, brokers, property managers, and consultants.",
  },
  {
    title: "Developers & Builders",
    description: "Construction firms, architects, and project managers.",
  },
  {
    title: "Property Owners",
    description: "Landowners, villa owners, and investors.",
  },
  {
    title: "Tourism Operators",
    description: "Hotels, resorts, excursions, and travel providers.",
  },
  {
    title: "Attorneys & Consultants",
    description: "Legal, immigration, relocation, and business experts.",
  },
  {
    title: "Entrepreneurs",
    description: "Startups, local businesses, and service providers.",
  },
  {
    title: "Diaspora Investors",
    description: "Individuals exploring opportunities on Kenya's South Coast.",
  },
  {
    title: "Community Partners",
    description: "Organizations helping grow the region.",
  },
];

const benefits = [
  "Increased visibility",
  "Business networking",
  "Referral opportunities",
  "Investment connections",
  "Community events",
  "Educational workshops",
  "Relocation partnerships",
  "Real estate opportunities",
  "Tourism collaborations",
  "Future DianiLink platform access",
];

const servingAreas = [
  "Diani Beach",
  "Ukunda",
  "Galu",
  "Tiwi",
  "Msambweni",
  "Shimoni",
  "Kwale County",
];

export default function DianiBusinessRegistrationPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#111111]">
      <Navbar />

      <section className="px-4 py-20 sm:px-6 md:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C8102E]">Welcome to the Ecosystem</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                Diani Opportunity Ecosystem
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-8 text-[#4f4f4f]">
              <p>
                Welcome to the Diani Opportunity Ecosystem, a growing network of property owners, real estate professionals, builders, developers, farmland owners, tourism operators, attorneys, relocation specialists, and local businesses serving Diani and neighboring communities along Kenya&apos;s South Coast.
              </p>
              <p>
                Our mission is to make it easier for investors, entrepreneurs, relocating families, and visitors to discover opportunities, build local connections, and access valuable resources throughout the region.
              </p>
            </div>

            <div className="rounded-[2.5rem] overflow-hidden border border-[#ece8e4] bg-[#ffffff] shadow-[0_30px_90px_rgba(17,17,17,0.08)]">
              <Image
                src="/images/diani-link-network.jpg"
                alt="Diani business network"
                width={1600}
                height={900}
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div className="space-y-8 text-lg leading-8 text-[#4f4f4f]">
              <p>
                Through MoveToKenya.org, The Divine Connection, virtual tours, educational events, and DianiLink, we help connect people with opportunities across Diani, Ukunda, Galu, Tiwi, Msambweni, Shimoni, and surrounding coastal communities.
              </p>
              <p>
                Whether you offer services, own property, operate a business, or support the growth of the region, we invite you to join our growing ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Diani Section */}
      <section className="relative overflow-hidden bg-[#f8f3f2] px-4 py-20 sm:px-6 md:px-12 lg:py-28">
        <div className="organic-blob -right-20 top-0 h-96 w-96 bg-[#C8102E]/5" aria-hidden="true" />
        
        <div className="mx-auto max-w-7xl">
          <div className="space-y-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Strategic Positioning</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                Why We Lead with Diani
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4f4f4f]">
                Most international investors, tourists, and diaspora audiences recognize Diani much more than Ukunda. For marketing, visibility, tourism, investment, and business growth, Diani is the strongest regional brand.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-6 text-base leading-8 text-[#4f4f4f]">
                <p className="text-lg font-semibold text-[#111111]">Think of it this way:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="mt-1 shrink-0 text-[#C8102E]">•</span>
                    <span><strong>Diani</strong> = Internationally recognized destination</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-1 shrink-0 text-[#C8102E]">•</span>
                    <span><strong>Ukunda</strong> = Administrative and commercial center</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-1 shrink-0 text-[#C8102E]">•</span>
                    <span><strong>Kwale County</strong> = Geographic and government region</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-[2.5rem] border border-[#f2e7e4] bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">We Proudly Serve</p>
                <ul className="mt-6 space-y-3">
                  {servingAreas.map((area) => (
                    <li key={area} className="flex items-center gap-3 text-[#4f4f4f]">
                      <span className="text-[#006B3F]">✓</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Join Section */}
      <section className="px-4 py-20 sm:px-6 md:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C8102E]">Membership Categories</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                Who Should Join?
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {joinCategories.map((category) => (
                <div
                  key={category.title}
                  className="rounded-[2rem] border border-[#f2e7e4] bg-[#ffffff] p-8 shadow-sm transition hover:shadow-md hover:border-[#C8102E]/30"
                >
                  <h3 className="text-lg font-semibold text-[#111111]">{category.title}</h3>
                  <p className="mt-4 text-sm text-[#4f4f4f]">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative overflow-hidden bg-[#f8f3f2] px-4 py-20 sm:px-6 md:px-12 lg:py-28">
        <div className="organic-blob -left-20 top-1/2 h-96 w-96 -translate-y-1/2 bg-[#006B3F]/5" aria-hidden="true" />
        
        <div className="mx-auto max-w-7xl">
          <div className="space-y-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Membership Value</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                Benefits of Joining
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl border border-[#f2e7e4] bg-white p-6 text-center shadow-sm"
                >
                  <p className="text-sm font-semibold text-[#111111]">✓ {benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:px-12 lg:py-28">
        <div className="organic-blob -right-24 top-0 h-96 w-96 bg-[#C8102E]/10" aria-hidden="true" />
        <div className="organic-blob -left-24 bottom-0 h-96 w-96 bg-[#C8102E]/5" aria-hidden="true" />

        <div className="mx-auto max-w-7xl">
          <div className="relative space-y-8 rounded-[3rem] border border-[#f2e7e4] bg-white p-12 text-center shadow-sm sm:p-16 md:p-20">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C8102E]">Get Started Today</p>
            <h2 className="text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
              How To Join The Diani Business Opportunity Ecosystem
            </h2>
            <div className="mx-auto max-w-3xl space-y-4 text-lg text-[#4f4f4f]">
              <p className="text-xl font-semibold text-[#111111]">
                Ready to join the Diani Business Opportunity Ecosystem?
              </p>
              <p>
                Complete our free business registration form to connect with investors, entrepreneurs, property owners, relocation clients, tourism professionals, and local business leaders across Kenya&apos;s South Coast.
              </p>
              <p>
                Once submitted, our team will review your information and contact you regarding upcoming networking opportunities, ecosystem initiatives, and future Diani Link business features.
              </p>
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScIWIuEBG2eaa_jEgDcCDNlIyaq0a-imgeY7PcQRqrSmAuoNw/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mx-auto inline-flex rounded-full px-10 py-4 text-lg font-semibold text-white transition hover:bg-[#a00b1b]"
            >
              Register Your Business
            </a>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#6f6f6f]">
              Registration is currently free for businesses, service providers, property owners, organizations, and entrepreneurs throughout Diani, Ukunda, Galu, Tiwi, Msambweni, Shimoni, and neighboring communities.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
