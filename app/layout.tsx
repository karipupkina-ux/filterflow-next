import type { Metadata } from "next";
import { SITE_URL, absoluteCanonicalUrl } from "@/lib/seo-metadata";
import "./globals.css";
import Footer from "./components/Footer";

const canonicalHome = absoluteCanonicalUrl("/");

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
  alternates: {
    canonical: canonicalHome,
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  verification: {
    yandex: "23c47eef0576e1ca",
  },
  openGraph: {
    title: "FilterFlow — мешки для аспирации и фильтровальные рукава",
    description:
      "Производство фильтровальных мешков для аспирации и рукавов, нестандартные решения под заказ. Подбор размеров, доставка по России.",
    url: canonicalHome,
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
        {children}
        <Footer />
      </body>
    </html>
  );
}