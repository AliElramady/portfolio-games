import React from "react";
import "./PortfolioHome.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaUnity, FaGamepad, FaCode, FaCogs } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Zombie Shooter",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    desc: "Top-down survival shooter built in Unity with custom AI and particle systems.",
    live: "#",
    github: "https://github.com/AliElramady/zombie-shooter",
  },
  {
    id: 2,
    title: "Escape Room VR",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    desc: "Immersive escape room game developed with Unreal Engine and VR support.",
    live: "#",
    github: "https://github.com/AliElramady/escape-vr",
  },
  {
    id: 3,
    title: "Pixel Platformer",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80",
    desc: "Retro-style platformer with custom physics and pixel art assets.",
    live: "#",
    github: "#",
  },
];

const skills = [
  { name: "Unity", icon: <FaUnity />, level: 90 },
  { name: "Game Design", icon: <FaGamepad />, level: 85 },
  { name: "Programming", icon: <FaCode />, level: 95 },
  { name: "Systems", icon: <FaCogs />, level: 80 },
];

export default function PortfolioHome() {
  return (
    <main className="portfolio-dark-bg">
      {/* Hero Section */}
      <section className="hero-section">
        <img
          src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
          alt="Ali Elramady Avatar"
          className="hero-avatar"
        />
        <h1 className="hero-title">Ali Elramady</h1>
        <p className="hero-subtitle">Game Developer | Creative Coder | Unity & Unreal Enthusiast</p>
        <div className="hero-links">
          <a href="mailto:ali@example.com" title="Email"><FaEnvelope /></a>
          <a href="https://github.com/AliElramady" target="_blank" rel="noreferrer" title="GitHub"><FaGithub /></a>
          <a href="https://linkedin.com/in/ali" target="_blank" rel="noreferrer" title="LinkedIn"><FaLinkedin /></a>
        </div>
        <a className="cv-btn" href="/cv.pdf" download>Download CV</a>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2 className="section-title">My Games</h2>
        <div className="projects-grid">
          {projects.map((proj) => (
            <div className="project-card neon-glow" key={proj.id}>
              <img src={proj.image} alt={proj.title} className="project-img" />
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <div className="project-links">
                <a href={proj.live} target="_blank" rel="noreferrer">Live Demo</a>
                <a href={proj.github} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-list">
          {skills.map((skill) => (
            <div className="skill-item" key={skill.name}>
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar-bg">
                <div className="skill-bar" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          أنا مطور ألعاب شغوف بخبرة في Unity وUnreal Engine وتصميم الألعاب. أحب تحويل الأفكار إلى تجارب تفاعلية ممتعة، وأسعى دائمًا لتعلم تقنيات جديدة وصناعة ألعاب تترك أثرًا لدى اللاعبين.
        </p>
      </section>
    </main>
  );
} 