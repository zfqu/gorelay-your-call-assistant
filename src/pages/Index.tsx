import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { HowItWorks } from "@/components/HowItWorks";
import { ExampleMessages } from "@/components/ExampleMessages";
import { AddOns } from "@/components/AddOns";
import { UseCases } from "@/components/UseCases";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Compliance } from "@/components/Compliance";
import { TermsOfService } from "@/components/PrivacyTerms";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <ExampleMessages />
        <AddOns />
        <UseCases />
        <Pricing />
        <FAQ />
        <Compliance />
        {showTerms && <TermsOfService />}
      </main>
      <Footer onTermsClick={() => setShowTerms(true)} />
    </div>
  );
};

export default Index;
