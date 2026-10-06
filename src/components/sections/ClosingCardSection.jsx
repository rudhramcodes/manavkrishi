import React from 'react';

export default function ClosingCardSection() {
  return (
    <section 
      id="celebration-card"
      className="relative w-full h-[85vh] min-h-[550px] max-h-[850px] overflow-hidden flex items-end justify-center select-none bg-black"
    >
      {/* Background Image zoomed in on mobile to hide built-in black bars */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-[1.25] md:scale-[1.1]"
        style={{ backgroundImage: "url('/images/bg2.avif')" }}
      />
      
      {/* Subtle depth vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

      {/* Centered Hand holding the invitation card, rising from the bottom */}
      <div className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none">
        <img
          src="/images/hand.avif"
          alt="We Look Forward To Celebrating This Special Day With You"
          className="h-[90%] sm:h-[95%] md:h-[98%] max-h-[750px] w-auto object-contain object-bottom transition-transform duration-700 ease-out pointer-events-auto cursor-pointer drop-shadow-[0_25px_45px_rgba(0,0,0,0.7)]"
        />
      </div>
    </section>
  );
}
