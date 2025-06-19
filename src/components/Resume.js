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
        <div className="text-center mb-12">
          <a 
            href="/resume.pdf" // Make sure to place your resume in the `public` folder
            download
            className="inline-flex items-center gap-3 text-white bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg transition-colors text-xl font-semibold"
          >
            <FaDownload />
            Download My CV
          </a>
        </div>

        <div className="relative border-l-4 border-gray-700 ml-4 md:ml-0">
          {experience.map((item, index) => (
            <motion.div 
              key={index}
              className="mb-10 ml-8 p-6 bg-gray-800 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4 ring-8 ring-gray-900">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
              </span>
              <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
              <p className="text-lg text-blue-400 mb-1">{item.company}</p>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-500">{item.period}</time>
              <p className="text-base text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
