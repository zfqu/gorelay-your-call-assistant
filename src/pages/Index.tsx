import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionOverview } from "@/components/SolutionOverview";
import { HowItWorksSteps } from "@/components/HowItWorksSteps";
import { UseCases } from "@/components/UseCases";
import { ContractorInsights } from "@/components/ContractorInsights";
import { TrustSection } from "@/components/TrustSection";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Compliance } from "@/components/Compliance";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionOverview />
        <HowItWorksSteps />
        <UseCases />
        <TrustSection />
        <FAQ />
        <FinalCTA />
        <Compliance />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
