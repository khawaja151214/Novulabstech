import React from 'react';
import { Link } from 'react-router-dom';
import GlowCard from '../components/GlowCard';

const Team = () => {
  const members = [
    {
      name: 'Shamroz',
      role: 'Founder & Principal Architect',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
      bio: 'Over 12 years of experience designing secure financial and identity architectures for banks and national agencies.',
      skills: ['Security', 'Fintech', 'Architecture']
    },
    {
      name: 'Rubab',
      role: 'Lead MedTech Architect',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80',
      bio: 'Specializes in HIPAA-compliant EHR platforms and medical billing integrations across clinical environments.',
      skills: ['MedTech', 'HL7 FHIR', 'HIPAA']
    },
    {
      name: 'Qasim',
      role: 'Principal Security Engineer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80',
      bio: 'Certified ethical hacker focusing on penetration testing, audit trails, and secure coding lifecycle principles.',
      skills: ['Cybersecurity', 'PCI-DSS', 'OWASP']
    },
    {
      name: 'Mam Sundas',
      role: 'Director of Compliance',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80',
      bio: 'Expert in FATF, SBP, and FMU AML compliance requirements. Translates compliance laws into software specifications.',
      skills: ['AML/CFT', 'Audit', 'FATF']
    }
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="phero">
        <div className="phero-bg">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80" alt="NovuLabs team" loading="lazy" />
        </div>
        <div className="phero-ov"></div>
        <div className="phero-grid"></div>
        <div className="container phero-inner">
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Team</li>
            </ol>
          </nav>
          <span className="stag">Our People</span>
          <h1 className="hero-title mt-3">The Engineers Behind the<br /><span className="gtxt">Infrastructure</span></h1>
          <p className="hero-sub">We do not employ pre-sales agents. Every person you interface with at NovuLabs is an active practitioner, engineer, or compliance architect.</p>
        </div>
      </section>
      <div className="divider"></div>

      {/* Team Grid */}
      <section className="sec bg-w" id="team-grid">
        <div className="container">
          <div className="row justify-content-center text-center mb-5" data-aos="fade-up">
            <div className="col-lg-6">
              <span className="stag">Core Leadership</span>
              <h2 className="stitle mt-3">Expertise Built on <span className="gtxt">Experience</span></h2>
              <p className="ssub">Our leadership team remains hands-on with every codebase and architecture design that passes through our doors.</p>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {members.map((m, idx) => (
              <div className="col-md-6 col-lg-3" key={idx} data-aos="fade-up" data-aos-delay={idx * 60}>
                <GlowCard className="gcard h-100 text-center" style={{ padding: '24px' }}>
                  <div className="mb-3" style={{ width: '120px', height: '120px', margin: '0 auto', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--gb2)' }}>
                    <img src={m.image} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h4 style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--tx1)', marginBottom: '4px' }}>{m.name}</h4>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--p1)', marginBottom: '12px' }}>{m.role}</div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--tx3)', lineHeight: 1.6, marginBottom: '16px' }}>{m.bio}</p>
                  <div className="d-flex gap-1 justify-content-center flex-wrap">
                    {m.skills.map((s, sidx) => (
                      <span className="tbadge" key={sidx} style={{ fontSize: '0.66rem', padding: '3px 8px' }}>{s}</span>
                    ))}
                  </div>
                </GlowCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section id="cta-banner">
        <div className="container">
          <div className="cta-inner" data-aos="fade-up">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <span className="stag">Join Us</span>
                <h2 className="stitle mt-3">We are always looking for<br />exceptional <span className="gtxt">engineers.</span></h2>
                <p className="ssub mt-4 mb-0">If you are a senior system builder, compliance expert, or performance engineer who values architectural integrity and clean engineering over generic project cycles, we'd like to meet you.</p>
              </div>
              <div className="col-lg-5 text-lg-end">
                <div className="cta-card text-start">
                  <div className="cta-card-label">Send us your CV</div>
                  <a href="mailto:hello@NovuLabsTech.com" className="btn-grad w-100 justify-content-center mb-3">
                    <i className="bi bi-envelope"></i>Apply Now
                  </a>
                  <p className="cta-card-note">All applicants must undergo a rigorous code-writing and architecture challenge. Only senior positions are currently open.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
