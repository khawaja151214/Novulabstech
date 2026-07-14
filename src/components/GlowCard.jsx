import React, { useRef } from 'react';

const GlowCard = ({ children, className = '', style = {} }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(93,224,230,0.09) 0%, rgba(255,255,255,0.86) 42%, rgba(255,255,255,0.62) 100%)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.background = '';
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transition: 'background 0.15s ease'
      }}
    >
      {children}
    </div>
  );
};

export default GlowCard;
