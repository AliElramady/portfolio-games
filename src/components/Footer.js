import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    { href: "https://github.com/AliElramady", icon: <FaGithub size={28} /> },
    { href: "https://linkedin.com/in/ali-elramady", icon: <FaLinkedin size={28} /> },
    { href: "https://twitter.com/yourprofile", icon: <FaTwitter size={28} /> },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t-2 border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-8 mb-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.2, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
        <p className="mb-8 text-gray-500">
          &copy; {year} Ali Elramady. All Rights Reserved.
          <br />
          <span className="text-sm">Designed & Built by Ali Elramady</span>
        </p>
        <div className="flex justify-center">
          <motion.button
              onClick={scrollToTop}
              className="bg-blue-600/50 text-white rounded-full p-4 hover:bg-blue-500 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              title="Back to Top"
              aria-label="Back to Top"
          >
              <FaArrowUp size={24} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
