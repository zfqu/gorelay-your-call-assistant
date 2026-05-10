import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";
import { Button } from "@/components/ui/button";
import { ArrowRight, Repeat } from "lucide-react";

const steps = [
  { number: "1", text: "You export your existing contact list from your CRM or booking system" },
  { number: "2", text: "Our AI analyzes every contact — cleaning data, scoring reactivation potential, and identifying the best angle for each lead" },
  { number: "3", text: "Relay launches a personalized multi-channel campaign (SMS + email) tailored to your niche and each contact segment" },
  { number: "4", text: "Leads who respond get handed off to an AI agent that handles objections and pushes toward booking" },
  { number: "5", text: "You only pay for results — a setup fee plus a performance fee per booked appointment" },
];

export default function LeadReactivation() {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Lead Reactivation"
        description="Recover revenue from cold leads with AI-powered reactivation campaigns. Turn dormant lists into booked appointments."
        path="/features/lead-reactivation"
      />
      <Navigation />
      <main>
        {/* HERO */}
        <section className="section-padding pt-28 sm:pt-32">
          <div className="container-narrow mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Repeat className="inline h-4 w-4 mr-1 -mt-0.5" />
              Lead Reactivation
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Recover revenue from leads{" "}
              <span className="gradient-text">you thought were gone.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Most local businesses are sitting on hundreds of leads who inquired, went cold, and were never followed up with. Relay's AI-powered reactivation campaigns identify, segment, and re-engage those contacts — turning a dormant list into booked appointments.
            </p>
            <a href="https://calendly.com/relayai/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="hero">Talk to Us</Button>
            </a>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="section-padding bg-muted/50">
          <div className="container-narrow mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-8">
              Your old leads are your most overlooked revenue source
            </h2>
            <div className="max-w-2xl mx-auto space-y-5 text-lg text-muted-foreground">
              <p>
                Between past inquiries, lapsed patients, and one-time visitors, most service businesses have hundreds of warm contacts they've never properly followed up with. These people already know you. They just need the right message at the right time.
              </p>
              <p className="text-foreground font-semibold text-xl text-center pt-4">
                Reactivating one lapsed patient or client can be worth 5-10x the cost of acquiring a new one.
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                How Lead Reactivation works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                AI segments your list. We handle the outreach. You get booked appointments.
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

        {/* CTA */}
        <section className="section-padding bg-primary/5">
          <div className="container-narrow mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              See what's hiding in your existing contact list
            </h2>
            <a href="https://calendly.com/relayai/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="hero">
                Talk to Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              We'll tell you what your list is worth before you commit.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
