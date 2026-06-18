"use client";

import Image from "next/image";

const CREST_SRC = "/images/royal-descendants-crest-transparent.png";

type RoyalLogoProps = {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg" | "hero";
};

const sizeMap = {
  sm: { w: 140, h: 100, className: "h-12 w-auto sm:h-14" },
  md: { w: 200, h: 140, className: "h-16 w-auto sm:h-20" },
  lg: { w: 260, h: 180, className: "h-20 w-auto sm:h-24 md:h-28" },
  hero: {
    w: 320,
    h: 280,
    className:
      "h-32 w-auto sm:h-36 md:h-40 lg:h-[11rem] max-w-[min(85vw,300px)]",
  },
};

export default function RoyalLogo({
  className = "",
  variant = "light",
  size = "md",
}: RoyalLogoProps) {
  const dimensions = sizeMap[size];
  const isHero = size === "hero";

  return (
    <Image
      src={CREST_SRC}
      alt="Royal Descendants Group LTD"
      width={dimensions.w}
      height={dimensions.h}
      className={`${dimensions.className} object-contain ${isHero ? "royal-crest-hero" : ""} ${className}`}
      priority={isHero}
    />
  );
}
