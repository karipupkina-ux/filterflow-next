import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title:
    "Верхние мешки для аспирации — фильтрация пыли на выходе",
  description:
    "Верхние фильтровальные мешки для аспирации: задержание мелкой пыли, подбор ткани и размеров под стружкоотсос или УВП. Производство FilterFlow, доставка по России.",
  path: "/verhnie-meshki",
});

export default function VerhnieMeshkiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
