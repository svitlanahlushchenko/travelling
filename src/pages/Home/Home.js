import React from 'react';
import HeroSection from './Hero-section';
import AboutSection from './AboutSection';
import PlacesSection from './PlacesSection';
import SavingSection from './SavingSection';
import ToursSection from './ToursSection';
function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <PlacesSection />
      <SavingSection />
      <ToursSection />
    </div>
  );
}

export default Home;
