import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="section" id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Zombie Shooter</h3>
          <p>Top-down survival shooter built in Unity with custom AI and particle systems.</p>
          <a href="https://github.com/AliElramady/zombie-shooter" target="_blank" rel="noreferrer">View on GitHub</a>
        </div>
        <div className="project-card">
          <h3>Escape Room VR</h3>
          <p>Immersive escape room game developed with Unreal Engine and VR support.</p>
          <a href="https://github.com/AliElramady/escape-vr" target="_blank" rel="noreferrer">View on GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
