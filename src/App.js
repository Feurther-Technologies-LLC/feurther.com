// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Intro from './components/Intro';
import Features from './components/Features';
import Download from './components/Download';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import Support from './components/Support';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <HeroSection />
              <Intro />
              <Features />
              <Download />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/privacy" element={
            <>
              <Navbar />
              <Privacy />
              <Footer />
            </>
          } />
          <Route path="/support" element={
            <>
              <Navbar />
              <Support />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
