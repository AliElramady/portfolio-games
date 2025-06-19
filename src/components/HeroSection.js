import React from 'react';
import './HeroSection.css';

const HeroSection = () => (
  <section className="hero-section animate-fadein">
    <div className="hero-content">
      <img className="hero-img" src="https://cdn.pixabay.com/photo/2021/01/15/15/08/game-5918664_1280.png" alt="Game Avatar" />
      <div>
        <h1>أحمد جيمر</h1>
        <h2>2D/3D Game Developer & Artist</h2>
        <p>أصنع عوالم تفاعلية ورسوم متحركة مذهلة باستخدام Unity وUnreal Engine.<br/>شغوف بابتكار تجارب ألعاب لا تُنسى!</p>
        <a href="#projects" className="hero-btn">شاهد أعمالي</a>
      </div>
    </div>
  </section>
);

export default HeroSection; 