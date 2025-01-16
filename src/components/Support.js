import React from 'react';
import './Support.css';

const Support = () => {
  return (
    <section className="support-section">
      <div className="support-container">
        <h1>Technical Support</h1>
        
        <div className="support-content">
          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>Email: <a href="mailto:contact@feurther.com">contact@feurther.com</a></p>
            <p>Response Time: Within 24 hours</p>
          </div>

          <div className="reporting-guide">
            <h2>When reporting issues, please include:</h2>
            <ul>
              <li>App Version</li>
              <li>iOS Version</li>
              <li>Device Model</li>
              <li>Issue Description</li>
            </ul>
          </div>

          <p className="support-message">We're here to help!</p>
        </div>
      </div>
    </section>
  );
};

export default Support; 