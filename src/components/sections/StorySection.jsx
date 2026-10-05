import React from 'react';

export default function StorySection() {
  return (
    <section 
      id="story" 
      className="relative w-full min-h-screen py-16 sm:py-24 md:py-28 flex items-center justify-center overflow-hidden"
    >
      {/* Background Wedding Couple Image (bg3.avif) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/images/bg3.avif')",
        }}
      >
        {/* Subtle vignette/warm overlay to enrich contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Center Parchment Card Container */}
      <div className="relative z-10 w-[92%] sm:w-[86%] max-w-[430px] sm:max-w-[480px] md:max-w-[510px] mx-auto">
        
        {/* Torn Parchment Paper Background */}
        <img
          src="/images/paper.avif"
          alt="Our Story Paper"
          className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] select-none pointer-events-none"
        />

        {/* Top Wax Seal Pin */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none select-none"
          style={{
            top: '-10%',
            width: '28%',
          }}
        >
          <img
            src="/images/pin.avif"
            alt="Wax Seal"
            className="w-full h-auto drop-shadow-[0_8px_18px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Content Centered on the Paper */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8 sm:px-12 md:px-14 pt-8 sm:pt-10 md:pt-12 pb-8 sm:pb-12 text-center">
          
          {/* Section Title: "Our Story" - Made larger and shifted up */}
          <h2 className="flex items-baseline justify-center text-[#470101] leading-none mb-4 sm:mb-6 -mt-3 sm:-mt-5 md:-mt-6 select-none drop-shadow-sm">
            <span className="font-luxurious text-6xl sm:text-7xl md:text-8xl -mr-1">O</span>
            <span className="font-instrument text-3xl sm:text-4xl md:text-[42px] tracking-widest uppercase">UR</span>
            <span className="w-2.5 sm:w-3.5 inline-block" />
            <span className="font-luxurious text-6xl sm:text-7xl md:text-8xl -mr-1">S</span>
            <span className="font-instrument text-3xl sm:text-4xl md:text-[42px] tracking-widest uppercase">TORY</span>
          </h2>

          {/* Story Body Text */}
          <div className="max-w-[310px] sm:max-w-[350px] md:max-w-[350px] text-[#470101] font-inter text-[12px] sm:text-[13.5px] md:text-[14.5px] leading-[1.35] sm:leading-[1.4] font-normal tracking-tight text-center">
            <p>
              Once upon a time, two hearts found each other in the bustling city of Maplewood. From the moment they met at a cozy coffee shop, sparks flew. Their shared love for adventure and laughter brought them closer, leading to countless memories from spontaneous road trips to quiet evenings under the stars. Now, as they prepare to embark on the journey of marriage, they cherish the love and support of their friends and family, who have been with them every step of the way. Together, they are excited to write the next chapter of their lives.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
