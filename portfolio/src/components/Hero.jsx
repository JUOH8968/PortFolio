import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
      </div>

      <div className={`container hero-content ${isVisible ? 'visible' : ''}`}>
        <div className="hero-badge">포트폴리오</div>
        <h1 className="hero-title">
          Keep Going <span className="highlight">AI</span>
        </h1>
        <h2 className="hero-subtitle">
          사람의 마음을 이해하고,<br />
          기술로 답을 설계하는 <br />
          <span className="highlight-text">AI Agent Engineer 홍주오 </span> 입니다.
        </h2>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">프로젝트 보기</a>
          <a href="#about" className="btn btn-secondary">더 알아보기</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
