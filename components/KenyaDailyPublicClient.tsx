"use client";

import { ArticleCard } from "@/components/ArticleCard";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import {
  filterArticles,
  withCategoryLabels,
} from "@/lib/articles/queries";
import type { Article, ArticleCategory } from "@/lib/types/database";
import { useMemo, useState } from "react";

type KenyaDailyPublicClientProps = {
  articles: Article[];
  categories: ArticleCategory[];
  initialCategory?: string;
};

export default function KenyaDailyPublicClient({
  articles,
  categories,
  initialCategory = "all",
}: KenyaDailyPublicClientProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [search, setSearch] = useState("");

  const categoryOptions = useMemo(
    () => [{ slug: "all", name: "All Articles", id: "all", created_at: "" }, ...categories],
    [categories]
  );

  const labeled = useMemo(
    () => withCategoryLabels(articles, categories),
    [articles, categories]
  );

  const filtered = useMemo(
    () => filterArticles(labeled, { category: activeCategory, search }),
    [labeled, activeCategory, search]
  );

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#1a1a1a]">
      <Navbar />

      <section className="dark-surface relative overflow-hidden bg-[#1a1a1a] px-4 py-20 text-white sm:px-6 md:px-12 md:py-28">
        <div className="organic-blob -left-20 top-0 h-72 w-72 bg-[#C8102E]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <div className="section-divider mb-8" />
          <p className="editorial-eyebrow mb-5">MoveToKenya.org Resources</p>
          <h1 className="editorial-headline mb-6 max-w-4xl text-white">
            The Kenya Daily
          </h1>
          <p className="editorial-subhead max-w-3xl text-[#FFFFFF]">
            Your trusted source for Kenya news, relocation insights, investment
            opportunities, visa updates, and diaspora stories.
          </p>
        </div>
      </section>

      <section className="sticky top-[54px] z-40 border-b border-gray-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 md:px-12">
          <div className="mb-4">
            <input
              type="search"
              placeholder="Search articles…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-md rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm outline-none focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10"
            />
          </div>
          <div className="overflow-x-auto">
            <div className="flex min-w-max gap-2 sm:min-w-0 sm:flex-wrap">
              {categoryOptions.map((cat) => (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`shrink-0 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition sm:text-sm ${
                    activeCategory === cat.slug
                      ? "bg-[#C8102E] text-white"
                      : "bg-[#fafafa] text-[#1a1a1a] hover:bg-[#C8102E]/10 hover:text-[#C8102E]"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flow-section">
        <div className="mx-auto max-w-7xl">
          {filtered.length === 0 ? (
            <div className="soft-card px-6 py-16 text-center">
              <p className="text-lg text-[#6b6b6b]">
                {articles.length === 0
                  ? "No published articles yet. Check back soon."
                  : "No articles match your search or filter."}
              </p>
            </div>
          ) : (
            <>
              {featured && (
                <div className="mb-12">
                  <ArticleCard article={featured} featured />
                </div>
              )}
              {rest.length > 0 && (
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
