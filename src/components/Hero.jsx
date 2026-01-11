import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h2 className="hero-subtitle highlight fade-in delay-1">Institutional Innovation</h2>
          <h1 className="hero-title fade-in delay-2">
            Practical Digital Solutions <br />
            For <span className="text-gradient">Real Impact.</span>
          </h1>
          <p className="hero-description fade-in delay-3">
            We build secure, scalable, and reliable digital platforms for Government, NGOs, and Fintech organizations in Rwanda.
          </p>
          <div className="hero-cta fade-in delay-4">
            <a href="#contact" className="btn btn-primary big-btn">Work With Us</a>
            <a href="#services" className="btn big-btn">Our Services</a>
          </div>
        </div>
        <div className="hero-visual fade-in delay-4">
          <div className="grid-pattern"></div>
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
