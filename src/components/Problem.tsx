import { PhoneOff, Clock, Moon, UserX } from "lucide-react";

const problems = [
  {
    icon: PhoneOff,
    title: "Leads come in while you're on a job",
    description: "You're focused on the work — calls and forms pile up.",
  },
  {
    icon: Clock,
    title: "Missed calls don't get answered fast enough",
    description: "Every minute of delay costs you a potential customer.",
  },
  {
    icon: Moon,
    title: "After-hours calls go nowhere",
    description: "Customers expect a response — even at night.",
  },
  {
    icon: UserX,
    title: "One missed follow-up = one lost job",
    description: "They've already called your competitor.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="section-padding bg-muted/50">
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Sound familiar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every contractor knows the pain of missed opportunities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="card-elevated p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <problem.icon className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{problem.title}</h3>
              <p className="text-sm text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Most trade owners don't realize how many leads disappear silently.
        </p>
      </div>
    </section>
  );
}
