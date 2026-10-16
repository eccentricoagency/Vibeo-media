import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { PositioningSection } from "@/components/landing/PositioningSection";
import { ServicesGrid } from "@/components/landing/ServicesGrid";
import { PlatformSection } from "@/components/landing/PlatformSection";
import { FeaturedStory } from "@/components/landing/FeaturedStory";
import { EcosystemSection } from "@/components/landing/EcosystemSection";
import { SocialProof } from "@/components/landing/SocialProof";
import { ProtectionSection } from "@/components/landing/ProtectionSection";
import { CtaBanner } from "@/components/landing/CtaBanner";
import { ApplicationForm } from "@/components/landing/ApplicationForm";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <PositioningSection />
        <ServicesGrid />
        <PlatformSection />
        <FeaturedStory />
        <EcosystemSection />
        <SocialProof />
        <ProtectionSection />
        <CtaBanner />
        <ApplicationForm />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}
