import React from 'react';
import Link from 'next/link';

const PortfolioHero: React.FC = () => {
  return (
    <section className="phero">
      <div className="phero-bg">
        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&q=80" alt="Portfolio" />
      </div>
      <div className="phero-ov"></div>
      <div className="phero-grid"></div>
      <div className="container phero-inner">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Portfolio</li>
          </ol>
        </nav>
        <span className="stag">Our Work</span>
        <h1 className="hero-title mt-3">200+ Projects. <span className="gtxt">Real Outcomes.</span></h1>
        <p className="hero-sub">From AML compliance engines to national identity portals — enterprise software built to perform under the most demanding conditions globally.</p>
      </div>
    </section>
  );
};

export default PortfolioHero;
