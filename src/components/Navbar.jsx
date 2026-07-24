import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu + dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  const hasDarkHero = true;
  const navbarClasses = ` navbar navbar-expand-lg ${hasDarkHero && !scrolled ? 'nav-inv' : ''} ${scrolled ? 'scrolled' : ''}`;

  const handleServicesClick = (e) => {
    // On mobile (collapsed menu visible), toggle dropdown instead of navigating away
    if (window.innerWidth < 992) {
      e.preventDefault();
      setServicesOpen((prev) => !prev);
    }
  };

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
          aria-expanded={mobileMenuOpen}
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
            <li className={`nav-item dropdown ${servicesOpen ? 'show' : ''}`}>
              <NavLink
                className="nav-link dropdown-toggle"
                to="/services"
                id="servicesDropdown"
                data-bs-toggle="dropdown"
                aria-expanded={servicesOpen}
                onClick={handleServicesClick}
              >
                Services
              </NavLink>
              <ul
                className={`dropdown-menu ${servicesOpen ? 'show' : ''}`}
                aria-labelledby="servicesDropdown"
              >
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