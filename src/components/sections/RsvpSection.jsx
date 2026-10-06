import React, { useState } from 'react';
import { Check, ChevronDown, Heart, Minus, Plus, Send, Sparkles, UserCheck, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COUPLE_DATA } from '../../data/invitationData';

const MEAL_OPTIONS = [
  { id: 'vegetarian', label: 'Vegetarian Gourmet' },
  { id: 'jain', label: 'Jain Selection' },
  { id: 'vegan', label: 'Vegan Feast' },
  { id: 'non-veg', label: 'Classic Non-Vegetarian' },
  { id: 'none', label: 'No Specific Dietary Preference' }
];

export default function RsvpSection({ onAddWish }) {
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'accept', // default or empty
    guests: 1,
    email: '',
    mealPreference: '',
    note: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mealDropdownOpen, setMealDropdownOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Luxury celebration confetti
      confetti({
        particleCount: 100,
        spread: 75,
        origin: { y: 0.65 },
        colors: ['#580C1B', '#DDC09D', '#F7EAD7', '#412414', '#ffffff']
      });

      if (formData.note && onAddWish) {
        onAddWish({
          name: formData.name,
          message: formData.note
        });
      }
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      attendance: 'accept',
      guests: 1,
      email: '',
      mealPreference: '',
      note: ''
    });
  };

  const adjustGuests = (delta) => {
    setFormData((prev) => ({
      ...prev,
      guests: Math.max(1, Math.min(6, prev.guests + delta))
    }));
  };

  return (
    <section 
      id="rsvp"
      className="relative w-full bg-[#F7EAD7] text-[#580C1B] py-14 sm:py-16 md:py-20 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden selection:bg-[#580C1B] selection:text-[#F7EAD7]"
    >
      <div className="max-w-[1140px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* ================= LEFT COLUMN: INVITATION PROMPT ================= */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              {/* Kicker */}
              <span className="font-inter text-xs tracking-[0.25em] uppercase font-semibold text-[#580C1B]/80 block mb-2 sm:mb-3">
                RSVP
              </span>

              {/* Large Stylized Heading */}
              <h2 className="text-[#580C1B] leading-none mb-5 select-none">
                <span className="inline-flex items-baseline">
                  <span className="font-luxurious text-6xl sm:text-7xl md:text-8xl leading-none">
                    W
                  </span>
                  <span className="font-instrument text-4xl sm:text-5xl md:text-[56px] leading-none">
                    ill You
                  </span>
                </span>
                <span className="block font-instrument text-4xl sm:text-5xl md:text-[56px] leading-tight -mt-2">
                  Join Us?
                </span>
              </h2>

              {/* Description */}
              <p className="font-inter text-[#580C1B]/85 text-sm sm:text-[15px] leading-none max-w-sm tracking-tight font-normal w-[60%]">
                We would be truly honoured to celebrate this day with you. Please let us know if you'll be joining the festivities your presence is the only gift we need.
              </p>
            </div>

            {/* Bottom Meta: Deadline */}
            <div className="mt-10 sm:mt-12 lg:mt-20 pt-5 border-t border-[#580C1B]/15">
              <p className="font-inter text-xs uppercase tracking-wider text-[#580C1B]/60 font-medium">
                Please reply by
              </p>
              <p className="font-inter text-sm sm:text-[15px] uppercase tracking-wider font-semibold text-[#580C1B] mt-1">
                OCTOBER 1ST, 2026
              </p>
            </div>
          </div>


          {/* ================= RIGHT COLUMN: INTERACTIVE FORM ================= */}
          <div className="lg:col-span-7 w-full max-w-xl mx-auto lg:max-w-none">
            {!isSubmitted ? (
              <form 
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-5"
              >
                {/* 1. Name */}
                <div className="group">
                  <label className="block font-inter text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#580C1B]/80 mb-1.5 transition-colors group-focus-within:text-[#580C1B]">
                    Name <span className="text-[#580C1B]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Smith"
                    className="w-full bg-white text-[#580C1B] placeholder-[#580C1B]/35 px-4 py-3 text-sm sm:text-base border border-[#580C1B]/20 rounded-none shadow-[0_1px_3px_rgba(88,12,27,0.03)] focus:outline-none focus:border-[#580C1B] focus:ring-2 focus:ring-[#580C1B]/10 transition-all duration-200 font-inter"
                  />
                </div>

                {/* 2. Attendance (Interactive Segmented Cards) */}
                <div>
                  <label className="block font-inter text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#580C1B]/80 mb-1.5">
                    Attendance <span className="text-[#580C1B]">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attendance: 'accept' })}
                      className={`py-3 px-3 text-xs sm:text-sm font-inter transition-all duration-200 border cursor-pointer flex items-center justify-center gap-2 ${
                        formData.attendance === 'accept'
                          ? 'bg-[#580C1B] text-[#F7EAD7] border-[#580C1B] shadow-sm font-medium'
                          : 'bg-white text-[#580C1B]/80 border-[#580C1B]/20 hover:border-[#580C1B]/40'
                      }`}
                    >
                      <Sparkles className={`w-3.5 h-3.5 ${formData.attendance === 'accept' ? 'text-[#DDC09D]' : 'text-[#580C1B]/40'}`} />
                      Joyfully Accept
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attendance: 'decline' })}
                      className={`py-3 px-3 text-xs sm:text-sm font-inter transition-all duration-200 border cursor-pointer flex items-center justify-center gap-2 ${
                        formData.attendance === 'decline'
                          ? 'bg-[#580C1B] text-[#F7EAD7] border-[#580C1B] shadow-sm font-medium'
                          : 'bg-white text-[#580C1B]/80 border-[#580C1B]/20 hover:border-[#580C1B]/40'
                      }`}
                    >
                      Regretfully Decline
                    </button>
                  </div>
                </div>

                {/* 3. Guests Counter (shown when accepting) */}
                {formData.attendance === 'accept' && (
                  <div className="group animate-fade-in">
                    <label className="block font-inter text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#580C1B]/80 mb-1.5 transition-colors group-focus-within:text-[#580C1B]">
                      Guests Attending
                    </label>
                    <div className="flex items-center bg-white border border-[#580C1B]/20 shadow-[0_1px_3px_rgba(88,12,27,0.03)] h-11 sm:h-12 max-w-full">
                      <button
                        type="button"
                        onClick={() => adjustGuests(-1)}
                        disabled={formData.guests <= 1}
                        className="w-12 h-full flex items-center justify-center text-[#580C1B] hover:bg-[#580C1B]/5 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                        aria-label="Decrease guest count"
                      >
                        <Minus className="w-4 h-4" />
                      </button>

                      <div className="flex-1 text-center font-inter font-semibold text-sm sm:text-base text-[#580C1B] select-none">
                        {formData.guests} {formData.guests === 1 ? 'Guest' : 'Guests'}
                      </div>

                      <button
                        type="button"
                        onClick={() => adjustGuests(1)}
                        disabled={formData.guests >= 6}
                        className="w-12 h-full flex items-center justify-center text-[#580C1B] hover:bg-[#580C1B]/5 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                        aria-label="Increase guest count"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* 4. Email */}
                <div className="group">
                  <label className="block font-inter text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#580C1B]/80 mb-1.5 transition-colors group-focus-within:text-[#580C1B]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@framer.com"
                    className="w-full bg-white text-[#580C1B] placeholder-[#580C1B]/35 px-4 py-3 text-sm sm:text-base border border-[#580C1B]/20 rounded-none shadow-[0_1px_3px_rgba(88,12,27,0.03)] focus:outline-none focus:border-[#580C1B] focus:ring-2 focus:ring-[#580C1B]/10 transition-all duration-200 font-inter"
                  />
                </div>

                {/* 5. Meal preference (Custom Animated Dropdown) */}
                {formData.attendance === 'accept' && (
                  <div className="relative group animate-fade-in">
                    <label className="block font-inter text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#580C1B]/80 mb-1.5">
                      Meal Preference
                    </label>
                    <button
                      type="button"
                      onClick={() => setMealDropdownOpen(!mealDropdownOpen)}
                      className="w-full bg-white text-[#580C1B] px-4 py-3 text-sm sm:text-base border border-[#580C1B]/20 rounded-none shadow-[0_1px_3px_rgba(88,12,27,0.03)] flex items-center justify-between text-left focus:outline-none focus:border-[#580C1B] focus:ring-2 focus:ring-[#580C1B]/10 transition-all duration-200 cursor-pointer"
                    >
                      <span className={formData.mealPreference ? 'text-[#580C1B]' : 'text-[#580C1B]/40'}>
                        {MEAL_OPTIONS.find((opt) => opt.id === formData.mealPreference)?.label || 'Select preference...'}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-[#580C1B]/50 transition-transform duration-200 ${mealDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {mealDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#580C1B]/20 shadow-xl z-30 py-1 divide-y divide-[#580C1B]/5 animate-fade-in">
                        {MEAL_OPTIONS.map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, mealPreference: opt.id });
                              setMealDropdownOpen(false);
                            }}
                            className="w-full px-4 py-2.5 text-xs sm:text-sm text-left font-inter text-[#580C1B] hover:bg-[#F7EAD7]/50 flex items-center justify-between transition-colors cursor-pointer"
                          >
                            <span>{opt.label}</span>
                            {formData.mealPreference === opt.id && (
                              <Check className="w-3.5 h-3.5 text-[#580C1B]" />
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* 6. A note for the couple */}
                <div className="group">
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block font-inter text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#580C1B]/80 transition-colors group-focus-within:text-[#580C1B]">
                      A Note For The Couple
                    </label>
                    <span className="text-[10px] text-[#580C1B]/40 font-inter">
                      {formData.note.length}/300
                    </span>
                  </div>
                  <textarea
                    rows={3}
                    maxLength={300}
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    placeholder="Lovely couple..."
                    className="w-full bg-white text-[#580C1B] placeholder-[#580C1B]/35 px-4 py-3 text-sm sm:text-base border border-[#580C1B]/20 rounded-none shadow-[0_1px_3px_rgba(88,12,27,0.03)] focus:outline-none focus:border-[#580C1B] focus:ring-2 focus:ring-[#580C1B]/10 transition-all duration-200 resize-none font-inter"
                  />
                </div>

                {/* Submit Button with Micro-interactions */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full bg-[#580C1B] hover:bg-[#460915] text-[#F7EAD7] font-inter text-sm sm:text-base font-medium py-3.5 sm:py-4 px-6 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer overflow-hidden group"
                  >
                    {/* Micro-animation shimmer highlight */}
                    <span className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />

                    <span className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-[#F7EAD7]/30 border-t-[#F7EAD7] rounded-full animate-spin" />
                          <span>Sending Response...</span>
                        </>
                      ) : (
                        <span>Send my RSVP</span>
                      )}
                    </span>
                  </button>
                </div>
              </form>
            ) : (
              /* Success / Thank You State */
              <div className="bg-white p-8 sm:p-12 border border-[#580C1B]/20 shadow-md text-center animate-fade-in flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#580C1B] text-[#F7EAD7] flex items-center justify-center shadow-md mb-5">
                  <Check className="w-7 h-7 stroke-[2.5]" />
                </div>
                
                <h3 className="font-instrument text-3xl sm:text-4xl text-[#580C1B] mb-2 font-normal">
                  Thank You, {formData.name}!
                </h3>
                
                <p className="font-inter text-sm sm:text-base text-[#580C1B]/80 max-w-md mx-auto leading-relaxed mb-6 font-normal">
                  {formData.attendance === 'accept' 
                    ? `We are thrilled that you'll be celebrating with us! We have reserved ${formData.guests} seat${formData.guests > 1 ? 's' : ''} in your honour.`
                    : 'We will miss your presence, but thank you warmly for letting us know and sending your blessings.'}
                </p>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#580C1B] hover:text-[#580C1B]/70 border-b border-[#580C1B]/40 pb-1 font-semibold cursor-pointer transition-colors"
                >
                  Edit or submit another response
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
