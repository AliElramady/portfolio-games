import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <main>
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
