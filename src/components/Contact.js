import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>If you have any questions, feel free to contact us through the following channels!</h2>
        <div className="contact-buttons">
          <a 
            href="https://github.com/Feurther-Technologies-LLC" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-button"
          >
            <img 
              src={`${process.env.PUBLIC_URL}/images/github.png`}
              alt="GitHub" 
            />
          </a>
          <a 
            href="https://twitter.com/your-twitter" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-button"
          >
            <img 
              src={`${process.env.PUBLIC_URL}/images/twitter.png`}
              alt="X (Twitter)" 
            />
          </a>
          <a 
            href="mailto:contact@feurther.com" 
            className="contact-button"
          >
            <img 
              src={`${process.env.PUBLIC_URL}/images/gmail-logo.png`}
              alt="Email" 
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 