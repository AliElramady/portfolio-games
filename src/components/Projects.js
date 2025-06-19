import React from 'react';
import { motion } from 'framer-motion';

const projectData = [
  {
    title: 'Galactic Conquest',
    description: 'A 3D space combat and strategy game built in Unity.',
    imageUrl: 'https://picsum.photos/seed/galactic/800/600', // Placeholder image
    liveLink: '#',
    codeLink: 'https://github.com/AliElramady/GalacticConquest',
  },
  {
    title: 'Shadow Realm',
    description: 'A 2D action-platformer with a dark fantasy theme.',
    imageUrl: 'https://picsum.photos/seed/shadow/800/600', // Placeholder image
    liveLink: '#',
    codeLink: 'https://github.com/AliElramady/ShadowRealm',
  },
  {
    title: 'Pixel Puzzler',
    description: 'A relaxing puzzle game for mobile devices.',
    imageUrl: 'https://picsum.photos/seed/pixel/800/600', // Placeholder image
    liveLink: '#',
    codeLink: 'https://github.com/AliElramady/PixelPuzzler',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Projects Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, i) => (
            <motion.div
              key={project.title}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-start space-x-4">
                  <a href={project.liveLink} className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors">Live Demo</a>
                  <a href={project.codeLink} className="text-gray-300 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded transition-colors">View Code</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
