import { SITE_URL, absoluteCanonicalUrl } from "@/lib/seo-metadata";

type ArticleJsonLdProps = {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
};

export default function ArticleJsonLd({
  title,
  description,
  path,
  datePublished,
  dateModified,
}: ArticleJsonLdProps) {
  const url = absoluteCanonicalUrl(path);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Главная",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Статьи",
            item: `${SITE_URL}/blog/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: title,
            item: url,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: title,
        description,
        datePublished,
        dateModified,
        inLanguage: "ru-RU",
        mainEntityOfPage: url,
        image: `${SITE_URL}/images/og-512.jpg`,
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <script
      id={`article-schema-${path.split("/").filter(Boolean).at(-1)}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
