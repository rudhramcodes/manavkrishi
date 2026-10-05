import React from 'react';

export default function FrameCouple() {
  return (
    <div 
      className="absolute top-8 sm:top-10 right-0 z-20 w-36 sm:w-44 md:w-52 lg:w-60 pointer-events-none"
      style={{
        transform: 'rotate(30deg)',
      }}
    >
      <div className="relative w-full aspect-[765/1024]">
        {/* Couple photograph positioned inside the inner transparent cutout */}
        <div 
          className="absolute overflow-hidden"
          style={{
            left: '15.0%',
            top: '15.1%',
            width: '68.1%',
            height: '71.3%',
            zIndex: 1
          }}
        >
          <img
            src="/images/couple.jpg"
            alt="Couple Portrait"
            className="w-full h-full object-cover object-center grayscale contrast-115 brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/10 pointer-events-none" />
        </div>

        {/* Ornate Golden Frame Overlay */}
        <img
          src="/images/frame.avif"
          alt="Golden Frame"
          className="relative z-10 w-full h-full pointer-events-none select-none"
        />
      </div>
    </div>
  );
}
