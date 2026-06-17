import HomePageClient from "@/components/HomePageClient";
import KenyaDailyPreview from "@/components/KenyaDailyPreview";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <HomePageClient kenyaDailyPreview={<KenyaDailyPreview />} />
    </Suspense>
  );
}
