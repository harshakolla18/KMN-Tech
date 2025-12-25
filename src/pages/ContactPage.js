import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

import { motion } from 'framer-motion';
import './ContactPage.css';
import CustomFooter from '../components/CustomFooter';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contacts'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date()
      });
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Neos Tech | Get in Touch</title>
        <meta name="description" content="Contact Neos Tech for AI, web development, and consulting services. Reach out to our team in the US, India, or South Africa." />
        <meta property="og:title" content="Contact Neos Tech | Get in Touch" />
        <meta property="og:description" content="Contact Neos Tech for AI, web development, and consulting services. Reach out to our team in the US, India, or South Africa." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://neostechus.com/contact" />
        <meta property="og:image" content="https://neostechus.com/logo.png" />
      </Helmet>
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

      <CustomFooter />
    </div>
    </>
  );
}

export default ContactPage;
