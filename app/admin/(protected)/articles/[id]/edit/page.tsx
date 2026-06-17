export const dynamic = "force-dynamic";

import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleForm from "@/components/admin/ArticleForm";
import { requireAdmin } from "@/lib/auth/admin";
import { getAdminCategories } from "@/lib/articles/data";
import { createClient } from "@/lib/supabase/server";
import { fetchArticleByIdAdmin } from "@/lib/articles/queries";

export default async function EditArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdmin();
  const { id } = await params;
  const supabase = await createClient();
  const [article, categories] = await Promise.all([
    fetchArticleByIdAdmin(supabase, id),
    getAdminCategories(),
  ]);

  if (!article) notFound();

  return (
    <div>
      <div className="mb-8">
        <Link href="/admin" className="text-sm text-[#C8102E] hover:underline">
          ← Back to Articles
        </Link>
        <h1 className="mt-2 text-3xl font-bold text-[#1a1a1a]">Edit Article</h1>
      </div>
      <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
        <ArticleForm categories={categories} article={article} />
      </div>
    </div>
  );
}
