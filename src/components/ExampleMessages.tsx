import { MessageSquare } from "lucide-react";

export function ExampleMessages() {
  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What you'll receive
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clear, actionable messages for every call.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contractor SMS */}
          <div className="card-elevated p-6">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">To: You (Contractor)</span>
            </div>
            <div className="sms-bubble">
              <p className="text-sm text-foreground">
                <strong>📞 New Call</strong>
                <br /><br />
                <strong>Name:</strong> Sarah Johnson
                <br />
                <strong>Phone:</strong> (555) 234-5678
                <br />
                <strong>Address:</strong> 123 Oak Street
                <br />
                <strong>Issue:</strong> No hot water, water heater making clicking sounds
                <br />
                <strong>Priority:</strong> <span className="text-orange-600 font-medium">Urgent</span>
                <br /><br />
                <em className="text-muted-foreground text-xs">Customer has been notified you'll call back within 30 min.</em>
              </p>
            </div>
          </div>

          {/* Customer SMS */}
          <div className="card-elevated p-6">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">To: Customer</span>
            </div>
            <div className="sms-bubble-outgoing">
              <p className="text-sm">
                Hi Sarah! This is ABC Plumbing. We received your call about your water heater. 
                <br /><br />
                A team member will call you back within 30 minutes to schedule service.
                <br /><br />
                <em className="text-primary-foreground/80 text-xs">Reply STOP to opt out of texts.</em>
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Messages are transactional and triggered by customer-initiated calls.
        </p>
      </div>
    </section>
  );
}
