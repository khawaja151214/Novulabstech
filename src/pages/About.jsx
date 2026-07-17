import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      {/* Page Hero with blurred real image */}
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
              <li className="breadcrumb-item active" aria-current="page">About</li>
            </ol>
          </nav>
          <span className="stag">Our Story</span>
          <h1 className="hero-title mt-3">Building the Future of<br /><span className="gtxt">Enterprise Technology</span></h1>
          <p className="hero-sub">A senior engineering team on a single mission: building mission-critical software that the world's most demanding institutions can trust.</p>
        </div>
      </section>
      <div className="divider"></div>

      {/* Mission */}
      <section className="sec bg-w" id="mission">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="stag">Our Mission</span>
              <h2 className="stitle mt-3">Powering <span className="gtxt">Critical Systems</span> Globally</h2>
              <p className="mb-3">NovuLabs was founded in Islamabad by a senior engineering team with a single purpose: build software that matters. Not generic apps — mission-critical platforms that power financial systems, protect public health, and serve governments.</p>
              <p className="mb-3">Our team brings deep hands-on expertise in fintech compliance, healthcare IT, and enterprise architecture — accumulated across years of delivering complex systems for regulated industries.</p>
              <p>We measure success in transaction volumes processed, compliance standards met, and operations made more efficient through better software.</p>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="row g-3">
                <div className="col-6">
                  <div className="vcard">
                    <span className="vico">🎯</span>
                    <h5 className="ctitle">Mission-Driven</h5>
                    <p className="ctext">Every project starts with understanding what success truly means for your organization.</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="vcard">
                    <span className="vico">🔐</span>
                    <h5 className="ctitle">Security-First</h5>
                    <p className="ctext">Security is the foundation of everything we build — from day one, not bolted on later.</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="vcard">
                    <span className="vico">🚀</span>
                    <h5 className="ctitle">Innovation</h5>
                    <p className="ctext">We adopt emerging technologies early, keeping our clients ahead of the curve.</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="vcard">
                    <span className="vico">🤝</span>
                    <h5 className="ctitle">Partnership</h5>
                    <p className="ctext">Long-term partnerships with shared goals and shared accountability — not one-off projects.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team photos with real Unsplash images */}
      <section className="sec-sm bg-g" id="team-photos">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-right">
              <div className="sec-img">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=75" alt="Team working together" loading="lazy" style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="sec-img">
                <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=75" alt="Software development" loading="lazy" style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
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
                <span className="stag">Work With Us</span>
                <h2 className="stitle mt-3">Good software starts with<br /><span className="gtxt">understanding the problem.</span></h2>
                <p className="ssub mt-4 mb-0">We spend our first call listening — to what you're trying to build, what's gone wrong before, and what success actually looks like for your organization. The advice we give you is based on that, not a standard playbook.</p>
                <div className="cta-trust-row">
                  <div className="cta-trust-item"><i className="bi bi-person-check"></i>Senior engineer on the call — not a pre-sales team</div>
                  <div className="cta-trust-item"><i className="bi bi-file-earmark-lock2"></i>Your IP and project details stay completely confidential</div>
                  <div className="cta-trust-item"><i className="bi bi-clock-history"></i>Response within 4 hours — we know your time matters</div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="cta-card">
                  <div className="cta-card-label">Start the conversation</div>
                  <Link to="/contact" className="btn-grad w-100 justify-content-center mb-3"><i className="bi bi-calendar-check"></i>Book a Free Call</Link>
                  <a href="mailto:Info@novulabstech.net" className="btn-glass w-100 justify-content-center"><i className="bi bi-envelope"></i>Email Us Directly</a>
                  <p className="cta-card-note">No demos, no pitch scripts. Just a straight conversation about your project and whether we're the right fit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
