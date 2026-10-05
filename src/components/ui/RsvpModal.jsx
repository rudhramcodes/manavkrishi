import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RsvpModal({ isOpen, onClose, onAddWish }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: 'attending',
    guests: '1',
    dietary: 'none',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) return;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F7EAD7', '#e2c697', '#580C1B', '#ffffff']
    });

    if (formData.message && onAddWish) {
      onAddWish({
        name: formData.name,
        message: formData.message
      });
    }

    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-[#580C1B] border-2 border-[#F7EAD7]/40 shadow-2xl p-6 sm:p-10 text-[#F7EAD7]">
        
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#F7EAD7]/70 hover:text-[#F7EAD7] p-1 cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <>
            <div className="text-center mb-6">
              <span className="text-xs tracking-[0.25em] text-[#F7EAD7]/70 uppercase font-inter">
                Kindly Respond
              </span>
              <h3 className="font-instrument text-3xl sm:text-4xl text-[#F7EAD7] mt-1">
                RSVP to Manav &amp; Krishi
              </h3>
              <p className="text-xs font-inter text-[#F7EAD7]/70 mt-1">
                Please reply by July 15, 2026
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#F7EAD7]/80 mb-1 font-inter">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Katherine Pierce"
                  className="w-full bg-[#3b0610] border border-[#F7EAD7]/30 px-3.5 py-2 text-sm text-[#F7EAD7] placeholder-[#F7EAD7]/40 focus:outline-none focus:border-[#F7EAD7]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#F7EAD7]/80 mb-1 font-inter">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. katherine@example.com"
                  className="w-full bg-[#3b0610] border border-[#F7EAD7]/30 px-3.5 py-2 text-sm text-[#F7EAD7] placeholder-[#F7EAD7]/40 focus:outline-none focus:border-[#F7EAD7]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#F7EAD7]/80 mb-1 font-inter">
                  Will you attend? *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'attending' })}
                    className={`py-2 px-3 text-xs tracking-wider uppercase font-medium border text-center transition-all cursor-pointer ${
                      formData.attendance === 'attending'
                        ? 'bg-[#F7EAD7] text-[#470101] border-[#F7EAD7] font-bold'
                        : 'border-[#F7EAD7]/30 text-[#F7EAD7] hover:border-[#F7EAD7]'
                    }`}
                  >
                    Joyfully Accept
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'declining' })}
                    className={`py-2 px-3 text-xs tracking-wider uppercase font-medium border text-center transition-all cursor-pointer ${
                      formData.attendance === 'declining'
                        ? 'bg-[#F7EAD7] text-[#470101] border-[#F7EAD7] font-bold'
                        : 'border-[#F7EAD7]/30 text-[#F7EAD7] hover:border-[#F7EAD7]'
                    }`}
                  >
                    Regretfully Decline
                  </button>
                </div>
              </div>

              {formData.attendance === 'attending' && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#F7EAD7]/80 mb-1 font-inter">
                      Guests Count
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-[#3b0610] border border-[#F7EAD7]/30 px-3 py-2 text-sm text-[#F7EAD7] focus:outline-none focus:border-[#F7EAD7]"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4">4 Persons</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#F7EAD7]/80 mb-1 font-inter">
                      Dietary Needs
                    </label>
                    <select
                      value={formData.dietary}
                      onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                      className="w-full bg-[#3b0610] border border-[#F7EAD7]/30 px-3 py-2 text-sm text-[#F7EAD7] focus:outline-none focus:border-[#F7EAD7]"
                    >
                      <option value="none">No Restrictions</option>
                      <option value="vegetarian">Vegetarian</option>
                      <option value="vegan">Vegan</option>
                      <option value="gluten-free">Gluten-Free</option>
                      <option value="halal">Halal</option>
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#F7EAD7]/80 mb-1 font-inter">
                  Message of Love / Song Request
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Leave a sweet blessing or song request..."
                  className="w-full bg-[#3b0610] border border-[#F7EAD7]/30 px-3.5 py-2 text-sm text-[#F7EAD7] placeholder-[#F7EAD7]/40 focus:outline-none focus:border-[#F7EAD7]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#F7EAD7] hover:bg-white text-[#470101] py-3 uppercase tracking-widest text-xs font-bold transition-all duration-200 cursor-pointer shadow-md mt-4"
              >
                Submit Response
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#F7EAD7] text-[#470101] flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-instrument text-3xl sm:text-4xl text-[#F7EAD7]">
              Thank You, {formData.name}!
            </h3>
            <p className="text-sm font-inter text-[#F7EAD7]/90 max-w-sm mx-auto leading-relaxed">
              {formData.attendance === 'attending' 
                ? `Your RSVP for ${formData.guests} ${formData.guests === '1' ? 'guest' : 'guests'} has been recorded. We cannot wait to celebrate with you!`
                : "We will miss your presence, but thank you warmly for letting us know and sending your blessings."}
            </p>
            <div className="pt-4">
              <button
                onClick={handleClose}
                className="bg-[#F7EAD7] text-[#470101] px-6 py-2 uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
