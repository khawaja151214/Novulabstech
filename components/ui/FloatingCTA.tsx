"use client";

import Link from 'next/link';

const FloatingCTA: React.FC = () => {
  return (
    <Link
      href="/contact"
      className="fcta"
      aria-label="Contact us"
    >
      <i className="bi bi-chat-dots-fill"></i>
    </Link>
  );
};

export default FloatingCTA;
