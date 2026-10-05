import React from 'react';
import TicketCard from '../ui/TicketCard';

export default function DetailsSection() {
  return (
    <section id="details" className="relative w-full overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        
        {/* ===================================================================
            LEFT HALF: Light Cream Background (#F7EAD7) with Deep Wine Font (#470101)
            =================================================================== */}
        <div className="bg-[#F7EAD7] text-[#470101] flex flex-col justify-center items-center px-6 sm:px-12 lg:px-16 py-20 lg:py-24 text-center relative z-10">
          <div className="max-w-md mx-auto space-y-8">
            
            {/* Heading: "Dear Friends and Family," */}
            <div className="select-none">
              <h2 className="leading-none text-center">
                <div className="flex items-baseline gap-2 md:gap-3 justify-center">
                  <span 
                    className="font-luxurious text-7xl sm:text-8xl md:text-9xl text-[#470101] leading-none inline-block -mr-2 sm:-mr-3"
                    style={{ lineHeight: '0.8' }}
                  >
                    D
                  </span>
                  <span className="font-instrument text-4xl sm:text-5xl md:text-6xl text-[#470101] font-medium">
                    ear Friends
                  </span>
                </div>
                <div className="font-instrument text-4xl sm:text-5xl md:text-6xl text-[#470101] font-medium -mt-1">
                  and Family,
                </div>
              </h2>
            </div>

            {/* Paragraph Text */}
            <p className="font-inter text-sm sm:text-lg leading-[1.5] md:leading-[1.5] tracking-tight text-[#470101]/90 font-normal max-w-sm sm:max-w-md mx-auto">
              As We Get Ready To Say “I Do,” We Feel Grateful For The Wonderful People In Our Lives. Your Support Means The World To Us, And We Would Be Honored To Have You With Us As We Begin Our Life Together.
            </p>

          </div>
        </div>

        {/* ===================================================================
            RIGHT HALF: Dreamy B&W Couple Photo Background with Centered Ticket Card
            =================================================================== */}
        <div 
          className="relative min-h-[640px] lg:min-h-screen w-full flex items-center justify-center p-6 sm:p-10 lg:p-12 overflow-hidden"
          style={{
            backgroundImage: "url('/images/section2_bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Subtle dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/25 pointer-events-none" />

          {/* Floating Ticket Card with serrated top and genuine cutout notches */}
          <TicketCard />

        </div>

      </div>
    </section>
  );
}
