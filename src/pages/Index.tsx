import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { HowItWorks } from "@/components/HowItWorks";
import { ExampleMessages } from "@/components/ExampleMessages";
import { UseCases } from "@/components/UseCases";
import { Pricing } from "@/components/Pricing";
import { AddOns } from "@/components/AddOns";
import { FAQ } from "@/components/FAQ";
import { Compliance } from "@/components/Compliance";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <ExampleMessages />
        <UseCases />
        <Pricing />
        <AddOns />
        <FAQ />
        <Compliance />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
