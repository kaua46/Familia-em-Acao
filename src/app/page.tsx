import { AlbumSection } from "@/components/landing/album-section";
import { BenefitsSection } from "@/components/landing/benefits-section";
import { FaqSection } from "@/components/landing/faq-section";
import { Footer } from "@/components/landing/footer";
import { GamesSection } from "@/components/landing/games-section";
import { HeroSection } from "@/components/landing/hero-section";
import { LaunchBanner } from "@/components/landing/launch-banner";
import { OfferSection } from "@/components/landing/offer-section";
import { PrintAtHomeSection } from "@/components/landing/print-at-home-section";
import { SecuritySection } from "@/components/landing/security-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { BonusSection } from "@/components/landing/bonus-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-hidden">
      <LaunchBanner />
      <main className="flex-1">
        <HeroSection />
        <PrintAtHomeSection />
        <GamesSection />
        <AlbumSection />
        <BonusSection />
        <BenefitsSection />
        <TestimonialsSection />
        <OfferSection />
        <SecuritySection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
