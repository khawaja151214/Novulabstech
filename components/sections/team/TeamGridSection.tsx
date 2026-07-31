import React from 'react';
import { teamMembers } from '@/content/siteData';
import GlowCard from '@/components/ui/GlowCard';

const TeamGridSection: React.FC = () => {
  return (
    <section className="sec bg-w" id="team-grid">
      <div className="container">
        <div className="row justify-content-center g-4">
          {teamMembers.map((member, i) => (
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={i * 60} key={i}>
              <GlowCard className="gcard h-100">
                <div className="gcard-body text-center p-4">
                  <div className="mb-4" style={{ position: 'relative', width: '120px', height: '120px', margin: '0 auto' }}>
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="rounded-circle"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', border: '3px solid var(--p1)' }} 
                    />
                  </div>
                  <h4 className="ctitle mb-1">{member.name}</h4>
                  <div className="mb-3" style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--p1)' }}>{member.role}</div>
                  <p className="ctext mb-4" style={{ fontSize: '0.85rem' }}>{member.bio}</p>
                  <div className="d-flex gap-2 justify-content-center flex-wrap">
                    {member.skills.map((skill, idx) => (
                      <span className="tbadge" key={idx} style={{ background: 'rgba(93, 224, 230, 0.08)', color: 'var(--tx3)' }}>{skill}</span>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGridSection;
