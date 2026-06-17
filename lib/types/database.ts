export type ArticleCategory = {
  id: string;
  name: string;
  slug: string;
  created_at: string;
};

export type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  featured_image: string | null;
  category: string | null;
  seo_title: string | null;
  seo_description: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
};

export type Profile = {
  id: string;
  email: string;
  role: "admin" | "editor";
  created_at: string;
};

export type ArticleFormData = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  category: string;
  seo_title: string;
  seo_description: string;
  published: boolean;
};

export type ArticleWithCategoryLabel = Article & {
  categoryLabel: string;
};
