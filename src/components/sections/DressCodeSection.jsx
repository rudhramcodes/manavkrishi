import React from 'react';

const WOMEN_PALETTE = [
  { name: 'Velvet Burgundy', hex: '#690001' },
  { name: 'Warm Champagne', hex: '#DDC09D' },
  { name: 'Soft Ivory', hex: '#F9F3E9' },
  { name: 'Dusty Rose', hex: '#C36B78' },
];

const MEN_PALETTE = [
  { name: 'Classic Black', hex: '#000000' },
  { name: 'Charcoal Grey', hex: '#303030' },
  { name: 'Espresso Brown', hex: '#412414' },
];

export default function DressCodeSection() {
  return (
    <section 
      id="dress-code"
      className="relative w-full bg-[#580C1B] text-[#F7EAD7] py-20 sm:py-24 md:py-28 lg:py-32 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden selection:bg-[#F7EAD7] selection:text-[#580C1B]"
    >
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10 lg:gap-16 items-start">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="flex flex-col items-center md:items-start w-full">
            {/* Header: Dress Code & Subtitle */}
            <div className="text-center md:text-left mb-6 sm:mb-8 md:mb-10">
              <h2 className="text-[#F7EAD7] flex items-baseline justify-center md:justify-start flex-wrap select-none leading-none">
                <span className="inline-flex items-baseline mr-3 sm:mr-4">
                  <span className="font-luxurious text-6xl sm:text-7xl md:text-[80px] lg:text-[88px] leading-none">
                    D
                  </span>
                  <span className="font-instrument text-5xl sm:text-6xl md:text-[70px] lg:text-[78px] leading-none">
                    ress
                  </span>
                </span>
                <span className="inline-flex items-baseline">
                  <span className="font-luxurious text-6xl sm:text-7xl md:text-[80px] lg:text-[88px] leading-none">
                    C
                  </span>
                  <span className="font-instrument not-italic text-4xl sm:text-5xl md:text-[54px] lg:text-[60px] font-normal leading-none -ml-0.5">
                    ode
                  </span>
                </span>
              </h2>
              <p className="mt-2 sm:mt-3 text-[#F7EAD7]/90 text-sm sm:text-base md:text-[17px] font-inter font-normal tracking-tight">
                A Palette For The Evening
              </p>
            </div>

            {/* Left Frame: Women / Bridesmaids */}
            <div className="w-full max-w-[360px] sm:max-w-[400px] md:max-w-[430px] lg:max-w-[470px] mx-auto md:mx-0">
              {/* Ornate Frame Container */}
              <div className="relative w-full aspect-square select-none">
                {/* Photo inside the transparent aperture cutout of frame3 */}
                <div 
                  className="absolute overflow-hidden"
                  style={{
                    left: '15.33%',
                    top: '29.20%',
                    width: '69.24%',
                    height: '42.29%',
                    zIndex: 1
                  }}
                >
                  <img
                    src="/images/dress_women_fit.jpg"
                    alt="Women Dress Code Palette"
                    className="w-full h-full object-cover object-[center_35%] transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Baroque Gold Ornate Frame Overlay */}
                <img
                  src="/images/frame3.avif"
                  alt="Golden Frame"
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
                  style={{ zIndex: 2 }}
                />
              </div>

              {/* 4 Color Swatches for Women */}
              <div className="flex items-center justify-center gap-3 sm:gap-3.5 mt-5 sm:mt-6">
                {WOMEN_PALETTE.map((swatch, idx) => (
                  <div
                    key={idx}
                    title={swatch.name}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border border-[#F7EAD7]/40 shadow-sm transition-transform duration-200 hover:scale-110 cursor-pointer"
                    style={{ backgroundColor: swatch.hex }}
                  />
                ))}
              </div>
            </div>
          </div>


          {/* ================= RIGHT COLUMN ================= */}
          <div className="flex flex-col items-center md:items-end w-full md:-mt-8 lg:-mt-12">
            {/* Right Frame: Men / Groomsmen (staggered higher up) */}
            <div className="w-full max-w-[360px] sm:max-w-[400px] md:max-w-[430px] lg:max-w-[470px] mx-auto md:mr-0 md:ml-auto">
              {/* Ornate Frame Container */}
              <div className="relative w-full aspect-square select-none">
                {/* Photo inside the transparent aperture cutout of frame3 */}
                <div 
                  className="absolute overflow-hidden"
                  style={{
                    left: '15.33%',
                    top: '29.20%',
                    width: '69.24%',
                    height: '42.29%',
                    zIndex: 1
                  }}
                >
                  <img
                    src="/images/dress_men_fit.jpg"
                    alt="Men Dress Code Palette"
                    className="w-full h-full object-cover object-[center_28%] transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Baroque Gold Ornate Frame Overlay */}
                <img
                  src="/images/frame3.avif"
                  alt="Golden Frame"
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
                  style={{ zIndex: 2 }}
                />
              </div>

              {/* 3 Color Swatches for Men */}
              <div className="flex items-center justify-center gap-3 sm:gap-3.5 mt-5 sm:mt-6">
                {MEN_PALETTE.map((swatch, idx) => (
                  <div
                    key={idx}
                    title={swatch.name}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border border-[#F7EAD7]/40 shadow-sm transition-transform duration-200 hover:scale-110 cursor-pointer"
                    style={{ backgroundColor: swatch.hex }}
                  />
                ))}
              </div>

              {/* Note: Kindly Avoid White, That Seat Is Already Taken */}
              <div className="mt-10 sm:mt-12 md:mt-14 text-center md:text-right w-full pr-0 md:pr-4">
                <p className="font-inter text-sm sm:text-[15px] md:text-base text-[#F7EAD7] font-normal leading-relaxed tracking-tight">
                  Kindly Avoid White, That Seat<br className="hidden sm:inline" /> Is Already Taken
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
