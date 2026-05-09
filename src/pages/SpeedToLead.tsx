import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Globe, FormInput, MessageCircle, Zap } from "lucide-react";

const steps = [
  { number: "1", text: "A lead contacts you — missed call, web form, website widget, or Facebook/Instagram DM" },
  { number: "2", text: "Relay responds via SMS within seconds, greets them by name and asks what brings them in" },
  { number: "3", text: "The AI captures their intent and sends a direct booking link for a consultation or appointment" },
  { number: "4", text: "If they don't book, Relay automatically sends a 3-day SMS follow-up sequence — one message per day — to bring them back" },
  { number: "5", text: "If they book at any point, Relay removes them from the sequence and notifies you immediately" },
];

const channels = [
  { icon: Phone, title: "Missed Call Text-Back", desc: "When no one answers, Relay texts back instantly and starts the conversation" },
  { icon: Globe, title: "Web Widget", desc: "Visitors who chat or submit a form get an immediate SMS response before they leave your site" },
  { icon: FormInput, title: "Web Form", desc: "Every form submission triggers an instant follow-up — no more cold leads sitting in your inbox" },
  { icon: MessageCircle, title: "Social Media DM (FB/IG)", desc: "Leads who message you on Facebook or Instagram get the same instant response and follow-up flow" },
];

export default function SpeedToLead() {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Speed-to-Lead & Follow-Up"
        description="Respond to every lead instantly across every channel — and follow up automatically until they book."
        path="/features/speed-to-lead"
      />
      <Navigation />
      <main>
        {/* HERO */}
        <section className="section-padding pt-28 sm:pt-32">
          <div className="container-narrow mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap className="inline h-4 w-4 mr-1 -mt-0.5" />
              Speed-to-Lead & Follow-Up
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Respond to every lead instantly —{" "}
              <span className="gradient-text">and follow up until they book.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              When a lead calls, fills out a form, submits a web widget, or messages you on social media, Relay responds in seconds — and keeps following up automatically until they book an appointment.
            </p>
            <a href="https://calendly.com/relayai/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="hero">Get Started</Button>
            </a>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="section-padding bg-muted/50">
          <div className="container-narrow mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-8">
              Most leads go cold before you even see them
            </h2>
            <div className="max-w-2xl mx-auto space-y-5 text-lg text-muted-foreground">
              <p>
                A lead contacts your business. If no one responds in minutes, they move on to the next option. It's not that you don't care — it's that you're busy running your business. Relay makes sure every lead gets an instant response, no matter when they reach out.
              </p>
              <p className="text-foreground font-semibold text-xl text-center pt-4">
                Responding within 5 minutes is 400% more likely to convert a lead than responding within 30 minutes.
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                How Speed-to-Lead & Follow-Up works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                One system handles every lead channel automatically.
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

        {/* CHANNELS */}
        <section className="section-padding bg-muted/50">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Works across every lead channel
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {channels.map((c) => (
                <div key={c.title} className="card-elevated p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <c.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary/5">
          <div className="container-narrow mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Never lose a lead to slow response again
            </h2>
            <a href="https://calendly.com/relayai/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="hero">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-4">20-minute call · No pressure</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
