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
            className="w-full max-w-xl mx-auto space-y-10 sm:space-y-12 select-none"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            
            {/* The Warm Invitation Text */}
            <motion.div variants={itemVariants} className="space-y-5 px-2">
              <p className="font-instrument text-[1.1rem] sm:text-[1.25rem] text-[#470101] leading-relaxed">
                And since this seems like a fairly important excuse to dress up, eat good food, take far too many pictures, and celebrate with our favourite people, we’d love for you to be there.
              </p>
              <p className="font-instrument text-[1.15rem] sm:text-[1.3rem] text-[#470101] leading-relaxed font-medium">
                Your presence, your blessings, and your smiles<br/>will make the evening even more special.
              </p>
            </motion.div>

            {/* Elegant Divider */}
            {/* <motion.div variants={itemVariants} className="flex justify-center items-center opacity-60">
              <div className="w-16 h-[1px] bg-[#470101]/20"></div>
              <div className="w-16 h-[1px] bg-[#470101]/20"></div>
            </motion.div> */}
            
            {/* With Love - Parents */}
            <motion.div variants={itemVariants} className="space-y-5">
              <h3 className="font-inter uppercase tracking-widest text-[11px] sm:text-xs text-[#470101]/80 font-medium mb-4">
                With Love
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-4">
                <div className="space-y-1">
                  <p className="font-instrument text-xl sm:text-[22px] text-[#470101] leading-tight">
                    <span className="font-luxurious text-4xl sm:text-5xl text-[#470101]">H</span>imanshu &amp;<br/>Aaradhana
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-instrument text-xl sm:text-[22px] text-[#470101] leading-tight">
                    <span className="font-luxurious text-4xl sm:text-5xl text-[#470101]">D</span>igvijaysinh &amp;<br/>Ekta
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Blessings - Grandparents */}
            <motion.div variants={itemVariants} className="pt-6 mt-6 border-t border-[#470101]/10 space-y-5">
              <h3 className="font-inter uppercase tracking-widest text-[11px] sm:text-xs text-[#470101]/80 font-medium mb-4">
                With the blessings of beloved Grandparents
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-4">
                <div className="space-y-1">
                  <p className="font-instrument text-xl sm:text-[22px] text-[#470101] leading-tight">
                    <span className="font-luxurious text-4xl sm:text-5xl text-[#470101]">G</span>irishchandra &amp;<br/>Nirmalaba
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-instrument text-xl sm:text-[22px] text-[#470101] leading-tight">
                    <span className="font-luxurious text-4xl sm:text-5xl text-[#470101]">J</span>aydevsinh &amp;<br/>Indiraba
                  </p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* ===================================================================
            RIGHT HALF: Dreamy B&W Couple Photo Background with Centered Ticket Card
            =================================================================== */}
        <div className="relative min-h-[640px] lg:min-h-screen w-full flex items-center justify-center p-6 sm:p-10 lg:p-12 overflow-hidden">
          {/* Background Image */}
          <img
            src="/images/rightimg.avif"
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center scale-[1.15] pointer-events-none"
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
