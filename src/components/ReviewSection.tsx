import { Star, ShieldCheck, Check } from "lucide-react";

const problems = [
  "5-star jobs with no review",
  "Bad experiences going straight to Google",
  "Competitors ranking higher",
];

const solutions = [
  "Customer automatically receives feedback request",
  "Happy customers are guided to leave a Google review",
  "Unhappy customers share feedback privately",
  "You get alerted instantly if something went wrong",
  "You receive weekly review data summary",
];

export function ReviewSection() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto">
        {/* Problem */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Are You Actively Collecting Reviews — Or Hoping?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
            Most contractors do great work.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            But only a few customers leave reviews.
          </p>
          <p className="text-lg font-medium text-foreground mb-6">The result?</p>
          <ul className="space-y-3 max-w-md mx-auto mb-12">
            {problems.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                <span className="text-destructive mt-0.5">✗</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Solution */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ShieldCheck className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Relay Captures Reviews Automatically
          </h3>
          <p className="text-muted-foreground mb-8">After every completed job:</p>
          <ul className="space-y-3 max-w-md mx-auto text-left mb-8">
            {solutions.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg font-medium text-foreground italic">
            No awkward asking. No chasing. No damage control.
          </p>
        </div>
      </div>
    </section>
  );
}
