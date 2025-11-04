import React from 'react';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import StickyScroll from './components/StickyScroll';
import ParallaxGallery from './components/ParallaxGallery';
import CursorFollower from './components/CursorFollower';
import Footer from './components/Footer';

function App() {
  return (
    <div className="scroll-smooth min-h-screen bg-black font-inter text-white">
      <CursorFollower />
      <Hero />
      <div id="story">
        <StickyScroll />
      </div>
      <ParallaxGallery />
      <FeatureGrid />
      <Footer />
    </div>
  );
}

export default App;
