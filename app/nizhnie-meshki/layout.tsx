import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Нижние мешки для стружки и опилок",
  description:
    "Нижние накопительные мешки для стружкоотсосов и аспирации. Подбор по модели, патрубку или старому мешку, изготовление по размерам заказчика.",
  path: "/nizhnie-meshki",
});

export default function NizhnieMeshkiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
