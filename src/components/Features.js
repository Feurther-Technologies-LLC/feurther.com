import React, { useState } from 'react';
import './Features.css';

const Features = () => {
  // 特色功能数据
  const features = [
    {
      id: 1,
      title: "实时姿势识别",
      description: "采用先进的计算机视觉技术，实时检测和分析您的运动姿势，确保每个动作都准确无误。",
      image: "/images/feature_1.png"
    },
    {
      id: 2,
      title: "游戏化设计",
      description: "训练结束得到经验奖励，带来等级的提升，解锁更多独特的称号和奖杯！",
      images: [
        "/images/feature_2_1.png",
        "/images/feature_2_1.png"
      ]
    },
    // 可以继续添加更多特色
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFeature = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section id="features" className="features-section">
      <h2 className="features-title">特色功能</h2>
      <div className="features-container">
        <button className="nav-button prev" onClick={prevFeature}>&lt;</button>
        <div className="feature-content">
          <div className="feature-image-container">
            {Array.isArray(features[currentIndex].images) ? (
              features[currentIndex].images.map((img, index) => (
                <img 
                  key={index}
                  src={process.env.PUBLIC_URL + img} 
                  alt={`${features[currentIndex].title}-${index + 1}`}
                  className="feature-image"
                />
              ))
            ) : (
              <img 
                src={process.env.PUBLIC_URL + features[currentIndex].image} 
                alt={features[currentIndex].title}
                className="feature-image"
              />
            )}
          </div>
          <div className="feature-text">
            <h3>{features[currentIndex].title}</h3>
            <p>{features[currentIndex].description}</p>
          </div>
        </div>
        <button className="nav-button next" onClick={nextFeature}>&gt;</button>
      </div>
    </section>
  );
};

export default Features; 