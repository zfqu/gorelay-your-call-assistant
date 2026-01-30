import { MessageSquare, FileText, Clock, Bell } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Instantly texts customers when a call is missed",
    description: "No more silent missed calls — customers know you're on it.",
  },
  {
    icon: FileText,
    title: "Instantly texts customers when a web widget is clicked",
    description: "Web leads get a response in seconds, not hours.",
  },
  {
    icon: Clock,
    title: "Sets clear callback expectations for customers",
    description: "Customers know when to expect your call back.",
  },
  {
    icon: Bell,
    title: "Notifies you by SMS — no login required",
    description: "Get lead details straight to your phone.",
  },
];

export function Solution() {
  return (
    <section id="features" className="section-padding">
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Relay protects every lead — <span className="gradient-text">automatically.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            It works alongside your existing phone system or CRM.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-secondary/50 border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
