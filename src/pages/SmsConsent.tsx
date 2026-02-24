import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const SmsConsent = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">
              Relay AI SMS Consent Call Script
            </h1>

            <div className="prose prose-sm text-muted-foreground space-y-6">
              <p>
                <strong className="text-foreground">Company:</strong> Relay AI, Inc.
              </p>
              <p>
                <strong className="text-foreground">Website:</strong>{" "}
                <a href="https://gorelay.ai" className="text-primary hover:underline">
                  https://gorelay.ai
                </a>
              </p>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">1. Purpose of Script</h2>
                <p>
                  This script documents the exact disclosure presented to callers before a transactional SMS confirmation is sent. The SMS is sent only in response to a customer-initiated phone call to a participating home service business.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">2. Verbal Disclosure Script (Exact Wording)</h2>
                <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80">
                  "To confirm your service request, we will send you a text message with your request details. Message and data rates may apply. Reply STOP to opt out at any time. Reply HELP for assistance. You can view our Privacy Policy at{" "}
                  <Link to="/privacy-policy" className="text-primary hover:underline">
                    https://gorelay.ai/privacy-policy
                  </Link>{" "}
                  and our Terms of Service at{" "}
                  <Link to="/terms-of-service" className="text-primary hover:underline">
                    https://gorelay.ai/terms-of-service
                  </Link>
                  ."
                </blockquote>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">3. Consent Mechanism</h2>
                <p>
                  By continuing the call and providing their mobile phone number after hearing the above disclosure, the caller provides express consent to receive a transactional SMS confirmation related to their service request.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">4. Message Characteristics</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Message type: Transactional confirmation only</li>
                  <li>Trigger: Customer-initiated inbound phone call</li>
                  <li>Frequency: Typically one confirmation message per service request</li>
                  <li>No marketing or promotional messaging is sent under this program</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">5. Contact Information</h2>
                <p>
                  For assistance, users may reply HELP to any SMS message or contact support at{" "}
                  <a href="mailto:support@gorelay.ai" className="text-primary hover:underline">
                    support@gorelay.ai
                  </a>
                  .
                </p>
              </div>

              <p>
                <strong className="text-foreground">Document Last Updated:</strong> February 2026
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SmsConsent;
