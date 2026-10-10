import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(true);

  // Prevent scrolling while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleEnter = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2b0209] text-[#F7EAD7] px-5"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.2, ease: 'easeInOut' } }}
        >
          {/* Subtle background texture/gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#470101_0%,_#2b0209_100%)] opacity-80" />
          
          <div className="relative z-10 text-center max-w-lg flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-luxurious text-5xl sm:text-7xl text-[#C89B53] mb-4 drop-shadow-md">
                Manvendra & Krisha
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="font-inter text-sm sm:text-base text-[#F7EAD7]/80 mb-10 max-w-sm mx-auto leading-relaxed">
                Welcome to our engagement invitation. For the best experience, please ensure your sound is on.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button 
                onClick={handleEnter}
                className="bg-[#C89B53] text-[#2b0209] font-inter font-semibold py-3 sm:py-4 px-10 rounded-sm uppercase tracking-widest text-xs sm:text-sm hover:bg-[#F7EAD7] hover:scale-105 transition-all duration-400 shadow-xl"
              >
                Open Invitation
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
