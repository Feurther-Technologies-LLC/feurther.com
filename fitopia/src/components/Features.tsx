import React from "react";
import BackgroundDecorations from "./features/BackgroundDecorations";
import VisionSection from "./features/VisionSection";
import FeatureCard from "./features/FeatureCard";
import DisclaimerSection from "./features/DisclaimerSection";
import { useFeatureAnimations } from "./features/useFeatureAnimations";
import { featureCards } from "./features/featuresData";

const Features: React.FC = () => {
  const { SectionRef, controls, featureRefs, featureControls } =
    useFeatureAnimations();

  return (
    <section
      id="features"
      className="relative py-20 px-6 overflow-hidden"
      ref={SectionRef}
    >
      <BackgroundDecorations />

      <div className="relative max-w-7xl mx-auto">
        <VisionSection controls={controls} />

        {/* 左右交替的feature展示区域 - 增强动效 */}
        <div className="space-y-32">
          {featureCards.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              featureRef={featureRefs[index]}
              controls={featureControls[index]}
            />
          ))}
        </div>

        <DisclaimerSection />
      </div>
    </section>
  );
};

export default Features;
