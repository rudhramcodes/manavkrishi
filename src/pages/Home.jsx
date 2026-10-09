import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import DetailsSection from '../components/sections/DetailsSection';
import StorySection from '../components/sections/StorySection';
import ScheduleSection from '../components/sections/ScheduleSection';
import LocationSection from '../components/sections/LocationSection';
import GallerySection from '../components/sections/GallerySection';
import DressCodeSection from '../components/sections/DressCodeSection';
import ClosingCardSection from '../components/sections/ClosingCardSection';
import FaqSection from '../components/sections/FaqSection';
import LightboxModal from '../components/ui/LightboxModal';
import AudioToggle from '../components/ui/AudioToggle';

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="min-h-screen bg-[#2b0209] text-[#F7EAD7] font-inter relative selection:bg-[#F7EAD7] selection:text-[#470101]">
      {/* Floating Navbar matching reference image */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <DetailsSection />
        <StorySection />
        <LocationSection />
        <ScheduleSection />
        <GallerySection onSelectPhoto={setSelectedPhoto} />
        <DressCodeSection />
        <ClosingCardSection />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Floating Utilities */}
      <AudioToggle />

      <LightboxModal 
        photo={selectedPhoto} 
        onClose={() => setSelectedPhoto(null)} 
      />
    </div>
  );
}
