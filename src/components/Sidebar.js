import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, LogIn, LogOut, User } from 'lucide-react';
import { useAuth } from '../firebase/AuthContext';
import logoNew from '../images/fevicon.png';
import './Sidebar.css';

function Sidebar({ open, onClose, onOpen, onLoginClick }) {
  const location = useLocation();
  const { currentUser, logout } = useAuth();
  
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      onClose();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleLoginClick = () => {
    onClose();
    onLoginClick();
  };

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
          {currentUser && (
            <div className="sidebar-user-profile">
              {currentUser.photoURL ? (
                <img src={currentUser.photoURL} alt="Profile" className="sidebar-user-avatar" />
              ) : (
                <div className="sidebar-user-avatar-placeholder">
                  <User size={24} />
                </div>
              )}
              <div className="sidebar-user-info">
                <span className="sidebar-user-name">{currentUser.displayName || 'User'}</span>
                <span className="sidebar-user-email">{currentUser.email}</span>
              </div>
            </div>
          )}
          <a href="https://form.jotform.com/253540474507053" target="_blank" rel="noopener noreferrer" className="sidebar-btn sidebar-btn-primary">
            Request Demo
          </a>
          {currentUser ? (
            <button className="sidebar-btn sidebar-btn-secondary" onClick={handleLogout}>
              <LogOut size={18} />
              Logout
            </button>
          ) : (
            <button className="sidebar-btn sidebar-btn-secondary" onClick={handleLoginClick}>
              <LogIn size={18} />
              Sign In
            </button>
          )}
        </div>
      </div>

      {open && (
        <div className="sidebar-overlay" onClick={onClose} />
      )}
    </>
  );
}

export default Sidebar;
