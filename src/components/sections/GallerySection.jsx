import React from 'react';

export default function GallerySection({ onSelectPhoto }) {
  const moments = [
    {
      id: 1,
      src: '/images/moment1.avif',
      alt: 'Moments - Serendipity & Blossom',
      style: {
        top: '12%',
        left: '2%',
        transform: 'rotate(-8deg)'
      }
    },
    {
      id: 2,
      src: '/images/moment2.avif',
      alt: 'Moments - Promise & Roses',
      style: {
        top: '8%',
        right: '4%',
        transform: 'rotate(-7deg)'
      }
    },
    {
      id: 3,
      src: '/images/moment3.avif',
      alt: 'Moments - Sacred Vows',
      style: {
        bottom: '10%',
        left: '6%',
        transform: 'rotate(-5deg)'
      }
    },
    {
      id: 4,
      src: '/images/moment4.avif',
      alt: 'Moments - Forever Together',
      style: {
        bottom: '8%',
        right: '2%',
        transform: 'rotate(6deg)'
      }
    }
  ];

  return (
    <section
      id="gallery"
      className="relative w-full min-h-[85vh] lg:min-h-screen py-16 sm:py-20 lg:py-24 px-4 sm:px-8 bg-[#F7EAD7] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Center Typography & Editorial Description */}
      <div className="z-10 text-center max-w-sm sm:max-w-md mx-auto select-none px-4">

        {/* Section Heading: "Moments So Far" */}
        <h2 className="flex items-baseline justify-center text-[#580C1B] leading-none mb-3 sm:mb-4 select-none">
          <span className="font-luxurious text-5xl sm:text-6xl md:text-7xl -mr-1">M</span>
          <span className="font-instrument text-3xl sm:text-4xl md:text-5xl tracking-wide">oments</span>
          <span className="w-2 sm:w-3 inline-block" />
          <span className="font-luxurious text-5xl sm:text-6xl md:text-7xl -mr-1">S</span>
          <span className="font-instrument text-3xl sm:text-4xl md:text-5xl tracking-wide">o</span>
          <span className="w-2 sm:w-3 inline-block" />
          <span className="font-instrument text-3xl sm:text-4xl md:text-5xl tracking-wide">Far</span>
        </h2>

        {/* Description */}
        <p className="font-inter text-[#580C1B] text-xs sm:text-[13px] md:text-sm leading-snug font-normal max-w-[290px] sm:max-w-[340px] mx-auto text-center opacity-90">
          A small collection of memories before the engagement day the glances, journeys, and quiet celebrations that shaped everything they are about to begin.
        </p>

      </div>

      {/* Desktop View: Perfectly spaced corner floating moments with crisp white borders */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none w-full h-full">
        {moments.map((item) => (
          <div
            key={item.id}
            className="absolute pointer-events-auto transition-transform duration-300"
            style={item.style}
          >
            {/* Crisp White Polaroid Frame */}
            <div
              onClick={() => onSelectPhoto && onSelectPhoto(item)}
              className="bg-white p-2.5 sm:p-3 shadow-[0_12px_28px_rgba(71,1,1,0.14)] cursor-pointer select-none"
            >
              <div className="w-44 sm:w-48 lg:w-48 xl:w-52 aspect-square overflow-hidden bg-stone-100">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile/Tablet View: Royal Vintage Coverflow-style Scroll */}
      <div className="lg:hidden w-full mt-10 overflow-x-auto snap-x snap-mandatory flex gap-6 px-[15vw] sm:px-[25vw] pb-12 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {moments.map((item, idx) => {
          // Add subtle alternating rotation to give it a natural scattered feel
          const rotation = idx % 2 === 0 ? '-rotate-1' : 'rotate-1';
          
          return (
            <div
              key={item.id}
              className="flex-none w-[70vw] sm:w-[50vw] max-w-[280px] snap-center shrink-0 flex justify-center transition-all duration-500 ease-out"
            >
              {/* Royal Vintage Polaroid Card */}
              <div
                onClick={() => onSelectPhoto && onSelectPhoto(item)}
                className={`bg-[#FDFBF7] p-3 pb-4 sm:p-4 sm:pb-5 rounded-sm shadow-[0_15px_40px_rgba(71,1,1,0.18)] border border-[#E4E2B8]/80 cursor-pointer select-none w-full relative transform transition-transform duration-300 active:scale-95 ${rotation}`}
              >
                {/* Top Pin */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <img src="/images/pin.avif" alt="pin" className="w-8 h-8 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]" />
                </div>
                
                {/* Photo */}
                <div className="w-full aspect-[4/5] overflow-hidden bg-stone-200 relative z-10 border border-[#470101]/10">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Vintage Warmth Overlay */}
                  <div className="absolute inset-0 bg-[#E4E2B8]/10 mix-blend-overlay pointer-events-none" />
                </div>
                
                {/* Bottom Numbering */}
                <div className="mt-3 sm:mt-4 flex justify-center items-center gap-3">
                  <div className="w-6 h-[1px] bg-[#470101]/30"></div>
                  <span className="font-luxurious text-[#470101] text-xl opacity-80 leading-none mt-1">
                    {`0${idx + 1}`}
                  </span>
                  <div className="w-6 h-[1px] bg-[#470101]/30"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
