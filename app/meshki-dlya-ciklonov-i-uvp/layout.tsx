import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Мешки для циклонов и УВП — фильтры для аспирации и пылеулавливания",
  description:
    "Фильтровальные мешки для циклонов, УВП и аспирационных установок: пылеулавливание и промышленная фильтрация воздуха. Подбор размеров под типовые линейки КОНСАР УВП-1200, УВП-2000 и CONSAR 2000. FilterFlow — производство и доставка по России.",
  path: "/meshki-dlya-ciklonov-i-uvp",
});

export default function MeshkiCiklonUvpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
