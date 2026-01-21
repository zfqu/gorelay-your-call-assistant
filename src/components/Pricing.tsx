import { Check, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    subtitle: "Inbound Coverage",
    description: "For contractors who never want missed customer calls",
    pricing: {
      monthly: "$149",
      note: "plus usage-based voice minutes",
    },
    features: [
      "AI answers inbound calls when you're busy",
      "After-hours & overflow call handling",
      "Caller intent capture (job type, urgency, contact info)",
      "Call summaries sent to you",
    ],
    badges: [
      { label: "Live today", type: "live" },
      { label: "No contract", type: "live" },
    ],
    footnote: "Usage-based voice minutes billed separately",
    cta: "Get Started",
  },
  {
    name: "Growth",
    subtitle: "Lead Capture + Follow-Up",
    description: "For businesses that want faster response & higher booking rates",
    pricing: {
      monthly: "$299",
    },
    features: [
      "Everything in Starter, plus:",
    ],
    upcomingFeatures: [
      "Instant SMS response to web form leads and missed calls",
      "Automated follow-up until the customer responds",
    ],
    additionalFeatures: [
      "Priority handling for high-intent leads",
      "Unified conversation history (calls + SMS)",
    ],
    badges: [
      { label: "Outbound SMS automation rolling out", type: "coming" },
      { label: "Early-access customers onboarded first", type: "coming" },
    ],
    cta: "Join Waitlist",
    popular: true,
  },
  {
    name: "Pro",
    subtitle: "Missed Call Recovery",
    description: "For businesses that want zero lead leakage",
    pricing: {
      custom: true,
      note: "early access",
    },
    features: [
      "Missed-call detection",
      "Automated call-back & SMS recovery",
      "Appointment intent detection",
      "Revenue tracking (leads recovered)",
    ],
    badges: [
      { label: "Pilot-only availability", type: "coming" },
    ],
    cta: "Contact Us",
    limited: true,
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
              } ${tier.limited ? "ring-2 ring-amber-500" : ""}`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              {tier.limited && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-amber-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                    Limited Access
                  </span>
                </div>
              )}
              
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-foreground">{tier.name}</h3>
                <p className="text-primary font-medium">{tier.subtitle}</p>
              </div>
              
              <p className="text-sm text-muted-foreground text-center mb-6">
                {tier.description}
              </p>

              {'custom' in tier.pricing ? (
                <div className="text-center mb-2">
                  <span className="text-3xl font-bold text-foreground">Custom pricing</span>
                  <p className="text-sm text-muted-foreground mt-1">{tier.pricing.note}</p>
                </div>
              ) : (
                <div className="text-center mb-2">
                  <span className="text-3xl font-bold text-foreground">{tier.pricing.monthly}</span>
                  <span className="text-muted-foreground"> / month</span>
                  <p className="text-sm text-muted-foreground mt-1">{tier.pricing.note}</p>
                </div>
              )}

              <div className="border-t border-border my-6"></div>

              <div className="flex-grow">
                <p className="text-sm font-medium text-foreground mb-3">Includes</p>
                <ul className="space-y-3 mb-4">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {tier.upcomingFeatures && (
                  <ul className="space-y-3 mb-4">
                    {tier.upcomingFeatures.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">
                          {feature} <span className="text-xs text-amber-600 dark:text-amber-400">(coming soon)</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {tier.additionalFeatures && (
                  <ul className="space-y-3 mb-4">
                    {tier.additionalFeatures.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {tier.badges && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {tier.badges.map((badge, badgeIndex) => (
                    <span
                      key={badgeIndex}
                      className={`inline-flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-full ${
                        badge.type === "live"
                          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                          : "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300"
                      }`}
                    >
                      {badge.type === "live" ? (
                        <Check className="h-3 w-3" />
                      ) : (
                        <Clock className="h-3 w-3" />
                      )}
                      {badge.label}
                    </span>
                  ))}
                </div>
              )}

              {tier.footnote && (
                <p className="text-xs text-muted-foreground mb-4">{tier.footnote}</p>
              )}

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
      </div>
    </section>
  );
}
