
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function StorySection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Moves the pin down slightly as you scroll down, creating parallax
  const pinY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative w-full py-20 sm:py-24 md:py-28 lg:py-32 flex items-center justify-center overflow-hidden"
    >
      {/* Background Wedding Couple Image (bg3.avif) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/IMG_3070.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "40% 45%",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Subtle vignette/warm overlay to enrich contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Center Parchment Card Container */}
      <motion.div
        className="relative z-10 w-[88%] xs:w-[85%] sm:w-[78%] md:w-[65%] lg:w-[50%] max-w-[510px] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 120 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
              staggerChildren: 0.3,
              delayChildren: 0.4
            }
          }
        }}
      >

        {/* Torn Parchment Paper Background */}
        <img
          src="/images/paper.avif"
          alt="Our Story Paper"
          className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] select-none pointer-events-none"
        />

        {/* Top Wax Seal Pin with Parallax */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none select-none p-2"
          style={{
            top: '-10%',
            width: '30%', // Slightly larger to compensate for padding
            y: pinY
          }}
        >
          <img
            src="/images/pin.avif"
            alt="Wax Seal"
            className="w-full h-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]"
          />
        </motion.div>

        {/* Content Centered on the Paper */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 xs:px-7 sm:px-10 md:px-12 lg:px-14 pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-10 md:pb-12 text-center">

          {/* Section Title: "Our Story" */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="flex items-baseline justify-center text-[#470101] leading-none mb-3 sm:mb-5 md:mb-6 -mt-2 sm:-mt-4 md:-mt-6 select-none drop-shadow-sm"
          >
            <span className="font-luxurious text-5xl sm:text-6xl md:text-7xl lg:text-8xl -mr-1">O</span>
            <span className="font-instrument text-[22px] sm:text-3xl md:text-4xl lg:text-[42px] tracking-widest uppercase">UR</span>
            <span className="w-2 sm:w-3 md:w-3.5 inline-block" />
            <span className="font-luxurious text-5xl sm:text-6xl md:text-7xl lg:text-8xl -mr-1">S</span>
            <span className="font-instrument text-[22px] sm:text-3xl md:text-4xl lg:text-[42px] tracking-widest uppercase">TORY</span>
          </motion.h2>

          {/* Story Body Text */}
          <div className="max-w-[200px] xs:max-w-[280px] sm:max-w-[340px] md:max-w-[300px] text-[#470101] font-inter text-[14px] xs:text-[11px] sm:text-[13px] md:text-[16px] leading-[1.5] sm:leading-[1.55] font-normal tracking-tight text-center">
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="mb-3 sm:mb-4 tracking-tight leading-none"
            >
              We’ve finally reached the stage where “when are you guys getting engaged?” has an answer!
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="mb-4 sm:mb-5 tracking-tight leading-none "
            >
              After plenty of conversations, countless laughs, a little bit of chaos, and a rather successful decision to keep choosing each other…
            </motion.p>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="flex flex-col items-center justify-center mb-1"
            >
              <div className="text-xl sm:text-2xl md:text-3xl text-[#470101] leading-none mb-2">
                <span className="font-luxurious text-3xl sm:text-4xl md:text-5xl">M</span>
                <span className="font-instrument">anvendrasinh </span>
                <span className="font-luxurious text-2xl sm:text-3xl mx-1">&amp;</span>
                <span className="font-luxurious text-3xl sm:text-4xl md:text-5xl">K</span>
                <span className="font-instrument">risha</span>
              </div>
              <p className="font-normal tracking-tight leading-none">
                are officially making it engagement-official
              </p>
            </motion.div>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
