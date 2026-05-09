const steps = [
  { number: "1", text: "A lead contacts you — missed call, web form, website widget, or social media DM" },
  { number: "2", text: "Relay responds instantly via SMS, captures their intent and sends a booking link" },
  { number: "3", text: "If they don't book, Relay follows up automatically with a 3-day SMS nurture sequence" },
  { number: "4", text: "The lead books — you get notified immediately with full details" },
  { number: "5", text: "After their visit, Relay sends a multi-day review request sequence via SMS and email" },
  { number: "6", text: "Owner receives a monthly performance report of leads and reviews" },
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
            A simple system that captures leads, converts bookings, and builds your reputation — while you focus on your clients.
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
