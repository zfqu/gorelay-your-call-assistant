import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 section-padding">
      <div className="container-narrow mx-auto text-center">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            <Phone className="h-4 w-4" />
            Built for Utah's 1–5 truck home service contractors
          </p>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Stop losing jobs when
            <br />
            <span className="gradient-text">you miss calls.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Relay answers every call 24/7, triages emergencies, and texts you the details — so you can stay focused on the job.
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
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="#how-it-works">
              <Button variant="heroOutline" className="w-full sm:w-auto">
                See How It Works
              </Button>
            </a>
          </div>
        </div>

        {/* Visual representation */}
        <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative max-w-md mx-auto">
            {/* Phone mockup with SMS */}
            <div className="bg-muted rounded-3xl p-6 shadow-lg">
              <div className="space-y-3">
                <div className="sms-bubble">
                  <p className="text-sm font-medium text-foreground mb-1">📞 New call from:</p>
                  <p className="text-sm text-muted-foreground">
                    John Smith • (555) 123-4567<br />
                    Issue: Water heater leaking<br />
                    Priority: <span className="text-orange-600 font-medium">Urgent</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MessageSquare className="h-3 w-3" />
                  <span>Delivered just now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
