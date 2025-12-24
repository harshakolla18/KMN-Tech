import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './firebase/AuthContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ChatBot from './components/ChatBot';
import LoginModal from './components/LoginModal';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import LeadershipPage from './pages/LeadershipPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import './App.css';

// ScrollToTop component to handle scroll restoration
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="app-container">
          <Header 
            onMenuClick={() => setSidebarOpen(true)} 
            onLoginClick={() => setLoginModalOpen(true)}
          />
          <Sidebar 
            open={sidebarOpen} 
            onClose={() => setSidebarOpen(false)}
            onOpen={() => setSidebarOpen(true)}
            onLoginClick={() => setLoginModalOpen(true)}
          />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/leadership" element={<LeadershipPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
          <ChatBot />
          <LoginModal 
            isOpen={loginModalOpen} 
            onClose={() => setLoginModalOpen(false)} 
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
