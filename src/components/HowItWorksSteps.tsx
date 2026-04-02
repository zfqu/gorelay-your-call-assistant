const steps = [
  { number: "1", text: "A customer calls (missed) or submits a web widget request" },
  { number: "2", text: "Relay responds instantly, follows up and qualifies the lead" },
  { number: "3", text: "You receive the job details and qualified lead info" },
  { number: "4", text: "You follow up and close the job" },
  { number: "5", text: "Relay collects a review automatically after the job is done" },
];

export function HowItWorksSteps() {
  return (
    <section id="how-it-works" className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How Relay works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple system that captures leads and reviews while you focus on the work.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {steps.map((step) => (
            <div key={step.number} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="text-sm font-bold text-primary-foreground">{step.number}</span>
              </div>
              <p className="text-foreground text-lg pt-1.5">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
