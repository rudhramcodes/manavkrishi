import { ChevronDown } from 'lucide-react';
import FoldText from '../ui/FoldText';
import { COUPLE_DATA } from '../../data/invitationData';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden pt-24 pb-12 bg-cover bg-no-repeat bg-[77%] md:bg-[85%] lg:bg-[20%_40%]"
      style={{
        backgroundImage: "url('/images/DSC08125.avif')"
      }}
    >
      {/* Background subtle vignette */}
      <div className="absolute inset-0 pointer-events-none" />

      {/* Main Centerpiece Typography */}
      <div className="relative z-20 text-center w-full flex-1 md:flex-none max-w-4xl mx-auto px-4 flex flex-col items-center justify-between md:justify-center pb-8 md:pb-0">

        {/* Top Group for Mobile: Subtitle & Date */}
        <div className="flex flex-col items-center justify-start mt-4 md:mt-0">
          {/* Subtitle */}
          <p className="font-instrument text-2xl sm:text-3xl md:text-4xl text-[#E4E2B8] mb-2 font-normal drop-shadow-md">
            An Engagement Celebration
          </p>

          {/* Date */}
          <p className="font-inter text-lg sm:text-xl md:text-2xl text-[#E4E2B8] tracking-wide mb-0 md:mb-6 font-normal drop-shadow-sm">
            {new Date(COUPLE_DATA.eventDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' }).toUpperCase()}
          </p>
        </div>

        {/* Groom & Bride Names with Luxurious Script First Letters */}
        <div className="flex-1 md:flex-none flex flex-col justify-center items-center my-2 sm:my-3 gap-5 select-none -mt-10 md:mt-0">

          {/* manvendra & */}
          <div className="flex items-baseline justify-center gap-0 md:gap-2 tracking-tighter leading-none !overflow-visible">
            <FoldText
              text="M"
              className="font-luxurious text-8xl sm:text-9xl md:text-[11rem] lg:text-[13rem] text-[#E4E2B8] leading-none  !overflow-visible"
              style={{ lineHeight: '0.75' }}
              splitBy="char" hinge="bottom" duration={1.2} stagger={0.08}
            />
            <FoldText
              text="anvendra &"
              className="font-instrument uppercase text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] text-[#E4E2B8] font-normal tracking-tighter !overflow-visible"
              splitBy="char" hinge="bottom" duration={1} stagger={0.05}
            />
          </div>

          {/* Krisha */}
          <div className="flex items-baseline justify-center gap-2 md:gap-8 tracking-tighter leading-none -mt-4 sm:-mt-6 md:-mt-8 !overflow-visible">
            <FoldText
              text="K"
              className="font-luxurious text-8xl sm:text-9xl md:text-[11rem] lg:text-[13rem] text-[#E4E2B8] leading-none -mr-1 sm:-mr-3 md:-mr-4 tracking-tighter !overflow-visible"
              style={{ lineHeight: '0.75' }}
              splitBy="char" hinge="bottom" duration={1.2} stagger={0.08}
            />
            <FoldText
              text="risha"
              className="font-instrument uppercase text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] text-[#E4E2B8] font-normal tracking-tighter !overflow-visible"
              splitBy="char" hinge="bottom" duration={1} stagger={0.05}
            />
          </div>

        </div>

        {/* Status Tagline */}
        <div className="mt-auto md:mt-6 mb-8 md:mb-0">
          <p className="font-inter text-sm sm:text-base md:text-lg tracking-tight text-[#E4E2B8] font-normal">
            A morning of love, <br /> legacy & new beginnings.
          </p>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#details"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-[#E4E2B8]/70 hover:text-[#E4E2B8] transition-colors duration-200 cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-widest mb-1 font-inter">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
