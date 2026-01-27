import { MessageSquare } from "lucide-react";

export function ExampleMessages() {
  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What happens when someone fills out your website form
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No dashboards. No delays. Just instant follow-up.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contractor SMS */}
          <div className="card-elevated p-6">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">To: You (Contractor)</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Sent immediately after form submission with AI-powered SMS follow-up workflow
            </p>
            <div className="sms-bubble">
              <p className="text-sm text-foreground">
                <strong>📋 New website lead received</strong>
                <br /><br />
                <strong>Name:</strong> Sarah K
                <br />
                <strong>Phone:</strong> (555) 842-1934
                <br />
                <strong>Service:</strong> Water heater issue
                <br />
                <strong>Address:</strong> 123 Main St, Lehi
              </p>
            </div>
            <p className="text-xs text-muted-foreground mt-3 italic">
              Delivered instantly to your phone.
            </p>
          </div>

          {/* Customer SMS */}
          <div className="card-elevated p-6">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">To: Customer</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Sent automatically after form submission
            </p>
            <div className="sms-bubble-outgoing">
              <p className="text-sm">
                Thanks for contacting ABC Plumbing. How can we help you today?
              </p>
            </div>
            <p className="text-xs text-muted-foreground mt-3 italic">
              Capture leads intent and contact info, keep the lead warm.
            </p>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Messages are transactional and triggered only when a customer submits a website form.
        </p>
      </div>
    </section>
  );
}
