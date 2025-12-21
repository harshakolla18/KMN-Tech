import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';

function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="page-header">
      <motion.div
        className="header-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link to="/" className="header-logo-link" onClick={scrollToTop}>
          <motion.div
            className="header-logo-container"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="header-logo">KMN</div>
            <div className="header-logo-subtitle"><br></br>IT & Consulting</div>
          </motion.div>
        </Link>
        <nav className="header-nav">
          <Link to="/" className="header-nav-item" onClick={scrollToTop}>Home</Link>
          <Link to="/services" className="header-nav-item" onClick={scrollToTop}>Our Services</Link>
          <Link to="/projects" className="header-nav-item" onClick={scrollToTop}>Projects</Link>
          <Link to="/contact" className="header-nav-item" onClick={scrollToTop}>Contact</Link>
        </nav>

        <motion.button
          className="signin-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign In
        </motion.button>
      </motion.div>
    </header>
  );
}

export default Header;
