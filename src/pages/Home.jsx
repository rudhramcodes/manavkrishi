import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import DetailsSection from '../components/sections/DetailsSection';
import StorySection from '../components/sections/StorySection';
import ScheduleSection from '../components/sections/ScheduleSection';
import LocationSection from '../components/sections/LocationSection';
import GallerySection from '../components/sections/GallerySection';
import WishesSection from '../components/sections/WishesSection';
import RsvpModal from '../components/ui/RsvpModal';
import LightboxModal from '../components/ui/LightboxModal';
import AudioToggle from '../components/ui/AudioToggle';
import { useAudioTheme } from '../hooks/useAudioTheme';
import { INITIAL_WISHES } from '../data/invitationData';

export default function Home() {
  const [rsvpModalOpen, setRsvpModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [wishes, setWishes] = useState(INITIAL_WISHES);
  const { isPlaying, toggleMusic } = useAudioTheme();

  const handleAddWish = ({ name, message }) => {
    setWishes((prev) => [
      {
        id: Date.now(),
        name,
        message,
        date: 'Just now'
      },
      ...prev
    ]);
  };

  return (
    <div className="min-h-screen bg-[#2b0209] text-[#F7EAD7] font-inter relative selection:bg-[#F7EAD7] selection:text-[#470101]">
      {/* Floating Navbar matching reference image */}
      <Navbar onOpenRsvp={() => setRsvpModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <HeroSection onOpenRsvp={() => setRsvpModalOpen(true)} />
        <DetailsSection onOpenRsvp={() => setRsvpModalOpen(true)} />
        <StorySection />
        <LocationSection />
        <ScheduleSection />
        <GallerySection onSelectPhoto={setSelectedPhoto} />
        <WishesSection 
          wishes={wishes} 
          onOpenRsvp={() => setRsvpModalOpen(true)} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Floating Utilities */}
      <AudioToggle isPlaying={isPlaying} onToggle={toggleMusic} />

      <RsvpModal 
        isOpen={rsvpModalOpen} 
        onClose={() => setRsvpModalOpen(false)}
        onAddWish={handleAddWish}
      />

      <LightboxModal 
        photo={selectedPhoto} 
        onClose={() => setSelectedPhoto(null)} 
      />
    </div>
  );
}
