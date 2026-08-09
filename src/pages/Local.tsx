import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionOverview } from "@/components/SolutionOverview";
import { HowItWorksSteps } from "@/components/HowItWorksSteps";
import { UseCases } from "@/components/UseCases";
import { TrustedNiches } from "@/components/TrustedNiches";
import { TrustSection } from "@/components/TrustSection";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Compliance } from "@/components/Compliance";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Local = () => {
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
      <PageMeta
        exactTitle
        title="Relay Local | AI Sales Automation for Local Service Businesses"
        description="Relay helps local service businesses capture every lead, follow up instantly, and reactivate cold leads - so you never lose a customer to slow response again."
        path="/local"
      />
      <Navigation />
      <main>
        <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 section-padding">
          <div className="container-narrow mx-auto text-center animate-fade-up">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              For Local Service Businesses
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Win more customers — without
              <br />
              <span className="gradient-text">missing a single lead.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Relay responds instantly to missed calls, website leads, and after-hours inquiries — so every lead hears back fast and you get the first shot at the booking.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              {["No dashboard", "No app", "No training", "Works with your existing tools"].map((item) => (
                <span key={item} className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <a href="https://calendly.com/relayai/30min" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" className="w-full sm:w-auto">
                  Talk to Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <p className="text-sm text-muted-foreground">20-minutes call · No pressure</p>
            </div>
          </div>
        </section>
        <ProblemSection />
        <SolutionOverview />
        <HowItWorksSteps />
        <TrustedNiches />
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

export default Local;
