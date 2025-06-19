import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="section" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          I'm a professional Game Developer with over 5 years of experience in creating engaging and immersive games.
          My expertise spans across multiple game engines and platforms, with a special focus on creating memorable player experiences.
        </p>
        <p>
          I specialize in:
          <ul>
            <li>Game Architecture & Design</li>
            <li>Performance Optimization</li>
            <li>AI Behavior Systems</li>
            <li>Physics-based Gameplay</li>
            <li>Multiplayer Systems</li>
          </ul>
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
