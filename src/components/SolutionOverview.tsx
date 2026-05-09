import { Zap, Star, Repeat } from "lucide-react";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Zap,
    title: "Speed-to-Lead & Follow-Up",
    description: "Instant SMS response across calls, web forms, widgets, and social DMs — with a 3-day follow-up sequence.",
    href: "/features/speed-to-lead",
  },
  {
    icon: Star,
    title: "Review Automation",
    description: "Multi-day SMS and email review request sequence after each appointment — more 5-star reviews automatically.",
    href: "/features/reviews",
  },
  {
    icon: Repeat,
    title: "Lead Reactivation",
    description: "AI-powered campaigns that re-engage your cold contact list and turn dormant leads into booked appointments.",
    href: "/features/lead-reactivation",
  },
];

export function SolutionOverview() {
  return (
    <section id="features" className="section-padding">
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Relay captures every lead — <span className="gradient-text">automatically</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three systems working together so you never miss an opportunity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {solutions.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="card-elevated p-6 text-center transition-all duration-300 hover:-translate-y-1 group block"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
              <span className="inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
