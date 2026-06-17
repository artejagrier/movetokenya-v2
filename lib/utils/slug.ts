export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function categoryLabelFromSlug(
  slug: string | null,
  categories: { slug: string; name: string }[]
): string {
  if (!slug) return "Uncategorized";
  return categories.find((c) => c.slug === slug)?.name ?? slug;
}
