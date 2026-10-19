import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Тканевые фильтровальные мешки по материалу и размерам",
  description:
    "Тканевые фильтровальные мешки из материалов, подобранных под пыль и условия работы. Изготовление по размерам, образцу и требованиям оборудования.",
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
