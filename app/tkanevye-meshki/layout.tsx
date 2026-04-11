import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title:
    "Тканевые мешки для аспирации — полиэстер и полипропилен",
  description:
    "Тканевые мешки для аспирации: многоразовые материалы, стирка и долгий срок службы, эффективность до 99,9%. Индивидуальные размеры. Производство FilterFlow, доставка по России.",
  path: "/tkanevye-meshki",
});

export default function TkanevyeMeshkiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
