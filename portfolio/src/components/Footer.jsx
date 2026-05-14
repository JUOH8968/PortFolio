import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content glass-panel">
          <div className="footer-goals">
            <h3 className="footer-title">목표 및 강점</h3>
            <div className="goal-item">
              <span className="goal-label">🎯 목표</span>
              <p>기술적 역량을 넘어 다양한 도메인 지식을 흡수하여, 비즈니스 맥락을 이해하는 융합형 개발자가 되겠습니다.</p>
            </div>
            <div className="goal-item">
              <span className="goal-label">💪 강점</span>
              <p>심리학 복수전공 배경으로 사용자 행동을 이해하고, MBTI 기반 AI 코칭 서비스와 감성 분류 챗봇 개발에 직접 적용했습니다. 파인튜닝 정확도 90% → 96% 개선처럼, 데이터로 결과를 증명하는 개발자입니다.</p>
            </div>
            <div className="profile-links">
              <div className="contact-item">
                <img src="/images/Emial_icon.png" alt="Email" className="custom-icon-img" />
                <span className="link-text">hongjuo543@gmail.com</span>
              </div>
              <div className="link-row">
                <a href="https://github.com/JUOH8968" target="_blank" rel="noopener noreferrer" className="link-item">
                  <img src="/images/images_git.png" alt="GitHub" className="custom-icon-img" />
                  <span className="link-text">GitHub</span>
                </a>
                <a href="https://data8968.tistory.com" target="_blank" rel="noopener noreferrer" className="link-item">
                  <img src="/images/icon_tistory.png" alt="Tistory" className="custom-icon-img" />
                  <span className="link-text">Blog</span>
                </a>
                <a href="https://drive.google.com/file/d/1f5HYds3yqon7waP-Ai2Iyh7Gd--8OnTk/view?usp=sharing" rel="noopener noreferrer" className="link-item">
                  <span className="link-icon" style={{ fontSize: '1.3rem' }}>📄</span>
                  <span className="link-text" style={{ fontWeight: 'bold', color: 'var(--accent-color)' }}>이력서 보기</span>
                </a>
              </div>



            </div>
          </div>

          <div className="footer-bottom">
            <h2 className="footer-logo">
              Keep Going <span className="highlight">AI</span>
            </h2>
            <p className="footer-copyright">
              © {new Date().getFullYear()} AI Agent Engineer Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
