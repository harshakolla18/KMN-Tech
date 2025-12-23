import React from 'react';
import { Link } from 'react-router-dom';
import logoNew from '../images/fevicon.png';
import './CustomFooter.css';

function CustomFooter() {
  return (
    <footer className="custom-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-brand-logo">
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#1976d2',
              borderRadius: '50%',
              width: '2.5rem',
              height: '2.5rem',
              marginRight: '0.5rem',
            }}>
              <img src={logoNew} alt="Neos Tech Logo" style={{ height: '1.5rem', width: '1.5rem' }} />
            </span>
            <span style={{ color: '#1976d2' }}>Neos Tech</span>
          </div>
          <div className="footer-brand-desc">
            Empowering innovation and digital transformation.
          </div>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/press">Press</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="https://docs.neostech.com" target="_blank" rel="noopener noreferrer">Documentation</a></li>
            <li><a href="/help">Help Center</a></li>
            <li><a href="/guides">Guides</a></li>
            <li><a href="/api">API Reference</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/security">Security</a></li>
            <li><a href="/compliance">Compliance</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Neos Tech. All rights reserved.</span>
        <div className="footer-socials">
          <a href="https://twitter.com/neostech" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://github.com/neostech" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://linkedin.com/company/neostech" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default CustomFooter;
