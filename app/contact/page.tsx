

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8F6F2] text-[#111111]">

      <nav className="fixed left-0 top-0 z-50 w-full px-6 py-6 md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-xl">

          <a
            href="/"
            className="text-lg font-semibold uppercase tracking-[0.25em] text-white"
          >
            Move To Kenya
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-white md:flex">

            <a href="/" className="transition hover:text-[#D4AF37]">
              Home
            </a>

            <a href="/#why-kenya" className="transition hover:text-[#D4AF37]">
              Why Kenya
            </a>

            <a href="/contact" className="transition hover:text-[#D4AF37]">
              Contact
            </a>

            <a
              href="/#consultation"
              className="rounded-full bg-[#0E6B4B] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#0b573d]"
            >
              Book Free Consultation
            </a>

          </div>

        </div>
      </nav>

      <section className="relative overflow-hidden bg-[#111111] px-6 pb-28 pt-44 text-white md:px-12">

        <div className="absolute left-[-120px] top-10 h-[320px] w-[320px] rounded-full bg-[#0E6B4B]/20 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-100px] h-[320px] w-[320px] rounded-full bg-[#D4AF37]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Contact Us
          </p>

          <h1 className="mb-8 max-w-4xl text-6xl font-bold leading-tight md:text-8xl">
            Let’s Talk About
            <br />
            Your Move To Kenya.
          </h1>

          <p className="max-w-3xl text-xl leading-10 text-gray-300">
            Whether you are exploring relocation opportunities, planning a scouting trip,
            preparing for retirement abroad, or simply gathering information,
            our team is here to help guide you through the process.
          </p>

        </div>
      </section>

      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">

          <div className="rounded-[2.5rem] border border-[#E5D4A4] bg-gradient-to-br from-[#FFFDF8] to-[#F6EBCB] p-12 shadow-2xl">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A28]">
              Direct Contact
            </p>

            <h2 className="mb-8 text-5xl font-bold leading-tight text-[#111111]">
              Reach Out To Our Team
            </h2>

            <div className="space-y-8">

              <div className="rounded-3xl bg-white p-6 shadow-lg">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#B88A28]">
                  Email
                </p>

                <p className="text-2xl font-semibold text-[#111111]">
                  artejagrier@movetokenya.org
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-lg">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#B88A28]">
                  WhatsApp
                </p>

                <p className="text-2xl font-semibold text-[#111111]">
                  +1 (404) 789-8459
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-lg">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#B88A28]">
                  Consultation Hours
                </p>

                <p className="text-lg leading-8 text-gray-600">
                  Monday – Friday
                  <br />
                  10:00 AM – 6:00 PM EST
                </p>
              </div>

            </div>
          </div>

          <div className="rounded-[2.5rem] bg-[#111111] p-12 text-white shadow-2xl">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Book A Consultation
            </p>

            <h2 className="mb-8 text-5xl font-bold leading-tight">
              Ready To Begin Planning?
            </h2>

            <p className="mb-10 text-xl leading-10 text-gray-300">
              Schedule your free consultation and speak with our team about relocation guidance,
              housing options, lifestyle planning, ETA requirements, and preparing for your transition to Kenya.
            </p>

            <div className="space-y-6">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h4 className="mb-3 text-2xl font-bold">
                  Relocation Guidance
                </h4>

                <p className="leading-8 text-gray-400">
                  We help you better understand what to expect before relocating.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h4 className="mb-3 text-2xl font-bold">
                  Housing & Lifestyle
                </h4>

                <p className="leading-8 text-gray-400">
                  Explore different living options, cities, and lifestyle experiences throughout Kenya.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h4 className="mb-3 text-2xl font-bold">
                  Planning Your Transition
                </h4>

                <p className="leading-8 text-gray-400">
                  Learn more about travel preparation, ETA guidance, budgeting, and next steps.
                </p>
              </div>

            </div>

            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B88A28] px-12 py-5 text-sm font-semibold tracking-[0.15em] text-black shadow-xl transition duration-300 hover:scale-105"
            >
              Book Your Free Consultation
            </a>

          </div>

        </div>
      </section>

      <section className="bg-white px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[#E5E5E5] bg-[#F8F6F2] p-12 shadow-2xl">

          <div className="mb-14 max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A28]">
              Why People Reach Out
            </p>

            <h2 className="mb-8 text-5xl font-bold leading-tight text-[#111111]">
              Every Relocation Journey Looks Different.
            </h2>

            <p className="text-xl leading-10 text-gray-600">
              Some people are exploring temporary relocation. Others are researching retirement,
              remote work opportunities, entrepreneurship, family relocation, or investment opportunities.
              Our goal is to help you better understand the possibilities available.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:scale-[1.02]">
              <h4 className="mb-5 text-3xl font-bold text-[#111111]">
                Scouting Trips
              </h4>

              <p className="leading-9 text-gray-600">
                Many individuals begin with short-term visits before making larger relocation decisions.
              </p>
            </div>

            <div className="rounded-3xl bg-[#111111] p-8 text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:scale-[1.02]">
              <h4 className="mb-5 text-3xl font-bold">
                Remote Work Lifestyle
              </h4>

              <p className="leading-9 text-gray-400">
                Kenya continues attracting entrepreneurs, digital creators, and remote workers globally.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:scale-[1.02]">
              <h4 className="mb-5 text-3xl font-bold text-[#111111]">
                Long-Term Relocation
              </h4>

              <p className="leading-9 text-gray-600">
                Some families and individuals choose Kenya for lifestyle changes, business opportunities, or retirement abroad.
              </p>
            </div>

          </div>

        </div>
      </section>

      <footer className="bg-[#111111] px-6 py-16 text-white md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">

          <div>
            <h4 className="mb-3 text-3xl font-bold">
              Move To Kenya
            </h4>

            <p className="max-w-md leading-8 text-gray-400">
              Helping individuals, families, entrepreneurs, and remote workers explore relocation opportunities and lifestyle possibilities throughout Kenya.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm text-gray-400">
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

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          © 2026 MoveToKenya.org — All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}