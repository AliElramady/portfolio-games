import React from 'react';
import './Contact.css';

const Contact = () => (
  <section className="contact animate-fadein">
    <h2>تواصل معي</h2>
    <ul>
      <li><a href="https://www.linkedin.com/in/fakeprofile" target="_blank" rel="noopener noreferrer"><span role="img" aria-label="LinkedIn">🔗</span> LinkedIn</a></li>
      <li><a href="https://github.com/fakeprofile" target="_blank" rel="noopener noreferrer"><span role="img" aria-label="GitHub">🐙</span> GitHub</a></li>
      <li><a href="mailto:fake.email@example.com"><span role="img" aria-label="Email">✉️</span> البريد الإلكتروني</a></li>
      <li><a href="/cv-fake.pdf" download><span role="img" aria-label="CV">📄</span> تحميل السيرة الذاتية</a></li>
    </ul>
  </section>
);

export default Contact; 