"use client";

import { useEffect } from 'react';

declare global {
  interface Window {
    AOS: any;
  }
}

const AOSInitializer: React.FC = () => {
  useEffect(() => {
    const initAOS = () => {
      if (window.AOS) {
        window.AOS.init({
          duration: 640,
          easing: 'cubic-bezier(.4,0,.2,1)',
          once: true,
          offset: 72
        });
      }
    };

    if (window.AOS) {
      initAOS();
    } else {
      const interval = setInterval(() => {
        if (window.AOS) {
          initAOS();
          clearInterval(interval);
        }
      }, 100);
      
      setTimeout(() => clearInterval(interval), 5000);
    }
  }, []);

  return null;
};

export default AOSInitializer;
