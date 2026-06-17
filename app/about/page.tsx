import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import Image from "next/image";

const EVENTBRITE_URL =
  "https://www.eventbrite.com/e/welcome-to-the-cookout-exploring-life-opportunities-in-kenya-tickets-1991870594568?aff=oddtdtcreator";

const CALENDLY_URL =
  "https://calendly.com/artejagrier-movetokenya/start-your-move-to-kenya";

const whatWeDo = [
  {
    title: "Relocation Guidance",
    description:
      "Helping individuals and families better understand the relocation journey.",
    accent: "from-[#C8102E]/10 to-[#C8102E]/5",
    icon: "🧭",
  },
  {
    title: "Community Building",
    description:
      "Creating opportunities for meaningful connections and support.",
    accent: "from-[#C8102E]/8 to-[#fafafa]",
    icon: "🤝",
  },
  {
    title: "Business & Investment Insights",
    description: "Exploring opportunities available throughout Kenya.",
    accent: "from-[#C8102E]/6 to-[#fafafa]",
    icon: "📈",
  },
  {
    title: "Real Experiences",
    description:
      "Sharing firsthand perspectives from people living and working in Kenya.",
    accent: "from-[#C8102E]/10 to-[#C8102E]/5",
    icon: "✨",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#111111]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20 md:px-12 md:pt-24">
        <div className="organic-blob -left-24 top-8 h-72 w-72 bg-[#C8102E]" aria-hidden="true" />
        <div className="organic-blob -right-16 top-32 h-64 w-64 bg-[#C8102E]" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <FadeIn>
            <div className="max-w-4xl">
              <p className="editorial-eyebrow mb-5">Our Mission</p>
              <h1 className="editorial-headline mb-6">About MoveToKenya.org</h1>
              <p className="editorial-subhead max-w-2xl">
                Helping members of the African Diaspora explore life,
                opportunity, community, and relocation possibilities in Kenya.
              </p>
            </div>
          </FadeIn>

          <FadeIn className="mt-14">
            <div className="relative h-1 max-w-md overflow-hidden rounded-full bg-gray-100">
              <div className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-[#C8102E]" />
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
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C8102E]">
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
                  <div className="soft-card bg-[#fafafa] px-5 py-4 text-center sm:px-4">
                    <p className="text-base font-semibold text-[#1a1a1a] sm:text-sm">
                      🌍 Discover Kenya
                    </p>
                  </div>
                  <div className="soft-card bg-[#fafafa] px-5 py-4 text-center sm:px-4">
                    <p className="text-base font-semibold text-[#1a1a1a] sm:text-sm">
                      🤝 Build Connections
                    </p>
                  </div>
                  <div className="soft-card bg-[#fafafa] px-5 py-4 text-center sm:px-4">
                    <p className="text-base font-semibold text-[#1a1a1a] sm:text-sm">
                      🏡 Create Your New Beginning
                    </p>
                  </div>
                </div>

                <a
                  href="#consultation"
                  className="mt-8 inline-flex w-full items-center justify-center btn-primary px-8 py-4 text-sm font-semibold text-white transition  sm:w-auto"
                >
                  Start Your Journey
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Founder */}
      <section className="relative overflow-hidden bg-[#fafafa] px-4 py-16 sm:px-6 md:px-12 md:py-24">
        <div className="organic-blob -bottom-20 -left-20 h-64 w-64 bg-[#C8102E]" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <FadeIn>
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
              <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
                <div className="blob-mask shadow-[0_24px_64px_rgba(0,0,0,0.12)]">
                  <Image
                    src="/images/founder-arteja-grier.jpg"
                    alt="Arteja Grier, Founder of MoveToKenya.org"
                    width={600}
                    height={750}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>

              <div>
                <p className="editorial-eyebrow mb-4">Leadership</p>
                <h2 className="section-title mb-3">Meet the Founder</h2>
                <p className="mb-1 text-xl font-bold text-[#1a1a1a] sm:text-2xl">
                  Arteja Grier
                </p>
                <p className="mb-8 text-base font-medium text-[#C8102E] sm:text-lg">
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
            <h2 className="section-title mb-12 text-center md:mb-16">What We Do</h2>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {whatWeDo.map((item) => (
              <FadeIn key={item.title}>
                <div className={`soft-card group h-full bg-gradient-to-br ${item.accent} p-8 transition duration-300 hover:-translate-y-1`}>
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
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#fffafa] via-white to-[#fafafa]" />
        <div className="organic-blob right-[-80px] top-20 h-64 w-64 bg-[#C8102E]" aria-hidden="true" />

        <div className="relative mx-auto max-w-4xl">
          <FadeIn>
            <div className="glass-card p-8 text-center sm:p-12 md:p-14">
              <h2 className="section-title mb-6">Welcome to the Cookout</h2>

              <p className="mx-auto mb-8 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">
                A free weekly virtual event where members of the African Diaspora
                can connect, ask questions, learn about life in Kenya, and hear
                real experiences from those already living abroad.
              </p>

              <a
                href={EVENTBRITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center btn-primary px-8 py-4 text-sm font-semibold text-white transition duration-300 "
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
            <div className="dark-surface relative overflow-hidden rounded-3xl bg-[#1a1a1a] px-8 py-14 text-center text-white sm:px-12 sm:py-16 md:py-20">
              <div className="organic-blob -left-16 top-0 h-48 w-48 bg-[#C8102E]" aria-hidden="true" />
              <div className="organic-blob -bottom-16 -right-16 h-56 w-56 bg-[#C8102E]" aria-hidden="true" />

              <div className="relative">
                <h2 className="section-title mb-5 text-[#FFFFFF]">Ready to Explore Life in Kenya?</h2>

                <p className="mx-auto mb-10 max-w-2xl text-base leading-8 text-[#FFFFFF] sm:text-lg sm:leading-9">
                  Join our community, attend a virtual event, and discover what
                  your next chapter could look like.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href={EVENTBRITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary sm:w-auto"
                  >
                    Register for Welcome to the Cookout
                  </a>

                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary border-white/40 text-white hover:bg-white hover:text-[#1a1a1a] sm:w-auto"
                  >
                    Book a Consultation
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
