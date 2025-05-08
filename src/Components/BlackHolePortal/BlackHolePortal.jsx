import React, { useEffect } from 'react';
import './BlackHolePortal.css';

const BlackHolePortal = () => {
  useEffect(() => {
    // Generate stars
    const starsContainer = document.getElementById('stars');
    const starCount = 200;
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      
      // Random size (0.5px to 2px)
      const size = Math.random() * 1.5 + 0.5;
      
      // Random animation duration (2s to 5s)
      const duration = Math.random() * 3 + 2;
      
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.setProperty('--duration', `${duration}s`);
      
      // Random delay for twinkling
      star.style.animationDelay = `${Math.random() * 5}s`;
      
      if (starsContainer) starsContainer.appendChild(star);
    }
    
    // Animate emission beams in sequence
    const beamInterval = setInterval(() => {
      const beams = document.querySelectorAll('.emission-beam');
      beams.forEach((beam, index) => {
        setTimeout(() => {
          beam.style.animation = 'none';
          void beam.offsetWidth; // Trigger reflow
          beam.style.animation = 'beamEmit 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards';
        }, index * 1500);
      });
    }, 4500);
    
    return () => clearInterval(beamInterval);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Cosmic Explorer",
      description: "Interactive 3D visualization of celestial bodies and their orbits.",
      color: "#8a2be2"
    },
    {
      id: 2,
      title: "Nebula Tracker",
      description: "Real-time tracking of interstellar gas formations and star nurseries.",
      color: "#00bfff"
    },
    {
      id: 3,
      title: "Quantum Portal",
      description: "Simulation of wormhole dynamics and spacetime curvature.",
      color: "#ff1493"
    }
  ];

  return (
    <div className="universe">
      {/* Stars background */}
      <div className="stars" id="stars"></div>
      
      {/* Black Hole Container */}
      <div className="black-hole-container">
        <div className="black-hole emitting">
          <div className="singularity"></div>
          <div className="accretion-disk"></div>
          <div 
            className="emission-beam" 
            style={{ '--project-color': projects[0].color }}
          ></div>
        </div>
      </div>
      
      {/* Projects Container */}
      <div className="projects-line-horizontal">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className="project-box"
            style={{
              '--project-color': project.color,
              '--delay': `${0.5 + index * 0.2}s`
            }}
          >
            <div className="project-glow"></div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      {/* Cosmic Controls */}
      <div className="cosmic-controls">
        <button 
          className="reset-button"
          onClick={() => window.location.reload()}
          aria-label="Reset animation"
        >
          Reset Animation
        </button>
      </div>
    </div>
  );
};

export default BlackHolePortal;