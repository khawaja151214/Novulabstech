import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fintech', label: 'Fintech' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'government', label: 'Government' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'mobile', label: 'Mobile' }
  ];

  const projects = [
    {
      cat: 'fintech',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=75',
      tags: 'Fintech · AML · Compliance',
      title: 'CoreBanking AML Suite',
      desc: 'Real-time transaction monitoring and GOAML-integrated compliance for a Tier-1 bank processing 2M+ daily transactions.',
      tech: ['Python', 'React', 'PostgreSQL', 'FMU']
    },
    {
      cat: 'healthcare',
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=75',
      tags: 'Healthcare · EHR · HIPAA',
      title: 'MediCore EHR Platform',
      desc: 'HIPAA-compliant Electronic Health Records deployed across 40+ hospitals with integrated telemedicine and billing.',
      tech: ['.NET Core', 'HL7 FHIR', 'Angular']
    },
    {
      cat: 'government',
      img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=75',
      tags: 'Government · Identity · PKI',
      title: 'NatID Verification Portal',
      desc: 'National identity verification with CNIC/NADRA API, biometric authentication, and PKI digital signatures.',
      tech: ['Java', 'NADRA API', 'PKI']
    },
    {
      cat: 'fintech',
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75',
      tags: 'Fintech · Payments · Visa/MC',
      title: 'TranzAxis Payment Gateway',
      desc: 'Mastercard & Visa certified payment processing — $2.4B annual transactions, 99.99% uptime, &lt;200ms authorization.',
      tech: ['Node.js', 'Mastercard', 'PCI DSS']
    },
    {
      cat: 'enterprise',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=75',
      tags: 'Enterprise · ERP · Manufacturing',
      title: 'OmniERP Manufacturing Suite',
      desc: 'Integrated ERP covering production, inventory, HR, and finance for a multinational conglomerate across 3 countries.',
      tech: ['.NET', 'SQL Server', 'Azure']
    },
    {
      cat: 'mobile',
      img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=75',
      tags: 'Mobile · Fintech · Wallet',
      title: 'FinSync Digital Wallet',
      desc: 'Cross-platform digital wallet with RAAST instant payments, P2P transfers, bill payments. 1M+ active users.',
      tech: ['Flutter', 'RAAST', 'SBP']
    },
    {
      cat: 'healthcare',
      img: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&q=75',
      tags: 'Healthcare · Telemedicine · Mobile',
      title: 'CarePulse Telemedicine App',
      desc: 'HIPAA-compliant telemedicine iOS/Android app with HD video, e-prescriptions, and remote vitals. 500K+ users.',
      tech: ['Swift', 'Kotlin', 'WebRTC']
    },
    {
      cat: 'enterprise',
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=75',
      tags: 'Enterprise · CRM · AI',
      title: 'NovuCRM Intelligence Suite',
      desc: 'AI-powered CRM with ML lead scoring, revenue forecasting, and omnichannel engagement with native mobile app.',
      tech: ['React', 'Python ML', 'AWS']
    },
    {
      cat: 'government',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=75',
      tags: 'Government · Tax · FBR',
      title: 'TaxLink Revenue Portal',
      desc: 'Federal tax filing portal integrating FBR APIs, e-signature workflows, automated assessment, and compliance dashboards.',
      tech: ['Java EE', 'FBR API', 'Oracle']
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.cat === filter);

  return (
    <>
      <section className="phero">
        <div className="phero-bg">
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&q=80" alt="Portfolio" loading="lazy" />
        </div>
        <div className="phero-ov"></div>
        <div className="phero-grid"></div>
        <div className="container phero-inner">
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Portfolio</li>
            </ol>
          </nav>
          <span className="stag">Our Work</span>
          <h1 className="hero-title mt-3">200+ Projects. <span className="gtxt">Real Outcomes.</span></h1>
          <p className="hero-sub">From AML compliance engines to national identity portals — enterprise software built to perform under the most demanding conditions globally.</p>
        </div>
      </section>
      <div className="divider"></div>

      <section className="sec bg-g" id="portfolio-grid">
        <div className="container">
          {/* Filter */}
          <div className="pfilter justify-content-center mb-5" data-aos="fade-up">
            {filters.map((f) => (
              <button 
                key={f.id}
                className={`pfbtn ${filter === f.id ? 'active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
          {/* Grid */}
          <div className="pgrid">
            {filteredProjects.map((project, i) => (
              <div 
                className="pcard" 
                key={i}
                style={{ 
                  animation: 'fdUp .38s ease both',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
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
                    <Link to="/contact" className="btn-glass" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>
                      <i className="bi bi-chat-dots me-1"></i>Consult About This Solution
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta-banner">
        <div className="container">
          <div className="cta-inner" data-aos="fade-up">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <span className="stag">Working on Something Similar?</span>
                <h2 className="stitle mt-3">Every project in this portfolio<br />started with <span className="gtxt">one conversation.</span></h2>
                <p className="ssub mt-4 mb-0">Tell us what you're working on. We'll share what we've learned from projects like it — what worked, what didn't, and what we'd do differently now. That context alone is worth the call.</p>
                <div className="cta-trust-row">
                  <div className="cta-trust-item"><i className="bi bi-chat-square-quote"></i>Real technical discussion based on your actual requirements</div>
                  <div className="cta-trust-item"><i className="bi bi-file-earmark-lock2"></i>Your project details are fully confidential under NDA</div>
                  <div className="cta-trust-item"><i className="bi bi-graph-up"></i>Written proposal with honest timelines and investment estimates</div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="cta-card">
                  <div className="cta-card-label">Start a conversation</div>
                  <Link to="/contact" className="btn-grad w-100 justify-content-center mb-3"><i className="bi bi-calendar-check"></i>Book a Free Call</Link>
                  <Link to="/contact" className="btn-glass w-100 justify-content-center"><i className="bi bi-file-text"></i>Send Your Project Brief</Link>
                  <p className="cta-card-note">We respond within 4 business hours. If you share a detailed brief, we'll come to the call already thinking about your problem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
