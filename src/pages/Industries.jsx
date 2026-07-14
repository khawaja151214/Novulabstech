import React from 'react';
import { Link } from 'react-router-dom';
import GlowCard from '../components/GlowCard';

const Industries = () => {
  const moreSectors = [
    { icon: 'bi-cart-fill', title: 'E-Commerce & Retail', desc: 'B2B and B2C platforms, marketplace solutions, inventory management, order fulfilment automation, and customer loyalty programs.', tech: ['React', 'Shopify', 'WooCommerce'], color: 'i-o' },
    { icon: 'bi-gear-wide-connected', title: 'Manufacturing & Logistics', desc: 'Production planning, quality control, supply chain management, warehouse automation, fleet tracking, and IoT sensor integration.', tech: ['ERP', 'IoT', 'SAP Integration'], color: 'i-v' },
    { icon: 'bi-mortarboard-fill', title: 'Education & EdTech', desc: 'Learning Management Systems (LMS), student information systems, virtual classrooms, assessment tools, and institutional analytics.', tech: ['LMS', 'SCORM', 'xAPI'], color: 'i-c' },
    { icon: 'bi-broadcast-pin', title: 'Telecom & ISP', desc: 'Billing systems, CRM for telecoms, network operations portals, subscriber management, and regulatory compliance platforms.', tech: ['BSS/OSS', 'Diameter', 'RADIUS'], color: 'i-b' },
    { icon: 'bi-lightning-charge-fill', title: 'Energy & Utilities', desc: 'Smart metering, billing automation, grid monitoring dashboards, SCADA integration, and energy trading platforms.', tech: ['SCADA', 'IoT', 'Smart Grid'], color: 'i-y' },
    { icon: 'bi-house-fill', title: 'PropTech & Real Estate', desc: 'Property management platforms, digital transaction workflows, tenant portals, investment management, and virtual tour integrations.', tech: ['PropTech', 'GIS', 'APIs'], color: 'i-g' }
  ];

  return (
    <>
      <section className="phero">
        <div className="phero-bg">
          <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1400&q=80" alt="Industries" loading="lazy" />
        </div>
        <div className="phero-ov"></div>
        <div className="phero-grid"></div>
        <div className="container phero-inner">
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Industries</li>
            </ol>
          </nav>
          <span className="stag">Sectors We Serve</span>
          <h1 className="hero-title mt-3">Built for <span className="gtxt">Critical Industries</span></h1>
          <p className="hero-sub">Deep domain expertise in the sectors that matter most — where software failures carry real consequences for institutions, patients, citizens, and economies.</p>
        </div>
      </section>
      <div className="divider"></div>

      {/* Banking & Fintech Deep Dive */}
      <section id="banking" className="sec bg-w">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="stag">Industry 01</span>
              <h2 className="stitle mt-3">Banking &amp; <span className="gtxt">Fintech</span></h2>
              <p className="mb-3">NovuLabs is the trusted technology partner for Tier-1 banks, microfinance institutions, digital banks, and fintech startups across Pakistan, UAE, and the wider MENA region.</p>
              <p className="mb-4">Our fintech teams have the deepest AML/CFT compliance expertise in the region — with live deployments processing billions in transactions under FMU Pakistan, SBP, and international FATF frameworks.</p>
              <div className="row g-3 mb-4">
                <div className="col-6">
                  <GlowCard className="gcard p-3">
                    <div className="sico i-t mb-2" style={{ width: '36px', height: '36px', fontSize: '0.9rem' }}><i className="bi bi-shield-lock-fill"></i></div>
                    <div className="ctitle" style={{ fontSize: '0.85rem' }}>AML/CFT</div>
                    <p className="ctext" style={{ fontSize: '0.77rem' }}>GOAML, STR/CTR, FMU Pakistan</p>
                  </GlowCard>
                </div>
                <div className="col-6">
                  <GlowCard className="gcard p-3">
                    <div className="sico i-b mb-2" style={{ width: '36px', height: '36px', fontSize: '0.9rem' }}><i className="bi bi-credit-card-2-front"></i></div>
                    <div className="ctitle" style={{ fontSize: '0.85rem' }}>Payments</div>
                    <p className="ctext" style={{ fontSize: '0.77rem' }}>Mastercard, Visa, RAAST, 1LINK</p>
                  </GlowCard>
                </div>
                <div className="col-6">
                  <GlowCard className="gcard p-3">
                    <div className="sico i-v mb-2" style={{ width: '36px', height: '36px', fontSize: '0.9rem' }}><i className="bi bi-bank"></i></div>
                    <div className="ctitle" style={{ fontSize: '0.85rem' }}>Core Banking</div>
                    <p className="ctext" style={{ fontSize: '0.77rem' }}>Retail, SME, corporate banking</p>
                  </GlowCard>
                </div>
                <div className="col-6">
                  <GlowCard className="gcard p-3">
                    <div className="sico i-o mb-2" style={{ width: '36px', height: '36px', fontSize: '0.9rem' }}><i className="bi bi-phone-fill"></i></div>
                    <div className="ctitle" style={{ fontSize: '0.85rem' }}>Digital Banking</div>
                    <p className="ctext" style={{ fontSize: '0.77rem' }}>Neobank, mobile-first platforms</p>
                  </GlowCard>
                </div>
              </div>
              <Link to="/contact" className="btn-grad"><i className="bi bi-calendar-check"></i>Consult About Banking Solutions</Link>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="sec-img text-center">
                <img src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=700&q=75" alt="Banking Fintech" loading="lazy" style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Deep Dive */}
      <section id="healthcare" className="sec bg-g">
        <div className="container">
          <div className="row align-items-center g-5 flex-lg-row-reverse">
            <div className="col-lg-6" data-aos="fade-left">
              <span className="stag">Industry 02</span>
              <h2 className="stitle mt-3">Healthcare &amp; <span className="gtxt">MedTech</span></h2>
              <p className="mb-3">Our Healthcare division has deployed HIPAA-compliant EHR systems, telemedicine platforms, and medical billing solutions across 40+ hospitals in Pakistan, UAE, and North America.</p>
              <p className="mb-4">We understand clinical workflows, HL7 FHIR messaging standards, and the regulatory landscape for healthcare data — building systems that clinicians actually use.</p>
              <ul className="chk mb-4">
                <li><span className="chk-ico"><i className="bi bi-check"></i></span>Electronic Health Records (EHR)</li>
                <li><span className="chk-ico"><i className="bi bi-check"></i></span>Telemedicine &amp; remote patient monitoring</li>
                <li><span className="chk-ico"><i className="bi bi-check"></i></span>Medical billing (ICD-10, CPT, RCM)</li>
                <li><span className="chk-ico"><i className="bi bi-check"></i></span>HL7 FHIR &amp; HIPAA compliance</li>
                <li><span className="chk-ico"><i className="bi bi-check"></i></span>Pharmacy management systems</li>
              </ul>
              <Link to="/contact" className="btn-grad"><i className="bi bi-calendar-check"></i>Consult About Healthcare IT</Link>
            </div>
            <div className="col-lg-6" data-aos="fade-right">
              <div className="sec-img">
                <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=75" alt="Healthcare MedTech" loading="lazy" style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Deep Dive */}
      <section id="government" className="sec bg-w">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="stag">Industry 03</span>
              <h2 className="stitle mt-3">Government &amp; <span className="gtxt">Public Sector</span></h2>
              <p className="mb-3">We have extensive experience delivering government-grade software for regulatory agencies, tax authorities, and national identity infrastructure — where security, availability, and auditability are non-negotiable.</p>
              <p className="mb-4">Our government systems integrate with NADRA, FBR, SECP, and SBP — with the compliance architecture and audit trails that government contracting requires.</p>
              <ul className="chk mb-4">
                <li><span className="chk-ico"><i className="bi bi-check"></i></span>National identity &amp; CNIC/NADRA integration</li>
                <li><span className="chk-ico"><i className="bi bi-check"></i></span>Tax filing &amp; FBR revenue portals</li>
                <li><span className="chk-ico"><i className="bi bi-check"></i></span>PKI digital signatures &amp; e-seals</li>
                <li><span className="chk-ico"><i className="bi bi-check"></i></span>Citizens services &amp; e-government</li>
              </ul>
              <Link to="/contact" className="btn-grad"><i className="bi bi-calendar-check"></i>Consult About Government Solutions</Link>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="sec-img">
                <img src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=700&q=75" alt="Government Public Sector" loading="lazy" style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Sectors */}
      <section className="sec bg-g" id="more-sectors">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-7" data-aos="fade-up">
              <span className="stag">More Sectors</span>
              <h2 className="stitle mt-3">Other Industries <span className="gtxt">We Serve</span></h2>
            </div>
          </div>
          <div className="row g-4">
            {moreSectors.map((sector, i) => (
              <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={i * 60} key={i}>
                <GlowCard className="gcard">
                  <div className="gcard-body">
                    <div className={`sico ${sector.color}`}><i className={`bi ${sector.icon}`}></i></div>
                    <div className="ctitle">{sector.title}</div>
                    <p className="ctext">{sector.desc}</p>
                    <div className="d-flex gap-2 flex-wrap mt-2 mb-0">
                      {sector.tech.map((t, idx) => (
                        <span className="tbadge" key={idx}>{t}</span>
                      ))}
                    </div>
                    <Link to="/contact" className="carr"><i className="bi bi-arrow-right-circle"></i>Consult About {sector.title.split(' ')[0]}</Link>
                  </div>
                </GlowCard>
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
                <span className="stag">Your Industry</span>
                <h2 className="stitle mt-3">Don't see your sector listed?<br /><span className="gtxt">We have probably worked in it.</span></h2>
                <p className="ssub mt-4 mb-0">We've built software for industries not on this page — logistics companies, insurance platforms, telecom operators, energy firms. If your organization has a real software problem that needs solving, we'd like to hear about it. One call, no strings.</p>
                <div className="cta-trust-row">
                  <div className="cta-trust-item"><i className="bi bi-buildings"></i>We adapt to sector-specific regulations and workflows</div>
                  <div className="cta-trust-item"><i className="bi bi-person-check"></i>Domain experts on the call, not generalists</div>
                  <div className="cta-trust-item"><i className="bi bi-shield-check"></i>All discussions covered by mutual NDA from the start</div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="cta-card">
                  <div className="cta-card-label">Talk to us about your sector</div>
                  <Link to="/contact" className="btn-grad w-100 justify-content-center mb-3"><i className="bi bi-calendar-check"></i>Book a Free Call</Link>
                  <Link to="/portfolio" className="btn-glass w-100 justify-content-center"><i className="bi bi-folder2-open"></i>See Our Portfolio</Link>
                  <p className="cta-card-note">No obligation. If we're not the right people for your project, we'll be honest about it — and usually know someone who is.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
