import {
  Stethoscope,
  Smile,
  Sparkles,
  Scale,
  ShieldCheck,
  Trophy,
  PawPrint,
  GraduationCap,
  Scissors,
  Wrench,
} from "lucide-react";

const niches = [
  { icon: Stethoscope, label: "Chiropractic" },
  { icon: Smile, label: "Dental" },
  { icon: Sparkles, label: "Med Spa" },
  { icon: Scale, label: "Legal" },
  { icon: ShieldCheck, label: "Insurance" },
  { icon: Trophy, label: "Martial Arts" },
  { icon: PawPrint, label: "Veterinary" },
  { icon: GraduationCap, label: "Coaching" },
  { icon: Scissors, label: "Salon & Spa" },
  { icon: Wrench, label: "Home Services" },
];

export function TrustedNiches() {
  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">
          Trusted by local service businesses
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {niches.map((n) => (
            <div
              key={n.label}
              className="flex flex-col items-center gap-2 p-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <n.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">{n.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
