import React from 'react';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      text: "HagumaTech transformed our disjointed reporting processes into a unified digital platform. Their understanding of NGO workflows is unmatched in the region.",
      author: "Regine MUKESHIMANA",
      organization: "Umushumba Mwiza Organization"
    },
    {
      text: "Security and compliance were our top concerns. HagumaTech delivered a robust fintech solution that met all regulatory standards without compromising user experience.",
      author: "Benjamin UWINEZA",
      organization: "Kina Games Limited"
    },
    {
      text: "Professional, responsive, and technically proficient. They modernized our public service portal, significantly improving access for citizens.",
      author: "Origene MUTUYIMANA",
      organization: "Public Sector Partner"
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title fade-in"><span className="highlight">04.</span> Trusted By Leaders</h2>
        
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card fade-in" key={index}>
              <div className="quote-icon">
                <Quote size={32} />
              </div>
              <p className="testimonial-text">"{item.text}"</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4 className="author-name">{item.author}</h4>
                  <p className="author-org">{item.organization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
