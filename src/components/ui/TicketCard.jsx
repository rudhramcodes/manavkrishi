import React from 'react';

export default function TicketCard() {
  const W = 320;
  const H = 620;
  const notchY = 460;
  const notchR = 18;
  const bottomR = 28;

  // Scalloped / serrated ticket tear top edge (32 teeth of 10px each)
  let topTeeth = 'M 0 4';
  for (let x = 0; x < W; x += 10) {
    topTeeth += ` q 2.5 -4 5 0 q 2.5 4 5 0`;
  }

  // Exact vector path with scalloped top, side circular notches, and rounded bottom corners
  const pathD = `
    ${topTeeth}
    L ${W} ${notchY - notchR}
    A ${notchR} ${notchR} 0 0 0 ${W} ${notchY + notchR}
    L ${W} ${H - bottomR}
    A ${bottomR} ${bottomR} 0 0 1 ${W - bottomR} ${H}
    L ${bottomR} ${H}
    A ${bottomR} ${bottomR} 0 0 1 0 ${H - bottomR}
    L 0 ${notchY + notchR}
    A ${notchR} ${notchR} 0 0 0 0 ${notchY - notchR}
    L 0 4 Z
  `.replace(/\s+/g, ' ').trim();

  return (
    <div
      className="relative w-[300px] sm:w-[320px] h-[580px] sm:h-[620px] select-none"
      style={{
        filter: 'drop-shadow(0 25px 40px rgba(0, 0, 0, 0.85))'
      }}
    >
      {/* Background SVG Ticket Shape */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 320 620"
      >
        <path d={pathD} fill="#580C1B" />
      </svg>

      {/* Ticket Interactive Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">

        {/* Top Part: Inset Couple Photo + Names */}
        <div>
          {/* Couple Photograph */}
          <div className="pt-5 px-5">
            <div className="w-full h-[260px] sm:h-[280px] overflow-hidden bg-black/30 shadow-sm">
              <img
                src="/images/DSC07770.avif"
                alt="Manav & Krishi"
                className="w-full h-full object-cover object-[center_80%] scale-[2] origin-[50%_55%] translate-y-[-10%]"
              />
            </div>
          </div>

          {/* Couple Names */}
          <div className="text-center text-[#F7EAD7] mt-3 sm:mt-4">
            <div className="text-2xl sm:text-[26px] leading-tight">
              <span className="font-luxurious text-4xl sm:text-5xl text-[#F7EAD7] leading-none inline-block mr-1">
                M
              </span>
              <span className="font-instrument uppercase tracking-[0.1em] text-[#F7EAD7]">
                anav &amp;
              </span>
            </div>
            <div className="text-2xl sm:text-[26px] leading-tight -mt-1 sm:-mt-1.5">
              <span className="font-luxurious text-4xl sm:text-5xl text-[#F7EAD7] leading-none inline-block mr-1">
                K
              </span>
              <span className="font-instrument uppercase tracking-[0.1em] text-[#F7EAD7]">
                rishi
              </span>
            </div>
          </div>
        </div>

        {/* Dotted Perforation Line (aligned with the notches at y=460) */}
        <div
          className="absolute left-6 right-6 border-t border-dotted border-[#F7EAD7]/35 pointer-events-none"
          style={{ top: '74.2%' }}
        />

        {/* Bottom Part: Event Details */}
        <div
          className="absolute left-6 right-6 text-[#F7EAD7] font-inter pointer-events-auto"
          style={{ top: '77%' }}
        >
          {/* Date & Time Row */}
          <div className="flex items-start justify-between text-xs sm:text-[13px] tracking-wider uppercase font-medium mb-4 sm:mb-5">
            <div className="leading-snug">
              <span>OCTOBER 14,</span>
              <br />
              <span>2026</span>
            </div>
            <div className="text-right">
              <span>11:00 AM</span>
            </div>
          </div>

          {/* Location Full Row */}
          <div className="text-xs sm:text-[13px] tracking-widest uppercase font-medium">
            AVADH UTOPIA, VAPI
          </div>
        </div>

      </div>
    </div>
  );
}
