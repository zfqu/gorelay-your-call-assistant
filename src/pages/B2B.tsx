import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const B2B = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="B2B GTM OS"
        description="Relay B2B GTM OS — signal-driven account research, multi-vendor enrichment, and human-in-the-loop outreach approval inside your own tech stack. Launching soon."
        path="/b2b"
      />
      <Navigation />
      <main className="pt-16">
        <section className="pt-24 pb-24 sm:pt-32 sm:pb-32 section-padding">
          <div className="container-narrow mx-auto text-center animate-fade-up">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              For B2B Tech, Agencies &amp; B2B Services
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Relay B2B GTM OS —
              <br />
              <span className="gradient-text">Launching Soon</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              A composable GTM engine for signal-driven account research, multi-vendor enrichment, and human-in-the-loop outreach — built inside your own stack.
            </p>
            <a href="https://calendly.com/relayai/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="hero">
                Book a GTM Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-4">20-minutes call · No pressure</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default B2B;
