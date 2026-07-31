import React from 'react';
import Link from 'next/link';

const SolutionsHero: React.FC = () => {
  return (
    <section className="phero">
      <div className="phero-bg">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80" alt="Solutions" />
      </div>
      <div className="phero-ov"></div>
      <div className="phero-grid"></div>
      <div className="container phero-inner">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Solutions</li>
          </ol>
        </nav>
        <span className="stag">Product Platforms</span>
        <h1 className="hero-title mt-3">Proven Enterprise <span className="gtxt">Solutions</span></h1>
        <p className="hero-sub">Four battle-tested platforms — adaptable to your organization's specific requirements, compliance needs, and technology landscape.</p>
      </div>
    </section>
  );
};

export default SolutionsHero;
