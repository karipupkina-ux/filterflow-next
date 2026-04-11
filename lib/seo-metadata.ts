import type { Metadata } from "next";

/**
 * Канонический production-домен (www). Совпадает с Vercel: apex редиректит на www.
 * Используйте только это значение для metadataBase, canonical, OG, sitemap, robots.
 */
export const SITE_URL = "https://www.filterflow.ru";

const BASE = SITE_URL.replace(/\/$/, "");

const defaultOgImage = {
  url: "/images/logo.png",
  width: 512,
  height: 512,
  alt: "FilterFlow",
} as const;

/**
 * Абсолютный canonical: главная — с завершающим `/`, подстраницы — как в `trailingSlash: true`.
 */
export function absoluteCanonicalUrl(path: string): string {
  if (path === "" || path === "/") {
    return `${BASE}/`;
  }
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${BASE}${p.endsWith("/") ? p : `${p}/`}`;
}

/** Все публичные маршруты для sitemap (порядок не важен). */
export const SITEMAP_PATHS: readonly string[] = [
  "/",
  "/kontakty",
  "/meshki-dlya-aspiracii",
  "/meshki-dlya-opilok",
  "/meshki-dlya-struzhkootsosa",
  "/meshki-dlya-ciklonov-i-uvp",
  "/filtracionnye-rukava",
  "/verhnie-meshki",
  "/nizhnie-meshki",
  "/tkanevye-meshki",
  "/bystrosemnye-homyty",
  "/nestandartnye-meshki-dlya-filtracii",
  "/politika-konfidencialnosti",
];

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  openGraphTitle?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  openGraphTitle,
}: PageMetaInput): Metadata {
  const canonical = absoluteCanonicalUrl(path === "/" ? "/" : path);
  const ogTitle = openGraphTitle ?? `${title} | FilterFlow`;

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    alternates: {
      canonical,
    },
    openGraph: {
      title: ogTitle,
      description,
      url: canonical,
      siteName: "FilterFlow",
      locale: "ru_RU",
      type: "website",
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [defaultOgImage.url],
    },
  };
}
