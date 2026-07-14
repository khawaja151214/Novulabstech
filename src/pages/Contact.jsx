import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    country: 'Pakistan',
    budget: '',
    service: '',
    message: ''
  });

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        organization: '',
        email: '',
        phone: '',
        country: 'Pakistan',
        budget: '',
        service: '',
        message: ''
      });
    }, 4000);
  };

  const faqs = [
    { q: 'What is the minimum project size NovuLabs works with?', a: 'Typically $15,000 USD for a standalone module or MVP. Full enterprise platforms start from $50,000. We focus on end-to-end delivery — not hourly freelance work.' },
    { q: 'Do you sign NDAs before discussions?', a: 'Absolutely. We sign mutual NDAs before any substantive technical discussion. Your IP and competitive information are fully protected from the start.' },
    { q: 'Can you work alongside our existing in-house team?', a: 'Yes. We offer staff augmentation, co-development, and full outsourcing. Our engineers adapt to your existing stack, tools, sprint ceremonies, and communication preferences.' },
    { q: 'What compliance frameworks do you support?', a: 'FATF, FMU Pakistan, SBP, FCA, HIPAA, HL7 FHIR, PCI-DSS, ISO 27001, GDPR, and Mastercard/Visa network compliance. Deep in-house expertise in Pakistani, UAE, and UK/EU regulatory requirements.' },
    { q: 'Do you offer fixed-price or time-and-material contracts?', a: 'Both. Fixed-price for well-defined, stable requirements. Time-and-material for evolving enterprise platforms. We recommend the best model after the discovery call based on your specific situation.' }
  ];

  return (
    <>
      <section className="phero">
        <div className="phero-bg">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=80" alt="Contact" loading="lazy" />
        </div>
        <div className="phero-ov"></div>
        <div className="phero-grid"></div>
        <div className="container phero-inner">
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Contact</li>
            </ol>
          </nav>
          <span className="stag">Let's Talk</span>
          <h1 className="hero-title mt-3">Book a Free <span className="gtxt">Consultation</span></h1>
          <p className="hero-sub">No demos, no sales scripts. Just a genuine conversation about your project — and honest advice on the right path forward.</p>
        </div>
      </section>
      <div className="divider"></div>

      {/* How it works */}
      <section className="sec-sm bg-w" id="contact-process">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-6" data-aos="fade-up">
              <span className="stag">Process</span>
              <h2 className="stitle mt-3">What Happens <span className="gtxt">Next</span></h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="0">
              <div className="wcard text-center">
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'var(--g-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--fh)', fontWeight: '800', color: '#1A1208', margin: '0 auto 16px', boxShadow: 'var(--sh-glow)' }}>1</div>
                <h5 className="ctitle">You Reach Out</h5>
                <p className="ctext">Fill in the form. The more context you share, the more specific our advice will be.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="70">
              <div className="wcard text-center">
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'linear-gradient(135deg,#0ea5a0,#0c8a86)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--fh)', fontWeight: '800', color: '#fff', margin: '0 auto 16px', boxShadow: '0 6px 20px rgba(14,165,160,.3)' }}>2</div>
                <h5 className="ctitle">We Review</h5>
                <p className="ctext">Our architects review your needs and assign the right specialist within 4 business hours.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="140">
              <div className="wcard text-center">
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'linear-gradient(135deg,#7c3aed,#6d28d9)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--fh)', fontWeight: '800', color: '#fff', margin: '0 auto 16px', boxShadow: '0 6px 20px rgba(124,58,237,.3)' }}>3</div>
                <h5 className="ctitle">45-Minute Call</h5>
                <p className="ctext">Discovery call with a senior architect to explore requirements and goals — zero commitment.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="210">
              <div className="wcard text-center">
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'linear-gradient(135deg,#ea580c,#c2410c)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--fh)', fontWeight: '800', color: '#fff', margin: '0 auto 16px', boxShadow: '0 6px 20px rgba(234,88,12,.3)' }}>4</div>
                <h5 className="ctitle">Custom Proposal</h5>
                <p className="ctext">A detailed technical proposal with architecture, timeline, and investment within 5 business days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="sec bg-g" id="contact-form-sec">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="ccontact">
                <h3 className="mb-1">Tell Us About Your Project</h3>
                <p style={{ color: 'var(--tx3)', fontSize: '0.86rem', marginBottom: '26px' }}>We respond within 4 business hours. For urgent inquiries, call us directly.</p>
                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="flabel">Full Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        className="finput" 
                        placeholder="John Smith" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required 
                        disabled={formSubmitted}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="flabel">Organization *</label>
                      <input 
                        type="text" 
                        name="organization"
                        className="finput" 
                        placeholder="Your Company" 
                        value={formData.organization}
                        onChange={handleInputChange}
                        required 
                        disabled={formSubmitted}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="flabel">Work Email *</label>
                      <input 
                        type="email" 
                        name="email"
                        className="finput" 
                        placeholder="john@company.com" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                        disabled={formSubmitted}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="flabel">Phone</label>
                      <input 
                        type="tel" 
                        name="phone"
                        className="finput" 
                        placeholder="+92 300 0000000" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={formSubmitted}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="flabel">Country</label>
                      <select 
                        name="country"
                        className="fselect"
                        value={formData.country}
                        onChange={handleInputChange}
                        disabled={formSubmitted}
                      >
                        <option>Pakistan</option>
                        <option>UAE</option>
                        <option>UK</option>
                        <option>USA</option>
                        <option>Saudi Arabia</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="flabel">Budget Range</label>
                      <select 
                        name="budget"
                        className="fselect"
                        value={formData.budget}
                        onChange={handleInputChange}
                        disabled={formSubmitted}
                      >
                        <option value="">— Optional —</option>
                        <option>$10K – $50K</option>
                        <option>$50K – $150K</option>
                        <option>$150K – $500K</option>
                        <option>$500K+</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="flabel">What do you need? *</label>
                      <select 
                        name="service"
                        className="fselect" 
                        value={formData.service}
                        onChange={handleInputChange}
                        required 
                        disabled={formSubmitted}
                      >
                        <option value="">— Select a Service —</option>
                        <option>Enterprise Software Development</option>
                        <option>Financial Software / Fintech</option>
                        <option>AML / CFT Compliance</option>
                        <option>Healthcare Software</option>
                        <option>Mobile App Development</option>
                        <option>ERP / CRM Systems</option>
                        <option>Government Solutions</option>
                        <option>Cloud &amp; AI</option>
                        <option>General Consultation</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="flabel">Describe your project *</label>
                      <textarea 
                        name="message"
                        className="finput" 
                        rows="5" 
                        placeholder="What do you want to build? What problem are you solving? Timeline and compliance requirements..." 
                        value={formData.message}
                        onChange={handleInputChange}
                        required 
                        disabled={formSubmitted}
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button 
                        type="submit" 
                        className="btn-grad w-100 justify-content-center" 
                        style={{ 
                          padding: '15px', 
                          fontSize: '0.97rem',
                          background: formSubmitted ? 'linear-gradient(135deg,#C9A84C,#E8C96A)' : '',
                        }}
                        disabled={formSubmitted}
                      >
                        {formSubmitted ? (
                          <>
                            <i className="bi bi-check-circle me-2"></i>Message Sent — We'll be in touch!
                          </>
                        ) : (
                          <>
                            <i className="bi bi-send-fill me-2"></i>Send Message — We Respond in 4 Hours
                          </>
                        )}
                      </button>
                    </div>
                    <div className="col-12 text-center">
                      <p style={{ fontSize: '0.73rem', color: 'var(--tx4)', margin: 0 }}>🔒 Your information is confidential and never shared with third parties.</p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="col-lg-5" data-aos="fade-left">
              <div className="ccontact mb-4">
                <h5 className="mb-4">Our Global Offices</h5>
                <div className="cinfo-item">
                  <div className="cico i-b"><i className="bi bi-geo-alt-fill"></i></div>
                  <div>
                    <h6>🇵🇰 Pakistan (HQ)</h6>
                    <p>2nd Floor, Eagle Plaza, Blue Area, Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>
              <div className="ccontact mb-4">
                <h5 className="mb-4">Direct Contacts</h5>
                <div className="cinfo-item">
                  <div className="cico i-t"><i className="bi bi-envelope-fill"></i></div>
                  <div>
                    <h6>General Inquiries</h6>
                    <p><a href="mailto:hello@NovuLabsTech.com" style={{ color: 'var(--p1)' }}>hello@NovuLabsTech.com</a></p>
                  </div>
                </div>
                <div className="cinfo-item">
                  <div className="cico i-b"><i className="bi bi-envelope-fill"></i></div>
                  <div>
                    <h6>Enterprise Sales</h6>
                    <p><a href="mailto:enterprise@NovuLabsTech.com" style={{ color: 'var(--p1)' }}>enterprise@NovuLabsTech.com</a></p>
                  </div>
                </div>
                <div className="cinfo-item">
                  <div className="cico i-v"><i className="bi bi-telephone-fill"></i></div>
                  <div>
                    <h6>HQ Phone (Pakistan)</h6>
                    <p><a href="tel:+924200000000" style={{ color: 'var(--p1)' }}>+92 42 0000 0000</a></p>
                  </div>
                </div>
                <div className="cinfo-item">
                  <div className="cico i-o"><i className="bi bi-clock-fill"></i></div>
                  <div>
                    <h6>Business Hours (PKT)</h6>
                    <p>Mon–Fri: 9AM–6PM<br /><small style={{ color: 'var(--p2)' }}>24/7 for enterprise SLA clients</small></p>
                  </div>
                </div>
              </div>
              
              <div className="map-box">
                <div>
                  <i className="bi bi-map-fill" style={{ fontSize: '2.4rem', color: 'var(--p1)', opacity: 0.35, display: 'block', marginBounding: '10px' }}></i>
                  <p style={{ fontWeight: 600, color: 'var(--tx1)', marginBottom: '4px' }}>NovuLabs HQ</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--tx3)', marginBottom: '12px' }}>Eagle Plaza, Blue Area, Islamabad</p>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn-glass" style={{ padding: '7px 16px', fontSize: '0.8rem' }}>
                    <i className="bi bi-box-arrow-up-right me-1"></i>Open Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec bg-w" id="contact-faq">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-6" data-aos="fade-up">
              <span className="stag">FAQ</span>
              <h2 className="stitle mt-3">Common <span className="gtxt">Questions</span></h2>
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
    </>
  );
};

export default Contact;
