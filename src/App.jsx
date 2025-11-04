import React from 'react';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import StickyScroll from './components/StickyScroll';
import Footer from './components/Footer';

function App() {
  return (
    <div className="scroll-smooth min-h-screen bg-black font-inter text-white">
      <Hero />
      <div id="story">
        <StickyScroll />
      </div>
      <FeatureGrid />
      <Footer />
    </div>
  );
}

export default App;
