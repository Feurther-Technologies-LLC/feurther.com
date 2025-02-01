import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright">
          © 2024 Feurther Technologies LLC. All Rights Reserved.
        </div>
        <div className="disclaimer">
          Disclaimer: Use of the FITANA app is entirely at your own risk. By using this app, you acknowledge that all exercise routines, including push-ups, carry inherent risks. FITANA and its developers are not responsible for any injuries, damages, or other adverse effects that may occur during or after the use of this app. Always consult with a healthcare professional before starting any new exercise program.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 