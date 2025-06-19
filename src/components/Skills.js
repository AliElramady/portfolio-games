import React from 'react';
import { FaUnity, FaReact, FaJsSquare, FaGitAlt } from 'react-icons/fa';
import { SiDotnet, SiCplusplus, SiUnrealengine, SiBlender } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Unity', icon: <FaUnity size={50} /> },
  { name: 'Unreal Engine', icon: <SiUnrealengine size={50} /> },
  { name: 'C#', icon: <SiDotnet size={50} /> },
  { name: 'C++', icon: <SiCplusplus size={50} /> },
  { name: 'JavaScript', icon: <FaJsSquare size={50} /> },
  { name: 'React', icon: <FaReact size={50} /> },
  { name: 'Git', icon: <FaGitAlt size={50} /> },
  { name: 'Blender', icon: <SiBlender size={50} /> },
  { name: 'Game Architecture', icon: <FaUnity size={50} /> },
  { name: 'Physics Programming', icon: <SiCplusplus size={50} /> },
  { name: 'AI Implementation', icon: <FaJsSquare size={50} /> },
  { name: 'Multiplayer Networking', icon: <FaReact size={50} /> },
  { name: 'Godot Engine', icon: <FaUnity size={50} /> },
  { name: 'Maya', icon: <SiBlender size={50} /> },
  { name: 'Substance Painter', icon: <FaJsSquare size={50} /> },
  { name: 'Photoshop', icon: <FaReact size={50} /> },
];

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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 text-center">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center justify-center p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <div className="text-blue-400 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
