import type { MetadataRoute } from "next";
import {
  SITEMAP_LAST_MODIFIED,
  SITEMAP_PATHS,
  absoluteCanonicalUrl,
} from "@/lib/seo-metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_PATHS.map((path) => ({
    url: absoluteCanonicalUrl(path),
    lastModified: SITEMAP_LAST_MODIFIED,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.75,
  }));
}
