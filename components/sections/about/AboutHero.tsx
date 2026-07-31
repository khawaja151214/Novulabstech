import React from 'react';
import Link from 'next/link';

const AboutHero: React.FC = () => {
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
            <li className="breadcrumb-item active" aria-current="page">About</li>
          </ol>
        </nav>
        <span className="stag">Our Story</span>
        <h1 className="hero-title mt-3">Building the Future of<br /><span className="gtxt">Enterprise Technology</span></h1>
        <p className="hero-sub">A senior engineering team on a single mission: building mission-critical software that the world's most demanding institutions can trust.</p>
      </div>
    </section>
  );
};

export default AboutHero;
