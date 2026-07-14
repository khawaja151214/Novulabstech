import React from 'react';
import { Link } from 'react-router-dom';

const FloatingCTA = () => {
  return (
    <Link 
      to="/contact" 
      className="fcta" 
      title="Consult Us"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none'
      }}
    >
      <i className="bi bi-chat-dots-fill"></i>
    </Link>
  );
};

export default FloatingCTA;
