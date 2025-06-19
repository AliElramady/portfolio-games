import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.form 
          className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700/50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
          // You can integrate a form service like Netlify Forms or EmailJS here
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-lg font-medium text-gray-300">Your Name</label>
              <input type="text" id="name" name="name" className="bg-gray-700 border-2 border-gray-600 text-white text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 transition-colors" placeholder="John Doe" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-300">Your Email</label>
              <input type="email" id="email" name="email" className="bg-gray-700 border-2 border-gray-600 text-white text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 transition-colors" placeholder="name@example.com" required />
            </div>
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block mb-2 text-lg font-medium text-gray-300">Your Message</label>
            <textarea id="message" name="message" rows="8" className="bg-gray-700 border-2 border-gray-600 text-white text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 transition-colors" placeholder="Let's talk about..." required></textarea>
          </div>
          <div className="text-center">
            <motion.button 
              type="submit" 
              className="text-white bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 font-bold rounded-full text-xl px-12 py-4 transition-all shadow-lg transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
        <div className="contact-info mt-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Or Reach Out Directly</h3>
          <p className="text-xl text-gray-300 mb-4">Email: <a href="mailto:ali.elramady.dev@gmail.com" className="text-blue-400 hover:underline">ali.elramady.dev@gmail.com</a></p>
          <div className="flex justify-center items-center space-x-8 mt-8">
            <motion.a href="https://github.com/AliElramady" target="_blank" rel="noreferrer" whileHover={{ scale: 1.2, color: '#60a5fa' }} transition={{ type: 'spring', stiffness: 300 }} className="text-gray-400">
              <FaGithub size={40} />
            </motion.a>
            <motion.a href="https://linkedin.com/in/ali-elramady" target="_blank" rel="noreferrer" whileHover={{ scale: 1.2, color: '#60a5fa' }} transition={{ type: 'spring', stiffness: 300 }} className="text-gray-400">
              <FaLinkedin size={40} />
            </motion.a>
            <motion.a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer" whileHover={{ scale: 1.2, color: '#60a5fa' }} transition={{ type: 'spring', stiffness: 300 }} className="text-gray-400">
              <FaTwitter size={40} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
