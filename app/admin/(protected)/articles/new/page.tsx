export const dynamic = "force-dynamic";

import Link from "next/link";
import ArticleForm from "@/components/admin/ArticleForm";
import { requireAdmin } from "@/lib/auth/admin";
import { getAdminCategories } from "@/lib/articles/data";

export default async function NewArticlePage() {
  await requireAdmin();
  const categories = await getAdminCategories();

  return (
    <div>
      <div className="mb-8">
        <Link href="/admin" className="text-sm text-[#C8102E] hover:underline">
          ← Back to Articles
        </Link>
        <h1 className="mt-2 text-3xl font-bold text-[#1a1a1a]">Create Article</h1>
      </div>
      <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
        <ArticleForm categories={categories} />
      </div>
    </div>
  );
}
