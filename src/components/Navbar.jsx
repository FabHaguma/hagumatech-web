import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo">
          Haguma<span className="highlight">Tech</span>
        </a>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#services" onClick={() => setIsOpen(false)}>What We Do</a>
          <a href="#methodology" onClick={() => setIsOpen(false)}>How We Work</a>
          <a href="#why-us" onClick={() => setIsOpen(false)}>Why Us</a>
          <a href="#contact" className="btn btn-nav" onClick={() => setIsOpen(false)}>Contact</a>
        </div>

        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
