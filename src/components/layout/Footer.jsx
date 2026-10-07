import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Footer() {
  const containerRef = useRef(null);

  // Background Parallax mapped to scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });
  
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.05]);

  const frameVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1.4, 
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.25,
        delayChildren: 0.3
      } 
    }
  };

  const photoVariants = {
    hidden: { scale: 1.3, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 2.2, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const textRevealVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[75vh] min-h-[550px] max-h-[800px] flex flex-col items-center justify-center overflow-hidden bg-[#1A1A1A]"
    >
      {/* Background image covering the entire footer with parallax */}
      <motion.img
        src="/images/IMG_3070.avif"
        alt="Couple walking"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
        style={{ scale: bgScale, willChange: 'transform' }}
      />

      {/* Subtle overlay for better blending */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

      {/* Center content container - The Lace Frame */}
      <motion.div 
        variants={frameVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="relative z-10 w-[85%] max-w-[320px] sm:max-w-[360px] md:max-w-[420px]"
      >
        {/* Frame Image */}
        <img
          src="/images/lastpatch.avif"
          alt="Decorative Lace Frame"
          className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative z-0"
        />

        {/* Content placed perfectly inside the frame using absolute positioning and percentage based inset/padding */}
        <div className="absolute top-[13%] left-[20%] right-[16%] bottom-[13%] z-10 flex flex-col items-center justify-start">

          {/* Couple's Black and White Photo with Cinematic Dolly-Zoom */}
          <div className="w-[88%] aspect-[4/5] overflow-hidden mb-3 sm:mb-4 mx-auto relative border border-[#6B1B2C]/10">
            <motion.img
              variants={photoVariants}
              style={{ willChange: 'transform, opacity' }}
              src="/images/DSC07611.avif"
              alt="Couple Portrait"
              className="w-full h-full object-cover object-center absolute inset-0"
            />
          </div>

          {/* Couple's Names: Elegant Mask Reveal */}
          <div className="flex-1 flex flex-col items-center justify-start w-full mt-1">
            <div className="overflow-hidden pb-0.5">
              <motion.h3 
                variants={textRevealVariants}
                className="text-[#6B1B2C] text-2xl sm:text-3xl md:text-3xl text-center leading-[1.1] tracking-wide uppercase"
              >
                <span className="font-luxurious text-4xl sm:text-4xl md:text-5xl">M</span>
                <span className="font-instrument">anav &</span>
              </motion.h3>
            </div>
            <div className="overflow-hidden pt-0.5 pb-1">
              <motion.h3 
                variants={textRevealVariants}
                className="text-[#6B1B2C] text-2xl sm:text-3xl md:text-3xl text-center leading-[1.1] tracking-wide uppercase"
              >
                <span className="font-luxurious text-4xl sm:text-4xl md:text-5xl">K</span>
                <span className="font-instrument">rishi</span>
              </motion.h3>
            </div>
          </div>

        </div>
      </motion.div>

      {/* Simple signature at bottom */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        viewport={{ once: true }}
        className="absolute bottom-4 sm:bottom-6 z-10 text-[10px] sm:text-xs font-inter tracking-widest uppercase font-medium text-white/50"
      >
        Created by <a href="https://rudhramenterprises.com" target='_blank' className="underline hover:text-white transition-colors duration-300">Rudhram enterprises</a>
      </motion.div>
    </section>
  );
}
