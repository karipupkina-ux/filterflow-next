import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-metadata";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import TechnologySection from "./components/feature/TechnologySection";
import Products from "./components/Products";
import Advantages from "./components/Advantages";
import ModernProductionSection from "./components/feature/ModernProductionSection";
import CooperationBenefitsSection from "./components/feature/CooperationBenefitsSection";
import OurWorksSection from "./components/feature/OurWorksSection";
import ReviewsSection from "./components/feature/ReviewsSection";
import AboutCompanyPreviewSection from "./components/feature/AboutCompanyPreviewSection";
import OrderFormSection from "./components/feature/OrderFormSection";
import FAQSection from "./components/feature/FAQSection";
import CatalogGridSection from "./components/feature/CatalogGridSection";
import BlogArticlesSection from "./components/feature/BlogArticlesSection";
import ContactsSection from "./components/feature/ContactsSection";
import FloatingContacts from "./components/feature/FloatingContacts";

const HOME_TITLE = "Производство фильтровальных мешков и рукавов";
export const metadata: Metadata = {
  ...pageMetadata({
    title: HOME_TITLE,
    description:
      "Изготавливаем фильтровальные мешки и рукава для аспирации, стружкоотсосов, циклонов и УВП по размерам заказчика. Доставка по России.",
    path: "/",
  }),
  keywords: [
    "мешки для аспирации",
    "купить мешки для аспирации",
    "мешки для систем аспирации",
    "мешки для аспирационных установок",
    "фильтровальные рукава",
    "рукавные фильтры",
    "фильтры для аспирации",
    "пылеулавливание",
    "промышленная фильтрация",
    "фильтровальные материалы",
    "мешки для стружкоотсоса",
    "мешки для циклонов",
    "мешки для УВП",
  ],
};

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Products />
        <TechnologySection />
        <Advantages />
        <ModernProductionSection />
        <CooperationBenefitsSection />
        <OurWorksSection />
        <ReviewsSection />
        <AboutCompanyPreviewSection />
        <OrderFormSection />
        <FAQSection />
        <CatalogGridSection />
        <BlogArticlesSection />
        <ContactsSection />
      </main>
      <FloatingContacts />
    </>
  );
}
