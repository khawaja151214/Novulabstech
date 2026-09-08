import React from 'react';
import Link from 'next/link';
import { whyUs } from '@/content/siteData';
import WhyUsCard from '@/components/ui/WhyUsCard';

const WhyUsSection: React.FC = () => {
  return (
    <section className="sec bg-w z1" id="why">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-7" data-reveal="up">
            <span className="stag">Why NovuLabs</span>
            {/* Carries the "best software agency in Islamabad" phrasing in the
                form a buyer actually searches it, and routes that intent to
                /software-house-in-islamabad, which owns the comparison query.
                The H1 above stays on the category term so the two pages do not
                compete for the same result. */}
            <h2 className="stitle mt-3">
              What makes the best software agency <span className="gtxt">in Islamabad</span>
            </h2>
            <p className="ssub mx-auto">
              Rarely the language list. We work with organisations whose software is inspected by
              someone other than their own users: a regulator, an auditor, or a payment scheme.
            </p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {whyUs.map((item, i) => (
            <WhyUsCard key={i} item={item} index={i} />
          ))}
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-lg-8 text-center">
            <p className="mb-0" style={{ fontSize: '0.9rem', color: 'var(--tx3)' }}>
              Still comparing suppliers?{' '}
              <Link href="/software-house-in-islamabad">
                How to choose the best software agency in Islamabad
              </Link>{' '}
              sets out the seven questions worth asking. Or read{' '}
              <Link href="/testimonials">what clients say about working with us</Link> and how those
              engagements were structured in our <Link href="/portfolio">case studies</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
