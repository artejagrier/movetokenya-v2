import { redirect } from "next/navigation";

export default async function LegacyKenyaDailyRedirect({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const query = category ? `?category=${encodeURIComponent(category)}` : "";
  redirect(`/kenya-daily${query}`);
}
