import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const EVENTBRITE_URL =
  "https://www.eventbrite.com/e/welcome-to-the-cookout-exploring-life-opportunities-in-kenya-tickets-1991870594568?aff=oddtdtcreator";

const CALENDLY_URL =
  "https://calendly.com/artejagrier-movetokenya/start-your-move-to-kenya";

const whatWeDo = [
  {
    title: "Relocation Guidance",
    description:
      "Helping individuals and families better understand the relocation journey.",
    accent: "from-[#0E6B4B]/10 to-[#0E6B4B]/5",
    icon: "🧭",
  },
  {
    title: "Community Building",
    description:
      "Creating opportunities for meaningful connections and support.",
    accent: "from-[#D4AF37]/15 to-[#D4AF37]/5",
    icon: "🤝",
  },
  {
    title: "Business & Investment Insights",
    description: "Exploring opportunities available throughout Kenya.",
    accent: "from-[#4285F4]/10 to-[#4285F4]/5",
    icon: "📈",
  },
  {
    title: "Real Experiences",
    description:
      "Sharing firsthand perspectives from people living and working in Kenya.",
    accent: "from-[#C62828]/10 to-[#C62828]/5",
    icon: "✨",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#111111]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20 md:px-12 md:pt-24">
        <div className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-[40%_60%_70%_30%] bg-gradient-to-br from-[#0E6B4B]/15 to-[#4285F4]/10 blur-2xl" />
        <div className="pointer-events-none absolute -right-16 top-32 h-64 w-64 rounded-[60%_40%_30%_70%] bg-gradient-to-br from-[#D4AF37]/20 to-[#F8F6F2] blur-2xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-48 w-96 rounded-full bg-gradient-to-r from-[#0E6B4B]/5 to-transparent blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <FadeIn>
            <div className="max-w-4xl">
              <p className="mb-5 inline-flex items-center rounded-full border border-gray-200/80 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-[#0E6B4B] backdrop-blur-md sm:text-sm">
                Our Mission
              </p>

              <h1 className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-[#111111] sm:text-5xl md:text-6xl lg:text-7xl">
                About MoveToKenya.org
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl sm:leading-9">
                Helping members of the African Diaspora explore life,
                opportunity, community, and relocation possibilities in Kenya.
              </p>
            </div>
          </FadeIn>

          <FadeIn className="mt-14">
            <div className="relative h-2 max-w-md overflow-hidden rounded-full bg-gray-100">
              <div className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-gradient-to-r from-[#0E6B4B] via-[#4285F4] to-[#D4AF37]" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="about" className="bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24">
        <FadeIn>
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="flex items-center justify-center lg:justify-start">
                <Image
                  src="/images/movetokenya-logo.png"
                  alt="MoveToKenya.org Logo"
                  width={500}
                  height={500}
                  priority
                  className="mx-auto h-auto w-[85%] max-w-[500px] object-contain lg:mx-0"
                />
              </div>

              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                  Inform • Connect • Empower
                </p>

                <h3 className="mb-6 text-3xl font-bold leading-tight text-[#111111] sm:text-4xl md:text-5xl">
                  About MoveToKenya.org
                </h3>

                <div className="space-y-5 text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">
                  <p>
                    MoveToKenya.org was created to help individuals, families,
                    entrepreneurs, investors, retirees, remote workers, and
                    members of the African Diaspora confidently explore life in
                    Kenya.
                  </p>

                  <p>
                    Our mission is simple: to bridge the gap between curiosity
                    and relocation by providing trusted information, meaningful
                    connections, and practical guidance for those considering
                    Kenya as their next home.
                  </p>

                  <p>
                    Whether you&apos;re interested in visiting, investing,
                    building, retiring, working remotely, starting a business,
                    or relocating permanently, MoveToKenya.org connects you with
                    the resources, people, and opportunities that make the
                    journey easier.
                  </p>

                  <p>
                    We believe Kenya offers incredible potential, vibrant
                    communities, world-class natural beauty, and a unique
                    opportunity to build a life filled with purpose, freedom,
                    and possibility.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-3">
                  <div className="rounded-2xl border border-gray-200 bg-[#F8F6F2] px-5 py-4 text-center sm:px-4">
                    <p className="text-base font-semibold text-[#111111] sm:text-sm">
                      🌍 Discover Kenya
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-[#F8F6F2] px-5 py-4 text-center sm:px-4">
                    <p className="text-base font-semibold text-[#111111] sm:text-sm">
                      🤝 Build Connections
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-[#F8F6F2] px-5 py-4 text-center sm:px-4">
                    <p className="text-base font-semibold text-[#111111] sm:text-sm">
                      🏡 Create Your New Beginning
                    </p>
                  </div>
                </div>

                <a
                  href="#consultation"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#0E6B4B] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#0b573d] sm:w-auto"
                >
                  Start Your Journey
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Founder */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8F6F2]/50 to-white px-4 py-16 sm:px-6 md:px-12 md:py-24">
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#0E6B4B]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <FadeIn>
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
              <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
                <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#0E6B4B]/20 via-[#D4AF37]/10 to-[#4285F4]/10 blur-xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/40 p-3 shadow-[0_25px_70px_rgba(0,0,0,0.1)] backdrop-blur-sm">
                  <Image
                    src="/images/founder-arteja-grier.jpg"
                    alt="Arteja Grier, Founder of MoveToKenya.org"
                    width={600}
                    height={750}
                    className="h-auto w-full rounded-[1.5rem] object-cover"
                  />
                </div>
              </div>

              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                  Leadership
                </p>

                <h2 className="mb-3 text-3xl font-bold text-[#111111] sm:text-4xl md:text-5xl">
                  Meet the Founder
                </h2>

                <p className="mb-1 text-xl font-bold text-[#111111] sm:text-2xl">
                  Arteja Grier
                </p>

                <p className="mb-8 text-base font-medium text-[#0E6B4B] sm:text-lg">
                  Founder, MoveToKenya.org
                </p>

                <div className="space-y-5 text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">
                  <p>
                    After relocating from the United States to Kenya, Arteja
                    experienced firsthand both the excitement and the challenges
                    that come with building a new life abroad.
                  </p>

                  <p>
                    MoveToKenya.org was created to bridge the information gap for
                    others considering a similar journey.
                  </p>

                  <p>
                    Through community, education, networking opportunities,
                    virtual events, and practical resources, the vision is to
                    make relocation more accessible, transparent, and empowering
                    for members of the African Diaspora.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What We Do */}
      <section className="px-4 py-16 sm:px-6 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold text-[#111111] sm:text-4xl md:mb-16 md:text-5xl">
              What We Do
            </h2>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {whatWeDo.map((item) => (
              <FadeIn key={item.title}>
                <div
                  className={`group h-full rounded-[2rem] border border-gray-100 bg-gradient-to-br ${item.accent} p-8 shadow-[0_12px_40px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]`}
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 text-2xl shadow-sm backdrop-blur-sm">
                    {item.icon}
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-[#111111] sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="leading-8 text-gray-600">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome To The Cookout */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 md:px-12 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#FFF9EE] via-white to-[#F0FDF4]" />
        <div className="pointer-events-none absolute right-[-80px] top-20 h-64 w-64 rounded-[40%_60%_50%_50%] bg-[#D4AF37]/15 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <FadeIn>
            <div className="rounded-[2.5rem] border border-white/80 bg-white/70 p-8 text-center shadow-[0_25px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:p-12 md:p-14">
              <h2 className="mb-6 text-3xl font-bold text-[#111111] sm:text-4xl md:text-5xl">
                Welcome to the Cookout
              </h2>

              <p className="mx-auto mb-8 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">
                A free weekly virtual event where members of the African Diaspora
                can connect, ask questions, learn about life in Kenya, and hear
                real experiences from those already living abroad.
              </p>

              <a
                href={EVENTBRITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#0E6B4B] px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#0b573d]"
              >
                Register Free
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-16 sm:px-6 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#111111] px-8 py-14 text-center text-white sm:px-12 sm:py-16 md:py-20">
              <div className="pointer-events-none absolute -left-16 top-0 h-48 w-48 rounded-full bg-[#0E6B4B]/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[#D4AF37]/20 blur-3xl" />

              <div className="relative">
                <h2 className="mb-5 text-3xl font-bold sm:text-4xl md:text-5xl">
                  Ready to Explore Life in Kenya?
                </h2>

                <p className="mx-auto mb-10 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg sm:leading-9">
                  Join our community, attend a virtual event, and discover what
                  your next chapter could look like.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href={EVENTBRITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B88A28] px-8 py-4 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02] sm:w-auto"
                  >
                    Register for Welcome to the Cookout
                  </a>

                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-[#111111] sm:w-auto"
                  >
                    Book a Consultation
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="border-t border-gray-100 bg-white px-4 py-10 text-center text-sm text-gray-500 sm:px-6 md:px-12">
        <p className="mb-4 font-semibold text-[#111111]">MoveToKenya.org</p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <Link href="/" className="transition hover:text-[#0E6B4B]">
            Home
          </Link>
          <Link href="/about" className="transition hover:text-[#0E6B4B]">
            About Us
          </Link>
          <Link href="/contact" className="transition hover:text-[#0E6B4B]">
            Contact
          </Link>
          <a href="/#why-kenya" className="transition hover:text-[#0E6B4B]">
            Why Kenya
          </a>
        </div>
        <p className="mt-8">© 2026 MoveToKenya.org — All Rights Reserved.</p>
      </footer>
    </main>
  );
}
