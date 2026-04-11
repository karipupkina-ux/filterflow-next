import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title:
    "Нижние мешки для аспирации — сбор стружки и опилок",
  description:
    "Нижние фильтровальные мешки для аспирации: накопление крупной стружки и опилок, усиленные швы, размеры под ваше оборудование. Производство FilterFlow, доставка по России.",
  path: "/nizhnie-meshki",
});

export default function NizhnieMeshkiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
