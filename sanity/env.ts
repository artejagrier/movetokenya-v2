export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-06-16";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";

export const token = process.env.SANITY_API_TOKEN;

export function isSanityConfigured() {
  return Boolean(projectId && dataset);
}

export function requireSanityEnv() {
  if (!isSanityConfigured()) {
    throw new Error(
      "Missing Sanity environment variables. Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET in .env.local"
    );
  }
}
