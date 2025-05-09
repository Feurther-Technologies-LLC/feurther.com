import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// 导入图片资源
// @ts-ignore
import workoutMenuImg from "../assets/screenshot/workoutMenu.PNG";
// @ts-ignore
import trophyImg from "../assets/screenshot/trophy.PNG";
// @ts-ignore
import workoutSummaryImg from "../assets/screenshot/workout summary.PNG";

// 定义特性项类型
interface Feature {
  tag: string;
  title: string;
  description: string;
  bulletPoints: string[];
  buttonText: string;
  image: string;
  imageAlt: string;
}

const Features: React.FC = () => {
  const SectionRef = useRef(null);
  const isInView = useInView(SectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();

  // 为每个特性卡片创建单独的引用和动画控制器
  const featureRefs = [useRef(null), useRef(null), useRef(null)];
  const featureControls = [useAnimation(), useAnimation(), useAnimation()];
  const featureInView = featureRefs.map(ref => useInView(ref, { once: false, amount: 0.3 }));

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // 为每个特性卡片设置单独的动画
  useEffect(() => {
    featureInView.forEach((inView, index) => {
      if (inView) {
        featureControls[index].start("visible");
      }
    });
  }, [featureInView, featureControls]);

  // 特性卡片数据
  const featureCards: Feature[] = [
    // 卡片 1: 实时姿势识别
    {
      tag: "FEATURE 01",
      title: "Real-time Posture Recognition",
      description:
        "Our advanced computer vision technology monitors your exercise form in real-time, ensuring every push-up is performed with perfect technique.",
      bulletPoints: [
        "Instant feedback on form and posture",
        "Detects and corrects common errors",
        "Reduces injury risk through proper technique",
        "Works in various lighting conditions",
      ],
      buttonText: "Learn More",
      image: workoutMenuImg,
      imageAlt: "Workout Menu Screenshot",
    },
    // 卡片 2: 游戏化设计
    {
      tag: "FEATURE 02",
      title: "Gamification Design",
      description:
        "Make fitness fun with our engaging gamification elements that motivate you to stick with your workout routine and continuously improve.",
      bulletPoints: [
        "Earn XP and level up with each workout",
        "Unlock achievements and badges",
        "Compete on leaderboards with friends",
        "Complete daily challenges for rewards",
      ],
      buttonText: "View Rewards",
      image: trophyImg,
      imageAlt: "Trophy and Rewards Screenshot",
    },
    // 卡片 3: 可定制目标和进度跟踪
    {
      tag: "FEATURE 03",
      title: "Customizable Goals & Tracking",
      description:
        "Set personalized fitness goals that fit your schedule and lifestyle, then track your progress with detailed analytics and visualizations.",
      bulletPoints: [
        "Create daily, weekly, or monthly targets",
        "Track workout trends over time",
        "Visualize improvement with detailed charts",
        "Receive personalized recommendations",
      ],
      buttonText: "Set Goals",
      image: workoutSummaryImg,
      imageAlt: "Workout Summary and Tracking Screenshot",
    },
  ];

  return (
    <section
      id="features"
      className="relative py-20 px-6 overflow-hidden"
      ref={SectionRef}
    >
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

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
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
            POWERFUL FEATURES
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
            All You Need for Your Fitness Journey
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Fitopia combines cutting-edge technology with proven fitness science
            to deliver the ultimate workout experience.
          </p>
        </motion.div>

        {/* 左右交替的feature展示区域 - 增强动效 */}
        <div className="space-y-32">
          {featureCards.map((feature, index) => (
            <motion.div
              key={index}
              ref={featureRefs[index]}
              className="flex flex-col md:flex-row items-center gap-12 relative"
              initial="hidden"
              animate={featureControls[index]}
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
                className={`absolute -z-10 rounded-full ${index % 2 === 0 ? '-left-10 md:-left-20' : '-right-10 md:-right-20'} top-1/4 w-32 h-32 md:w-40 md:h-40 bg-orange-50 opacity-40 blur-xl`}
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: { 
                    scale: 1, 
                    opacity: 0.4,
                    transition: {
                      duration: 0.6,
                    }
                  }
                }}
              ></motion.div>
              
              {/* 图片部分 - 奇数索引在左，偶数索引在右 */}
              <motion.div 
                className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}
                variants={{
                  hidden: { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
                  visible: { 
                    x: 0, 
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 80,
                      damping: 15,
                    }
                  }
                }}
              >
                <div className="bg-gradient-to-br from-orange-50 to-white p-8 h-full flex items-center justify-center rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
                  {/* 装饰性边框 */}
                  <div className="absolute inset-0 border-2 border-orange-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-95 group-hover:scale-100"></div>
                  
                  <motion.div 
                    className="relative w-full h-full flex items-center justify-center"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <div className="rounded-xl overflow-hidden max-w-md mx-auto drop-shadow-lg">
                      <img
                        src={feature.image}
                        alt={feature.imageAlt}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* 文字部分 - 奇数索引在右，偶数索引在左 */}
              <motion.div 
                className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}
                variants={{
                  hidden: { x: index % 2 === 0 ? 50 : -50, opacity: 0 },
                  visible: { 
                    x: 0, 
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 80,
                      damping: 15,
                    }
                  }
                }}
              >
                <div className="p-6">
                  <motion.div 
                    className="inline-block px-4 py-1.5 mb-5 bg-orange-100 text-orange-600 font-medium rounded-full text-xs shadow-sm"
                    variants={{
                      hidden: { y: -20, opacity: 0 },
                      visible: { y: 0, opacity: 1 }
                    }}
                  >
                    {feature.tag}
                  </motion.div>
                  <motion.h3 
                    className="text-2xl md:text-3xl font-bold mb-4 text-gray-800"
                    variants={{
                      hidden: { y: -20, opacity: 0 },
                      visible: { y: 0, opacity: 1 }
                    }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 mb-8 text-lg"
                    variants={{
                      hidden: { y: -20, opacity: 0 },
                      visible: { y: 0, opacity: 1 }
                    }}
                  >
                    {feature.description}
                  </motion.p>

                  <motion.ul 
                    className="space-y-4 mb-10"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 }
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
                              delay: i * 0.1
                            }
                          }
                        }}
                      >
                        <div className="bg-orange-100 rounded-full p-1 text-orange-500 mt-0.5 mr-3 flex-shrink-0">
                          <svg
                            className="w-4 h-4"
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
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  
                  <motion.div
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: { y: 0, opacity: 1 }
                    }}
                  >
                    <motion.button 
                      className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-300 shadow-md hover:shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {feature.buttonText}
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
