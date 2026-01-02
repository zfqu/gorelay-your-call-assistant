import { Phone, Bot, MessageCircle, ArrowDown } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "1",
    title: "Customer calls your number",
    description: "Your existing phone number works — no changes for your customers.",
  },
  {
    icon: Bot,
    number: "2",
    title: "Relay triages + captures details",
    description: "Our AI answers professionally, asks the right questions, and classifies urgency.",
  },
  {
    icon: MessageCircle,
    number: "3",
    title: "You get an SMS summary",
    description: "Instant text with caller info, issue, and priority. Call back or dispatch.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple setup. Immediate results.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card-elevated p-6 text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.number}
                  </div>
                  <step.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowDown className="h-6 w-6 text-primary rotate-[-90deg]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
