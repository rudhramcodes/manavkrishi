import { useState, useRef } from 'react';

export function useAudioTheme() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef(null);
  const intervalRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setIsPlaying(false);
    } else {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioCtx();
        audioContextRef.current = ctx;

        // Elegant romantic acoustic harp notes
        const notes = [
          261.63, 329.63, 392.00, 523.25,
          220.00, 261.63, 329.63, 440.00,
          174.61, 220.00, 261.63, 349.23,
          196.00, 246.94, 293.66, 392.00
        ];

        let step = 0;
        const playTone = () => {
          if (!audioContextRef.current) return;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          const freq = notes[step % notes.length];
          step = (step + 1) % notes.length;

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          gain.gain.setValueAtTime(0.001, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.07, ctx.currentTime + 0.04);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start();
          osc.stop(ctx.currentTime + 1.2);
        };

        playTone();
        intervalRef.current = setInterval(playTone, 560);
        setIsPlaying(true);
      } catch (err) {
        console.error('Audio synthesizer error:', err);
      }
    }
  };

  return { isPlaying, toggleMusic };
}
