import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Star,
  MessageSquare,
  CheckCircle,
  AlertTriangle,
  ThumbsUp,
  Shield,
  Clock,
  Users,
  Zap,
} from "lucide-react";

const steps = [
  { number: "1", title: "You finish a job", description: "Complete the service as usual — no extra steps needed." },
  { number: "2", title: "Relay sends a text", description: '"Thanks for choosing us — how did we do today?"' },
  { number: "3", title: "Customer replies with a rating", description: "They respond with a simple 1–10 score." },
  { number: "4", title: "Smart routing based on response", description: "Happy customers get a Google review link. Unhappy customers send private feedback to you." },
];

const benefits = [
  { icon: Star, title: "More 5-star reviews automatically", description: "Happy customers are guided straight to your Google review page — no manual follow-up needed." },
  { icon: Shield, title: "Catch unhappy customers early", description: "Negative feedback stays private, giving you a chance to fix issues before they go public." },
  { icon: Clock, title: "No more chasing customers", description: "Stop asking awkwardly for reviews. Relay handles it automatically after every job." },
  { icon: Zap, title: "Consistent review requests", description: "Every customer gets asked — not just the ones you remember to follow up with." },
];

const faqs = [
  { question: "Do customers actually respond?", answer: "Yes — text messages have very high response rates. Most customers are happy to share quick feedback right after a job." },
  { question: "Can I customize the message?", answer: "Yes — you can adjust the wording to fit your business and brand." },
  { question: "Does this work with Google reviews?", answer: "Yes — happy customers are directed straight to your Google review page with one tap." },
  { question: "What if someone leaves bad feedback?", answer: "It stays private. You get an alert so you can reach out and fix the issue before it becomes a public review." },
];

export default function AutomatedReviews() {
  return (
    <>
      <PageMeta
        title="Automated Review Requests - Get More 5-Star Google Reviews"
        description="Get more Google reviews automatically. Relay sends SMS review requests after every job, routes happy customers to Google, and catches negative feedback privately."
        path="/features/reviews"
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 section-padding">
          <div className="container-narrow mx-auto text-center">
            <div className="animate-fade-up">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Automated Review Requests
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Get more 5-star reviews
                <br />
                <span className="gradient-text">— automatically.</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                Relay texts your customers after each job, asks for feedback, and sends happy customers straight to your Google review page.
              </p>
              <div className="flex flex-col items-center justify-center gap-3">
                <a href="https://calendly.com/relayai/30min" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" className="w-full sm:w-auto">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground">20-minute call · No pressure</p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="section-padding bg-muted/50">
          <div className="container-narrow mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Most customers never leave a review
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>You finish a job. The customer is happy. But you never follow up — and neither do they.</p>
                <p>Without a simple nudge at the right moment, even your happiest customers won't take the time to leave a Google review.</p>
                <p className="text-foreground font-semibold text-xl">
                  Even happy customers won't leave a review unless you ask — and ask at the right time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Reviews Matter */}
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Reviews drive more calls and jobs
              </h2>
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="card-elevated p-6 text-center">
                  <ThumbsUp className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">More reviews</h3>
                  <p className="text-sm text-muted-foreground">Customers choose businesses with more reviews</p>
                </div>
                <div className="card-elevated p-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">More trust</h3>
                  <p className="text-sm text-muted-foreground">Higher ratings build confidence before the first call</p>
                </div>
                <div className="card-elevated p-6 text-center">
                  <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">More calls</h3>
                  <p className="text-sm text-muted-foreground">Trust turns into phone calls and booked jobs</p>
                </div>
              </div>
              <p className="text-foreground font-semibold text-xl">
                More 5-star reviews = more customers choosing you.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding bg-muted/50">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                How automated review requests work
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A simple SMS review request flow that runs after every job.
              </p>
            </div>
            <div className="max-w-2xl mx-auto space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
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
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((b, i) => (
                <div key={i} className="card-elevated p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <b.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.description}</p>
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
              <p className="text-lg text-muted-foreground">Real SMS review request examples.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Positive */}
              <div className="card-elevated p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-foreground">Happy Customer</span>
                </div>
                <div className="space-y-3">
                  <div className="sms-bubble-outgoing"><p className="text-sm">Hi John — thanks for choosing ABC Plumbing. On a scale of 1–10, how did we do?</p></div>
                  <div className="sms-bubble"><p className="text-sm text-foreground">9</p></div>
                  <div className="sms-bubble-outgoing"><p className="text-sm">Awesome — would you mind leaving a quick Google review? It helps a lot: [review link]</p></div>
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic">Customer is directed to your Google review page.</p>
              </div>

              {/* Negative */}
              <div className="card-elevated p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  <span className="font-semibold text-foreground">Unhappy Customer</span>
                </div>
                <div className="space-y-3">
                  <div className="sms-bubble-outgoing"><p className="text-sm">Hi John — thanks for choosing ABC Plumbing. On a scale of 1–10, how did we do?</p></div>
                  <div className="sms-bubble"><p className="text-sm text-foreground">5</p></div>
                  <div className="sms-bubble-outgoing"><p className="text-sm">Sorry to hear that — what went wrong?</p></div>
                  <div className="sms-bubble"><p className="text-sm text-foreground">Technician was late</p></div>
                </div>
                <div className="mt-4 p-3 rounded-lg bg-muted border border-border">
                  <p className="text-xs font-semibold text-foreground mb-1">📋 You receive privately:</p>
                  <p className="text-xs text-muted-foreground">Feedback: Technician was late</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Works */}
        <section className="section-padding">
          <div className="container-narrow mx-auto text-center max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Why this works
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Customers are most likely to leave a review right after the job is done.
            </p>
            <p className="text-lg text-muted-foreground">
              Relay asks at the perfect moment — when the experience is still fresh. A simple text is all it takes to increase your Google reviews consistently.
            </p>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="section-padding bg-muted/50">
          <div className="container-narrow mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              Who this is for
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {["All trades", "Local service businesses", "Any business relying on Google reviews"].map((item) => (
                <span key={item} className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Setup */}
        <section className="section-padding">
          <div className="container-narrow mx-auto text-center max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              Set up in minutes
            </h2>
            <div className="space-y-4 text-left max-w-md mx-auto">
              {[
                "Get assigned a text number from Relay",
                "Customize your review request message",
                "Start collecting reviews automatically",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-6">No complicated setup. No new system to learn.</p>
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
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left font-semibold text-foreground">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding">
          <div className="container-narrow mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Start getting more 5-star reviews today
            </h2>
            <a href="https://calendly.com/relayai/30min" target="_blank" rel="noopener noreferrer">
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
