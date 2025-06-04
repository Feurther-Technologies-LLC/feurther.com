// 导入图片资源
import setgoal from "../../assets/screenshot/set goal_new.png";
import workoutSummaryImg from "../../assets/screenshot/workout summary_new.png";
import visual from "../../assets/screenshot/visual.png";
import firscore from "../../assets/screenshot/fitscore.png";

// 定义特性项类型
export interface Feature {
  tag: string;
  title: string;
  description: string;
  bulletPoints: string[];
  image: string;
  imageAlt: string;
}

// 特性卡片数据
export const featureCards: Feature[] = [
  {
    tag: "Custom Workouts",
    title: "Work out the way you want",
    description:
      "Set personalized fitness goals that fit your schedule and lifestyle.",
    bulletPoints: [
      "Create daily, weekly workout goals",
      "Track workout trends over time",
      "Receive personalized recommendations",
    ],
    image: setgoal,
    imageAlt: "Workout Summary and Tracking Screenshot",
  },
  {
    tag: "Posture Recognition",
    title: "Your effort is being seen",
    description: "Use phone camera to monitor your exercise form in real-time.",
    bulletPoints: [
      "Interactive workout experience",
      "Instant feedback on form and posture",
      "Get motivated voice like personal trainer by your side",
      "Record workout session and share with friends",
    ],
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
    image: workoutSummaryImg,
    imageAlt: "Trophy and Rewards Screenshot",
  },
  {
    tag: "Evaluate Progress",
    title: "Test your body with Fit Score",
    description:
      "Evaluate your strength and endurance with Fit Score, a scientific metric based on US Army & ACSM Standard.",
    bulletPoints: [
      "Visualize your real improvement with detailed charts",
      "Compete with others, and yourself",
      "Get a detailed report of your progress",
    ],
    image: firscore,
    imageAlt: "Workout Summary and Tracking Screenshot",
  },
];
