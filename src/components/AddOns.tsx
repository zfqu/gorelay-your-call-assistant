import { Star, Phone } from "lucide-react";

const addOns = [
  {
    icon: Star,
    title: "On-site review requests via SMS",
    description: "Boost your online reputation with automated review requests.",
  },
  {
    icon: Phone,
    title: "Inbound AI call handling for after-hours or overflow",
    description: "Never miss a call, even when you're off the clock.",
  },
];

export function AddOns() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Want more? Add reviews or inbound call handling.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Optional features to grow your business further.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
          {addOns.map((addon, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-background border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <addon.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{addon.title}</h3>
                <p className="text-sm text-muted-foreground">{addon.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
