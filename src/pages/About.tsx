import { ArrowRight, BadgeCheck, BriefcaseBusiness, Code2, MapPin } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";
import { Button } from "@/components/ui/button";

const credentials = [
  { icon: Code2, text: "15+ Yrs Software Architect" },
  { icon: BriefcaseBusiness, text: "5+ Yrs Entrepreneur" },
  { icon: MapPin, text: "10+ Yrs Texan" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="About Zheng Qu, Founder & Systems Architect"
        description="Meet Zheng Qu, Relay's Austin-based founder. Enterprise software expertise tailored to local business owners across Central Texas."
        path="/about"
      />
      <Navigation />
      <main className="px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <section className="container-wide grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.25fr)] gap-10 lg:gap-16 items-start" aria-labelledby="about-heading">
          <div className="w-full max-w-lg mx-auto lg:mx-0">
            <div className="relative overflow-hidden rounded-lg border border-border shadow-sm">
              <img
                src="/zheng-founder.jpg"
                alt="Zheng Qu, founder of Relay, outdoors among flowering trees"
                className="block w-full aspect-[4/5] object-cover"
                fetchPriority="high"
              />
            </div>
            <div className="mt-5 inline-flex items-center gap-2 rounded-md border border-primary/20 bg-primary/5 px-3 py-2 text-sm font-semibold text-foreground">
              <BadgeCheck className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              Austin Based
            </div>
            <ul className="mt-4 space-y-3 border-l-2 border-primary/20 pl-5">
              {credentials.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Icon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-primary mb-4">ABOUT THE FOUNDER</p>
            <h1 id="about-heading" className="text-4xl sm:text-5xl font-bold leading-tight text-foreground mb-8">
              Enterprise-Grade Systems. Built for Main Street.
            </h1>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                After 15+ years designing enterprise software and advising large companies on digital transformation, alongside 5+ years on my own entrepreneurial journey, I noticed a huge disconnect: modern technology and AI can transform businesses, but local small businesses are largely left behind in a market full of hype, confusion, and frustration.
              </p>
              <p>
                As a 10+ year Texan, my mission is to bridge that gap across Central Texas. I take proven technical know-how, best practices and tailor them specifically for local business owners—helping you cut through the noise, streamline operations, deliver exceptional customer experiences, and drive real revenue.
              </p>
              <p>
                Relay was built to give local teams reliable, transparent systems that actually work inside your daily operations - without the steep learning curves or technical burden.
              </p>
            </div>
            <p className="mt-7 font-semibold text-foreground">— Zheng Qu, Founder &amp; Systems Architect</p>
          </div>
          <div className="lg:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-lg border border-primary/20 bg-primary/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-foreground">Tired of overcomplicated tech? Let's cut noises, build a clean system that actually work for your business.</h2>
            <Button asChild size="lg" className="shrink-0 w-full sm:w-auto whitespace-normal h-auto min-h-12 py-3">
              <a href="https://calendly.com/relayai/30min" target="_blank" rel="noopener noreferrer">
                Book a Free Discovery Call
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}