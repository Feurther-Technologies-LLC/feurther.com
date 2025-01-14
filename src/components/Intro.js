// src/components/Intro.js
import React from 'react';
import './Intro.css';

const Intro = React.forwardRef((props, ref) => {
  return (
    <section id="intro" className="intro-section" ref={ref}>
      <div className="intro-content">
        <div className="intro-image-container">
          <img 
            src={`${process.env.PUBLIC_URL}/images/intro_1.png`} 
            alt="PUSH APP Interface Initial View" 
            className="intro-image"
          />
        </div>

        <div className="intro-text">
          <h2>About FITANA</h2>
          <p>FITANA is an iOS application that uses full-body visual recognition technology to help you train push-ups more effectively.</p>
          <p>Built-in gamification system and reward mechanisms make your training journey more enjoyable and fun.</p>
          <p>Voice coaching is provided during exercise to guide you through proper form and technique.</p>
        </div>
      </div>
    </section>
  );
});

export default Intro;
