import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo-metadata";
import { COMPANY_EMAIL } from "@/lib/contact";
import "./globals.css";
import Footer from "./components/Footer";
import CookieBanner from "./components/feature/CookieBanner";
import YandexMetrika from "./components/YandexMetrika";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "FilterFlow — мешки для аспирации и фильтровальные рукава",
    template: "%s | FilterFlow",
  },
  description:
    "Производство фильтровальных мешков для аспирации и рукавов, нестандартные решения под заказ. Подбор размеров, доставка по России. Консультация инженера.",
  keywords: [
    "мешки для аспирации",
    "фильтровальные рукава",
    "фильтровальные мешки",
    "стружкоотсос",
    "циклон",
    "УВП",
    "FilterFlow",
  ],
  icons: {
    icon: [
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  verification: {
    yandex: "23c47eef0576e1ca",
  },
  openGraph: {
    title: "FilterFlow — мешки для аспирации и фильтровальные рукава",
    description:
      "Производство фильтровальных мешков для аспирации и рукавов, нестандартные решения под заказ. Подбор размеров, доставка по России.",
    url: SITE_URL,
    siteName: "FilterFlow",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/og-512.jpg",
        width: 512,
        height: 512,
        alt: "FilterFlow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FilterFlow — мешки для аспирации и фильтровальные рукава",
    description:
      "Производство фильтровальных мешков для аспирации и рукавов, нестандартные решения под заказ. Подбор размеров, доставка по России.",
    images: ["/images/og-512.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "FilterFlow",
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/images/logo-64.webp`,
        email: COMPANY_EMAIL,
        telephone: "+7-951-499-25-76",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: "FilterFlow",
        inLanguage: "ru-RU",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <html lang="ru">
      <head>
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body>
        <script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteSchema).replace(/</g, "\\u003c"),
          }}
        />
        <YandexMetrika />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
