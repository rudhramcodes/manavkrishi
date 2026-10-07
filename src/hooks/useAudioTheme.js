import { useState, useRef, useEffect } from 'react';

export function useAudioTheme() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize the audio element with the provided track
    const audio = new Audio('/audio/the-night-we-met.mp3');
    audio.loop = true; // Loop the music
    audioRef.current = audio;

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error('Error playing audio track:', err);
      });
    }
  };

  return { isPlaying, toggleMusic };
}
