import React from 'react';
import Link from 'next/link';

const IndustriesHero: React.FC = () => {
  return (
    <section className="phero">
      <div className="phero-bg">
        <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1400&q=80" alt="Industries" />
      </div>
      <div className="phero-ov"></div>
      <div className="phero-grid"></div>
      <div className="container phero-inner">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Industries</li>
          </ol>
        </nav>
        <span className="stag">Sectors We Serve</span>
        <h1 className="hero-title mt-3">Built for <span className="gtxt">Critical Industries</span></h1>
        <p className="hero-sub">Deep domain expertise in the sectors that matter most — where software failures carry real consequences for institutions, patients, citizens, and economies.</p>
      </div>
    </section>
  );
};

export default IndustriesHero;
