import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export interface FAQItem {
  title: string;
  content: JSX.Element;
}

export interface FAQProps {
  faqs: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  return (
    <div className="w-full bg-muted relative mx-auto">
      <div className="inset-0 flex items-center justify-center h-56 md:h-80 bg-secondary">
        <h1 className="text-2xl sm:text-4xl font-bold text-white">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="text-justify text-text-title justify-center items-center max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold my-4 text-center sm:text-start mx-4">
          General FAQ's about using Medroster
        </h2>
        {faqs.map((faq, index) => (
          <div key={index} className="my-8 mx-2">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>{faq.title}</AccordionTrigger>
                <AccordionContent>{faq.content}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
        <div className="flex flex-row items-center space-x-4 justify-center mt-24 mb-6">
          <p className="text-2xl font-light">How can we help you?</p>{' '}
          <Button className="text-white w-44 my-3" size="lg">
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
