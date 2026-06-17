import type { PortableTextBlock } from "@portabletext/types";
import type { Article, ArticleCategory } from "@/lib/types/database";
import { imageUrl } from "@/lib/sanity/image";
import { getSanityClient } from "@/lib/sanity/client";
import {
  articleBySlugQuery,
  categoriesQuery,
  publishedArticlesQuery,
} from "@/lib/sanity/queries";
import type { SanityArticle, SanityCategory } from "@/lib/sanity/types";
import { isSanityConfigured } from "@/sanity/env";

function portableTextToPlainText(blocks?: PortableTextBlock[]): string {
  if (!blocks?.length) return "";

  return blocks
    .map((block) => {
      if (block._type !== "block" || !("children" in block)) return "";
      return block.children
        ?.map((child) => ("text" in child ? child.text : ""))
        .join("");
    })
    .filter(Boolean)
    .join("\n\n");
}

function mapCategory(category: SanityCategory): ArticleCategory {
  return {
    id: category._id,
    name: category.title,
    slug: category.slug,
    created_at: "",
  };
}

export function mapSanityArticle(article: SanityArticle): Article {
  return {
    id: article._id,
    title: article.title,
    slug: article.slug,
    excerpt: article.excerpt ?? null,
    content: portableTextToPlainText(article.body),
    featured_image: imageUrl(article.featuredImage, 1600),
    category: article.category?.slug ?? null,
    seo_title: article.seoTitle ?? null,
    seo_description: article.seoDescription ?? null,
    published: Boolean(article.publishedAt),
    created_at: article.publishedAt ?? article._updatedAt ?? new Date().toISOString(),
    updated_at: article._updatedAt ?? article.publishedAt ?? new Date().toISOString(),
  };
}

export async function fetchSanityKenyaDailyData() {
  if (!isSanityConfigured()) {
    return { articles: [] as Article[], categories: [] as ArticleCategory[] };
  }

  try {
    const client = getSanityClient();
    const [articles, categories] = await Promise.all([
      client.fetch<SanityArticle[]>(publishedArticlesQuery),
      client.fetch<SanityCategory[]>(categoriesQuery),
    ]);

    return {
      articles: articles.map(mapSanityArticle),
      categories: categories.map(mapCategory),
    };
  } catch {
    return { articles: [] as Article[], categories: [] as ArticleCategory[] };
  }
}

export async function fetchSanityArticleBySlug(slug: string) {
  if (!isSanityConfigured()) return null;

  try {
    const client = getSanityClient();
    const article = await client.fetch<SanityArticle | null>(
      articleBySlugQuery,
      { slug }
    );

    return article;
  } catch {
    return null;
  }
}

export async function fetchSanityArticlePage(slug: string) {
  const article = await fetchSanityArticleBySlug(slug);
  if (!article) return null;

  return {
    article: mapSanityArticle(article),
    body: article.body ?? [],
    authorName: article.author?.name ?? null,
  };
}
