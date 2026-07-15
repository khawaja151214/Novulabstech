import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import Portfolio from './pages/Portfolio';
import Team from './pages/Team';
import Contact from './pages/Contact';

// Scroll to top helper on route transitions
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Global AOS Animation Hook
const AOSInitializer = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 640,
        easing: 'cubic-bezier(.4,0,.2,1)',
        once: true,
        offset: 72
      });
    }
  }, []);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AOSInitializer />
      
      {/* Global Visual Assets */}
      <Preloader />
      <ScrollProgress />
      <CustomCursor />
      
      {/* Site Header */}
      <Navbar />
      
      {/* Dynamic Views */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      {/* Site Footer */}
      <Footer />
      
      {/* Contact floating bubble */}
      <FloatingCTA />
    </Router>
  );
}

export default App;
