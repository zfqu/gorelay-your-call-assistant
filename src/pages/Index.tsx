import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ReviewSection } from "@/components/ReviewSection";
import { Solution } from "@/components/Solution";
import { ExampleMessages } from "@/components/ExampleMessages";
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
        <ReviewSection />
        <Solution />
        <ExampleMessages />
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
