import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const experience = [
  {
    role: 'Lead Game Developer',
    company: 'Pixelated Dreams Inc.',
    period: '2020 - Present',
    description: 'Led the development of three major titles, focusing on gameplay mechanics and performance optimization.'
  },
  {
    role: 'Software Engineer',
    company: 'Tech Solutions LLC',
    period: '2018 - 2020',
    description: 'Developed and maintained scalable web applications using the MERN stack.'
  }
];

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">My Journey</h2>
        <div className="text-center mb-16">
          <motion.a 
            href="/resume.pdf" // Make sure to place your resume in the `public` folder
            download
            className="inline-flex items-center gap-4 text-white bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 px-10 py-5 rounded-full transition-all text-2xl font-bold shadow-lg transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <FaDownload />
            Download My CV
          </motion.a>
        </div>

        <div className="relative border-l-4 border-blue-500/30 ml-6 md:ml-0">
          {experience.map((item, index) => (
            <motion.div 
              key={index}
              className="mb-12 ml-10 p-8 bg-gray-800 rounded-xl shadow-2xl border border-gray-700/50"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3, type: 'spring', stiffness: 50 }}
            >
              <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full -left-5 ring-8 ring-gray-900">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
              </span>
              <h3 className="text-3xl font-bold text-white mb-1">{item.role}</h3>
              <p className="text-xl text-blue-400 font-semibold mb-2">{item.company}</p>
              <time className="block mb-4 text-md font-normal leading-none text-gray-500">{item.period}</time>
              <p className="text-lg font-normal text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
