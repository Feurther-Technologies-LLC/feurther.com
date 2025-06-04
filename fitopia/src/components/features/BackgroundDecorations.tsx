import React from "react";
import { motion } from "framer-motion";

const BackgroundDecorations: React.FC = () => {
  return (
    <>
      {/* 背景装饰 - 增强版 */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50"></div>
      <motion.div
        className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-orange-200 opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
      <motion.div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-orange-100 opacity-30 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
    </>
  );
};

export default BackgroundDecorations;
