import React from 'react';

export default function StorySection() {
  return (
    <section
      id="story"
      className="relative w-full py-20 sm:py-24 md:py-28 lg:py-32 flex items-center justify-center overflow-hidden"
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
      <div className="relative z-10 w-[88%] xs:w-[85%] sm:w-[78%] md:w-[65%] lg:w-[50%] max-w-[510px] mx-auto">

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
            width: '26%',
          }}
        >
          <img
            src="/images/pin.avif"
            alt="Wax Seal"
            className="w-full h-auto drop-shadow-[0_8px_18px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Content Centered on the Paper */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 xs:px-7 sm:px-10 md:px-12 lg:px-14 pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-10 md:pb-12 text-center">

          {/* Section Title: "Our Story" */}
          <h2 className="flex items-baseline justify-center text-[#470101] leading-none mb-3 sm:mb-5 md:mb-6 -mt-2 sm:-mt-4 md:-mt-6 select-none drop-shadow-sm">
            <span className="font-luxurious text-5xl sm:text-6xl md:text-7xl lg:text-8xl -mr-1">O</span>
            <span className="font-instrument text-[22px] sm:text-3xl md:text-4xl lg:text-[42px] tracking-widest uppercase">UR</span>
            <span className="w-2 sm:w-3 md:w-3.5 inline-block" />
            <span className="font-luxurious text-5xl sm:text-6xl md:text-7xl lg:text-8xl -mr-1">S</span>
            <span className="font-instrument text-[22px] sm:text-3xl md:text-4xl lg:text-[42px] tracking-widest uppercase">TORY</span>
          </h2>

          {/* Story Body Text */}
          <div className="max-w-[240px] xs:max-w-[270px] sm:max-w-[320px] md:max-w-[350px] text-[#470101] font-inter text-[10.5px] xs:text-[11px] sm:text-[13px] md:text-[14px] leading-[1.5] sm:leading-[1.55] font-normal tracking-tight text-center">
            <p className="mb-2 sm:mb-3">
              Some journeys are beautifully written in the stars, brought to life through the grace of time and the blessings of loved ones. What began as a meeting of two families has naturally blossomed into a profound connection of two hearts.
            </p>
            <p>
              Rooted in shared values and guided by the warmth of our traditions, we have found in each other a lifelong companion. As we stand at the threshold of our forever, we invite you to witness a celebration of destiny and the beautiful beginning of our new chapter together.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
