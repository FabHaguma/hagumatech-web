import { ArrowDown, ArrowUpRight, Blocks, Globe2, MoveUpRight, ShieldCheck } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <>
      <section id="hero" className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Built in Rwanda. Built for impact.</p>
            <h1>Good technology.<br />Real-world <span className="impact-word">impact<svg viewBox="0 0 310 15" aria-hidden="true"><path d="M3 10 Q150 -3 307 8" /></svg></span>.</h1>
            <p className="hero-description">From your first website to the systems that run your organization. We turn ambitious ideas into practical digital experiences.</p>
            <div className="hero-actions">
              <a href="#contact" className="button">Build with us <ArrowUpRight size={19} /></a>
              <a href="#webyacu" className="text-link">Meet Webyacu <ArrowUpRight size={18} /></a>
            </div>
            <div className="hero-note"><span className="note-line" /> Your technology partner, from idea to what’s next.</div>
          </div>
          <div className="ecosystem" role="img" aria-label="HagumaTech connects websites through Webyacu, custom digital systems, and ongoing support.">
            <div className="ecosystem-top"><span>IDEAS INTO POSSIBILITY</span><MoveUpRight size={19} /></div>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="orbit-center"><span>H<span>t</span></span><small>HAGUMATECH</small></div>
            <div className="ecosystem-node node-web"><div className="node-icon"><Globe2 size={21} /></div><div><small>GET ONLINE</small><strong>Webyacu<span>↗</span></strong><p>Your place on the web.</p></div></div>
            <div className="ecosystem-node node-systems"><div className="node-icon"><Blocks size={21} /></div><div><small>WORK SMARTER</small><strong>Digital systems</strong><p>Built around your work.</p></div></div>
            <div className="ecosystem-node node-support"><ShieldCheck size={19} /><span>Built to grow with you</span><span className="status-dot" /></div>
            <div className="ecosystem-bottom"><span>ONE PARTNER. MORE POSSIBILITIES.</span><span>01 — ∞</span></div>
          </div>
        </div>
        <div className="container hero-bottom"><span>Technology for people moving things forward.</span><a href="#webyacu" aria-label="Explore our services"><ArrowDown size={17} /></a></div>
      </section>
      <div className="sectors-strip"><div className="container sectors-content"><span className="sectors-label">BUILT AROUND YOUR WORLD</span><span>Businesses</span><span>NGOs & nonprofits</span><span>Public institutions</span><span>Fintech</span></div></div>
    </>
  );
}
