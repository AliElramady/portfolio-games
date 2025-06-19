import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: 'center', margin: '2rem 0', direction: 'rtl'}}>بورتفوليو مطور ألعاب</h1>
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
