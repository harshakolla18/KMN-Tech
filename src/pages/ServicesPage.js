import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Bot, Users } from 'lucide-react';
import './ServicesPage.css';

function ServicesPage() {
  const services = [
    {
      title: 'Enterprise Website Development',
      tagline: 'We make you online',
      description: 'Modern, responsive, and enterprise-grade websites built with cutting-edge technologies. We create powerful digital experiences that elevate your brand and drive business growth.',
      icon: <Globe size={48} />,
      features: [
        'Custom web application development',
        'E-commerce solutions',
        'Progressive Web Apps (PWA)',
        'CMS integration & development',
        'Performance optimization',
        'SEO-friendly architecture'
      ]
    },
    {
      title: 'AI Agents',
      tagline: 'Replace teammates with AI agents',
      description: 'Intelligent automation solutions powered by advanced AI. Our AI agents handle repetitive tasks, customer interactions, and complex workflows, freeing your team to focus on what matters most.',
      icon: <Bot size={48} />,
      features: [
        'Custom AI chatbots',
        'Process automation agents',
        'Customer support automation',
        'Data analysis & insights',
        'Workflow optimization',
        '24/7 autonomous operations'
      ]
    },
    {
      title: 'IT Consulting',
      tagline: 'We support you with the best human talent with affordable cost',
      description: 'Expert consulting services that bridge the gap between technology and business goals. Our team of seasoned professionals provides strategic guidance and hands-on support.',
      icon: <Users size={48} />,
      features: [
        'Digital transformation strategy',
        'Technology roadmap planning',
        'Cloud migration consulting',
        'IT infrastructure optimization',
        'Security & compliance guidance',
        'Staff augmentation services'
      ]
    }
  ];

  return (
    <div className="services-page">
      <motion.div
        className="services-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Our Services</h1>
        <p>Empowering businesses with cutting-edge technology solutions</p>
      </motion.div>

      <div className="services-container">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-detail-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              boxShadow: '0 25px 50px rgba(66, 165, 245, 0.3)',
            }}
          >
            <div className="service-icon-wrapper">
              {service.icon}
            </div>
            <h2>{service.title}</h2>
            <p className="service-tagline">{service.tagline}</p>
            <p className="service-description">{service.description}</p>
            <div className="service-features">
              <h4>What we offer:</h4>
              <ul>
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.button
              className="service-cta-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
