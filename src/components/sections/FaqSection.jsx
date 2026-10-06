import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "When should I arrive?",
      answer:
        "Doors open at 3:00 PM and the ceremony begins promptly at 3:30 PM. Please arrive a little early so you can settle into your seat before we begin.",
    },
    {
      question: "What should I wear?",
      answer:
        "We would love formal wedding attire in the requested palette. Kindly avoid white, that seat is already taken.",
    },
    {
      question: "Is parking available?",
      answer:
        "Yes, parking will be available near the venue. Please follow the signage and arrive early if you prefer a closer spot.",
    },
  ];

  return (
    <section 
      id="faq"
      className="w-full min-h-[65vh] lg:min-h-[70vh] bg-[#4C0B16] flex flex-col justify-center items-center py-20 px-6 sm:px-8 relative"
    >
      <div className="w-full max-w-2xl lg:max-w-3xl mx-auto flex flex-col items-center z-10">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-normal text-center mb-12">
          <span className='font-luxurious text-6xl md:text-7xl'>
            Q</span> 
          <span className="font-instrument pl-1.5">
            uestions
          </span>
        </h2>

        {/* FAQ List */}
        <div className="w-full space-y-0">
          {faqData.map((item, index) => {
            const isOpen = openItems.includes(index);
            return (
              <div
                key={index}
                className="border-t border-white/15 py-6 sm:py-8 transition-all duration-300 cursor-pointer"
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
                    className={`w-8 h-8 rounded-full border border-white/40 flex items-center justify-center transition-all duration-500 shrink-0 ml-4 group-hover:border-white/60 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Answer Content */}
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[15px] opacity-75 sm:text-base font-inter leading-relaxed max-w-[92%] font-normal tracking-tight">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
