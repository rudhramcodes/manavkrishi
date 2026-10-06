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
          <div className="w-full max-w-lg mx-auto space-y-10 select-none">
            
            <div className="space-y-2">
              <h3 className="font-inter uppercase tracking-tight text-xs sm:text-sm text-[#470101]/80 font-medium mb-6">
                With The Blessings Of
              </h3>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-[#470101]"><span className="font-luxurious text-5xl sm:text-6xl">H</span> <span className="font-instrument text-3xl sm:text-4xl pl-1">is Parents</span></p>
                <p className="font-instrument text-[1.1rem] sm:text-xl text-[#470101] leading-relaxed">
                  Himanshu Girishchandra Vansia &<br/>Aaradhana Himanshu Vansia
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-[#470101]"><span className="font-luxurious text-5xl sm:text-6xl">H</span> <span className="font-instrument text-3xl sm:text-4xl pl-1">is Grandparents</span></p>
                <p className="font-instrument text-[1.1rem] sm:text-xl text-[#470101] leading-relaxed">
                  Girishchandra Pratapsinhji Vansia &<br/>Nirmalaba Girishchandra Vansia
                </p>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-[#470101]/15 space-y-6">
              <p className="font-instrument text-lg sm:text-xl text-[#470101]/90 leading-relaxed">
                With the love of those who raised him,<br/>
                and the blessings of those who came before.
              </p>
            </div>

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
