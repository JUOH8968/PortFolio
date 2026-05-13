import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "LLM / NLP (주력 역량)",
      icon: "🧠",
      skills: [
        { text: "Hugging Face 기반 LLM 로딩 및 파인튜닝", score: 5, icon: "🤖" },
        { text: "감정분류, 리뷰 분석 등 텍스트 데이터 처리", score: 4, icon: "📝" },
        { text: "LangGraph를 활용한 상태 기반 AI Agent 설계 및 워크플로우 최적화", score: 5, icon: "🕸️" },
        { text: "Prompt Engineering, OpenAI API, AI agent 활용", score: 4, icon: "💬" },
        { text: "RAG를 활용한 LLM의 Hallucination 개선 및 신뢰도 높은 답변 생성", score: 4, icon: "🔍" }
      ]
    },
    {
      title: "Data / ETL",
      icon: "📊",
      skills: [
        { text: "Python(Pandas, Numpy)을 활용한 데이터 전처리", score: 4, icon: "🐍" },
        { text: "PostgreSQL / Pinecone / Oracle DB 에서 데이터 관리", score: 3, icon: "🗄️" }
      ]
    },
    {
      title: "Service / Deployment",
      icon: "🚀",
      skills: [
        { text: "FastAPI 기반 API 서버 구성", score: 4, icon: "⚡" },
        { text: "React를 활용한 프론트엔드 개발", score: 3, icon: "⚛️" },
        { text: "AWS (EC2) 을 활용한 서비스 배포", score: 3, icon: "☁️" }
      ]
    }
  ];

  const renderStars = (score) => {
    return (
      <div className="star-rating">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`star ${i < score ? 'filled' : 'empty'}`}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Capabilities</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card glass-panel" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="skill-header">
                <span className="skill-icon">{category.icon}</span>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-item-icon">{skill.icon}</span>
                      <span className="skill-text">{skill.text}</span>
                    </div>
                    {renderStars(skill.score)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
