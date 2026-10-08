import React from 'react';

const LOOKBOOK_DATA = [
  {
    id: 'engagement',
    event: 'THE ENGAGEMENT',
    rule: 'PASTELS ONLY',
    description: 'Soft pastels, elegant silhouettes.',
    palette: [
      { name: 'Blush Pink', hex: '#F9E0E3' },
      { name: 'Mint Green', hex: '#E2F0CB' },
      { name: 'Powder Blue', hex: '#B5D3E7' },
      { name: 'Soft Lavender', hex: '#E6E6FA' }
    ]
  },
  {
    id: 'after-dark',
    event: 'AFTER DARK',
    rule: 'MAXIMUM BLING',
    description: 'More sparkle, more glamour.',
    palette: [
      { name: 'Onyx Black', hex: '#1A1A1A' },
      { name: 'Silver Shimmer', hex: '#C0C0C0' },
      { name: 'Gold Glitz', hex: '#D4AF37' },
      { name: 'Midnight Navy', hex: '#192841' }
    ]
  },
  {
    id: 'fiesta',
    event: 'FIESTA DE AMOR',
    rule: 'THE BRIGHTER, THE BETTER',
    description: 'Bold colours, festive energy.',
    palette: [
      { name: 'Vibrant Red', hex: '#E3242B' },
      { name: 'Sunny Yellow', hex: '#FFD700' },
      { name: 'Tropical Teal', hex: '#008080' },
      { name: 'Hot Magenta', hex: '#FF00FF' }
    ]
  }
];

import { motion } from 'framer-motion';

export default function DressCodeSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section 
      id="dress-code"
      className="relative w-full bg-[#580C1B] text-[#F7EAD7] py-20 sm:py-24 md:py-28 lg:py-32 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden selection:bg-[#F7EAD7] selection:text-[#580C1B]"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 0%, #680E1F 0%, #460612 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header: The Lookbook */}
        <motion.div 
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[#F7EAD7] flex items-baseline justify-center select-none leading-none">
            <span className="font-luxurious text-6xl sm:text-7xl md:text-[80px] lg:text-[88px] leading-none -mr-1 drop-shadow-md">
              L
            </span>
            <span className="font-instrument text-4xl sm:text-5xl md:text-[54px] lg:text-[60px] font-normal leading-none tracking-wide uppercase drop-shadow-sm">
              OOKBOOK
            </span>
          </h2>
          <p className="mt-4 sm:mt-5 text-[#F7EAD7]/80 text-sm sm:text-base md:text-lg font-inter font-normal tracking-tight opacity-90">
            A Palette For Every Celebration
          </p>
        </motion.div>

        {/* 3 Column Grid for Events (Pantone Cards) */}
        <motion.div 
          className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 md:gap-6 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {LOOKBOOK_DATA.map((item) => (
            <motion.div 
              key={item.id} 
              variants={cardVariants}
              className="group flex flex-col bg-[#FDFBF7] p-3 sm:p-4 rounded-sm shadow-[0_20px_50px_rgba(30,2,2,0.5)] relative"
            >

              {/* Top Text Area */}
              <div className="pt-10 pb-8 px-4 text-center z-10 flex-grow flex flex-col justify-center items-center">
                <h3 className="font-instrument text-4xl sm:text-[42px] text-[#580C1B] mb-4 leading-none px-2 tracking-tight">
                  {item.event}
                </h3>
                <p className="font-inter text-sm sm:text-[15px] font-bold tracking-tight text-[#C89B53] mb-1.5 uppercase">
                  {item.rule}
                </p>
                <p className="font-inter text-sm sm:text-[15px] text-[#580C1B]/85 font-medium tracking-tight leading-snug max-w-[220px]">
                  {item.description}
                </p>
              </div>

              {/* Bottom Static Color Palette */}
              <div className="w-full flex h-32 sm:h-36 rounded-sm overflow-hidden z-10 border border-[#470101]/10">
                {item.palette.map((swatch, idx) => (
                  <div
                    key={idx}
                    className="flex-1 border-r border-[#FDFBF7]/30 last:border-r-0"
                    style={{ backgroundColor: swatch.hex }}
                  />
                ))}
              </div>
              
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
