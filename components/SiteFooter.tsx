import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#1a1a1a] text-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-[#C8102E]" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 md:px-12 md:py-20">
        <h4 className="mb-3 text-2xl font-bold tracking-tight">MoveToKenya.org</h4>
        <p className="mx-auto mb-8 max-w-md text-sm leading-7 text-[#FFFFFF] sm:text-base">
          Relocation guidance and consultation support for individuals and
          families preparing to move to Kenya.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#FFFFFF]">
          <a href="#" className="transition hover:text-[#C8102E]">Privacy</a>
          <a href="#" className="transition hover:text-[#C8102E]">Terms</a>
          <Link href="/contact" className="transition hover:text-[#C8102E]">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
