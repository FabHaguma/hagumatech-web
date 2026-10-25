import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Brand from './Brand';
import './Navbar.css';

const links = [
  ['#webyacu', 'Webyacu'],
  ['#services', 'Our expertise'],
  ['#why-us', 'About us'],
  ['#methodology', 'Our approach'],
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButton = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 1001px)');
    const closeOnDesktop = () => { if (desktop.matches) setIsOpen(false); };
    document.addEventListener('keydown', closeOnEscape);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="container nav-container">
        <Brand />
        <button ref={menuButton} className="menu-toggle" aria-label={isOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={isOpen} aria-controls="primary-navigation" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav id="primary-navigation" aria-label="Main navigation" className={`primary-navigation ${isOpen ? 'is-open' : ''}`} onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget) && event.relatedTarget !== menuButton.current) setIsOpen(false);
        }}>
          {links.map(([href, label]) => <a href={href} key={href} onClick={() => setIsOpen(false)}>{label}{label === 'Webyacu' && <span className="nav-dot" />}</a>)}
          <a href="#contact" className="button button-small" onClick={() => setIsOpen(false)}>Let’s talk <ArrowUpRight size={16} /></a>
        </nav>
      </div>
    </header>
  );
}
