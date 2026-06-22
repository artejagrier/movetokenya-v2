import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visa & Immigration Guide To Kenya | MoveToKenya.org",
  description:
    "A professional relocation resource center for visa, permit, and immigration guidance to Kenya.",
};

const faqs = [
  {
    question: "Do I need an ETA to enter Kenya?",
    answer:
      "Most visitors from eligible countries need an Electronic Travel Authorization before arrival. It is required for short stays, tourism, and initial entry while you prepare longer-term paperwork.",
  },
  {
    question: "Can I work in Kenya on a tourist ETA?",
    answer:
      "No. The ETA allows entry for tourism or short business visits only. To work legally you must apply for a work permit such as the Class D Employment Permit or a Class N Digital Nomad Permit.",
  },
  {
    question: "What is the difference between a Class D and Class K permit?",
    answer:
      "Class D is for employment with a Kenyan employer while Class K is designed for retirees with stable income and long-term residency plans. The criteria, documentation, and sponsor requirements differ for each.",
  },
  {
    question: "Can my spouse and children join me in Kenya?",
    answer:
      "Yes. Dependants can apply for dependant passes once your primary visa or permit is approved. Spouse and child requirements vary by permit type and may include proof of relationship, financial support, and accommodation.",
  },
  {
    question: "How long does visa processing take?",
    answer:
      "Processing timelines vary by permit type and nationality. An ETA can often be approved within days, while work, retirement, and investor permits can take several weeks. Plan ahead for document collection and submission.",
  },
];

function ResourceSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-6 max-w-3xl text-3xl font-bold leading-tight text-[#111111] sm:text-4xl">
          {title}
        </h2>
        <div className="space-y-6 text-base leading-8 text-[#4f4f4f] sm:text-lg sm:leading-9">
          {children}
        </div>
      </div>
    </section>
  );
}

function Accordion({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-[2rem] border border-[#e8e8e8] bg-white p-6 shadow-sm transition hover:border-[#C8102E]/40">
      <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-lg font-semibold text-[#111111] transition">
        {question}
        <span className="text-[#C8102E]">+</span>
      </summary>
      <div className="mt-4 text-base leading-8 text-[#5d5d5d] sm:text-lg">
        {answer}
      </div>
    </details>
  );
}

export default function VisaImmigrationPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#111111]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative h-[480px] w-full sm:h-[500px] md:h-[520px] lg:h-[550px]">
          <Image
            src="/images/kenya-department-of-immigration-services-ecitizen-portal.jpg"
            alt="Kenya Visa & Immigration"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40" />
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-12">
            <div className="mx-auto max-w-7xl text-center text-white">
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Visa & Immigration Guide To Kenya
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-100 sm:text-xl">
                Everything you need to know about legally moving, living, working, investing, retiring, and building a life in Kenya.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[2rem] bg-[#fafafa] p-8 shadow-[0_30px_80px_rgba(200,17,28,0.08)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C8102E]">Why This Guide</p>
              <p className="mt-4 text-base leading-8 text-[#4f4f4f]">
                A premium editorial resource center designed to give you clarity on Kenya visas, permits, and long-term immigration planning.
              </p>
            </div>
            <div className="rounded-[2rem] bg-[#fafafa] p-8 shadow-[0_30px_80px_rgba(200,17,28,0.08)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C8102E]">Resource Navigation</p>
              <ul className="mt-4 space-y-3 text-base leading-8 text-[#4f4f4f]">
                <li>ETA & arrival requirements</li>
                <li>Work permits, retirement, digital nomad, investor visas</li>
                <li>Dependants, family relocation, residency, citizenship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-12">
        <nav className="mb-12 flex flex-wrap gap-3 text-sm font-medium text-[#4f4f4f]">
          <Link href="/resources/cost-of-living" className="rounded-full border border-[#e8e8e8] bg-white px-4 py-2 transition hover:border-[#C8102E] hover:text-[#C8102E]">
            Cost of Living
          </Link>
          <Link href="/resources/housing-real-estate" className="rounded-full border border-[#e8e8e8] bg-white px-4 py-2 transition hover:border-[#C8102E] hover:text-[#C8102E]">
            Housing
          </Link>
          <Link href="/resources/business-investment" className="rounded-full border border-[#e8e8e8] bg-white px-4 py-2 transition hover:border-[#C8102E] hover:text-[#C8102E]">
            Business
          </Link>
          <Link href="/resources/healthcare-in-kenya" className="rounded-full border border-[#e8e8e8] bg-white px-4 py-2 transition hover:border-[#C8102E] hover:text-[#C8102E]">
            Healthcare
          </Link>
          <Link href="/resources/education-family-life" className="rounded-full border border-[#e8e8e8] bg-white px-4 py-2 transition hover:border-[#C8102E] hover:text-[#C8102E]">
            Education
          </Link>
        </nav>

        <ResourceSection title="Electronic Travel Authorization (ETA)">
          <a
            href="https://etakenya.go.ke/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-[2.5rem] border border-[#ece8e4] bg-white p-8 shadow-[0_30px_80px_rgba(17,17,17,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_40px_100px_rgba(17,17,17,0.14)]"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-[#C8102E] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white">
                    Kenya ETA
                  </span>
                  <span className="inline-flex items-center rounded-full border border-[#e5e7eb] bg-[#f8fafc] px-3 py-1 text-xs font-semibold text-[#111111]">
                    Official Government Website
                  </span>
                </div>

                <p className="text-sm uppercase tracking-[0.32em] text-[#006B3F]">Electronic Travel Authorization</p>
                <h3 className="mt-3 text-3xl font-semibold leading-tight text-[#111111] sm:text-4xl">
                  Official Kenya Electronic Travel Authorization (ETA)
                </h3>
                <p className="mt-5 text-base leading-8 text-[#4f4f4f] sm:text-lg">
                  Apply online for entry into Kenya through the Government of Kenya&apos;s official Electronic Travel Authorization platform.
                </p>

                <ul className="mt-8 space-y-3 text-base leading-8 text-[#4f4f4f]">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#FEEFEF] text-xl">🇰🇪</span>
                    Official Government Portal
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#F8F8FF] text-xl">🛂</span>
                    Entry Authorization Applications
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#EFFBF4] text-xl">✈️</span>
                    Travel Requirements
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#F0F9FF] text-xl">📘</span>
                    Visitor Information
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#FDF8F3] text-xl">🔎</span>
                    Application Status Tracking
                  </li>
                </ul>
              </div>

              <div className="flex w-full flex-col justify-between gap-6 rounded-[2rem] border border-[#f0e7e4] bg-[#fcfcfc] p-6 shadow-sm sm:max-w-xs">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#E7F7ED] px-3 py-2 text-sm font-semibold text-[#006B3F]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#C8102E]" />
                    Kenya flag accent
                  </div>
                  <div className="rounded-[1.75rem] bg-[#ffffff] p-4 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#F6F0EF] px-3 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#C8102E]">
                        ETA
                      </span>
                      <span className="rounded-full bg-[#E7F7ED] px-2.5 py-1 text-xs font-semibold text-[#006B3F]">
                        Official
                      </span>
                    </div>
                    <div className="space-y-3 text-sm text-[#515151]">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FEF1F1] text-xl">✈️</span>
                        <div>
                          <p className="font-semibold text-[#111111]">Travel Overview</p>
                          <p className="text-[#6b6b6b]">Official entry approval process</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#EFFBF4] text-xl">🛂</span>
                        <div>
                          <p className="font-semibold text-[#111111]">Secure Application</p>
                          <p className="text-[#6b6b6b]">Verified government form</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 rounded-[1.75rem] bg-[#ffffff] p-4 shadow-sm">
                  <span className="text-sm font-semibold text-[#4f4f4f]">Official Government Website</span>
                  <span className="text-2xl">✅</span>
                </div>
                <div className="mt-4 inline-flex items-center justify-between rounded-full bg-[#C8102E] px-6 py-4 text-sm font-semibold text-white transition group-hover:translate-x-0.5">
                  Visit Official ETA Website
                  <span className="text-xl">→</span>
                </div>
              </div>
            </div>
          </a>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-[#6b6b6b]">
            MoveToKenya.org does not process ETA applications. Applications must be submitted through the Government of Kenya&apos;s official website.
          </p>

          <p>
            The ETA is Kenya&apos;s entry permit for visitors from eligible countries. It allows travelers to enter Kenya for tourism, short business visits, or to prepare longer-term immigration paperwork.
          </p>
          <p>
            Who needs it: most international visitors who are not already exempt from Kenyan visa requirements. This includes people coming for short stays, exploratory trips, and those arriving while applying for a longer-term permit.
          </p>
          <p>
            How to apply: submit your ETA application online through the Kenya e-visa portal with a passport scan, travel itinerary, and supporting documents. Pay the required fee and wait for confirmation before departure.
          </p>
          <p>
            Processing expectations: most ETAs are approved within a few days, but processing can take longer during peak travel seasons. Apply early and make sure your passport is valid for at least six months.
          </p>
          <p>
            Arrival requirements: present your approved ETA, a valid passport, proof of onward travel, and evidence of accommodation when you land in Kenya.
          </p>
        </ResourceSection>

        <ResourceSection title="Work Permits">
          <p>
            The Class D Employment Permit is the standard route for foreigners who have secured a job with a Kenyan employer. It is issued to people hired by registered Kenyan businesses and organizations.
          </p>
          <p>
            Employer-sponsored relocation: your employer must file the work permit application on your behalf, provide a detailed job description, and demonstrate why the role cannot be filled locally.
          </p>
          <p>
            Required documentation typically includes a valid passport, employment contract, company registration documents, academic credentials, and proof of relevant work experience.
          </p>
          <p>
            General application process: obtain an ETA if needed, submit the employer-backed application to the Directorate of Immigration, and wait for permit approval before beginning employment.
          </p>
        </ResourceSection>

        <ResourceSection title="Retirement In Kenya">
          <p>
            The Class K Permit is designed for retirees who want to live in Kenya long term. It is intended for people with stable retirement income and the desire to enjoy a relaxed lifestyle in East Africa.
          </p>
          <p>
            Income requirements: applicants must demonstrate a reliable income stream, such as pensions, investment returns, rental income, or savings sufficient to support themselves while living in Kenya.
          </p>
          <p>
            Long-term residency options: retirees can apply for extended permits and renew them as needed. Kenya is increasingly welcoming individuals seeking permanent overseas retirement destinations.
          </p>
          <p>
            Retiree lifestyle opportunities: affordable coastal living, vibrant expat communities, excellent leisure and travel access, and a growing network of services for international retirees.
          </p>
        </ResourceSection>

        <ResourceSection title="Digital Nomad Kenya">
          <p>
            The Class N Digital Nomad Permit is for remote workers who earn income from outside Kenya while living in the country. It offers a legal way to reside in Kenya for extended remote work stays.
          </p>
          <p>
            Remote work requirements: demonstrate that your primary income is derived from foreign sources, provide proof of remote employment or freelance contracts, and show evidence of financial stability.
          </p>
          <p>
            Living in Kenya while earning foreign income: Kenya offers growing digital infrastructure, welcoming urban neighborhoods, and modern coworking spaces, making it an attractive destination for nomads.
          </p>
          <p>
            Why Kenya is becoming a digital nomad destination: affordable living costs, strong internet connectivity in major cities, diverse natural experiences, and easy access to regional travel.
          </p>
        </ResourceSection>

        <ResourceSection title="Investor & Business Permits">
          <p>
            The Class G Investor Permit is for people who want to start or expand a business in Kenya. It is designed for foreign investors and entrepreneurs who contribute to economic growth.
          </p>
          <p>
            Business registration: establish a Kenyan company, register with the relevant authorities, and provide a business plan that demonstrates clear investment or job creation benefits.
          </p>
          <p>
            Entrepreneurship opportunities: Kenya&apos;s growing tech, tourism, agriculture, real estate, and professional services sectors offer strong potential for investors.
          </p>
          <p>
            Investing in Kenya: build a business presence while benefiting from regional trade access, a youthful workforce, and supportive economic initiatives.
          </p>
        </ResourceSection>

        <ResourceSection title="Dependants & Families">
          <p>
            Dependants can apply for dependant passes when the primary applicant has a valid Kenyan permit. This enables spouses and children to join the permit holder in Kenya.
          </p>
          <p>
            Family relocation: submit proof of marriage or parent-child relationships, evidence of adequate finances, and accommodation details to support your family&apos;s move.
          </p>
          <p>
            Spouse and children requirements vary by permit type, but most applications require certified documents, passports, and proof of the primary sponsor&apos;s legal status in Kenya.
          </p>
        </ResourceSection>

        <ResourceSection title="Citizenship & Long-Term Residency">
          <p>
            Long-term residency pathways include renewal of permits, permanent residence applications, and eventual eligibility for citizenship under Kenyan law.
          </p>
          <p>
            Permanent residency options may be available to people who have lived in Kenya for several years on valid permits, particularly investors and retirees.
          </p>
          <p>
            Citizenship information: Kenyan citizenship has specific requirements, and many expats choose to maintain long-term residency while preserving their existing nationality.
          </p>
        </ResourceSection>

        <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:px-12 lg:py-24">
          <div className="organic-blob -left-12 bottom-0 h-96 w-96 bg-[#006B3F]/5" aria-hidden="true" />
          <div className="organic-blob -right-16 top-12 h-72 w-72 bg-[#C8102E]/5" aria-hidden="true" />

          <div className="relative mx-auto max-w-5xl">
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Professional Support</p>
                <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                  Need An Immigration Attorney To Help With Your Move To Kenya?
                </h2>
              </div>

              <p className="max-w-3xl text-lg leading-8 text-[#4f4f4f] sm:text-xl">
                Navigating immigration requirements can feel overwhelming. Whether you&apos;re planning to relocate, invest, retire, start a business, purchase property, or simply understand your visa options, we&apos;re here to help connect you with trusted resources.
              </p>

              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-[#C8102E]">Our Network Includes Experienced Professionals Who Can Help Guide You Through:</p>
                  <ul className="space-y-4 text-base leading-8 text-[#4f4f4f]">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-[#006B3F]">✓</span>
                      <span>Immigration Questions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-[#006B3F]">✓</span>
                      <span>Residency Pathways</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-[#006B3F]">✓</span>
                      <span>Investor & Business Options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-[#006B3F]">✓</span>
                      <span>Long-Term Stay Planning</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <ul className="space-y-4 text-base leading-8 text-[#4f4f4f]">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-[#006B3F]">✓</span>
                      <span>Property & Land Considerations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-[#006B3F]">✓</span>
                      <span>Relocation Planning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-[#006B3F]">✓</span>
                      <span>Documentation Guidance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-[#006B3F]">✓</span>
                      <span>Family Relocation Support</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-[2.5rem] border border-[#f0e7e4] bg-[#fffafa] p-8 shadow-sm">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#C8102E]">Important</p>
                <p className="text-base leading-8 text-[#4f4f4f]">
                  MoveToKenya.org does not provide legal advice and is not a law firm. We can help connect you with professional resources and trusted contacts based on your relocation goals.
                </p>
              </div>

              <div>
                <p className="mb-6 text-sm text-[#6b6b6b]">
                  Questions? Start with a free consultation and we&apos;ll help point you in the right direction.
                </p>
                <Link
                  href="/contact"
                  className="btn-primary inline-flex rounded-full px-8 py-4 text-base font-semibold text-white transition hover:bg-[#a00b1b]"
                >
                  Book A Free Consultation →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="relative rounded-[2.5rem] bg-[#fdf6f6] p-10 sm:p-14">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#C8102E]">Need Help Understanding Your Options?</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#111111] sm:text-4xl">
                Book A Free Consultation
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#4f4f4f] sm:text-lg">
                Speak with our relocation experts for advice on visas, work permits, retirement, digital nomad status, investor pathways, and family relocation.
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="btn-primary inline-flex rounded-full px-8 py-4 text-base font-semibold text-white transition hover:bg-[#a00b1b]"
              >
                Book A Free Consultation
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-3xl font-bold leading-tight text-[#111111] sm:text-4xl">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <Accordion key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
