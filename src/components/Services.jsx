import { ArrowUpRight, Blocks, ChartNoAxesCombined, Code2, Database, ShieldCheck, Smartphone } from 'lucide-react';
import './Services.css';

const services = [
  { icon: Blocks, title: 'Digital systems & platforms', description: 'Purpose-built systems for public services, NGO programs, and financial operations.', tags: 'Public services / NGO platforms / Fintech' },
  { icon: Code2, title: 'Web applications & APIs', description: 'Connect your tools, automate everyday processes, and turn complex workflows into simple experiences.', tags: 'Applications / Integrations / Automation' },
  { icon: Database, title: 'Content & information systems', description: 'Give your content a clear home with manageable websites, information portals, and dashboards.', tags: 'CMS / WordPress / Portals' },
  { icon: Smartphone, title: 'Mobile solutions', description: 'Bring services closer to people with mobile apps for engagement, fieldwork, and data collection.', tags: 'Mobile apps / Field tools / Engagement' },
  { icon: ChartNoAxesCombined, title: 'Data analytics & reporting', description: 'Make your data useful with clear dashboards, visual analytics, and reporting tools.', tags: 'Dashboards / Reporting / Insights' },
  { icon: ShieldCheck, title: 'Deployment & ongoing care', description: 'Keep your technology working with cloud deployment, maintenance, security updates, and support.', tags: 'Hosting / Maintenance / Support' },
];

export default function Services() {
  return (
    <section id="services" className="services-section section-space">
      <div className="container">
        <div className="section-heading"><div><p className="eyebrow">01 / Our expertise</p><h2>Beyond a website.<br />Built for the way you work.</h2></div><p>When your needs go deeper, we build the technology behind your operations. Practical solutions, shaped around real challenges.</p></div>
        <div className="services-grid">
          {services.map((service, index) => {
            const { icon: Icon, title, description, tags } = service;
            return (
            <article className="service-card" key={title}>
              <div className="service-top"><Icon size={27} strokeWidth={1.5} /><span>0{index + 1}</span></div>
              <h3><a href={`mailto:infotech@haguma.com?subject=${encodeURIComponent(`Project enquiry: ${title}`)}`}>{title}<ArrowUpRight size={20} /></a></h3>
              <p>{description}</p><span className="service-tags">{tags}</span>
            </article>
            );
          })}
        </div>
        <div className="services-bottom"><span>Not sure where to start? That’s what the first conversation is for.</span><a href="#contact" className="text-link">Let’s find your solution <ArrowUpRight size={18} /></a></div>
      </div>
    </section>
  );
}
