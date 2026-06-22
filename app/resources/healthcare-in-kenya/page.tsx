import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare in Kenya | MoveToKenya.org",
  description:
    "A premium guide to healthcare, insurance, hospitals, and medical services for expats moving to Kenya.",
};

const hospitals = [
  "Aga Khan University Hospital",
  "Nairobi Hospital",
  "MP Shah Hospital",
  "AAR Hospital",
  "Gertrude’s Children’s Hospital",
  "Diani Beach Hospital",
];

const insuranceOptions = ["Jubilee", "Britam", "AAR Insurance", "APA Insurance", "International Coverage"];

const vaccinations = [
  "Hepatitis A",
  "Hepatitis B",
  "Typhoid",
  "Tetanus",
  "MMR",
  "Polio",
  "Rabies",
  "Yellow Fever",
  "Flu",
];

const safetyTips = [
  "Mosquito protection",
  "Drinking water",
  "Food safety",
  "Sun protection",
  "Emergency preparedness",
];

const emergencyContacts = [
  "AMREF Flying Doctors",
  "St John Ambulance",
  "Police Emergency",
  "Hospital Emergency Numbers",
];

export default function HealthcareInKenyaPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#111111]">
      <Navbar />

      <section className="px-4 py-20 sm:px-6 md:px-12 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-semibold leading-tight text-[#111111] sm:text-6xl">
                Healthcare in Kenya
              </h1>
              <div className="mt-4 h-1 w-16 rounded-full bg-[#C8102E]" />
              <p className="mt-8 text-xl leading-9 text-[#4f4f4f]">
                Understanding healthcare, insurance, hospitals, and medical services before you relocate.
              </p>
            </div>

            <div className="rounded-[2.5rem] overflow-hidden border border-[#ece8e4] shadow-[0_30px_90px_rgba(17,17,17,0.08)]">
              <Image
                src="/images/healthcare-in-kenya.jpg"
                alt="Modern healthcare facility in Kenya"
                width={1600}
                height={900}
                className="h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 md:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Healthcare Overview</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                Public vs private care and why expats choose private hospitals
              </h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-[#4f4f4f]">
              <p>
                Kenya offers both public and private healthcare systems. Expats often choose private hospitals for faster appointments, international standards, and reliable insurance support.
              </p>
              <p>
                Good insurance is essential because private care delivers quicker access to specialists, diagnostic services, and modern facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 md:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C8102E]">Top Hospitals</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                Leading medical centers trusted by expats
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {hospitals.map((hospital) => (
                <div key={hospital} className="rounded-[2rem] border border-[#f2e7e4] bg-[#ffffff] p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-[#111111]">{hospital}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 md:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Health Insurance Options</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                Coverage options for expats and families
              </h2>
              <p className="mt-4 text-base leading-8 text-[#4f4f4f]">
                Choose a plan that covers annual costs, evacuation, family members, and specialty care in Kenya and abroad.
              </p>
            </div>

            <div className="space-y-4">
              {insuranceOptions.map((option) => (
                <div key={option} className="rounded-[2rem] border border-[#f2e7e4] bg-[#fffdfa] p-6 text-[#4f4f4f] shadow-sm">
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 md:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C8102E]">Required Vaccinations</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                Vaccines to prepare before your relocation
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {vaccinations.map((item) => (
                <div key={item} className="rounded-[2rem] border border-[#f2e7e4] bg-[#ffffff] p-6 text-base leading-8 text-[#4f4f4f] shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 md:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Medication & Pharmacies</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                Preparing prescriptions and safe medicines
              </h2>
              <p className="mt-4 text-base leading-8 text-[#4f4f4f]">
                Learn how to transfer prescriptions, find generics, and rely on trusted hospital pharmacies while avoiding counterfeit products.
              </p>
            </div>
            <div className="space-y-4 text-base leading-8 text-[#4f4f4f]">
              <p>Bring a supply of prescription medications and copies of your prescriptions for your first weeks in Kenya.</p>
              <p>Generic medications are widely available, but always confirm quality from reputable pharmacies.</p>
              <p>Use hospital pharmacies for complex medications and when you need specialist guidance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 md:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C8102E]">Health & Safety Tips</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                Practical safety advice for daily life
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {safetyTips.map((tip) => (
                <div key={tip} className="rounded-[2rem] border border-[#f2e7e4] bg-[#fffdfa] p-8 shadow-sm">
                  <p className="text-lg font-semibold text-[#111111]">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 md:px-12 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Emergency Contacts</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                Critical help lines and medical support
              </h2>
            </div>
            <div className="space-y-4">
              {emergencyContacts.map((contact) => (
                <div key={contact} className="rounded-[2rem] border border-[#f2e7e4] bg-[#ffffff] p-6 text-base leading-8 text-[#4f4f4f] shadow-sm">
                  {contact}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 pb-24 sm:px-6 md:px-12 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[3rem] bg-[#fdf6f6] p-10 text-center shadow-[0_24px_90px_rgba(17,17,17,0.08)] sm:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C8102E]">Need Help Understanding Healthcare Before You Move?</p>
            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
              Make informed health plans before your relocation.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4f4f4f] sm:text-xl">
              Our relocation experts can help you prepare insurance, hospital access, and safety planning for your move to Kenya.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-full bg-[#C8102E] px-10 py-4 text-base font-semibold text-white transition hover:bg-[#a00b1b]"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
