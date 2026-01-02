import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Does it book appointments?",
    answer:
      "Relay captures all the details and confirms next steps with the customer. Calendar integration for direct booking is available as an optional add-on.",
  },
  {
    question: "What happens with emergencies?",
    answer:
      "You choose: live transfer for true emergencies (burst pipe, no heat in winter), or immediate SMS notification. Either way, you get the alert right away.",
  },
  {
    question: "Can I keep my existing phone number?",
    answer:
      "Yes! We can forward calls from your current number, or port it over later if you prefer. Your customers never need to dial a new number.",
  },
  {
    question: "Will it work after hours?",
    answer:
      "Absolutely. Relay answers 24/7/365 — nights, weekends, and holidays. That's when you need it most.",
  },
  {
    question: "Do customers need an app?",
    answer:
      "No. Customers just call your regular phone number and receive standard SMS texts. No downloads, no accounts, no friction.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Relay.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
