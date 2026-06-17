import { fetchSanityKenyaDailyData } from "@/lib/sanity/fetch";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export async function getKenyaDailyData() {
  return fetchSanityKenyaDailyData();
}

export async function getAdminArticles() {
  if (!isSupabaseConfigured()) return [];
  const { createClient } = await import("@/lib/supabase/server");
  const { fetchAllArticlesAdmin } = await import("@/lib/articles/queries");
  const supabase = await createClient();
  return fetchAllArticlesAdmin(supabase);
}

export async function getAdminCategories() {
  if (!isSupabaseConfigured()) return [];
  const { createClient } = await import("@/lib/supabase/server");
  const { fetchCategories } = await import("@/lib/articles/queries");
  const supabase = await createClient();
  return fetchCategories(supabase);
}
