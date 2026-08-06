import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";
import { SlackApprovalMock } from "@/components/SlackApprovalMock";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, Check, EyeOff, Table2, Network } from "lucide-react";
import { Fragment } from "react";

const CALENDLY = "https://calendly.com/relayai/30min";

const painPoints = [
  {
    icon: EyeOff,
    title: "Black-Box AI SDRs (e.g 11X)",
    body: "Closed-source AI SDR tools give you no control over outreach logic, can't be customized or plugged into your preferred stack, and run blind outreach that puts your domain reputation at risk.",
  },
  {
    icon: Table2,
    title: "Tool Burnout & Spreadsheet Fatigue (e.g. Clay)",
    body: "Modern enrichment tools burn through credits rapidly and force SDRs to maintain massive, fragile spreadsheets. Reps end up spending more time managing tools than booking meetings.",
  },
  {
    icon: Network,
    title: "Fragmented Data & Manual Bottlenecks",
    body: "Account research, contact enrichment, and email sequencing live in disconnected silos. SDRs spend hours manually researching, processing data instead of focusing on sales.",
  },
];

const outboundFeatures = [
  "Automated ICP account filtering based on firmographics & technographics targeting",
  "Multi-provider decision-maker search & contact enrichment",
  "AI-powered multi-step email copy synthesis matching your brand voice",
  "1-Click Slack interactive Block Kit card approvals",
  "Automatic dispatch to email sequencer",
];

const inboundBullets = [
  "Website visitor deanonymization & intent signal detection",
  "Automated inbound qualification and instant Slack lead routing",
  "Automated follow-up sequences",
];

const steps = [
  {
    title: "1. Account Filtering & Discovery",
    body: "Finds candidate companies matching your exact target geographies, industries, and size criteria, automatically deduplicating against known accounts.",
  },
  {
    title: "2. Contact Sourcing & Verification",
    body: "Identifies key decision-makers matching target titles and enriches verified email addresses via multi-provider lookups.",
  },
  {
    title: "3. LLM Copy Generation",
    body: "Synthesizes tailored, multi-step email sequences based on custom prompt directives, fit reasoning, and your brand voice guidelines.",
  },
  {
    title: "4. Slack Review & Auto-Dispatch",
    body: "Pushes interactive approval cards to Slack. Once approved by an SDR, the lead automatically dispatches to your email sequencer.",
  },
];

const comparisonRows = [
  ["Process Control", "Black-Box / No Control", "Manual / Complex", "Fully Customizable & Owned"],
  ["Workflow Overhead", "Low", "Very High (Spreadsheets)", "Zero (Runs via Slack)"],
  ["Human Oversight", "None / Blind Outreach", "Manual Copy-Paste", "1-Click Interactive Slack Cards"],
  ["Cost and TCO", "High", "High", "Low"],
  ["SDR Productivity", "Risk of spam", "Reps spend hours in tools", "Reps spend 5 mins/day reviewing"],
];

const B2B = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="B2B GTM OS | AI-Native Revenue OS for B2B Tech & Agencies"
        description="Relay B2B GTM OS automates account discovery, decision-maker enrichment, and personalized email copy into an owned pipeline — reviewed and approved directly inside Slack."
        path="/b2b"
      />
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="pt-20 pb-20 sm:pt-28 sm:pb-28 section-padding">
          <div className="container-narrow mx-auto text-center animate-fade-up">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-6">
              RELAY B2B GTM OS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              The AI-Native Revenue OS Built for{" "}
              <span className="gradient-text">B2B Tech, Agencies &amp; Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Automate account discovery, decision-maker enrichment, and personalized email copy into an
              owned pipeline—reviewed and approved directly inside Slack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" className="w-full sm:w-auto">
                  Book a GTM Infrastructure Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#architecture">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore Architecture
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="section-padding bg-muted/40">
          <div className="container-wide mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Traditional B2B Revenue Stacks Are Broken by Design
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Most GTM dysfunction isn't a strategy problem. It's a data, system, and execution problem.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {painPoints.map((p) => (
                <div key={p.title} className="card-elevated p-6">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                    <p.icon className="h-6 w-6 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules */}
        <section id="architecture" className="section-padding">
          <div className="container-wide mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
              Intelligent Revenue Engines Built Into Your Stack
            </h2>

            <div className="space-y-8">
              <div className="card-elevated p-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-foreground">Relay Outbound Engine</h3>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    AVAILABLE NOW
                  </span>
                </div>
                <p className="text-lg font-semibold text-foreground mb-2">
                  Automated Lead Discovery to Sequencer Dispatch
                </p>
                <p className="text-muted-foreground mb-6 max-w-3xl">
                  A deterministic, white-box outbound engine that handles company filtering, contact
                  sourcing, and personalized messaging while keeping your SDRs in full control via Slack.
                </p>
                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {outboundFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
                  <Button>
                    Schedule Outbound Audit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>

              <div className="rounded-xl border border-dashed border-border bg-secondary/30 p-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-foreground">Relay Inbound Engine</h3>
                  <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-semibold">
                    COMING SOON
                  </span>
                </div>
                <p className="text-lg font-semibold text-foreground mb-2">
                  Real-Time Intent Capture &amp; Instant Speed-to-Lead
                </p>
                <p className="text-muted-foreground mb-6 max-w-3xl">
                  Transform high-intent website visitors and inbound lead forms into real-time sales
                  conversations.
                </p>
                <ul className="space-y-2">
                  {inboundBullets.map((b) => (
                    <li key={b} className="text-sm text-muted-foreground">
                      • {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Slack mockup */}
        <section className="section-padding bg-muted/40">
          <div className="container-wide mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Zero-Dashboard Overhead: Manage Your Pipeline in Slack
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                SDRs review generated copy and account fit reasoning directly in Slack. Approve or reject
                with a single click.
              </p>
            </div>
            <SlackApprovalMock />
          </div>
        </section>

        {/* Steps */}
        <section className="section-padding">
          <div className="container-wide mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
              How the Outbound Engine Operates
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s) => (
                <div key={s.title} className="card-elevated p-6">
                  <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="section-padding bg-muted/40">
          <div className="container-wide mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
              Why Choose a Composable Revenue OS?
            </h2>
            <div className="overflow-x-auto card-elevated">
              <table className="w-full min-w-[720px] text-left">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    <th className="p-4 text-sm font-semibold text-foreground">Feature / Capability</th>
                    <th className="p-4 text-sm font-semibold text-muted-foreground">Black-Box AI SDRs</th>
                    <th className="p-4 text-sm font-semibold text-muted-foreground">
                      Spreadsheet Tools (Clay)
                    </th>
                    <th className="p-4 text-sm font-semibold text-primary">Relay Revenue OS</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row[0]} className="border-b border-border last:border-0">
                      <td className="p-4 text-sm font-medium text-foreground">{row[0]}</td>
                      <td className="p-4 text-sm text-muted-foreground">{row[1]}</td>
                      <td className="p-4 text-sm text-muted-foreground">{row[2]}</td>
                      <td className="p-4 text-sm font-medium text-foreground bg-primary/5">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section-padding bg-primary/5">
          <div className="container-narrow mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Modernize Your GTM Infrastructure?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Book a 30 minute GTM audit. We'll map your current outbound bottlenecks and show you how an
              owned revenue engine fits into your stack.
            </p>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
              <Button variant="hero">
                Book a GTM Infrastructure Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default B2B;
