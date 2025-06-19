import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section" id="contact">
      <h2>Get in Touch</h2>
      <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.</p>
      <div className="contact-container">
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: ali.elramady.dev@gmail.com</p>
          <p>LinkedIn: linkedin.com/in/ali-elramady</p>
          <div className="social-links">
            <a href="https://github.com/AliElramady" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
