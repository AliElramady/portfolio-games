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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, i) => (
            <motion.div
              key={project.title}
              className="relative bg-gray-800 rounded-lg overflow-hidden shadow-2xl group"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl font-bold text-white mb-2 text-center">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{project.description}</p>
                <div className="flex space-x-4 mt-4">
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">Live Demo</a>
                  <a href={project.codeLink} target="_blank" rel="noreferrer" className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors">Code</a>
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
