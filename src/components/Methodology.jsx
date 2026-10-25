import './Methodology.css';

const steps = [
  { title: 'Understand', text: 'We listen, ask questions, and define what success looks like for your organization.' },
  { title: 'Shape', text: 'Together, we turn the brief into a clear plan, with the right scope and technology.' },
  { title: 'Build together', text: 'You see progress early. We work in iterations, with feedback at every meaningful step.' },
  { title: 'Launch & evolve', text: 'We help you go live, stay supported, and build on what works as your needs change.' },
];

export default function Methodology() {
  return (
    <section id="methodology" className="methodology-section section-space">
      <div className="container">
        <div className="section-heading"><div><p className="eyebrow">03 / Our approach</p><h2>Good work starts<br />with a conversation.</h2></div><p>Clear communication. Shared decisions. A practical process that keeps you involved from the first idea to launch and beyond.</p></div>
        <ol className="methodology-steps">{steps.map((step, index) => <li key={step.title}><div className="step-number">0{index + 1}<span /></div><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
      </div>
    </section>
  );
}
