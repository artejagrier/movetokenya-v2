"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth/admin";
import { createClient } from "@/lib/supabase/server";
import { ARTICLE_IMAGES_BUCKET } from "@/lib/supabase/config";
import { slugify } from "@/lib/utils/slug";
import type { ArticleFormData } from "@/lib/types/database";

function parseArticleForm(formData: FormData): ArticleFormData {
  return {
    title: String(formData.get("title") ?? "").trim(),
    slug: String(formData.get("slug") ?? "").trim(),
    excerpt: String(formData.get("excerpt") ?? "").trim(),
    content: String(formData.get("content") ?? "").trim(),
    featured_image: String(formData.get("featured_image") ?? "").trim(),
    category: String(formData.get("category") ?? "").trim(),
    seo_title: String(formData.get("seo_title") ?? "").trim(),
    seo_description: String(formData.get("seo_description") ?? "").trim(),
    published: formData.get("published") === "true",
  };
}

export async function signIn(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    redirect("/admin/login?error=Supabase+is+not+configured");
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect(`/admin/login?error=${encodeURIComponent(error.message)}`);
  }

  redirect("/admin");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function createArticle(formData: FormData) {
  await requireAdmin();
  const data = parseArticleForm(formData);

  if (!data.title) {
    throw new Error("Title is required");
  }

  const slug = data.slug || slugify(data.title);
  const supabase = await createClient();

  const { error } = await supabase.from("articles").insert({
    title: data.title,
    slug,
    excerpt: data.excerpt || null,
    content: data.content || null,
    featured_image: data.featured_image || null,
    category: data.category || null,
    seo_title: data.seo_title || null,
    seo_description: data.seo_description || null,
    published: data.published,
  });

  if (error) throw new Error(error.message);

  revalidatePath("/kenya-daily");
  revalidatePath("/admin");
  redirect("/admin");
}

export async function updateArticle(id: string, formData: FormData) {
  await requireAdmin();
  const data = parseArticleForm(formData);

  if (!data.title) {
    throw new Error("Title is required");
  }

  const slug = data.slug || slugify(data.title);
  const supabase = await createClient();

  const { error } = await supabase
    .from("articles")
    .update({
      title: data.title,
      slug,
      excerpt: data.excerpt || null,
      content: data.content || null,
      featured_image: data.featured_image || null,
      category: data.category || null,
      seo_title: data.seo_title || null,
      seo_description: data.seo_description || null,
      published: data.published,
    })
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/kenya-daily");
  revalidatePath(`/kenya-daily/${slug}`);
  revalidatePath("/admin");
  revalidatePath(`/admin/articles/${id}/edit`);
  redirect("/admin");
}

export async function deleteArticle(id: string) {
  await requireAdmin();
  const supabase = await createClient();

  const { error } = await supabase.from("articles").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/kenya-daily");
  revalidatePath("/admin");
  redirect("/admin");
}

export async function createCategory(formData: FormData) {
  await requireAdmin();
  const name = String(formData.get("name") ?? "").trim();
  const slug = String(formData.get("slug") ?? "").trim() || slugify(name);

  if (!name) throw new Error("Category name is required");

  const supabase = await createClient();
  const { error } = await supabase
    .from("article_categories")
    .insert({ name, slug });

  if (error) throw new Error(error.message);

  revalidatePath("/admin/categories");
  revalidatePath("/kenya-daily");
}

export async function updateCategory(id: string, formData: FormData) {
  await requireAdmin();
  const name = String(formData.get("name") ?? "").trim();
  const slug = String(formData.get("slug") ?? "").trim() || slugify(name);

  const supabase = await createClient();
  const { error } = await supabase
    .from("article_categories")
    .update({ name, slug })
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/admin/categories");
  revalidatePath("/kenya-daily");
}

export async function deleteCategory(id: string) {
  await requireAdmin();
  const supabase = await createClient();
  const { error } = await supabase
    .from("article_categories")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/admin/categories");
  revalidatePath("/kenya-daily");
}

export async function uploadFeaturedImage(formData: FormData): Promise<string> {
  await requireAdmin();
  const file = formData.get("file");

  if (!(file instanceof File) || file.size === 0) {
    throw new Error("No file provided");
  }

  const supabase = await createClient();
  const ext = file.name.split(".").pop() ?? "jpg";
  const path = `${Date.now()}-${slugify(file.name.replace(/\.[^.]+$/, ""))}.${ext}`;

  const { error: uploadError } = await supabase.storage
    .from(ARTICLE_IMAGES_BUCKET)
    .upload(path, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (uploadError) throw new Error(uploadError.message);

  const {
    data: { publicUrl },
  } = supabase.storage.from(ARTICLE_IMAGES_BUCKET).getPublicUrl(path);

  return publicUrl;
}
