import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title:
    "Нестандартные фильтровальные мешки на заказ — пошив по размерам",
  description:
    "Нестандартные фильтровальные мешки на заказ: индивидуальные размеры, подбор ткани, расчёт габаритов и пошив под ваше оборудование. Консультация, короткие сроки изготовления. FilterFlow — доставка по России.",
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
