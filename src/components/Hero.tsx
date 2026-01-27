import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 section-padding">
      <div className="container-narrow mx-auto text-center">
        <div className="animate-fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Stop losing jobs when
            <br />
            <span className="gradient-text">leads don't get a response.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Relay instantly follows up on missed calls and website leads — so every customer hears back, even when you're busy.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {["No dashboard", "No CRM", "No training", "Works within your phone"].map((item) => (
              <span key={item} className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="#contact">
              <Button variant="hero" className="w-full sm:w-auto">
                Start a Free Pilot
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="#how-it-works">
              <Button variant="heroOutline" className="w-full sm:w-auto">
                See How It Works
              </Button>
            </a>
          </div>

          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Built for local small plumbing, HVAC, electrical, cleaning and trade teams — no dashboards, no setup.
          </p>
        </div>
      </div>
    </section>
  );
}
