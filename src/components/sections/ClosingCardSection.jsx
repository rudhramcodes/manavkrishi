import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';

export default function ClosingCardSection() {
  const containerRef = useRef(null);
  const reducedMotion = useReducedMotion();

  // Track the scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Add buttery physics so the scroll feels completely fluid
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 15,
    restDelta: 0.001
  });

  // Hand rises from completely off-screen (100%) to its final position (0%)
  const handY = useTransform(smoothProgress, [0, 1], ["80%", "0%"]);
  
  return (
    <section 
      ref={containerRef}
      id="celebration-card"
      className="relative w-full h-[85vh] min-h-[550px] max-h-[850px] overflow-hidden flex items-end justify-center select-none bg-black"
    >
      {/* Static Background Image zoomed in on mobile to hide built-in black bars */}
      <img
        src="/images/bg2.avif"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center scale-[1.25] md:scale-[1.1]"
      />
      
      {/* Subtle depth vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40 pointer-events-none" />

      {/* Centered Hand linked to scroll */}
      <div className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none overflow-hidden">
        <motion.img loading="lazy" decoding="async"
          style={{ y: reducedMotion ? 0 : handY }}
          src="/images/hand.avif"
          alt="We Look Forward To Celebrating This Special Day With You"
          className="h-[90%] sm:h-[95%] md:h-[98%] max-h-[750px] w-auto object-contain object-bottom pointer-events-auto cursor-pointer drop-shadow-[0_25px_45px_rgba(0,0,0,0.8)]"
        />
      </div>
    </section>
  );
}
