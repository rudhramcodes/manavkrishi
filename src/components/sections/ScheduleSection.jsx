import { useEffect, useRef } from 'react';
import { Wine, Bell, Sparkles, BellRing, Diamond } from 'lucide-react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

export default function ScheduleSection() {
  const videoRef = useRef(null);
  const videoInView = useInView(videoRef, { amount: 0.1 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    const updatePlayback = () => {
      if (videoInView && !document.hidden && !reducedMotion) {
        if (!video.getAttribute('src')) video.src = '/videos/manav.mp4';
        video.play().catch(() => {}); // Keep the poster if autoplay is unavailable.
      } else {
        video.pause();
      }
    };

    updatePlayback();
    document.addEventListener('visibilitychange', updatePlayback);
    return () => {
      document.removeEventListener('visibilitychange', updatePlayback);
      video.pause();
    };
  }, [videoInView, reducedMotion]);

  const events = [
    {
      isDate: true,
      title: '13TH OCTOBER'
    },
    {
      time: '12:00 PM onwards',
      title: 'FIESTA DE AMOR',
      subtitle: 'A Mexican Poolside Celebration',
      icon: <Wine className="w-4 h-4 text-[#C89B53]" />
    },
    {
      time: '8:00 PM onwards',
      title: 'AFTER DARK',
      subtitle: 'An After-Hours Celebration',
      icon: <Sparkles className="w-4 h-4 text-[#C89B53]" />
    },
    {
      isDate: true,
      title: '14TH OCTOBER'
    },
    {
      time: '11:00 AM onwards',
      title: 'THE ENGAGEMENT',
      icon: <img src="/images/diamond-ring.png" alt="Rings" className="w-5 h-5 object-contain" />
    }
  ];

  // Variants for TV Power On
  const tvVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  // Variants for the Ticket Card Parent
  const ticketVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  // Variants for each event inside the Ticket
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.3, y: 15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 220, damping: 14 }
    }
  };

  return (
    <section
      id="schedule"
      className="relative w-full py-16 sm:py-20 md:py-24 px-6 sm:px-12 bg-[#520917] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(ellipse 90% 70% at 30% 40%, #680E1F 0%, #460612 100%)',
      }}
    >
      <div className="max-w-5xl w-full mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 sm:gap-16 lg:gap-24">

        {/* Left Column: Heading & Vintage TV */}
        <motion.div 
          className="flex flex-col items-center lg:items-start text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={tvVariants}
        >

          {/* Section Heading: "Schedule of events" */}
          <div className="select-none text-center lg:text-left mb-12 sm:mb-16 md:mb-20">
            <h2 className="leading-none text-[#F7EAD7]">
              <div className="flex items-baseline justify-center lg:justify-start">
                <span className="font-luxurious text-6xl sm:text-7xl md:text-8xl -mr-1">S</span>
                <span className="font-instrument text-4xl sm:text-5xl md:text-6xl tracking-wide">chedule of</span>
              </div>
              <div className="font-instrument text-4xl sm:text-5xl md:text-6xl tracking-wide -mt-2 sm:-mt-4">
                events
              </div>
            </h2>
          </div>

          {/* Vintage TV with Playing Video */}
          <div className="w-64 sm:w-72 md:w-80 lg:w-[320px] aspect-[512/360] relative select-none">

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
                ref={videoRef}
                preload="none"
                loop
                muted
                playsInline
                poster="/images/tv_poster.jpg"
                className="w-full h-full object-cover object-[center_30%]"
              >
                <img loading="lazy" decoding="async"
                  src="/images/tv_poster.jpg"
                  alt="Couple Celebration"
                  className="w-full h-full object-cover"
                />
              </video>

              {/* CRT Glass Reflection & Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/10 pointer-events-none" />
            </div>

            {/* Vintage TV Overlay Frame (tv.avif) */}
            <img loading="lazy" decoding="async"
              src="/images/tv.avif"
              alt="Vintage Television"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none"
              style={{ zIndex: 2 }}
            />
          </div>

        </motion.div>

        {/* Right Column: Scalloped Ticket Card */}
        <motion.div 
          className="w-full lg:w-auto flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={ticketVariants}
        >
          <div
            className="relative w-full max-w-[320px] sm:max-w-[350px] md:max-w-[370px] px-8 sm:px-10 py-12 sm:py-14 select-none"
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
                className="absolute left-[17px] sm:left-[21px] top-4 bottom-0 w-[1px] bg-[#D4C3AF] pointer-events-none"
              />

              {events.map((event, idx) => (
                event.isDate ? (
                  <motion.div variants={itemVariants} key={idx} className="relative flex items-center gap-4 sm:gap-5 z-10 pt-2 pb-1">
                    <div className="flex items-center justify-center flex-shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#C89B53] ring-2 ring-[#F2E9DC]" />
                    </div>
                    <span className="font-instrument text-2xl sm:text-3xl text-[#580C1B] leading-none uppercase tracking-wide">
                      {event.title}
                    </span>
                  </motion.div>
                ) : (
                  <motion.div variants={itemVariants} key={idx} className="relative flex items-start gap-4 sm:gap-5 z-10">
                    {/* Timeline Dot */}
                    <div className="flex items-center justify-center flex-shrink-0 pt-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#580C1B] ring-2 ring-[#F2E9DC]" />
                    </div>

                    {/* Content: Icon + Time + Title */}
                    <div className="flex flex-col text-left">
                      <div className="flex items-center gap-2 mb-1">
                        {event.icon}
                        <span className="font-instrument text-[19px] sm:text-[21px] text-[#580C1B] leading-none">
                          {event.time}
                        </span>
                      </div>
                      <span className="font-instrument text-sm sm:text-base font-normal text-[#580C1B] leading-snug">
                        {event.title}
                      </span>
                      {event.subtitle && (
                        <span className="font-inter text-[11.5px] sm:text-xs text-[#580C1B]/80 font-medium leading-snug mt-1 italic tracking-tight">
                          {event.subtitle}
                        </span>
                      )}
                    </div>
                  </motion.div>
                )
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
