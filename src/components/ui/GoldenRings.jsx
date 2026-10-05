import React from 'react';

export default function GoldenRings() {
  return (
    <div 
      className="absolute bottom-6 sm:bottom-8 md:bottom-10 right-6 sm:right-8 md:right-12 z-20 w-20 sm:w-24 md:w-28 lg:w-32 select-none pointer-events-none"
      style={{
        transform: 'rotate(-12deg)',
      }}
    >
      <img
        src="/images/rings.avif"
        alt="Wedding Rings"
        className="w-full h-auto object-contain"
      />
    </div>
  );
}
