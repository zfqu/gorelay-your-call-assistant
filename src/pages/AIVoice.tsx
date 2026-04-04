import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  Clock,
  PhoneIncoming,
  ShieldCheck,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Users,
  Headphones,
  PhoneCall,
} from "lucide-react";

const steps = [
  {
    number: "1",
    title: "A customer calls your business number",
    description: "Day or night, your number is always active.",
  },
  {
    number: "2",
    title: "If your team is unavailable, Relay answers immediately",
    description:
      "After hours, weekends, or during peak call volume — Relay picks up right away.",
  },
  {
    number: "3",
    title: "Relay has a natural conversation",
    description:
      "It asks a few simple questions to understand what the customer needs.",
  },
  {
    number: "4",
    title: "Key details are captured",
    description: "Service needed, address, and urgency — all documented.",
  },
  {
    number: "5",
    title: "Your team receives a structured lead",
    description:
      "Follow up when you're available with everything you need to take the job.",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "24/7 call coverage without adding staff",
    description:
      "Nights, weekends, and holidays — every call is answered.",
  },
  {
    icon: PhoneCall,
    title: "No more missed high-value calls",
    description:
      "Capture emergency jobs and urgent requests around the clock.",
  },
  {
    icon: Users,
    title: "Consistent customer experience",
    description:
      "Every caller gets a professional, helpful response — every time.",
  },
  {
    icon: MessageSquare,
    title: "Structured call details instead of voicemails",
    description:
      "Get clear job info you can act on, not garbled voicemail recordings.",
  },
];

const faqs = [
  {
    question: "Does this replace my office staff?",
    answer:
      "No — it only answers calls when your team is unavailable. During business hours, your team handles calls as usual.",
  },
  {
    question: "What happens after a call?",
    answer:
      "You receive the job details instantly and can follow up when you're ready.",
  },
  {
    question: "Will customers feel like they're talking to a real person?",
    answer:
      "The conversation is simple, natural, non-robotic, and focused on helping the customer.",
  },
];

export default function AIVoice() {
  return (
    <>
      <PageMeta
        title="Inbound AI Voice — 24/7 Call Answering for Contractors"
        description="Relay answers your calls after hours, during peak times, or when lines are busy. Capture every lead with a 24/7 call answering service built for HVAC, plumbing, and home service businesses."
        path="/features/ai-voice"
      />
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
          <div className="container-narrow mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Headphones className="h-4 w-4" />
              After-Hours Call Answering Service
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Never miss a call —{" "}
              <span className="text-primary">even after hours</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Relay answers your calls when your team can't — after hours,
              during peak times, or when lines are busy — and captures
              everything your team needs to follow up.
            </p>
            <a
              href="https://calendly.com/relayai/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero">
                Book a demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </section>

        {/* Positioning */}
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Built to support your team — not replace it
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your team handles calls during business hours. But gaps still
                happen — after hours, weekends, and during peak call volume.
              </p>
            </div>
            <div className="max-w-2xl mx-auto bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
              <ShieldCheck className="h-10 w-10 text-primary mx-auto mb-4" />
              <p className="text-lg font-semibold text-foreground">
                Relay steps in only when your team can't — so no opportunity is
                lost.
              </p>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="section-padding bg-muted/50">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Calls don't stop when your office closes
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              {[
                {
                  icon: Clock,
                  text: "Customers call at night, weekends, and early mornings",
                },
                {
                  icon: PhoneIncoming,
                  text: "During busy hours, calls go unanswered",
                },
                {
                  icon: Phone,
                  text: "Overflow leads to missed opportunities",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-center p-6 rounded-xl bg-background border border-border"
                >
                  <item.icon className="h-8 w-8 text-destructive mx-auto mb-3" />
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-lg font-semibold text-foreground">
              Every unanswered call is a potential lost job.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                How 24/7 call answering works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Relay answers inbound calls in real time — no callbacks, no
                delays.
              </p>
            </div>
            <div className="max-w-2xl mx-auto space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="section-padding bg-muted/50">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                When Relay answers for you
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: Clock,
                  title: "After-hours coverage",
                  desc: "Handle calls at night, weekends, and holidays — without hiring extra staff.",
                },
                {
                  icon: PhoneIncoming,
                  title: "Overflow handling",
                  desc: "When your team is busy or on other calls, Relay answers immediately.",
                },
                {
                  icon: ShieldCheck,
                  title: "Backup coverage",
                  desc: "Ensure every call is answered, even when your team can't get to the phone.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-background border border-border"
                >
                  <item.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                What you get
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-4 p-6 rounded-xl bg-muted/50 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <b.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {b.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {b.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Example */}
        <section className="section-padding bg-muted/50">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                See it in action
              </h2>
              <p className="text-lg text-muted-foreground">
                A customer calls at 9:30 PM
              </p>
            </div>
            <div className="max-w-lg mx-auto space-y-4 mb-8">
              <div className="sms-bubble-outgoing">
                <p className="text-sm font-medium">📞 Relay answers:</p>
                <p className="text-sm">
                  "Thanks for calling ABC HVAC — how can we help?"
                </p>
              </div>
              <div className="sms-bubble">
                <p className="text-sm">
                  <strong>Customer:</strong> "My AC stopped working"
                </p>
              </div>
              <div className="sms-bubble-outgoing">
                <p className="text-sm">
                  "It sounds urgent, we can handle that — what's the service
                  address?"
                </p>
              </div>
              <div className="sms-bubble">
                <p className="text-sm">
                  <strong>Customer:</strong> "123 Main St"
                </p>
              </div>
              <div className="sms-bubble-outgoing">
                <p className="text-sm">
                  "Got it, we'll assign a technician and contact you ASAP."
                </p>
              </div>
            </div>
            <div className="max-w-lg mx-auto bg-background border border-border rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">
                  You receive:
                </span>
              </div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Issue:</strong> AC not
                  working
                </p>
                <p>
                  <strong className="text-foreground">Address:</strong> 123 Main
                  St
                </p>
                <p>
                  <strong className="text-foreground">Call type:</strong>{" "}
                  After-hours call
                </p>
                <p>
                  <strong className="text-foreground">Urgency:</strong> High
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Works */}
        <section className="section-padding">
          <div className="container-narrow mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Why this works
            </h2>
            <div className="max-w-2xl mx-auto space-y-4 text-lg text-muted-foreground">
              <p>Customers expect someone to answer when they call.</p>
              <p>
                If they can't reach you, they'll call the next company.
              </p>
              <p className="font-semibold text-foreground">
                Relay ensures every call is answered and captured — even when
                your team is unavailable.
              </p>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="section-padding bg-muted/50">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Who this is for
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {[
                "HVAC companies",
                "Plumbing businesses",
                "Growing service teams (5–20+ techs)",
                "Property management companies",
                "Electrical contractors",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2 text-sm text-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Setup */}
        <section className="section-padding">
          <div className="container-narrow mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              Set up in minutes
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
              {[
                {
                  step: "1",
                  text: "Forward calls to a Relay number (after hours or overflow)",
                },
                {
                  step: "2",
                  text: "Relay starts answering inbound calls 24/7",
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="p-6 rounded-xl bg-muted/50 border border-border"
                >
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mx-auto mb-3">
                    {s.step}
                  </div>
                  <p className="text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground">
              No complicated setup. No new system to learn.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-muted/50">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Frequently asked questions
              </h2>
            </div>
            <div className="max-w-2xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold text-foreground">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-primary">
          <div className="container-narrow mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Make sure every call gets answered
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Stop losing jobs to unanswered calls. Let Relay handle after-hours
              and overflow calls so your team never misses an opportunity.
            </p>
            <a
              href="https://calendly.com/relayai/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="heroOutline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Book a demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
