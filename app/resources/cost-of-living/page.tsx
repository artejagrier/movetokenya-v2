import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import ExchangeCalculator from "@/components/ExchangeCalculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cost of Living in Kenya vs The United States | MoveToKenya.org",
  description:
    "A premium relocation resource comparing life in Kenya and the United States for Americans exploring their next chapter.",
};


const comparisonRows = [
  { category: "Rent (1 Bedroom Apartment)", us: "$1,400 - $2,500", ke: "KSH 60,000 - KSH 110,000" },
  { category: "Groceries", us: "$450 - $700", ke: "KSH 18,000 - KSH 30,000" },
  { category: "Internet", us: "$60 - $100", ke: "KSH 4,500 - KSH 7,500" },
  { category: "Mobile Phone", us: "$70 - $120", ke: "KSH 2,500 - KSH 5,000" },
  { category: "Electricity", us: "$120 - $220", ke: "KSH 6,000 - KSH 12,000" },
  { category: "Dining Out", us: "$18 - $45", ke: "KSH 800 - KSH 2,500" },
  { category: "Transportation", us: "$180 - $320", ke: "KSH 8,000 - KSH 16,000" },
  { category: "Domestic Help", us: "$2,500 - $4,500", ke: "KSH 25,000 - KSH 45,000" },
  { category: "Private Security", us: "$250 - $500", ke: "KSH 9,000 - KSH 18,000" },
  { category: "Healthcare", us: "$500 - $1,200", ke: "KSH 18,000 - KSH 55,000" },
  { category: "Childcare", us: "$1,000 - $1,800", ke: "KSH 12,000 - KSH 25,000" },
  { category: "Entertainment", us: "$220 - $420", ke: "KSH 8,500 - KSH 18,000" },
  { category: "Retirement Lifestyle", us: "$3,500 - $5,500", ke: "KSH 140,000 - KSH 240,000" },
  { category: "Monthly Comfortable Living", us: "$5,500 - $8,500", ke: "KSH 220,000 - KSH 340,000" },
];

const dailyCostRows = [
  { item: "Coffee", us: "$4.50", ke: "KSH 250" },
  { item: "Bottled Water", us: "$1.50", ke: "KSH 80" },
  { item: "Internet", us: "$70", ke: "KSH 5,500" },
  { item: "Taxi Ride", us: "$15", ke: "KSH 900" },
  { item: "Uber/Bolt Ride", us: "$12", ke: "KSH 700" },
  { item: "Restaurant Meal", us: "$35", ke: "KSH 1,600" },
  { item: "Beachfront Dinner", us: "$85", ke: "KSH 4,100" },
  { item: "Domestic Flight", us: "$220", ke: "KSH 12,500" },
  { item: "Gym Membership", us: "$55", ke: "KSH 3,500" },
  { item: "Barber/Salon", us: "$38", ke: "KSH 1,900" },
  { item: "Laundry Service", us: "$35", ke: "KSH 1,800" },
];

const whyPoints = [
  "Lower Cost of Living",
  "Growing Economy",
  "Digital Innovation",
  "World-Class Beaches",
  "Business Opportunities",
  "Strong Diaspora Community",
  "Family Friendly",
  "Gateway To East Africa",
];

export default function CostOfLivingPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#111111]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative h-[480px] w-full sm:h-[500px] md:h-[520px] lg:h-[550px]">
          <Image
            src="/images/carrefour-diani-market.jpg"
            alt="Cost of Living in Kenya"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40" />
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-12">
            <div className="mx-auto max-w-7xl text-center text-white">
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Cost of Living in Kenya vs The United States
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-100 sm:text-xl">
                See what your dollar can do in Kenya and discover why thousands of people are exploring opportunities abroad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[3rem] bg-[#fdf9f7] p-8 shadow-[0_24px_90px_rgba(209,34,46,0.08)] sm:p-12">
            <ExchangeCalculator defaultRate={129} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 pb-20 sm:px-6 md:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-center">
            <div className="space-y-5">
              <p className="editorial-eyebrow text-[#006B3F]">United States vs Kenya</p>
              <h2 className="editorial-headline text-[#111111]">How the monthly budget compares</h2>
              <p className="max-w-3xl text-lg leading-8 text-[#4f4f4f]">
                A premium comparison of everyday expenses that matter most to Americans planning a move to Kenya.
              </p>
            </div>
            <div className="rounded-[2.5rem] bg-[#fffafa] p-8 shadow-[0_24px_80px_rgba(17,17,17,0.08)]">
              <p className="text-sm uppercase tracking-[0.24em] text-[#6b6b6b]">Premium Range</p>
              <p className="mt-4 text-xl font-semibold text-[#111111]">
                These realistic cost ranges show why Kenya can be a more affordable destination for high-quality living.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[3rem] border border-[#f0e6e4] bg-white shadow-[0_24px_90px_rgba(17,17,17,0.06)]">
            <div className="grid gap-0 border-b border-[#f0e6e4] bg-[#faf5f4] px-6 py-6 text-sm uppercase tracking-[0.28em] text-[#6b6b6b] sm:grid-cols-[2fr_1.5fr_1.5fr]">
              <div>Category</div>
              <div>United States</div>
              <div>Kenya</div>
            </div>
            <div className="divide-y divide-[#f0e6e4] px-6 py-6 text-base text-[#4f4f4f]">
              {comparisonRows.map((row) => (
                <div key={row.category} className="grid gap-4 py-5 sm:grid-cols-[2fr_1.5fr_1.5fr] sm:items-center">
                  <div className="font-semibold text-[#111111]">{row.category}</div>
                  <div>{row.us}</div>
                  <div>{row.ke}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 pb-20 sm:px-6 md:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-5">
              <p className="editorial-eyebrow text-[#C8102E]">What Does $2,500 Per Month Look Like?</p>
              <h2 className="editorial-headline text-[#111111]">Lifestyle Comparison</h2>
              <p className="max-w-3xl text-lg leading-8 text-[#4f4f4f]">
                A side-by-side view of what a comfortable $2,500 monthly budget can deliver in the United States versus Kenya.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[2.5rem] bg-[#fafafa] p-8 shadow-[0_24px_80px_rgba(17,17,17,0.06)]">
                <p className="text-sm uppercase tracking-[0.28em] text-[#6b6b6b]">United States</p>
                <ul className="mt-6 space-y-4 text-base leading-8 text-[#4f4f4f]">
                  <li>• Rent for a one-bedroom apartment</li>
                  <li>• Utilities and internet</li>
                  <li>• Groceries for a small household</li>
                  <li>• Local transportation and commuting</li>
                  <li>• Limited remaining savings</li>
                </ul>
              </div>
              <div className="rounded-[2.5rem] bg-[#ffffff] p-8 shadow-[0_24px_80px_rgba(17,17,17,0.06)]">
                <p className="text-sm uppercase tracking-[0.28em] text-[#6b6b6b]">Kenya</p>
                <ul className="mt-6 space-y-4 text-base leading-8 text-[#4f4f4f]">
                  <li>• Luxury one-bedroom apartment in Nairobi or Diani</li>
                  <li>• Utilities and high-speed internet</li>
                  <li>• Dining out, fresh groceries, and lifestyle expenses</li>
                  <li>• Reliable transportation and local rides</li>
                  <li>• Housekeeper and entertainment budget</li>
                  <li>• Meaningful savings remain</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 pb-20 sm:px-6 md:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="editorial-eyebrow text-[#006B3F]">Modern Apartments</p>
              <h2 className="editorial-headline text-[#111111]">Apartment & City Living</h2>
              <p className="max-w-3xl text-lg leading-8 text-[#4f4f4f]">
                Modern apartment living in Kenya offers comfortable, secure, and connected housing options for expats, remote workers, and families.
              </p>
              <ul className="mt-6 space-y-3 text-base leading-8 text-[#4f4f4f]">
                <li>• Modern apartments with reliable utilities and internet</li>
                <li>• City living that supports remote work and international connections</li>
                <li>• Expat-friendly neighborhoods and services</li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#fafafa] p-6 shadow-[0_24px_80px_rgba(17,17,17,0.08)]">
              <Image
                src="/images/kenya-luxury-apartment-living.png"
                alt="Kenya luxury apartment interior"
                width={900}
                height={600}
                className="h-[380px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 pb-20 sm:px-6 md:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="editorial-eyebrow text-[#006B3F]">Grocery Shopping in Kenya</p>
              <h2 className="editorial-headline text-[#111111]">Modern supermarkets and premium food access</h2>
              <p className="max-w-3xl text-lg leading-8 text-[#4f4f4f]">
                Kenya offers a wide selection of supermarkets with both local and international products. Premium grocery shopping is available in modern locations that feel familiar to American shoppers.
              </p>
              <ul className="mt-8 space-y-4 text-base leading-8 text-[#4f4f4f]">
                <li>• Carrefour: a modern supermarket chain with imported brands and fresh produce.</li>
                <li>• Naivas: one of Kenya’s largest grocery retailers with wide product availability.</li>
                <li>• Quickmart: convenient locations and quality local offerings.</li>
                <li>• Chandarana Foodplus: premium food shopping with fresh fruit, vegetables, and specialty items.</li>
              </ul>
              <div className="mt-8 rounded-[2rem] bg-[#fff4f2] p-6 text-[#4f4f4f] shadow-[0_20px_60px_rgba(209,34,46,0.08)]">
                <p className="font-semibold text-[#111111]">Callout</p>
                <p className="mt-3 leading-8">
                  Many Carrefour locations operate late hours and provide a shopping experience comparable to major U.S. grocery chains.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[3rem] bg-[#fafafa] p-6 shadow-[0_24px_80px_rgba(17,17,17,0.08)]">
              <Image
                src="/images/carrefour-diani-market.jpg"
                alt="Carrefour Diani market exterior and Java House"
                width={1400}
                height={700}
                className="h-[560px] w-full rounded-[2rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 pb-20 sm:px-6 md:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1fr]">
            <div className="space-y-5">
              <p className="editorial-eyebrow text-[#C8102E]">Daily Life Costs</p>
              <h2 className="editorial-headline text-[#111111]">Everyday prices in dollars and shillings</h2>
              <p className="max-w-3xl text-lg leading-8 text-[#4f4f4f]">
                Understand the real day-to-day costs that matter when comparing life in the United States to Kenya.
              </p>
            </div>
            <div className="grid gap-4">
              {dailyCostRows.map((row) => (
                <div key={row.item} className="rounded-[2rem] border border-[#f2e7e4] bg-[#ffffff] p-6 shadow-[0_18px_50px_rgba(17,17,17,0.05)]">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-lg font-semibold text-[#111111]">{row.item}</span>
                    <span className="text-sm uppercase tracking-[0.24em] text-[#6b6b6b]">Daily</span>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl bg-[#faf8f6] p-4">
                      <p className="text-xs uppercase tracking-[0.25em] text-[#6b6b6b]">United States</p>
                      <p className="mt-3 text-xl font-semibold text-[#111111]">{row.us}</p>
                    </div>
                    <div className="rounded-3xl bg-[#f4fbf8] p-4">
                      <p className="text-xs uppercase tracking-[0.25em] text-[#006B3F]">Kenya</p>
                      <p className="mt-3 text-xl font-semibold text-[#111111]">{row.ke}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 pb-20 sm:px-6 md:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-5">
              <p className="editorial-eyebrow text-[#C8102E]">Nairobi vs Diani</p>
              <h2 className="editorial-headline text-[#111111]">Two very different sides of Kenya</h2>
              <p className="max-w-3xl text-lg leading-8 text-[#4f4f4f]">
                Compare the energy of Nairobi’s business core with the relaxed coastal lifestyle of Diani.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-[2rem] bg-[#fafafa] p-8 shadow-[0_20px_50px_rgba(17,17,17,0.05)]">
                  <h3 className="mb-4 text-xl font-semibold text-[#111111]">Nairobi</h3>
                  <ul className="space-y-3 text-base leading-8 text-[#4f4f4f]">
                    <li>• Business hub</li>
                    <li>• Faster pace</li>
                    <li>• More corporate opportunities</li>
                  </ul>
                </div>
                <div className="rounded-[2rem] bg-[#faf8f6] p-8 shadow-[0_20px_50px_rgba(17,17,17,0.05)]">
                  <h3 className="mb-4 text-xl font-semibold text-[#111111]">Diani</h3>
                  <ul className="space-y-3 text-base leading-8 text-[#4f4f4f]">
                    <li>• Beach lifestyle</li>
                    <li>• Lower stress</li>
                    <li>• Oceanfront living</li>
                    <li>• Tourism opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#ffffff] p-6 shadow-[0_24px_80px_rgba(17,17,17,0.06)]">
                <Image
                  src="/images/diani-beach-sunrise.jpg"
                  alt="Diani sunrise"
                  width={600}
                  height={600}
                  className="h-[320px] w-full rounded-[2rem] object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#ffffff] p-6 shadow-[0_24px_80px_rgba(17,17,17,0.06)]">
                <Image
                  src="/images/diani-resort-sunset.jpg"
                  alt="Diani resort sunset"
                  width={600}
                  height={600}
                  className="h-[320px] w-full rounded-[2rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 pb-20 sm:px-6 md:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {whyPoints.map((point) => (
              <div key={point} className="rounded-[2rem] border border-[#f0e6e4] bg-[#ffffff] p-8 shadow-[0_18px_50px_rgba(17,17,17,0.05)]">
                <p className="text-lg font-semibold text-[#111111]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 pb-24 sm:px-6 md:px-12 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[3rem] bg-[#faf8f6] p-10 text-center shadow-[0_24px_90px_rgba(17,17,17,0.08)] sm:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C8102E]">Ready To Explore Life In Kenya?</p>
            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
              Ready To Explore Life In Kenya?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4f4f4f]">
              Whether you’re considering relocation, retirement, investing, starting a business, or simply learning about your options, we’re here to help.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-full bg-[#C8102E] px-10 py-4 text-base font-semibold text-white transition hover:bg-[#a00b1b]"
            >
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
