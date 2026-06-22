import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retire In Kenya | MoveToKenya.org",
  description:
    "Retire in Kenya with a relaxed lifestyle, coastal communities, modern amenities, and trusted relocation guidance.",
};

const retireFeatures = [
  "Affordable Cost Of Living",
  "Beautiful Beaches",
  "Warm Climate",
  "Modern Healthcare",
  "Growing Expat Community",
  "Domestic Help & Security Services",
  "Reliable Internet",
  "Easy Regional Travel",
];

const destinations = ["Diani", "Mombasa", "Nairobi", "Karen", "Kilimani", "Lang'ata"];

const permitRequirements = [
  "Minimum age of 35 years",
  "Proof of income from outside Kenya",
  "Valid passport",
  "Police clearance certificate",
  "Supporting documentation and medical records",
  "Government application and permit fees",
];

export default function RetireInKenyaPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#111111]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative h-[480px] w-full sm:h-[500px] md:h-[520px] lg:h-[550px]">
          <Image
            src="/images/retire-to-kenya.jpg"
            alt="Retire to Kenya"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40" />
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-12">
            <div className="mx-auto max-w-7xl text-center text-white">
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Retire In Kenya
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-100 sm:text-xl">
                Kenya offers an affordable lifestyle, beautiful coastal destinations, modern amenities, and a welcoming community for retirees looking to enjoy their next chapter abroad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:px-12 lg:py-24">
        <div className="organic-blob -left-20 top-0 h-72 w-72 bg-[#C8102E]/10" aria-hidden="true" />
        <div className="organic-blob -right-12 bottom-0 h-80 w-80 bg-[#006B3F]/10" aria-hidden="true" />

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Retirement Resource</p>
                <h1 className="mt-4 text-5xl font-semibold leading-tight text-[#111111] sm:text-6xl">
                  Retire In Kenya
                </h1>
                <p className="mt-6 max-w-3xl text-xl leading-9 text-[#4f4f4f] sm:text-2xl">
                  Kenya offers an affordable lifestyle, beautiful coastal destinations, modern amenities, and a welcoming community for retirees looking to enjoy their next chapter abroad.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <span className="rounded-full border border-[#e7f4ed] bg-[#f4fcf7] px-4 py-2 text-sm font-semibold text-[#006B3F]">
                  Coastal retirement lifestyle
                </span>
                <span className="rounded-full border border-[#f7e9ea] bg-[#fff1f2] px-4 py-2 text-sm font-semibold text-[#C8102E]">
                  Class K retirement permit guidance
                </span>
              </div>

              <div className="mt-4 flex items-center gap-4 text-base text-[#4f4f4f] sm:text-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#f4fcf7] text-2xl">🇰🇪</div>
                <p className="max-w-2xl">
                  MoveToKenya.org is your premium guide for retirement, residence permits, and the practical details that matter most when moving to Kenya.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[3rem] bg-[#fafafa] p-6 shadow-[0_30px_90px_rgba(17,17,17,0.08)]">
              <Image
                src="/images/kenya-department-of-immigration-services-ecitizen-portal.jpg"
                alt="Kenya eCitizen portal official government service"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full rounded-[2rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 pb-20 sm:px-6 md:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C8102E]">Retirement Permit</p>
              <h2 className="text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                Class K Retirement Permit
              </h2>
              <p className="max-w-3xl text-lg leading-8 text-[#4f4f4f] sm:text-xl">
                To retire in Kenya, most foreign nationals apply for a Class K Ordinary Residence Permit.
              </p>
              <p className="max-w-3xl text-lg leading-8 text-[#4f4f4f] sm:text-xl">
                Requirements generally include proof of stable overseas income, a valid passport, police clearance, medical documents, and the required government application fees.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {permitRequirements.map((requirement) => (
                  <div key={requirement} className="rounded-[2rem] border border-[#f2e7e4] bg-[#fffdfb] p-6 text-base leading-8 text-[#4f4f4f] shadow-sm">
                    {requirement}
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://accounts.ecitizen.go.ke/en"
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-[2.5rem] border border-[#ece8e4] bg-white p-6 shadow-[0_30px_90px_rgba(17,17,17,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_40px_110px_rgba(17,17,17,0.14)]"
            >
              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-[#006B3F] px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white">
                      eCitizen Kenya Portal
                    </span>
                    <span className="inline-flex items-center rounded-full border border-[#e8e8e8] bg-[#f8fafc] px-3 py-1 text-xs font-semibold text-[#111111]">
                      Official Government Website
                    </span>
                  </div>

                  <h3 className="text-3xl font-semibold leading-tight text-[#111111] sm:text-4xl">
                    Apply for permits, residency, and government services through eCitizen.
                  </h3>

                  <p className="max-w-2xl text-base leading-8 text-[#4f4f4f]">
                    Apply for permits, immigration services, residency applications, government records, and official Kenya government services through the eCitizen platform.
                  </p>

                  <ul className="space-y-4 text-base leading-8 text-[#4f4f4f]">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-[#006B3F]">✓</span>
                      Class K Retirement Permit Applications
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-[#006B3F]">✓</span>
                      Immigration Services
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-[#006B3F]">✓</span>
                      Residency & Permit Tracking
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-[#006B3F]">✓</span>
                      Government Records
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-[#006B3F]">✓</span>
                      Certificate Applications
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-[#006B3F]">✓</span>
                      Secure Online Portal
                    </li>
                  </ul>

                  <div className="inline-flex items-center gap-3 rounded-full bg-[#C8102E] px-6 py-3 text-base font-semibold text-white transition group-hover:translate-x-0.5">
                    Visit eCitizen Portal →
                  </div>
                </div>

                <div className="overflow-hidden rounded-[2rem] bg-[#f7f7f7] p-2">
                  <Image
                    src="/images/kenya-department-of-immigration-services-ecitizen-portal.jpg"
                    alt="eCitizen Kenya portal official government service"
                    width={900}
                    height={600}
                    className="h-full w-full rounded-[1.75rem] object-cover"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 pb-20 sm:px-6 md:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Cost Of Living</p>
              <h2 className="text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                Many retirees enjoy a comfortable lifestyle in Kenya for significantly less than in the United States.
              </h2>
              <p className="max-w-3xl text-lg leading-8 text-[#4f4f4f] sm:text-xl">
                Typical monthly budgets range from $1,500 to $2,500 USD depending on location and lifestyle.
              </p>

              <div className="flex flex-wrap gap-4 text-base leading-8 text-[#4f4f4f]">
                {destinations.map((place) => (
                  <span key={place} className="rounded-full border border-[#e8e8e8] bg-[#ffffff] px-4 py-2 text-sm font-semibold text-[#111111] shadow-sm">
                    {place}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-[#f2e7e4] bg-[#fffdfa] p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-[#6b6b6b]">Retirement Budget</p>
              <p className="mt-5 text-3xl font-semibold text-[#111111]">$1,500 – $2,500 USD</p>
              <p className="mt-4 text-base leading-8 text-[#4f4f4f]">
                Many retirees find that Kenya delivers spacious living, fresh food, supportive services, and regional travel access for a fraction of typical U.S. retirement costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 pb-20 sm:px-6 md:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C8102E]">What Retirees Love</p>
                <h2 className="text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                  What retirees love about Kenya
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-[#4f4f4f]">
                Kenya combines lifestyle value, natural beauty, modern services, and regional mobility for an inviting retirement destination.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {retireFeatures.map((feature) => (
                <div key={feature} className="rounded-[2rem] border border-[#f2e7e4] bg-[#ffffff] p-6 text-base leading-8 text-[#4f4f4f] shadow-sm">
                  <p className="text-lg font-semibold text-[#111111]">✓ {feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 pb-20 sm:px-6 md:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Healthcare</p>
              <h2 className="text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                Leading healthcare for retirees
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4f4f4f] sm:text-xl">
                Kenya is home to some of East Africa&apos;s leading healthcare facilities, including internationally recognized hospitals and private medical providers.
              </p>
            </div>
            <div className="rounded-[2.5rem] bg-[#fafafa] p-8 text-base leading-8 text-[#4f4f4f] shadow-sm">
              <p>
                Access quality medical care in Nairobi, Mombasa, and other major centers, supported by clinics and specialists who serve international patients and expats.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 pb-20 sm:px-6 md:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C8102E]">Moving Your Belongings</p>
              <h2 className="text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                Importing household goods, vehicles, and pets
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4f4f4f] sm:text-xl">
                Retirees can often import personal household goods, furniture, pets, and vehicles subject to Kenya&apos;s import regulations and customs requirements.
              </p>
            </div>
            <div className="rounded-[2.5rem] bg-[#fafafa] p-8 text-base leading-8 text-[#4f4f4f] shadow-sm">
              <p>
                Plan shipment details carefully, work with experienced freight agents, and confirm customs duties and quarantine regulations before moving significant belongings to Kenya.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 pb-24 sm:px-6 md:px-12 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[3rem] bg-[#fdf6f6] p-10 text-center shadow-[0_24px_90px_rgba(17,17,17,0.08)] sm:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C8102E]">Need Help Planning Your Retirement In Kenya?</p>
            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
              Whether you&apos;re considering coastal living, city life, property ownership, or long-term residency options, we&apos;re here to help connect you with trusted resources.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4f4f4f] sm:text-xl">
              Our team can point you to the right support for retirement planning, visas, permits, housing, healthcare, and relocation services.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-full bg-[#C8102E] px-10 py-4 text-base font-semibold text-white transition hover:bg-[#a00b1b]"
            >
              Book A Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
