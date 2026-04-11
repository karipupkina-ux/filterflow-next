import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FilterFlow",
  description: "Производство фильтровальных мешков и рукавов FilterFlow",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
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
        <link rel="icon" type="image/png" href="/images/logo.png" />
        <link rel="shortcut icon" type="image/png" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}