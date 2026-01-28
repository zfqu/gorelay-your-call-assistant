import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    subtitle: "Leads Capture + Protection",
    price: "$149",
    features: [
      "Website widget → instant automatic SMS follow-up",
      "Missed call → instant automatic SMS follow-up",
      "Intelligent frictionless SMS flow, truly speed-to-lead powered by AI",
      "Owner instant SMS with lead details",
      "Weekly SMS leads summary to owner",
      "No dashboard, no login, no configuration to owner, peace of mind",
    ],
    cta: "Get Started",
    color: "green",
  },
  {
    name: "Growth",
    subtitle: "Leads + Reputation",
    price: "$249",
    features: [
      "Everything in Starter, plus:",
      "On-site review request via SMS command",
      "Trackable review links",
      "One automatic reminder (if not clicked)",
      "Weekly review summary",
    ],
    cta: "Get Started",
    popular: true,
    color: "blue",
  },
  {
    name: "Pro",
    subtitle: "Hands-Off Revenue",
    price: "$349",
    features: [
      "Everything in Growth, plus:",
      "Inbound AI voice (after-hours or overflow)",
      "Fallback handling when staff is not available",
      "Smart call triage and routing",
      "Owner notification with caller details",
    ],
    cta: "Get Started",
    color: "purple",
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
            No contract, no commitment, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`card-elevated p-8 relative flex flex-col ${
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

              {/* Tier color indicator */}
              <div className={`w-3 h-3 rounded-full mb-4 ${
                tier.color === "green" ? "bg-green-500" :
                tier.color === "blue" ? "bg-blue-500" :
                "bg-purple-500"
              }`} />
              
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-foreground">{tier.name}</h3>
                <p className="text-primary font-medium">{tier.subtitle}</p>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold text-foreground">{tier.price}</span>
                <span className="text-muted-foreground"> / month</span>
              </div>

              <div className="border-t border-border my-4"></div>

              <div className="flex-grow">
                <p className="text-sm font-medium text-foreground mb-3">Includes</p>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="#contact" className="block mt-auto">
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

        {/* 30-Day Pilot Disclaimer */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              30-Day Pilot
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We're offering a limited 30-day pilot for local contractors (plumber, HVAC, electrician) who want to capture missed calls and respond to new leads instantly. <span className="font-semibold text-foreground">There is no charge during the 30 days pilot.</span>
              </p>
              <p>
                This is not a self-serve trial. We work directly with a small number of businesses to make sure the system is set up correctly, monitor it and review together.
              </p>
              <p>
                If you've been missing calls or slow to follow up on new leads, you may be a fit. If the system doesn't capture leads for you after 30 days, cancel it, no commitment.
              </p>
            </div>
            <a href="https://calendly.com/zhengfengqu/30min" target="_blank" rel="noopener noreferrer" className="inline-block mt-6">
              <Button size="lg" className="px-8">
                Request a Pilot
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
