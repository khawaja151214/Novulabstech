import React from 'react';
import { Link } from 'react-router-dom';
import GlowCard from '../components/GlowCard';

const Team = () => {
  const members = [
    {
      name: 'Muneeb Ali Jaffari',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
      bio: 'Leading strategic corporate vision, global enterprise relations, and institutional delivery models at NovuLabs.',
      skills: ['Strategy', 'Leadership', 'Compliance']
    },
    {
      name: 'Shamroz Ali Zaidi',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80',
      bio: 'Directing core software engineering frameworks, multi-tenant cloud architectures, and systems scalability.',
      skills: ['Architecture', 'Cloud Systems', 'Security']
    },
    {
      name: 'Ali Zaidi',
      role: 'COO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80',
      bio: 'Managing global operations, compliance policies, service delivery pipelines, and corporate scaling.',
      skills: ['Operations', 'Compliance', 'Scaling']
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
                  <a href="mailto:Info@novulabstech.net" className="btn-grad w-100 justify-content-center mb-3">
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
