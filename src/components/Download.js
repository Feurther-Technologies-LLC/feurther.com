import React from 'react';
import './Download.css';

const Download = () => {
  return (
    <section id="download" className="download-section">
      <div className="download-container">
        <h2>Don't hesitate, join us and start exercising now!</h2>
        <div className="download-buttons">
          <a 
            href="https://apps.apple.com/your-app-link" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="app-store-button"
          >
            <img 
              src={`${process.env.PUBLIC_URL}/images/downloading.png`}
              alt="Download on the App Store" 
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Download; 