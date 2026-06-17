"use client";

import Image from "next/image";
import Link from "next/link";
import type { ArticleWithCategoryLabel } from "@/lib/types/database";

type ArticleCardProps = {
  article: ArticleWithCategoryLabel;
  featured?: boolean;
  compact?: boolean;
};

export function ArticleCard({
  article,
  featured = false,
  compact = false,
}: ArticleCardProps) {
  const href = `/kenya-daily/${article.slug}`;

  return (
    <Link
      href={href}
      className={`magazine-card group flex h-full flex-col ${
        featured ? "lg:min-h-[420px]" : compact ? "flex-row overflow-hidden" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-[#C8102E]/8 to-[#fafafa] ${
          featured
            ? "min-h-[200px] lg:min-h-[280px]"
            : compact
              ? "w-28 shrink-0 sm:w-36"
              : "h-40"
        }`}
      >
        {article.featured_image ? (
          <Image
            src={article.featured_image}
            alt=""
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes={featured ? "600px" : "200px"}
          />
        ) : null}
        <div className="absolute inset-x-0 top-0 h-1 bg-[#C8102E]" aria-hidden="true" />
        <div className="relative flex h-full items-end bg-gradient-to-t from-black/50 to-transparent p-5">
          <p className="editorial-eyebrow text-white">
            {article.categoryLabel}
          </p>
        </div>
      </div>

      <div className={`flex flex-1 flex-col ${compact ? "p-5 sm:p-6" : "p-6 sm:p-8"}`}>
        <h3
          className={`mb-3 font-bold leading-snug text-[#1a1a1a] transition group-hover:text-[#C8102E] ${
            featured
              ? "text-xl sm:text-2xl lg:text-3xl"
              : compact
                ? "text-base sm:text-lg"
                : "text-lg sm:text-xl"
          }`}
        >
          {article.title}
        </h3>

        {!compact && article.excerpt && (
          <p className="mb-4 flex-1 text-sm leading-7 text-[#6b6b6b] sm:text-base sm:leading-8">
            {article.excerpt}
          </p>
        )}

        <span className="mt-auto text-sm font-semibold text-[#C8102E]">
          Read more →
        </span>
      </div>
    </Link>
  );
}
