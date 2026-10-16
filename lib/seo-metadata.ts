import type { Metadata } from "next";

/**
 * Канонический production-домен.
 * Используйте только это значение для metadataBase, canonical, OG, sitemap, robots.
 */
export const SITE_URL = "https://filterflow.ru";

const BASE = SITE_URL.replace(/\/$/, "");

const defaultOgImage = {
  url: "/images/og-512.jpg",
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
  "/filtrovalnye-tkani",
  "/karkasy-dlya-filtrovalnyh-rukavov",
  "/filtry-dlya-pokrasochnyh-kamer",
  "/karmannye-filtry",
  "/kassetnye-filtry",
  "/vozduhovody-dlya-aspiracii",
  "/verhnie-meshki",
  "/nizhnie-meshki",
  "/tkanevye-meshki",
  "/bystrosemnye-homyty",
  "/nestandartnye-meshki-dlya-filtracii",
  "/politika-konfidencialnosti",
  "/portfolio",
  "/portfolio/donaldson-1a31392319-analog",
  "/portfolio/perehodnoj-rukav-550x640-d765",
  "/portfolio/filtry-g2-560x150",
  "/portfolio/poroshkovaya-okraska-antistatik",
  "/portfolio/konsar-2000-meshki",
  "/o-kompanii",
  "/blog",
  "/blog/kak-vybrat-meshok-aspiracii",
  "/blog/kak-rabotaet-aspiraciya",
  "/blog/kogda-menyat-filtr-meshok",
  "/blog/tipy-filtruyushchikh-meshkov",
  "/blog/kak-vybrat-filtrovalnuyu-tkan",
  "/blog/kogda-nuzhna-antistaticheskaya-tkan",
  "/blog/kak-podobrat-karkas-filtrovalnogo-rukava",
  "/blog/dlya-chego-nuzhna-truba-venturi",
  "/blog/karmannyj-ili-kassetnyj-filtr",
  "/blog/kakie-filtry-nuzhny-dlya-pokrasochnoj-kamery",
  "/blog/chto-takoe-paint-stop",
  "/blog/kak-podobrat-diametr-vozduhovoda-aspiracii",
  "/blog/klassy-g4-m5-f7-f9",
  "/blog/kak-opredelit-razmer-karmannogo-filtra",
  "/blog/kak-podobrat-kassetnyj-filtr",
  "/blog/potolochnyj-filtr-pokrasochnoj-kamery",
  "/blog/labirintnyj-filtr-andreae",
  "/blog/kokosovyj-filtr-pokrasochnoj-kamery",
  "/blog/pvh-ili-pur-vozduhovod",
  "/blog/kak-podobrat-homut-dlya-aspiracionnogo-shlanga",
];

/**
 * Реальная дата последнего существенного обновления контента.
 * Не используем new Date(): поисковику нельзя сообщать ложную новую дату
 * при каждом запросе sitemap.
 */
export const SITEMAP_LAST_MODIFIED = "2026-09-18";

/** Точечные даты существенных обновлений отдельных страниц. */
export const SITEMAP_PATH_LAST_MODIFIED: Readonly<Record<string, string>> = {
  "/": "2026-10-14",
  "/o-kompanii": "2026-10-14",
  "/blog": "2026-10-16",
  "/filtrovalnye-tkani": "2026-10-15",
  "/karkasy-dlya-filtrovalnyh-rukavov": "2026-10-15",
  "/filtry-dlya-pokrasochnyh-kamer": "2026-10-16",
  "/karmannye-filtry": "2026-10-16",
  "/kassetnye-filtry": "2026-10-16",
  "/vozduhovody-dlya-aspiracii": "2026-10-16",
  "/bystrosemnye-homyty": "2026-10-16",
  "/portfolio": "2026-10-16",
  "/portfolio/donaldson-1a31392319-analog": "2026-10-16",
  "/portfolio/perehodnoj-rukav-550x640-d765": "2026-10-16",
  "/portfolio/filtry-g2-560x150": "2026-10-16",
  "/portfolio/poroshkovaya-okraska-antistatik": "2026-10-16",
  "/portfolio/konsar-2000-meshki": "2026-10-16",
  "/blog/kak-vybrat-filtrovalnuyu-tkan": "2026-10-15",
  "/blog/kogda-nuzhna-antistaticheskaya-tkan": "2026-10-15",
  "/blog/kak-podobrat-karkas-filtrovalnogo-rukava": "2026-10-15",
  "/blog/dlya-chego-nuzhna-truba-venturi": "2026-10-15",
  "/blog/karmannyj-ili-kassetnyj-filtr": "2026-10-15",
  "/blog/kakie-filtry-nuzhny-dlya-pokrasochnoj-kamery": "2026-10-15",
  "/blog/chto-takoe-paint-stop": "2026-10-15",
  "/blog/kak-podobrat-diametr-vozduhovoda-aspiracii": "2026-10-15",
  "/blog/klassy-g4-m5-f7-f9": "2026-10-16",
  "/blog/kak-opredelit-razmer-karmannogo-filtra": "2026-10-16",
  "/blog/kak-podobrat-kassetnyj-filtr": "2026-10-16",
  "/blog/potolochnyj-filtr-pokrasochnoj-kamery": "2026-10-16",
  "/blog/labirintnyj-filtr-andreae": "2026-10-16",
  "/blog/kokosovyj-filtr-pokrasochnoj-kamery": "2026-10-16",
  "/blog/pvh-ili-pur-vozduhovod": "2026-10-16",
  "/blog/kak-podobrat-homut-dlya-aspiracionnogo-shlanga": "2026-10-16",
};

/** Страницы, которые существенно обновлены при расширении каталога 01.10.2026. */
export const SITEMAP_RECENT_PATHS: readonly string[] = [
  "/",
  "/meshki-dlya-aspiracii",
  "/meshki-dlya-struzhkootsosa",
  "/karkasy-dlya-filtrovalnyh-rukavov",
  "/filtry-dlya-pokrasochnyh-kamer",
  "/karmannye-filtry",
  "/kassetnye-filtry",
  "/vozduhovody-dlya-aspiracii",
  "/bystrosemnye-homyty",
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
