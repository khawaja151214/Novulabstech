import React from 'react';
import Link from 'next/link';

const TeamHero: React.FC = () => {
  return (
    <section className="phero">
      <div className="phero-bg">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80" alt="NovuLabs team" />
      </div>
      <div className="phero-ov"></div>
      <div className="phero-grid"></div>
      <div className="container phero-inner">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Team</li>
          </ol>
        </nav>
        <span className="stag">Our People</span>
        <h1 className="hero-title mt-3">The Engineers Behind the<br /><span className="gtxt">Infrastructure</span></h1>
        <p className="hero-sub">We do not employ pre-sales agents. Every person you interface with at NovuLabs is an active practitioner, engineer, or compliance architect.</p>
      </div>
    </section>
  );
};

export default TeamHero;
