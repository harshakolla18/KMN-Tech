import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogIn, Menu, User } from 'lucide-react';
import { useAuth } from '../firebase/AuthContext';
import logoNew from '../images/fevicon.png';
import './Header.css';

function Header({ onMenuClick, onLoginClick }) {
  const location = useLocation();
  const { currentUser, logout } = useAuth();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
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
            <img src={logoNew} alt="Neos Tech Logo" className="header-logo-image" />
            <div className="header-logo">Neos Tech</div>
          </motion.div>
        </Link>
        <nav className="header-nav">
          <Link to="/" className={`header-nav-item ${location.pathname === '/' ? 'active' : ''}`} onClick={scrollToTop}>Home</Link>
          <Link to="/services" className={`header-nav-item ${location.pathname === '/services' ? 'active' : ''}`} onClick={scrollToTop}>Our Services</Link>
          <Link to="/projects" className={`header-nav-item ${location.pathname === '/projects' ? 'active' : ''}`} onClick={scrollToTop}>Projects</Link>
          <Link to="/leadership" className={`header-nav-item ${location.pathname === '/leadership' ? 'active' : ''}`} onClick={scrollToTop}>Leadership</Link>
          <Link to="/contact" className={`header-nav-item ${location.pathname === '/contact' ? 'active' : ''}`} onClick={scrollToTop}>Contact</Link>
          <a href="https://form.jotform.com/253540474507053" target="_blank" rel="noopener noreferrer" className="header-nav-item request-demo-btn">Request Demo</a>
        </nav>

        <div className="header-actions">
          <a href="https://form.jotform.com/253540474507053" target="_blank" rel="noopener noreferrer" className="mobile-request-demo-btn">
            Request Demo
          </a>
          {currentUser ? (
            <div className="user-profile-section">
              <div className="user-info">
                {currentUser.photoURL ? (
                  <img src={currentUser.photoURL} alt="Profile" className="user-avatar" />
                ) : (
                  <div className="user-avatar-placeholder">
                    <User size={18} />
                  </div>
                )}
                <span className="user-name">{currentUser.displayName || 'User'}</span>
              </div>
              <motion.button
                className="signin-button user-logged-in"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
              >
                <span className="signin-text">Logout</span>
              </motion.button>
            </div>
          ) : (
            <motion.button
              className="signin-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onLoginClick}
            >
              <LogIn size={18} />
              <span className="signin-text">Login</span>
            </motion.button>
          )}

          <button className="header-menu-btn" onClick={onMenuClick}>
            <Menu size={24} />
          </button>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
