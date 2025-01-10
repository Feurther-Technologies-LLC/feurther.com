// src/components/Intro.js
import React from 'react';
import './Intro.css';

const Intro = React.forwardRef((props, ref) => {
  return (
    <section id="intro" className="intro-section" ref={ref}>
      <div className="intro-content">
        {/* 图片部分 */}
        <div className="intro-image-container">
          <img src="/images/intro_1.png" alt="PUSH APP 界面初始图" className="intro-image" />
        </div>

        {/* 文字部分 */}
        <div className="intro-text">
          <h2>关于 PUSH APP</h2>
          <p>PUSH APP 是一款采用全身视觉识别技术的 iOS 应用，帮助你更高效地训练俯卧撑。</p>
          <p>内置游戏化升级系统和奖励机制，让你的锻炼之路更加轻松有趣。</p>
          <p>运动的过程中配备了教练语音，随时辅导你进行正确的运动。</p>
        </div>
      </div>
    </section>
  );
});

export default Intro;
