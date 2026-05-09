const niches = [
  "Chiropractors",
  "Dental Offices",
  "Med Spas",
  "Personal Injury Lawyers",
  "Health Insurance Agents",
  "Martial Arts & Dance Studios",
  "Veterinary Clinics",
  "Coaches & Consultants",
  "Hair & Nail Salons",
  "Home Service Contractors",
];

export function UseCases() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Built for every local service business
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you run a clinic, law office, studio, or service company — if your business runs on appointments and local leads, Relay works for you.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {niches.map((n) => (
            <span
              key={n}
              className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
