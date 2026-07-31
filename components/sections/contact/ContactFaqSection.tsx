"use client";

import React, { useState } from 'react';
import FaqItem from '@/components/ui/FaqItem';
import { FaqItem as FaqItemType } from '@/types';

const ContactFaqSection: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs: FaqItemType[] = [
    { q: 'What is the minimum project size NovuLabs works with?', a: 'Typically $15,000 USD for a standalone module or MVP. Full enterprise platforms start from $50,000. We focus on end-to-end delivery — not hourly freelance work.' },
    { q: 'Do you sign NDAs before discussions?', a: 'Absolutely. We sign mutual NDAs before any substantive technical discussion. Your IP and competitive information are fully protected from the start.' },
    { q: 'Can you work alongside our existing in-house team?', a: 'Yes. We offer staff augmentation, co-development, and full outsourcing. Our engineers adapt to your existing stack, tools, sprint ceremonies, and communication preferences.' },
    { q: 'What compliance frameworks do you support?', a: 'FATF, FMU Pakistan, SBP, FCA, HIPAA, HL7 FHIR, PCI-DSS, ISO 27001, GDPR, and Mastercard/Visa network compliance. Deep in-house expertise in Pakistani, UAE, and UK/EU regulatory requirements.' },
    { q: 'Do you offer fixed-price or time-and-material contracts?', a: 'Both. Fixed-price for well-defined, stable requirements. Time-and-material for evolving enterprise platforms. We recommend the best model after the discovery call based on your specific situation.' }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section className="sec bg-w" id="contact-faq">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-6" data-aos="fade-up">
            <span className="stag">FAQ</span>
            <h2 className="stitle mt-3">Common <span className="gtxt">Questions</span></h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8" data-aos="fade-up">
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                index={i}
                isOpen={activeFaq === i}
                onToggle={() => toggleFaq(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFaqSection;
