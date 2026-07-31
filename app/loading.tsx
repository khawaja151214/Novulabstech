import React from 'react';

/**
 * Global Next.js App Router loading boundary.
 * Renders immediately during page compilation, dynamic imports,
 * or Server Component route transitions.
 */
export default function Loading() {
  return (
    <div 
      id="preloader" 
      style={{ 
        background: 'linear-gradient(135deg, #001f3d 0%, #000c1a 100%)',
        opacity: 1,
        visibility: 'visible',
        pointerEvents: 'all',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '18px',
        position: 'fixed',
        inset: 0,
        zIndex: 99999
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
