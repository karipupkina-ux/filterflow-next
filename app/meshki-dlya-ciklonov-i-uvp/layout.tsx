import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Мешки для циклонов и установок УВП",
  description:
    "Фильтровальные и накопительные мешки для циклонов и УВП. Подбор диаметра, длины, ткани и крепления, изготовление по образцу или чертежу.",
  path: "/meshki-dlya-ciklonov-i-uvp",
});

export default function MeshkiCiklonUvpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
