import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';


export function BackgroundAnimation({ children }) {
  const [activeSection, setActiveSection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const sections = ['beranda', 'tentang', 'portfolio', 'berita'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const index = sections.indexOf(sectionId);
            if (index !== -1 && index !== activeSection) {
              setIsTransitioning(true);
              setActiveSection(index);
              // Reset transitioning state after animation completes
              setTimeout(() => setIsTransitioning(false), 3000);
            }
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [activeSection]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const backgroundVariants = [
    // Hero Section - Dynamic mesh gradient
    {
      gradient: `
        radial-gradient(ellipse 80% 50% at ${20 + mousePosition.x * 20}% ${30 + mousePosition.y * 20}%, 
          rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 40%, transparent 70%),
        radial-gradient(ellipse 60% 80% at ${70 + mousePosition.x * 15}% ${20 + mousePosition.y * 30}%, 
          rgba(147, 197, 253, 0.12) 0%, rgba(147, 197, 253, 0.06) 50%, transparent 80%),
        conic-gradient(from ${mousePosition.x * 360}deg at 50% 50%, 
          rgba(59, 130, 246, 0.04) 0deg, 
          rgba(147, 197, 253, 0.08) 120deg, 
          rgba(59, 130, 246, 0.06) 240deg, 
          rgba(147, 197, 253, 0.04) 360deg),
        linear-gradient(135deg, rgba(59, 130, 246, 0.02) 0%, transparent 50%)
      `,
      shapes: 'hero',
      color: { r: 59, g: 130, b: 246 }
    },
    // About Section - Flowing patterns
    {
      gradient: `
        linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(147, 197, 253, 0.04) 50%, transparent 80%),
        radial-gradient(ellipse at ${30 + mousePosition.x * 40}% ${70 + mousePosition.y * 20}%, 
          rgba(147, 197, 253, 0.10) 0%, rgba(59, 130, 246, 0.05) 60%, transparent 90%),
        linear-gradient(45deg, 
          transparent 20%, 
          rgba(59, 130, 246, 0.03) 50%, 
          rgba(147, 197, 253, 0.05) 70%,
          transparent 90%),
        radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.06) 0%, transparent 60%)
      `,
      shapes: 'flowing',
      color: { r: 59, g: 130, b: 246 }
    },
    // Portfolio Section - Grid dynamics
    {
      gradient: `
        radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
          rgba(59, 130, 246, 0.12) 0%, rgba(147, 197, 253, 0.06) 40%, transparent 70%),
        conic-gradient(from ${mousePosition.x * 180}deg at 80% 20%, 
          rgba(147, 197, 253, 0.09) 0deg, 
          rgba(59, 130, 246, 0.04) 90deg,
          transparent 180deg),
        linear-gradient(225deg, 
          rgba(59, 130, 246, 0.05) 0%, 
          rgba(147, 197, 253, 0.08) 60%,
          transparent 100%),
        radial-gradient(ellipse at 20% 80%, rgba(59, 130, 246, 0.07) 0%, transparent 70%)
      `,
      shapes: 'geometric',
      color: { r: 59, g: 130, b: 246 }
    },
    // News Section - Organic waves
    {
      gradient: `
        radial-gradient(ellipse 120% 80% at ${mousePosition.x * 100}% 0%, 
          rgba(59, 130, 246, 0.08) 0%, rgba(147, 197, 253, 0.04) 50%, transparent 80%),
        radial-gradient(ellipse 80% 120% at 100% ${mousePosition.y * 100}%, 
          rgba(147, 197, 253, 0.06) 0%, rgba(59, 130, 246, 0.03) 60%, transparent 85%),
        linear-gradient(${mousePosition.x * 90}deg, 
          rgba(59, 130, 246, 0.04) 0%, 
          rgba(147, 197, 253, 0.07) 50%,
          rgba(59, 130, 246, 0.02) 100%),
        conic-gradient(from 45deg at 30% 70%, rgba(147, 197, 253, 0.05) 0deg, transparent 120deg)
      `,
      shapes: 'organic',
      color: { r: 59, g: 130, b: 246 }
    }
  ];

  const currentBackground = backgroundVariants[activeSection] || backgroundVariants[0];

  // Smooth transition easing
  const smoothTransition = {
    duration: 4,
    ease: [0.25, 0.46, 0.45, 0.94]
  };

  return (
    <div className="relative min-h-screen">
      {/* Dynamic Mesh Gradient Background with Smooth Transitions */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={`gradient-${activeSection}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={smoothTransition}
            className="absolute inset-0"
            style={{ 
              background: currentBackground.gradient,
              filter: 'blur(0.5px)'
            }}
          />
        </AnimatePresence>

        {/* Additional Smooth Overlay for Better Blending */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
              rgba(${currentBackground.color.r}, ${currentBackground.color.g}, ${currentBackground.color.b}, 0.02) 0%, 
              transparent 60%)`
          }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Enhanced Glassmorphism Shapes with Smooth Transitions */}
        <AnimatePresence mode="sync">
          {currentBackground.shapes === 'hero' && (
            <motion.div
              key="hero-shapes"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            >
              {/* Large floating orbs with improved glassmorphism */}
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.div
                  key={`hero-orb-${i}`}
                  className="absolute rounded-full backdrop-blur-xl border border-white/5"
                  style={{
                    background: `linear-gradient(135deg, 
                      rgba(255,255,255,0.08) 0%, 
                      rgba(59,130,246,0.12) 50%,
                      rgba(147,197,253,0.06) 100%)`,
                    width: 180 + i * 40,
                    height: 180 + i * 40,
                    boxShadow: `0 8px 32px rgba(59, 130, 246, 0.1)`,
                  }}
                  initial={{
                    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                  }}
                  animate={{
                    x: (mousePosition.x * (typeof window !== 'undefined' ? window.innerWidth : 1200)) + (i * 100),
                    y: (mousePosition.y * (typeof window !== 'undefined' ? window.innerHeight : 800)) + (i * 80),
                    rotate: [0, 360],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    x: { duration: 3, ease: "easeOut" },
                    y: { duration: 3, ease: "easeOut" },
                    rotate: { duration: 25 + i * 5, repeat: Infinity, ease: "linear" },
                    scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
              ))}

              {/* Enhanced floating particles */}
              {Array.from({ length: 25 }).map((_, i) => (
                <motion.div
                  key={`hero-particle-${i}`}
                  className="absolute"
                  style={{
                    width: Math.random() * 3 + 2,
                    height: Math.random() * 3 + 2,
                    background: `radial-gradient(circle, 
                      rgba(59,130,246,${Math.random() * 0.6 + 0.4}) 0%, 
                      rgba(147,197,253,${Math.random() * 0.4 + 0.2}) 70%, 
                      transparent 100%)`,
                    borderRadius: Math.random() > 0.6 ? '50%' : '2px',
                    filter: 'blur(0.5px)',
                  }}
                  initial={{
                    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                    opacity: 0,
                  }}
                  animate={{
                    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                    opacity: [0, Math.random() * 0.8 + 0.3, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 8,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Flowing Patterns for About Section */}
        <AnimatePresence mode="sync">
          {currentBackground.shapes === 'flowing' && (
            <motion.div
              key="flowing-shapes"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            >
              <motion.svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1200 800"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="flowingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59,130,246,0.15)" />
                    <stop offset="30%" stopColor="rgba(147,197,253,0.08)" />
                    <stop offset="70%" stopColor="rgba(59,130,246,0.12)" />
                    <stop offset="100%" stopColor="rgba(147,197,253,0.06)" />
                  </linearGradient>
                </defs>
                
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.path
                    key={`flow-path-${i}`}
                    d={`M${i * 150},${80 + i * 40} 
                        Q${250 + i * 80},${150 + i * 60} ${500 + i * 40},${120 + i * 50} 
                        Q${750 + i * 20},${80 + i * 55} ${1000},${150 + i * 30}
                        Q${1100},${200 + i * 20} ${1200},${180 + i * 25}`}
                    stroke="url(#flowingGrad)"
                    strokeWidth={2 + Math.sin(i) * 1}
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: [0, 1, 0],
                      opacity: [0, 0.8, 0]
                    }}
                    transition={{
                      duration: 12 + i * 2,
                      repeat: Infinity,
                      delay: i * 1.5,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.svg>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Geometric Shapes for Portfolio */}
        <AnimatePresence mode="sync">
          {currentBackground.shapes === 'geometric' && (
            <motion.div
              key="geometric-shapes"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            >
              {Array.from({ length: 15 }).map((_, i) => (
                <motion.div
                  key={`geo-shape-${i}`}
                  className="absolute border border-primary/15"
                  style={{
                    width: 50 + (i % 5) * 15,
                    height: 50 + (i % 5) * 15,
                    background: `linear-gradient(${i * 24}deg, 
                      rgba(59,130,246,0.08) 0%, 
                      rgba(147,197,253,0.04) 50%,
                      rgba(59,130,246,0.02) 100%)`,
                    backdropFilter: 'blur(12px)',
                    borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '12px' : '4px',
                    boxShadow: `0 4px 16px rgba(59, 130, 246, 0.1)`,
                  }}
                  initial={{
                    x: (i % 5) * 250,
                    y: Math.floor(i / 5) * 180,
                    rotate: 0,
                    scale: 0,
                  }}
                  animate={{
                    x: (i % 5) * 250 + mousePosition.x * 40,
                    y: Math.floor(i / 5) * 180 + mousePosition.y * 25,
                    rotate: [0, i % 2 === 0 ? 360 : -360],
                    scale: [0, 1, 0.9, 1],
                  }}
                  transition={{
                    x: { duration: 2.5, ease: "easeOut" },
                    y: { duration: 2.5, ease: "easeOut" },
                    rotate: { duration: 20 + (i % 4) * 5, repeat: Infinity, ease: "linear" },
                    scale: { duration: 18 + (i % 3) * 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Organic Waves for News Section */}
        <AnimatePresence mode="sync">
          {currentBackground.shapes === 'organic' && (
            <motion.div
              key="organic-shapes"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            >
              <motion.svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1200 800"
                preserveAspectRatio="none"
              >
                <defs>
                  <radialGradient id="organicGrad" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="rgba(59,130,246,0.12)" />
                    <stop offset="40%" stopColor="rgba(147,197,253,0.08)" />
                    <stop offset="80%" stopColor="rgba(59,130,246,0.04)" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>
                
                {Array.from({ length: 10 }).map((_, i) => (
                  <motion.ellipse
                    key={`organic-${i}`}
                    cx={120 + i * 110}
                    cy={150 + (i % 4) * 150}
                    rx={70 + i * 8}
                    ry={50 + i * 6}
                    fill="url(#organicGrad)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1.3, 1],
                      opacity: [0, 0.7, 0.4, 0.7],
                      cx: 120 + i * 110 + mousePosition.x * 80,
                      cy: 150 + (i % 4) * 150 + mousePosition.y * 40,
                    }}
                    transition={{
                      duration: 15 + i * 2,
                      repeat: Infinity,
                      delay: i * 1,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.svg>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Universal Enhanced Floating Orbs with Smooth Parallax */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={`universal-orb-${activeSection}-${i}`}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 120 + 60,
                height: Math.random() * 120 + 60,
                background: `conic-gradient(from ${i * 30}deg, 
                  rgba(59,130,246,${Math.random() * 0.08 + 0.02}) 0deg, 
                  rgba(147,197,253,${Math.random() * 0.06 + 0.01}) 120deg, 
                  rgba(59,130,246,${Math.random() * 0.04 + 0.01}) 240deg, 
                  transparent 360deg)`,
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.08)',
                filter: 'blur(1px)',
              }}
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              }}
              animate={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200) + mousePosition.x * 60,
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800) + mousePosition.y * 30,
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.4, 0.1],
                rotate: [0, 180, 360],
              }}
              transition={{
                x: { duration: 4, ease: "easeOut" },
                y: { duration: 4, ease: "easeOut" },
                scale: { duration: Math.random() * 15 + 10, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: Math.random() * 12 + 8, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: Math.random() * 25 + 20, repeat: Infinity, ease: "linear" }
              }}
            />
          ))}
        </div>

        {/* Enhanced Particle System with Smoother Motion */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div
              key={`smooth-particle-${activeSection}-${i}`}
              className="absolute"
              style={{
                width: Math.random() * 2 + 1,
                height: Math.random() * 2 + 1,
                background: `radial-gradient(circle, 
                  rgba(59,130,246,${Math.random() * 0.7 + 0.3}) 0%, 
                  rgba(147,197,253,${Math.random() * 0.4 + 0.1}) 60%,
                  transparent 100%)`,
                borderRadius: '50%',
                filter: 'blur(0.3px)',
              }}
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 20,
                opacity: 0,
              }}
              animate={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200) + 
                   (mousePosition.x - 0.5) * 150,
                y: -30,
                opacity: [0, Math.random() * 0.8 + 0.3, Math.random() * 0.5 + 0.2, 0],
              }}
              transition={{
                duration: Math.random() * 15 + 12,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}