import React from 'react';
import { Send } from 'lucide-react';
import { COUPLE_DATA } from '../../data/invitationData';

export default function WishesSection({ wishes, onOpenRsvp }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#230207] relative border-t border-[#F7EAD7]/10">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <span className="text-[#F7EAD7]/70 text-xs sm:text-sm uppercase tracking-[0.3em] font-inter">
            Words of Love
          </span>
          <h2 className="font-instrument text-3xl sm:text-5xl text-[#F7EAD7] mt-2 mb-3">
            Warm Wishes for {COUPLE_DATA.title}
          </h2>
          <div className="w-20 h-[1.5px] bg-[#F7EAD7]/40 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wishes.map((item) => (
            <div 
              key={item.id}
              className="bg-[#580C1B]/40 border border-[#F7EAD7]/15 p-6 flex flex-col justify-between"
            >
              <p className="font-instrument italic text-lg text-[#F7EAD7]/95 mb-4 leading-snug">
                “{item.message}”
              </p>
              <div className="border-t border-[#F7EAD7]/10 pt-3 flex justify-between items-center text-xs text-[#F7EAD7]/60 font-inter">
                <span className="font-medium text-[#F7EAD7]">{item.name}</span>
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onOpenRsvp}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#F7EAD7] hover:text-white border-b border-[#F7EAD7]/50 pb-1 cursor-pointer font-inter"
          >
            <Send className="w-3.5 h-3.5" />
            Leave a personal message through RSVP
          </button>
        </div>

      </div>
    </section>
  );
}
