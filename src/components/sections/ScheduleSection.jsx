import React from 'react';
import { Wine, Bell, UtensilsCrossed, Sparkles } from 'lucide-react';

export default function ScheduleSection() {
  const events = [
    {
      time: '16:00',
      title: 'Arrival and Welcome',
      icon: <Wine className="w-4 h-4 text-[#C89B53]" />
    },
    {
      time: '16:30',
      title: 'Exchange of Vows',
      icon: <Bell className="w-4 h-4 text-[#C89B53]" />
    },
    {
      time: '17:00',
      title: 'Wedding Dinner',
      icon: <UtensilsCrossed className="w-4 h-4 text-[#C89B53]" />
    },
    {
      time: '17:30',
      title: 'Celebration and Dancing',
      icon: <Sparkles className="w-4 h-4 text-[#C89B53]" />
    }
  ];

  return (
    <section
      id="schedule"
      className="relative w-full min-h-[90vh] md:min-h-screen py-20 sm:py-28 md:py-32 px-6 sm:px-12 bg-[#520917] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(ellipse 90% 70% at 30% 40%, #680E1F 0%, #460612 100%)',
      }}
    >
      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-12 sm:gap-16 lg:gap-24">

        {/* Left Column: Heading & Vintage TV */}
        <div className="flex flex-col items-center md:items-start text-left">

          {/* Section Heading: "Schedule of events" */}
          <div className="select-none text-center md:text-left mb-12 sm:mb-16 md:mb-20">
            <h2 className="leading-none text-[#F7EAD7]">
              <div className="flex items-baseline justify-center md:justify-start">
                <span className="font-luxurious text-6xl sm:text-7xl md:text-8xl -mr-1">S</span>
                <span className="font-instrument text-4xl sm:text-5xl md:text-6xl tracking-wide">chedule of</span>
              </div>
              <div className="font-instrument text-4xl sm:text-5xl md:text-6xl tracking-wide -mt-2 sm:-mt-4">
                events
              </div>
            </h2>
          </div>

          {/* Vintage TV with Playing Video */}
          <div className="w-64 sm:w-72 md:w-80 lg:w-[320px] aspect-[512/360] relative select-none drop-shadow-[0_20px_45px_rgba(0,0,0,0.65)]">

            {/* Video Container inside TV Screen Cutout */}
            <div
              className="absolute overflow-hidden bg-black flex items-center justify-center"
              style={{
                left: '9.57%',
                top: '10.83%',
                width: '63.48%',
                height: '69.44%',
                borderRadius: '8% / 10%',
                zIndex: 1
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/images/tv_poster.jpg"
                className="w-full h-full object-cover object-center"
              >
                <source src="/videos/pinterest_dance_full.mp4" type="video/mp4" />
                <source src="https://v1.pinimg.com/videos/iht/hls/b5/82/21/b58221abf387e516297aac750cc6ea1b.m3u8" type="application/x-mpegURL" />
                <img
                  src="/images/tv_poster.jpg"
                  alt="Couple Celebration"
                  className="w-full h-full object-cover"
                />
              </video>

              {/* CRT Glass Reflection & Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/10 pointer-events-none" />
            </div>

            {/* Vintage TV Overlay Frame (tv.avif) */}
            <img
              src="/images/tv.avif"
              alt="Vintage Television"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none"
              style={{ zIndex: 2 }}
            />
          </div>

        </div>

        {/* Right Column: Scalloped Ticket Card */}
        <div className="w-full md:w-auto flex justify-center">
          <div
            className="relative w-full max-w-[320px] sm:max-w-[350px] md:max-w-[370px] px-8 sm:px-10 py-12 sm:py-14 select-none drop-shadow-[0_20px_45px_rgba(0,0,0,0.4)]"
            style={{
              background: `
                radial-gradient(circle 28px at 0 0, transparent 28px, #F2E9DC 28.5px) top left,
                radial-gradient(circle 28px at 100% 0, transparent 28px, #F2E9DC 28.5px) top right,
                radial-gradient(circle 28px at 0 100%, transparent 28px, #F2E9DC 28.5px) bottom left,
                radial-gradient(circle 28px at 100% 100%, transparent 28px, #F2E9DC 28.5px) bottom right
              `,
              backgroundSize: '51% 51%',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Timeline List */}
            <div className="relative flex flex-col space-y-8 sm:space-y-9 pl-3 sm:pl-4">

              {/* Continuous vertical connector line */}
              <div
                className="absolute left-[17px] sm:left-[21px] top-3.5 bottom-12 w-[1px] bg-[#D4C3AF] pointer-events-none"
              />

              {events.map((event, idx) => (
                <div key={idx} className="relative flex items-start gap-4 sm:gap-5 z-10">

                  {/* Timeline Dot */}
                  <div className="flex items-center justify-center flex-shrink-0 pt-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#580C1B] ring-2 ring-[#F2E9DC]" />
                  </div>

                  {/* Content: Icon + Time + Title */}
                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-2 mb-1">
                      {event.icon}
                      <span className="font-instrument text-2xl sm:text-3xl text-[#580C1B] leading-none">
                        {event.time}
                      </span>
                    </div>
                    <span className="font-inter text-xs sm:text-[13px] text-[#580C1B] font-normal leading-snug">
                      {event.title}
                    </span>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
