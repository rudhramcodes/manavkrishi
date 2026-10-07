import React from 'react';
import { motion } from 'framer-motion';
import TicketCard from '../ui/TicketCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function DetailsSection() {
  return (
    <section id="details" className="relative w-full overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        
        {/* ===================================================================
            LEFT HALF: Light Cream Background (#F7EAD7) with Deep Wine Font (#470101)
            =================================================================== */}
        <div className="bg-[#F7EAD7] text-[#470101] flex flex-col justify-center items-center px-6 sm:px-12 lg:px-16 py-20 lg:py-24 text-center relative z-10">
          <motion.div 
            className="w-full max-w-lg mx-auto space-y-10 select-none"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            
            <motion.div variants={itemVariants} className="space-y-2">
              <h3 className="font-inter uppercase tracking-tight text-xs sm:text-sm text-[#470101]/80 font-medium mb-6">
                With The Blessings Of
              </h3>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-2">
                <p className="text-[#470101]"><span className="font-luxurious text-5xl sm:text-6xl">H</span> <span className="font-instrument text-3xl sm:text-4xl pl-1">is Parents</span></p>
                <p className="font-instrument text-[1.1rem] sm:text-xl text-[#470101] leading-relaxed">
                  Himanshu Girishchandra Vansia &<br/>Aaradhana Himanshu Vansia
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-[#470101]"><span className="font-luxurious text-5xl sm:text-6xl">H</span> <span className="font-instrument text-3xl sm:text-4xl pl-1">is Grandparents</span></p>
                <p className="font-instrument text-[1.1rem] sm:text-xl text-[#470101] leading-relaxed">
                  Girishchandra Pratapsinhji Vansia &<br/>Nirmalaba Girishchandra Vansia
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8 mt-8 border-t border-[#470101]/15 space-y-6">
              <p className="font-instrument text-lg sm:text-xl text-[#470101]/90 leading-relaxed">
                With the love of those who raised him,<br/>
                and the blessings of those who came before.
              </p>
            </motion.div>

          </motion.div>
        </div>

        {/* ===================================================================
            RIGHT HALF: Dreamy B&W Couple Photo Background with Centered Ticket Card
            =================================================================== */}
        <div className="relative min-h-[640px] lg:min-h-screen w-full flex items-center justify-center p-6 sm:p-10 lg:p-12 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "url('/images/rightimg.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              transform: 'scale(1.15)'
            }}
          />

          {/* Subtle dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/25 pointer-events-none" />

          {/* Floating Ticket Card with serrated top and genuine cutout notches */}
          <motion.div
            initial={{ opacity: 0, y: 120, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 flex items-center justify-center w-full"
          >
            <TicketCard />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
