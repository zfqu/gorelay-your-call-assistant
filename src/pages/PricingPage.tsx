import { Navigation } from "@/components/Navigation";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Pricing"
        description="Simple, transparent pricing for Relay's revenue protection system. Lead capture, review automation, and missed call text-back for home service contractors."
        path="/pricing"
      />
      <Navigation />
      <main className="pt-16">
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
