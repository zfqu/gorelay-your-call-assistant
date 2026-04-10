import { Zap, MessageSquare, Trophy } from "lucide-react";

const points = [
  {
    icon: Zap,
    text: "If you miss a call or web inquiry, chances are they're already calling the next company.",
  },
  {
    icon: MessageSquare,
    text: "Text responses happen fast, are less intrusive, and leads are very likely to engage.",
  },
  {
    icon: Trophy,
    text: "Speed to lead gives you the best chance to win the job.",
  },
];

export function TrustSection() {
  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">
          Why speed matters
        </h2>

        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {points.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
