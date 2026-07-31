import React from 'react';
import Link from 'next/link';

const ServicesHero: React.FC = () => {
  return (
    <section className="phero">
      <div className="phero-bg">
        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&q=80" alt="NovuLabs services" />
      </div>
      <div className="phero-ov"></div>
      <div className="phero-grid"></div>
      <div className="container phero-inner">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Services</li>
          </ol>
        </nav>
        <span className="stag">What We Build</span>
        <h1 className="hero-title mt-3">22 Enterprise-Grade <span className="gtxt">Services</span></h1>
        <p className="hero-sub">Consult our architects about any of these service areas — we'll recommend the right architecture, timeline, and approach for your specific situation.</p>
      </div>
    </section>
  );
};

export default ServicesHero;
