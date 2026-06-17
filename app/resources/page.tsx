import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | MoveToKenya.org",
  description:
    "Relocation resources, guides, downloads, and exclusive content from MoveToKenya.org. Coming soon.",
};

export default function ResourcesPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#1a1a1a]">
      <Navbar />

      <section className="relative flex flex-1 items-center justify-center px-4 py-20 sm:px-6 md:px-12">
        <div
          className="organic-blob -left-20 top-1/2 h-72 w-72 -translate-y-1/2 bg-[#C8102E]/10"
          aria-hidden="true"
        />
        <div
          className="organic-blob -right-20 top-1/2 h-72 w-72 -translate-y-1/2 bg-[#C8102E]/5"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-2xl text-center">
          <div className="section-divider mx-auto mb-8" />
          <p className="editorial-eyebrow mb-5">MoveToKenya.org</p>
          <h1 className="editorial-headline mb-6">Coming Soon</h1>
          <p className="editorial-subhead mx-auto max-w-xl text-[#6b6b6b]">
            Our relocation resources, guides, downloads, and exclusive content
            are currently being prepared. Check back soon.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
