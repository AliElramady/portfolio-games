import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutMe />
      <div id="projects"><Projects /></div>
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
