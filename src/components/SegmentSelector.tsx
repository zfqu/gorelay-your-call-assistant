import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const paths = [
  {
    badge: "For B2B Tech, Agencies & B2B Services",
    kicker: "B2B GTM OS",
    title: "Composable GTM Engine",
    description:
      "Automate list building, account signal research, and multi-vendor enrichment inside your own tech stack.",
    features: [
      "Signal-driven account research and fetch",
      "Multi-vendor enrichment (adaptor plugin)",
      "Qualified contact list building",
      "1-click Slack batch approval cards (Human-in-the-Loop)",
      "Email sequencer integration to trigger the outreach",
    ],
    cta: "Explore B2B GTM OS",
    to: "/b2b",
  },
  {
    badge: "For Local Service Businesses",
    kicker: "Local Revenue Engine",
    title: "Local Service Revenue Engine",
    description:
      "Never lose another lead. Capture missed calls and web inquiries, automate Google review requests, and reactivate dormant contact lists automatically.",
    features: [
      "Instant SMS response for missed calls & web inquiries",
      "Multi-day review request sequences (Google review automation)",
      "Database reactivation for cold contacts",
    ],
    cta: "Explore Local Solutions",
    to: "/local",
  },
];

export function SegmentSelector() {
  return (
    <section id="solutions" className="section-padding pb-24">
      <div className="container-wide mx-auto">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {paths.map((p) => (
            <div
              key={p.kicker}
              className="card-elevated rounded-2xl p-8 flex flex-col border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg"
            >
              <span className="inline-block self-start px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                {p.badge}
              </span>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                {p.kicker}
              </p>
              <h3 className="text-2xl font-bold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground mb-6">{p.description}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Link to={p.to} className="mt-auto">
                <Button className="w-full">
                  {p.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
