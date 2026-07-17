import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ParticlesCanvas from '../components/ParticlesCanvas';
import CountUp from '../components/CountUp';
import TiltCard from '../components/TiltCard';
import GlowCard from '../components/GlowCard';
import teamWorking from '../assets/team-working.jpeg';

const Home = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const services = [
    { icon: 'bi-globe', title: 'Website Development', desc: 'High-performance corporate sites, portals & web apps with SEO-first architecture.', color: 'i-b' },
    { icon: 'bi-cpu-fill', title: 'Enterprise Software', desc: 'Custom multi-tenant SaaS, enterprise middleware, and mission-critical platforms.', color: 'i-v' },
    { icon: 'bi-bank', title: 'Financial Software', desc: 'Core banking, digital wallets, lending systems, and investment management platforms.', color: 'i-t' },
    { icon: 'bi-credit-card-2-front', title: 'Payment Gateways', desc: 'PCI-DSS compliant integrations supporting global payment rails and local acquirers.', color: 'i-c' },
    { icon: 'bi-patch-check-fill', title: 'Mastercard / Visa', desc: 'Certified direct integrations with Mastercard and Visa networks — issuing and acquiring.', color: 'i-o' },
    { icon: 'bi-phone-fill', title: 'Mobile Apps', desc: 'Cross-platform iOS & Android apps built with Flutter and native Swift/Kotlin.', color: 'i-g' },
    { icon: 'bi-heart-pulse-fill', title: 'Healthcare Software', desc: 'HIPAA-compliant EHR, telemedicine, and clinical workflow platforms for providers.', color: 'i-p' },
    { icon: 'bi-clipboard2-pulse-fill', title: 'Medical Billing', desc: 'End-to-end billing with ICD-10/CPT coding, claim management, and payer integration.', color: 'i-c' },
    { icon: 'bi-diagram-3-fill', title: 'ERP Systems', desc: 'Custom ERP integrating finance, HR, supply chain, and procurement in one system.', color: 'i-v' },
    { icon: 'bi-people-fill', title: 'CRM Systems', desc: 'AI-powered CRM with lead scoring, pipeline analytics, and omnichannel engagement.', color: 'i-o' },
    { icon: 'bi-shield-lock-fill', title: 'AML Systems', desc: 'Real-time monitoring, risk scoring, and regulatory reporting for compliant institutions.', color: 'i-t' },
    { icon: 'bi-flag-fill', title: 'CFT Compliance', desc: 'Counter-Financing of Terrorism with PEP screening and automated STR generation.', color: 'i-b' },
    { icon: 'bi-activity', title: 'Transaction Monitoring', desc: 'ML-powered analytics detecting suspicious patterns across millions of transactions.', color: 'i-p' },
    { icon: 'bi-filetype-xml', title: 'XML Schema Integration', desc: 'ISO 20022, SWIFT XML, and HL7 FHIR schema processing for financial messaging.', color: 'i-y' },
    { icon: 'bi-buildings-fill', title: 'Government Portals', desc: 'National identity portals with NADRA/CNIC API, digital signature, and e-gov services.', color: 'i-g' },
    { icon: 'bi-bank2', title: 'FMU Pakistan', desc: 'Full GOAML integration, STR/CTR filing, and SBP regulatory compliance dashboards.', color: 'i-v' },
    { icon: 'bi-plug-fill', title: 'API Development', desc: 'RESTful & GraphQL APIs with enterprise security, rate limiting, and developer portals.', color: 'i-c' },
    { icon: 'bi-cloud-fill', title: 'Cloud Solutions', desc: 'AWS, Azure & GCP architecture, migration, and managed infrastructure for enterprises.', color: 'i-b' },
    { icon: 'bi-robot', title: 'AI Automation', desc: 'ML pipelines, NLP chatbots, document processing, and predictive analytics platforms.', color: 'i-t' },
    { icon: 'bi-layers-fill', title: 'Custom SaaS Platforms', desc: 'Multi-tenant SaaS with subscription billing, white-labeling, and analytics dashboards.', color: 'i-o' },
    { icon: 'bi-apple', title: 'iOS Development', desc: 'Native Swift & SwiftUI apps optimized for performance, security, and App Store approval.', color: 'i-b' },
    { icon: 'bi-android2', title: 'Android Development', desc: 'Kotlin-first apps for diverse device ecosystems and enterprise Play Store deployment.', color: 'i-g' }
  ];

  const whyUs = [
    { num: '01', icon: 'bi-shield-check', title: 'Security-First Engineering', desc: 'OWASP, PCI-DSS, ISO 27001, and HIPAA compliance built in from day one — never an afterthought.', color: 'i-t' },
    { num: '02', icon: 'bi-graph-up-arrow', title: 'Infinite Scalability', desc: 'Cloud-native architectures designed to scale from 1,000 to 100 million users without re-platforming.', color: 'i-b' },
    { num: '03', icon: 'bi-award-fill', title: 'Regulatory Expertise', desc: 'Deep knowledge of FATF, FMU Pakistan, SBP, FCA, and global financial compliance — coded precisely.', color: 'i-v' },
    { num: '04', icon: 'bi-lightning-fill', title: 'Rapid Delivery', desc: 'Agile sprints with CI/CD pipelines deliver production-ready features every two weeks, consistently.', color: 'i-o' },
    { num: '05', icon: 'bi-headset', title: '24/7 Dedicated Support', desc: 'Round-the-clock NOC monitoring, SLA-backed support tiers, and dedicated account managers.', color: 'i-c' },
    { num: '06', icon: 'bi-globe2', title: 'Global Delivery Model', desc: 'Office in Islamabad — follow-the-sun development velocity.', color: 'i-t' }
  ];

  const industries = [
    { icon: 'bi-bank2', title: 'Banking & Fintech', desc: 'Core banking, AML/CFT, payment rails, digital wallets', color: 'i-t' },
    { icon: 'bi-hospital-fill', title: 'Healthcare & MedTech', desc: 'EHR, telemedicine, medical billing, HIPAA solutions', color: 'i-p' },
    { icon: 'bi-buildings-fill', title: 'Government & Public Sector', desc: 'Identity portals, citizen services, e-government', color: 'i-b' },
    { icon: 'bi-cart-fill', title: 'E-Commerce & Retail', desc: 'B2B/B2C platforms, inventory, order processing', color: 'i-o' },
    { icon: 'bi-gear-wide-connected', title: 'Manufacturing & Logistics', desc: 'ERP, supply chain, warehouse automation, IoT', color: 'i-v' },
    { icon: 'bi-mortarboard-fill', title: 'Education & EdTech', desc: 'LMS, virtual classrooms, student management', color: 'i-c' }
  ];

  const techStack = [
    { icon: '⚛️', name: 'React' },
    { icon: '🟢', name: 'Node.js' },
    { icon: '🐍', name: 'Python' },
    { icon: '☕', name: 'Java' },
    { icon: '🔷', name: '.NET Core' },
    { icon: '🦋', name: 'Flutter' },
    { icon: '☁️', name: 'AWS' },
    { icon: '🔵', name: 'Azure' },
    { icon: '🐳', name: 'Docker' },
    { icon: '⚙️', name: 'Kubernetes' },
    { icon: '🐘', name: 'PostgreSQL' },
    { icon: '🤖', name: 'TensorFlow' }
  ];

  const portfolio = [
    {
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      tags: 'Fintech · AML · Compliance',
      title: 'CoreBanking AML Suite',
      desc: 'Real-time AML monitoring and GOAML-integrated compliance for a Tier-1 bank — 2M+ daily transactions processed.',
      tech: ['Python', 'React', 'FMU']
    },
    {
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
      tags: 'Healthcare · EHR · HIPAA',
      title: 'MediCore EHR Platform',
      desc: 'HIPAA-compliant Electronic Health Records across 40+ hospitals with integrated telemedicine and billing.',
      tech: ['.NET Core', 'HL7 FHIR', 'HIPAA']
    },
    {
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
      tags: 'Fintech · Payments · Visa/MC',
      title: 'TranzAxis Payment Gateway',
      desc: 'Mastercard & Visa certified processing — $2.4B annual transactions, 99.99% uptime, PCI-DSS compliant.',
      tech: ['Node.js', 'Mastercard', 'PCI DSS']
    }
  ];

  const faqs = [
    { q: 'What industries does NovuLabs specialize in?', a: 'Banking & Fintech, Healthcare, Government, Manufacturing, and E-Commerce. Our deepest expertise is in AML, CFT, and FMU Pakistan compliance for regulated financial institutions.' },
    { q: 'How do I start a project with NovuLabs?', a: 'Book a free consultation — a 45-minute discovery call with a senior architect, zero commitment. We listen first, then advise on the right approach for your specific needs.' },
    { q: 'Do you offer post-launch support and maintenance?', a: 'Yes. Tiered SLA packages from standard business-hours support to 24/7 platinum tiers with 4-hour guaranteed response. All enterprise clients get a dedicated account manager.' },
    { q: 'Are your solutions compliant with FMU Pakistan regulations?', a: 'Absolutely. We have live deployments at multiple SBP-regulated institutions — GOAML integration, STR/CTR reporting, AML/CFT screening, all under FMU and FATF frameworks.' },
    { q: 'Can you work alongside our existing team?', a: 'Yes. Staff augmentation, co-development, and full outsourcing — we adapt to your stack, tools, and methodologies. Many clients embed our engineers alongside their in-house teams.' }
  ];

  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section id="hero">
        <div className="hero-grid"></div>
        <ParticlesCanvas />
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left */}
            <div className="col-lg-6">
              <div className="hero-inner">
                <div className="hero-badge"><span className="hero-dot"></span>Trusted by 200+ Enterprise Clients Worldwide</div>
                <h1 className="hero-title">Next-Gen<br /><span className="gtxt">Enterprise</span><br />Software House</h1>
                <p className="hero-sub">We engineer mission-critical platforms for fintech institutions, government agencies, healthcare networks, and global enterprises — built for scale, security, and compliance.</p>
                <div className="hero-btns">
                  <Link to="/contact" className="btn-grad"><i className="bi bi-rocket-takeoff"></i>Book a Free Consultation</Link>
                  <Link to="/portfolio" className="btn-glass"><i className="bi bi-folder2-open"></i>View Our Work</Link>
                </div> <br />
              </div>
            </div>
            {/* Right: Hero Image */}
            <div className="col-lg-6 hero-visual">
              <TiltCard className="hero-img-wrap">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80" alt="Enterprise software development team" loading="eager" />
                <div className="hero-img-overlay"></div>
                <div className="hero-img-shine"></div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="sec bg-w z1" id="about">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5" data-aos="fade-right">
              <div style={{ position: 'relative' }}>
                <div className="about-img">
                  <img src={teamWorking} alt="NovuLabs global team collaboration" loading="lazy" />
                </div>
                <div className="about-glass-pill agp1">
                  <div className="agp-num">
                    <CountUp target={12} suffix="+" />
                  </div>
                  <div className="agp-sub">Years of Excellence</div>
                </div>
                <div className="about-glass-pill agp2">
                  <div className="agp-num">
                    <CountUp target={500} suffix="+" />
                  </div>
                  <div className="agp-sub">Engineers Worldwide</div>
                </div>
              </div>
            </div>
            <div className="col-lg-7" data-aos="fade-left">
              <span className="stag">Who We Are</span>
              <h2 className="stitle mt-3">Building Digital Infrastructure <span class="gtxt">for Tomorrow</span></h2>
              <p className="ssub mb-4">NovuLabs is a premier international software house headquartered in Islamabad. We engineer enterprise-grade platforms that power financial systems, healthcare networks, and government portals across 40+ countries.</p>
              
              <div className="d-flex gap-3 flex-wrap">
                <Link to="/about" className="btn-grad"><i className="bi bi-arrow-right"></i>About NovuLabs</Link>
                <Link to="/contact" className="btn-glass"><i className="bi bi-calendar-check"></i>Book a Consultation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="divider"></div>

      {/* Services */}
      <section className="sec bg-g z1" id="services">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-7" data-aos="fade-up">
              <span className="stag">What We Build</span>
              <h2 className="stitle mt-3">22 Enterprise-Grade <span className="gtxt">Services</span></h2>
              <p className="ssub mx-auto">From compliant fintech platforms to AI-powered automation — mission-critical software that enterprises depend on.</p>
            </div>
          </div>
          <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4">
            {services.map((item, i) => (
              <div className="col" data-aos="fade-up" data-aos-delay={i * 10} key={i}>
                <GlowCard className="gcard">
                  <div className="gcard-body p-uniform">
                    <div className={`sico ${item.color}`}>
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <div className="ctitle">{item.title}</div>
                    <div className="ctext">{item.desc}</div>
                    <Link to="/contact" className="carr">
                      <i className="bi bi-arrow-right-circle"></i>Consult Us
                    </Link>
                  </div>
                </GlowCard>
              </div>
            ))}
          </div>
          <div className="text-center mt-5" data-aos="fade-up">
            <Link to="/services" className="btn-grad"><i className="bi bi-arrow-right"></i>Explore All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="sec bg-w z1" id="why">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-7" data-aos="fade-up">
              <span className="stag">Why NovuLabs</span>
              <h2 className="stitle mt-3">The <span className="gtxt">Competitive Edge</span> You Need</h2>
              <p className="ssub mx-auto">We build competitive advantages for the world's most demanding organizations — not just software.</p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {whyUs.map((item, i) => (
              <div className="col" data-aos="fade-up" data-aos-delay={i * 20} key={i}>
                <div className="wcard">
                  <div className="wnum">{item.num}</div>
                  <div className={`sico ${item.color} mb-3`}>
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <h4 className="ctitle">{item.title}</h4>
                  <p className="ctext">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="divider"></div>

      {/* Industries */}
      <section className="sec bg-g z1" id="industries">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-7" data-aos="fade-up">
              <span className="stag">Sectors We Serve</span>
              <h2 className="stitle mt-3">Built for <span className="gtxt">Critical Industries</span></h2>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {industries.map((item, i) => (
              <div className="col" data-aos="fade-up" data-aos-delay={i * 20} key={i}>
                <Link to="/industries" className="icard">
                  <div className={`iico ${item.color}`}>
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="sec-sm bg-w z1" id="tech">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5" data-aos="fade-right">
              <span className="stag">Our Stack</span>
              <h2 className="stitle mt-3">Cutting-Edge <span className="gtxt">Technologies</span></h2>
              <p className="ssub mb-4">We use the world's best frameworks and cloud platforms — always the right tool for your requirements.</p>
              
              {/* Spinning cube visual element */}
              <div className="d-flex gap-5 align-items-center flex-wrap mt-4">
                <div className="orbit">
                  <div className="oring"><div className="odot"></div></div>
                  <div className="oring oring2"><div className="odot2"></div></div>
                  <div className="ocore"><i className="bi bi-cpu-fill"></i></div>
                </div>
                <div className="cube-scene">
                  <div className="cube">
                    <div className="cf fr">⚛️</div>
                    <div className="cf bk">🐍</div>
                    <div className="cf rt">☁️</div>
                    <div className="cf lt">🤖</div>
                    <div className="cf tp">🔷</div>
                    <div className="cf bt">🐳</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7" data-aos="fade-left">
              <div className="row row-cols-3 row-cols-md-4 g-3">
                {techStack.map((tech, i) => (
                  <div className="col" key={i}>
                    <div className="titem">
                      <span className="titem-ico">{tech.icon}</span>
                      <div className="titem-name">{tech.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="sec bg-g z1" id="portfolio">
        <div className="container">
          <div className="row justify-content-between align-items-end mb-5">
            <div className="col-lg-6" data-aos="fade-up">
              <span className="stag">Our Work</span>
              <h2 className="stitle mt-3">Selected <span className="gtxt">Projects</span></h2>
            </div>
            <div className="col-auto" data-aos="fade-up">
              <Link to="/portfolio" className="btn-glass">View All <i className="bi bi-arrow-right ms-1"></i></Link>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {portfolio.map((project, i) => (
              <div className="col" data-aos="fade-up" data-aos-delay={i * 40} key={i}>
                <div className="pcard">
                  <div className="pimg-wrap">
                    <img className="pimg" src={project.img} alt={project.title} loading="lazy" />
                  </div>
                  <div className="pbody">
                    <div className="ptag">{project.tags}</div>
                    <div className="ptitle">{project.title}</div>
                    <p className="pdesc">{project.desc}</p>
                    <div className="d-flex gap-2 mt-3 flex-wrap">
                      {project.tech.map((t, idx) => (
                        <span className="tbadge" key={idx}>{t}</span>
                      ))}
                    </div>
                    <div className="mt-3">
                      <Link to="/contact" className="btn-glass" style={{ padding: '7px 16px', fontSize: '0.79rem' }}>
                        Consult About This →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="sec bg-w z1" id="process">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-7" data-aos="fade-up">
              <span className="stag">How We Work</span>
              <h2 className="stitle mt-3">Our Delivery <span className="gtxt">Process</span></h2>
              <p className="ssub mx-auto">A proven six-phase methodology refined across 200+ enterprise deployments.</p>
            </div>
          </div>
          
          <div className="proc-tl">
            <div className="row">
              <div className="col-md-5" data-aos="fade-right">
                <div className="pstep">
                  <div className="pstep-inner">
                    <div className="pstep-t"><i className="bi bi-search" style={{ color: 'var(--p1)' }}></i> Discovery &amp; Strategy</div>
                    <p className="pstep-d">Requirements workshops, stakeholder interviews, feasibility analysis, and project roadmap creation.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 d-none d-md-flex align-items-center justify-content-center position-relative">
                <div className="pnum">01</div>
              </div>
              <div className="col-md-5"></div>

              <div className="col-md-5"></div>
              <div className="col-md-2 d-none d-md-flex align-items-center justify-content-center position-relative">
                <div className="pnum">02</div>
              </div>
              <div className="col-md-5" data-aos="fade-left">
                <div className="pstep">
                  <div className="pstep-inner">
                    <div className="pstep-t"><i className="bi bi-pencil-square" style={{ color: 'var(--p1)' }}></i> Architecture &amp; Design</div>
                    <p className="pstep-d">System architecture, database modeling, UI/UX prototyping, security design, and compliance mapping.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-5" data-aos="fade-right">
                <div className="pstep">
                  <div className="pstep-inner">
                    <div className="pstep-t"><i className="bi bi-code-slash" style={{ color: 'var(--p1)' }}></i> Agile Development</div>
                    <p className="pstep-d">Two-week sprints with CI/CD pipelines, code reviews, and transparent progress reporting.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 d-none d-md-flex align-items-center justify-content-center position-relative">
                <div className="pnum">03</div>
              </div>
              <div className="col-md-5"></div>

              <div className="col-md-5"></div>
              <div className="col-md-2 d-none d-md-flex align-items-center justify-content-center position-relative">
                <div className="pnum">04</div>
              </div>
              <div className="col-md-5" data-aos="fade-left">
                <div className="pstep">
                  <div className="pstep-inner">
                    <div className="pstep-t"><i className="bi bi-bug-fill" style={{ color: 'var(--p1)' }}></i> QA &amp; Security Testing</div>
                    <p className="pstep-d">Automated testing, penetration testing, load testing, compliance audits, and UAT sign-off.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-5" data-aos="fade-right">
                <div className="pstep">
                  <div className="pstep-inner">
                    <div className="pstep-t"><i className="bi bi-rocket-takeoff-fill" style={{ color: 'var(--p1)' }}></i> Deployment &amp; Launch</div>
                    <p className="pstep-d">Blue-green deployments, zero-downtime releases, infrastructure provisioning, and go-live support.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 d-none d-md-flex align-items-center justify-content-center position-relative">
                <div className="pnum">05</div>
              </div>
              <div className="col-md-5"></div>

              <div className="col-md-5"></div>
              <div className="col-md-2 d-none d-md-flex align-items-center justify-content-center position-relative">
                <div className="pnum">06</div>
              </div>
              <div className="col-md-5" data-aos="fade-left">
                <div className="pstep">
                  <div className="pstep-inner">
                    <div className="pstep-t"><i className="bi bi-tools" style={{ color: 'var(--p1)' }}></i> Ongoing Support &amp; Growth</div>
                    <p className="pstep-d">24/7 monitoring, SLA-backed maintenance, security audits, and continuous feature development.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec bg-g z1" id="faq">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-6" data-aos="fade-up">
              <span className="stag">FAQ</span>
              <h2 className="stitle mt-3">Frequently Asked <span className="gtxt">Questions</span></h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8" data-aos="fade-up">
              {faqs.map((faq, i) => (
                <div className={`fitem ${activeFaq === i ? 'open' : ''}`} key={i}>
                  <div className="fq" onClick={() => toggleFaq(i)}>
                    <span className="fq-text">{faq.q}</span>
                    <div className="ftog">
                      <i className={`bi ${activeFaq === i ? 'bi-dash' : 'bi-plus'}`}></i>
                    </div>
                  </div>
                  <div className="fans" style={{ maxHeight: activeFaq === i ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-out' }}>
                    <div className="fans-in">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section id="cta-banner" className="z1">
        <div className="container">
          <div className="cta-inner" data-aos="fade-up">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <span className="stag">Ready to Start?</span>
                <h2 className="stitle mt-3">Tell us what you're building.<br /><span className="gtxt">We'll tell you how we can help.</span></h2>
                <p className="ssub mt-4 mb-0">A 45-minute call with one of our engineers. We'll listen to what you're working on, share what we know from similar projects, and give you honest advice on the right way forward — whether that's working with us or not.</p>
                <div className="cta-trust-row">
                  <div className="cta-trust-item">
                    <i className="bi bi-person-check"></i>
                    Directly with an engineer who has worked on similar projects
                  </div>
                  <div className="cta-trust-item">
                    <i className="bi bi-file-earmark-lock2"></i>
                    NDA signed upfront — your ideas stay yours
                  </div>
                  <div className="cta-trust-item">
                    <i className="bi bi-arrow-right-circle"></i>
                    Written proposal within 5 business days, at no cost
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="cta-card">
                  <div className="cta-card-label">Get in touch</div>
                  <Link to="/contact" className="btn-grad w-100 justify-content-center mb-3">
                    <i className="bi bi-calendar-check"></i>Book a Free Call
                  </Link>
                  <Link to="/portfolio" className="btn-glass w-100 justify-content-center">
                    <i className="bi bi-folder2-open"></i>See Our Work First
                  </Link>
                  <p className="cta-card-note">Most started with a single conversation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
