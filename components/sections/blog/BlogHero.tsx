import React from 'react';
import Link from 'next/link';

const BlogHero: React.FC = () => {
  return (
    <section className="phero">
      <div className="phero-bg">
        <img src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1400&q=80" alt="Blog" />
      </div>
      <div className="phero-ov"></div>
      <div className="phero-grid"></div>
      <div className="container phero-inner">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Blog</li>
          </ol>
        </nav>
        <span className="stag">Perspectives &amp; Insights</span>
        <h1 className="hero-title mt-3">NovuLabs <span className="gtxt">Insights</span></h1>
        <p className="hero-sub">Deep technical articles and strategic research on enterprise systems compliance, cloud scalability, payments infrastructure, and secure technology.</p>
      </div>
    </section>
  );
};

export default BlogHero;
