import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";
import {
  ArrowRight,
  Star,
  MessageSquare,
  Mail,
  CheckCircle,
  ThumbsUp,
  Clock,
  Users,
  Zap,
  Search,
  TrendingUp,
  Award,
} from "lucide-react";

const steps = [
  { number: "1", title: "A client completes their appointment or visit", description: "" },
  { number: "2", title: "Direct SMS review request", description: "Relay sends an SMS with your Google review link — no rating scale, just a simple ask." },
  { number: "3", title: "Personalized email follow-up", description: "If no review yet, Relay follows up with a personalized email request." },
  { number: "4", title: "Final SMS reminder", description: "If still no review, a final SMS reminder goes out — the last nudge that often converts." },
  { number: "5", title: "Auto-response on Google", description: "When a review is posted, Relay automatically posts a professional response on your Google Business Profile — no manual replies needed." },
];

const benefits = [
  { icon: MessageSquare, title: "3-touch SMS + email sequence", description: "Multi-channel review request after every appointment." },
  { icon: Star, title: "Direct Google review link", description: "No friction, no rating scale — just a simple ask." },
  { icon: CheckCircle, title: "Auto-stops on review", description: "Sequence stops automatically once the client leaves a review." },
  { icon: Award, title: "Automatic Google responses", description: "Professional responses posted to your Google Business Profile automatically." },
  { icon: Clock, title: "Weekly performance summary", description: "Review performance summary delivered to your inbox every week." },
  { icon: TrendingUp, title: "Monthly growth report", description: "Monthly report showing review growth and response rate." },
];

const seoCards = [
  { icon: Search, title: "Google ranks businesses with more reviews higher", body: "Google's local search algorithm directly factors in review quantity and recency. More fresh reviews = higher position in Google Maps and local search results." },
  { icon: TrendingUp, title: "Higher ranking means more inbound leads", body: "Businesses in the top 3 Google local results capture over 75% of clicks. Every new review moves you closer to that position — without spending more on ads." },
  { icon: ThumbsUp, title: "Reviews convert browsers into buyers", body: "Over 90% of consumers read reviews before choosing a local service provider. A strong, recent review profile is the difference between getting the call and being skipped." },
];

export default function AutomatedReviews() {
  return (
    <>
      <PageMeta
        title="Review Automation - Get More 5-Star Google Reviews"
        description="Get more Google reviews automatically. Relay sends a multi-touch SMS and email review sequence after every appointment."
        path="/features/reviews"
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 section-padding">
          <div className="container-narrow mx-auto text-center">
            <div className="animate-fade-up">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Review Automation
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Get more 5-star reviews
                <br />
                <span className="gradient-text">— automatically.</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                After every appointment, Relay sends a smart multi-touch review sequence across SMS and email — catching happy clients at exactly the right moment, on the channel that works for them.
              </p>
              <div className="flex flex-col items-center justify-center gap-3">
                <a href="https://calendly.com/relayai/30min" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" className="w-full sm:w-auto">
                    Talk to Us
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
                <p>You finish an appointment. The client is happy. But you never follow up — and neither do they.</p>
                <p>Without a simple nudge at the right moment, even your happiest clients won't take the time to leave a Google review.</p>
                <p className="text-foreground font-semibold text-xl">
                  Even happy clients won't leave a review unless you ask — and ask at the right time.
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
                Reviews drive more calls and customers
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
                  <p className="text-sm text-muted-foreground">Trust turns into phone calls and booked appointments</p>
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
                A multi-channel sequence across SMS and email — so more happy clients actually leave a review.
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
                    {step.description && <p className="text-muted-foreground">{step.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* See it in action — Multi-channel sequence */}
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Your multi-channel review sequence
              </h2>
              <p className="text-lg text-muted-foreground">
                One sequence. Three touches. SMS and email — until they review.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
              {/* Touch 1 - SMS */}
              <div className="card-elevated p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground text-sm">Touch 1 · SMS</span>
                </div>
                <div className="sms-bubble-outgoing mb-4">
                  <p className="text-sm">Hi [Name] — thanks for visiting [Business Name]! We'd love to hear about your experience. Mind leaving us a quick Google review? It only takes a minute: [review link]</p>
                </div>
                <p className="text-xs text-muted-foreground italic mt-auto">Sent immediately after appointment</p>
              </div>

              {/* Touch 2 - Email */}
              <div className="card-elevated p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground text-sm">Touch 2 · Email</span>
                </div>
                <div className="rounded-lg border border-border bg-background p-4 mb-4">
                  <p className="text-xs text-muted-foreground mb-1">Subject</p>
                  <p className="text-sm font-semibold text-foreground mb-3">How was your visit, [Name]?</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    Hi [Name], we hope you enjoyed your recent visit with us. If you have a moment, your Google review would mean a lot to our team and helps others find us.
                  </p>
                  <p className="text-sm font-medium text-primary">Leave a Review →</p>
                </div>
                <p className="text-xs text-muted-foreground italic mt-auto">Sent if no review after Touch 1</p>
              </div>

              {/* Touch 3 - SMS */}
              <div className="card-elevated p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground text-sm">Touch 3 · SMS</span>
                </div>
                <div className="sms-bubble-outgoing mb-4">
                  <p className="text-sm">Hey [Name], one last note — we'd really appreciate your feedback on Google. Your review helps our small business grow. [review link]</p>
                </div>
                <p className="text-xs text-muted-foreground italic mt-auto">Final reminder. Sequence stops once review is posted.</p>
              </div>
            </div>

            {/* Auto-Response mock */}
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
                  Auto-Response on Google Business Profile
                </span>
              </div>
              <div className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">S</div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Sarah M.</p>
                    <div className="flex text-amber-500 text-sm">★★★★★</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-5">
                  Amazing experience — the staff was so welcoming and professional. Will definitely be back!
                </p>
                <div className="border-l-2 border-primary pl-4 py-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-foreground">Owner responded</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">automatically via Relay</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Thank you so much, Sarah! We're thrilled to hear you had a great experience. We can't wait to see you again!
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4 italic">
                Every new review gets a professional, timely response — automatically. No more letting reviews sit unanswered.
              </p>
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="section-padding bg-muted/50">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                What you get with Review Automation
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

        {/* Local SEO Impact */}
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                More reviews = higher Google ranking = more leads
              </h2>
              <p className="text-lg text-muted-foreground">
                Reviews aren't just social proof. They're your most powerful local SEO signal.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
              {seoCards.map((c, i) => (
                <div key={i} className="card-elevated p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <c.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.body}</p>
                </div>
              ))}
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
                <p className="text-lg font-semibold text-foreground">
                  The businesses that win local search aren't spending more on ads — they're consistently collecting more reviews than their competitors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Setup */}
        <section className="section-padding bg-muted/50">
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

        {/* Why this works */}
        <section className="section-padding">
          <div className="container-narrow mx-auto text-center max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Why this works
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Clients are most likely to leave a review immediately after a positive experience — but life gets in the way and they forget. A single SMS request isn't enough. Relay's 3-touch SMS and email sequence catches them across multiple moments and channels, dramatically increasing the chance they follow through.
            </p>
            <p className="text-lg text-muted-foreground">
              And when every new review gets a prompt, professional response on Google, your business signals to both customers and Google that you're active, engaged, and trustworthy — which compounds your local search ranking over time.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-muted/50">
          <div className="container-narrow mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Start getting more 5-star reviews today
            </h2>
            <a href="https://calendly.com/relayai/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="hero">
                Talk to Us
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
