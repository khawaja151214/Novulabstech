"use client";

import dynamic from 'next/dynamic';
import Button from '@/components/ui/Button';
import KineticHeading from '@/components/ui/KineticHeading';

// Lazy-load heavy canvas + 3D tilt — only allowed in Client Components
const ParticlesCanvas = dynamic(() => import('@/components/ui/ParticlesCanvas'), { ssr: false });
const TiltCard        = dynamic(() => import('@/components/ui/TiltCard'),        { ssr: false });

const HeroSection: React.FC = () => {
  return (
    <section id="hero">
      <div className="hero-grid"></div>
      <ParticlesCanvas />
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left */}
          <div className="col-lg-6">
            <div className="hero-inner">
              <div className="hero-badge">
                <span className="hero-dot"></span>
                Architect-led engineering for regulated industries
              </div>
              {/* H1 targets "software house in Islamabad" — the head term for
                  this business, and previously absent from the H1 entirely
                  ("Next-Gen Enterprise Software House" carried no location and
                  no query intent).

                  "Best" is deliberately not used. It is an unverifiable
                  superlative about the business itself, which is an E-E-A-T
                  liability in a YMYL-adjacent vertical, is the kind of
                  self-declared claim Google's helpful-content guidance treats
                  as a negative signal, and in most markets a comparative
                  superiority claim in advertising requires substantiation the
                  site does not publish. The exact-match phrase is carried
                  without it; rankings for "best …" queries come from what the
                  page proves, not from the word appearing in the heading. */}
              <h1 className="hero-title">
                <KineticHeading text="Enterprise Software House" />
                {/* Explicit space, not just the <br/>. Text extractors — Google's
                    included — concatenate across the break, and without this the
                    H1 reads as "Housein Islamabad", which loses the exact-match
                    phrase the heading exists to carry. */}
                {' '}
                <br />
                <span className="gtxt">
                  <KineticHeading text="in Islamabad" delayStep={55} />
                </span>
              </h1>
              <p className="hero-sub">
                We engineer mission-critical platforms for fintech institutions, government agencies, healthcare networks, and global enterprises — built for scale, security, and compliance.
              </p>
              <div className="hero-btns">
                <Button href="/contact" variant="grad">
                  <i className="bi bi-rocket-takeoff me-1"></i>Book a Free Consultation
                </Button>
                <Button href="/portfolio" variant="glass">
                  <i className="bi bi-folder2-open me-1"></i>View Our Work
                </Button>
              </div>
              <br />
            </div>
          </div>
          {/* Right: Hero Image */}
          <div className="col-lg-6 hero-visual">
            <TiltCard className="hero-img-wrap">
              <img
                src="/og/enterprise-software-development.jpg"
                alt="Enterprise software engineering for regulated industries"
                width={1200}
                height={630}
                loading="lazy"
                decoding="async"
                
              />
              <div className="hero-img-overlay"></div>
              <div className="hero-img-shine"></div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
