"use client";

import { useState, useTransition } from "react";
import {
  createArticle,
  updateArticle,
  uploadFeaturedImage,
} from "@/lib/admin/actions";
import { slugify } from "@/lib/utils/slug";
import type { Article, ArticleCategory } from "@/lib/types/database";

type ArticleFormProps = {
  categories: ArticleCategory[];
  article?: Article;
};

export default function ArticleForm({ categories, article }: ArticleFormProps) {
  const isEditing = Boolean(article);
  const [title, setTitle] = useState(article?.title ?? "");
  const [slug, setSlug] = useState(article?.slug ?? "");
  const [excerpt, setExcerpt] = useState(article?.excerpt ?? "");
  const [content, setContent] = useState(article?.content ?? "");
  const [featuredImage, setFeaturedImage] = useState(
    article?.featured_image ?? ""
  );
  const [category, setCategory] = useState(article?.category ?? "");
  const [seoTitle, setSeoTitle] = useState(article?.seo_title ?? "");
  const [seoDescription, setSeoDescription] = useState(
    article?.seo_description ?? ""
  );
  const [published, setPublished] = useState(article?.published ?? false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!isEditing && !slug) {
      setSlug(slugify(value));
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);
      const url = await uploadFeaturedImage(formData);
      setFeaturedImage(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData();
    formData.set("title", title);
    formData.set("slug", slug || slugify(title));
    formData.set("excerpt", excerpt);
    formData.set("content", content);
    formData.set("featured_image", featuredImage);
    formData.set("category", category);
    formData.set("seo_title", seoTitle);
    formData.set("seo_description", seoDescription);
    formData.set("published", published ? "true" : "false");

    startTransition(async () => {
      try {
        if (isEditing && article) {
          await updateArticle(article.id, formData);
        } else {
          await createArticle(formData);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Save failed");
      }
    });
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 px-4 py-3 text-[#1a1a1a] outline-none focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#1a1a1a]">
            Title *
          </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#1a1a1a]">
            Slug *
          </label>
          <input
            type="text"
            required
            value={slug}
            onChange={(e) => setSlug(slugify(e.target.value))}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-[#1a1a1a]">
          Excerpt
        </label>
        <textarea
          rows={3}
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-[#1a1a1a]">
          Content
        </label>
        <textarea
          rows={14}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={`${inputClass} font-mono text-sm`}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#1a1a1a]">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={inputClass}
          >
            <option value="">Select category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.slug}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#1a1a1a]">
            Featured Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            disabled={uploading}
            className="block w-full text-sm text-[#6b6b6b]"
          />
          {uploading && (
            <p className="mt-2 text-sm text-[#6b6b6b]">Uploading…</p>
          )}
          {featuredImage && (
            <div className="mt-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featuredImage}
                alt="Featured preview"
                className="max-h-40 rounded-xl object-cover"
              />
              <input type="hidden" name="featured_image" value={featuredImage} />
            </div>
          )}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#1a1a1a]">
            SEO Title
          </label>
          <input
            type="text"
            value={seoTitle}
            onChange={(e) => setSeoTitle(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#1a1a1a]">
            SEO Description
          </label>
          <textarea
            rows={3}
            value={seoDescription}
            onChange={(e) => setSeoDescription(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={published}
          onChange={(e) => setPublished(e.target.checked)}
          className="h-4 w-4 rounded border-gray-300 text-[#C8102E] focus:ring-[#C8102E]"
        />
        <span className="text-sm font-semibold text-[#1a1a1a]">
          Publish immediately
        </span>
      </label>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isPending || uploading}
          className="btn-primary disabled:opacity-60"
        >
          {isPending ? "Saving…" : isEditing ? "Update Article" : "Create Article"}
        </button>
      </div>
    </form>
  );
}
