import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const skills = ['React', 'C#', 'JavaScript', 'C++'];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/3 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Replace with your actual avatar/image URL */}
            <img src="https://i.pravatar.cc/300" alt="Ali Elramady" className="rounded-full w-64 h-64 object-cover border-4 border-blue-500" />
          </motion.div>
          <motion.div 
            className="md:w-2/3 text-lg text-gray-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="mb-6">
              I'm a passionate Game Developer with a knack for turning complex ideas into engaging, interactive experiences. With a strong background in both design and development, I love bringing virtual worlds to life through clean, efficient code.
            </p>
            <p className="font-semibold text-white mb-4">Core Technologies:</p>
            <div className="flex flex-wrap gap-3">
              {skills.map(skill => (
                <span key={skill} className="bg-gray-700 text-blue-300 text-sm font-medium px-4 py-2 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
