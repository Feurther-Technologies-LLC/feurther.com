import { useEffect, useRef, useMemo } from "react";
import { useAnimation, useInView } from "framer-motion";

export const useFeatureAnimations = () => {
  const SectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(SectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();

  // 为每个特性卡片创建单独的引用和动画控制器
  const featureRef1 = useRef<HTMLDivElement>(null);
  const featureRef2 = useRef<HTMLDivElement>(null);
  const featureRef3 = useRef<HTMLDivElement>(null);
  const featureRef4 = useRef<HTMLDivElement>(null);

  const featureControl1 = useAnimation();
  const featureControl2 = useAnimation();
  const featureControl3 = useAnimation();
  const featureControl4 = useAnimation();

  // 使用 useMemo 来创建数组
  const featureRefs = useMemo(
    () => [featureRef1, featureRef2, featureRef3, featureRef4],
    [featureRef1, featureRef2, featureRef3, featureRef4]
  );

  const featureControls = useMemo(
    () => [featureControl1, featureControl2, featureControl3, featureControl4],
    [featureControl1, featureControl2, featureControl3, featureControl4]
  );

  // 将 useInView 调用移到组件顶层
  const featureInView1 = useInView(featureRef1, { once: false, amount: 0.3 });
  const featureInView2 = useInView(featureRef2, { once: false, amount: 0.3 });
  const featureInView3 = useInView(featureRef3, { once: false, amount: 0.3 });
  const featureInView4 = useInView(featureRef4, { once: false, amount: 0.3 });

  const featureInView = useMemo(
    () => [featureInView1, featureInView2, featureInView3, featureInView4],
    [featureInView1, featureInView2, featureInView3, featureInView4]
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

  return {
    SectionRef,
    controls,
    featureRefs,
    featureControls,
  };
};
