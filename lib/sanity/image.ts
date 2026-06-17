import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { getSanityClient } from "@/lib/sanity/client";
import { isSanityConfigured } from "@/sanity/env";

function getBuilder() {
  return createImageUrlBuilder(getSanityClient());
}

export function urlFor(source: SanityImageSource) {
  if (!isSanityConfigured()) {
    throw new Error("Sanity is not configured");
  }
  return getBuilder().image(source);
}

export function imageUrl(
  source: SanityImageSource | null | undefined,
  width = 1200
): string | null {
  if (!source) return null;
  return urlFor(source).width(width).auto("format").quality(85).url();
}
