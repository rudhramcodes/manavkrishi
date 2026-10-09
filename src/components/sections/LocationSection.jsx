import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export default function LocationSection() {
  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Photo shifts inside the frame to create the "window" parallax effect
  const photoY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section 
      id="location"
      ref={sectionRef}
      className="relative w-full min-h-[85vh] md:min-h-screen py-20 sm:py-28 md:py-36 px-6 sm:px-12 bg-[#F7EAD7] flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-5xl w-full mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 sm:gap-16 lg:gap-24">
        
        {/* Left Column: Ornate Golden Frame with Parallax Photo */}
        <motion.div 
          className="relative w-[280px] xs:w-[300px] sm:w-[340px] md:w-[360px] lg:w-[420px] aspect-[765/1024] select-none flex-shrink-0 drop-shadow-[0_10px_25px_rgba(71,1,1,0.15)] !overflow-visible"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
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
            <motion.img loading="lazy" decoding="async"
              src="https://pearlresortsilvassa.com/wp-content/uploads/2024/04/Resort-by-night.jpg"
              alt="St. Mary's Chapel Wedding Venue"
              className="w-full h-full object-cover object-center scale-[1.35]" // Scaled up to allow room for parallax shifting
              style={{ y: reducedMotion ? 0 : photoY }}
            />
          </div>

          {/* Golden Ornate Frame (frame.avif) */}
          <img loading="lazy" decoding="async"
            src="/images/frame.avif"
            alt="Golden Frame"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
            style={{ zIndex: 2 }}
          />
        </motion.div>

        {/* Right Column: Location Details & Map Action */}
        <motion.div 
          className="flex flex-col items-center justify-center text-center max-w-sm sm:max-w-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1, 
              transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
            }
          }}
        >
          
          {/* Section Heading: "Location" */}
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut"} }
            }}
            className="flex items-baseline justify-center text-[#580C1B] leading-none mb-3 sm:mb-4 select-none"
          >
            <span className="font-luxurious text-6xl sm:text-7xl md:text-8xl -mr-1">L</span>
            <span className="font-instrument text-4xl sm:text-5xl md:text-6xl tracking-wide">ocation</span>
          </motion.h2>

          {/* Venue Name */}
          <motion.h3 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut"} }
            }}
            className="font-instrument text-2xl sm:text-3xl text-[#580C1B] mb-4 sm:mb-5 tracking-wide uppercase"
          >
            Pearl Resort
          </motion.h3>

          
          {/* Location Description */}
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut"} }
            }}
            className="font-inter text-[#580C1B] text-sm sm:text-base leading-snug font-normal max-w-[280px] sm:max-w-[320px] text-center mb-6 sm:mb-8"
          >
            Join us for an afternoon of celebration, elegance and cherished moments.
          </motion.p>

          {/* "View in google map" Button */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut"} }
            }}
          >
            <a
              href="https://www.google.com/maps/place/Pearl+Resort/@20.2617777,72.9208084,17z/data=!3m1!4b1!4m9!3m8!1s0x3be0cd1c51cf950d:0xc1398f840f0dd9a4!5m2!4m1!1i2!8m2!3d20.2617777!4d72.9208084!16s%2Fg%2F1hd_jz0rf!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MTAwNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#580C1B] hover:bg-[#470101] text-white font-inter text-xs sm:text-[13px] font-medium tracking-normal px-7 sm:px-8 py-2.5 sm:py-3 transition-colors duration-200 cursor-pointer"
            >
              View in google map
            </a>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
