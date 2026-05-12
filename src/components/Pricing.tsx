import { Check, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Review Automation",
    subtitle: "Turn happy clients into 5-star reviews — automatically.",
    price: "$197",
    features: [
      "Automatic SMS review request after each appointment",
      "Multi-day SMS + email follow-up sequence",
      "Direct Google review link",
      "Automate Google review response",
      "Weekly review summary report to owner",
    ],
    tagline: "Stop bad reviews before they happen.",
    cta: "Get Started",
  },
  {
    name: "Speed-to-Lead + Follow-Up",
    subtitle: "Respond instantly. Follow up automatically. Never lose a warm lead.",
    price: "$297",
    features: [
      "Missed call → instant SMS text-back",
      "Web widget & web form → instant SMS follow-up",
      "AI agent captures intent and sends booking link",
      "3-day SMS follow-up drip if no booking",
      "Instant owner notification on booking",
      "Weekly lead summary report to owner",
    ],
    tagline: "Capture every opportunity. Convert more bookings.",
    cta: "Get Started",
  },
  {
    name: "Full Growth Bundle",
    subtitle: "Speed-to-Lead + Reviews — the complete growth system.",
    price: "$397",
    features: [
      "Everything in Speed-to-Lead + Follow-Up",
      "Everything in Review Automation",
      "Monthly lead capture + review performance report",
      "Priority support",
    ],
    tagline: "Never miss a lead. Never miss a review.",
    cta: "Get Started",
    popular: true,
  },
];

const addOn = {
  name: "Social Media DM Lead Capture",
  price: "+$97/month",
  subtitle: "When a lead messages your business on Facebook or Instagram, Relay treats it like any other inbound lead — responding instantly and following up until they book.",
  features: [
    "Instant AI response to incoming FB/IG DMs",
    "Captures lead intent and pushes booking link",
    "3-day SMS follow-up drip if no booking occurs",
    "Lead notified owner on booking conversion",
    "Requires Speed-to-Lead & Follow-Up plan",
  ],
};

const reactivation = {
  name: "Lead Reactivation Campaign",
  subtitle: "Re-engage your cold leads and recover lost revenue.",
  price: "$497 setup fee + performance pricing per booked appointment",
  features: [
    "AI-powered contact list analysis and segmentation",
    "Niche-specific multi-channel reactivation campaign",
    "AI agent handles responses and objections",
    "You only pay for actual booked appointments",
    "Custom pricing based on niche and list size",
  ],
  tagline: "Turn your existing database into booked revenue.",
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
              <ul className="space-y-3 mb-6 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-medium text-foreground mb-6 italic">{tier.tagline}</p>
              <a href="https://calendly.com/relayai/30min" target="_blank" rel="noopener noreferrer">
                <Button className="w-full" variant={tier.popular ? "default" : "outline"}>
                  {tier.cta}
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Add-On */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="rounded-2xl border border-border p-8 bg-muted/30">
            <div className="flex items-center gap-2 mb-2">
              <Plus className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Add-On: {addOn.name}</h3>
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">{addOn.price}</div>
            <p className="text-sm text-muted-foreground mb-1">/month</p>
            <p className="text-sm text-muted-foreground mb-4">{addOn.subtitle}</p>
            <ul className="space-y-3">
              {addOn.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Lead Reactivation - separate distinct card */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="rounded-2xl border-2 border-dashed border-primary/30 p-8 bg-background">
            <h3 className="text-2xl font-bold text-foreground mb-2">{reactivation.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{reactivation.subtitle}</p>
            <div className="text-lg font-semibold text-foreground mb-6">{reactivation.price}</div>
            <ul className="space-y-3 mb-6">
              {reactivation.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm font-medium text-foreground italic mb-6">{reactivation.tagline}</p>
            <a href="https://calendly.com/relayai/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full sm:w-auto">Talk to Us</Button>
            </a>
          </div>
        </div>

        {/* 30-Day Pilot */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              30-Day Pilot
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We're offering a limited 30-day pilot for local service businesses who want to capture missed calls and respond to new leads instantly. <span className="font-semibold text-foreground">There is no charge during the 30 days pilot.</span>
              </p>
              <p>
                This is not a self-serve trial. We work directly with a small number of businesses to make sure the system is set up correctly, monitor it and review together.
              </p>
              <p>
                If you've been missing calls or slow to follow up on new leads, you may be a fit. If the system doesn't capture leads or book appointments for you after 30 days, cancel it, no commitment.
              </p>
            </div>
            <a href="https://calendly.com/relayai/30min" target="_blank" rel="noopener noreferrer" className="inline-block mt-6">
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
