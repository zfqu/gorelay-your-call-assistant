import { PhoneOff, Moon, AlertTriangle, DollarSign } from "lucide-react";

const problems = [
  {
    icon: PhoneOff,
    title: "Calls come in while you're on a job",
    description: "Hands are dirty, tools in use — you can't answer.",
  },
  {
    icon: Moon,
    title: "After-hours leads go to voicemail",
    description: "By morning, they've already called your competitor.",
  },
  {
    icon: AlertTriangle,
    title: "Emergencies need immediate escalation",
    description: "A burst pipe at 2 AM can't wait until you check your messages.",
  },
  {
    icon: DollarSign,
    title: "Missed calls = lost revenue",
    description: "Every unanswered call is money walking out the door.",
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
      </div>
    </section>
  );
}
