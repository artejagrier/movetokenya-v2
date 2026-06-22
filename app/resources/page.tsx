import Link from "next/link";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { resourcesItems } from "@/lib/resources";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | MoveToKenya.org",
  description:
    "Relocation resources, guides, and exclusive content from MoveToKenya.org to help you plan your move to Kenya.",
};

export default function ResourcesPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#111111]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:px-12 lg:py-28">
        <div className="organic-blob -left-24 top-0 h-72 w-72 bg-[#C8102E]/10" aria-hidden="true" />
        <div className="organic-blob -right-24 top-20 h-72 w-72 bg-[#C8102E]/5" aria-hidden="true" />

        <div className="mx-auto max-w-7xl">
          <div className="space-y-8 text-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C8102E]">MoveToKenya.org</p>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl md:text-6xl">
                Relocation Resources & Guides
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4f4f4f]">
                Premium editorial content to guide your journey to Kenya. From visas and cost of living to healthcare, education, and lifestyle planning—everything you need to know before and after your move.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="px-4 pb-20 sm:px-6 md:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Complete Guides</p>
              <h2 className="mt-4 text-3xl font-bold text-[#111111]">All Resources</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {resourcesItems.map((resource) => (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="group rounded-[2.5rem] border border-[#f2e7e4] bg-white p-8 shadow-sm transition hover:border-[#C8102E]/50 hover:shadow-md"
                >
                  <h3 className="text-xl font-semibold text-[#111111] transition group-hover:text-[#C8102E]">
                    {resource.title}
                  </h3>
                  <p className="mt-4 text-sm text-[#4f4f4f]">{resource.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#C8102E]">
                    Learn more
                    <span className="transition group-hover:translate-x-1">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-[#f8f3f2] px-4 py-20 sm:px-6 md:px-12 lg:py-28">
        <div className="organic-blob -left-20 top-0 h-96 w-96 bg-[#006B3F]/5" aria-hidden="true" />
        <div className="organic-blob -right-20 bottom-0 h-96 w-96 bg-[#C8102E]/5" aria-hidden="true" />

        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C8102E]">Get Personalized Guidance</p>
          <h2 className="mt-4 text-3xl font-bold text-[#111111] sm:text-4xl">
            Ready to Move to Kenya?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#4f4f4f]">
            Book a free consultation with our team to discuss your relocation goals, timeline, and any questions about the resources above.
          </p>
          <Link
            href="/contact"
            className="btn-primary mt-8 inline-flex rounded-full px-8 py-4 text-base font-semibold text-white transition hover:bg-[#a00b1b]"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
