import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './WhyUs.css';

const WhyUs = () => {
  const reasons = [
    {
      title: "Trusted Technologies",
      desc: "Stable and proven tools tailored for long-term reliability in critical sectors."
    },
    {
      title: "Impact-Focused",
      desc: "Solutions designed specifically for social, public, and financial impact."
    },
    {
      title: "Scalable by Design",
      desc: "Systems architecture that grows seamlessly with your organization."
    },
    {
      title: "Local Expertise",
      desc: "Strong understanding of regional context and institutional needs in Rwanda."
    }
  ];

  return (
    <section id="why-us" className="why-us-section">
      <div className="container">
        <div className="why-us-content">
          <div className="why-us-text fade-in">
             <h2 className="section-title"><span className="highlight">03.</span> Why HagumaTech</h2>
             <p className="lead-text">
               We don't just write code; we build the digital infrastructure for Rwanda's future.
             </p>
          </div>
          <div className="why-us-grid">
            {reasons.map((reason, index) => (
              <div className="reason-item fade-in" key={index}>
                <CheckCircle2 className="reason-icon" size={24} />
                <div>
                  <h4 className="reason-title">{reason.title}</h4>
                  <p className="reason-desc">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
