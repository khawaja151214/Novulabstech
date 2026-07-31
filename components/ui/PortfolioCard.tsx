import React from 'react';
import Button from './Button';
import { PortfolioItem } from '@/types';

interface PortfolioCardProps {
  project: PortfolioItem;
  index: number;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, index }) => {
  return (
    <div className="col" data-aos="fade-up" data-aos-delay={index * 40}>
      <div className="pcard">
        <div className="pimg-wrap">
          <img className="pimg" src={project.img} alt={project.title} loading="lazy" />
        </div>
        <div className="pbody">
          <div className="ptag">{project.tags}</div>
          <div className="ptitle">{project.title}</div>
          <p className="pdesc" dangerouslySetInnerHTML={{ __html: project.desc }}></p>
          <div className="d-flex gap-2 mt-3 flex-wrap">
            {project.tech.map((t, idx) => (
              <span className="tbadge" key={idx}>{t}</span>
            ))}
          </div>
          <div className="mt-3">
            <Button href="/contact" variant="glass" style={{ padding: '7px 16px', fontSize: '0.79rem' }}>
              Consult About This →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
