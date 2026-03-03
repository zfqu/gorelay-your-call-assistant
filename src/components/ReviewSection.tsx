import { Star, ShieldCheck, Check, X, MessageSquareWarning, TrendingDown, AlertTriangle } from "lucide-react";

const problems = [
  { icon: Star, text: "5-star jobs with no review" },
  { icon: AlertTriangle, text: "Bad experiences going straight to Google" },
  { icon: TrendingDown, text: "Competitors ranking higher" },
];

const solutions = [
  { icon: MessageSquareWarning, text: "Customer automatically receives feedback request" },
  { icon: Star, text: "Happy customers are guided to leave a Google review" },
  { icon: ShieldCheck, text: "Unhappy customers share feedback privately" },
  { icon: AlertTriangle, text: "You get alerted instantly if something went wrong" },
  { icon: TrendingDown, text: "You receive weekly review data summary" },
];

export function ReviewSection() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto">
        {/* Problem */}
        <div className="text-center mb-12">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Star className="h-7 w-7 text-primary" />
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
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
            {problems.map((item, i) => (
              <div key={i} className="card-elevated p-5 text-center">
                <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="h-5 w-5 text-destructive" />
                </div>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="h-7 w-7 text-primary" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Relay Captures Reviews Automatically
          </h3>
          <p className="text-muted-foreground mb-8">After every completed job:</p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left mb-8">
            {solutions.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 card-elevated">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </div>
          <p className="text-lg font-medium text-foreground italic">
            No awkward asking. No chasing. No damage control.
          </p>
        </div>
      </div>
    </section>
  );
}
