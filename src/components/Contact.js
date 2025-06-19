import React from 'react';
import { motion } from 'framer-motion';

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
          className="max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          // You can integrate a form service like Netlify Forms or EmailJS here
        >
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
            <input type="text" id="name" name="name" className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John Doe" required />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your Email</label>
            <input type="email" id="email" name="email" className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@example.com" required />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Your Message</label>
            <textarea id="message" name="message" rows="6" className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Let's talk about..." required></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-lg px-8 py-3 transition-colors">
              Send Message
            </button>
          </div>
        </motion.form>
        <div className="contact-info mt-12">
          <h3 className="text-2xl font-bold text-center text-white mb-6">Contact Information</h3>
          <p className="text-lg text-gray-300 text-center mb-4">Email: ali.elramady.dev@gmail.com</p>
          <p className="text-lg text-gray-300 text-center mb-4">LinkedIn: linkedin.com/in/ali-elramady</p>
          <div className="social-links flex justify-center mb-6">
            <a href="https://github.com/AliElramady" target="_blank" rel="noreferrer" className="text-lg text-gray-300 hover:text-white transition-colors mr-4">GitHub</a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer" className="text-lg text-gray-300 hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
