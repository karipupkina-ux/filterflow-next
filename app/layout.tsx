import type { Metadata } from "next";
import Script from "next/script";
import { SITE_URL } from "@/lib/seo-metadata";
import "./globals.css";
import Footer from "./components/Footer";

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
      { url: "/images/favicon.ico", sizes: "any" },
      { url: "/images/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/images/favicon.ico",
    apple: "/images/apple-icon.png",
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
        url: "/images/logo.png",
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
    images: ["/images/logo.png"],
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FilterFlow",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
  };

  return (
    <html lang="ru">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}