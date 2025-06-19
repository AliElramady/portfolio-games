import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="section" id="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Game Engines</h3>
          <ul>
            <li>Unity / C#</li>
            <li>Unreal Engine / C++ & Blueprints</li>
            <li>Godot Engine</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Graphics & Tools</h3>
          <ul>
            <li>Blender 3D</li>
            <li>Maya</li>
            <li>Substance Painter</li>
            <li>Photoshop</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Programming</h3>
          <ul>
            <li>C#</li>
            <li>C++</li>
            <li>Python</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Game Development</h3>
          <ul>
            <li>Game Architecture</li>
            <li>Physics Programming</li>
            <li>AI Implementation</li>
            <li>Multiplayer Networking</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
