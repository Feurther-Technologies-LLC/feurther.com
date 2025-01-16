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
            href="https://discord.gg/sQgNVkY8bC" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-button"
          >
            <img 
              src={`${process.env.PUBLIC_URL}/images/discord.png`}
              alt="Discord" 
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
        <div className="contact-links">
          <a href="/support" className="contact-link">Support</a>
          <span className="contact-divider">|</span>
          <a href="/privacy" className="contact-link">Privacy Policy</a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 