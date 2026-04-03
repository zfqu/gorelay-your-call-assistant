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
import { Phone, MessageSquare, ClipboardList, Send, UserCheck, Clock, Shield, Wrench, Zap } from "lucide-react";

const steps = [
  { icon: Phone, title: "Customer calls your number", description: "A potential customer dials your business line." },
  { icon: Phone, title: "You miss the call", description: "You're on a job, driving, or just busy — it happens." },
  { icon: Send, title: "Relay texts them instantly", description: '"Sorry we missed your call — how can we help?"' },
  { icon: MessageSquare, title: "Customer replies with details", description: "Relay captures service needed, address, and timing." },
  { icon: UserCheck, title: "You get a qualified lead", description: "A ready-to-follow-up lead lands on your phone." },
];

const benefits = [
  { icon: Zap, title: "Instant response", description: "Text goes out within seconds of a missed call — before they call someone else." },
  { icon: ClipboardList, title: "Capture real job details", description: "Not just a missed call notification. You get the service, address, and timing." },
  { icon: Wrench, title: "Works while you're on the job", description: "No need to stop what you're doing. Relay handles the first response for you." },
  { icon: Shield, title: "Keeps customers from calling competitors", description: "A fast reply keeps them engaged and gives you the first shot at the job." },
];

const faqs = [
  {
    question: "What is missed call text back?",
    answer: "Missed call text back is an automated system that sends an SMS message to callers when you can't answer the phone. It also qualifies the lead and routes the qualified lead info to you so that you can follow up further.",
  },
  {
    question: "Do I need to change my number?",
    answer: "No, Relay works with your existing number. Just conditional forward your phone system to a Relay-provided number, and the system works by itself.",
  },
  {
    question: "How fast does the text go out after a missed call?",
    answer: "Relay automatically starts a text conversation with the lead within 10 seconds of a missed call — before the lead moves on to competitors.",
  },
];

const smsConversation = [
  { from: "customer", text: "My water heater is leaking" },
  { from: "relay", text: "Sorry to hear that, we can take care of that. What's your address?" },
  { from: "customer", text: "123 Main St, Austin" },
  { from: "relay", text: "What's your name?" },
  { from: "customer", text: "Jon Smith" },
  { from: "relay", text: "What day works best for you?" },
  { from: "customer", text: "Tomorrow morning" },
];

export default function MissedCallTextBack() {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Missed Call Text Back"
        description="Never miss a job again. Relay automatically texts back missed calls in seconds, captures what customers need, and keeps them engaged until you follow up."
        path="/features/missed-call-text-back"
      />
      <Navigation />
      <main>
        {/* HERO */}
        <section className="section-padding pt-28 sm:pt-32">
          <div className="container-narrow mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Never miss a job again.{" "}
              <span className="gradient-text">Instantly text back missed calls.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              When a customer calls and no one answers, Relay automatically texts them back in seconds, captures what they need, and keeps them engaged until you follow up.
            </p>
            <a href="https://calendly.com/zhengfengqu/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="hero">Get Started</Button>
            </a>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="section-padding bg-muted/50">
          <div className="container-narrow mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-8">
              Missed calls = lost jobs
            </h2>
            <div className="max-w-2xl mx-auto space-y-5 text-lg text-muted-foreground">
              <p>
                You're on a roof, under a sink, or behind the wheel. A customer calls — and you can't pick up.
              </p>
              <p>
                Most people won't leave a voicemail. They'll just call the next contractor on the list.
              </p>
              <p>
                Every missed call is a potential job walking out the door. And it happens more than you think — studies show <strong className="text-foreground">80% of callers won't leave a voicemail</strong>.
              </p>
              <p className="text-foreground font-semibold text-xl text-center pt-4">
                Speed matters — whoever responds first usually wins the job.
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
              How missed call text back works
            </h2>
            <div className="grid gap-6 max-w-3xl mx-auto">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4 card-elevated p-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="section-padding bg-muted/50">
          <div className="container-narrow mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
              What you get
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((b, i) => (
                <div key={i} className="card-elevated p-6">
                  <b.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-muted-foreground text-sm">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REAL EXAMPLE */}
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
              See it in action
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
              Here's a real example of how Relay handles an auto text back after a missed call.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* SMS conversation */}
              <div className="card-elevated p-6">
                <h3 className="font-semibold text-foreground mb-4">SMS conversation</h3>
                <div className="space-y-3">
                  {smsConversation.map((msg, i) => (
                    <div key={i} className={`flex ${msg.from === "relay" ? "justify-start" : "justify-end"}`}>
                      <div className={msg.from === "relay" ? "sms-bubble" : "sms-bubble-outgoing"}>
                        <p className="text-sm">{msg.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lead summary */}
              <div className="card-elevated p-6 flex flex-col justify-center">
                <h3 className="font-semibold text-foreground mb-4">What you receive</h3>
                <div className="bg-muted rounded-lg p-5 space-y-3">
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">Customer</span>
                    <p className="font-semibold text-foreground">Jon Smith</p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">Service</span>
                    <p className="font-semibold text-foreground">Water heater issue</p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">Address</span>
                    <p className="font-semibold text-foreground">123 Main St, Austin</p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">Timing</span>
                    <p className="font-semibold text-foreground">Tomorrow morning</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  Delivered straight to your phone — ready to follow up.
                </p>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-8 text-sm">
              This same instant text follow-up also works for website form leads.{" "}
              <a href="/features/web-widget" className="text-primary font-medium hover:underline">Learn more →</a>
            </p>
          </div>
        </section>

        {/* WHY THIS WORKS */}
        <section className="section-padding bg-muted/50">
          <div className="container-narrow mx-auto text-center max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Why instant response wins more jobs
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Customers don't wait. If they don't hear back quickly, they move on.
            </p>
            <p className="text-lg text-muted-foreground">
              A fast text response keeps them engaged and gives you the first shot at the job. It's the difference between winning work and wondering where the leads went.
            </p>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="section-padding">
          <div className="container-narrow mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              Who this is for
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Missed call text back works for any contractor who's too busy to answer every call.
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto">
              {["Plumbers", "HVAC Contractors", "Electricians", "Roofers", "Painters", "Remodelers", "Small service teams (2–10 techs)"].map((t) => (
                <span key={t} className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SETUP */}
        <section className="section-padding bg-muted/50">
          <div className="container-narrow mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              Set up in minutes
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
              {[
                { step: "1", text: "Connect your number" },
                { step: "2", text: "Turn on missed call text back" },
                { step: "3", text: "Start capturing leads instantly" },
              ].map((s) => (
                <div key={s.step} className="card-elevated p-6 text-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 font-bold">
                    {s.step}
                  </div>
                  <p className="font-medium text-foreground">{s.text}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground font-medium">
              No complicated setup. No new system to learn.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-10">
              Frequently asked questions
            </h2>
            <div className="max-w-2xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
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

        {/* FINAL CTA */}
        <section className="section-padding bg-primary/5">
          <div className="container-narrow mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Start capturing missed calls today
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
              Stop losing jobs to missed calls. Let Relay handle the first response so you can focus on the work.
            </p>
            <a href="https://calendly.com/zhengfengqu/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="hero">Book a Demo</Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
