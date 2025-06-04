import React from "react";
import { motion, AnimationControls } from "framer-motion";
import { Feature } from "./featuresData";

interface FeatureCardProps {
  feature: Feature;
  index: number;
  featureRef: React.RefObject<HTMLDivElement | null>;
  controls: AnimationControls;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  feature,
  index,
  featureRef,
  controls,
}) => {
  return (
    <motion.div
      ref={featureRef}
      className="flex flex-col md:flex-row items-center gap-12 relative"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.6,
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {/* 背景装饰元素 */}
      <motion.div
        className={`absolute -z-10 rounded-full ${
          index % 2 === 0 ? "-left-10 md:-left-20" : "-right-10 md:-right-20"
        } top-1/4 w-32 h-32 md:w-40 md:h-40 bg-orange-50 opacity-40 blur-xl`}
        variants={{
          hidden: { scale: 0, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 0.4,
            transition: {
              duration: 0.6,
            },
          },
        }}
      ></motion.div>

      {/* 图片部分 - 奇数索引在左，偶数索引在右 */}
      <motion.div
        className={`w-full md:w-1/2 ${
          index % 2 === 1 ? "md:order-2" : "md:order-1"
        }`}
        variants={{
          hidden: { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 80,
              damping: 15,
            },
          },
        }}
      >
        <motion.div
          className="w-full h-full flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <img
            src={feature.image}
            alt={feature.imageAlt}
            className={`w-full h-auto ${
              feature.tag === "Posture Recognition"
                ? "max-w-[450px]"
                : "max-w-[280px]"
            } mx-auto object-contain rounded-xl drop-shadow-lg`}
          />
        </motion.div>
      </motion.div>

      {/* 文字部分 - 奇数索引在右，偶数索引在左 */}
      <motion.div
        className={`w-full md:w-1/2 ${
          index % 2 === 1 ? "md:order-1" : "md:order-2"
        }`}
        variants={{
          hidden: { x: index % 2 === 0 ? 50 : -50, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 80,
              damping: 15,
            },
          },
        }}
      >
        <div className="p-6">
          <motion.div
            className="inline-block px-4 py-1.5 mb-5 bg-orange-100 text-orange-600 font-medium rounded-full text-sm shadow-sm"
            variants={{
              hidden: { y: -20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            {feature.tag}
          </motion.div>
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 italic"
            variants={{
              hidden: { y: -20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            {feature.title}
          </motion.h3>
          <motion.p
            className="text-gray-600 mb-8 text-xl"
            variants={{
              hidden: { y: -20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            {feature.description}
          </motion.p>

          <motion.ul
            className="space-y-4 mb-10"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            {feature.bulletPoints.map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start"
                variants={{
                  hidden: { x: -10, opacity: 0 },
                  visible: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      delay: i * 0.1,
                    },
                  },
                }}
              >
                <div className="bg-orange-100 rounded-full p-1.5 text-orange-500 mt-1 mr-3 flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FeatureCard;
