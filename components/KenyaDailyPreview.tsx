import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { ArticleCard } from "@/components/ArticleCard";
import { getKenyaDailyData } from "@/lib/articles/data";
import { withCategoryLabels } from "@/lib/articles/queries";
import Link from "next/link";

export default async function KenyaDailyPreview() {
  const { articles, categories } = await getKenyaDailyData();
  const labeled = withCategoryLabels(articles, categories);
  const featured = labeled.slice(0, 3);

  if (featured.length === 0) {
    return null;
  }

  return (
    <section className="flow-section bg-white">
      <FadeIn>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="The Kenya Daily"
            title="From The Kenya Daily"
            description="Stay informed with the latest relocation guides, visa updates, real estate opportunities, investment insights, and major developments shaping Kenya."
          />

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
            <ArticleCard article={featured[0]} featured />
            <div className="grid gap-8">
              {featured.slice(1).map((article) => (
                <ArticleCard key={article.id} article={article} compact />
              ))}
            </div>
          </div>

          <div className="mt-14 text-center">
            <Link href="/kenya-daily" className="btn-primary">
              View All Articles →
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
