import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8F6F2] text-[#111111]">
      <Navbar />

      <section className="relative overflow-hidden bg-[#111111] px-4 pb-20 pt-12 text-white sm:px-6 sm:pb-28 sm:pt-16 md:px-12 md:pt-20">
        <div className="absolute left-[-120px] top-10 h-[320px] w-[320px] rounded-full bg-[#0E6B4B]/20 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-100px] h-[320px] w-[320px] rounded-full bg-[#D4AF37]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37] sm:mb-5">
            Contact Us
          </p>

          <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:mb-8 md:text-6xl lg:text-8xl">
            Let’s Talk About
            <br />
            Your Move To Kenya.
          </h1>

          <p className="max-w-3xl text-base leading-8 text-gray-300 sm:text-lg md:text-xl md:leading-10">
            Whether you are exploring relocation opportunities, planning a scouting trip,
            preparing for retirement abroad, or simply gathering information,
            our team is here to help guide you through the process.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="rounded-[2.5rem] border border-[#E5D4A4] bg-gradient-to-br from-[#FFFDF8] to-[#F6EBCB] p-6 shadow-2xl sm:p-8 md:p-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A28]">
              Direct Contact
            </p>

            <h2 className="mb-6 text-3xl font-bold leading-tight text-[#111111] sm:mb-8 sm:text-4xl md:text-5xl">
              Reach Out To Our Team
            </h2>

            <div className="space-y-6 sm:space-y-8">
              <div className="rounded-3xl bg-white p-5 shadow-lg sm:p-6">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#B88A28]">
                  Email
                </p>

                <p className="break-all text-lg font-semibold text-[#111111] sm:text-2xl">
                  artejagrier@movetokenya.org
                </p>
              </div>

              <div className="rounded-3xl bg-white p-5 shadow-lg sm:p-6">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#B88A28]">
                  WhatsApp
                </p>

                <p className="text-lg font-semibold text-[#111111] sm:text-2xl">
                  +1 (404) 789-8459
                </p>
              </div>

              <div className="rounded-3xl bg-white p-5 shadow-lg sm:p-6">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#B88A28]">
                  Consultation Hours
                </p>

                <p className="text-base leading-8 text-gray-600 sm:text-lg">
                  Monday – Friday
                  <br />
                  10:00 AM – 6:00 PM EST
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-[#111111] p-6 text-white shadow-2xl sm:p-8 md:p-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Book A Consultation
            </p>

            <h2 className="mb-6 text-3xl font-bold leading-tight sm:mb-8 sm:text-4xl md:text-5xl">
              Ready To Begin Planning?
            </h2>

            <p className="mb-8 text-base leading-8 text-gray-300 sm:mb-10 sm:text-lg md:text-xl md:leading-10">
              Schedule your free consultation and speak with our team about relocation guidance,
              housing options, lifestyle planning, ETA requirements, and preparing for your transition to Kenya.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-6">
                <h4 className="mb-2 text-xl font-bold sm:mb-3 sm:text-2xl">
                  Relocation Guidance
                </h4>

                <p className="leading-7 text-gray-400 sm:leading-8">
                  We help you better understand what to expect before relocating.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-6">
                <h4 className="mb-2 text-xl font-bold sm:mb-3 sm:text-2xl">
                  Housing & Lifestyle
                </h4>

                <p className="leading-7 text-gray-400 sm:leading-8">
                  Explore different living options, cities, and lifestyle experiences throughout Kenya.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-6">
                <h4 className="mb-2 text-xl font-bold sm:mb-3 sm:text-2xl">
                  Planning Your Transition
                </h4>

                <p className="leading-7 text-gray-400 sm:leading-8">
                  Learn more about travel preparation, ETA guidance, budgeting, and next steps.
                </p>
              </div>
            </div>

            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B88A28] px-6 py-4 text-sm font-semibold tracking-[0.15em] text-black shadow-xl transition duration-300 hover:scale-105 sm:mt-10 sm:w-auto sm:px-12 sm:py-5"
            >
              Book Your Free Consultation
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[#E5E5E5] bg-[#F8F6F2] p-6 shadow-2xl sm:p-8 md:p-12">
          <div className="mb-10 max-w-4xl md:mb-14">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A28]">
              Why People Reach Out
            </p>

            <h2 className="mb-6 text-3xl font-bold leading-tight text-[#111111] sm:mb-8 sm:text-4xl md:text-5xl">
              Every Relocation Journey Looks Different.
            </h2>

            <p className="text-base leading-8 text-gray-600 sm:text-lg md:text-xl md:leading-10">
              Some people are exploring temporary relocation. Others are researching retirement,
              remote work opportunities, entrepreneurship, family relocation, or investment opportunities.
              Our goal is to help you better understand the possibilities available.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            <div className="rounded-3xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:scale-[1.02] sm:p-8">
              <h4 className="mb-4 text-2xl font-bold text-[#111111] sm:mb-5 sm:text-3xl">
                Scouting Trips
              </h4>

              <p className="leading-8 text-gray-600 sm:leading-9">
                Many individuals begin with short-term visits before making larger relocation decisions.
              </p>
            </div>

            <div className="rounded-3xl bg-[#111111] p-6 text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:scale-[1.02] sm:p-8">
              <h4 className="mb-4 text-2xl font-bold sm:mb-5 sm:text-3xl">
                Remote Work Lifestyle
              </h4>

              <p className="leading-8 text-gray-400 sm:leading-9">
                Kenya continues attracting entrepreneurs, digital creators, and remote workers globally.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:scale-[1.02] sm:p-8">
              <h4 className="mb-4 text-2xl font-bold text-[#111111] sm:mb-5 sm:text-3xl">
                Long-Term Relocation
              </h4>

              <p className="leading-8 text-gray-600 sm:leading-9">
                Some families and individuals choose Kenya for lifestyle changes, business opportunities, or retirement abroad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#111111] px-4 py-12 text-white sm:px-6 md:px-12 md:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <h4 className="mb-3 text-2xl font-bold sm:text-3xl">
              Move To Kenya
            </h4>

            <p className="max-w-md leading-8 text-gray-400">
              Helping individuals, families, entrepreneurs, and remote workers explore relocation opportunities and lifestyle possibilities throughout Kenya.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 text-sm text-gray-400 md:items-end">
            <a href="/" className="transition hover:text-white">
              Home
            </a>

            <a href="/#why-kenya" className="transition hover:text-white">
              Why Kenya
            </a>

            <a href="/contact" className="transition hover:text-white">
              Contact
            </a>

            <a href="/#consultation" className="transition hover:text-white">
              Book Consultation
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-gray-500 sm:mt-12">
          © 2026 MoveToKenya.org — All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}
