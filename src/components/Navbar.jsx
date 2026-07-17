import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Determine if page has dark hero (virtually all pages in this site have dark hero sections at top)
  const hasDarkHero = true; 
  const navbarClasses = `navbar navbar-expand-lg ${hasDarkHero && !scrolled ? 'nav-inv' : ''} ${scrolled ? 'scrolled' : ''}`;

  return (
    <nav className={navbarClasses}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/logo.png" alt="NovuLabs" className="nav-logo" />
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`} id="nvmenu">
          <ul className="navbar-nav mx-auto gap-1">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/services" id="servicesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li><Link className="dropdown-item" to="/services#web">Web Development</Link></li>
                <li><Link className="dropdown-item" to="/services#enterprise">Enterprise Software</Link></li>
                <li><Link className="dropdown-item" to="/services#fintech">Financial Solutions</Link></li>
                <li><Link className="dropdown-item" to="/services#mobile">Mobile Apps</Link></li>
                <li><Link className="dropdown-item" to="/services#healthcare">Healthcare IT</Link></li>
                <li><Link className="dropdown-item" to="/services#compliance">AML &amp; Compliance</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/solutions">Solutions</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/team">Team</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
          <Link to="/contact" className="nav-cta nav-link ms-lg-3">Get a Consultation</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
