import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Globe, Briefcase, Users } from 'lucide-react';
import backgroundImage from '../images/2.png';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();
  const [agentCount, setAgentCount] = useState(0);
  const [websiteCount, setWebsiteCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [replaceCount, setReplaceCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAgentCount(prev => (prev < 8 ? prev + 1 : 8));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWebsiteCount(prev => (prev < 40 ? prev + 1 : 40));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectCount(prev => (prev < 8 ? prev + 1 : 8));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setReplaceCount(prev => (prev < 50 ? prev + 1 : 50));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  {/* Update Teammates Replaced by AI Count */}
      const teammatesReplacedByAI = 15;
      useEffect(() => {
        const interval = setInterval(() => {
          setReplaceCount(prev => {
            if (prev < 10) {
              return prev + 1;
            } else {
              clearInterval(interval); // Ensure the interval stops when the count reaches the target
              return prev;
            }
          });
        }, 500); // Increased interval duration for smoother updates
        return () => clearInterval(interval);
      }, [teammatesReplacedByAI]);

  return (
    <div className="home-page">
      {/* Background Image */}
      <div className="image-background">
        <img
          src={backgroundImage}
          alt="Background"
          className="background-image"
        />
      </div>

      {/* Hero Section */}
      <motion.section
        className="hero-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="hero-content"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p
            className="hero-slogan focus-in-contract"
            style={{ animationDelay: '0s', animationDuration: '5s' }}
          >
            We make you online
          </p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(66, 165, 245, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/services')}
          >
            Get Started
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="services-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {[
            {
              title: 'Website Development',
              description: 'Modern, responsive websites built with cutting-edge technologies',
              icon: '🌐',
            },
            {
              title: 'AI Agents',
              description: 'Intelligent automation solutions powered by advanced AI',
              icon: '🤖',
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(66, 165, 245, 0.3)',
              }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* How We Work Section */}
      <motion.section
        className="how-it-works-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">How We Work</h2>
        <p className="how-it-works-desc">
          Simplify your digital transformation with Neos Tech. No complex setup, no lengthy onboarding.
        </p>
        <div className="how-it-works-grid">
          {[
            {
              step: '01',
              icon: <span role="img" aria-label="search">🌐</span>,
              title: 'Discover Your Needs',
              desc: 'Identify the perfect solutions for your business, tailored to your goals and challenges.'
            },
            {
              step: '02',
              icon: <span role="img" aria-label="deploy">🚀</span>,
              title: 'Seamless Integration',
              desc: 'Integrate our services effortlessly into your existing workflows and systems.'
            },
            {
              step: '03',
              icon: <span role="img" aria-label="zap">⚡</span>,
              title: 'Accelerate Growth',
              desc: 'Leverage cutting-edge technology to boost efficiency and drive innovation.'
            },
            {
              step: '04',
              icon: <span role="img" aria-label="improve">📈</span>,
              title: 'Continuous Support',
              desc: 'Benefit from ongoing support and updates to ensure sustained success.'
            }
          ].map((item, idx) => (
            <div className="how-it-works-card" key={item.step}>
              <div className="how-it-works-step">{item.step}</div>
              <div className="how-it-works-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* AI Agent Count */}
      <motion.section
        className="agent-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="agent-card">
          <Zap className="agent-icon" size={40} />
          <div className="agent-count-display">
            <h2>Active AI Agents</h2>
            <motion.p
              className="agent-number"
              key={agentCount}
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {agentCount}
            </motion.p>
          </div>
        </div>

        <div className="agent-card">
          <Globe className="agent-icon" size={40} />
          <div className="agent-count-display">
            <h2>Completed Websites</h2>
            <motion.p
              className="agent-number"
              key={websiteCount}
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {websiteCount}
            </motion.p>
          </div>
        </div>

        <div className="agent-card">
          <Briefcase className="agent-icon" size={40} />
          <div className="agent-count-display">
            <h2>Ongoing Projects</h2>
            <motion.p
              className="agent-number"
              key={projectCount}
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {projectCount}
            </motion.p>
          </div>
        </div>

        <div className="agent-card">
          <Users className="agent-icon" size={40} />
          <div className="agent-count-display">
            <h2>Teammates Replaced by AI Agents</h2>
            <motion.p
              className="agent-number"
              key={replaceCount}
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {replaceCount}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Contact Preview */}
      <motion.section
        className="contact-preview"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="contact-preview-content">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss how we can help your business grow online</p>
          {/* Contact Us Button */}
          <button
            className="contact-us-button"
            onClick={() => {
              window.location.href = '/contact';
            }}
          >
            Contact Us
          </button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 Neos Tech. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
