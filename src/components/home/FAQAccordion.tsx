
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
}

const FAQAccordion = ({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Can't find the answer you're looking for? Reach out to our customer support team.",
}: FAQAccordionProps) => {
  return (
    <Container className="py-20">
      <SectionTitle title={title} subtitle={subtitle} />
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};

export default FAQAccordion;
