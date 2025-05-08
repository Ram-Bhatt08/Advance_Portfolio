import React, { useEffect, useState, useMemo, useCallback } from 'react';
import './Treasure.css';

// Import skill icons
import htmlIcon from './html.png';
import jsIcon from './js.png';
import nodeIcon from './node.png';
import reactIcon from './react.png';
import expressIcon from './express.png';
import javaIcon from './java.png';
import cppIcon from './cpp.png';
import mongoIcon from './mongo.png';
import vscodeIcon from './vscode.png';
import gitIcon from './git.png';
import jiraIcon from './jira.png';
import sqlIcon from './sql.png';
import cssIcon from './css.png';

const Treasure = () => {
  // Animation state management
  const [animationPhase, setAnimationPhase] = useState('initial');
  const [explodedSkills, setExplodedSkills] = useState([]);
  const [showFinalCircle, setShowFinalCircle] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Skill data with enhanced metadata
  const skills = useMemo(() => [
    { 
      id: 1, 
      icon: <img src={htmlIcon} alt="HTML5" className="skill-icon-img" />, 
      name: "HTML5", 
      color: "linear-gradient(135deg, #FFD700, #FFA500)", 
      glow: "rgba(255, 215, 0, 0.4)",
    },
    { 
      id: 2, 
      icon: <img src={cssIcon} alt="CSS3" className="skill-icon-img" />, 
      name: "CSS3", 
      color: "linear-gradient(135deg, #264de4, #2965f1)", 
      category: "Frontend", 
      glow: "rgba(38, 77, 228, 0.4)",
      proficiency: 90,
      years: 5
    },
    { 
      id: 3, 
      icon: <img src={jsIcon} alt="JavaScript" className="skill-icon-img" />, 
      name: "JavaScript", 
      color: "linear-gradient(135deg, #f0db4f, #f7df1e)", 
      category: "Frontend", 
      glow: "rgba(240, 219, 79, 0.4)",
      proficiency: 92,
      years: 5
    },
    { 
      id: 4, 
      icon: <img src={reactIcon} alt="React" className="skill-icon-img" />, 
      name: "React", 
      color: "linear-gradient(135deg, #61dafb, #00bcd4)", 
      category: "Frontend", 
      glow: "rgba(97, 218, 251, 0.4)",
      proficiency: 88,
      years: 4
    },
    { 
      id: 5, 
      icon: <img src={nodeIcon} alt="Node.js" className="skill-icon-img" />, 
      name: "Node.js", 
      color: "linear-gradient(135deg, #68a063, #3c873a)", 
      category: "Backend", 
      glow: "rgba(104, 160, 99, 0.4)",
      proficiency: 85,
      years: 4
    },
    { 
      id: 6, 
      icon: <img src={expressIcon} alt="Express.js" className="skill-icon-img" />, 
      name: "Express.js", 
      color: "linear-gradient(135deg, #3776ab, #ffd43b)", 
      category: "Backend", 
      glow: "rgba(55, 118, 171, 0.4)",
      proficiency: 80,
      years: 3
    },
    { 
      id: 7, 
      icon: <img src={javaIcon} alt="Java" className="skill-icon-img" />, 
      name: "Java", 
      color: "linear-gradient(135deg, #5382a1, #f89820)", 
      category: "Backend", 
      glow: "rgba(83, 130, 161, 0.4)",
      proficiency: 75,
      years: 2
    },
    { 
      id: 8, 
      icon: <img src={cppIcon} alt="C++" className="skill-icon-img" />, 
      name: "C++", 
      color: "linear-gradient(135deg, #00599c, #004482)", 
      category: "Programming", 
      glow: "rgba(0, 89, 156, 0.4)",
      proficiency: 70,
      years: 2
    },
    { 
      id: 9, 
      icon: <img src={jiraIcon} alt="JIRA" className="skill-icon-img" />, 
      name: "JIRA", 
      color: "linear-gradient(135deg, #178600, #239a3b)", 
      category: "Programming", 
      glow: "rgba(23, 134, 0, 0.4)",
      proficiency: 65,
      years: 1
    },
    { 
      id: 10, 
      icon: <img src={vscodeIcon} alt="VS Code" className="skill-icon-img" />, 
      name: "VS Code", 
      color: "linear-gradient(135deg, #007acc, #3ba0e6)", 
      category: "Tools", 
      glow: "rgba(0, 122, 204, 0.4)",
      proficiency: 95,
      years: 5
    },
    { 
      id: 11, 
      icon: <img src={gitIcon} alt="Git" className="skill-icon-img" />, 
      name: "Git", 
      color: "linear-gradient(135deg, #f14e32, #f05033)", 
      category: "Tools", 
      glow: "rgba(241, 78, 50, 0.4)",
      proficiency: 85,
      years: 4
    },
    { 
      id: 12, 
      icon: <img src={sqlIcon} alt="SQL" className="skill-icon-img" />, 
      name: "SQL", 
      color: "linear-gradient(135deg, #2496ed, #1d63ed)", 
      category: "Tools", 
      glow: "rgba(36, 150, 237, 0.4)",
      proficiency: 75,
      years: 2
    },
    { 
      id: 13, 
      icon: <img src={mongoIcon} alt="MongoDB" className="skill-icon-img" />, 
      name: "MongoDB", 
      color: "linear-gradient(135deg, #8dd6f9, #1c78c0)", 
      category: "Tools", 
      glow: "rgba(141, 214, 249, 0.4)",
      proficiency: 70,
      years: 2
    }
  ], []);

  // Animation timeline configuration
  const animationTimeline = useMemo(() => [
    { phase: 'approach', delay: 800 },
    { phase: 'collision-prepare', delay: 1200 },
    { phase: 'collision', delay: 400 },
    { phase: 'explosion', delay: 600 },
    { phase: 'skills-explode', delay: 300 },
    { phase: 'skills-circle', delay: isMobile ? 1200 : 1800 }
  ], [isMobile]);

  // Handle skill hover with memoization
  const handleSkillHover = useCallback((skillName) => {
    setHoveredSkill(skillName);
  }, []);

  const handleSkillLeave = useCallback(() => {
    setHoveredSkill(null);
  }, []);

  // Main animation sequence
  useEffect(() => {
    let timeoutIds = [];
    let accumulatedDelay = 0;

    const runAnimation = () => {
      animationTimeline.forEach((step) => {
        accumulatedDelay += step.delay;
        timeoutIds.push(
          setTimeout(() => {
            setAnimationPhase(step.phase);
            
            if (step.phase === 'skills-explode') {
              // Fisher-Yates shuffle for random explosion
              const shuffled = [...skills];
              for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
              }
              setExplodedSkills(shuffled);
            }
            
            if (step.phase === 'skills-circle') {
              setShowFinalCircle(true);
            }
          }, accumulatedDelay)
        );
      });
    };

    const initialDelay = setTimeout(() => {
      runAnimation();
    }, 500);

    return () => {
      clearTimeout(initialDelay);
      timeoutIds.forEach(id => clearTimeout(id));
    };
  }, [animationTimeline, skills]);

  // Generate random particles with memoization
  const generateParticles = (count, config) => 
    Array.from({ length: count }, (_, i) => ({
      id: `${config.prefix}-${i}`,
      ...Object.keys(config.properties).reduce((acc, key) => {
        acc[key] = config.properties[key](i);
        return acc;
      }, {})
    }));

  const stars = useMemo(() => generateParticles(150, {
    prefix: 'star',
    properties: {
      size: () => `${Math.random() * 4 + 1}px`,
      left: () => `${Math.random() * 100}%`,
      top: () => `${Math.random() * 100}%`,
      delay: () => `${Math.random() * 5}s`,
      duration: () => `${Math.random() * 15 + 5}s`,
      opacity: () => Math.random() * 0.8 + 0.2
    }
  }), []);

  const shootingStars = useMemo(() => generateParticles(3, {
    prefix: 'shooting',
    properties: {
      delay: () => `${Math.random() * 15}s`,
      duration: () => `${Math.random() * 3 + 1}s`,
      left: () => `${Math.random() * 100}%`,
      top: () => `${Math.random() * 30}%`
    }
  }), []);

  const cometParticles = useMemo(() => generateParticles(40, {
    prefix: 'particle',
    properties: {
      size: () => `${Math.random() * 8 + 3}px`,
      opacity: () => Math.random() * 0.7 + 0.3,
      glowColor: () => `hsl(${Math.random() * 60 + 180}, 100%, 50%)`
    }
  }), []);

  const asteroidCraters = useMemo(() => generateParticles(15, {
    prefix: 'crater',
    properties: {
      size: () => `${Math.random() * 25 + 10}px`,
      left: () => `${Math.random() * 80 + 10}%`,
      top: () => `${Math.random() * 80 + 10}%`,
      depth: () => `${Math.random() * 15 + 5}px`
    }
  }), []);

  const explosionRings = useMemo(() => generateParticles(8, {
    prefix: 'ring',
    properties: {
      color: () => `hsla(${Math.random() * 60 + 20}, 100%, 50%, 0.7)`
    }
  }), []);

  const debrisParticles = useMemo(() => generateParticles(30, {
    prefix: 'debris',
    properties: {
      size: () => `${Math.random() * 10 + 5}px`,
      angle: () => `${Math.random() * 360}deg`,
      distance: () => `${Math.random() * 200 + 100}px`,
      delay: (i) => `${i * 0.05}s`,
      duration: () => `${Math.random() * 2 + 1}s`
    }
  }), []);

  const skillSparkles = useMemo(() => generateParticles(5, {
    prefix: 'sparkle',
    properties: {
      size: () => `${Math.random() * 6 + 2}px`,
      delay: () => `${Math.random() * 2}s`,
      duration: () => `${Math.random() * 3 + 1}s`,
      distance: () => `${Math.random() * 30 + 10}px`,
      angle: () => `${Math.random() * 360}deg`
    }
  }), []);

  const hoverParticles = useMemo(() => generateParticles(8, {
    prefix: 'hover-particle',
    properties: {
      x: () => Math.random() * 2 - 1,
      y: () => Math.random() * 0.5 + 0.5,
      left: () => `${Math.random() * 100}%`,
      top: () => `${Math.random() * 100}%`,
      delay: (i) => `${i * 0.2}s`,
      color: () => `hsl(${Math.random() * 60 + 180}, 100%, 70%)`
    }
  }), []);

  const lightRays = useMemo(() => generateParticles(12, {
    prefix: 'ray',
    properties: {
      angle: (i) => i * 30,
      delay: (i) => `${i * 0.1}s`
    }
  }), []);

  // Calculate skill position in circle
  const getSkillPosition = (index, total) => {
    const angle = (index * 360 / total);
    const distance = isMobile ? 120 : 180;
    return {
      angle: `${angle}deg`,
      distance: `${distance}px`
    };
  };

  return (
    <div className="cosmic-environment">
      {/* Animated Title */}
      <div className="title-container">
        <h1 className="cosmic-title floating">Cosmic Skills Explorer</h1>
        <div className="cosmic-subtitle floating">Navigate My Technical Universe</div>
      </div>

      {/* Starfield Background */}
      <div className="starfield">
        {stars.map(star => (
          <div 
            key={star.id}
            className="star twinkling" 
            style={{
              '--size': star.size,
              '--left': star.left,
              '--top': star.top,
              '--delay': star.delay,
              '--duration': star.duration,
              '--opacity': star.opacity
            }}
            aria-hidden="true"
          />
        ))}
      </div>
      
      {/* Shooting Stars */}
      <div className="shooting-stars">
        {shootingStars.map(star => (
          <div 
            key={star.id}
            className="shooting-star" 
            style={{
              '--delay': star.delay,
              '--duration': star.duration,
              '--left': star.left,
              '--top': star.top
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Main Animation Sequence */}
      <div className="cosmic-objects">
        {/* Comet Approach */}
        {['approach', 'collision-prepare'].includes(animationPhase) && (
          <>
            <div className="comet-container">
              <div className="comet-core pulsing" aria-label="Approaching comet" />
              <div className="comet-aura pulsing" aria-hidden="true" />
              <div className="particle-trail">
                {cometParticles.map(particle => (
                  <div 
                    key={particle.id}
                    className="comet-particle glowing" 
                    style={{ 
                      '--size': particle.size,
                      '--opacity': particle.opacity,
                      '--glow-color': particle.glowColor
                    }}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
            
            {/* Asteroid */}
            <div className={`asteroid ${animationPhase === 'collision-prepare' ? 'pre-collision shaking' : ''}`}>
              <div className="asteroid-surface">
                {asteroidCraters.map(crater => (
                  <div 
                    key={crater.id}
                    className="crater" 
                    style={{
                      '--size': crater.size,
                      '--left': crater.left,
                      '--top': crater.top,
                      '--depth': crater.depth
                    }}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <div className="asteroid-glow pulsing" aria-hidden="true" />
            </div>
          </>
        )}
        
        {/* Explosion Effects */}
        {['collision', 'explosion'].includes(animationPhase) && (
          <div className="collision-effects" aria-label="Collision explosion">
            <div className="explosion-core expanding" aria-hidden="true" />
            <div className="explosion-rings">
              {explosionRings.map(ring => (
                <div 
                  key={ring.id}
                  className="explosion-ring" 
                  style={{ 
                    '--color': ring.color
                  }}
                  aria-hidden="true"
                />
              ))}
            </div>
            <div className="shockwave expanding" aria-hidden="true" />
            <div className="energy-pulse pulsing" aria-hidden="true" />
            <div className="explosion-debris">
              {debrisParticles.map(debris => (
                <div 
                  key={debris.id}
                  className="debris-particle" 
                  style={{
                    '--size': debris.size,
                    '--angle': debris.angle,
                    '--distance': debris.distance,
                    '--delay': debris.delay,
                    '--duration': debris.duration
                  }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Skills Display */}
        {(animationPhase === 'skills-explode' || showFinalCircle) && explodedSkills.map((skill, index) => {
          const position = getSkillPosition(index, explodedSkills.length);
          return (
            <div 
              key={skill.id}
              className={`exploding-skill ${showFinalCircle ? 'circle-formation floating' : ''} ${hoveredSkill === skill.name ? 'hovered' : ''}`}
              style={{
                '--angle': position.angle,
                '--distance': showFinalCircle ? position.distance : `${Math.random() * 300 + 150}px`,
                '--delay': `${index * 0.02}s`,
                '--color': skill.color,
                '--final-angle': position.angle,
                '--hover-scale': hoveredSkill === skill.name ? 1.8 : 1,
                '--z-index': hoveredSkill === skill.name ? 100 : 1,
                '--glow-color': skill.glow,
                '--skill-color': skill.color.split(',')[0].replace('linear-gradient(135deg, ', ''),
                '--skill-glow': skill.glow
              }}
              onMouseEnter={() => handleSkillHover(skill.name)}
              onMouseLeave={handleSkillLeave}
              onFocus={() => handleSkillHover(skill.name)}
              onBlur={handleSkillLeave}
              tabIndex="0"
              aria-label={`${skill.name}`}
            >
              <div className="skill-orb pulsing" style={{ background: skill.color }}>
                {skill.icon}
                <div className="hover-particles">
                  {hoverParticles.map(particle => (
                    <div 
                      key={`${skill.id}-${particle.id}`}
                      className="hover-particle"
                      style={{
                        '--particle-x': particle.x,
                        '--particle-y': particle.y,
                        'left': particle.left,
                        'top': particle.top,
                        'animation-delay': particle.delay,
                        'color': particle.color
                      }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div className="light-rays">
                  {lightRays.map(ray => (
                    <div 
                      key={`${skill.id}-${ray.id}`}
                      className="light-ray"
                      style={{
                        'transform': `rotate(${ray.angle}deg) translateY(-20px)`,
                        'animation-delay': ray.delay
                      }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
              </div>
              <div className="skill-halo pulsing" aria-hidden="true" />
              <div className="skill-sparkles">
                {skillSparkles.map(sparkle => (
                  <div 
                    key={`${skill.id}-${sparkle.id}`}
                    className="sparkle" 
                    style={{
                      '--size': sparkle.size,
                      '--delay': sparkle.delay,
                      '--duration': sparkle.duration,
                      '--distance': sparkle.distance,
                      '--angle': sparkle.angle
                    }}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Final Circle */}
      {showFinalCircle && (
        <div className="final-circle" aria-hidden="true" />
      )}

      {/* Constellation Lines */}
      {showFinalCircle && (
        <div className="constellation-lines">
          {explodedSkills.map((_, i) => {
            const nextIndex = (i + Math.floor(Math.random() * 3) + 1) % explodedSkills.length;
            return (
              <div 
                key={`line-${i}`}
                className="constellation-line pulsing"
                style={{
                  '--angle1': `${(i * 360 / explodedSkills.length)}deg`,
                  '--angle2': `${(nextIndex * 360 / explodedSkills.length)}deg`,
                  '--delay': `${i * 0.1}s`,
                  '--duration': `${Math.random() * 3 + 2}s`
                }}
                aria-hidden="true"
              />
            );
          })}
        </div>
      )}

      {/* Controls */}
      {/* <div className="cosmic-controls">
        <button 
          className="reset-button"
          onClick={() => window.location.reload()}
          aria-label="Reset animation"
        >
          Reset Animation
        </button>
      </div> */}
    </div>
  );
};

export default Treasure;