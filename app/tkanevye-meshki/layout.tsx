import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Тканевые фильтровальные мешки для аспирации",
  description:
    "Тканевые мешки для аспирации и стружкоотсосов. Подбираем материал по типу пыли и условиям работы, шьём по размерам и образцу заказчика.",
  path: "/tkanevye-meshki",
  openGraphTitle:
    "Тканевые мешки для аспирации и стружкоотсоса | FilterFlow",
});

export default function TkanevyeMeshkiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
