import { useState, useRef, useEffect } from 'react';

export function useAudioTheme() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize the audio element with the provided track
    const audio = new Audio('/audio/the-night-we-met.mp3');
    audio.loop = true; // Loop the music
    audioRef.current = audio;

    let interactionListener;

    // Attempt to autoplay initially
    audio.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((err) => {
        // Browsers often block autoplay without user interaction
        console.warn('Browser prevented autoplay. Waiting for user interaction...', err);

        // Function to start audio on first user interaction
        interactionListener = () => {
          if (audioRef.current) {
            audioRef.current.play().then(() => {
              setIsPlaying(true);
            }).catch(e => console.warn(e));
          }
          
          // Remove listeners after first interaction
          document.removeEventListener('click', interactionListener);
          document.removeEventListener('touchstart', interactionListener);
          document.removeEventListener('scroll', interactionListener);
        };

        // Attach listeners to detect first interaction
        document.addEventListener('click', interactionListener);
        document.addEventListener('touchstart', interactionListener);
        document.addEventListener('scroll', interactionListener, { passive: true });
      });

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (interactionListener) {
        document.removeEventListener('click', interactionListener);
        document.removeEventListener('touchstart', interactionListener);
        document.removeEventListener('scroll', interactionListener);
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
