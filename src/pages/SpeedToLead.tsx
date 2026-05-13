import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Globe, FormInput, MessageCircle, Zap, Check, X } from "lucide-react";

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
                Leads contacted within 5 minutes are 21x more likely to convert than those contacted after 30 minutes. Most businesses respond in 42+ hours — if at all.
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

        {/* SMS CONVERSATION MOCK */}
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                See it in action
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                This is what your lead experiences — starting within 10 seconds of contacting you.
              </p>
            </div>

            <div className="max-w-md mx-auto card-elevated p-6">
              <div className="text-center text-xs font-medium text-muted-foreground uppercase tracking-wide pb-4 border-b border-border mb-4">
                Web Widget Submission → Instant SMS Response
              </div>
              <div className="space-y-3">
                <div className="text-center text-xs text-muted-foreground italic py-2">
                  Lead submits web widget with name and phone number
                </div>
                <div className="flex justify-end">
                  <div className="sms-bubble-outgoing">
                    <p className="text-sm">Hi Sarah! Thanks for reaching out to ABC Chiropractic. What brings you in today — are you dealing with any pain or discomfort?</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="sms-bubble">
                    <p className="text-sm text-foreground">Yes, I've had lower back pain for about a week</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="sms-bubble-outgoing">
                    <p className="text-sm">Sorry to hear that — lower back pain is something we treat every day. Dr. Johnson has availability this week for a free consultation. Here's a direct link to grab a time that works for you: [booking link] 🗓️</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="sms-bubble">
                    <p className="text-sm text-foreground">Thanks! Booking now</p>
                  </div>
                </div>
                <div className="text-center text-xs font-medium text-green-600 bg-green-50 dark:bg-green-950/30 rounded-lg py-2 px-3 mt-3">
                  ✓ Lead booked — owner notified instantly
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6 max-w-xl mx-auto">
              Your leads get a real, natural conversation — not a generic autoresponder. The AI captures their intent and gets them to book, without you lifting a finger.
            </p>
          </div>
        </section>

        {/* 3-DAY FOLLOW-UP DRIP */}
        <section className="section-padding bg-muted/50">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                If they don't book — Relay follows up automatically
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                One message per day for 3 days. Stops the moment they book.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { label: "Day 1", text: "Hi Sarah, just checking in — did you get a chance to book your free consultation? We still have spots available this week: [booking link]" },
                { label: "Day 2", text: "Hey Sarah, we know life gets busy! Your appointment slot is still open. Grab a time: [booking link] 🗓️" },
                { label: "Day 3 · Final Follow-Up", text: "Hi Sarah, last note from us — we'd love to help with your back pain. If you're ready, here's your link: [booking link] Or just call us directly at [phone number]. Hope to see you soon!" },
              ].map((d) => (
                <div key={d.label} className="flex flex-col">
                  <div className="text-center text-sm font-semibold text-primary mb-3">{d.label}</div>
                  <div className="card-elevated p-5 flex-1 bg-background">
                    <div className="sms-bubble-outgoing ml-auto">
                      <p className="text-sm">{d.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-2xl mx-auto mt-8 space-y-2">
              <p className="text-sm text-green-600 font-medium">
                ✓ If Sarah books on any day — she's removed from the sequence instantly and you're notified.
              </p>
              <p className="text-sm text-muted-foreground">
                ✓ If no booking after Day 3 — the sequence ends automatically. No spam. No pressure.
              </p>
            </div>
          </div>
        </section>

        {/* BEFORE / AFTER COMPARISON */}
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                What changes when Relay is running
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The difference between losing a lead and booking one.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Without Relay */}
              <div className="card-elevated p-6 border-2 border-destructive/30 bg-destructive/5">
                <div className="flex items-center gap-2 mb-5">
                  <X className="h-6 w-6 text-destructive" />
                  <h3 className="text-xl font-bold text-foreground">Without Relay</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "Lead calls or submits a form",
                    "No one answers or responds",
                    "Lead waits — and loses interest",
                    "Lead searches for the next option",
                    "Competitor responds first",
                    "You never knew they were there",
                  ].map((s) => (
                    <div key={s} className="flex items-start gap-2 text-foreground">
                      <span className="text-destructive shrink-0">→</span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 pt-5 border-t border-destructive/20 text-destructive font-semibold">
                  Lost customer. Lost revenue. And you didn't even know it happened.
                </p>
              </div>

              {/* With Relay */}
              <div className="card-elevated p-6 border-2 border-green-500/30 bg-green-500/5">
                <div className="flex items-center gap-2 mb-5">
                  <Check className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-bold text-foreground">With Relay</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "Lead calls or submits a form",
                    "Relay responds via SMS in 10 seconds",
                    "AI captures their intent naturally",
                    "Booking link sent immediately",
                    "Lead books — you're notified instantly",
                    "3-day follow-up fires if needed",
                  ].map((s) => (
                    <div key={s} className="flex items-start gap-2 text-foreground">
                      <span className="text-green-600 shrink-0">→</span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 pt-5 border-t border-green-500/20 text-green-600 font-semibold">
                  Booked customer. Zero effort from you. Even at 10pm on a Sunday.
                </p>
              </div>
            </div>
          </div>
        </section>


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
