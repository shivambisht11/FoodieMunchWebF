import React from 'react';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
// Sections will be imported here
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import MenuSection from './sections/MenuSection';
import GallerySection from './sections/GallerySection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

const App: React.FC = () => {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background overflow-hidden">
        <CustomCursor />
        <Navbar />
        
        <main>
          <HeroSection />
          <AboutSection />
          <MenuSection />
          <GallerySection />
          <ExperienceSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default App;
