// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css'; // 我们待会儿在这里写样式

const HeroSection = () => {
  return (
    <div className="hero-container" id="home">
      {/* 
        autoPlay: 自动播放
        loop: 循环
        muted: 静音 (避免浏览器自动播放策略限制)
      */}
      <video 
        className="hero-video" 
        autoPlay 
        loop 
        muted 
        controls
        onError={(e) => {
          console.error('视频加载错误:', e.target.error);
        }}
        onLoadStart={() => {
          console.log('开始加载视频');
        }}
        onLoadedData={() => {
          console.log('视频加载成功');
        }}
        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        <source src={`${process.env.PUBLIC_URL}/background.mp4`} type="video/mp4" />
        {/* 当浏览器不支持video标签时的备用文案 */}
        Your browser does not support the video tag.
      </video>

      {/* 这里的 overlay 用于放文字、按钮等 */}
      <div className="hero-overlay">
        <h1>FITANA</h1>
        <p>Make your push-up training more efficient with visual recognition</p>
        <a href="#intro" className="hero-btn">Learn More</a>
      </div>
    </div>
  );
};

export default HeroSection;
