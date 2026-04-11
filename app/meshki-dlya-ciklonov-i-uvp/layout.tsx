import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title:
    "Мешки для циклонов и УВП — пылеулавливающие установки",
  description:
    "Мешки для циклонов и УВП: усиленные швы, устойчивость к абразиву, размеры под вашу пылеулавливающую установку. Производство под заказ. FilterFlow — доставка по России.",
  path: "/meshki-dlya-ciklonov-i-uvp",
});

export default function MeshkiCiklonUvpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
