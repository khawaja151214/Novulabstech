import React from 'react';
import Button from '@/components/ui/Button';

const WebServiceSection: React.FC = () => {
  return (
    <section id="web" className="sec bg-w">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6" data-aos="fade-right">
            <span className="stag">Service 01</span>
            <h2 className="stitle mt-3">Website <span className="gtxt">Development</span></h2>
            <p className="ssub mb-4">High-performance corporate websites, web applications, and portals using modern frameworks with SEO-first architecture and Core Web Vitals optimization.</p>
            <ul className="chk mb-4">
              <li><span className="chk-ico"><i className="bi bi-check"></i></span>Corporate &amp; enterprise websites</li>
              <li><span className="chk-ico"><i className="bi bi-check"></i></span>Progressive Web Apps (PWA)</li>
              <li><span className="chk-ico"><i className="bi bi-check"></i></span>E-commerce platforms</li>
              <li><span className="chk-ico"><i className="bi bi-check"></i></span>Custom web portals &amp; dashboards</li>
            </ul>
            <Button href="/contact" variant="grad">
              <i className="bi bi-calendar-check me-1"></i>Consult About Web Development
            </Button>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="sec-img">
              <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&q=75" alt="Web Development" style={{ height: '340px', width: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebServiceSection;
