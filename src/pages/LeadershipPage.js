import React from 'react';
import { motion } from 'framer-motion';
import './LeadershipPage.css';

function LeadershipPage() {
  const leaders = [
    {
      name: 'Rajesh Kumar',
      role: 'Chief Executive Officer',
      bio: 'Visionary leader with 20+ years of experience in IT consulting and business strategy. Rajesh has successfully led multiple digital transformation initiatives for Fortune 500 companies.',
      image: '🎯',
    },
    {
      name: 'Priya Singh',
      role: 'Chief Technology Officer',
      bio: 'Tech innovator with expertise in AI, cloud computing, and software architecture. Priya drives innovation and ensures our solutions are at the cutting edge of technology.',
      image: '💻',
    },
    {
      name: 'Amit Patel',
      role: 'Chief Operating Officer',
      bio: 'Operations expert committed to excellence and efficiency. Amit ensures smooth execution of all projects and maintains the highest standards of service delivery.',
      image: '⚙️',
    },
  ];

  return (
    <div className="leadership-page">
      <motion.div
        className="leadership-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Our Leadership Team</h1>
        <p>Meet the visionaries driving innovation at Neos Tech</p>
      </motion.div>

      <div className="leaders-container">
        {leaders.map((leader, index) => (
          <motion.div
            key={index}
            className="leader-profile-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 30px 80px rgba(66, 165, 245, 0.3)',
            }}
          >
            <div className="leader-profile-image">{leader.image}</div>
            <h2>{leader.name}</h2>
            <p className="leader-role">{leader.role}</p>
            <p className="leader-bio">{leader.bio}</p>
            <motion.button
              className="profile-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </div>

      <motion.section
        className="leadership-values"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Our Core Values</h2>
        <div className="values-grid">
          {[
            { title: 'Innovation', description: 'We constantly push boundaries to deliver cutting-edge solutions' },
            { title: 'Integrity', description: 'We conduct business with honesty and transparent communication' },
            { title: 'Excellence', description: 'We maintain the highest standards in everything we do' },
            { title: 'Collaboration', description: 'We believe in teamwork and partnership to achieve success' },
          ].map((value, index) => (
            <motion.div
              key={index}
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 Neos Tech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default LeadershipPage;
