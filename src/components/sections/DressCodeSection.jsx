import React from 'react';

const LOOKBOOK_DATA = [
  {
    id: 'engagement',
    event: 'THE ENGAGEMENT',
    rule: 'PASTELS ONLY',
    description: 'Soft pastels, elegant silhouettes.',
    palette: [
      { name: 'Blush Pink', hex: '#F9E0E3' },
      { name: 'Mint Green', hex: '#E2F0CB' },
      { name: 'Powder Blue', hex: '#B5D3E7' },
      { name: 'Soft Lavender', hex: '#E6E6FA' }
    ]
  },
  {
    id: 'after-dark',
    event: 'AFTER DARK',
    rule: 'MAXIMUM BLING',
    description: 'More sparkle, more glamour.',
    palette: [
      { name: 'Onyx Black', hex: '#1A1A1A' },
      { name: 'Silver Shimmer', hex: '#C0C0C0' },
      { name: 'Gold Glitz', hex: '#D4AF37' },
      { name: 'Midnight Navy', hex: '#192841' }
    ]
  },
  {
    id: 'fiesta',
    event: 'FIESTA DE AMOR',
    rule: 'THE BRIGHTER, THE BETTER',
    description: 'Bold colours, festive energy.',
    palette: [
      { name: 'Vibrant Red', hex: '#E3242B' },
      { name: 'Sunny Yellow', hex: '#FFD700' },
      { name: 'Tropical Teal', hex: '#008080' },
      { name: 'Hot Magenta', hex: '#FF00FF' }
    ]
  }
];

export default function DressCodeSection() {
  return (
    <section 
      id="dress-code"
      className="relative w-full bg-[#580C1B] text-[#F7EAD7] py-20 sm:py-24 md:py-28 lg:py-32 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden selection:bg-[#F7EAD7] selection:text-[#580C1B]"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header: The Lookbook */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-[#F7EAD7] flex items-baseline justify-center select-none leading-none">
            {/* <span className="font-luxurious text-6xl sm:text-7xl md:text-[80px] lg:text-[88px] leading-none -mr-1">
              T
            </span>
            <span className="font-instrument text-4xl sm:text-5xl md:text-[54px] lg:text-[60px] font-normal leading-none pr-3 sm:pr-4 tracking-wide uppercase">
              HE
            </span> */}
            <span className="font-luxurious text-6xl sm:text-7xl md:text-[80px] lg:text-[88px] leading-none -mr-1">
              L
            </span>
            <span className="font-instrument text-4xl sm:text-5xl md:text-[54px] lg:text-[60px] font-normal leading-none tracking-wide uppercase">
              OOKBOOK
            </span>
          </h2>
          <p className="mt-4 sm:mt-5 text-[#F7EAD7]/80 text-sm sm:text-base md:text-lg font-inter font-normal tracking-tight">
            A Palette For Every Celebration
          </p>
        </div>

        {/* 3 Column Grid for Events */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
          {LOOKBOOK_DATA.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center group">
              
              {/* Event Name */}
              <h3 className="font-instrument text-3xl sm:text-4xl text-[#F7EAD7] mb-3 tracking-wide">
                {item.event}
              </h3>
              
              {/* Rule & Description */}
              <div className="mb-8">
                <p className="font-inter text-sm sm:text-[15px] font-bold tracking-widest uppercase mb-1.5 text-[#C89B53]">
                  {item.rule}
                </p>
                <p className="font-inter text-[13px] sm:text-sm text-[#F7EAD7]/80 font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Color Swatches */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 mt-auto pb-4">
                {item.palette.map((swatch, idx) => (
                  <div
                    key={idx}
                    title={swatch.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#F7EAD7]/20 rounded-full shadow-lg transition-all duration-300 cursor-pointer"
                    style={{ backgroundColor: swatch.hex }}
                  />
                ))}
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
