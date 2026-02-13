import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { UseCases } from "@/components/UseCases";
import { Pricing } from "@/components/Pricing";
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
        <HowItWorks />
        <UseCases />
        <Pricing />
        <FAQ />
        <Compliance />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
