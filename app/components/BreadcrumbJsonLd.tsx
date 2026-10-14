import { SITE_URL } from "@/lib/seo-metadata";

type BreadcrumbJsonLdProps = {
  currentName: string;
  currentPath: string;
  parentName?: string;
  parentPath?: string;
};

export default function BreadcrumbJsonLd({
  currentName,
  currentPath,
  parentName,
  parentPath,
}: BreadcrumbJsonLdProps) {
  const normalizedPath = currentPath.startsWith("/")
    ? currentPath
    : `/${currentPath}`;
  const url = `${SITE_URL}${normalizedPath.endsWith("/") ? normalizedPath : `${normalizedPath}/`}`;

  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Главная",
      item: `${SITE_URL}/`,
    },
  ];

  if (parentName && parentPath) {
    const normalizedParent = parentPath.startsWith("/") ? parentPath : `/${parentPath}`;
    items.push({
      "@type": "ListItem",
      position: 2,
      name: parentName,
      item: `${SITE_URL}${normalizedParent.endsWith("/") ? normalizedParent : `${normalizedParent}/`}`,
    });
  }

  items.push({
    "@type": "ListItem",
    position: items.length + 1,
    name: currentName,
    item: url,
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
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
