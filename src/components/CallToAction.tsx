import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="section-padding bg-primary/5">
      <div className="container-narrow mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Ready to stop losing leads?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          See how Relay can protect every lead for your business.
        </p>
        
        <div className="flex flex-col items-center gap-3">
          <a href="https://calendly.com/zhengfengqu/30min" target="_blank" rel="noopener noreferrer">
            <Button variant="hero">
              Book a Quick Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <p className="text-sm text-muted-foreground">20-minutes call · No pressure</p>
        </div>
      </div>
    </section>
  );
}
