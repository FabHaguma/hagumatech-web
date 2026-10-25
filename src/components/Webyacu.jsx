import { ArrowRight, ArrowUpRight, Check, Globe2, Layers3, Smartphone } from 'lucide-react';
import './Webyacu.css';

export default function Webyacu() {
  return (
    <section id="webyacu" className="webyacu-section section-space">
      <div className="container webyacu-grid">
        <div className="webyacu-copy">
          <p className="eyebrow">Our website service & platform</p>
          <div className="webyacu-wordmark">webyacu<span>↗</span></div>
          <p className="platform-byline">A HagumaTech offering</p>
          <h2>A place on the web.<br />A platform to grow.</h2>
          <p>Webyacu helps tradespeople and growing businesses build a professional home online. Choose a structure and theme, showcase your work, and give customers a clear way to reach you.</p>
          <ul className="platform-benefits">
            <li><Check size={17} /> Trade-ready templates, made your own</li>
            <li><Check size={17} /> Project galleries, enquiries, and a blog</li>
            <li><Check size={17} /> Mobile-ready, with room to grow</li>
          </ul>
          <a className="button button-mint" href="https://www.webyacu.com/" target="_blank" rel="noopener noreferrer">Explore Webyacu <ArrowUpRight size={19} /><span className="sr-only"> (opens in a new tab)</span></a>
          <a className="webyacu-secondary" href="mailto:infotech@haguma.com?subject=Webyacu%20website%20enquiry">Let’s talk about your website <ArrowRight size={16} /></a>
        </div>
        <div className="platform-visual" role="img" aria-label="Illustration of a responsive business website made with Webyacu">
          <div className="visual-caption"><span className="status-dot" /> YOUR BUSINESS. YOUR NEXT CHAPTER.</div>
          <div className="website-preview">
            <div className="preview-browser"><div><i /><i /><i /></div><span><Globe2 size={11} /> Your place on the web</span><span>↗</span></div>
            <div className="preview-content">
              <div className="preview-nav"><span><span className="preview-symbol">✳</span> Your business</span></div>
              <div className="preview-layout"><div><h3>Big ideas.<br />A new home.</h3><span className="preview-cta">Explore <ArrowUpRight size={14} /></span></div><div className="preview-art"><div className="art-arch arch-back" /><div className="art-arch arch-front" /><div className="art-ball" /><span>Made for<br /><strong>what’s next.</strong></span></div></div>
            </div>
          </div>
          <div className="mobile-preview"><div className="phone-speaker" /><span className="preview-symbol">✳</span><strong>Big ideas.<br />A new home.</strong><div className="mobile-arch" /><span className="mobile-line" /><span className="mobile-line short" /></div>
          <div className="platform-label"><span><Layers3 size={17} />Designed for you.</span><span><Smartphone size={17} />Ready for every screen.</span></div>
        </div>
      </div>
    </section>
  );
}
