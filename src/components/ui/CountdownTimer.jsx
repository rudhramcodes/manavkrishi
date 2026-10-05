import React from 'react';
import { useCountdown } from '../../hooks/useCountdown';
import { COUPLE_DATA } from '../../data/invitationData';

export default function CountdownTimer() {
  const timeLeft = useCountdown(COUPLE_DATA.eventDate);

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-6 bg-[#580C1B]/80 backdrop-blur-md px-6 py-3 border border-[#F7EAD7]/20 shadow-xl">
      <div className="text-center min-w-[40px]">
        <span className="font-instrument text-2xl sm:text-3xl text-[#F7EAD7] block leading-tight font-semibold">
          {timeLeft.days}
        </span>
        <span className="text-[10px] sm:text-xs tracking-widest text-[#F7EAD7]/75 uppercase font-inter">
          Days
        </span>
      </div>
      <span className="text-[#F7EAD7]/40 text-xl font-light">:</span>
      <div className="text-center min-w-[40px]">
        <span className="font-instrument text-2xl sm:text-3xl text-[#F7EAD7] block leading-tight font-semibold">
          {String(timeLeft.hours).padStart(2, '0')}
        </span>
        <span className="text-[10px] sm:text-xs tracking-widest text-[#F7EAD7]/75 uppercase font-inter">
          Hours
        </span>
      </div>
      <span className="text-[#F7EAD7]/40 text-xl font-light">:</span>
      <div className="text-center min-w-[40px]">
        <span className="font-instrument text-2xl sm:text-3xl text-[#F7EAD7] block leading-tight font-semibold">
          {String(timeLeft.minutes).padStart(2, '0')}
        </span>
        <span className="text-[10px] sm:text-xs tracking-widest text-[#F7EAD7]/75 uppercase font-inter">
          Mins
        </span>
      </div>
      <span className="text-[#F7EAD7]/40 text-xl font-light">:</span>
      <div className="text-center min-w-[40px]">
        <span className="font-instrument text-2xl sm:text-3xl text-[#F7EAD7] block leading-tight font-semibold">
          {String(timeLeft.seconds).padStart(2, '0')}
        </span>
        <span className="text-[10px] sm:text-xs tracking-widest text-[#F7EAD7]/75 uppercase font-inter">
          Secs
        </span>
      </div>
    </div>
  );
}
