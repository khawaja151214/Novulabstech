"use client";

import React, { useState, useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mobile, setMobile] = useState(true);

  const requestRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const followerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if it's desktop (width > 768px)
    const checkDevice = () => {
      setMobile(window.innerWidth <= 768);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (window.innerWidth <= 768) {
      return () => {
        window.removeEventListener('resize', checkDevice);
      };
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });

      if (!visible) {
        setVisible(true);
        followerRef.current = { x: e.clientX - 18, y: e.clientY - 18 };
      }
    };

    // Follower ring animation loop
    const animateFollower = () => {
      const targetX = mouseRef.current.x - 18;
      const targetY = mouseRef.current.y - 18;

      followerRef.current.x += (targetX - followerRef.current.x) * 0.12;
      followerRef.current.y += (targetY - followerRef.current.y) * 0.12;

      setFollowerPosition({ x: followerRef.current.x, y: followerRef.current.y });
      requestRef.current = requestAnimationFrame(animateFollower);
    };

    // Event delegation for hovered state
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest('a, button, .gcard, .pcard, .icard, .wcard, .vcard, .tcard, [role="button"]')) {
        setHovered(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest('a, button, .gcard, .pcard, .icard, .wcard, .vcard, .tcard, [role="button"]')) {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    
    requestRef.current = requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(requestRef.current);
    };
  }, [visible]);

  if (mobile || !visible) return null;

  return (
    <>
      <div
        className={`cursor ${hovered ? 'h' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 99999,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: hovered ? 'var(--a1)' : 'var(--p1)',
          transform: `translate(${position.x - 4}px, ${position.y - 4}px) scale(${hovered ? 2.8 : 1})`,
          transition: 'transform 0.1s ease, background 0.2s',
          opacity: 1,
        }}
      />
      <div
        className={`cursor-f ${hovered ? 'h' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 99997,
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          border: `1.5px solid ${hovered ? 'var(--a1)' : 'rgba(93, 224, 230, 0.38)'}`,
          transform: `translate(${followerPosition.x}px, ${followerPosition.y}px) scale(${hovered ? 1.5 : 1})`,
          transition: 'border-color 0.18s ease, transform 0.18s ease',
          opacity: 1,
        }}
      />
    </>
  );
};

export default CustomCursor;
