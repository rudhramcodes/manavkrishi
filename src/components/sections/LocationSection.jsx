import React from 'react';

export default function LocationSection() {
  return (
    <section 
      id="location" 
      className="relative w-full min-h-[85vh] md:min-h-screen py-20 sm:py-28 md:py-36 px-6 sm:px-12 bg-[#F7EAD7] flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-12 sm:gap-16 lg:gap-24">
        
        {/* Left Column: Ornate Golden Frame with Church Photo */}
        <div className="relative w-64 sm:w-72 md:w-80 lg:w-[320px] aspect-[765/1024] select-none flex-shrink-0 drop-shadow-[0_15px_30px_rgba(71,1,1,0.18)]">
          {/* Photo inside the transparent cutout of the frame */}
          <div 
            className="absolute overflow-hidden"
            style={{
              left: '15.16%',
              top: '15.23%',
              width: '67.84%',
              height: '71.09%',
              zIndex: 1
            }}
          >
            <img
              src="/images/location.jpg"
              alt="St. Mary's Chapel Wedding Venue"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Golden Ornate Frame (frame.avif) */}
          <img
            src="/images/frame.avif"
            alt="Golden Frame"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
            style={{ zIndex: 2 }}
          />
        </div>

        {/* Right Column: Location Details & Map Action */}
        <div className="flex flex-col items-center justify-center text-center max-w-sm sm:max-w-md">
          
          {/* Section Heading: "Location" */}
          <h2 className="flex items-baseline justify-center text-[#580C1B] leading-none mb-3 sm:mb-4 select-none">
            <span className="font-luxurious text-6xl sm:text-7xl md:text-8xl -mr-1">L</span>
            <span className="font-instrument text-4xl sm:text-5xl md:text-6xl tracking-wide">ocation</span>
          </h2>

          {/* Venue Name */}
          <h3 className="font-instrument text-2xl sm:text-3xl text-[#580C1B] mb-4 sm:mb-5 tracking-wide uppercase">
            Avadh Utopia, Vapi
          </h3>

          
          {/* Location Description */}
          <p className="font-inter text-[#580C1B] text-sm sm:text-base leading-snug font-normal max-w-[280px] sm:max-w-[320px] text-center mb-6 sm:mb-8">
            Join us for an afternoon of celebration, elegance and cherished moments.
          </p>

          {/* "View in google map" Button */}
          <a
            href="https://maps.google.com/?q=Avadh+Utopia,+Vapi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#580C1B] hover:bg-[#470101] text-white font-inter text-xs sm:text-[13px] font-medium tracking-normal px-7 sm:px-8 py-2.5 sm:py-3 transition-colors duration-200 cursor-pointer"
          >
            View in google map
          </a>

        </div>

      </div>
    </section>
  );
}
