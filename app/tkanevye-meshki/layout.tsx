import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title:
    "Тканевые мешки для стружкоотсоса и аспирации — фильтровальные, полиэстер",
  description:
    "Тканевые фильтровальные мешки для аспирации и стружкоотсоса: полиэстер и полипропилен; для высоких температур — ткани на основе Nomex. Многоразовые изделия, подбор размеров. FilterFlow — доставка по России.",
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
