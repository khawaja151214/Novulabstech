import React from 'react';
import { portfolioProjects } from '@/content/siteData';
import PortfolioCard from '@/components/ui/PortfolioCard';
import Button from '@/components/ui/Button';

const PortfolioPreviewSection: React.FC = () => {
  // Take first 3 projects for the home page preview
  const previewProjects = portfolioProjects.slice(0, 3);

  return (
    <section className="sec bg-g z1" id="portfolio">
      <div className="container">
        <div className="row justify-content-between align-items-end mb-5">
          <div className="col-lg-6" data-aos="fade-up">
            <span className="stag">Our Work</span>
            <h2 className="stitle mt-3">Selected <span className="gtxt">Projects</span></h2>
          </div>
          <div className="col-auto" data-aos="fade-up">
            <Button href="/portfolio" variant="glass">
              View All <i className="bi bi-arrow-right ms-1"></i>
            </Button>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {previewProjects.map((project, i) => (
            <PortfolioCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreviewSection;
