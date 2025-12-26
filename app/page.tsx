
"use client";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import MethodSection from "@/components/MethodSection";
import DeliverablesSection from "@/components/DeliverablesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OfferSection from "@/components/OfferSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();

  return (
    <main>
      <HeroSection />
      <PainSection />
      <MethodSection />
      <DeliverablesSection />
      <TestimonialsSection />
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
