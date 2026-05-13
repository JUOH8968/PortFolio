import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="profile-container glass-panel animate-fade-in">
          <div className="profile-image-wrapper">
            <img src="/images/my_profile.jpg" alt="Profile" className="profile-img" />
          </div>

          <div className="profile-info">
            <h3 className="profile-name">홍주오 (JU OH HONG)</h3>
            <h4 className="profile-role">AI Agent Engineer(Full-Stack) </h4>

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
                <a href="https://drive.google.com/file/d/1cj2uniuxjxzRZ6UALy4uy6BcQScJymo0/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="link-item">
                  <span className="link-icon" style={{ fontSize: '1.3rem' }}>📄</span>
                  <span className="link-text" style={{ fontWeight: 'bold', color: 'var(--accent-color)' }}>이력서 보기</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-card glass-panel animate-fade-in">
            <div className="card-icon">🎓</div>
            <h3 className="card-title">학력</h3>
            <ul className="about-list">
              <li>
                <div className="list-title">선문대학교 (4년제 졸업)</div>
                <div className="list-desc">(주) 정보통신공학과 / (복) 상담산업심리학과</div>
              </li>
            </ul>
          </div>

          <div className="about-card glass-panel animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="card-icon">💻</div>
            <h3 className="card-title">교육 수료</h3>
            <ul className="about-list">
              <li>
                <div className="list-title">생성형 AI 인공지능 개발자 부트캠프(KDT)</div>
                <div className="list-date">2025.12.22 ~ 2026.02.26</div>
              </li>
              <li>
                <div className="list-title">빅데이터 머신러닝 전문가 양성과정(KDT)</div>
                <div className="list-date">2023.08.03 ~ 2024.01.31</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
