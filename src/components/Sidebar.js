import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, LogIn } from 'lucide-react';
import logoNew from '../images/fevicon.png';
import './Sidebar.css';

function Sidebar({ open, onClose, onOpen }) {
  const location = useLocation();
  
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <div className={`sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar-header">
          <Link to="/" className="sidebar-logo-link" onClick={onClose}>
            <img src={logoNew} alt="Neos Tech Logo" className="sidebar-logo-image" />
            <h1 className="sidebar-logo">Neos Tech</h1>
          </Link>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="sidebar-divider"></div>
        
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <div key={item.name}>
              <Link 
                to={item.path} 
                className={`nav-item ${location.pathname === item.path ? 'active' : ''}`} 
                onClick={() => { onClose(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>

        <div className="sidebar-buttons">
          <a href="https://form.jotform.com/253540474507053" target="_blank" rel="noopener noreferrer" className="sidebar-btn sidebar-btn-primary">
            Request Demo
          </a>
          <button className="sidebar-btn sidebar-btn-secondary">
            <LogIn size={18} />
            Sign In
          </button>
        </div>
      </div>

      {open && (
        <div className="sidebar-overlay" onClick={onClose} />
      )}
    </>
  );
}

export default Sidebar;
