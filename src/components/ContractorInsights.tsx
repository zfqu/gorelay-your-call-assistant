const quotes = [
  {
    text: "We used to call people back and half the time they were already gone. Now at least we're in the conversation right away.",
    attribution: "— a HVAC company",
  },
  {
    text: "Most people never filled out our form. The widget texting gets way more responses from our web inquiries.",
    attribution: "— a Painting contractor",
  },
  {
    text: "We weren't really asking for reviews before. Now it just happens automatically after each job, and we're actually getting more google reviews consistently.",
    attribution: "— a Residential & Commercial Cleaning company",
  },
];

export function ContractorInsights() {
  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          What contractors are seeing
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Feedback from home service contractors using Relay
        </p>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="card-elevated p-6 text-left flex flex-col justify-between"
            >
              <p className="text-base sm:text-lg leading-relaxed text-foreground mb-4">
                "{q.text}"
              </p>
              <p className="text-sm text-muted-foreground">{q.attribution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
