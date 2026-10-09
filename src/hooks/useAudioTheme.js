import { useState, useRef, useEffect } from 'react';

export function useAudioTheme() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'none';
    audio.src = '/audio/the-night-we-met.mp3';
    audio.loop = true;
    audioRef.current = audio;

    const updateState = () => setIsPlaying(!audio.paused);
    const removeListeners = () => {
      document.removeEventListener('click', startMusic);
      document.removeEventListener('keydown', startMusic);
    };
    const startMusic = (event) => {
      if (event.target.closest('[data-audio-toggle]')) return;
      audio.play().then(removeListeners).catch(() => {});
    };

    // Defer the track until a real gesture; scrolling cannot unlock browser audio.
    document.addEventListener('click', startMusic);
    document.addEventListener('keydown', startMusic);
    audio.addEventListener('play', updateState);
    audio.addEventListener('pause', updateState);
    audio.addEventListener('play', removeListeners, { once: true });

    return () => {
      removeListeners();
      audio.removeEventListener('play', updateState);
      audio.removeEventListener('pause', updateState);
      audio.removeEventListener('play', removeListeners);
      audio.pause();
      audio.removeAttribute('src');
      audio.load();
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch((error) => console.warn('Unable to play background music:', error));
    } else {
      audio.pause();
    }
  };

  return { isPlaying, toggleMusic };
}
