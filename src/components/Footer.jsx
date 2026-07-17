import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <>
      <div className="ft-wave-wrap">
        <svg className="ft-wave-svg" viewBox="0 0 2880 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path className="ft-wave-p1" d="M0,45 C240,0 480,90 720,45 C960,0 1200,90 1440,45 C1680,0 1920,90 2160,45 C2400,0 2640,90 2880,45 L2880,90 L0,90 Z" />
          <path className="ft-wave-p2" d="M0,62 C300,15 600,90 900,62 C1200,15 1440,78 1440,62 C1740,46 2040,90 2340,62 C2520,46 2700,18 2880,62 L2880,90 L0,90 Z" />
        </svg>
      </div>
      <footer>
        <div className="container">
          <div className="row g-5 ft-top">
            <div className="col-lg-3">
              <img src="/logo.png" alt="NovuLabs" className="ft-logo" />
              <p className="ft-tag">
                <br />
                A premier international enterprise software house headquartered in Islamabad. Engineering mission-critical platforms across 40+ countries since 2026.
              </p>
              <div className="ft-contact-items">
                <a href="Info@novulabstech.net" className="ft-contact-item">
                  <i className="bi bi-envelope-fill"></i>hello@NovuLabsTech.com
                </a>
                <a href="tel:+924200000000" className="ft-contact-item">
                  <i className="bi bi-telephone-fill"></i>+92 42 0000 0000
                </a>
                <span className="ft-contact-item">
                  <i className="bi bi-geo-alt-fill"></i>Blue Area, Islamabad, Pakistan
                </span>
              </div>
              <div className="ft-socs">
                <a href="#" className="fsoc" title="LinkedIn"><i className="bi bi-linkedin"></i></a>
                <a href="#" className="fsoc" title="Twitter / X"><i className="bi bi-twitter-x"></i></a>
                <a href="#" className="fsoc" title="GitHub"><i className="bi bi-github"></i></a>
                <a href="#" className="fsoc" title="YouTube"><i className="bi bi-youtube"></i></a>
                <a href="#" className="fsoc" title="Facebook"><i className="bi bi-facebook"></i></a>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="ft-head">Services</div>
              <ul className="ft-links">
                <li><Link to="/services#web"><i className="bi bi-chevron-right"></i>Web Development</Link></li>
                <li><Link to="/services#enterprise"><i class="bi bi-chevron-right"></i>Enterprise Software</Link></li>
                <li><Link to="/services#fintech"><i className="bi bi-chevron-right"></i>Financial Software</Link></li>
                <li><Link to="/services#mobile"><i className="bi bi-chevron-right"></i>Mobile Apps</Link></li>
                <li><Link to="/services#healthcare"><i className="bi bi-chevron-right"></i>Healthcare IT</Link></li>
                <li><Link to="/services#compliance"><i className="bi bi-chevron-right"></i>AML &amp; Compliance</Link></li>
                <li><Link to="/services#cloud"><i className="bi bi-chevron-right"></i>Cloud &amp; AI</Link></li>
              </ul>
            </div>

            <div className="col-6 col-lg-2">
              <div className="ft-head">Company</div>
              <ul className="ft-links">
                <li><Link to="/about"><i className="bi bi-chevron-right"></i>About NovuLabs</Link></li>
                <li><Link to="/portfolio"><i className="bi bi-chevron-right"></i>Portfolio</Link></li>
                <li><Link to="/industries"><i className="bi bi-chevron-right"></i>Industries</Link></li>
                <li><Link to="/solutions"><i className="bi bi-chevron-right"></i>Solutions</Link></li>
                <li><Link to="/contact"><i className="bi bi-chevron-right"></i>Contact Us</Link></li>
                <li><Link to="/contact#contact-process"><i className="bi bi-chevron-right"></i>How We Work</Link></li>
              </ul>
            </div>

            <div className="col-lg-4">
              <div className="ft-head">Subscribe For Updates</div>
              <p className="ft-tag" style={{ marginBottom: '18px' }}>
                Monthly fintech, compliance &amp; enterprise tech insights. No spam.
              </p>
              <form className="ft-subscribe-form" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  className="ft-sub-input" 
                  placeholder="Email Address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
                <button 
                  type="submit" 
                  className="btn-grad ft-sub-btn"
                  style={{
                    background: subscribed ? 'linear-gradient(135deg,#C9A84C,#E8C96A)' : '',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {subscribed ? '✓ Subscribed!' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
          <div className="ft-bot">
            <div className="ft-copy">© 2026 NovuLabs Technology Pvt Ltd. All rights reserved.</div>
            <div className="ft-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
