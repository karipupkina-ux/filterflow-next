import type { MetadataRoute } from "next";
import { SITEMAP_PATHS, absoluteCanonicalUrl } from "@/lib/seo-metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_PATHS.map((path) => ({
    url: absoluteCanonicalUrl(path),
    lastModified: new Date("2026-04-15T00:00:00.000Z"),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.75,
  }));
}