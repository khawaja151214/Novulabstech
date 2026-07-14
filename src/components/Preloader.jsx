import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Fades out after 1.4 seconds (matches original website timing)
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1400);

    // Completely unmounts 600ms later after the fade transition completes
    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div 
      id="preloader" 
      className={fadeOut ? 'hidden' : ''}
      style={{
        transition: 'opacity 0.6s ease, visibility 0.6s ease'
      }}
    >
      <div className="pl-logo">NovuLabs</div>
      <div className="pl-bar"></div>
      <div className="pl-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Preloader;
