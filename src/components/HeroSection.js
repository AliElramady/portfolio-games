// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Ali Elramady</h1>
        <h2>Game Developer</h2>
        <p>Unity • C# • Unreal Engine • Blender • Game Design</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">🎮 View Projects</a>
          <a href="#contact" className="btn-secondary">📬 Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
