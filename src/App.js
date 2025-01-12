// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Intro from './components/Intro'; // 引入 Intro 组件
import Features from './components/Features'; // 添加这行
import Download from './components/Download';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Intro /> {/* Render Intro component */}
      <Features /> {/* Render Features component */}
      <Download /> {/* Render Download component */}
      <Contact /> {/* Render Contact component */}
      <Footer /> {/* Render Footer component */}
      {/* Add other components here in the future */}
    </div>
  );
}

export default App;
