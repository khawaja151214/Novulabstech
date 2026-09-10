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
            {/* Section brief, in order: introduce the company, establish
                Islamabad and Pakistan, say what the work actually is, then
                link onward into the services that do it. The links are placed
                where a sentence already needed them rather than appended as a
                keyword row; the homepage is the strongest internal link source
                on the site, so what it points at matters. */}
            <h2 className="stitle mt-3">
              An enterprise software house <span className="gtxt">in Islamabad</span>
            </h2>
            <p className="ssub mb-4">
              NovuLabs is a software development company headquartered in Islamabad, Pakistan. We
              build custom software, web and mobile applications, enterprise platforms and
              AI-powered systems for organisations that cannot buy what they need off a shelf. One
              in-house engineering team, no subcontracted delivery, and an architect rather than an
              account manager on the first call.
            </p>
            <p className="ssub mb-4">
              Being based in Islamabad is not incidental to the work. It puts us in the same city as
              the State Bank, the Financial Monitoring Unit, NADRA and the federal ministries whose
              rules our clients build against, and in the same time zone as the banks, hospitals and
              departments we deliver for. It also means engineering rates that make a custom build
              realistic for companies that would otherwise settle for a package that almost fits.
            </p>
            <p className="ssub mb-4">
              Most software only has to satisfy the people using it. A good deal of ours has to
              satisfy someone who arrives a year later, asks why the system made a particular
              decision, and is entitled to a documented answer. That is a different engineering
              problem, and it is the one we have chosen: banks under State Bank supervision,
              hospital groups handling patient records, government departments answering to
              procurement review, and the companies that supply them.
            </p>
            <p className="ssub mb-4">
              In practice the work divides into four kinds.{' '}
              <Link href="/services/legacy-system-modernization">Enterprise software development</Link>{' '}
              for the internal systems a business runs on.{' '}
              <Link href="/services/corporate-website-development">Web development</Link> and{' '}
              <Link href="/services/cross-platform-app-development">mobile app development</Link>{' '}
              for the products your customers touch.{' '}
              <Link href="/services/ai-development-services">AI development</Link>, from document
              processing to predictive analytics. And the compliance software that regulated
              institutions are obliged to run, including{' '}
              <Link href="/services/aml-case-management-risk-scoring">AML and CFT systems</Link> and{' '}
              <Link href="/services/goaml-fmu-reporting-integration">goAML reporting to the FMU</Link>.
            </p>

            {/* Contextual link into the local landing page. The anchor text is
                the head term itself in a sentence that actually needs it, not a
                bolted-on keyword link. */}
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
