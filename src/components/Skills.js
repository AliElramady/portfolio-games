import React from 'react';
import { FaUnity, FaReact, FaJsSquare, FaGitAlt, FaBrain, FaNetworkWired, FaSitemap } from 'react-icons/fa';
import { SiDotnet, SiCplusplus, SiUnrealengine, SiAdobephotoshop, SiBlender, SiAutodeskmaya } from 'react-icons/si';
import { motion } from 'framer-motion';

const skillCategories = {
  "Programming Languages": [
    { name: 'C# / .NET', icon: <SiDotnet size={50} /> },
    { name: 'C++', icon: <SiCplusplus size={50} /> },
    { name: 'JavaScript', icon: <FaJsSquare size={50} /> },
    { name: 'React', icon: <FaReact size={50} /> },
  ],
  "Game Engines": [
    { name: 'Unity', icon: <FaUnity size={50} /> },
    { name: 'Unreal Engine', icon: <SiUnrealengine size={50} /> },
  ],
  "Tools & Software": [
    { name: 'Git', icon: <FaGitAlt size={50} /> },
    { name: 'Maya', icon: <SiAutodeskmaya size={50} /> },
    { name: 'Blender', icon: <SiBlender size={50} /> },
    { name: 'ZBrush' },
    { name: 'Photoshop', icon: <SiAdobephotoshop size={50} /> },
  ],
  "Game Development Skills": [
    { name: 'Game Architecture', icon: <FaSitemap size={50} /> },
    { name: 'Physics Programming', icon: <SiCplusplus size={50} /> },
    { name: 'AI Implementation', icon: <FaBrain size={50} /> },
    { name: 'Multiplayer Networking', icon: <FaNetworkWired size={50} /> },
  ],
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
    },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Technologies & Skills</h2>
        <div>
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="mb-12">
              <h3 className="text-3xl font-bold text-center text-blue-400 mb-8">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-6 bg-gray-700 rounded-xl shadow-lg hover:shadow-blue-400/50 hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-2"
                    variants={iconVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                  >
                    <div className="text-blue-400 mb-4">{skill.icon}</div>
                    <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
