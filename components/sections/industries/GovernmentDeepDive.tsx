import React from 'react';
import Button from '@/components/ui/Button';

const GovernmentDeepDive: React.FC = () => {
  return (
    <section id="government" className="sec bg-w">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6" data-aos="fade-right">
            <span className="stag">Industry 03</span>
            <h2 className="stitle mt-3">Government &amp; <span className="gtxt">Public Sector</span></h2>
            <p className="mb-3">We have extensive experience delivering government-grade software for regulatory agencies, tax authorities, and national identity infrastructure — where security, availability, and auditability are non-negotiable.</p>
            <p className="mb-4">Our government systems integrate with NADRA, FBR, SECP, and SBP — with the compliance architecture and audit trails that government contracting requires.</p>
            <ul className="chk mb-4">
              <li><span className="chk-ico"><i className="bi bi-check"></i></span>National identity &amp; CNIC/NADRA integration</li>
              <li><span className="chk-ico"><i className="bi bi-check"></i></span>Tax filing &amp; FBR revenue portals</li>
              <li><span className="chk-ico"><i className="bi bi-check"></i></span>PKI digital signatures &amp; e-seals</li>
              <li><span className="chk-ico"><i className="bi bi-check"></i></span>Citizens services &amp; e-government</li>
            </ul>
            <Button href="/contact" variant="grad"><i className="bi bi-calendar-check me-1"></i>Consult About Government Solutions</Button>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="sec-img">
              <img src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=700&q=75" alt="Government Public Sector" style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentDeepDive;
