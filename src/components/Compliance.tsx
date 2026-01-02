import { Shield, MessageSquareOff, Lock } from "lucide-react";

const items = [
  {
    icon: Shield,
    text: "We send only transactional texts related to customer-initiated calls.",
  },
  {
    icon: MessageSquareOff,
    text: "No marketing blasts. Ever.",
  },
  {
    icon: Lock,
    text: "We collect only information needed to handle service requests.",
  },
];

export function Compliance() {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Responsible Messaging & Privacy
          </h2>
          <p className="text-background/70 max-w-2xl mx-auto">
            We take compliance seriously. Here's how we protect you and your customers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center shrink-0">
                <item.icon className="h-5 w-5 text-background" />
              </div>
              <p className="text-background/90 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
