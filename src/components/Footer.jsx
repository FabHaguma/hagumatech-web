import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import Brand from './Brand';
import './Footer.css';

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="contact-top"><div><p className="eyebrow">Your next chapter starts here</p><h2>Have something<br />in mind? <span>Let’s build it.</span></h2><p>A website, a platform, or a challenge you’re still figuring out.<br className="desktop-break" /> Tell us where you want to go.</p></div><a className="contact-circle" href="mailto:infotech@haguma.com" aria-label="Email HagumaTech to start a conversation"><ArrowUpRight size={45} strokeWidth={1.3} /></a></div>
        <div className="contact-details"><a href="mailto:infotech@haguma.com"><Mail size={19} />infotech@haguma.com <ArrowUpRight size={17} /></a><a href="tel:+250786072607"><Phone size={18} />+250 786 072 607</a><span><MapPin size={18} />Kigali, Rwanda</span></div>
      </div>
      <div className="footer-base"><div className="container"><div className="footer-navigation"><p>© {new Date().getFullYear()} HagumaTech. All rights reserved.</p><nav aria-label="Footer navigation"><a href="#webyacu">Webyacu</a><a href="#services">Expertise</a><a href="#why-us">About us</a><a href="#hero">Back to top ↑</a></nav></div></div></div>
    </footer>
  );
}
