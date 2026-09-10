import React from 'react';
import { services } from '@/content/siteData';
import ServiceCard from '@/components/ui/ServiceCard';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const ServicesSection: React.FC = () => {
  return (
    <section className="sec bg-g z1" id="services">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-7" data-reveal="up">
            <span className="stag">What We Build</span>
            {/* H2 is the section's own head term, "software development
                services", with the 22 cards below acting as the entity list
                that tells a crawler what the phrase covers here. */}
            <h2 className="stitle mt-3">Our software development <span className="gtxt">services</span></h2>
            <p className="ssub mx-auto">
              Twenty-two services, each with its own page rather than a line in a list. Custom
              software development, web and mobile applications, enterprise systems, AI development,
              ERP and CRM platforms, and the compliance software that regulated institutions in
              Pakistan are obliged to run.
            </p>
            {/* The audit found no body link from the homepage to /solutions at
                all, which left a primary navigation section on three inbound
                links at crawl depth 2. */}
            <p className="ssub mx-auto mt-3">
              Some of it we have already built: see{' '}
              <Link href="/solutions">our four enterprise platforms</Link> before commissioning
              anything custom.
            </p>
          </div>
        </div>
        <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4">
          {services.map((item, i) => (
            <ServiceCard key={i} item={item} index={i} />
          ))}
        </div>
        <div className="text-center mt-5" data-reveal="up">
          <Button href="/services" variant="grad">
            <i className="bi bi-arrow-right me-1"></i>Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
