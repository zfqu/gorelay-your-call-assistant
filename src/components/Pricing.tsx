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
      "Direct SMS → instant auto SMS flow kicks off",
      "Intelligent frictionless SMS flow, truly speed-to-lead powered by AI",
      "Owner receives instant SMS notification with the lead details",
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
            Choose the plan that fits your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                tier.popular
                  ? "border-primary shadow-lg scale-105"
                  : "border-border"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{tier.subtitle}</p>
              <div className="text-4xl font-bold text-foreground mb-1">{tier.price}</div>
              <p className="text-sm text-muted-foreground mb-6">/month</p>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="https://calendly.com/zhengfengqu/30min" target="_blank" rel="noopener noreferrer">
                <Button className="w-full" variant={tier.popular ? "default" : "outline"}>
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
