export const dynamic = "force-dynamic";

import CategoryManager from "@/components/admin/CategoryManager";
import { requireAdmin } from "@/lib/auth/admin";
import { getAdminCategories } from "@/lib/articles/data";

export default async function AdminCategoriesPage() {
  await requireAdmin();
  const categories = await getAdminCategories();

  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold text-[#1a1a1a]">Categories</h1>
      <p className="mb-8 text-[#6b6b6b]">
        Manage article categories for The Kenya Daily.
      </p>
      <CategoryManager initialCategories={categories} />
    </div>
  );
}
