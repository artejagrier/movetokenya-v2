"use client";

import { useState, useTransition } from "react";
import {
  createCategory,
  deleteCategory,
  updateCategory,
} from "@/lib/admin/actions";
import { slugify } from "@/lib/utils/slug";
import type { ArticleCategory } from "@/lib/types/database";

export default function CategoryManager({
  initialCategories,
}: {
  initialCategories: ArticleCategory[];
}) {
  const [categories, setCategories] = useState(initialCategories);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const inputClass =
    "w-full rounded-xl border border-gray-200 px-4 py-3 text-[#1a1a1a] outline-none focus:border-[#C8102E]";

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData();
    formData.set("name", name);
    formData.set("slug", slug || slugify(name));

    startTransition(async () => {
      try {
        await createCategory(formData);
        setCategories((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            name,
            slug: slug || slugify(name),
            created_at: new Date().toISOString(),
          },
        ]);
        setName("");
        setSlug("");
        window.location.reload();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to create category");
      }
    });
  };

  const handleUpdate = (id: string, catName: string, catSlug: string) => {
    const formData = new FormData();
    formData.set("name", catName);
    formData.set("slug", catSlug);

    startTransition(async () => {
      try {
        await updateCategory(id, formData);
        window.location.reload();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to update category");
      }
    });
  };

  const handleDelete = (id: string) => {
    if (!confirm("Delete this category?")) return;

    startTransition(async () => {
      try {
        await deleteCategory(id);
        setCategories((prev) => prev.filter((c) => c.id !== id));
        window.location.reload();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to delete category");
      }
    });
  };

  return (
    <div className="space-y-8">
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleCreate} className="rounded-2xl border border-gray-200 bg-white p-6">
        <h2 className="mb-4 text-lg font-bold">Add Category</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Category name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (!slug) setSlug(slugify(e.target.value));
            }}
            required
            className={inputClass}
          />
          <input
            type="text"
            placeholder="Slug"
            value={slug}
            onChange={(e) => setSlug(slugify(e.target.value))}
            className={inputClass}
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="btn-primary mt-4 disabled:opacity-60"
        >
          Add Category
        </button>
      </form>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-gray-100 bg-[#fafafa]">
            <tr>
              <th className="px-4 py-3 font-semibold">Name</th>
              <th className="px-4 py-3 font-semibold">Slug</th>
              <th className="px-4 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <CategoryRow
                key={cat.id}
                category={cat}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
                disabled={isPending}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CategoryRow({
  category,
  onUpdate,
  onDelete,
  disabled,
}: {
  category: ArticleCategory;
  onUpdate: (id: string, name: string, slug: string) => void;
  onDelete: (id: string) => void;
  disabled: boolean;
}) {
  const [name, setName] = useState(category.name);
  const [slug, setSlug] = useState(category.slug);

  return (
    <tr className="border-b border-gray-50 last:border-0">
      <td className="px-4 py-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-gray-200 px-3 py-2"
        />
      </td>
      <td className="px-4 py-3">
        <input
          type="text"
          value={slug}
          onChange={(e) => setSlug(slugify(e.target.value))}
          className="w-full rounded-lg border border-gray-200 px-3 py-2"
        />
      </td>
      <td className="px-4 py-3">
        <div className="flex gap-3">
          <button
            type="button"
            disabled={disabled}
            onClick={() => onUpdate(category.id, name, slug)}
            className="text-[#C8102E] hover:underline disabled:opacity-50"
          >
            Save
          </button>
          <button
            type="button"
            disabled={disabled}
            onClick={() => onDelete(category.id)}
            className="text-red-600 hover:underline disabled:opacity-50"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
