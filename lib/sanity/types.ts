import type { PortableTextBlock } from "@portabletext/types";

export type SanityCategory = {
  _id: string;
  title: string;
  slug: string;
};

export type SanityAuthor = {
  _id: string;
  name: string;
  slug?: string;
  bio?: string;
};

export type SanityArticle = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  body?: PortableTextBlock[];
  featuredImage?: {
    asset?: { _ref: string };
    alt?: string;
  };
  category?: {
    _id: string;
    title: string;
    slug: string;
  };
  author?: {
    _id: string;
    name: string;
    slug?: string;
  };
  publishedAt?: string;
  seoTitle?: string;
  seoDescription?: string;
  _updatedAt?: string;
};
