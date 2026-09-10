import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const AboutSection: React.FC = () => {
  return (
    <section className="sec bg-w z1" id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5" data-reveal="right">
            <div style={{ position: 'relative' }}>
              {/* next/image: the raw <img> shipped a 1280x960 / 147KB JPEG with
                  no width or height, so it was an unsized above-the-fold
                  element on the homepage; a CLS source and an oversized
                  payload for a 440px slot. */}
              <div className="about-img">
                <Image
                  src="/team-working.jpeg"
                  alt="NovuLabs engineers working together in the Islamabad office"
                  width={1280}
                  height={960}
                  sizes="(max-width: 991px) 100vw, 40vw"
                  style={{ width: '100%', height: '440px', objectFit: 'cover' }}
                />
              </div>
              {/* These two pills counted up to "12+ Years of Excellence" and
                  "500+ Engineers Worldwide". Neither is evidenced: the founding
                  year is an open CLIENT-ACTIONS item, and /team lists three
                  people. A headcount claim two orders of magnitude off what the
                  same site shows is the kind of thing a buyer checks first.
                  Replaced with two things the site can actually substantiate on
                  its own pages, which is why each links to one. */}
              <div className="about-glass-pill agp1">
                <div className="agp-label">Architect-led</div>
                <div className="agp-sub">No pre-sales layer, ever</div>
              </div>
              <div className="about-glass-pill agp2">
                <div className="agp-label">Islamabad HQ</div>
                <div className="agp-sub">One in-house engineering team</div>
              </div>
            </div>
          </div>
          <div className="col-lg-7" data-reveal="left">
            <span className="stag">Who We Are</span>
            <h2 className="stitle mt-3">
              Software that has to survive <span className="gtxt">an inspection</span>
            </h2>
            {/* Leads with the buyer's situation rather than a company
                description. "We are an enterprise software house headquartered
                in Islamabad" is true and tells a buyer nothing they can act on;
                the distinction below is the actual reason someone picks us over
                a generalist, so it goes first. */}
            <p className="ssub mb-4">
              Most software only has to satisfy the people using it. Ours has to satisfy someone who
              arrives a year later, asks why the system made a particular decision, and is entitled
              to a documented answer. That is a different engineering problem, and it is the one we
              have chosen.
            </p>
            <p className="ssub mb-4">
              In practice that means banks under State Bank supervision, hospital groups handling
              patient records, government departments answering to procurement review, and the
              companies that supply them. If a regulator, an auditor or a payment scheme can open
              your system and ask questions, we have probably built something like it.
            </p>

            {/* Contextual link into the local landing page. The homepage is
                the strongest internal source of link equity on the site, and
                the anchor text here is the head term itself in a sentence that
                actually needs it, not a bolted-on keyword link. */}
            <p className="ssub mb-4">
              If you are comparing suppliers locally, the{' '}
              <Link href="/software-house-in-islamabad">
                software house in Islamabad
              </Link>{' '}
              page covers where we are, how we engage, and the questions worth asking any firm
              before you sign. For the national picture, including the regulators involved and
              what to settle in a contract, see{' '}
              <Link href="/software-development-in-pakistan">software development in Pakistan</Link>.
            </p>

            <div className="d-flex gap-3 flex-wrap">
              <Button href="/about" variant="grad">
                <i className="bi bi-arrow-right me-1"></i>About NovuLabs
              </Button>
              <Button href="/contact" variant="glass">
                <i className="bi bi-calendar-check me-1"></i>Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
