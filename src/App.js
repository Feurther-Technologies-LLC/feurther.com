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
      <Intro /> {/* 渲染 Intro 组件 */}
      <Features /> {/* 添加这行 */}
      <Download /> {/* 添加下载组件 */}
      <Contact /> {/* 添加联系方式组件 */}
      <Footer /> {/* 添加页脚组件 */}
      {/* 以后在这里添加其他组件 */}
    </div>
  );
}

export default App;
