import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FaqSection() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "What is the dress code for the events?",
      answer:
        "We have curated a special Lookbook for our celebrations! Please refer to the Lookbook section above for specific color palettes ranging from bright festive colors to elegant pastels. And please, kindly avoid wearing white!",
    },
    {
      question: "When should I arrive?",
      answer:
        "We recommend arriving 15 to 30 minutes before the start time of each event. This will give you plenty of time to settle in, grab a welcome drink, and mingle before the celebrations begin.",
    },
    {
      question: "Is accommodation provided at Avadh Utopia?",
      answer:
        "Yes, we have arranged comfortable accommodations for our out-of-town guests at the venue. Please let us know your travel itinerary in advance so we can ensure everything is perfectly set up for you.",
    },
    {
      question: "Is parking available at the venue?",
      answer:
        "Yes, ample secure parking is available at Avadh Utopia, Vapi. Valet services will also be provided at the entrance for your convenience.",
    },
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section
      id="faq"
      className="w-full min-h-[65vh] lg:min-h-[70vh] bg-[#4C0B16] text-[#F7EAD7] flex flex-col justify-center items-center py-20 px-6 sm:px-8 relative"
    >
      <div className="w-full max-w-2xl lg:max-w-3xl mx-auto flex flex-col items-center z-10">
        
        {/* Section Header */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-normal text-center mb-12"
        >
          <span className='font-luxurious text-6xl md:text-7xl'>
            Q
          </span>
          <span className="font-instrument pl-1.5">
            uestions
          </span>
        </motion.h2>

        {/* FAQ List */}
        <motion.div 
          className="w-full space-y-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {faqData.map((item, index) => {
            const isOpen = openItems.includes(index);
            return (
              <motion.div
                variants={itemVariants}
                key={index}
                className="border-t border-[#F7EAD7]/15 py-6 sm:py-8 cursor-pointer overflow-hidden"
              >
                {/* Question Row */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex justify-between items-center text-left focus:outline-none group"
                >
                  <h3 className="font-instrument text-2xl md:text-3xl font-normal transition-colors">
                    {item.question}
                  </h3>

                  {/* Circular Chevron Icon */}
                  <div
                    className={`w-8 h-8 rounded-full border border-[#F7EAD7]/40 flex items-center justify-center transition-all duration-500 shrink-0 ml-4 group-hover:border-[#F7EAD7]/70 ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Answer Content - Smooth Accordion */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="text-[15px] opacity-75 sm:text-base font-inter leading-relaxed max-w-[92%] font-normal tracking-tight">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
