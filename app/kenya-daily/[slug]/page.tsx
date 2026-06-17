export const dynamic = "force-dynamic";

import PortableTextContent from "@/components/PortableTextContent";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import {
  fetchSanityArticlePage,
  fetchSanityKenyaDailyData,
} from "@/lib/sanity/fetch";
import { categoryLabelFromSlug } from "@/lib/utils/slug";
import { isSanityConfigured } from "@/sanity/env";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isSanityConfigured()) {
    return { title: "Article | The Kenya Daily" };
  }

  const page = await fetchSanityArticlePage(slug);
  if (!page) return { title: "Article Not Found" };

  const { article } = page;
  const title =
    article.seo_title || `${article.title} | The Kenya Daily | MoveToKenya.org`;
  const description =
    article.seo_description ||
    article.excerpt ||
    "Read the latest from The Kenya Daily on MoveToKenya.org.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: article.featured_image ? [article.featured_image] : undefined,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;

  if (!isSanityConfigured()) {
    notFound();
  }

  const [{ categories }, page] = await Promise.all([
    fetchSanityKenyaDailyData(),
    fetchSanityArticlePage(slug),
  ]);

  if (!page) notFound();

  const { article, body, authorName } = page;
  const categoryLabel = categoryLabelFromSlug(article.category, categories);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#1a1a1a]">
      <Navbar />

      <article>
        <section className="dark-surface relative overflow-hidden bg-[#1a1a1a] px-4 py-16 text-white sm:px-6 md:px-12 md:py-24">
          <div className="relative mx-auto max-w-4xl">
            <Link
              href="/kenya-daily"
              className="mb-6 inline-block text-sm text-[#FFFFFF] hover:text-[#C8102E]"
            >
              ← Back to The Kenya Daily
            </Link>
            <p className="editorial-eyebrow mb-4">{categoryLabel}</p>
            <h1 className="editorial-headline mb-6 text-[#FFFFFF]">
              {article.title}
            </h1>
            {article.excerpt && (
              <p className="editorial-subhead text-[#FFFFFF]">{article.excerpt}</p>
            )}
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#FFFFFF]/80">
              <time dateTime={article.created_at}>
                {new Date(article.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              {authorName && <span>By {authorName}</span>}
            </div>
          </div>
        </section>

        {article.featured_image && (
          <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-12">
            <div className="relative -mt-10 mb-10 aspect-[16/9] overflow-hidden rounded-3xl shadow-[0_24px_64px_rgba(0,0,0,0.12)]">
              <Image
                src={article.featured_image}
                alt=""
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1280px) 100vw, 1024px"
              />
            </div>
          </div>
        )}

        <section className="flow-section border-t-0 pt-0">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 md:px-12">
            {body.length > 0 ? (
              <PortableTextContent value={body} />
            ) : (
              <div className="prose prose-lg max-w-none whitespace-pre-wrap leading-8 text-[#1a1a1a]">
                {article.content}
              </div>
            )}
          </div>
        </section>
      </article>

      <SiteFooter />
    </main>
  );
}
