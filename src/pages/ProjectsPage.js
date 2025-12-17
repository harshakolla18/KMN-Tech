import React from 'react';
import { motion } from 'framer-motion';
import './ProjectsPage.css';

function ProjectsPage() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Website Development',
      description: 'A fully responsive e-commerce platform built with React and Node.js, featuring real-time inventory management and integrated payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      year: '2024',
    },
    {
      title: 'AI Chatbot Solution',
      category: 'AI Agents',
      description: 'Intelligent chatbot powered by GPT-4, designed to handle customer support queries with 95% accuracy. Integrated with multiple CRM platforms.',
      technologies: ['Python', 'GPT-4', 'FastAPI', 'React'],
      year: '2024',
    },
    {
      title: 'Healthcare Portal',
      category: 'Website Development',
      description: 'A secure healthcare portal enabling patients to access medical records, schedule appointments, and consult with doctors online.',
      technologies: ['React', 'Express', 'PostgreSQL', 'HIPAA Compliant'],
      year: '2023',
    },
    {
      title: 'Predictive Analytics Engine',
      category: 'AI Agents',
      description: 'Machine learning solution for predictive analytics, helping businesses forecast trends and make data-driven decisions.',
      technologies: ['Python', 'TensorFlow', 'Flask', 'AWS'],
      year: '2023',
    },
    {
      title: 'SaaS Management Dashboard',
      category: 'Website Development',
      description: 'Comprehensive dashboard for managing SaaS subscriptions, user analytics, and billing information in real-time.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Chart.js'],
      year: '2023',
    },
    {
      title: 'Automated Workflow System',
      category: 'AI Agents',
      description: 'Intelligent automation system that streamlines business processes and reduces manual work by 70%.',
      technologies: ['Python', 'RPA', 'Machine Learning', 'AWS Lambda'],
      year: '2024',
    },
  ];

  return (
    <div className="projects-page">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Our Projects</h1>
        <p>Showcase of our innovative solutions and successful implementations</p>
      </motion.div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              boxShadow: '0 25px 60px rgba(66, 165, 245, 0.3)',
            }}
          >
            <div className="project-header">
              <span className="project-category">{project.category}</span>
              <span className="project-year">{project.year}</span>
            </div>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
            <motion.button
              className="project-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Case Study
            </motion.button>
          </motion.div>
        ))}
      </div>

      <motion.section
        className="projects-stats"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="stats-grid">
          {[
            { number: '50+', label: 'Successful Projects' },
            { number: '100+', label: 'Happy Clients' },
            { number: '15+', label: 'Years Experience' },
            { number: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 KMN IT & Consulting. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default ProjectsPage;
