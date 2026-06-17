import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#1a1a1a]">
      <Navbar />

      <section className="dark-surface relative overflow-hidden bg-[#1a1a1a] px-4 pb-20 pt-12 text-white sm:px-6 sm:pb-28 sm:pt-16 md:px-12 md:pt-20">
        <div className="organic-blob -left-20 top-10 h-80 w-80 bg-[#C8102E]" aria-hidden="true" />
        <div className="organic-blob -bottom-20 -right-16 h-80 w-80 bg-[#C8102E]" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <p className="editorial-eyebrow mb-5">Contact Us</p>
          <h1 className="editorial-headline mb-6 max-w-4xl text-white">
            Let&apos;s Talk About
            <br />
            Your Move To Kenya.
          </h1>
          <p className="editorial-subhead max-w-3xl text-[#FFFFFF]">
            Whether you are exploring relocation opportunities, planning a scouting trip,
            preparing for retirement abroad, or simply gathering information,
            our team is here to help guide you through the process.
          </p>
        </div>
      </section>

      <section className="flow-section">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="soft-card bg-gradient-to-br from-[#fffafa] to-white p-8 md:p-12">
            <p className="editorial-eyebrow mb-4">Direct Contact</p>
            <h2 className="section-title mb-8">Reach Out To Our Team</h2>

            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                <p className="editorial-eyebrow mb-2">Email</p>
                <p className="break-all text-lg font-semibold text-[#1a1a1a] sm:text-2xl">
                  artejagrier@movetokenya.org
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                <p className="editorial-eyebrow mb-2">WhatsApp</p>
                <p className="text-lg font-semibold text-[#1a1a1a] sm:text-2xl">
                  +1 (404) 789-8459
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                <p className="editorial-eyebrow mb-2">Consultation Hours</p>
                <p className="text-base leading-8 text-[#6b6b6b] sm:text-lg">
                  Monday – Friday
                  <br />
                  10:00 AM – 6:00 PM EST
                </p>
              </div>
            </div>
          </div>

          <div className="dark-surface rounded-3xl bg-[#1a1a1a] p-8 text-white md:p-12">
            <p className="editorial-eyebrow mb-4">Book A Consultation</p>
            <h2 className="section-title mb-8 text-[#FFFFFF]">Ready To Begin Planning?</h2>
            <p className="mb-8 text-base leading-8 text-[#FFFFFF] sm:mb-10 sm:text-lg md:text-xl md:leading-10">
              Schedule your free consultation and speak with our team about relocation guidance,
              housing options, lifestyle planning, ETA requirements, and preparing for your transition to Kenya.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-xl">
                <h4 className="mb-2 text-xl font-bold text-[#FFFFFF] sm:mb-3 sm:text-2xl">Relocation Guidance</h4>
                <p className="leading-7 text-[#FFFFFF] sm:leading-8">
                  We help you better understand what to expect before relocating.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-xl">
                <h4 className="mb-2 text-xl font-bold text-[#FFFFFF] sm:mb-3 sm:text-2xl">Housing & Lifestyle</h4>
                <p className="leading-7 text-[#FFFFFF] sm:leading-8">
                  Explore different living options, cities, and lifestyle experiences throughout Kenya.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-xl">
                <h4 className="mb-2 text-xl font-bold text-[#FFFFFF] sm:mb-3 sm:text-2xl">Planning Your Transition</h4>
                <p className="leading-7 text-[#FFFFFF] sm:leading-8">
                  Learn more about travel preparation, ETA guidance, budgeting, and next steps.
                </p>
              </div>
            </div>

            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 sm:mt-10"
            >
              Book Your Free Consultation
            </a>
          </div>
        </div>
      </section>

      <section className="flow-section flow-section--soft">
        <div className="mx-auto max-w-7xl soft-card bg-[#fafafa] p-8 md:p-12">
          <div className="mb-10 max-w-4xl md:mb-14">
            <p className="editorial-eyebrow mb-4">Why People Reach Out</p>
            <h2 className="section-title mb-6">Every Relocation Journey Looks Different.</h2>
            <p className="editorial-subhead">
              Some people are exploring temporary relocation. Others are researching retirement,
              remote work opportunities, entrepreneurship, family relocation, or investment opportunities.
              Our goal is to help you better understand the possibilities available.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            <div className="soft-card p-8">
              <h4 className="mb-4 text-2xl font-bold text-[#1a1a1a] sm:mb-5 sm:text-3xl">Scouting Trips</h4>
              <p className="leading-8 text-[#6b6b6b] sm:leading-9">
                Many individuals begin with short-term visits before making larger relocation decisions.
              </p>
            </div>
            <div className="dark-surface rounded-3xl bg-[#1a1a1a] p-8 text-white">
              <h4 className="mb-4 text-2xl font-bold text-[#FFFFFF] sm:mb-5 sm:text-3xl">Remote Work Lifestyle</h4>
              <p className="leading-8 text-[#FFFFFF] sm:leading-9">
                Kenya continues attracting entrepreneurs, digital creators, and remote workers globally.
              </p>
            </div>
            <div className="soft-card p-8">
              <h4 className="mb-4 text-2xl font-bold text-[#1a1a1a] sm:mb-5 sm:text-3xl">Long-Term Relocation</h4>
              <p className="leading-8 text-[#6b6b6b] sm:leading-9">
                Some families and individuals choose Kenya for lifestyle changes, business opportunities, or retirement abroad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
