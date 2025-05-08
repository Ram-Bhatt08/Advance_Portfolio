import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [activeTab, setActiveTab] = useState('hero');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <header className="cosmic-navbar">
      <div className="cosmic-nav-bg"></div>
      
      <ul className="nav-links">
        {['hero', 'skills', 'projects', 'contact'].map((tab) => (
          <li
            key={tab}
            className={`nav-item ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <span className="nav-text">
              {tab === 'hero' ? 'Home' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </span>
            <div className="nav-underline"></div>
            <div className="nav-glow"></div>
            {tab === 'hero' && <div className="nav-pulse"></div>}
          </li>
        ))}
      </ul>
      
      <div 
        className={`cosmic-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transition: isHovering ? 'transform 0.1s, width 0.3s, height 0.3s' : 'transform 0.3s, width 0.3s, height 0.3s'
        }}
      ></div>
      
      <div className="particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              opacity: Math.random() * 0.6 + 0.2
            }}
          ></div>
        ))}
      </div>
    </header>
  );
}

export default Header;
