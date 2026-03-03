import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 section-padding">
      <div className="container-narrow mx-auto text-center">
        <div className="animate-fade-up">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Built for small to mid-size trade owners
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Turn every job into
            <br />
            <span className="gradient-text">growth.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Relay automatically captures new leads, follows up instantly, and converts happy customers into 5-star reviews — even when you're busy.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {["No dashboard", "No CRM", "No training", "Works within your phone"].map((item) => (
              <span key={item} className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <a href="https://calendly.com/zhengfengqu/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" className="w-full sm:w-auto">
                Book a Quick Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-muted-foreground">20-minutes call · No pressure</p>
          </div>
        </div>
      </div>
    </section>
  );
}
