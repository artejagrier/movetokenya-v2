import RoyalDescendantsPage from "@/components/royal/RoyalDescendantsPage";
import type { Metadata } from "next";
import "./royal.css";

export const metadata: Metadata = {
  title: "Royal Descendants Group LTD | MoveToKenya.org",
  description:
    "Royal Descendants Group LTD connects the diaspora to opportunity across Africa through relocation, business, investment, real estate, and community initiatives including MoveToKenya.org, The Kenya Daily, and Welcome To The Cookout.",
  openGraph: {
    title: "Royal Descendants Group LTD",
    description:
      "Connecting the Diaspora to Opportunity Across Africa.",
    images: [{ url: "/images/nairobi-skyline.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <RoyalDescendantsPage />;
}
