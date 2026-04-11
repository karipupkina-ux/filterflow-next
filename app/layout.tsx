import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.filterflow.ru"),
  title: {
    default: "FilterFlow | Мешки для аспирации и фильтровальные рукава",
    template: "%s | FilterFlow",
  },
  description:
    "Производство мешков для аспирации, фильтровальных рукавов и нестандартных фильтровальных мешков под заказ. Доставка по России.",
  alternates: {
    canonical: "https://www.filterflow.ru",
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "FilterFlow | Мешки для аспирации и фильтровальные рукава",
    description:
      "Производство мешков для аспирации, фильтровальных рукавов и нестандартных фильтровальных мешков под заказ.",
    url: "https://www.filterflow.ru",
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
  robots: {
    index: true,
    follow: true,
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
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logo.png" />
        <link rel="shortcut icon" type="image/png" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}