export type ResourceItem = {
  title: string;
  href: string;
  description: string;
};

export const resourcesItems: ResourceItem[] = [
  {
    title: "Visa & Immigration",
    href: "/resources/visa-immigration",
    description: "A complete guide to legally moving, living, working, investing, and retiring in Kenya.",
  },
  {
    title: "Cost of Living",
    href: "/resources/cost-of-living",
    description: "Practical budgets and pricing for life in Kenya.",
  },
  {
    title: "Retire In Kenya",
    href: "/resources/retire-in-kenya",
    description: "Long-term living, permits, and lifestyle planning for retirees.",
  },
  {
    title: "Digital Nomad Kenya",
    href: "/resources/digital-nomad-kenya",
    description: "Remote work, visas, and living in Kenya while earning foreign income.",
  },
  {
    title: "Education & Family Life",
    href: "/resources/education-family-life",
    description: "Schools, family support, and community life in Kenya.",
  },
  {
    title: "Healthcare In Kenya",
    href: "/resources/healthcare-in-kenya",
    description: "Medical care, insurance, and health planning for expats.",
  },
  {
    title: "Moving Checklist",
    href: "/resources/moving-checklist",
    description: "Practical steps and timelines for a smooth move to Kenya.",
  },
  {
    title: "FAQ",
    href: "/resources/faq",
    description: "Answers to common Kenya relocation and lifestyle questions.",
  },
];

export const resourcePageData = {
  "visa-immigration": {
    title: "Visa & Immigration Guide To Kenya",
    subtitle:
      "Everything you need to know about legally moving, living, working, investing, retiring, and building a life in Kenya.",
    heroText:
      "A premium relocation resource center for visa pathways, permits, and practical immigration guidance to help you make Kenya your next destination.",
  },
};

export const resourceSlugs = resourcesItems.map((item) => item.href.replace("/resources/", ""));
