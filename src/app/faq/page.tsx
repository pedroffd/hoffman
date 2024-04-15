'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  return (
    <div className=" max-w-7xl relative mx-auto">
      <div className="relative">
        <Image
          src="/images/tinted-jumbotron-3.jpg"
          alt="Terms of Use"
          placeholder="blur"
          loading="lazy"
          height={304}
          width={1170}
          blurDataURL="data:/images/tinted-jumbotron-3.jpg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      <div className="text-justify text-text-title justify-center items-center max-w-6xl mx-auto container mt-8">
        <h2 className="text-2xl font-semibold my-3">
          General FAQ's about using Medroster
        </h2>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Medroster?</AccordionTrigger>
            <AccordionContent>
              Medroster is a HIPAA-secure communications platform for the
              medical community. Our purpose is to make communication between
              doctors, their staff and patients more safe and efficient by
              simulating how you communicate in real life. Medroster is
              cross-platform and works across desktop, iOS, Android, and tablet.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How can Medroster make my medical business more efficient?
            </AccordionTrigger>
            <AccordionContent>
              <p className="font-light mb-4">
                Currently, the medical community is behind the times when it
                comes to technology. Any business model that still relies on the
                FAX machine could sure use an update.
              </p>
              <p className="font-light mb-4">
                When you first log in to Medroster, you will be asked to create
                Spaces (or departments) for your business. After you add your
                staff, you can assign each staff user to the department they
                work in normally. This serves several functions:
              </p>
              <ul className="list-disc font-light ml-10 my-3">
                <li>
                  All communications within each space are secure and cannot be
                  seen by users without access (HIPAA).
                </li>
                <li>
                  You can choose to communicate with an entire department rather
                  than each person individually, saving valuable time.
                </li>
                <li>
                  Patient users can directly communicate with the
                  department/person they need rather than going through a
                  receptionist - allowing your staff to avoid sorting through
                  emails and time-consuming phone calls.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

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
