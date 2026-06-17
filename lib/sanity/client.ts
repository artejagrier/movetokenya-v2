import { createClient, type SanityClient } from "next-sanity";
import {
  apiVersion,
  dataset,
  isSanityConfigured,
  projectId,
  token,
} from "@/sanity/env";

let readClient: SanityClient | null = null;
let writeClient: SanityClient | null = null;

export function getSanityClient() {
  if (!isSanityConfigured()) {
    throw new Error("Sanity is not configured");
  }

  if (!readClient) {
    readClient = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: "published",
      stega: { enabled: false },
    });
  }

  return readClient;
}

export function getSanityWriteClient() {
  if (!isSanityConfigured() || !token) {
    throw new Error("Sanity write client is not configured");
  }

  if (!writeClient) {
    writeClient = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token,
      perspective: "published",
      stega: { enabled: false },
    });
  }

  return writeClient;
}
