import { PhoneOff, Globe, Star, Phone } from "lucide-react";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: PhoneOff,
    title: "Missed calls",
    description: "AI assistant instantly texts back missed calls and starts the conversation.",
    href: "/features/missed-call-text-back",
  },
  {
    icon: Globe,
    title: "Website leads",
    description: "AI assistant follows up with website leads in seconds before they go cold.",
    href: "/features/web-widget",
  },
  {
    icon: Star,
    title: "Reviews",
    description: "Automatically collect more 5-star Google reviews after the job is done.",
    href: "/features/reviews",
  },
  {
    icon: Phone,
    title: "AI voice",
    description: "AI voice assistant answers calls after hours and during busy times.",
    href: "/features/ai-voice",
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
            Four tools working together so you never miss an opportunity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
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
