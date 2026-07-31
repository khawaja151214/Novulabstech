"use client";

import React, { useState, useEffect } from 'react';

/**
 * Premium preloader.
 * Statically rendered on the server to prevent FOUC (content flash).
 * Transitions and unmounts on the client after hydration using stable useEffect,
 * preventing any React hydration mismatch errors.
 */
export default function Preloader() {
  const [fadeOut, setFadeOut] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    // Only runs on the client after successful hydration
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1400);

    const removeTimer = setTimeout(() => {
      setMounted(false);
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div 
      id="preloader-ssr" 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999999,
        background: 'linear-gradient(135deg, #050301 0%, #0d0b09 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '18px',
        opacity: fadeOut ? 0 : 1,
        visibility: fadeOut ? 'hidden' : 'visible',
        transition: 'opacity 0.6s ease, visibility 0.6s ease',
        pointerEvents: fadeOut ? 'none' : 'all'
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
}
