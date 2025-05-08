import React, { useState, useEffect, useRef } from "react";
import profile from "./Profile.png";
import "./Hero.css";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const leftBeamRef = useRef(null);
  const rightBeamRef = useRef(null);
  const baseGlowRef = useRef(null);
  const hologramRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const runAnimationSequence = async () => {
      // Initial reveal
      setIsVisible(true);
      await delay(300);

      // Activate V-shaped projector beams
      activateBeams();
      await delay(800);

      // Show base glow
      if (baseGlowRef.current) {
        baseGlowRef.current.classList.add('active');
      }
      await delay(400);

      // Create particles
      createParticles();
      await delay(700);

      // Reveal holographic image
      revealImage();
      await delay(1000);

      // Start holographic scan effects
      if (hologramRef.current) {
        hologramRef.current.style.opacity = '1';
      }
    };

    const activateBeams = () => {
      if (leftBeamRef.current && rightBeamRef.current) {
        leftBeamRef.current.classList.add('active');
        rightBeamRef.current.classList.add('active');
      }
    };

    const createParticles = () => {
      particlesRef.current = Array.from({ length: 20 }).map((_, i) => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${45 + (Math.random() * 10)}%`;
        particle.style.animationDelay = `${i * 0.05}s`;
        containerRef.current.querySelector('.projector-beams').appendChild(particle);
        return particle;
      });
    };

    const revealImage = () => {
      if (imageRef.current) {
        imageRef.current.classList.add('active');
      }
    };

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    runAnimationSequence();

    return () => {
      // Cleanup particles
      particlesRef.current.forEach(particle => {
        if (particle?.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <section className={`hero-container ${isVisible ? "show-laser" : ""}`} ref={containerRef}>
      <div className="hero-left">
        <h1>Hi, I'm Ram Bhatt</h1>
        <p className="hero-subtitle">Full Stack Developer & Problem Solver</p>
        <p className="hero-description">
          I specialize in building modern web applications using MERN Stack, crafting powerful solutions that solve real-world challenges.
        </p>
        <button className="hero-button">Explore My Work</button>
      </div>

      <div className="hero-right">
        <div className="image-wrapper">
          {/* Projector Effect */}
          <div className="projector-beams">
            <div className="projector-beam left" ref={leftBeamRef}></div>
            <div className="projector-beam right" ref={rightBeamRef}></div>
            <div className="projection-base" ref={baseGlowRef}></div>
          </div>
          
          {/* Holographic Image */}
          <img 
            src={profile} 
            className="hero-image" 
            ref={imageRef} 
            alt="Ram Bhatt - Full Stack Developer" 
          />
          
          {/* Holographic Effects */}
          <div className="holographic-scan" ref={hologramRef}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
