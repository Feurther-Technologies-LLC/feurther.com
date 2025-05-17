import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// 导入图片资源
// @ts-ignore
import workoutMenuImg from "../assets/screenshot/workoutMenu_new.png";
// @ts-ignore
import setgoal from "../assets/screenshot/set goal_new.png";
// @ts-ignore
import workoutSummaryImg from "../assets/screenshot/workout summary_new.png";
// @ts-ignore
import ip from "../assets/screenshot/ip.png";
import visual from "../assets/screenshot/visual.png";
import firscore from "../assets/screenshot/fitscore.png";
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
  const featureRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const featureControls = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const featureInView = featureRefs.map((ref) =>
    useInView(ref, { once: false, amount: 0.3 })
  );

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
    {
      tag: "Customize Your Workout",
      title: "Personalize Your Training Goals",
      description:
        "Set personalized fitness goals that fit your schedule and lifestyle.",
      bulletPoints: [
        "Create daily, weekly workout goals",
        "Track workout trends over time",
        "Receive personalized recommendations",
      ],
      buttonText: "Set Goals",
      image: setgoal,
      imageAlt: "Workout Summary and Tracking Screenshot",
    },
    {
      tag: "Posture Recognition",
      title: "Your effort is being seen",
      description:
        "Use phone camera to monitor your exercise form in real-time.",
      bulletPoints: [
        "Interactive workout experience",
        "Instant feedback on form and posture",
        "Get motivated voice like personal trainer by your side",
        "Record workout session and share with friends",
      ],
      buttonText: "Learn More",
      image: visual,
      imageAlt: "Workout Menu Screenshot",
    },
    {
      tag: "Gamification Design",
      title: "Every workout is a victory",
      description:
        "Make fitness fun with our engaging gamification elements that motivate you to stick with workout routine.",
      bulletPoints: [
        "Earn XP and level up with each workout",
        "Unlock achievements and titles",
      ],
      buttonText: "View Rewards",
      image: workoutSummaryImg,
      imageAlt: "Trophy and Rewards Screenshot",
    },
    {
      tag: "Evaluate Progress",
      title: "Test your body With Standard Metrics",
      description:
        "Evaluate your fitness level based on US Army Standard. Show them what you've got!",
      bulletPoints: [
        "Visualize your real improvement with detailed charts",
        "Compete with others, and yourself",
        "Get a detailed report of your progress",
      ],
      buttonText: "Set Goals",
      image: firscore,
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
          {/* Simple */}
          <motion.div
            className="bg-white rounded-lg p-4 shadow-sm hover:shadow transition-shadow"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -3 }}
          >
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-3">
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
              </div>
              <h3 className="text-lg font-bold text-gray-800">Simple</h3>
            </div>
            <p className="text-gray-600 text-sm pl-11">
              No complicated setups or equipment needed. Just you, your phone,
              and a little space.
            </p>
          </motion.div>

          {/* Fun */}
          <motion.div
            className="bg-white rounded-lg p-4 shadow-sm hover:shadow transition-shadow"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -3 }}
          >
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-3">
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
              </div>
              <h3 className="text-lg font-bold text-gray-800">Fun</h3>
            </div>
            <p className="text-gray-600 text-sm pl-11">
              Turn exercises into games. Earn rewards, complete challenges, and
              celebrate your progress.
            </p>
          </motion.div>

          {/* Effective */}
          <motion.div
            className="bg-white rounded-lg p-4 shadow-sm hover:shadow transition-shadow"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -3 }}
          >
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-3">
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
              </div>
              <h3 className="text-lg font-bold text-gray-800">Effective</h3>
            </div>
            <p className="text-gray-600 text-sm pl-11">
              Get real results through science-backed workout plan and test. Our
              AI-powered posture detection ensures proper form with every rep.
            </p>
          </motion.div>
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
                className={`absolute -z-10 rounded-full ${
                  index % 2 === 0
                    ? "-left-10 md:-left-20"
                    : "-right-10 md:-right-20"
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
                {/* 移除外容器，只保留图片 */}
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
                    className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
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

                  {/* 移除按钮部分 */}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer Section */}
        <motion.div
          className="mt-24 text-center text-sm text-gray-500 max-w-2xl mx-auto px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-medium text-orange-500 mb-4">
            * Important Notice *
          </p>
          <p className="leading-relaxed">
            The current demo of Fitopia only supports push-up and iPhone
            platform. While using the application, please ensure adequate space
            around you and maintain awareness of your surroundings. We strongly
            recommend consulting your healthcare provider before starting any
            exercise program, particularly if you have pre-existing medical
            conditions. Fitopia shall not be held liable for any injuries,
            accidents, or health issues that may arise from the use of this
            application.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
