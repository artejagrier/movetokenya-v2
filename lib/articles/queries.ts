import type { SupabaseClient } from "@supabase/supabase-js";
import type { Article, ArticleCategory } from "@/lib/types/database";
import { categoryLabelFromSlug } from "@/lib/utils/slug";

export async function fetchCategories(
  supabase: SupabaseClient
): Promise<ArticleCategory[]> {
  const { data, error } = await supabase
    .from("article_categories")
    .select("*")
    .order("name");

  if (error) throw error;
  return data ?? [];
}

export async function fetchPublishedArticles(
  supabase: SupabaseClient
): Promise<Article[]> {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data ?? [];
}

export async function fetchArticleBySlug(
  supabase: SupabaseClient,
  slug: string
): Promise<Article | null> {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error) {
    if (error.code === "PGRST116") return null;
    throw error;
  }
  return data;
}

export async function fetchAllArticlesAdmin(
  supabase: SupabaseClient
): Promise<Article[]> {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data ?? [];
}

export async function fetchArticleByIdAdmin(
  supabase: SupabaseClient,
  id: string
): Promise<Article | null> {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    if (error.code === "PGRST116") return null;
    throw error;
  }
  return data;
}

export function withCategoryLabels(
  articles: Article[],
  categories: ArticleCategory[]
) {
  return articles.map((article) => ({
    ...article,
    categoryLabel: categoryLabelFromSlug(article.category, categories),
  }));
}

export function filterArticles<T extends Article>(
  articles: T[],
  options: { category?: string; search?: string }
): T[] {
  let result = articles;

  if (options.category && options.category !== "all") {
    result = result.filter((a) => a.category === options.category);
  }

  if (options.search?.trim()) {
    const q = options.search.trim().toLowerCase();
    result = result.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        (a.excerpt?.toLowerCase().includes(q) ?? false) ||
        (a.content?.toLowerCase().includes(q) ?? false)
    );
  }

  return result;
}
