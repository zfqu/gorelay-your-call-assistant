import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="section-padding bg-primary/5">
      <div className="container-narrow mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          Start capturing every lead today
        </h2>
        <a href="https://calendly.com/relayai/30min" target="_blank" rel="noopener noreferrer">
          <Button variant="hero">
            Book a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </a>
        <p className="text-sm text-muted-foreground mt-4">20-minutes call · No pressure</p>
      </div>
    </section>
  );
}
