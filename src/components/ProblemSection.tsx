import { Clock, PhoneOff, Users } from "lucide-react";

const problems = [
  {
    icon: PhoneOff,
    text: "You miss a call or web inquiry",
  },
  {
    icon: Clock,
    text: "You respond hours (or days) later",
  },
  {
    icon: Users,
    text: "Your competitors get the job",
  },
];

export function ProblemSection() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Leads are lost in minutes
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
          Customers don't wait. If you miss a call and respond late, they move on to the next company.
        </p>
        <p className="text-lg font-medium text-foreground mb-10">
          Most jobs go to whoever responds first.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {problems.map((item, i) => (
            <div key={i} className="card-elevated p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-6 w-6 text-destructive" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
