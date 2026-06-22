import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions About Moving To Kenya | MoveToKenya.org",
  description:
    "Answers to the most common relocation questions about visas, housing, healthcare, digital nomads, and life in Kenya.",
};

const faqGroups = [
  {
    title: "Visas & Immigration",
    questions: [
      { question: "Do I need a visa to move to Kenya?", answer: "Most foreign nationals require a visa or permit before moving to Kenya. Requirements vary by nationality and purpose of stay." },
      { question: "What is an ETA?", answer: "An ETA is the Electronic Travel Authorization for short-term entry and initial visits, allowing eligible travelers to enter Kenya for tourism or preliminary relocation planning." },
      { question: "Can I work remotely in Kenya?", answer: "Yes, remote work is possible through the Digital Nomad Permit (Class N) or other appropriate visas, not via short-term tourist authorization for long stays." },
      { question: "How long can I stay?", answer: "Stay durations depend on the permit or visa you obtain. ETAs are for short visits, while residence permits allow longer-term stays." },
    ],
  },
  {
    title: "Housing",
    questions: [
      { question: "Can foreigners buy property?", answer: "Foreigners can own certain types of property in Kenya, and working with local professionals ensures you understand regulations and fees." },
      { question: "How much does rent cost?", answer: "Rent varies by city and neighborhood. Nairobi and coastal areas offer options from modest apartments to luxury homes depending on your budget." },
      { question: "What are the safest neighborhoods?", answer: "Popular safe neighborhoods include Karen, Lavington, Kilimani, Westlands, and Nyali, but always evaluate security and amenities for your family." },
    ],
  },
  {
    title: "Cost of Living",
    questions: [
      { question: "How much money do I need monthly?", answer: "Monthly budgets typically range from $1,300 to $2,500 USD for a comfortable lifestyle, depending on location and personal preferences." },
      { question: "Is Kenya cheaper than the United States?", answer: "Yes, many expats find Kenya more affordable for housing, food, domestic support, and services while still enjoying modern amenities." },
      { question: "Can I live comfortably on retirement income?", answer: "Many retirees live well on modest incomes in Kenya, especially if they budget for housing and lifestyle in coastal or suburban areas." },
    ],
  },
  {
    title: "Healthcare",
    questions: [
      { question: "Is healthcare good in Kenya?", answer: "Kenya has high-quality private hospitals and clinics in major cities, and many expats rely on private healthcare for key services." },
      { question: "Do I need insurance?", answer: "Yes, insurance is strongly recommended to cover private care, emergencies, and international medical support." },
      { question: "What hospitals do expats use?", answer: "Expats commonly use Aga Khan, Nairobi Hospital, MP Shah, AAR, Gertrude’s Children’s Hospital, and Diani Beach Hospital." },
    ],
  },
  {
    title: "Families",
    questions: [
      { question: "Are international schools available?", answer: "Yes, Kenya offers numerous international schools with British, American, and IB curricula in Nairobi and other major regions." },
      { question: "Is Kenya family-friendly?", answer: "Yes, Kenya is family-friendly with outdoor activities, expat communities, cultural experiences, and youth-oriented amenities." },
      { question: "What activities exist for children?", answer: "Children can enjoy safaris, wildlife centers, beaches, museums, parks, and educational attractions like the Giraffe Centre." },
    ],
  },
  {
    title: "Retirement",
    questions: [
      { question: "Can Americans retire in Kenya?", answer: "Yes, Americans can retire in Kenya by applying for the Class K Ordinary Residence Permit and meeting income and documentation requirements." },
      { question: "What is a Class K Permit?", answer: "Class K is a retirement permit for foreign nationals with stable income who wish to live long term in Kenya." },
      { question: "How much income is required?", answer: "Applicants should demonstrate reliable income from outside Kenya, typically with evidence of sufficient funds to support their retirement lifestyle." },
    ],
  },
  {
    title: "Digital Nomads",
    questions: [
      { question: "Is remote work allowed?", answer: "Remote work is allowed with the proper permit, such as the Digital Nomad Permit or other relevant visas." },
      { question: "Is internet reliable?", answer: "Yes, Kenya offers reliable internet through providers like Safaricom, Airtel, and Faiba, especially in major cities and coworking hubs." },
      { question: "What are the best cities?", answer: "Nairobi, Diani, Mombasa, and selected coastal towns are top choices for digital nomads." },
    ],
  },
  {
    title: "Transportation",
    questions: [
      { question: "Do I need a car?", answer: "A car can add convenience, but ride services, public transport, and trains are good options in major cities." },
      { question: "Is Uber available?", answer: "Yes, Uber is widely available in Nairobi and other urban areas, alongside Bolt and local ride services." },
      { question: "What is M-PESA?", answer: "M-PESA is Kenya’s mobile money platform for sending payments, paying bills, and managing finances securely." },
    ],
  },
  {
    title: "Safety",
    questions: [
      { question: "Is Kenya safe?", answer: "Many areas are safe for expats and families, but visitors should follow local guidance, avoid risky neighborhoods, and use trusted transport." },
      { question: "What precautions should I take?", answer: "Use secure accommodations, avoid displaying valuables, and travel with reputable providers when exploring unfamiliar areas." },
      { question: "What areas should I avoid?", answer: "Avoid regions with security advisories and always confirm current travel guidance before visiting unfamiliar areas." },
    ],
  },
  {
    title: "MoveToKenya.org",
    questions: [
      { question: "Do you provide legal advice?", answer: "MoveToKenya.org provides information, education, and community resources. We do not provide legal advice." },
      { question: "Do you provide immigration services?", answer: "No, we do not directly provide immigration services. We connect you with trusted professionals and licensed advisors." },
      { question: "How do I book a consultation?", answer: "Book a consultation through our contact page to speak with relocation experts about your move." },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#111111]">
      <Navbar />

      <section className="px-4 py-20 sm:px-6 md:px-12 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-semibold leading-tight text-[#111111] sm:text-6xl">
                Frequently Asked Questions About Moving To Kenya
              </h1>
              <div className="mt-4 h-1 w-16 rounded-full bg-[#C8102E]" />
              <p className="mt-8 text-xl leading-9 text-[#4f4f4f]">
                Answers to the most common relocation questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 md:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.5rem] overflow-hidden border border-[#ece8e4] shadow-[0_30px_90px_rgba(17,17,17,0.08)]">
            <Image
              src="/images/kenya-faq.jpg"
              alt="People asking relocation questions at a seminar"
              width={1600}
              height={900}
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 md:px-12 lg:pb-32">
        <div className="mx-auto max-w-7xl space-y-12">
          {faqGroups.map((group) => (
            <div key={group.title} className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">{group.title}</p>
                <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                  {group.title}
                </h2>
              </div>
              <div className="space-y-4">
                {group.questions.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-[2rem] border border-[#f2e7e4] bg-[#ffffff] p-6 shadow-sm"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-[#111111]">
                      {faq.question}
                      <span className="text-[#C8102E]">+</span>
                    </summary>
                    <div className="mt-4 text-base leading-8 text-[#4f4f4f]">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-4 pb-32 sm:px-6 md:px-12 lg:pb-36">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[3rem] bg-[#fdf6f6] p-10 text-center shadow-[0_24px_90px_rgba(17,17,17,0.08)] sm:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C8102E]">Still Have Questions?</p>
            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
              Book Your Free Consultation Today
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4f4f4f] sm:text-xl">
              MoveToKenya.org provides information and direction for your move, but does not provide legal advice. Consult licensed professionals for immigration, tax, and financial decisions.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-full bg-[#C8102E] px-10 py-4 text-base font-semibold text-white transition hover:bg-[#a00b1b]"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
