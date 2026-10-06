import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, COUPLE_DATA } from '../../data/invitationData';

export default function Navbar({ onOpenRsvp }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 md:top-6 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none">
      {/* Floating rectangular bar - exact replica of the user reference image */}
      <div className="max-w-[1200px] w-full mx-auto bg-[#580C1B] shadow-md pointer-events-auto">
        <div className="h-14 md:h-16 px-6 md:px-8 flex items-center justify-between">
          
          {/* Couple Name / Title on Left */}
          <div className="flex-1 flex justify-start">
            <a 
              href="#hero" 
              className="flex items-center text-[#E4E2B8] hover:opacity-95 transition-opacity"
            >
              <span className="font-instrument text-2xl md:text-[28px] font-normal whitespace-nowrap">
                Manav & Krishi
              </span>
            </a>
          </div>

          {/* Centered Navigation Links */}
          <nav className="hidden md:flex items-center justify-center space-x-6 lg:space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#E4E2B8] text-xs lg:text-[13px] tracking-wide font-inter hover:text-white transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Area: RSVP Button with increased width */}
          {/* <div className="flex-1 hidden md:flex justify-end">
            <button
              onClick={onOpenRsvp}
              className="bg-[#E4E2B8] text-[#470101] text-xs font-semibold uppercase tracking-widest px-10 lg:px-12 py-2 md:py-2.5 transition-all duration-200 cursor-pointer shadow-sm text-center min-w-[130px] lg:min-w-[150px]"
            >
              RSVP
            </button>
          </div> */}

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center space-x-3">
            {/* <button
              onClick={onOpenRsvp}
              className="bg-[#E4E2B8] text-[#470101] text-[11px] font-bold uppercase tracking-wider px-4 py-1.5"
            >
              RSVP
            </button> */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#E4E2B8] p-1.5 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#580C1B] border-t border-[#E4E2B8]/15 px-6 py-4 space-y-3 animate-fadeIn">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#E4E2B8] text-sm py-1.5 font-inter hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
