import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { FaGithub, FaYoutube, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "StoryProof",
      subtitle: "소설 작가와 독자를 연결하는 AI 플랫폼 (팀 프로젝트)",
      period: "2026.01.12 ~ 2026.03.30",
      description: "사용자의 원고를 Input으로 받아 Hybrid Search를 통해 Storyboard 및 씬 데이터와 대조하여 모순점이나 개연성 결함을 찾아주는 시스템입니다.",
      roles: [
        "Prompt Engineering을 통해 소설 설정 오류 탐지 정확도 개선",
        "Hybrid Search(Vector + BM25)로 캐릭터 설정을 활용, Hallucination을 방지하고 원작 개연성 유지"
      ],
      techStack: ["Gemini 2.5 Flash", "PostgreSQL", "Pinecone DB", "FastAPI", "Celery", "GCP"],
      links: {
        github: "https://github.com/dbwjdtn10/StoryProof",
        youtube: "https://www.youtube.com/watch?v=XFdeJS_S3CU",
        demo: "https://story-proof-dash-bord.vercel.app"
      },
      metrics: "LLM-as-a-judge 평가(5점 척도)에서 하이브리드 서치를 통해 응답 관련성 및 사실 기반성 지표를 3.72 → 3.81점으로 향상시켰으며 전 장르 안정성을 확보했습니다.",
      images: {
        features: [
          { src: "/images/slide_7_1.png", caption: "Rag를 사용하여 사용자가 질문한 문장과 비슷한 맥락이 담긴 문장이나 장면을 찾아 Gemini 에게 전달하여 답변을 생성" },
          { src: "/images/slide_8_1.png", caption: "사용자의 원고 텍스트를 Input으로 받아 Hybrid Search를 통해 Storyboard 및 씬 데이터와 대조한뒤, LLM이 설정의 모순점이나 개연성 결합을 구조화된 데이터로 피드백해주는 시스템" }
        ],
        architecture: ["/images/slide_9_1.png"],
        workflow: ["/images/slide_10_1.png"],
        evaluation: [
          { src: "/images/slide_11_1.png", caption: "성능/크기 효율이 BGE-M3 대비 4.5배 높은 한국어 특화 경량 임베딩 모델 채택" },
          { src: "/images/slide_11_2.png", caption: "키워드(BM25)와 의미(Vector) 검색의 결합으로 Dense Only 대비 정확도를 높일려고 Hybrid Search 채택" }
        ],
        improvements: ["/images/slide_12_1.png"]
      },
      lessonsLearned: [
        "LLM-as-a-judge 기법을 활용해 응답 관련성 및 사실 기반성 지표를 측정한 결과, Vector 단독 검색보다 BM25를 결합한 Hybrid Search가 품질(3.72 → 3.81점)을 높임을 확인하며 검색 전략 설계의 중요성을 깨달음",
        "소설 전체 분석처럼 시간이 오래 걸리는 작업을 Celery로 비동기 처리함으로써 사용자 응답 지연 없이 백그라운드 실행이 가능함을 배우고, 작업 큐 기반 아키텍처의 필요성을 이해함"
      ]
    },
    {
      id: 2,
      title: "MindStep",
      subtitle: "맞춤형 AI 행동 코칭 서비스 (팀 프로젝트)",
      period: "2026.01.05 ~ 2026.01.12",
      description: "사용자의 MBTI와 행동 패턴을 바탕으로, 태스크 진행 시점마다 적절한 동기부여 메시지와 인터랙티브한 코칭을 제공합니다.",
      roles: [
        "사용자 성향 기반 페르소나 적용 및 폭죽 이벤트 등 인터랙티브 코칭 UI(React) 구현",
        "MBTI 바탕 프롬프트 설계로 동기부여 메시지 생성 모델 구축"
      ],
      techStack: ["Gemini 2.0 Flash", "React 19", "FastAPI", "SQLite", "AWS EC2"],
      links: {
        github: "https://github.com/JUOH8968/MindStep",
        youtube: "https://www.youtube.com/watch?v=b7ezm5AXJCs",
        demo: "https://mind-step-swart.vercel.app"
      },
      metrics: "JSON 파싱 98.2%, 의도 인식 92%, 평균 응답 0.8초의 정량적 성능 확보.",
      images: {
        features: [
          {
            descriptions: [
              "Frontend - 사용자 인증부터 챗봇 UI까지, 복잡한 비동기 데이터 흐름을 React 최적화 기법으로 유연하고 빠르게 처리하는 SPA 중심의 클라이언트 시스템"
            ],
            images: [
              "/images/slide_14_1.png",
              "/images/slide_14_2.png"
            ]
          },
          {
            descriptions: [
              "Prompt Engineering - 사용자의 행동 패턴(설문)과 심리 지표(MBTI) 데이터를 런타임에 결합하는 '사용자 메타데이터 기반 동적 프롬프트 주입' 시스템 구축"
            ],
            images: [
              "/images/slide_15_1.png",
              "/images/slide_15_2.png"
            ]
          },
          {
            descriptions: [
              "AI 코칭 프롬프트 프레임워크 - 심리학 이론과 MBTI로 설계된 AI 코칭 프롬프트 프레임워크"
            ],
            images: [
              "/images/slide_16_1.png",
              "/images/slide_16_2.png"
            ]
          }
        ],
        workflow: ["/images/slide_17_1.png"],
        evaluation: ["/images/slide_18_1.png", "/images/slide_18_2.png"],
        improvements: ["/images/slide_19_1.png"]
      },
      lessonsLearned: [
        "React 컴포넌트 기반 구조로 챗봇 UI, Task 사이드바 및 완료 이벤트 등 동적 인터페이스를 직접 구현하며 프론트엔드 웹 개발 역량을 습득",
        "AWS EC2 클라우드 인프라를 활용한 빌드 및 배포 파이프라인을 구성하며 실제 서비스 운영 환경에서의 웹 배포 프로세스를 경험",
        "페르소나별 시스템 프롬프트 설계와 심리 기법을 프롬프트에 녹여내는 과정을 통해 LLM의 응답 품질을 제어하는 프롬프트 엔지니어링 역량을 키움"
      ]
    },
    {
      id: 3,
      title: "Delivery Chatbot",
      subtitle: "배달 앱 리뷰 긍/부정 분류 챗봇 (개인 프로젝트)",
      period: "2025.06.17 ~ 2025.10.15",
      description: "실제 배달 리뷰 데이터를 파인튜닝하고, LangGraph를 활용해 사용자(일반/가게사장님)별 맞춤 응대를 자동화한 챗봇 서비스입니다.",
      roles: [
        "실제 배달 리뷰 데이터(배달의민족, 요기요, 쿠팡이츠) 약 3만건 수집 및 이진 분류로 RoBERTa 모델 직접 Fine-tuning",
        "LangGraph 기반 멀티 노드 워크플로우를 설계하여 일반사용자와 가게사장님을 대상으로 챗봇 자동응대 자동화",
        "AWS EC2 환경 배포, 커스텀 도메인 및 HTTPS 보안 적용"
      ],
      techStack: ["Hugging Face", "LangGraph", "FastAPI", "React 19", "AWS EC2"],
      links: {
        github: "https://github.com/JUOH8968/Chatbot_Delivery_SentimentAnalysis",
        youtube: "https://www.youtube.com/watch?v=cAAMJRh5lS0&t=2s",
        demo: "https://chatbot-delivery-sentiment-analysis-9ce8ge1p6.vercel.app"
      },
      metrics: "RoBERTa 파인튜닝 + 규칙 기반 필터링 결합으로 정확도·F1-Score 90% → 96% 달성(6%향상)",
      images: {
        features: [
          {
            descriptions: [
              "페르소나 기반의 타겟 분리 설계 - 일반 사용자에게는 다각도 리뷰 인사이트를, 가게 사장님에게는 전략적 개선 포인트 및 AI 자동 응대 초안을 제공하여 사용자별 맞춤형 니즈 충족"
            ],
            images: [
              "/images/user.png",
              "/images/boss.png"
            ]
          },
          {
            descriptions: [
              "도메인 지식 기반의 정밀 리뷰 분석 - 실제 배달 서비스 데이터의 특성(맛/배달/가격)을 반영한 규칙 기반 필터링을 AI 모델과 결합하여 사용자 체감 정확도 향상"
            ],
            images: [
              "/images/delivery_analysis_1.png",
              "/images/delivery_analysis_2.png",
              "/images/delivery_analysis_3.png"
            ]
          }
        ],
        workflow: ["/images/slide_23_1.png", "/images/workflow_delivery_2.png"],
        evaluation: ["/images/slide_24_1.png"],
        improvements: ["/images/slide_25_1.png", "/images/slide_25_2.png"]
      },
      futureImprovements: [
        "모델 서빙(Model Serving) 최적화 및 경량화 아키텍처 도입 (ONNX 변환, 추론 전용 서버 분리)",
        "ABSA(속성 기반 감성 분석) 모델 도입을 통한 판별 고도화 (하드코딩된 규칙 의존도 낮추기)",
        "데이터 파이프라인 및 실시간 MLOps 지속 학습 체계 구축 (예측 결과 실시간 적재 및 재학습 파이프라인)"
      ],
      lessonsLearned: [
        "Hugging Face 기반의 맞춤형 LLM 모델 설계 및 텍스트 분류 추론 파이프라인 구축",
        "API 서버에 커스텀 도메인과 HTTPS 보안 접속을 직접 인프라에 적용하여, 클라이언트와 안전하게 통신할 수 있는 프로덕션 배포 역량 획득"
      ]
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const renderImageGrid = (imagesArray, title) => (
    <div className="image-grid">
      {imagesArray.map((item, index) => {
        const src = typeof item === 'string' ? item : item.src;
        const caption = typeof item === 'object' && item.caption ? item.caption : null;
        return (
          <div key={index} className="image-wrapper">
            <img
              src={src}
              alt={`${title} ${index + 1}`}
              className="project-image"
              onClick={() => setZoomedImage(src)}
            />
            {caption && <p className="image-caption">{caption}</p>}
          </div>
        );
      })}
    </div>
  );

  const renderImageSection = (title, items) => {
    if (!items || items.length === 0) return null;

    const isGrouped = items[0] && Array.isArray(items[0].images);

    return (
      <div className="modal-section image-section">
        {title && <h4>{title}</h4>}

        {isGrouped ? (
          <div className="grouped-features">
            {items.map((group, idx) => (
              <div key={idx} className="feature-group">
                {group.title && <h5 className="feature-group-title">{group.title}</h5>}

                {group.description && typeof group.description === 'string' && (
                  <p className="feature-group-desc">{group.description}</p>
                )}

                {group.descriptions && Array.isArray(group.descriptions) && (
                  <ul className="role-list feature-group-list">
                    {group.descriptions.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                )}

                {renderImageGrid(group.images, title)}
              </div>
            ))}
          </div>
        ) : (
          renderImageGrid(items, title)
        )}
      </div>
    );
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card glass-panel animate-fade-in" key={project.id} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="project-content">
                <span className="project-period">{project.period}</span>
                <h3 className="project-title">{project.title}</h3>
                <h4 className="project-subtitle">{project.subtitle}</h4>
                <p className="project-desc-short">{project.description}</p>

                <div className="tech-tags">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                  {project.techStack.length > 3 && <span className="tech-tag">+{project.techStack.length - 3}</span>}
                </div>

                <button className="btn-details" onClick={() => openModal(project)}>
                  상세 보기 &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && createPortal(
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content glass-panel" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}><FaTimes /></button>

            <div className="modal-header">
              <span className="modal-period">{selectedProject.period}</span>
              <h2 className="modal-title">{selectedProject.title}</h2>
              <h3 className="modal-subtitle">{selectedProject.subtitle}</h3>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4>개요</h4>
                <p>{selectedProject.description}</p>
              </div>

              <div className="modal-section">
                <h4>주요 역할 및 성과</h4>
                <ul className="role-list">
                  {selectedProject.roles.map((role, i) => (
                    <li key={i}>{role}</li>
                  ))}
                </ul>
                <div className="metrics-box">
                  <strong>💡 핵심 성과:</strong> {selectedProject.metrics}
                </div>
              </div>

              {renderImageSection("기능 설명", selectedProject.images?.features)}
              {renderImageSection("시스템 아키텍쳐", selectedProject.images?.architecture)}
              {renderImageSection("Work Flow", selectedProject.images?.workflow)}
              {renderImageSection("정량적 평가", selectedProject.images?.evaluation)}

              {(selectedProject.futureImprovements || selectedProject.images?.improvements) && (
                <div className="modal-section additional-insights">
                  <h4>🚀 향후 개선사항</h4>
                  {selectedProject.futureImprovements && selectedProject.futureImprovements.length > 0 && (
                    <ul className="role-list">
                      {selectedProject.futureImprovements.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {renderImageSection("", selectedProject.images?.improvements)}
                </div>
              )}

              {selectedProject.lessonsLearned && selectedProject.lessonsLearned.length > 0 && (
                <div className="modal-section additional-insights">
                  <h4>💡 배운점</h4>
                  <ul className="role-list">
                    {selectedProject.lessonsLearned.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="modal-section">
                <h4>기술 스택</h4>
                <div className="tech-tags">
                  {selectedProject.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-links">
                {selectedProject.links.demo && (
                  <a href={selectedProject.links.demo} target="_blank" rel="noreferrer" className="link-btn btn-demo">
                    <FaExternalLinkAlt /> Dashboard
                  </a>
                )}
                {selectedProject.links.github && (
                  <a href={selectedProject.links.github} target="_blank" rel="noreferrer" className="link-btn btn-github">
                    <FaGithub /> GitHub
                  </a>
                )}
                {selectedProject.links.youtube && (
                  <a href={selectedProject.links.youtube} target="_blank" rel="noreferrer" className="link-btn btn-youtube">
                    <FaYoutube /> YouTube
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Zoomed Image Overlay */}
      {zoomedImage && createPortal(
        <div className="zoomed-image-overlay" onClick={() => setZoomedImage(null)}>
          <button className="modal-close" onClick={() => setZoomedImage(null)}><FaTimes /></button>
          <img src={zoomedImage} alt="Zoomed View" className="zoomed-image-content" />
        </div>,
        document.body
      )}
    </section>
  );
};

export default Projects;
