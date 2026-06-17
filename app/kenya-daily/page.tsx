export const dynamic = "force-dynamic";

import KenyaDailyPublicClient from "@/components/KenyaDailyPublicClient";
import { getKenyaDailyData } from "@/lib/articles/data";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "The Kenya Daily | MoveToKenya.org",
  description:
    "The latest Kenya news, visa updates, relocation guides, cost-of-living insights, real estate opportunities, and investment information for people interested in moving to Kenya.",
  openGraph: {
    title: "The Kenya Daily | MoveToKenya.org",
    description:
      "The latest Kenya news, visa updates, relocation guides, cost-of-living insights, real estate opportunities, and investment information for people interested in moving to Kenya.",
  },
};

export default async function KenyaDailyPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const { articles, categories } = await getKenyaDailyData();

  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-white text-[#1a1a1a]">
          Loading…
        </div>
      }
    >
      <KenyaDailyPublicClient
        articles={articles}
        categories={categories}
        initialCategory={category ?? "all"}
      />
    </Suspense>
  );
}
