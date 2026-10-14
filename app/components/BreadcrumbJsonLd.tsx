import { SITE_URL } from "@/lib/seo-metadata";

type BreadcrumbJsonLdProps = {
  currentName: string;
  currentPath: string;
};

export default function BreadcrumbJsonLd({
  currentName,
  currentPath,
}: BreadcrumbJsonLdProps) {
  const normalizedPath = currentPath.startsWith("/")
    ? currentPath
    : `/${currentPath}`;
  const url = `${SITE_URL}${normalizedPath.endsWith("/") ? normalizedPath : `${normalizedPath}/`}`;

  const schema = {
    "@context": "https://schema.org",
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
        name: currentName,
        item: url,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
