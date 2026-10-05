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
      className="relative w-full min-h-[85vh] lg:min-h-screen py-16 sm:py-20 lg:py-24 px-4 sm:px-8 bg-[#F7EAD7] flex items-center justify-center overflow-hidden"
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
          A small collection of memories before the wedding day the glances, journeys, and quiet celebrations that shaped everything they are about to begin.
        </p>

      </div>

      {/* Desktop View: Perfectly spaced corner floating moments with crisp white borders */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none w-full h-full">
        {moments.map((item) => (
          <div
            key={item.id}
            className="absolute pointer-events-auto transition-transform duration-300 hover:scale-105 hover:z-30"
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

      {/* Mobile/Tablet View: Responsive 2x2 Grid with white borders */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:hidden w-full max-w-sm sm:max-w-md mx-auto z-10 px-2 mt-8">
        {moments.map((item, idx) => {
          const mobileRotation = idx % 2 === 0 ? '-rotate-3' : 'rotate-3';
          return (
            <div
              key={item.id}
              className={`flex justify-center ${mobileRotation}`}
            >
              <div
                onClick={() => onSelectPhoto && onSelectPhoto(item)}
                className="bg-white p-2 sm:p-2.5 shadow-[0_8px_20px_rgba(71,1,1,0.12)] cursor-pointer select-none"
              >
                <div className="w-32 sm:w-40 aspect-square overflow-hidden bg-stone-100">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
