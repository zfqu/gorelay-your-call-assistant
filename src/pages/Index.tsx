import { Navigation } from "@/components/Navigation";
import { SegmentSelector } from "@/components/SegmentSelector";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        exactTitle
        title="Relay | AI-Native Revenue Engines for B2B & Local Businesses"
        description="Relay powers high-growth B2B companies and local service businesses with owned revenue automation-from B2B outbound prospecting to instant speed-to-lead followup."
        path="/"
      />
      <Navigation />
      <main>
        <section className="pt-28 pb-12 sm:pt-36 sm:pb-16 section-padding">
          <div className="container-narrow mx-auto text-center animate-fade-up">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Revenue OS for Growing Businesses
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              AI-Native Revenue OS for{" "}
              <span className="gradient-text">B2B Tech &amp; Local Service Companies</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you need signal-driven B2B GTM automation or instant speed-to-lead revenue recovery, Relay builds the intelligent pipeline underneath your stack.
            </p>
          </div>
        </section>
        <SegmentSelector />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
