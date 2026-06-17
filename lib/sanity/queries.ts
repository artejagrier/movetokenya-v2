import { defineQuery } from "next-sanity";

export const publishedArticlesQuery = defineQuery(`
  *[_type == "article" && defined(publishedAt) && publishedAt <= now()] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    body,
    featuredImage,
    publishedAt,
    seoTitle,
    seoDescription,
    _updatedAt,
    category->{
      _id,
      title,
      "slug": slug.current
    },
    author->{
      _id,
      name,
      "slug": slug.current
    }
  }
`);

export const articleBySlugQuery = defineQuery(`
  *[_type == "article" && slug.current == $slug && defined(publishedAt) && publishedAt <= now()][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    body,
    featuredImage,
    publishedAt,
    seoTitle,
    seoDescription,
    _updatedAt,
    category->{
      _id,
      title,
      "slug": slug.current
    },
    author->{
      _id,
      name,
      "slug": slug.current
    }
  }
`);

export const categoriesQuery = defineQuery(`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current
  }
`);

export const sanityEnvQuery = defineQuery(`*[_type == "category"][0]._id`);
