import { Phone, Filter, MessageSquare, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Answers inbound calls in your business voice",
    description: "Professional, friendly, and personalized to your brand.",
  },
  {
    icon: Filter,
    title: "Classifies calls: Emergency / Urgent / Non-urgent",
    description: "Smart triage so you know what needs attention first.",
  },
  {
    icon: MessageSquare,
    title: "Live transfers + always texts details",
    description: "Optional live transfer for emergencies, plus SMS summary every time.",
  },
  {
    icon: CheckCircle,
    title: "Sends customer confirmation text",
    description: "Customers know you got their message and when to expect a callback.",
  },
];

export function Solution() {
  return (
    <section id="features" className="section-padding">
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Never miss a call. <span className="gradient-text">Never miss a job.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            GoRelay handles your calls professionally, 24/7, so you can focus on what you do best.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-secondary/50 border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
