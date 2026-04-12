import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Верхние фильтровальные мешки для аспирации и стружкоотсосов",
  description:
    "Верхний мешок для стружкоотсоса и аспирации: тканевые фильтровальные мешки для систем аспирации и пылеулавливания, подбор по модели (JET, PROMA, Корвет, УВП и др.). FilterFlow — производство и доставка по России.",
  path: "/verhnie-meshki",
});

export default function VerhnieMeshkiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
