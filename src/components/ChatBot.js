import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle } from 'lucide-react';
import './ChatBot.css';

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Hello! 👋 I\'m the KMN AI Assistant. How can I help you today?',
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const faqDatabase = {
    services: {
      trigger: ['services', 'what do you offer', 'what services'],
      response:
        'We offer Website Development and AI Agent solutions to help businesses go online and automate their processes.',
    },
    timeline: {
      trigger: ['how long', 'timeline', 'project timeline'],
      response:
        'Most projects take 2-6 months depending on complexity. We customize timelines based on your specific needs.',
    },
    support: {
      trigger: ['support', 'help', 'assistance', 'available'],
      response:
        'We provide 24/7 support and maintenance for all our clients. Your success is our priority!',
    },
    contact: {
      trigger: ['contact', 'reach', 'email', 'phone'],
      response:
        'You can contact us at info@kmn-consulting.com or call +91 (555) 123-4567. We\'re here to help!',
    },
    technology: {
      trigger: ['technology', 'stack', 'react', 'tools'],
      response:
        'We use cutting-edge technologies including React, Node.js, AI/ML, and cloud platforms to build scalable solutions.',
    },
    pricing: {
      trigger: ['price', 'cost', 'pricing'],
      response:
        'Pricing varies based on project scope. Contact us for a custom quote tailored to your needs.',
    },
  };

  const getResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    for (const [, faq] of Object.entries(faqDatabase)) {
      if (faq.trigger.some(trigger => lowerMessage.includes(trigger))) {
        return faq.response;
      }
    }

    return 'I\'m not sure about that. Please contact us at info@kmn-consulting.com or ask about our services, timeline, support, technology, pricing, or how to contact us!';
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: inputValue,
    };

    const botResponse = {
      id: messages.length + 2,
      type: 'bot',
      text: getResponse(inputValue),
    };

    setMessages([...messages, userMessage, botResponse]);
    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Popup Message */}
      <AnimatePresence>
        {showPopup && !isOpen && (
          <motion.div
            className="chat-popup-message"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            <p>Can I help you?</p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-container"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="chatbot-header">
              <div className="chatbot-title">
                <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" className="chatbot-avatar-img">
                  {/* Light blue background circle */}
                  <circle cx="100" cy="120" r="85" fill="#B3D9F0" opacity="0.9"/>
                  
                  {/* Head */}
                  <rect x="50" y="40" width="100" height="95" rx="20" fill="#D4E8F7"/>
                  
                  {/* Top antenna */}
                  <circle cx="100" cy="30" r="8" fill="#1B3A5F"/>
                  <line x1="100" y1="30" x2="100" y2="10" stroke="#1B3A5F" strokeWidth="4" strokeLinecap="round"/>
                  
                  {/* Left ear */}
                  <ellipse cx="40" cy="85" rx="15" ry="25" fill="#1B3A5F"/>
                  
                  {/* Right ear */}
                  <ellipse cx="160" cy="85" rx="15" ry="25" fill="#1B3A5F"/>
                  
                  {/* Screen/Face */}
                  <rect x="55" y="50" width="90" height="75" rx="8" fill="#0F1E38" stroke="#1B3A5F" strokeWidth="2"/>
                  
                  {/* Left eye */}
                  <rect x="65" y="65" width="12" height="25" rx="6" fill="#00D4FF"/>
                  
                  {/* Right eye */}
                  <rect x="123" y="65" width="12" height="25" rx="6" fill="#00D4FF"/>
                  
                  {/* Smile */}
                  <path d="M 75 100 Q 100 115 125 100" stroke="#00D4FF" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  
                  {/* Body */}
                  <rect x="60" y="140" width="80" height="70" rx="15" fill="#D4E8F7"/>
                  
                  {/* Body divider */}
                  <line x1="60" y1="175" x2="140" y2="175" stroke="#B3D9F0" strokeWidth="2"/>
                </svg>
                <div>
                  <h3>KMN Assistant</h3>
                  <p className="online-status">Online</p>
                </div>
              </div>
              <button className="close-chat" onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`message ${message.type}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="message-content">{message.text}</div>
                </motion.div>
              ))}
            </div>

            <div className="chatbot-input">
              <input
                type="text"
                placeholder="Ask about services, pricing, timeline..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button onClick={handleSendMessage} className="send-btn">
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="chatbot-toggle"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowPopup(false);
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" className="chatbot-robot-svg">
          {/* Light blue background circle */}
          <circle cx="100" cy="120" r="85" fill="#B3D9F0" opacity="0.9"/>
          
          {/* Head */}
          <rect x="50" y="40" width="100" height="95" rx="20" fill="#D4E8F7"/>
          
          {/* Top antenna */}
          <circle cx="100" cy="30" r="8" fill="#1B3A5F"/>
          <line x1="100" y1="30" x2="100" y2="10" stroke="#1B3A5F" strokeWidth="4" strokeLinecap="round"/>
          
          {/* Left ear */}
          <ellipse cx="40" cy="85" rx="15" ry="25" fill="#1B3A5F"/>
          
          {/* Right ear */}
          <ellipse cx="160" cy="85" rx="15" ry="25" fill="#1B3A5F"/>
          
          {/* Screen/Face */}
          <rect x="55" y="50" width="90" height="75" rx="8" fill="#0F1E38" stroke="#1B3A5F" strokeWidth="2"/>
          
          {/* Left eye */}
          <rect x="65" y="65" width="12" height="25" rx="6" fill="#00D4FF"/>
          
          {/* Right eye */}
          <rect x="123" y="65" width="12" height="25" rx="6" fill="#00D4FF"/>
          
          {/* Smile */}
          <path d="M 75 100 Q 100 115 125 100" stroke="#00D4FF" strokeWidth="2" fill="none" strokeLinecap="round"/>
          
          {/* Body */}
          <rect x="60" y="140" width="80" height="70" rx="15" fill="#D4E8F7"/>
          
          {/* Body divider */}
          <line x1="60" y1="175" x2="140" y2="175" stroke="#B3D9F0" strokeWidth="2"/>
          
          {/* Left arm */}
          <g>
            <rect x="30" y="160" width="35" height="18" rx="9" fill="#D4E8F7"/>
            <circle cx="25" cy="169" r="9" fill="#B3D9F0"/>
          </g>
          
          {/* Right arm waving */}
          <g>
            <rect x="140" y="145" width="35" height="18" rx="9" fill="#D4E8F7" transform="rotate(-30 157.5 154)"/>
            <circle cx="170" cy="135" r="9" fill="#B3D9F0"/>
            {/* Hand */}
            <rect x="165" y="120" width="12" height="25" rx="6" fill="#D4E8F7"/>
            <path d="M 165 120 L 160 105 M 170 120 L 172 102 M 177 120 L 182 106" stroke="#1B3A5F" strokeWidth="2" strokeLinecap="round"/>
          </g>
        </svg>
        {!isOpen && <span className="pulse-dot"></span>}
      </motion.button>
    </>
  );
}

export default ChatBot;
