# Features 模块

这个模块包含了 Fitopia 应用的特性展示部分的所有组件和相关逻辑。

## 文件结构

```
features/
├── index.ts                 # 模块导出索引
├── featuresData.ts         # 特性数据和类型定义
├── BackgroundDecorations.tsx  # 背景装饰组件
├── VisionSection.tsx       # 理念展示区域组件 (Simple, Fun, Effective)
├── FeatureCard.tsx         # 单个特性卡片组件
├── DisclaimerSection.tsx   # 免责声明组件
├── useFeatureAnimations.ts # 动画逻辑自定义Hook
└── README.md              # 这个文件
```

## 组件说明

### BackgroundDecorations

- 负责渲染页面背景的装饰元素
- 包含渐变背景和动画球体

### VisionSection

- 展示应用的核心理念："简单、有趣、有效"
- 包含标题和三个理念卡片

### FeatureCard

- 可复用的特性卡片组件
- 支持左右交替布局
- 包含图片、文字和动画效果

### DisclaimerSection

- 免责声明文本
- 独立的功能模块

### useFeatureAnimations

- 自定义 Hook，管理所有动画逻辑
- 处理视图检测和动画控制器

### featuresData

- 包含所有特性数据
- 定义 Feature 类型接口
- 集中管理特性内容

## 使用示例

```tsx
import BackgroundDecorations from "./features/BackgroundDecorations";
import VisionSection from "./features/VisionSection";
import FeatureCard from "./features/FeatureCard";
import DisclaimerSection from "./features/DisclaimerSection";
import { useFeatureAnimations } from "./features/useFeatureAnimations";
import { featureCards } from "./features/featuresData";

const Features = () => {
  const { SectionRef, controls, featureRefs, featureControls } =
    useFeatureAnimations();

  return (
    <section ref={SectionRef}>
      <BackgroundDecorations />
      <VisionSection controls={controls} />
      {featureCards.map((feature, index) => (
        <FeatureCard
          key={index}
          feature={feature}
          index={index}
          featureRef={featureRefs[index]}
          controls={featureControls[index]}
        />
      ))}
      <DisclaimerSection />
    </section>
  );
};
```

## 优点

1. **模块化**: 每个组件职责单一，易于维护和测试
2. **可复用**: 组件可以在其他地方重复使用
3. **类型安全**: 使用 TypeScript 提供完整的类型定义
4. **逻辑分离**: 动画逻辑、数据和 UI 组件分离
5. **易于扩展**: 新增特性只需要修改数据文件
