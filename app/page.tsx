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
import SeoContentSection from "./components/feature/SeoContentSection";
import CatalogGridSection from "./components/feature/CatalogGridSection";
import BlogArticlesSection from "./components/feature/BlogArticlesSection";
import ContactsSection from "./components/feature/ContactsSection";
import FloatingContacts from "./components/feature/FloatingContacts";
import CookieBanner from "./components/feature/CookieBanner";

const HOME_TITLE =
  "Мешки для аспирации и стружкоотсоса, фильтровальные рукава и рукавные фильтры в наличии и под заказ";
export const metadata: Metadata = {
  ...pageMetadata({
    title: HOME_TITLE,
    description:
      "Производство фильтровальных мешков и рукавов для систем аспирации и пылеулавливания: рукавные фильтры, мешки для стружкоотсоса, циклонов и УВП. Пошив на заказ, промышленная фильтрация. Доставка по России.",
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
      <Hero />
      <TechnologySection />
      <Products />
      <Advantages />
      <ModernProductionSection />
      <CooperationBenefitsSection />
      <OurWorksSection />
      <ReviewsSection />
      <AboutCompanyPreviewSection />
      <OrderFormSection />
      <FAQSection />
      <SeoContentSection />
      <CatalogGridSection />
      <BlogArticlesSection />
      <ContactsSection />
      <FloatingContacts />
      <CookieBanner />
    </>
  );
}