import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import './Sidebar.css';

function Sidebar({ open, onClose, onOpen }) {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Github, href: '#github', label: 'GitHub' },
  ];

  const contactOptions = [
    { icon: Mail, text: 'info@kmn-consulting.com', href: 'mailto:info@kmn-consulting.com' },
    { icon: Phone, text: '+91 (555) 123-4567', href: 'tel:+915551234567' },
  ];

  return (
    <>
      <motion.div
        className={`sidebar ${open ? 'open' : ''}`}
        initial={{ x: -300 }}
        animate={{ x: open ? 0 : -300 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="sidebar-header">
          <Link to="/" className="sidebar-logo-link" onClick={onClose}>
            <h1 className="sidebar-logo">KMN</h1>
          </Link>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="sidebar-profile">
          <div className="profile-avatar">
            <img src="/logo.png" alt="KMN Logo" className="avatar-logo" />
          </div>
          <div className="profile-info">
            <h3 className="profile-name">KMN Team</h3>
          </div>
        </div>
        
        <nav className="sidebar-nav">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={item.path} className="nav-item" onClick={() => { onClose(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="sidebar-divider"></div>

        <div className="sidebar-section">
          <h3 className="sidebar-section-title">Contact</h3>
          {contactOptions.map((option, index) => (
            <motion.a
              key={index}
              href={option.href}
              className="sidebar-contact-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <option.icon size={16} />
              <span>{option.text}</span>
            </motion.a>
          ))}
        </div>

        <div className="sidebar-divider"></div>

        <div className="sidebar-section">
          <h3 className="sidebar-section-title">Follow Us</h3>
          <div className="sidebar-social">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                title={link.label}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {open && (
        <motion.div
          className="sidebar-overlay"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      )}

      <motion.button
        className="menu-toggle"
        onClick={() => (open ? onClose() : onOpen())}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Menu size={28} />
      </motion.button>
    </>
  );
}

export default Sidebar;
