import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Research', href: '#research' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 glass-panel shadow-lg' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-outfit font-bold tracking-tighter text-white">
          KG<span className="text-purple-500">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="mailto:krishna.gpt607@gmail.com"
            className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-semibold transition-all hover:scale-105 active:scale-95"
          >
            Contact
          </a>
        </div>
        
        {/* Mobile menu button could be added here, omitting for brevity/cleanliness for now, leaning on desktop primary experience */}
      </div>
    </motion.nav>
  );
};

export default Navbar;
