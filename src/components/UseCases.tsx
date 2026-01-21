import { Wrench, Wind, Zap } from "lucide-react";

const useCases = [
  {
    icon: Wrench,
    title: "Plumbing",
    description: "Emergency triage + fast callback capture for burst pipes, leaks, and water heater issues.",
  },
  {
    icon: Wind,
    title: "HVAC",
    description: "Handle A/C emergencies in summer and heating issues in winter. 24/7 coverage.",
  },
  {
    icon: Zap,
    title: "Electrician",
    description: "Capture electrical emergencies safely with proper priority escalation.",
  },
];

export function UseCases() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Built for home service pros
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're on a ladder or under a sink, we've got your calls covered.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="card-elevated p-6 text-center transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <useCase.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{useCase.title}</h3>
              <p className="text-sm text-muted-foreground">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
