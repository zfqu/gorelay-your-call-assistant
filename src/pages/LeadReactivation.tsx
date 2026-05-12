import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, Repeat, Upload, Brain, Tags, Activity, Smile, Sparkles, Swords, Check, ShieldCheck, Handshake, Clock, Ban, UserCheck } from "lucide-react";

const steps = [
  { number: "1", text: "You export your existing contact list from your CRM or booking system" },
  { number: "2", text: "Our AI analyzes every contact — cleaning data, scoring reactivation potential, and identifying the best angle for each lead" },
  { number: "3", text: "Relay launches a personalized multi-channel campaign (SMS + email) tailored to your niche and each contact segment" },
  { number: "4", text: "Leads who respond get handed off to an AI agent that handles objections and pushes toward booking" },
  { number: "5", text: "You only pay for results — a setup fee plus a performance fee per booked appointment" },
];

const niches = [
  {
    icon: Activity,
    niche: "Chiropractic",
    trigger: "Seasonal pain patterns and time since last adjustment",
    angle: "\"Your back will thank you — we have availability this week\"",
  },
  {
    icon: Smile,
    niche: "Dental",
    trigger: "6-month cleaning cycle — lapsed patients past their due date",
    angle: "\"Your routine cleaning is overdue — book before your schedule fills up\"",
  },
  {
    icon: Sparkles,
    niche: "Med Spa",
    trigger: "Treatment refresh cycle — Botox and filler results wearing off",
    angle: "\"Time for a refresh — your results from last visit are fading\"",
  },
  {
    icon: Swords,
    niche: "Martial Arts & Studios",
    trigger: "New semester or season starting — lapsed students re-enrolling",
    angle: "\"New classes starting — come back and pick up where you left off\"",
  },
];

const roiSteps = [
  { num: "2,000", label: "Lapsed contacts in your database", sub: "Past inquiries, one-time visitors, and clients who stopped coming back" },
  { num: "1,200", label: "Identified as reactivatable by AI", sub: "Contacts with sufficient data, no opt-out signals, and strong reactivation potential flagged by our AI analysis" },
  { num: "10%", label: "Conservative reactivation rate", sub: "Industry average for well-targeted reactivation campaigns in appointment-based businesses" },
  { num: "120", label: "New booked appointments", sub: "From leads you had already written off completely" },
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

        {/* AI SEGMENTATION VISUAL */}
        <section className="section-padding bg-muted/50">
          <div className="container-wide mx-auto">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Your list goes in. AI intelligence comes out.
              </h2>
              <p className="text-lg text-muted-foreground">
                Relay doesn't blast your entire list. It analyzes every contact and segments them before a single message is sent.
              </p>
            </div>

            <div className="grid lg:grid-cols-[1fr_auto_1.2fr_auto_1.4fr] gap-6 items-stretch max-w-6xl mx-auto">
              {/* Step 1 */}
              <div className="card-elevated p-6 flex flex-col">
                <Upload className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-foreground text-lg mb-2">Your Contact List</h3>
                <p className="text-sm text-muted-foreground">Exported from your existing CRM or booking system</p>
              </div>

              <div className="hidden lg:flex items-center justify-center">
                <ArrowRight className="h-8 w-8 text-primary" />
              </div>
              <div className="flex lg:hidden items-center justify-center">
                <ArrowDown className="h-8 w-8 text-primary" />
              </div>

              {/* Step 2 — featured */}
              <div className="rounded-xl p-6 flex flex-col bg-primary text-primary-foreground shadow-lg">
                <Brain className="h-10 w-10 mb-4" />
                <h3 className="font-bold text-lg mb-2">AI Analysis</h3>
                <p className="text-sm opacity-90">Every contact is scored on reactivation potential, last contact date, drop-off reason, and best outreach angle</p>
              </div>

              <div className="hidden lg:flex items-center justify-center">
                <ArrowRight className="h-8 w-8 text-primary" />
              </div>
              <div className="flex lg:hidden items-center justify-center">
                <ArrowDown className="h-8 w-8 text-primary" />
              </div>

              {/* Step 3 */}
              <div className="card-elevated p-6 flex flex-col">
                <Tags className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-foreground text-lg mb-3">Segmented Campaigns</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 p-2 rounded-lg bg-red-500/10 border border-red-500/20">
                    <span className="text-red-500 text-lg leading-none mt-0.5">●</span>
                    <div className="text-sm">
                      <span className="font-semibold text-foreground">Hot</span>
                      <span className="text-muted-foreground"> — Lapsed 1-3 months · High urgency message</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                    <span className="text-yellow-500 text-lg leading-none mt-0.5">●</span>
                    <div className="text-sm">
                      <span className="font-semibold text-foreground">Warm</span>
                      <span className="text-muted-foreground"> — Lapsed 3-12 months · Value-led message</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <span className="text-blue-500 text-lg leading-none mt-0.5">●</span>
                    <div className="text-sm">
                      <span className="font-semibold text-foreground">Cold</span>
                      <span className="text-muted-foreground"> — Lapsed 12+ months · Re-introduction message</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-muted-foreground max-w-3xl mx-auto mt-10">
              Each segment receives a different message tone, timing, and channel mix — because a contact who lapsed 2 months ago needs a very different message than one who lapsed 2 years ago.
            </p>
          </div>
        </section>

        {/* NICHE TRIGGERS */}
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Built-in reactivation triggers for your niche
              </h2>
              <p className="text-lg text-muted-foreground">
                Every industry has a natural moment when a past client is most likely to come back. Relay knows what that moment is — and sends the right message at the right time.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {niches.map((n) => (
                <div key={n.niche} className="card-elevated p-6">
                  <n.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold text-foreground text-xl mb-3">{n.niche}</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-foreground mb-1">Trigger</p>
                      <p className="text-muted-foreground">{n.trigger}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Message angle</p>
                      <p className="text-muted-foreground italic">{n.angle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground max-w-3xl mx-auto mt-10">
              Each campaign is tailored to your niche. No generic blasts. No awkward messaging. Just the right message for the right lead at the right moment.
            </p>
          </div>
        </section>

        {/* SAMPLE MESSAGE MOCK */}
        <section className="section-padding bg-muted/50">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                What your leads actually receive
              </h2>
              <p className="text-lg text-muted-foreground">
                Every reactivation message is personalized, natural, and part of a multi-channel sequence — not a generic blast.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide text-center mb-4">
                Touch 1 of 3 · SMS · Chiropractic Example
              </p>
              <div className="card-elevated p-6 space-y-4">
                <div className="flex justify-end">
                  <div className="sms-bubble-outgoing">
                    <p className="text-xs font-semibold opacity-80 mb-1">Relay</p>
                    <p className="text-sm">
                      Hi Sarah, it's been a while since your last visit at Austin Chiropractic. Spring weather can be tough on your back — we have openings this week if you'd like to come in. Book here: [booking link]
                    </p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="sms-bubble">
                    <p className="text-xs font-semibold text-muted-foreground mb-1">Sarah</p>
                    <p className="text-sm text-foreground">
                      Oh wow, yes actually my back has been acting up again. Let me check that link
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                  <Check className="h-4 w-4 text-green-600 shrink-0" />
                  <p className="text-sm text-green-700 dark:text-green-400 font-medium">
                    Lead reactivated — removed from sequence, owner notified
                  </p>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6">
                If Sarah doesn't respond, the sequence continues automatically across SMS and email until she does — or the campaign ends. No manual follow-up needed from you.
              </p>
            </div>
          </div>
        </section>

        {/* ROI MATH */}
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                What's hiding in your contact list
              </h2>
              <p className="text-lg text-muted-foreground">
                Most local service businesses have years of past leads and lapsed clients sitting completely dormant. Here's what that's actually worth.
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-4">
              {roiSteps.map((s, i) => (
                <div key={i}>
                  <div className="card-elevated p-6 flex items-center gap-6">
                    <div className="text-4xl sm:text-5xl font-bold gradient-text shrink-0 min-w-[120px]">
                      {s.num}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg mb-1">{s.label}</p>
                      <p className="text-sm text-muted-foreground">{s.sub}</p>
                    </div>
                  </div>
                  <div className="flex justify-center py-2">
                    <ArrowDown className="h-6 w-6 text-primary" />
                  </div>
                </div>
              ))}

              {/* Final highlighted */}
              <div className="rounded-xl p-8 bg-green-500/10 border-2 border-green-500/30 flex items-center gap-6">
                <div className="text-4xl sm:text-5xl font-bold text-green-600 dark:text-green-400 shrink-0 min-w-[120px]">
                  $18,000+
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg mb-1">Recovered revenue</p>
                  <p className="text-sm text-muted-foreground">
                    Based on $150 average appointment value — your number will vary by niche
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-6 max-w-2xl mx-auto">
              *Results vary by niche, list quality, and campaign timing. These figures represent a conservative estimate based on industry benchmarks.
            </p>

            <p className="text-center text-foreground font-bold text-xl mt-8 max-w-2xl mx-auto">
              You already paid to acquire these leads. Reactivating them costs a fraction of generating new ones.
            </p>
          </div>
        </section>

        {/* PRICING CALLOUT */}
        <section className="section-padding bg-muted/50">
          <div className="container-narrow mx-auto">
            <div className="card-elevated p-8 sm:p-12 max-w-3xl mx-auto text-center border-2 border-primary/20">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Performance-based pricing — you only pay for results
              </h2>
              <div className="space-y-4 text-muted-foreground text-left sm:text-center mb-6">
                <p>
                  Lead Reactivation isn't a retainer. It's a campaign. You pay a one-time setup fee of $497 for AI analysis, segmentation, and campaign build-out. After that, you only pay a performance fee per booked appointment generated.
                </p>
                <p>
                  If we don't reactivate leads, you don't pay performance fees. Your risk is the setup — your upside is every appointment that comes back.
                </p>
              </div>
              <p className="text-foreground font-semibold mb-6">
                $497 setup fee + performance fee per booked appointment · Pricing varies by niche and list size
              </p>
              <a href="https://calendly.com/relayai/30min" target="_blank" rel="noopener noreferrer">
                <Button variant="hero">
                  Talk to Us — Get a Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                We'll analyze your list and tell you what it's worth before you commit.
              </p>
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
