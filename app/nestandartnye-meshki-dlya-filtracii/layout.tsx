import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Нестандартные фильтровальные мешки на заказ",
  description:
    "Пошив нестандартных фильтровальных мешков по чертежу, образцу или размерам. Подбор ткани и крепления под оборудование, доставка по России.",
  path: "/nestandartnye-meshki-dlya-filtracii",
  openGraphTitle:
    "Нестандартные фильтровальные мешки на заказ | FilterFlow",
});

export default function NestandartnyeMeshkiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
