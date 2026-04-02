import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need to change my number?",
    answer:
      "No — Relay works with your existing number.",
  },
  {
    question: "Does this replace my staff?",
    answer:
      "No — it supports and augments your team by handling missed and after-hours interactions.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Just a few minutes. No dashboard, no login, no apps — very simple to use.",
  },
  {
    question: "Do you integrate with my existing CRM or calendars?",
    answer:
      "Yes — if you choose to book the job directly, Relay can integrate with your existing scheduling system. Otherwise, you can manually confirm with the lead to book the job (safer).",
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
