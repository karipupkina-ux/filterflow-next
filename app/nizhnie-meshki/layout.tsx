import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Нижние накопительные мешки для аспирации и стружкоотсосов",
  description:
    "Нижний мешок для стружкоотсоса и аспирации: накопление стружки и опилок в системах аспирации и на установках УВП. Тканевые мешки под модель, типовые размеры в справочнике на сайте. Производство FilterFlow, доставка по России.",
  path: "/nizhnie-meshki",
});

export default function NizhnieMeshkiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
