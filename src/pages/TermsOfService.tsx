import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>

            <div className="prose prose-sm text-muted-foreground space-y-6">
              <p>
                <strong className="text-foreground">Last updated:</strong> January 2026
              </p>

              <p>
                These Terms of Service ("Terms") govern your access to and use of Relay ("Service"), operated by Relay AI, Inc. ("Relay", "we", "us", or "our"). By using the Service, you agree to these Terms.
              </p>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">1. Service Description</h2>
                <p>
                  Relay provides communication automation tools for home service businesses, including AI-powered inbound call handling and transactional SMS notifications related to customer-initiated service requests.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">2. Acceptable Use</h2>
                <p>
                  You agree to use the Service only for lawful business purposes. You may not use the Service to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Send unsolicited or marketing SMS messages</li>
                  <li>Violate applicable messaging, privacy, or consumer protection laws</li>
                  <li>Impersonate another person or business</li>
                  <li>Engage in fraudulent or abusive activity</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">3. SMS Communications</h2>

                <h3 className="text-lg font-semibold text-foreground">3.1 Transactional Messages Only</h3>
                <p>
                  Relay sends SMS messages only in connection with customer-initiated interactions, such as service confirmations, missed-call follow-ups, or status updates.
                </p>

                <h3 className="text-lg font-semibold text-foreground">3.2 Consent Responsibility</h3>
                <p>
                  You are responsible for obtaining all required consents from your end users before enabling SMS or call-handling features. End users who initiate contact with your business and proceed after being notified are deemed to have provided consent for transactional communications.
                </p>

                <h3 className="text-lg font-semibold text-foreground">3.3 Opt-Out</h3>
                <p>
                  End users may opt out of SMS messages at any time by replying STOP. They may reply HELP for assistance. Message and data rates may apply.
                </p>

                <h3 className="text-lg font-semibold text-foreground">3.4 Mobile Information Use</h3>
                <p>
                  Relay does not sell, rent, share, or transfer mobile phone numbers, messaging data, or SMS consent to third parties or affiliates for marketing or promotional purposes.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">4. Call Recording and AI Processing</h2>
                <p>
                  When enabled, inbound calls may be recorded, transcribed, and processed by AI systems to provide call summaries and responses. You are responsible for notifying callers and obtaining any legally required consent for call recording or AI processing.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">5. Privacy</h2>
                <p>
                  Relay processes personal data in accordance with its{" "}
                  <Link to="/privacy-policy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">6. Service Availability</h2>
                <p>
                  The Service is provided on an "as-is" and "as-available" basis. We do not guarantee uninterrupted operation and are not liable for carrier delays or outages beyond our control.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">7. Termination</h2>
                <p>
                  Either party may terminate the Service at any time upon written notice. Any outstanding fees remain payable upon termination.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">8. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Relay shall not be liable for indirect, incidental, or consequential damages arising from your use of the Service.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">9. Governing Law</h2>
                <p>
                  These Terms are governed by the laws of the State of California, without regard to conflict-of-law principles.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">10. Contact</h2>
                <p>
                  For questions regarding these Terms, contact:{" "}
                  <a href="mailto:support@gorelay.ai" className="text-primary hover:underline">
                    support@gorelay.ai
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
