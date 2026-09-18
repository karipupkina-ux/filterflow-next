import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Верхние фильтровальные мешки для аспирации",
  description:
    "Верхние мешки-фильтры для аспирации и стружкоотсосов. Подбор по модели оборудования или замерам, пошив из фильтровальной ткани на заказ.",
  path: "/verhnie-meshki",
});

export default function VerhnieMeshkiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
