import React from 'react';
import './Privacy.css';

const Privacy = () => {
  return (
    <section className="privacy-section">
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: 2025/1/16</p>
        
        <div className="privacy-content">
          <p>
            FITANA does not collect, store, or share any personal information. 
            The app works entirely on your local device without any data collection.
          </p>

          <div className="privacy-contact">
            <h2>Contact</h2>
            <p>
              For any questions about this privacy policy, please contact us at:
              <br />
              Email: <a href="mailto:contact@feurther.com">contact@feurther.com</a>
            </p>
          </div>

          <div className="privacy-changes">
            <h2>Changes</h2>
            <p>If we make any changes to this policy, we will update this page.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy; 