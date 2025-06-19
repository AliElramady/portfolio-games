import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="relative flex items-center justify-center h-screen text-white overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 animate-gradient-x"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ali Elramady
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Creative Game Developer | Building Worlds with Code
        </motion.p>
        <motion.div 
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="https://github.com/AliElramady" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:your-email@example.com" className="text-gray-400 hover:text-white transition-colors">
            <FaEnvelope size={30} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
