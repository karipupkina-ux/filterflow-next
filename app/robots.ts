import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo-metadata";

export const dynamic = "force-static";

const base = SITE_URL.replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
    host: "www.filterflow.ru",
  };
}
