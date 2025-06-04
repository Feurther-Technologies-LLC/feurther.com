import React from "react";
import { motion, AnimationControls } from "framer-motion";

interface VisionSectionProps {
  controls: AnimationControls;
}

const VisionSection: React.FC<VisionSectionProps> = ({ controls }) => {
  const visionItems = [
    {
      title: "Simple",
      description:
        "No complicated setups or equipment needed. Just you, your phone, and a little space.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      title: "Fun",
      description:
        "Turn exercises into games. Earn rewards, complete challenges, and celebrate your progress.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Effective",
      description:
        "Get real results through science-backed workout plan and test. Our AI-powered posture detection ensures proper form with every rep.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <motion.div
        className="text-center mb-10"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
            },
          },
        }}
      >
        <div className="inline-block px-4 py-1 mb-4 bg-orange-100 text-orange-600 font-medium rounded-full text-sm shadow-sm">
          Our Vision
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
          Exercise can be simple, fun, and effective.
        </h2>
      </motion.div>

      {/* 三个理念展示区域 */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {visionItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg p-4 shadow-sm hover:shadow transition-shadow"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -3 }}
          >
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-3">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
            </div>
            <p className="text-gray-600 text-sm pl-11">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default VisionSection;
