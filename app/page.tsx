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