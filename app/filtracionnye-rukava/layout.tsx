import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title:
    "Фильтрационные рукава для рукавных фильтров и УВП",
  description:
    "Фильтрационные рукава для промышленных фильтров и УВП: диаметр и длина под заказ, импульсная продувка, жаростойкие материалы. Производство FilterFlow, доставка по России.",
  path: "/filtracionnye-rukava",
});

export default function FiltracionnyeRukavaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
