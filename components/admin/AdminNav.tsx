import Link from "next/link";
import { signOut } from "@/lib/admin/actions";

export default function AdminNav() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-6">
          <Link href="/admin" className="text-lg font-bold text-[#1a1a1a]">
            MoveToKenya Admin
          </Link>
          <nav className="hidden gap-4 text-sm font-medium sm:flex">
            <Link href="/admin" className="text-[#6b6b6b] hover:text-[#C8102E]">
              Articles
            </Link>
            <Link
              href="/admin/articles/new"
              className="text-[#6b6b6b] hover:text-[#C8102E]"
            >
              New Article
            </Link>
            <Link
              href="/admin/categories"
              className="text-[#6b6b6b] hover:text-[#C8102E]"
            >
              Categories
            </Link>
            <Link
              href="/kenya-daily"
              className="text-[#6b6b6b] hover:text-[#C8102E]"
              target="_blank"
            >
              View Site
            </Link>
          </nav>
        </div>
        <form action={signOut}>
          <button
            type="submit"
            className="text-sm font-medium text-[#6b6b6b] hover:text-[#C8102E]"
          >
            Sign Out
          </button>
        </form>
      </div>
    </header>
  );
}
