import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <video autoPlay loop muted playsInline className="hero-video">
        <source
          src="https://cdn.pixabay.com/vimeo/634560786/space-91573.mp4?width=640&hash=ca8a960e2670a77e3bb34db9e0305eec33465f0d"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
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
