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
            {/* "Why choose ..." is how this comparison is typed, and the H2
                carries "software house in Islamabad" with it. The comparison
                intent still routes to /software-house-in-islamabad through the
                link below the cards, which owns that query; this section
                answers the question on the homepage rather than competing for
                the result. */}
            <h2 className="stitle mt-3">
              Why choose NovuLabs as your <span className="gtxt">software house in Islamabad</span>
            </h2>
            <p className="ssub mx-auto">
              Rarely the language list. Six things a buyer can actually test on the first call:
              technical depth, how the work runs week to week, who you talk to, how security is
              handled, what happens after launch, and whether we have done this before.
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
              sets out the seven questions worth asking. You can also see how past engagements
              were structured in our <Link href="/portfolio">case studies</Link>, and{' '}
              <Link href="/faq#verifying-a-supplier">how to verify any supplier&apos;s claims</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
