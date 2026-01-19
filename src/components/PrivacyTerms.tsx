export function PrivacyPolicy() {
  return (
    <section id="privacy" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Privacy Policy</h2>
          
          <div className="prose prose-sm text-muted-foreground space-y-6">
            <p>
              <strong className="text-foreground">Last updated:</strong> January 2026
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Information We Collect</h3>
              <p>
                Relay collects only the information necessary to provide our voice AI receptionist service. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Caller information provided during calls (name, phone number, address, service request details)</li>
                <li>Business contact information you provide during signup</li>
                <li>Call recordings and transcripts for service quality and accuracy purposes</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">How We Use Information</h3>
              <p>
                We use collected information solely to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide call answering and message relay services</li>
                <li>Send transactional SMS messages related to customer-initiated service requests</li>
                <li>Improve our service quality and AI accuracy</li>
                <li>Communicate with you about your account</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">SMS Messaging</h3>
              <p>
                Relay sends SMS messages only in connection with customer-initiated interactions.
              </p>
              <p>
                🔧 Customers initiate contact by calling a business that uses Relay. During the call, customers are informed that they may receive SMS messages related to their request (such as confirmations or follow-up notifications). By continuing the call and providing their phone number, customers provide verbal consent to receive these transactional messages.
              </p>
              <p>
                All SMS messages are transactional in nature. Relay does not send marketing or promotional messages.
              </p>
              <p>
                🔧 Message and data rates may apply.
              </p>
              <p>
                Customers may opt out of SMS messages at any time by replying STOP. Customers may reply HELP for assistance.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Data Sharing</h3>
              <p>
                🔧 Relay does not sell, rent, or share personal information or phone numbers for marketing or advertising purposes.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Data Security</h3>
              <p>
                We implement industry-standard security measures to protect your data, including encryption in transit and at rest, secure access controls, and regular security reviews.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Contact</h3>
              <p>
                For privacy-related inquiries, contact us at{" "}
                <a href="mailto:support@gorelay.ai" className="text-primary hover:underline">
                  support@gorelay.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TermsOfService() {
  return (
    <section id="terms" className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Terms of Service</h2>
          
          <div className="prose prose-sm text-muted-foreground space-y-6">
            <p>
              <strong className="text-foreground">Last updated:</strong> January 2026
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Service Description</h3>
              <p>
                Relay provides an AI-powered voice receptionist service for home service contractors. Our service answers inbound calls, triages requests, and delivers summaries via SMS.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Acceptable Use</h3>
              <p>
                You agree to use Relay only for legitimate business purposes related to your home service contracting business. You will not use our service for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sending unsolicited marketing messages</li>
                <li>Any illegal or fraudulent activities</li>
                <li>Impersonating other businesses or individuals</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Service Availability</h3>
              <p>
                We strive to maintain 99.9% uptime but do not guarantee uninterrupted service. We are not liable for missed calls or messages due to technical issues, carrier problems, or force majeure events.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Payment Terms</h3>
              <p>
                Pricing is based on a combination of setup fees, monthly subscription, and per-usage charges. Specific pricing will be provided during onboarding based on your expected call volume.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Termination</h3>
              <p>
                Either party may terminate service with 30 days written notice. Upon termination, you remain responsible for any outstanding usage charges.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Contact</h3>
              <p>
                For questions about these terms, contact us at{" "}
                <a href="mailto:support@gorelay.ai" className="text-primary hover:underline">
                  support@gorelay.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
