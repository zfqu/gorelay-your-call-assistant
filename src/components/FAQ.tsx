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
      "No — Relay handles instant response and follow-up automation so your team never has to chase leads manually. Your staff focuses on appointments, consultations, and delivering great service. We handle everything that happens before they walk through the door.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most clients are live within 3-5 business days. We handle the entire setup — connecting your channels, configuring AI agent for your niche, and integrating with your existing booking system.",
  },
  {
    question: "Do I need to switch my CRM or booking system?",
    answer:
      "No. Relay works alongside your existing tools — Mindbody, ChiroTouch, Jane App, Calendly, Google Calendar, and more. You keep running your business exactly as you do today. We just add the automation layer on top.",
  },
  {
    question: "Is there a contract or minimum commitment?",
    answer:
      "No long-term contracts. Our plans are month-to-month. We offer a 30-day pilot so you can see real results before committing long-term. If it's not working, you can cancel anytime.",
  },
  {
    question: "How will I know if it's actually working?",
    answer:
      "You'll receive a monthly performance report showing lead capture volume, booking conversion rate, response times, and review growth. Everything is tracked and transparent — no guessing whether it's delivering results.",
  },
  {
    question: "What happens when a lead asks a complex question the AI can't answer?",
    answer:
      "The AI only handles intent capture and booking — it never attempts to answer medical, legal, or detailed service questions. When a lead asks something outside its scope, it redirects them to book a call or consultation with you directly.",
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
