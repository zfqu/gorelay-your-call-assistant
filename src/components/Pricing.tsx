import { Check, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Review Booster",
    subtitle: "Turn completed jobs into 5-star reviews — automatically.",
    price: "$79",
    features: [
      "Automatic SMS review request after each job",
      "Direct Google review link",
      "One follow-up reminder (if no review link clicked)",
      "Weekly review summary to owner",
    ],
    tagline: "Simple. Set it once and let it run.",
    cta: "Get Started",
    color: "green",
  },
  {
    name: "Reputation Shield",
    subtitle: "Capture great reviews — and protect against bad ones.",
    price: "$149",
    includesFrom: "everything in Review Booster",
    features: [
      "Intelligent feedback gathering",
      "Private feedback capture before it hits Google",
      "Instant owner alert for negative feedback",
      "Trackable review links",
    ],
    tagline: "Stop bad reviews before they happen.",
    cta: "Get Started",
    popular: true,
    color: "blue",
  },
  {
    name: "Revenue Capture",
    subtitle: "Never miss a lead. Never miss a review.",
    price: "$249",
    includesFrom: "everything in Reputation Shield",
    features: [
      "Website lead → instant SMS follow-up",
      "Missed call → automatic text-back",
      "Owner notification with full lead details",
      "Weekly lead summary",
    ],
    tagline: "Capture every opportunity — even when you're on a job.",
    cta: "Get Started",
    color: "purple",
  },
];

const addOn = {
  name: "AI Call Answering",
  price: "+$79",
  subtitle: "Answer every call — even after hours.",
  features: [
    "AI answers when you can't",
    "Qualifies caller intent",
    "Sends instant SMS follow-up",
    "Smart call triage and routing",
    "Notifies owner with caller details",
  ],
  tagline: "Perfect for evenings, weekends, or busy days.",
};

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

        <div className="grid md:grid-cols-3 gap-8 mb-10">
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
                  ⭐ Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{tier.subtitle}</p>
              <div className="text-4xl font-bold text-foreground mb-1">{tier.price}</div>
              <p className="text-sm text-muted-foreground mb-6">/month</p>
              {tier.includesFrom && (
                <p className="text-sm text-muted-foreground mb-3">
                  Includes {tier.includesFrom}, plus:
                </p>
              )}
              <ul className="space-y-3 mb-6 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-medium text-foreground mb-6 italic">{tier.tagline}</p>
              <a href="https://calendly.com/zhengfengqu/30min" target="_blank" rel="noopener noreferrer">
                <Button className="w-full" variant={tier.popular ? "default" : "outline"}>
                  {tier.cta}
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Add-On */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="rounded-2xl border border-border p-8 bg-muted/30">
            <div className="flex items-center gap-2 mb-2">
              <Plus className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Add-On: {addOn.name}</h3>
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">{addOn.price}</div>
            <p className="text-sm text-muted-foreground mb-1">/month</p>
            <p className="text-sm text-muted-foreground mb-4">{addOn.subtitle}</p>
            <ul className="space-y-3 mb-4">
              {addOn.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm font-medium text-foreground italic">{addOn.tagline}</p>
          </div>
        </div>

        {/* 30-Day Pilot Disclaimer */}
        <div className="max-w-3xl mx-auto">
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
