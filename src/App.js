import React from 'react';

import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
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
        <Resume />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
