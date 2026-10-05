import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioToggle({ isPlaying, onToggle }) {
  return (
    <button
      onClick={onToggle}
      title={isPlaying ? "Mute Background Music" : "Play Romantic Background Music"}
      className="fixed bottom-6 left-6 z-40 bg-[#580C1B]/90 hover:bg-[#580C1B] text-[#F7EAD7] border border-[#F7EAD7]/30 p-3 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center cursor-pointer"
      aria-label="Toggle ambient music"
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5 animate-pulse text-[#F7EAD7]" />
      ) : (
        <VolumeX className="w-5 h-5 text-[#F7EAD7]/75" />
      )}
    </button>
  );
}
