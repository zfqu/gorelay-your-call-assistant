import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    subtitle: "Solo / 1 truck",
    features: [
      "24/7 call answering",
      "Emergency triage",
      "SMS summaries to you",
      "Customer confirmation texts",
      "Basic customization",
      "Live transfer (optional)",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro",
    subtitle: "2–5 trucks",
    features: [
      "Everything in Starter",
      "Customized workflows",
      "Multiple phone numbers",
      "Priority support",
    ],
    cta: "Get Pricing",
    popular: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pricing depends on call volume. We'll quote in 10 minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`card-elevated p-8 relative ${
                tier.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground">{tier.name}</h3>
                <p className="text-muted-foreground">{tier.subtitle}</p>
              </div>
              <div className="text-center mb-6">
                <p className="text-sm text-muted-foreground">
                  Setup + monthly + usage
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block">
                <Button
                  className="w-full"
                  variant={tier.popular ? "default" : "outline"}
                >
                  {tier.cta}
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
