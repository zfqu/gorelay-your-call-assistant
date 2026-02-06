import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
            
            <div className="prose prose-sm text-muted-foreground space-y-6">
              <p>
                <strong className="text-foreground">Last updated:</strong> January 2026
              </p>

              <p>
                Relay AI, Inc. ("Relay," "we," "our," or "us") provides communication services for small businesses, including inbound call handling and transactional SMS messaging. This Privacy Policy explains how we collect, use, and protect personal information, including mobile information.
              </p>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Information We Collect</h2>
                <p>
                  We collect only the information necessary to provide our services, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>End-user contact information provided during customer-initiated interactions (such as name, phone number, address, and service request details)</li>
                  <li>Business contact information provided during account signup</li>
                  <li>Call recordings, call metadata, and message content related to service interactions</li>
                  <li>SMS message metadata required to deliver transactional messages</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">How We Use Information</h2>
                <p>
                  We use collected information solely to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide communication services such as call handling, missed-call follow-ups, and transactional SMS messaging</li>
                  <li>Deliver service confirmations, status updates, and post-service follow-up messages</li>
                  <li>Improve service quality and operational accuracy</li>
                  <li>Communicate with businesses about their accounts and service usage</li>
                  <li>Comply with legal, regulatory, and carrier requirements</li>
                </ul>
                <p>
                  We do not use personal information for unsolicited marketing or promotional messaging.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">SMS Messaging</h2>
                <p>
                  Relay sends SMS messages only in connection with customer-initiated interactions with a business that uses our services.
                </p>
                <p>
                  End users may receive SMS messages when they:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Call a business</li>
                  <li>Send an SMS message to a business</li>
                  <li>Submit contact information through a business's website</li>
                </ul>
                <p>
                  SMS messages may include service confirmations, missed-call follow-ups, status updates, or post-service follow-up messages related to an active or recently completed service request.
                </p>
                <p>
                  All SMS messages are transactional and conversational in nature.
                </p>
                <p>
                  Message frequency may vary. Message and data rates may apply.
                </p>
                <p>
                  End users may opt out of SMS messages at any time by replying STOP, or reply HELP for assistance.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Mobile Information Sharing</h2>
                <p>
                  Relay does not sell, rent, or share end-user mobile phone numbers or mobile information with third parties or affiliates for marketing or promotional purposes.
                </p>
                <p>
                  Mobile information is used solely to deliver transactional messages related to customer-initiated service interactions.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Data Sharing</h2>
                <p>
                  We may share information with trusted service providers solely as necessary to operate and support our services (such as telecommunications providers), and only under obligations consistent with this Privacy Policy.
                </p>
                <p>
                  We do not share personal information or mobile information for advertising, marketing, or promotional purposes.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Data Security</h2>
                <p>
                  We implement industry-standard security measures to protect personal information, including encryption in transit, access controls, and regular security reviews. While no system is completely secure, we take reasonable steps to protect data from unauthorized access or disclosure.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <p>
                  Email:{" "}
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

export default PrivacyPolicy;
