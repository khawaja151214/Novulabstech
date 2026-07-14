import React from 'react';
import { Link } from 'react-router-dom';
import GlowCard from '../components/GlowCard';

const Solutions = () => {
  return (
    <>
      <section className="phero">
        <div className="phero-bg">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80" alt="Solutions" loading="lazy" />
        </div>
        <div className="phero-ov"></div>
        <div className="phero-grid"></div>
        <div className="container phero-inner">
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Solutions</li>
            </ol>
          </nav>
          <span className="stag">Product Platforms</span>
          <h1 className="hero-title mt-3">Proven Enterprise <span className="gtxt">Solutions</span></h1>
          <p className="hero-sub">Four battle-tested platforms — adaptable to your organization's specific requirements, compliance needs, and technology landscape.</p>
        </div>
      </section>
      <div className="divider"></div>

      {/* NovuERP */}
      <section id="erp" className="sec bg-w">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="stag">Solution 01</span>
              <h2 className="stitle mt-3">NovuERP<br /><span className="gtxt">Enterprise Resource Planning</span></h2>
              <p className="ssub mb-4">A fully integrated ERP platform covering every operational domain — finance, HR, production, procurement, inventory, and reporting — in one unified system.</p>
              <div className="row g-3 mb-4">
                <div className="col-6">
                  <GlowCard className="gcard p-3">
                    <div className="sico i-b mb-2" style={{ width: '36px', height: '36px', fontSize: '0.9rem' }}><i className="bi bi-currency-dollar"></i></div>
                    <div className="ctitle" style={{ fontSize: '0.85rem' }}>Financial Mgmt</div>
                    <p className="ctext" style={{ fontSize: '0.78rem' }}>GL, AP/AR, budgeting, multi-currency</p>
                  </GlowCard>
                </div>
                <div className="col-6">
                  <GlowCard className="gcard p-3">
                    <div className="sico i-t mb-2" style={{ width: '36px', height: '36px', fontSize: '0.9rem' }}><i className="bi bi-people-fill"></i></div>
                    <div className="ctitle" style={{ fontSize: '0.85rem' }}>HR &amp; Payroll</div>
                    <p className="ctext" style={{ fontSize: '0.78rem' }}>Workforce management, payroll, EOBI</p>
                  </GlowCard>
                </div>
                <div className="col-6">
                  <GlowCard className="gcard p-3">
                    <div className="sico i-v mb-2" style={{ width: '36px', height: '36px', fontSize: '0.9rem' }}><i className="bi bi-boxes"></i></div>
                    <div className="ctitle" style={{ fontSize: '0.85rem' }}>Inventory</div>
                    <p className="ctext" style={{ fontSize: '0.78rem' }}>Multi-warehouse, real-time stock tracking</p>
                  </GlowCard>
                </div>
                <div className="col-6">
                  <GlowCard className="gcard p-3">
                    <div className="sico i-o mb-2" style={{ width: '36px', height: '36px', fontSize: '0.9rem' }}><i className="bi bi-bar-chart-fill"></i></div>
                    <div className="ctitle" style={{ fontSize: '0.85rem' }}>Analytics</div>
                    <p className="ctext" style={{ fontSize: '0.78rem' }}>Real-time KPI dashboards and BI reports</p>
                  </GlowCard>
                </div>
              </div>
              <Link to="/contact" className="btn-grad"><i className="bi bi-calendar-check"></i>Consult About NovuERP</Link>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="sec-img">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=75" alt="ERP System" loading="lazy" style={{ height: '380px', width: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NovuCRM */}
      <section id="crm" className="sec bg-g">
        <div className="container">
          <div className="row align-items-center g-5 flex-lg-row-reverse">
            <div className="col-lg-6" data-aos="fade-left">
              <span className="stag">Solution 02</span>
              <h2 className="stitle mt-3">NovuCRM<br /><span className="gtxt">AI-Powered Customer Management</span></h2>
              <p className="ssub mb-4">Enterprise CRM with AI-driven lead scoring, revenue forecasting, pipeline automation, and omnichannel engagement across email, SMS, and WhatsApp.</p>
              <div className="d-flex gap-3 mb-4 flex-wrap">
                <div style={{ background: 'rgba(93, 224, 230, 0.08)', border: '1px solid rgba(93, 224, 230, 0.18)', borderRadius: 'var(--r)', padding: '16px 20px', textAlign: 'center', flex: 1, minWidth: '120px' }}>
                  <div style={{ fontFamily: 'var(--fh)', fontSize: '1.5rem', fontWeight: '800', background: 'var(--g-main)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>34%</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--tx3)' }}>Higher Conversion</div>
                </div>
                <div style={{ background: 'rgba(0, 72, 141, 0.08)', border: '1px solid rgba(0, 72, 141, 0.18)', borderRadius: 'var(--r)', padding: '16px 20px', textAlign: 'center', flex: 1, minWidth: '120px' }}>
                  <div style={{ fontFamily: 'var(--fh)', fontSize: '1.5rem', fontWeight: '800', color: 'var(--p1)' }}>2.1x</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--tx3)' }}>Revenue Growth</div>
                </div>
                <div style={{ background: 'rgba(165, 243, 252, 0.08)', border: '1px solid rgba(165, 243, 252, 0.18)', borderRadius: 'var(--r)', padding: '16px 20px', textAlign: 'center', flex: 1, minWidth: '120px' }}>
                  <div style={{ fontFamily: 'var(--fh)', fontSize: '1.5rem', fontWeight: '800', color: 'var(--p3)' }}>89%</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--tx3)' }}>Forecast Accuracy</div>
                </div>
              </div>
              <Link to="/contact" className="btn-grad"><i className="bi bi-calendar-check"></i>Consult About NovuCRM</Link>
            </div>
            <div className="col-lg-6" data-aos="fade-right">
              <div className="sec-img">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=75" alt="CRM System" loading="lazy" style={{ height: '380px', width: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NovuPay */}
      <section id="pay" className="sec bg-w">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="stag">Solution 03</span>
              <h2 className="stitle mt-3">NovuPay<br /><span className="gtxt">Payment Infrastructure</span></h2>
              <p className="ssub mb-4">Enterprise payment processing platform — Mastercard and Visa certified, PCI-DSS compliant, handling billions in annual transaction volume with 99.99% uptime SLA.</p>
              <ul className="chk mb-4">
                <li><span className="chk-ico"><i className="bi bi-check"></i></span>Mastercard MDES tokenization</li>
                <li><span className="chk-ico"><i className="bi bi-check"></i></span>Visa VTS &amp; Visa Direct</li>
                <li><span className="chk-ico"><i className="bi bi-check"></i></span>RAAST instant payment system (SBP)</li>
                <li><span className="chk-ico"><i className="bi bi-check"></i></span>1LINK ATM/POS switching</li>
                <li><span className="chk-ico"><i className="bi bi-check"></i></span>PCI-DSS Level 1 certified</li>
              </ul>
              <Link to="/contact" className="btn-grad"><i className="bi bi-calendar-check"></i>Consult About NovuPay</Link>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="sec-img">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=75" alt="Payment Platform" loading="lazy" style={{ height: '380px', width: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NovuShield AML */}
      <section id="aml" className="sec bg-g">
        <div className="container">
          <div className="row align-items-center g-5 flex-lg-row-reverse">
            <div className="col-lg-6" data-aos="fade-left">
              <span className="stag">Solution 04</span>
              <h2 className="stitle mt-3">NovuShield<br /><span className="gtxt">AML &amp; Compliance Platform</span></h2>
              <p className="ssub mb-4">Enterprise AML engine processing millions of daily transactions with ML-powered anomaly detection, UN sanctions screening, PEP database integration, and full GOAML/FMU Pakistan compliance.</p>
              <div className="d-flex gap-3 mb-4 flex-wrap">
                <div style={{ background: 'rgba(93, 224, 230, 0.08)', border: '1px solid rgba(93, 224, 230, 0.18)', borderRadius: 'var(--r)', padding: '16px 20px', textAlign: 'center', flex: 1, minWidth: '110px' }}>
                  <div style={{ fontFamily: 'var(--fh)', fontSize: '1.4rem', fontWeight: '800', color: 'var(--p1)' }}>2M+</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--tx3)' }}>Daily Transactions</div>
                </div>
                <div style={{ background: 'rgba(0, 72, 141, 0.08)', border: '1px solid rgba(0, 72, 141, 0.18)', borderRadius: 'var(--r)', padding: '16px 20px', textAlign: 'center', flex: 1, minWidth: '110px' }}>
                  <div style={{ fontFamily: 'var(--fh)', fontSize: '1.4rem', fontWeight: '800', background: 'var(--g-main)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>&lt;200ms</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--tx3)' }}>Screening Latency</div>
                </div>
                <div style={{ background: 'rgba(165, 243, 252, 0.08)', border: '1px solid rgba(165, 243, 252, 0.18)', borderRadius: 'var(--r)', padding: '16px 20px', textAlign: 'center', flex: 1, minWidth: '110px' }}>
                  <div style={{ fontFamily: 'var(--fh)', fontSize: '1.4rem', fontWeight: '800', color: 'var(--p3)' }}>FATF</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--tx3)' }}>Compliant</div>
                </div>
              </div>
              <Link to="/contact" className="btn-grad"><i className="bi bi-calendar-check"></i>Consult About NovuShield</Link>
            </div>
            <div className="col-lg-6" data-aos="fade-right">
              <div className="sec-img">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=75" alt="AML Platform" loading="lazy" style={{ height: '380px', width: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta-banner">
        <div className="container">
          <div className="cta-inner" data-aos="fade-up">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <span className="stag">Let's Talk</span>
                <h2 className="stitle mt-3">Every project we've built<br />started with a <span className="gtxt">phone call.</span></h2>
                <p className="ssub mt-4 mb-0">We'll go through exactly what you're working on, where the hard parts are, and whether our experience is actually relevant to your situation. If it's not a good fit, we'll say that too — we'd rather tell you now than waste your time.</p>
                <div className="cta-trust-row">
                  <div className="cta-trust-item">
                    <i className="bi bi-person-check"></i>
                    You'll speak directly with an engineer — not a sales rep
                  </div>
                  <div className="cta-trust-item">
                    <i className="bi bi-file-earmark-lock2"></i>
                    We sign an NDA before any technical discussion starts
                  </div>
                  <div className="cta-trust-item">
                    <i className="bi bi-clock-history"></i>
                    45-minute call, no commitment, written summary sent after
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="cta-card">
                  <div className="cta-card-label">Start with a conversation</div>
                  <Link to="/contact" className="btn-grad w-100 justify-content-center mb-3" style={{ fontSize: '0.94rem' }}>
                    <i className="bi bi-calendar-check"></i>Book a Free Call
                  </Link>
                  <a href="mailto:hello@NovuLabsTech.com" className="btn-glass w-100 justify-content-center" style={{ fontSize: '0.94rem' }}>
                    <i className="bi bi-envelope"></i>Send Us Your Brief
                  </a>
                  <p className="cta-card-note">200+ organizations started exactly this way — with a straightforward conversation about a specific problem they were trying to solve.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solutions;
