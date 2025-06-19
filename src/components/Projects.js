import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Space Defender',
    image: 'https://placehold.co/300x180/888/fff?text=Space+Defender',
    description: 'لعبة تصويب فضائية ثنائية الأبعاد، هدفك حماية الكوكب من الأعداء.',
    role: 'برمجة الجيم بلاي وتصميم الفيزياء',
    links: {
      itch: 'https://itch.io/',
      github: 'https://github.com/',
      youtube: 'https://youtube.com/',
    },
  },
  {
    name: 'Jungle Runner',
    image: 'https://placehold.co/300x180/aaa/222?text=Jungle+Runner',
    description: 'لعبة جري لا نهائي في الغابة مع عوائق وتحديات.',
    role: 'تصميم المستويات وبرمجة الـ UI',
    links: {
      itch: 'https://itch.io/',
      github: '',
      youtube: '',
    },
  },
  {
    name: 'Puzzle Master',
    image: 'https://placehold.co/300x180/ccc/111?text=Puzzle+Master',
    description: 'لعبة ألغاز منطقية تعتمد على الذكاء وحل المشكلات.',
    role: 'برمجة المنطق وتصميم الجرافيكس',
    links: {
      itch: '',
      github: 'https://github.com/',
      youtube: '',
    },
  },
];

const Projects = () => (
  <section className="projects animate-fadein">
    <h2>أعمالي</h2>
    <div className="projects-list">
      {projects.map((proj, idx) => (
        <div className="project-card" key={idx}>
          <img src={proj.image} alt={proj.name} />
          <h3>{proj.name}</h3>
          <p>{proj.description}</p>
          <p><strong>دوري:</strong> {proj.role}</p>
          <div className="project-links">
            {proj.links.itch && <a href={proj.links.itch} target="_blank" rel="noopener noreferrer">Itch.io</a>}
            {proj.links.github && <a href={proj.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
            {proj.links.youtube && <a href={proj.links.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 