import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ReviewSection } from "@/components/ReviewSection";
import { Solution } from "@/components/Solution";
import { ExampleMessages } from "@/components/ExampleMessages";
import { UseCases } from "@/components/UseCases";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
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
        <Solution />
        <ExampleMessages />
        <ReviewSection />
        <UseCases />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <Compliance />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
