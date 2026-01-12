import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-container">
        <div className="footer-content fade-in">
          <h2 className="footer-title">Let's Build Something Great.</h2>
          <p className="footer-subtitle">
            Searching for a reliable technology partner? Let's discuss how we can help your organization grow.
          </p>
          <a href="mailto:infotech@haguma.com" className="btn btn-primary big-btn contact-btn">
            Get In Touch
          </a>
        </div>

        <div className="footer-info">
          <div className="info-item">
            <Mail size={18} className="highlight" />
            <a href="mailto:infotech@haguma.com">infotech@haguma.com</a>
          </div>
          <div className="info-item">
            <Phone size={18} className="highlight" />
            <span>+250 786072607</span>
          </div>
          <div className="info-item">
            <MapPin size={18} className="highlight" />
            <span>Kigali, Rwanda</span>
          </div>
          {/* <div className="info-item">
            <ExternalLink size={18} className="highlight" />
            <a href="https://tech.haguma.com" target="_blank" rel="noopener noreferrer">tech.haguma.com</a>
          </div> */}
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} HagumaTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
