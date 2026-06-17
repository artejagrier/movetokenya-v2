import FadeIn from "@/components/FadeIn";
import WaveDivider from "@/components/WaveDivider";
import Image from "next/image";

export default function ConsultationSection() {
  return (
    <>
      <div className="wave-divider bg-[#1a1a1a]" aria-hidden="true">
        <WaveDivider fill="#ffffff" flip />
      </div>

      <section
        id="consultation"
        className="relative overflow-hidden bg-gradient-to-b from-white via-[#fffafa] to-[#fafafa] pb-24 pt-4 md:pb-32"
      >
        <div
          className="organic-blob right-0 top-0 h-[420px] w-[420px] bg-[#C8102E]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
            <FadeIn>
              <div className="pt-0 lg:pt-8">
                <p className="editorial-eyebrow mb-5">Consultation Request</p>
                <h3 className="editorial-headline mb-6 max-w-xl">
                  Book Your Free Consultation
                </h3>
                <p className="editorial-subhead max-w-lg">
                  Schedule a free consultation to discuss your relocation goals, lifestyle interests, and next steps for moving to Kenya. Our team will guide you through the early planning process and help you understand what to expect.
                </p>

                <div className="relative mt-10 hidden overflow-hidden rounded-3xl lg:block">
                  <Image
                    src="/images/nairobi-skyline.jpg"
                    alt=""
                    width={700}
                    height={900}
                    className="blob-mask-alt h-[380px] w-full object-cover"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="glass-card p-8 sm:p-10 lg:mt-6">
                <div className="mb-8 grid gap-6 sm:grid-cols-3">
                  <div>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#C8102E] text-lg font-bold text-white">
                      1
                    </div>
                    <h4 className="mb-2 text-lg font-bold text-[#1a1a1a]">Book Free Consultation</h4>
                    <p className="text-sm leading-7 text-[#6b6b6b]">
                      Select your preferred date and time directly through our consultation booking calendar.
                    </p>
                  </div>
                  <div>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#1a1a1a] text-lg font-bold text-white">
                      2
                    </div>
                    <h4 className="mb-2 text-lg font-bold text-[#1a1a1a]">Receive Confirmation</h4>
                    <p className="text-sm leading-7 text-[#6b6b6b]">
                      We will send you a confirmation email with your consultation details and next steps.
                    </p>
                  </div>
                  <div>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#C8102E]/10 text-lg font-bold text-[#C8102E]">
                      3
                    </div>
                    <h4 className="mb-2 text-lg font-bold text-[#1a1a1a]">Begin Planning</h4>
                    <p className="text-sm leading-7 text-[#6b6b6b]">
                      Prepare for your consultation and review our future pre-qualification page to understand what you may need before moving to Kenya.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-[#fafafa] p-8 text-center md:p-10">
                  <p className="editorial-eyebrow mb-4">Free Relocation Consultation</p>
                  <h3 className="section-title mb-4">Ready To Explore Your Move To Kenya?</h3>
                  <p className="mx-auto mb-8 max-w-lg text-base leading-8 text-[#6b6b6b]">
                    Book a free consultation and speak with our team about relocation guidance, lifestyle planning, remote work opportunities, and preparing for your transition abroad.
                  </p>
                  <a
                    href="https://calendly.com/artejagrier-movetokenya/start-your-move-to-kenya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Book Your Free Consultation
                  </a>
                  <p className="mt-6 text-sm leading-7 text-[#6b6b6b]">
                    You will be able to choose your preferred day and time directly through our scheduling calendar.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
