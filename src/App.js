// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Intro from './components/Intro';
import Features from './components/Features';
import Download from './components/Download';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import Support from './components/Support';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Intro />
      <Features />
      <Download />
      <Contact />
      <Privacy />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
