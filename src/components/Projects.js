import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Galactic Conquest',
      description: 'A 3D space combat and strategy game built in Unity. Features dynamic AI, realistic physics, and a compelling story-driven campaign.',
      techStack: 'Unity, C#, Blender, Photoshop',
      githubLink: 'https://github.com/AliElramady/GalacticConquest'
    },
    {
      title: 'Shadow Realm',
      description: 'A 2D action-platformer with a dark fantasy theme, developed using Godot. Features fluid combat, intricate level design, and challenging boss battles.',
      techStack: 'Godot, GDScript, Aseprite',
      githubLink: 'https://github.com/AliElramady/ShadowRealm'
    },
    {
      title: 'Pixel Puzzler',
      description: 'A relaxing puzzle game for mobile devices, built with Unreal Engine. Features hundreds of levels, intuitive controls, and a clean, minimalist art style.',
      techStack: 'Unreal Engine, C++, Blueprints',
      githubLink: 'https://github.com/AliElramady/PixelPuzzler'
    }
  ];

  return (
    <section className="section" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech-stack"><strong>Tech Stack:</strong> {project.techStack}</p>
            <a href={project.githubLink} className="btn-primary" target="_blank" rel="noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
