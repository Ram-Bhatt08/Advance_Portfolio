import React, { useEffect } from 'react';
import './Footer.css';

function Footer() {
  useEffect(() => {
    // Create shooting stars
    const container = document.querySelector('.cosmic-footer');
    const createShootingStar = () => {
      const star = document.createElement('div');
      star.className = 'shooting-star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 20}%`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      container.appendChild(star);
      
      // Remove star after animation completes
      setTimeout(() => {
        star.remove();
      }, 3000);
    };

    // Create initial stars
    for (let i = 0; i < 5; i++) {
      setTimeout(createShootingStar, i * 1000);
    }

    // Continuous shooting stars
    const interval = setInterval(createShootingStar, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="cosmic-footer">
      <div className="footer-content">
        <div className="footer-text">
          <p className="footer-message">© 2025 Ram Bhatt. All rights reserved.</p>
          <p className="footer-credit">Designed and Developed by The Ram Bhatt</p>
        </div>
        <div className="earth-globe"></div>
      </div>
      <div className="satellite"></div>
    </footer>
  );
}

export default Footer;
