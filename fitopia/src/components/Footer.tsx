import React from "react";
import { motion } from "framer-motion";
import logoSvg from "../assets/logo.svg";
import appStoreWhiteBadge from "../assets/US/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg";

const Footer: React.FC = () => {
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative bg-gray-900 text-white pt-24 pb-12 px-6 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            className="w-full h-auto fill-white"
          >
            <path d="M0,64L120,69.3C240,75,480,85,720,80C960,75,1200,53,1320,42.7L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
          </svg>
        </div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-orange-500 opacity-10 blur-3xl"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-orange-500 opacity-10 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          {/* Logo and Description */}
          <motion.div variants={item}>
            <img src={logoSvg} alt="Fitopia" className="h-10 mb-4" />
            <p className="text-gray-400 mb-6 max-w-xl">
              Empowering your fitness journey with technology and community.
              Track, analyze, and improve your workouts with precision.
            </p>
            <div className="mt-8">
              <div className="text-sm text-gray-500 mb-2">Download App</div>
              <div className="flex gap-4">
                <a
                  href="https://apps.apple.com/us/app/pushup-everyday-fitopia/id6739538834?l"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src={appStoreWhiteBadge}
                    alt="Download on the App Store"
                    className="h-10"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Us - Simplified */}
          <motion.div id="faq" variants={item}>
            <h3 className="text-lg font-semibold mb-4 text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500"></span>
            </h3>
            <p className="text-gray-400 mb-8">
              Have a question or want to learn more about Fitopia? Reach out to
              us through one of the following channels.
            </p>

            <div className="space-y-6">
              <div>
                <a
                  href="mailto:contact@feurther.com"
                  className="flex items-center text-gray-300 hover:text-orange-400 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-800 group-hover:bg-orange-500 flex items-center justify-center transition-colors mr-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white group-hover:text-orange-400 transition-colors">
                      Email Us
                    </p>
                    <p className="text-sm text-gray-400">
                      contact@feurther.com
                    </p>
                  </div>
                </a>
              </div>

              <div>
                <a
                  href="https://discord.gg/sQgNVkY8bC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-orange-400 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-800 group-hover:bg-orange-500 flex items-center justify-center transition-colors mr-4">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white group-hover:text-orange-400 transition-colors">
                      Join our Discord
                    </p>
                    <p className="text-sm text-gray-400">
                      Connect with our community
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="pt-10 border-t border-gray-800 text-center text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} Feurther Technologies LLC. All
            Rights Reserved.
          </p>
          <div className="mt-8 md:mt-0 flex space-x-6">
            <a
              href="#support"
              onClick={(e) => {
                e.preventDefault();
                const newWindow = window.open("/support", "_blank");
                if (newWindow) {
                  newWindow.document.write(`
                     <html>
                       <head>
                         <title>Technical Support - Fitopia</title>
                         <style>
                           body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
                           h1 { color: #f97316; }
                           h2 { margin-top: 30px; color: #1f2937; }
                           a { color: #f97316; text-decoration: none; }
                         </style>
                       </head>
                       <body>
                         <h1>Technical Support</h1>
                         <h2>Contact Us</h2>
                         <p>Email: <a href="mailto:contact@feurther.com">contact@feurther.com</a></p>
                         <p>Response Time: Within 24 hours</p>
                         <h2>When reporting issues, please include:</h2>
                         <ul>
                           <li>App Version</li>
                           <li>iOS Version</li>
                           <li>Device Model</li>
                           <li>Issue Description</li>
                         </ul>
                         <p>We're here to help!</p>
                       </body>
                     </html>
                   `);
                }
              }}
              className="text-gray-500 hover:text-orange-500 transition-colors"
            >
              Support
            </a>
            <a
              href="#privacy"
              onClick={(e) => {
                e.preventDefault();
                const newWindow = window.open("/privacy", "_blank");
                if (newWindow) {
                  newWindow.document.write(`
                     <html>
                       <head>
                         <title>Privacy Policy - Fitopia</title>
                         <style>
                           body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
                           h1 { color: #f97316; }
                           h2 { margin-top: 30px; color: #1f2937; }
                           a { color: #f97316; text-decoration: none; }
                         </style>
                       </head>
                       <body>
                         <h1>Privacy Policy</h1>
                         <p>Last Updated: 2025/1/16</p>
                         <p>FITANA does not collect, store, or share any personal information. The app works entirely on your local device without any data collection.</p>
                         <h2>Contact</h2>
                         <p>For any questions about this privacy policy, please contact us at:<br/>
                         Email: <a href="mailto:contact@feurther.com">contact@feurther.com</a></p>
                         <h2>Changes</h2>
                         <p>If we make any changes to this policy, we will update this page.</p>
                       </body>
                     </html>
                   `);
                }
              }}
              className="text-gray-500 hover:text-orange-500 transition-colors"
            >
              Privacy
            </a>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-600 opacity-60 text-center">
          <p className="max-w-4xl mx-auto">
            Disclaimer: Use of the Fitopia app is entirely at your own risk. By
            using this app, you acknowledge that all exercise routines,
            including push-ups, carry inherent risks. Fitopia and its developers
            are not responsible for any injuries, damages, or other adverse
            effects that may occur during or after the use of this app. Always
            consult with a healthcare professional before starting any new
            exercise program.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
