import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  { text: 'HagumaTech transformed our disjointed reporting processes into a unified digital platform. Their understanding of NGO workflows is unmatched in the region.', author: 'Regine MUKESHIMANA', organization: 'Umushumba Mwiza Organization' },
  { text: 'Security and compliance were our top concerns. HagumaTech delivered a robust fintech solution that met all regulatory standards without compromising user experience.', author: 'Benjamin UWINEZA', organization: 'Kina Games Limited' },
  { text: 'Professional, responsive, and technically proficient. They modernized our public service portal, significantly improving access for citizens.', author: 'Origene MUTUYIMANA', organization: 'Public Sector Partner' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section section-space">
      <div className="container"><p className="eyebrow">04 / In our clients’ words</p><h2>Built on collaboration.</h2><div className="testimonials-grid">{testimonials.map((item) => <figure className="testimonial" key={item.author}><Quote size={24} strokeWidth={1.5} /><blockquote>{item.text}</blockquote><figcaption><strong>{item.author}</strong><span>{item.organization}</span></figcaption></figure>)}</div></div>
    </section>
  );
}
