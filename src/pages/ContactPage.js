import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ContactPage.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Get In Touch</h1>
        <p>Let's discuss your project and how we can help</p>
      </motion.div>

      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2>Contact Information</h2>
          <div className="info-item">
            <span className="info-label">📍 Address</span>
            <p>Saint Louis, Missouri</p>
          </div>
          <div className="info-item">
            <span className="info-label">📧 Email</span>
            <p>info@neostech.com</p>
          </div>
          <div className="info-item">
            <span className="info-label">📱 Phone</span>
            <p>+91 (555) 123-4567</p>
          </div>
          <div className="info-item">
            <span className="info-label">⏰ Working Hours</span>
            <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday - Sunday: Closed</p>
          </div>

          <div className="social-links">
            <motion.a href="#linkedin" className="social-link" whileHover={{ scale: 1.1 }}>LinkedIn</motion.a>
            <motion.a href="#youtube" className="social-link" whileHover={{ scale: 1.1 }}>YouTube</motion.a>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-container"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {submitted && (
            <motion.div
              className="success-message"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <span>✓ Message sent successfully!</span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project..."
                rows="6"
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      <motion.section
        className="faq-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          {[
            {
              question: 'What services do you offer?',
              answer: 'We provide website development, AI agent solutions, consulting, and custom software development.',
            },
            {
              question: 'What is your typical project timeline?',
              answer: 'Project timelines vary, but most projects take 2-6 months depending on complexity and requirements.',
            },
            {
              question: 'Do you provide ongoing support?',
              answer: 'Yes, we offer 24/7 support and maintenance packages for all our clients.',
            },
            {
              question: 'How do we get started?',
              answer: 'Contact us to schedule a consultation. We will discuss your requirements and provide a customized proposal.',
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
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

export default ContactPage;
