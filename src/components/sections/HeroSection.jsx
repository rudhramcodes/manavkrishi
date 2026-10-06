import React from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import { COUPLE_DATA } from '../../data/invitationData';
import FrameCouple from '../ui/FrameCouple';
import GoldenRings from '../ui/GoldenRings';
import CountdownTimer from '../ui/CountdownTimer';

export default function HeroSection({ onOpenRsvp }) {
  const downloadCalendarFile = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Viktor & Paula Engagement//EN
BEGIN:VEVENT
SUMMARY:Viktor & Paula's Engagement Celebration
DESCRIPTION:Join us in celebrating the engagement of Viktor and Paula!
LOCATION:The Grand Botanical Estate & Orangery, 184 Rosewood Manor Way
DTSTART:20260902T170000Z
DTEND:20260902T230000Z
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Viktor_Paula_Engagement.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden pt-24 pb-12"
      style={{
        backgroundImage: "url('/images/bg3.avif')",
        backgroundSize: 'cover',
        backgroundPosition: '35%',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background subtle vignette */}
      <div className="absolute inset-0 pointer-events-none" />

      {/* Ornate Golden Frame with Couple Photograph */}
      {/* <FrameCouple /> */}

      {/* Interlocking Golden Wedding Rings */}
      {/* <GoldenRings /> */}

      {/* Main Centerpiece Typography */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4 flex flex-col items-center">
        
        {/* Subtitle */}
        <p className="font-instrument text-2xl sm:text-3xl md:text-4xl text-[#E4E2B8] mb-2 font-normal drop-shadow-md">
          An Engagement Celebration
        </p>

        {/* Date */}
        <p className="font-inter text-lg sm:text-xl md:text-2xl text-[#E4E2B8] tracking-wide mb-4 sm:mb-6 font-normal drop-shadow-sm">
          14 OCTOBER 2026
        </p>

        {/* Groom & Bride Names with Luxurious Script First Letters */}
        <div className="my-2 sm:my-3 flex flex-col gap-5 items-center justify-center select-none">
          
          {/* Manav & */}
          <div className="flex items-baseline justify-center gap-4 md:gap-8 tracking-tight leading-none">
            <span 
              className="font-luxurious text-8xl sm:text-9xl md:text-[11rem] lg:text-[13rem] text-[#E4E2B8] leading-none -mr-2 sm:-mr-4 md:-mr-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
              style={{ lineHeight: '0.75' }}
            >
              M
            </span>
            <span className="font-instrument uppercase text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] text-[#E4E2B8] font-normal tracking-[0.08em] drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              anav &
            </span>
          </div>

          {/* Krishi */}
          <div className="flex items-baseline justify-center gap-3 md:gap-8 tracking-tight leading-none -mt-4 sm:-mt-6 md:-mt-8">
            <span 
              className="font-luxurious text-8xl sm:text-9xl md:text-[11rem] lg:text-[13rem] text-[#E4E2B8] leading-none -mr-1 sm:-mr-3 md:-mr-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
              style={{ lineHeight: '0.75' }}
            >
              K
            </span>
            <span className="font-instrument uppercase text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] text-[#E4E2B8] font-normal tracking-[0.08em] drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              rishi
            </span>
          </div>

        </div>

        {/* Status Tagline */}
        <div className="mt-4 sm:mt-6">
          <p className="font-inter text-sm sm:text-base md:text-lg tracking-tight text-[#E4E2B8] font-normal">
            A morning of love, <br /> legacy & new beginnings.
          </p>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <a 
        href="#details" 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-[#E4E2B8]/70 hover:text-[#E4E2B8] transition-colors duration-200 cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-widest mb-1 font-inter">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
