import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import recognitionImg from '../assets/rec.png';
import gamificationImg from '../assets/gamification.png';
import trackImg from '../assets/track.png';

const Features: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0);
  
  const features = [
    {
      icon: (
        <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Real-time Posture Recognition',
      description: 'Using advanced computer vision technology to detect and analyze your exercise posture in real-time, ensuring every movement is precise.'
    },
    {
      icon: (
        <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: 'Gamification Design',
      description: 'Earn experience rewards after training, level up, and unlock unique titles and trophies!'
    },
    {
      icon: (
        <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Customizable Goals & Progress Tracking',
      description: 'Set personalized daily and weekly fitness goals that match your schedule. Track your workout progress with detailed statistics and visualizations.'
    }
  ];

  const SectionRef = useRef(null);
  const isInView = useInView(SectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const handlePrevCard = () => {
    setCurrentCard((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const handleNextCard = () => {
    setCurrentCard((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const featureCards = [
    // 卡片 1: 实时姿势识别
    {
      tag: "FEATURE 01",
      title: "Real-time Posture Recognition",
      description: "Our advanced computer vision technology monitors your exercise form in real-time, ensuring every push-up is performed with perfect technique.",
      bulletPoints: [
        'Instant feedback on form and posture',
        'Detects and corrects common push-up errors',
        'Reduces injury risk through proper technique',
        'Works in various lighting conditions'
      ],
      buttonText: "Learn More",
      image: recognitionImg,
      imageAlt: "Posture Recognition Demo"
    },
    // 卡片 2: 游戏化设计
    {
      tag: "FEATURE 02",
      title: "Gamification Design",
      description: "Make fitness fun with our engaging gamification elements that motivate you to stick with your workout routine and continuously improve.",
      bulletPoints: [
        'Earn XP and level up with each workout',
        'Unlock achievements and collectible badges',
        'Compete on leaderboards with friends',
        'Complete daily challenges for bonus rewards'
      ],
      buttonText: "View Rewards",
      image: gamificationImg,
      imageAlt: "Gamification Elements"
    },
    // 卡片 3: 可定制目标和进度跟踪
    {
      tag: "FEATURE 03",
      title: "Customizable Goals & Progress Tracking",
      description: "Set personalized fitness goals that fit your schedule and lifestyle, then track your progress with detailed analytics and visualizations.",
      bulletPoints: [
        'Create daily, weekly, or monthly targets',
        'Track and analyze workout trends over time',
        'Visualize your improvement with detailed charts',
        'Receive personalized recommendations'
      ],
      buttonText: "Set Goals",
      image: trackImg,
      imageAlt: "Progress Tracking Dashboard"
    }
  ];

  return (
    <section id="features" className="relative py-20 px-6 overflow-hidden" ref={SectionRef}>
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-orange-200 opacity-20 blur-3xl"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-orange-100 opacity-30 blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.8,
              }
            }
          }}
        >
          <div className="inline-block px-4 py-1 mb-4 bg-orange-100 text-orange-600 font-medium rounded-full text-sm">
            POWERFUL FEATURES
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            All You Need for Your <span className="text-orange-500">Fitness Journey</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            FITOPIA combines cutting-edge technology with proven fitness science to deliver the ultimate workout experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 transition-all duration-300 relative group overflow-hidden"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.1 * index
                  }
                }
              }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="mb-6 p-3 bg-orange-50 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:bg-orange-100 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors duration-300">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <div 
                className="mt-6 flex items-center text-orange-500 font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setCurrentCard(index);
                  document.getElementById('featureDetails')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn more
                <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* 特性详情卡片 - 滑动容器 */}
        <motion.div 
          id="featureDetails"
          className="mt-24 scroll-mt-24"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.4
              }
            }
          }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Experience the <span className="text-orange-500">FITOPIA Difference</span>
          </h2>
          
          <div className="relative">
            {/* 左翻页按钮 */}
            <button 
              onClick={handlePrevCard}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-orange-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-300 md:-left-5 lg:-left-8"
            >
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* 右翻页按钮 */}
            <button 
              onClick={handleNextCard}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-orange-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-300 md:-right-5 lg:-right-8"
            >
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* 卡片容器 */}
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <motion.div 
                className="flex w-full"
                animate={{ x: `${-currentCard * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {featureCards.map((card, index) => (
                  <div key={index} className="bg-white min-w-full">
                    <div className="grid md:grid-cols-2 gap-4 items-center">
                      <div className="p-6 md:p-10 lg:p-12">
                        <div className="inline-block px-3 py-1 mb-4 bg-orange-100 text-orange-600 font-medium rounded-full text-xs">
                          {card.tag}
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                        <p className="text-gray-600 mb-6">
                          {card.description}
                        </p>
                        
                        <ul className="space-y-3 mb-8">
                          {card.bulletPoints.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <svg className="w-5 h-5 text-orange-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-md hover:shadow-lg">
                          {card.buttonText}
                        </button>
                      </div>
                      
                      <div className="bg-gradient-to-br from-orange-50 to-white p-6 h-full flex items-center justify-center">
                        {/* 实际图片 */}
                        <div className="relative w-full h-full flex items-center justify-center">
                          <div className="rounded-xl overflow-hidden shadow-md w-full max-w-md aspect-[4/3]">
                            <img 
                              src={card.image} 
                              alt={card.imageAlt} 
                              className="w-full h-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* 导航指示器 */}
            <div className="flex justify-center mt-8 space-x-3">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCard(index)}
                  className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                    currentCard === index ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 