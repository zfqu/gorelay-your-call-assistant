import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Send } from "lucide-react";

const tradeTypes = [
  "Plumbing",
  "HVAC",
  "Electrical",
  "Cleaning",
  "General Contractor",
  "Other",
];


export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xqeaqrzb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="card-elevated p-12 text-center max-w-xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Thanks for reaching out!
            </h2>
            <p className="text-muted-foreground">
              We'll reach out shortly to discuss how Relay can help your business.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Request a demo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how Relay works for your business. We'll have you set up in under an hour.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="card-elevated p-8 max-w-xl mx-auto"
        >
          <div className="space-y-6">
          {/* Honeypot anti-spam field */}
          <input
            type="text"
            name="_gotcha"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Smith"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company *</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="ABC Plumbing"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(555) 123-4567"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="trade">Trade Type *</Label>
              <Select name="trade" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select trade" />
                </SelectTrigger>
                <SelectContent>
                  {tradeTypes.map((trade) => (
                    <SelectItem key={trade} value={trade.toLowerCase()}>
                      {trade}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message (optional)</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your business or any specific needs..."
                rows={4}
              />
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Request a Demo
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
