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

const HOME_TITLE = "Фильтровальные мешки, рукава и промышленные фильтры";
export const metadata: Metadata = {
  ...pageMetadata({
    title: HOME_TITLE,
    description:
      "Фильтровальные мешки и рукава, ткани, каркасы, воздушные фильтры, фильтры для покрасочных камер и воздуховоды. Производство и поставка по России. Подбор по размерам, оборудованию, чертежу или образцу.",
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
    "карманные фильтры",
    "кассетные фильтры",
    "воздуховоды для аспирации",
    "фильтровальные ткани",
    "каркасы для фильтровальных рукавов",
    "фильтры для покрасочных камер",
    "карманные фильтры для вентиляции",
    "кассетные фильтры для вентиляции",
    "мешки для стружкоотсоса",
    "мешки для циклонов",
    "мешки для УВП",
  ],
};

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="top">
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
