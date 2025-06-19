import React from 'react';

const Navbar = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-gray-900/70 backdrop-blur-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
          Ali Elramady
        </a>
        <div className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors">{link.name}</a>
          ))}
        </div>
        {/* Mobile Menu Button - can be implemented later */}
      </div>
    </nav>
  );
};

export default Navbar;
