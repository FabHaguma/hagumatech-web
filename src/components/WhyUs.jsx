import { ArrowUpRight, Compass, Fingerprint, Sprout } from 'lucide-react';
import './WhyUs.css';

const principles = [
  { icon: Compass, title: 'Context comes first.', text: 'Based in Rwanda, we take the time to understand your people, your environment, and the problem worth solving.' },
  { icon: Fingerprint, title: 'Your needs shape the solution.', text: 'From a business website to an institutional platform, we choose proven technology that fits your work.' },
  { icon: Sprout, title: 'Think beyond launch.', text: 'Maintainable systems, ongoing care, and room to grow. We build with your next chapter in mind.' },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="why-us-section section-space">
      <div className="container about-grid">
        <div><p className="eyebrow">02 / The people behind the technology</p><h2>Rooted here.<br />Thinking ahead.</h2><p className="about-description">HagumaTech is a Rwanda-based technology company helping businesses and institutions put digital tools to work. We care about what technology makes possible for the people using it.</p><a href="#contact" className="text-link">Get to know your next partner <ArrowUpRight size={18} /></a><div className="about-location"><span className="location-cross">+</span> Kigali, Rwanda <span>Connecting ideas to impact.</span></div></div>
        <div className="principles">
          {principles.map((principle) => {
            const { icon: Icon, title, text } = principle;
            return (
              <article className="principle" key={title}>
                <Icon size={25} strokeWidth={1.5} />
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
