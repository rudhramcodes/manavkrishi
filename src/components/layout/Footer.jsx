import React from 'react';
import { COUPLE_DATA } from '../../data/invitationData';

export default function Footer() {
  return (
    <footer className="bg-[#580C1B] text-[#F7EAD7] border-t border-[#F7EAD7]/20 py-16 px-4 text-center relative">
      <div className="max-w-2xl mx-auto space-y-6">
        
        {/* Monogram Seal */}
        <div className="w-16 h-16 mx-auto rounded-full border border-[#F7EAD7]/40 flex items-center justify-center">
          <span className="font-luxurious text-4xl text-[#F7EAD7]">V&amp;P</span>
        </div>

        <h3 className="font-instrument text-3xl sm:text-4xl text-[#F7EAD7]">
          {COUPLE_DATA.title}
        </h3>

        <p className="text-sm text-[#F7EAD7]/75 font-inter tracking-widest uppercase">
          September 2, 2026 • Grand Botanical Estate
        </p>

        <p className="text-xs text-[#F7EAD7]/60 font-light pt-4 border-t border-[#F7EAD7]/10 font-inter">
          Thank you for being a part of our story. We cannot wait to celebrate with you!
        </p>

      </div>
    </footer>
  );
}
