"use client";

import React, { useState } from 'react';
import { faqs } from '@/content/siteData';
import FaqItem from '@/components/ui/FaqItem';

const FaqSection: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section className="sec bg-g z1" id="faq">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-6" data-aos="fade-up">
            <span className="stag">FAQ</span>
            <h2 className="stitle mt-3">Frequently Asked <span className="gtxt">Questions</span></h2>
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

export default FaqSection;
