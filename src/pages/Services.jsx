import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import GlowCard from '../components/GlowCard';

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Wait slightly for page load/animation to finish
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  return (
    <>
      <section className="phero">
        <div className="phero-bg">
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&q=80" alt="NovuLabs team" loading="lazy" />
        </div>
        <div className="phero-ov"></div>
        <div className="phero-grid"></div>
        <div className="container phero-inner">
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Services</li>
            </ol>
          </nav>
          <span className="stag">What We Build</span>
          <h1 className="hero-title mt-3">22 Enterprise-Grade <span className="gtxt">Services</span></h1>
          <p className="hero-sub">Consult our architects about any of these service areas — we'll recommend the right architecture, timeline, and approach for your specific situation.</p>
        </div>
      </section>
      <div className="divider"></div>

      {/* Web Dev */}
      <section id="web" className="sec bg-w">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="stag">Service 01</span>
              <h2 className="stitle mt-3">Website <span className="gtxt">Development</span></h2>
              <p className="ssub mb-4">High-performance corporate websites, web applications, and portals using modern frameworks with SEO-first architecture and Core Web Vitals optimization.</p>
              <ul className="chk mb-4">
                <li><span className="chk-ico"><i className="bi bi-check"></i></span>Corporate &amp; enterprise websites</li>
                <li><span className="chk-ico"><i className="bi bi-check"></i></span>Progressive Web Apps (PWA)</li>
                <li><span className="chk-ico"><i className="bi bi-check"></i></span>E-commerce platforms</li>
                <li><span className="chk-ico"><i className="bi bi-check"></i></span>Custom web portals &amp; dashboards</li>
              </ul>
              <Link to="/contact" className="btn-grad"><i className="bi bi-calendar-check"></i>Consult About Web Development</Link>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="sec-img">
                <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&q=75" alt="Web Development" loading="lazy" style={{ height: '340px', width: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section id="enterprise" className="sec bg-g">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-7" data-aos="fade-up">
              <span className="stag">Service 02</span>
              <h2 className="stitle mt-3">Enterprise Software <span className="gtxt">Development</span></h2>
              <p className="ssub mx-auto">Custom platforms for complex business problems — multi-tenant SaaS, internal tools, and mission-critical systems engineered for infinite scale.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3" data-aos="fade-up">
              <GlowCard className="gcard">
                <div className="gcard-body">
                  <div className="sico i-b"><i className="bi bi-layers-fill"></i></div>
                  <div className="ctitle">Multi-Tenant SaaS</div>
                  <p className="ctext">Scalable SaaS with tenant isolation, custom branding, and usage-based billing.</p>
                  <Link to="/contact" className="carr"><i className="bi bi-arrow-right-circle"></i>Consult Us</Link>
                </div>
              </GlowCard>
            </div>
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="60">
              <GlowCard className="gcard">
                <div className="gcard-body">
                  <div className="sico i-t"><i className="bi bi-boxes"></i></div>
                  <div className="ctitle">Microservices</div>
                  <p className="ctext">Event-driven microservice architectures with Kubernetes orchestration and service mesh.</p>
                  <Link to="/contact" className="carr"><i className="bi bi-arrow-right-circle"></i>Consult Us</Link>
                </div>
              </GlowCard>
            </div>
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="120">
              <GlowCard className="gcard">
                <div className="gcard-body">
                  <div className="sico i-v"><i className="bi bi-bar-chart-fill"></i></div>
                  <div className="ctitle">Analytics Platforms</div>
                  <p className="ctext">Real-time dashboards, data warehousing, and BI integrations for enterprise decision-making.</p>
                  <Link to="/contact" className="carr"><i className="bi bi-arrow-right-circle"></i>Consult Us</Link>
                </div>
              </GlowCard>
            </div>
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="180">
              <GlowCard className="gcard">
                <div className="gcard-body">
                  <div className="sico i-o"><i className="bi bi-arrow-repeat"></i></div>
                  <div className="ctitle">Legacy Modernization</div>
                  <p className="ctext">Re-platforming legacy systems to modern cloud-native architecture with zero disruption.</p>
                  <Link to="/contact" className="carr"><i className="bi bi-arrow-right-circle"></i>Consult Us</Link>
                </div>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>

      {/* Fintech */}
      <section id="fintech" className="sec bg-w">
        <div className="container">
          <div className="row align-items-center g-5 flex-lg-row-reverse">
            <div className="col-lg-6" data-aos="fade-left">
              <span className="stag">Services 03–06</span>
              <h2 className="stitle mt-3">Financial Software <span className="gtxt">Solutions</span></h2>
              <p className="ssub mb-4">Certified fintech engineering — core banking, Mastercard/Visa integrations, RAAST &amp; 1LINK connectivity, and PCI-DSS certified payment infrastructure.</p>
              <ul className="chk mb-4">
                <li><span className="chk-ico"><i className="bi bi-check"></i></span>Core banking system development</li>
                <li><span className="chk-ico"><i className="bi bi-check"></i></span>PCI-DSS certified payment gateways</li>
                <li><span className="chk-ico"><i className="bi bi-check"></i></span>Mastercard MDES &amp; Visa VTS tokenization</li>
                <li><span className="chk-ico"><i className="bi bi-check"></i></span>Digital wallets &amp; RAAST/1LINK</li>
              </ul>
              <Link to="/contact" className="btn-grad"><i className="bi bi-calendar-check"></i>Consult About Fintech</Link>
            </div>
            <div className="col-lg-6" data-aos="fade-right">
              <div className="sec-img">
                <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=75" alt="Fintech" loading="lazy" style={{ height: '340px', width: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section id="mobile" className="sec bg-g">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-7" data-aos="fade-up">
              <span className="stag">Services 07–09</span>
              <h2 className="stitle mt-3">Mobile App <span className="gtxt">Development</span></h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up">
              <GlowCard className="gcard text-center">
                <div className="gcard-body">
                  <div className="sico i-b mx-auto"><i className="bi bi-phone-fill"></i></div>
                  <div className="ctitle">Cross-Platform</div>
                  <p className="ctext">Flutter &amp; React Native — one codebase, native performance on iOS &amp; Android.</p>
                  <Link to="/contact" className="carr justify-content-center"><i className="bi bi-arrow-right-circle"></i>Consult Us</Link>
                </div>
              </GlowCard>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="60">
              <GlowCard className="gcard text-center">
                <div className="gcard-body">
                  <div className="sico i-t mx-auto"><i className="bi bi-apple"></i></div>
                  <div className="ctitle">iOS Native</div>
                  <p className="ctext">Swift &amp; SwiftUI apps with iOS 18 features, WidgetKit, and enterprise MDM deployment.</p>
                  <Link to="/contact" className="carr justify-content-center"><i className="bi bi-arrow-right-circle"></i>Consult Us</Link>
                </div>
              </GlowCard>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="120">
              <GlowCard className="gcard text-center">
                <div className="gcard-body">
                  <div className="sico i-g mx-auto"><i className="bi bi-android2"></i></div>
                  <div className="ctitle">Android Native</div>
                  <p className="ctext">Kotlin &amp; Jetpack Compose with offline capabilities and Play enterprise deployment.</p>
                  <Link to="/contact" className="carr justify-content-center"><i className="bi bi-arrow-right-circle"></i>Consult Us</Link>
                </div>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare */}
      <section id="healthcare" className="sec bg-w">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="stag">Services 10–11</span>
              <h2 className="stitle mt-3">Healthcare Software <span className="gtxt">Development</span></h2>
              <p className="ssub mb-4">HIPAA-compliant, HL7 FHIR-certified healthcare platforms deployed across 40+ hospitals — EHR, telemedicine, medical billing, and pharmacy management.</p>
              <Link to="/contact" className="btn-grad"><i className="bi bi-calendar-check"></i>Consult About Healthcare IT</Link>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="sec-img">
                <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=75" alt="Healthcare" loading="lazy" style={{ height: '340px', width: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AML / Compliance */}
      <section id="compliance" className="sec bg-g">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-7" data-aos="fade-up">
              <span className="stag">Services 12–18</span>
              <h2 className="stitle mt-3">AML, CFT &amp; <span className="gtxt">Compliance</span></h2>
              <p className="ssub mx-auto">The deepest regulatory compliance engineering expertise in Pakistan and the MENA region.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4" data-aos="fade-up">
              <GlowCard className="gcard">
                <div className="gcard-body">
                  <div className="sico i-t"><i className="bi bi-shield-lock-fill"></i></div>
                  <div className="ctitle">AML Systems</div>
                  <p className="ctext">Real-time AML monitoring, customer risk scoring, and automated GOAML reports for FMU Pakistan.</p>
                  <Link to="/contact" className="carr"><i className="bi bi-arrow-right-circle"></i>Consult Us</Link>
                </div>
              </GlowCard>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="60">
              <GlowCard className="gcard">
                <div className="gcard-body">
                  <div className="sico i-b"><i className="bi bi-flag-fill"></i></div>
                  <div className="ctitle">CFT Compliance</div>
                  <p className="ctext">Terrorism financing detection with UN sanctions screening, PEP database integration, CTR filing.</p>
                  <Link to="/contact" className="carr"><i className="bi bi-arrow-right-circle"></i>Consult Us</Link>
                </div>
              </GlowCard>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="120">
              <GlowCard className="gcard">
                <div className="gcard-body">
                  <div className="sico i-p"><i className="bi bi-activity"></i></div>
                  <div className="ctitle">Transaction Monitoring</div>
                  <p className="ctext">ML-powered behavioral analytics detecting suspicious patterns across millions of daily transactions.</p>
                  <Link to="/contact" className="carr"><i className="bi bi-arrow-right-circle"></i>Consult Us</Link>
                </div>
              </GlowCard>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up">
              <GlowCard className="gcard">
                <div className="gcard-body">
                  <div className="sico i-y"><i className="bi bi-filetype-xml"></i></div>
                  <div className="ctitle">XML Schema Integration</div>
                  <p className="ctext">ISO 20022, SWIFT XML, HL7 FHIR, and custom schema processing for financial messaging.</p>
                  <Link to="/contact" className="carr"><i className="bi bi-arrow-right-circle"></i>Consult Us</Link>
                </div>
              </GlowCard>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="60">
              <GlowCard className="gcard">
                <div className="gcard-body">
                  <div className="sico i-g"><i className="bi bi-buildings-fill"></i></div>
                  <div className="ctitle">Government Portals</div>
                  <p className="ctext">National identity portals with NADRA/CNIC API, biometric verification, and PKI infrastructure.</p>
                  <Link to="/contact" className="carr"><i className="bi bi-arrow-right-circle"></i>Consult Us</Link>
                </div>
              </GlowCard>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="120">
              <GlowCard className="gcard">
                <div className="gcard-body">
                  <div className="sico i-v"><i className="bi bi-bank2"></i></div>
                  <div className="ctitle">FMU Pakistan</div>
                  <p className="ctext">Full GOAML integration, STR/CTR submission, typology mapping, and SBP regulatory dashboards.</p>
                  <Link to="/contact" className="carr"><i className="bi bi-arrow-right-circle"></i>Consult Us</Link>
                </div>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud & AI */}
      <section id="cloud" className="sec bg-w">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-7" data-aos="fade-up">
              <span className="stag">Services 19–22</span>
              <h2 className="stitle mt-3">Cloud, AI &amp; <span className="gtxt">Automation</span></h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-up">
              <GlowCard className="gcard">
                <div className="gcard-body">
                  <div className="sico i-c"><i className="bi bi-plug-fill"></i></div>
                  <div className="ctitle">API Development &amp; Integration</div>
                  <p className="ctext">RESTful &amp; GraphQL APIs with OpenAPI docs, API gateway, rate limiting, versioning, and developer portal.</p>
                  <Link to="/contact" className="carr"><i className="bi bi-arrow-right-circle"></i>Consult Us</Link>
                </div>
              </GlowCard>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="60">
              <GlowCard className="gcard">
                <div className="gcard-body">
                  <div className="sico i-b"><i className="bi bi-cloud-fill"></i></div>
                  <div className="ctitle">Cloud-Based Solutions</div>
                  <p className="ctext">Multi-cloud AWS/Azure/GCP, FinOps, serverless, Kubernetes, and zero-trust security architecture.</p>
                  <Link to="/contact" className="carr"><i className="bi bi-arrow-right-circle"></i>Consult Us</Link>
                </div>
              </GlowCard>
            </div>
            <div className="col-md-6" data-aos="fade-up">
              <GlowCard className="gcard">
                <div className="gcard-body">
                  <div className="sico i-t"><i className="bi bi-robot"></i></div>
                  <div className="ctitle">AI-Powered Automation</div>
                  <p className="ctext">ML pipelines, NLP chatbots, intelligent document processing, and predictive analytics platforms.</p>
                  <Link to="/contact" className="carr"><i className="bi bi-arrow-right-circle"></i>Consult Us</Link>
                </div>
              </GlowCard>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="60">
              <GlowCard className="gcard">
                <div className="gcard-body">
                  <div className="sico i-o"><i className="bi bi-layers-fill"></i></div>
                  <div className="ctitle">Custom SaaS Platforms</div>
                  <p className="ctext">Multi-tenant SaaS with Stripe billing, white-labeling, role-based access, and analytics dashboards.</p>
                  <Link to="/contact" className="carr"><i className="bi bi-arrow-right-circle"></i>Consult Us</Link>
                </div>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>

      <section id="cta-banner">
        <div className="container">
          <div className="cta-inner" data-aos="fade-up">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <span className="stag">Not Sure Where to Start?</span>
                <h2 className="stitle mt-3">That is exactly<br /><span className="gtxt">what the first call is for.</span></h2>
                <p className="ssub mt-4 mb-0">Most clients come to us knowing they have a problem but unsure how to frame it. We're used to that. Bring us what you know — we'll help you figure out the right approach, the honest timeline, and what it's actually going to take.</p>
                <div className="cta-trust-row">
                  <div className="cta-trust-item"><i className="bi bi-person-check"></i>Speak with an architect who has shipped similar systems</div>
                  <div className="cta-trust-item"><i className="bi bi-chat-square-text"></i>We ask more questions than you will — that's the point</div>
                  <div className="cta-trust-item"><i className="bi bi-file-earmark-text"></i>Honest written assessment follows within 5 business days</div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="cta-card">
                  <div className="cta-card-label">Book your call</div>
                  <Link to="/contact" className="btn-grad w-100 justify-content-center mb-3"><i className="bi bi-calendar-check"></i>Book a Free Call</Link>
                  <a href="mailto:hello@NovuLabsTech.com" className="btn-glass w-100 justify-content-center"><i className="bi bi-envelope"></i>Send Us Your Brief</a>
                  <p className="cta-card-note">If our services aren't the right fit for your project, we'll tell you that clearly — and often point you in a better direction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
