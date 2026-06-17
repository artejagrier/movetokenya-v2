export const dynamic = "force-dynamic";

import Link from "next/link";
import { requireAdmin } from "@/lib/auth/admin";
import { getAdminArticles } from "@/lib/articles/data";
import { deleteArticle } from "@/lib/admin/actions";

export default async function AdminDashboardPage() {
  await requireAdmin();
  const articles = await getAdminArticles();

  const published = articles.filter((a) => a.published);
  const drafts = articles.filter((a) => !a.published);

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#1a1a1a]">Articles</h1>
          <p className="mt-1 text-[#6b6b6b]">
            {published.length} published · {drafts.length} drafts
          </p>
        </div>
        <Link href="/admin/articles/new" className="btn-primary">
          New Article
        </Link>
      </div>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold text-[#1a1a1a]">Published</h2>
        {published.length === 0 ? (
          <p className="text-[#6b6b6b]">No published articles yet.</p>
        ) : (
          <ArticleTable articles={published} />
        )}
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold text-[#1a1a1a]">Drafts</h2>
        {drafts.length === 0 ? (
          <p className="text-[#6b6b6b]">No drafts.</p>
        ) : (
          <ArticleTable articles={drafts} />
        )}
      </section>
    </div>
  );
}

function ArticleTable({
  articles,
}: {
  articles: Awaited<ReturnType<typeof getAdminArticles>>;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-gray-100 bg-[#fafafa]">
          <tr>
            <th className="px-4 py-3 font-semibold">Title</th>
            <th className="hidden px-4 py-3 font-semibold sm:table-cell">
              Category
            </th>
            <th className="hidden px-4 py-3 font-semibold md:table-cell">
              Created
            </th>
            <th className="px-4 py-3 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id} className="border-b border-gray-50 last:border-0">
              <td className="px-4 py-3">
                <div className="font-medium text-[#1a1a1a]">{article.title}</div>
                <div className="text-xs text-[#6b6b6b]">/{article.slug}</div>
              </td>
              <td className="hidden px-4 py-3 text-[#6b6b6b] sm:table-cell">
                {article.category ?? "—"}
              </td>
              <td className="hidden px-4 py-3 text-[#6b6b6b] md:table-cell">
                {new Date(article.created_at).toLocaleDateString()}
              </td>
              <td className="px-4 py-3">
                <div className="flex flex-wrap gap-2">
                  <Link
                    href={`/admin/articles/${article.id}/edit`}
                    className="text-[#C8102E] hover:underline"
                  >
                    Edit
                  </Link>
                  {article.published && (
                    <Link
                      href={`/kenya-daily/${article.slug}`}
                      className="text-[#6b6b6b] hover:underline"
                      target="_blank"
                    >
                      View
                    </Link>
                  )}
                  <form action={deleteArticle.bind(null, article.id)}>
                    <button
                      type="submit"
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
