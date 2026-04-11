import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title:
    "Нестандартные мешки для фильтрации — по чертежам и ТЗ",
  description:
    "Нестандартные фильтровальные мешки по чертежам: материал, форма крепления и размеры под вашу задачу. Расчёт и консультация. Производство FilterFlow, доставка по России.",
  path: "/nestandartnye-meshki-dlya-filtracii",
});

export default function NestandartnyeMeshkiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
