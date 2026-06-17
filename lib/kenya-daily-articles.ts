export type KenyaDailyCategory =
  | "all"
  | "latest-news"
  | "visa-updates"
  | "relocation-guides"
  | "cost-of-living"
  | "real-estate"
  | "investing"
  | "diaspora-stories"
  | "events-opportunities";

export type KenyaDailyArticle = {
  id: string;
  title: string;
  excerpt: string;
  category: KenyaDailyCategory;
  categoryLabel: string;
  featured?: boolean;
};

export const kenyaDailyCategories: {
  slug: KenyaDailyCategory;
  label: string;
}[] = [
  { slug: "all", label: "Latest News" },
  { slug: "visa-updates", label: "Visa Updates" },
  { slug: "relocation-guides", label: "Relocation Guides" },
  { slug: "cost-of-living", label: "Cost of Living" },
  { slug: "real-estate", label: "Real Estate" },
  { slug: "investing", label: "Investing" },
  { slug: "diaspora-stories", label: "Diaspora Stories" },
  { slug: "events-opportunities", label: "Events & Opportunities" },
];

export const kenyaDailyArticles: KenyaDailyArticle[] = [
  {
    id: "1",
    title: "Moving to Kenya: The Complete 2026 Guide",
    excerpt:
      "Everything you need to know before relocating to Kenya, from visas and housing to healthcare and banking.",
    category: "relocation-guides",
    categoryLabel: "Relocation Guides",
    featured: true,
  },
  {
    id: "2",
    title: "Kenya Visa Requirements for Americans",
    excerpt:
      "A practical breakdown of Kenya's visa options, entry requirements, and residency pathways.",
    category: "visa-updates",
    categoryLabel: "Visa Updates",
    featured: true,
  },
  {
    id: "3",
    title: "Cost of Living in Diani vs Nairobi",
    excerpt:
      "Compare rent, food, transportation, and lifestyle expenses between Kenya's coast and capital.",
    category: "cost-of-living",
    categoryLabel: "Cost of Living",
    featured: true,
  },
  {
    id: "4",
    title: "Why More Americans Are Moving to Kenya",
    excerpt:
      "Explore the opportunities, lifestyle, affordability, and growing diaspora communities attracting Americans to Kenya.",
    category: "diaspora-stories",
    categoryLabel: "Diaspora Stories",
    featured: true,
  },
  {
    id: "5",
    title: "Investing in Kenya: Opportunities for the Diaspora",
    excerpt:
      "A look at real estate, business, technology, agriculture, and emerging investment sectors.",
    category: "investing",
    categoryLabel: "Investing",
    featured: true,
  },
  {
    id: "6",
    title: "Major Developments Happening in Kenya Right Now",
    excerpt:
      "Stay informed about infrastructure projects, tourism growth, technology expansion, and economic developments shaping Kenya's future.",
    category: "latest-news",
    categoryLabel: "Latest News",
    featured: true,
  },
  {
    id: "7",
    title: "Finding Your First Home in Nairobi: A Renter's Guide",
    excerpt:
      "Neighborhood profiles, average rents, and what to expect when securing your first apartment in Kenya's capital.",
    category: "real-estate",
    categoryLabel: "Real Estate",
  },
  {
    id: "8",
    title: "Kenya's Digital Nomad Visa: What You Need to Know",
    excerpt:
      "How remote workers and entrepreneurs can legally live and work in Kenya while earning abroad.",
    category: "visa-updates",
    categoryLabel: "Visa Updates",
  },
  {
    id: "9",
    title: "Healthcare Options for Expats Relocating to Kenya",
    excerpt:
      "Public and private healthcare systems, insurance considerations, and top hospitals for international residents.",
    category: "relocation-guides",
    categoryLabel: "Relocation Guides",
  },
  {
    id: "10",
    title: "Coastal Property Investment in Diani and Mombasa",
    excerpt:
      "Market trends, rental yields, and what diaspora investors should know about Kenya's coastal real estate.",
    category: "real-estate",
    categoryLabel: "Real Estate",
  },
  {
    id: "11",
    title: "Welcome To The Cookout: Weekly Virtual Community Events",
    excerpt:
      "Join free weekly gatherings connecting the African Diaspora with relocation insights and Kenya lifestyle discussions.",
    category: "events-opportunities",
    categoryLabel: "Events & Opportunities",
  },
  {
    id: "12",
    title: "Banking and M-Pesa: Managing Money as a New Resident",
    excerpt:
      "Opening accounts, mobile money, international transfers, and everyday financial tips for life in Kenya.",
    category: "cost-of-living",
    categoryLabel: "Cost of Living",
  },
];

export const resourcesLinks = [
  { label: "The Kenya Daily", href: "/kenya-daily" },
  {
    label: "Visa Center",
    href: "/kenya-daily?category=visa-updates",
  },
  {
    label: "Relocation Guides",
    href: "/kenya-daily?category=relocation-guides",
  },
  {
    label: "Cost of Living",
    href: "/kenya-daily?category=cost-of-living",
  },
  {
    label: "Real Estate",
    href: "/kenya-daily?category=real-estate",
  },
  {
    label: "Investing in Kenya",
    href: "/kenya-daily?category=investing",
  },
  {
    label: "Diaspora Stories",
    href: "/kenya-daily?category=diaspora-stories",
  },
];
