
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I talk to landowners directly?",
    answer: "No, all proposals are mediated through YardMatters to ensure privacy and security for all parties. Our team facilitates communication after mutual interest is established."
  },
  {
    question: "What's the minimum land size required?",
    answer: "We typically work with land parcels of at least 0.5 acres, but exceptions can be made for high-value locations. Contact our team for specific requirements for your area."
  },
  {
    question: "Is YardMatters legally involved in the agreements?",
    answer: "YardMatters acts as a facilitator and provides templates, but is not a party to the final agreement. We recommend independent legal review before signing any documents."
  },
  {
    question: "How are my documents kept secure?",
    answer: "All documents are encrypted and stored in compliance with ISO 27001 standards. They are only accessible to our verification team and are never shared directly with third parties."
  },
  {
    question: "How long does the typical collaboration process take?",
    answer: "The timeline varies depending on project complexity, but typically takes 3-6 months from initial listing to formal agreement signing."
  },
];

const FaqSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Learn more about how YardMatters facilitates secure property collaborations
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-2">Still have questions?</p>
            <a href="/contact" className="text-brand-600 font-medium hover:text-brand-700">
              Contact our support team →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
