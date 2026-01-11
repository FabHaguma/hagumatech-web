import React from 'react';
import './Methodology.css';

const Methodology = () => {
  const steps = [
    {
      number: "01",
      title: "Agile Development",
      content: "We embrace iterative development with regular feedback loops, ensuring flexible delivery that adapts to your evolving needs."
    },
    {
      number: "02",
      title: "Transparent Collaboration",
      content: "Clear communication is at our core. We work closely with your team, aligning solutions with policy, compliance, and organizational goals."
    },
    {
      number: "03",
      title: "Scalable Execution",
      content: "We frame our connectivity and code to grow with you. From MVP to nationwide deployment, our systems support your long-term vision."
    }
  ];

  return (
    <section id="methodology" className="methodology-section">
      <div className="container">
        <h2 className="section-title fade-in"><span className="highlight">02.</span> How We Work</h2>
        
        <div className="methodology-steps">
          {steps.map((step, index) => (
            <div className="methodology-step fade-in" key={index}>
              <div className="step-header">
                <span className="step-number">{step.number}</span>
                <div className="step-line"></div>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-content">{step.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
