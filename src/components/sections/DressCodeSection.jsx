import { useRef } from 'react';

const ENGAGEMENT_LOOK = {
  id: 'engagement',
  event: 'THE ENGAGEMENT',
  time: '11:00 AM onwards',
  dressCodeLabel: 'THE DRESS CODE',
  rule: '🌸 PASTELS ONLY',
  description: 'Soft pastels, elegant silhouettes.',
  guidelines: [
    {
      target: 'For women',
      text: 'Sarees, gowns or saree-gowns in soft, elegant pastel shades'
    },
    {
      target: 'For men',
      text: 'Suits in refined pastel or light neutral tones.'
    }
  ],
  notes: [
    '“Ladies, no whites please!”',
    '“Gentlemen, no blacks please!”'
  ],
  palette: [
    { name: 'Blush Pink', hex: '#F9E0E3' },
    { name: 'Mint Green', hex: '#E2F0CB' },
    { name: 'Powder Blue', hex: '#B5D3E7' },
    { name: 'Soft Lavender', hex: '#E6E6FA' }
  ]
};

const MAIN_LOOKBOOK_DATA = [
  {
    id: 'fiesta',
    event: 'FIESTA DE AMOR',
    time: '12:00 PM onwards',
    dressCodeLabel: 'THE DRESS CODE',
    rule: 'THE BRIGHTER, THE BETTER',
    description: 'Bold colours, festive energy.',
    palette: [
      { name: 'Vibrant Red', hex: '#E3242B' },
      { name: 'Sunny Yellow', hex: '#FFD700' },
      { name: 'Tropical Teal', hex: '#008080' },
      { name: 'Hot Magenta', hex: '#FF00FF' }
    ]
  },
  {
    id: 'after-dark',
    event: 'AFTER DARK',
    time: '8:00 PM onwards',
    dressCodeLabel: 'THE DRESS CODE',
    rule: 'MAXIMUM BLING',
    description: 'More sparkle, more glamour.',
    palette: [
      { name: 'Onyx Black', hex: '#1A1A1A', image: '/images/black.jpeg' },
      { name: 'Silver Shimmer', hex: '#C0C0C0', image: '/images/silver.jpeg' },
      { name: 'Gold Glitz', hex: '#D4AF37', image: '/images/gold.jpeg' },
      { name: 'Midnight Navy', hex: '#192841', image: '/images/navyblue.jpeg' }
    ]
  },
  {
    id: 'engagement',
    event: 'THE ENGAGEMENT',
    time: '11:00 AM onwards',
    dressCodeLabel: 'THE DRESS CODE',
    rule: 'PASTELS ONLY',
    description: 'Soft pastels, elegant silhouettes.',
    palette: [
      { name: 'Blush Pink', hex: '#F9E0E3' },
      { name: 'Mint Green', hex: '#E2F0CB' },
      { name: 'Powder Blue', hex: '#B5D3E7' },
      { name: 'Soft Lavender', hex: '#E6E6FA' }
    ]
  }
];

import { motion, useInView } from 'framer-motion';

export default function DressCodeSection({ engagementOnly = false }) {
  const looks = engagementOnly ? [ENGAGEMENT_LOOK] : MAIN_LOOKBOOK_DATA;
  const sectionRef = useRef(null);
  const showTexture = useInView(sectionRef, { once: true, margin: '400px' });
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
      ref={sectionRef}
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
            {engagementOnly ? 'A Palette For The Engagement' : 'A Palette For Every Celebration'}
          </p>
        </motion.div>

        {/* Grid for Events (Pantone Cards) */}
        <motion.div 
          className={`w-full grid grid-cols-1 gap-10 md:gap-6 lg:gap-10 ${engagementOnly ? 'max-w-md sm:max-w-lg mx-auto' : 'lg:grid-cols-3 md:grid-cols-2'}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {looks.map((item) => (
            <motion.div 
              key={item.id} 
              variants={cardVariants}
              className="group flex flex-col bg-[#FDFBF7] p-3 sm:p-4 rounded-sm shadow-[0_20px_50px_rgba(30,2,2,0.5)] relative"
            >

              {/* Top Text Area */}
              <div className="pt-8 pb-6 px-4 sm:px-6 text-center z-10 flex-grow flex flex-col items-center">
                <h3 className="font-instrument text-3xl sm:text-[38px] text-[#580C1B] mb-1.5 leading-none px-1 tracking-tight">
                  {item.event}
                </h3>

                {/* {item.time && (
                  <p className="font-inter text-xs sm:text-[13px] font-semibold tracking-tight uppercase text-[#8C2D3A] mb-3">
                    {item.time}
                  </p>
                )} */}

                {/* <div className="w-12 h-px bg-[#C89B53]/35 mb-3" /> */}

                {item.dressCodeLabel && (
                  <p className="font-inter text-[10px] sm:text-[11px] font-bold tracking-tight uppercase text-[#580C1B]/60 mb-1">
                    {item.dressCodeLabel}
                  </p>
                )}

                <p className="font-inter text-base sm:text-[17px] font-bold tracking-tight text-[#C89B53] mb-2 uppercase">
                  {item.rule}
                </p>

                {item.description && !item.guidelines && (
                  <p className="font-inter text-sm sm:text-[15px] text-[#580C1B]/85 font-medium tracking-tight leading-snug max-w-[220px]">
                    {item.description}
                  </p>
                )}

                {item.guidelines && (
                  <div className="w-full my-3 space-y-2 text-left bg-[#F7EAD7]/40 border border-[#C89B53]/25 rounded-md p-3 sm:p-3.5">
                    {item.guidelines.map((guide, idx) => (
                      <p key={idx} className="font-inter text-xs sm:text-[13px] text-[#580C1B]/90 leading-relaxed tracking-tight">
                        <strong className="font-semibold text-[#580C1B] block sm:inline">{guide.target}: </strong>
                        <span>{guide.text}</span>
                      </p>
                    ))}
                  </div>
                )}

                {item.notes && item.notes.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {item.notes.map((note, idx) => (
                      <p 
                        key={idx} 
                        className="font-instrument text-sm sm:text-[16px] text-[#8C2D3A] font-semibold"
                      >
                        {note}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Static Color Palette */}
              <div className="w-full flex h-28 sm:h-32 rounded-sm overflow-hidden z-10 border border-[#470101]/10 mt-auto">
                {item.palette.map((swatch, idx) => (
                  <div
                    key={idx}
                    className="flex-1 border-r border-[#FDFBF7]/30 last:border-r-0"
                    style={{
                      backgroundColor: swatch.hex,
                      ...(swatch.image
                        ? {
                            backgroundImage: `url('${swatch.image}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }
                        : item.id === 'after-dark' && showTexture
                        ? {
                            backgroundImage: `linear-gradient(${swatch.hex}99, ${swatch.hex}99), url('/images/sequin-texture.webp')`,
                            backgroundBlendMode: 'screen, normal',
                            backgroundSize: 'auto, 240px auto',
                            backgroundPosition: 'center',
                          }
                        : {}
                      ),
                    }}
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
