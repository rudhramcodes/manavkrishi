import React from 'react';
import { COUPLE_DATA } from '../../data/invitationData';

export default function Footer() {
  return (
    <footer className="relative w-full h-[75vh] min-h-[550px] max-h-[800px] flex flex-col items-center justify-center overflow-hidden bg-[#1A1A1A]">
      {/* Background image covering the entire footer */}
      <img
        src="/images/bg3.avif"
        alt="Couple walking"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
      />

      {/* Subtle overlay for better blending */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none" />

      {/* Center content container - The Lace Frame */}
      <div className="relative z-10 w-[85%] max-w-[320px] sm:max-w-[360px] md:max-w-[420px] transition-transform duration-700">
        {/* Frame Image */}
        <img
          src="/images/lastpatch.avif"
          alt="Decorative Lace Frame"
          className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative z-0"
        />

        {/* Content placed perfectly inside the frame using absolute positioning and percentage based inset/padding */}
        <div className="absolute top-[13%] left-[20%] right-[16%] bottom-[13%] z-10 flex flex-col items-center justify-start">

          {/* Couple's Black and White Photo */}
          <div className="w-[88%] aspect-[4/5] overflow-hidden mb-3 sm:mb-4 mx-auto">
            <img
              src="/images/lastimg.avif"
              alt="Couple Portrait"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Couple's Names in script font */}
          <div className="flex-1 flex items-start justify-center w-full">
            <h3 className="text-[#6B1B2C] text-2xl sm:text-3xl md:text-3xl text-center leading-[1.2] tracking-wide uppercase">
              <span className="font-luxurious text-4xl sm:text-4xl md:text-5xl">M</span>
              <span className="font-instrument">anav &</span>
              <br />
              <span className="font-luxurious text-4xl sm:text-4xl md:text-5xl">K</span>
              <span className="font-instrument">rishi</span>
            </h3>
          </div>

        </div>
      </div>

      {/* Simple signature at bottom */}
      <div className="absolute bottom-4 sm:bottom-6 z-10 text-[10px] sm:text-xs font-inter tracking-tight uppercase font-semibold">
        Created by <a href="https://rudhramenterprises.com" target='_blank' className="underline">Rudhram enterprises</a>
      </div>
    </footer>
  );
}
