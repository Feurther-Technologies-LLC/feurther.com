import React from "react";
import { motion } from "framer-motion";
import appStoreBadge from "../assets/US/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-orange-50 py-20 md:py-24 lg:py-28">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-orange-100 opacity-30 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 rounded-full bg-orange-200 opacity-20 blur-3xl"></div>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
        {/* 左侧内容 */}
        <div className="lg:w-1/2 mb-16 lg:mb-0 lg:pr-10 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-orange-500">Transform</span>
              <br />
              Your Fitness Journey
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Fitopia makes your in-home workout fun and effective with AI
              computer vision & game-like design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="flex flex-col">
                <motion.a
                  href="https://apps.apple.com/us/app/pushup-everyday-fitopia/id6739538834?l"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={appStoreBadge}
                    alt="Download on the App Store"
                    className="h-16"
                  />
                </motion.a>
                <p className="text-sm text-orange-500 font-medium mt-1 text-center">
                  Demo Download Available
                </p>
              </div>
            </div>

            {/* 社交证明改为邮箱订阅 */}
            <div className="mt-12">
              <p className="text-gray-500 mb-3 text-sm font-medium">
                Join our email list
              </p>
              <div className="max-w-md">
                <form
                  action="https://formsubmit.co/email-sub@feurther.com"
                  method="POST"
                  className="flex"
                >
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your email address"
                    className="flex-grow rounded-l-lg px-5 py-4 border-2 border-orange-200 focus:border-orange-400 outline-none text-gray-600 text-base"
                  />
                  <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-4 rounded-r-lg transition-colors flex items-center text-base"
                  >
                    Subscribe
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 右侧视频 */}
        <motion.div
          className="lg:w-3/5 relative z-10"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-orange-200 rounded-lg rotate-6 z-0"></div>
            <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-orange-300 rounded-lg -rotate-6 z-0"></div>

            <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10 border-8 border-white transform translate-x-8 translate-y-8">
              <video
                className="w-full h-auto object-cover"
                autoPlay
                muted
                loop
                playsInline
                style={{ minHeight: "480px" }}
              >
                <source src="/background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* 浮动元素 */}
            <motion.div
              className="absolute -right-6 top-6 bg-white rounded-lg shadow-lg p-3 z-20"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-2">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-500">
                    Daily Goal
                  </div>
                  <div className="text-sm font-bold">Completed!</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -left-6 bottom-24 bg-white rounded-lg shadow-lg p-3 z-20"
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-500">
                    Calories
                  </div>
                  <div className="text-sm font-bold">268 kcal</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 波浪底部装饰 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto"
        >
          <path
            fill="#FFFFFF"
            fillOpacity="1"
            d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,48C1248,53,1344,75,1392,85.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
