import { SITE_URL, absoluteCanonicalUrl } from "@/lib/seo-metadata";

type ServiceJsonLdProps = {
  name: string;
  description: string;
  path: string;
  serviceType: string;
};

export default function ServiceJsonLd({
  name,
  description,
  path,
  serviceType,
}: ServiceJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: absoluteCanonicalUrl(path),
    provider: {
      "@type": "Organization",
      name: "FilterFlow",
      url: `${SITE_URL}/`,
    },
    areaServed: [
      { "@type": "Country", name: "Россия" },
      { "@type": "Place", name: "СНГ" },
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
