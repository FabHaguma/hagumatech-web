import React from 'react';
import { Layout, Server, Database, Shield, Smartphone, BarChart } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Layout size={40} />,
      title: "Digital Systems & Platforms",
      description: "Custom digital systems for government and public service management, NGO program reporting, and fintech web applications.",
      tags: ["Public Service", "NGO Platforms", "Fintech"]
    },
    {
      icon: <Server size={40} />,
      title: "Web & Backend Development",
      description: "Secure, scalable web applications and business process automation systems with robust API development and integrations.",
      tags: ["Automation", "APIs", "Scalability"]
    },
    {
      icon: <Database size={40} />,
      title: "Content Systems",
      description: "Data-driven content management solutions, information portals, and custom WordPress websites designed for clarity.",
      tags: ["CMS", "Portals", "Dashboards"]
    },
    {
      icon: <Shield size={40} />,
      title: "Deployment & Support",
      description: "Cloud-ready containerized deployments, ongoing maintenance, security updates, and dedicated technical support.",
      tags: ["Cloud", "Security", "Maintenance"]
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile applications for citizen engagement, field data collection, and financial services.",
      tags: ["iOS & Android", "Field Data", "App Dev"]
    },
    {
      icon: <BarChart size={40} />,
      title: "Data Analytics & BI",
      description: "Transforming raw data into actionable insights through custom dashboards, automated reporting tools, and visual analytics.",
      tags: ["Analytics", "Visualization", "Insights"]
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title fade-in"><span className="highlight">01.</span> What We Do</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card fade-in" style={{ animationDelay: `${index * 0.1}s` }} key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-tags">
                {service.tags.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
