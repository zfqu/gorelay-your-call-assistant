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
  ArrowRight,
  Globe,
  MessageSquare,
  Zap,
  Clock,
  TrendingUp,
  Users,
  CheckCircle2,
} from "lucide-react";

const steps = [
  { number: "1", title: "A visitor fills out your website form" },
  { number: "2", title: 'Relay instantly sends a text: "Hi — thanks for reaching out to ABC Company. How can we help?"' },
  { number: "3", title: "The customer replies with what they need" },
  { number: "4", title: "Relay captures service needed, address, and timing" },
  { number: "5", title: "You receive a qualified lead ready to follow up" },
];

const benefits = [
  { icon: Zap, title: "Instant follow-up", desc: "Within seconds of form submission — before they move on." },
  { icon: TrendingUp, title: "Higher conversion rate", desc: "Leads don't go cold when you respond right away." },
  { icon: MessageSquare, title: "Real conversations", desc: "Not just form entries — actual back-and-forth that qualifies the job." },
  { icon: Clock, title: "Works automatically", desc: "Captures leads while you're on the job or after hours." },
];

const trades = [
  "Plumbing", "HVAC", "Electrical", "Painting", "Remodeling",
  "Pest Control", "Landscaping", "Cleaning", "Auto Repair",
];

const faqs = [
  {
    q: "Does this replace my contact form?",
    a: "No, it works alongside your existing form. It gives visitors an alternative, high-engagement option that starts a real conversation instantly.",
  },
  {
    q: "What if I already use a CRM?",
    a: "No conflict. Relay works alongside your current setup — it simply adds instant text follow-up to your website leads.",
  },
  {
    q: "Will customers actually reply?",
    a: "Yes — text messages have much higher response rates than email. Most people reply within minutes.",
  },
];

export default function WebWidgetFollowUp() {
  return (
    <>
      <PageMeta
        title="Web Widget Follow-Up — Instant Text Response to Website Leads"
        description="Turn website visitors into real leads instantly. Relay texts back website form submissions in seconds, captures job details, and keeps leads warm for contractors."
        path="/features/web-widget"
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 section-padding">
          <div className="container-narrow mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Globe className="inline h-4 w-4 mr-1 -mt-0.5" />
              Website Lead Follow-Up
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Turn website visitors into
              <br />
              <span className="gradient-text">real leads — instantly.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              When someone fills out your website form, Relay texts them in seconds, starts a conversation, and captures everything you need to follow up.
            </p>
            <a href="https://calendly.com/zhengfengqu/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="hero">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </section>

        {/* Problem */}
        <section className="section-padding bg-muted/50">
          <div className="container-narrow mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-center">
              Most website leads go cold
            </h2>
            <div className="max-w-2xl mx-auto space-y-4 text-lg text-muted-foreground">
              <p>Someone fills out a form on your website. It lands in your inbox. You get to it two days later — but by then, they've already hired someone else.</p>
              <p>It's not that your website isn't working. It's that the follow-up is too slow.</p>
              <p className="text-foreground font-semibold text-xl">
                Website leads are high intent — but they go cold fast without a response.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
              How instant website lead follow-up works
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Five simple steps from form submission to qualified lead.
            </p>
            <div className="max-w-2xl mx-auto space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <p className="text-foreground text-lg pt-1.5">{step.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-muted/50">
          <div className="container-narrow mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
              What you get
            </h2>
            <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {benefits.map((b) => (
                <div key={b.title} className="card-elevated p-6">
                  <b.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-muted-foreground">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Example */}
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
              See it in action
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              A real text follow-up for a website form submission.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="card-elevated p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">SMS Conversation</span>
                </div>
                <div className="space-y-3">
                  <div className="sms-bubble-outgoing"><p className="text-sm">Hi John — thanks for reaching out to ABC Company. What can we help with?</p></div>
                  <div className="sms-bubble"><p className="text-sm">AC not cooling</p></div>
                  <div className="sms-bubble-outgoing"><p className="text-sm">Got it, we can fix that — what's your address?</p></div>
                  <div className="sms-bubble"><p className="text-sm">123 Main St</p></div>
                  <div className="sms-bubble-outgoing"><p className="text-sm">What day works best for you?</p></div>
                  <div className="sms-bubble"><p className="text-sm">Tomorrow morning</p></div>
                </div>
              </div>
              <div className="card-elevated p-6 flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-foreground mb-4">You receive:</h3>
                <div className="space-y-2 text-foreground">
                  <p><strong>Customer:</strong> John</p>
                  <p><strong>Phone:</strong> 512-111-1111</p>
                  <p><strong>Issue:</strong> AC not cooling</p>
                  <p><strong>Address:</strong> 123 Main St</p>
                  <p><strong>Preferred time:</strong> Tomorrow morning</p>
                </div>
                <p className="text-sm text-muted-foreground mt-4 italic">Delivered straight to your phone — ready to follow up.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Works */}
        <section className="section-padding bg-muted/50">
          <div className="container-narrow mx-auto text-center max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Why fast text follow-up for website leads works
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              People who fill out a form are ready to hire — but only if you respond quickly.
            </p>
            <p className="text-lg text-foreground font-medium">
              A fast text response keeps them engaged and gives you the first shot at the job.
            </p>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="section-padding">
          <div className="container-narrow mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Who this is for
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Any contractor or service business getting leads from their website or running Google Ads.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {trades.map((t) => (
                <span key={t} className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Businesses getting leads from their website</p>
              <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Businesses running Google Ads or SEO</p>
            </div>
          </div>
        </section>

        {/* Setup */}
        <section className="section-padding bg-muted/50">
          <div className="container-narrow mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              Set up in minutes
            </h2>
            <div className="max-w-md mx-auto space-y-4 text-left">
              {["Add a small script to your website", "Connect your phone number", "Start capturing leads instantly"].map((s, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">{i + 1}</div>
                  <p className="text-foreground text-lg">{s}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-6">No complicated setup. No new system to learn.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
              Frequently asked questions
            </h2>
            <div className="max-w-2xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left font-semibold text-foreground">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-primary/5">
          <div className="container-narrow mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Turn more website visitors into paying customers
            </h2>
            <a href="https://calendly.com/zhengfengqu/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="hero">
                Book a Demo
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
