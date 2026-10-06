import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function GallerySection({ onSelectPhoto }) {
  const sectionRef = useRef(null);
  
  // Track scroll progress for the section
  // "start end" = top of section hits bottom of viewport
  // "center center" = center of section hits center of viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"]
  });

  // Scroll-driven transforms for Photo 1 (Top Left)
  const x1 = useTransform(scrollYProgress, [0, 1], ['35vw', '0vw']);
  const y1 = useTransform(scrollYProgress, [0, 1], ['30vh', '0vh']);
  const r1 = useTransform(scrollYProgress, [0, 1], [0, -8]);
  const s1 = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const o1 = useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 1]);

  // Scroll-driven transforms for Photo 2 (Top Right)
  const x2 = useTransform(scrollYProgress, [0, 1], ['-35vw', '0vw']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['35vh', '0vh']);
  const r2 = useTransform(scrollYProgress, [0, 1], [0, -7]);
  const s2 = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const o2 = useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 1]);

  // Scroll-driven transforms for Photo 3 (Bottom Left)
  const x3 = useTransform(scrollYProgress, [0, 1], ['35vw', '0vw']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['-30vh', '0vh']);
  const r3 = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const s3 = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const o3 = useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 1]);

  // Scroll-driven transforms for Photo 4 (Bottom Right)
  const x4 = useTransform(scrollYProgress, [0, 1], ['-35vw', '0vw']);
  const y4 = useTransform(scrollYProgress, [0, 1], ['-30vh', '0vh']);
  const r4 = useTransform(scrollYProgress, [0, 1], [0, 6]);
  const s4 = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const o4 = useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 1]);

  const desktopTransforms = [
    { x: x1, y: y1, rotate: r1, scale: s1, opacity: o1 },
    { x: x2, y: y2, rotate: r2, scale: s2, opacity: o2 },
    { x: x3, y: y3, rotate: r3, scale: s3, opacity: o3 },
    { x: x4, y: y4, rotate: r4, scale: s4, opacity: o4 },
  ];

  const moments = [
    {
      id: 1,
      src: '/images/moment1.avif',
      alt: 'Moments - Serendipity & Blossom',
      style: { top: '12%', left: '2%' }
    },
    {
      id: 2,
      src: '/images/moment2.avif',
      alt: 'Moments - Promise & Roses',
      style: { top: '8%', right: '4%' }
    },
    {
      id: 3,
      src: '/images/moment3.avif',
      alt: 'Moments - Sacred Vows',
      style: { bottom: '10%', left: '6%' }
    },
    {
      id: 4,
      src: '/images/moment4.avif',
      alt: 'Moments - Forever Together',
      style: { bottom: '8%', right: '2%' }
    }
  ];

  // Variants for center typography
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } 
    }
  };

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative w-full min-h-[85vh] lg:min-h-screen py-16 sm:py-20 lg:py-24 px-4 sm:px-8 bg-[#F7EAD7] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Center Typography & Editorial Description */}
      <motion.div 
        className="z-10 text-center max-w-sm sm:max-w-md mx-auto select-none px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={textVariants}
      >

        {/* Section Heading: "Moments So Far" */}
        <motion.h2 variants={textVariants} className="flex items-baseline justify-center text-[#580C1B] leading-none mb-3 sm:mb-4 select-none">
          <span className="font-luxurious text-5xl sm:text-6xl md:text-7xl -mr-1">M</span>
          <span className="font-instrument text-3xl sm:text-4xl md:text-5xl tracking-wide">oments</span>
          <span className="w-2 sm:w-3 inline-block" />
          <span className="font-luxurious text-5xl sm:text-6xl md:text-7xl -mr-1">S</span>
          <span className="font-instrument text-3xl sm:text-4xl md:text-5xl tracking-wide">o</span>
          <span className="w-2 sm:w-3 inline-block" />
          <span className="font-instrument text-3xl sm:text-4xl md:text-5xl tracking-wide">Far</span>
        </motion.h2>

        {/* Description */}
        <motion.p variants={textVariants} className="font-inter text-[#580C1B] text-xs sm:text-[13px] md:text-sm leading-snug font-normal max-w-[290px] sm:max-w-[340px] mx-auto text-center opacity-90">
          A small collection of memories before the engagement day the glances, journeys, and quiet celebrations that shaped everything they are about to begin.
        </motion.p>

      </motion.div>

      {/* Desktop View: Scroll-Driven Center Scatter */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none w-full h-full">
        {moments.map((item, idx) => {
          const t = desktopTransforms[idx];
          return (
            <motion.div
              key={item.id}
              className="absolute pointer-events-auto"
              style={{ 
                ...item.style, 
                x: t.x, 
                y: t.y, 
                rotate: t.rotate, 
                scale: t.scale, 
                opacity: t.opacity 
              }}
            >
              {/* Crisp White Polaroid Frame */}
              <div
                onClick={() => onSelectPhoto && onSelectPhoto(item)}
                className="bg-white p-2.5 sm:p-3 shadow-[0_12px_28px_rgba(71,1,1,0.14)] cursor-pointer select-none transition-transform hover:scale-105 hover:z-50"
              >
                <div className="w-44 sm:w-48 lg:w-48 xl:w-52 aspect-square overflow-hidden bg-stone-100">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile/Tablet View: Stagger Slide In */}
      <motion.div 
        className="lg:hidden w-full mt-10 overflow-x-auto snap-x snap-mandatory flex gap-6 px-[15vw] sm:px-[25vw] pb-12 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2, delayChildren: 0.4 } }
        }}
      >
        {moments.map((item, idx) => {
          // Add subtle alternating rotation to give it a natural scattered feel
          const rotation = idx % 2 === 0 ? '-rotate-1' : 'rotate-1';
          
          return (
            <motion.div
              key={item.id}
              className="flex-none w-[70vw] sm:w-[50vw] max-w-[280px] snap-center shrink-0 flex justify-center"
              variants={{
                hidden: { opacity: 0, x: 50, scale: 0.9 },
                visible: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
              }}
            >
              {/* Royal Vintage Polaroid Card */}
              <div
                onClick={() => onSelectPhoto && onSelectPhoto(item)}
                className={`bg-[#FDFBF7] p-3 pb-4 sm:p-4 sm:pb-5 rounded-sm shadow-[0_15px_40px_rgba(71,1,1,0.18)] border border-[#E4E2B8]/80 cursor-pointer select-none w-full relative transform transition-transform duration-300 active:scale-95 ${rotation}`}
              >
                {/* Top Pin */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <img src="/images/pin.avif" alt="pin" className="w-8 h-8 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]" />
                </div>
                
                {/* Photo */}
                <div className="w-full aspect-[4/5] overflow-hidden bg-stone-200 relative z-10 border border-[#470101]/10">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Vintage Warmth Overlay */}
                  <div className="absolute inset-0 bg-[#E4E2B8]/10 mix-blend-overlay pointer-events-none" />
                </div>
                
                {/* Bottom Numbering */}
                <div className="mt-3 sm:mt-4 flex justify-center items-center gap-3">
                  <div className="w-6 h-[1px] bg-[#470101]/30"></div>
                  <span className="font-luxurious text-[#470101] text-xl opacity-80 leading-none mt-1">
                    {`0${idx + 1}`}
                  </span>
                  <div className="w-6 h-[1px] bg-[#470101]/30"></div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

    </section>
  );
}
