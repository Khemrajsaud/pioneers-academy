import React from 'react';

/**
 * Animated Background Component
 * Creates a beautiful, playful background with floating elements
 */

export const AnimatedBackground = ({ variant = 'dots', className = '' }) => {
  if (variant === 'dots') {
    return (
      <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
        <div className="absolute inset-0 bg-[color:var(--bg)]">
          <div className="absolute top-10 left-10 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </div>
    );
  }

  if (variant === 'bubbles') {
    return (
      <div className={`fixed inset-0 pointer-events-none overflow-hidden z-0 ${className}`}>
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 animate-float"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${['#FF6B9D', '#4ECDC4', '#FFC93C', '#A8E6CF'][Math.floor(Math.random() * 4)]}, transparent)`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 5 + 5}s`
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'waves') {
    return (
      <div className={`fixed bottom-0 left-0 right-0 pointer-events-none z-0 ${className}`}>
        <svg className="w-full h-64 opacity-10" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="url(#gradient1)" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="animate-float"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#FF6B9D', stopOpacity: 1}} />
              <stop offset="50%" style={{stopColor: '#4ECDC4', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#FFC93C', stopOpacity: 1}} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  return null;
};

/**
 * Floating Shapes Component
 * Adds playful floating elements to any section
 */
export const FloatingShapes = ({ shapes = ['⭐', '🎨', '📚', '🚀'], className = '' }) => {
  return (
    <>
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={`floating-shape animate-float ${className}`}
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${5 + Math.random() * 90}%`,
            width: '50px',
            height: '50px',
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        >
          <div className="text-4xl">{shape}</div>
        </div>
      ))}
    </>
  );
};

/**
 * Particles Effect
 * Creates a subtle particle effect in the background
 */
export const ParticlesEffect = ({ count = 30 }) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-float opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );
};

/**
 * Confetti Effect
 * Celebration confetti for special occasions
 */
export const ConfettiEffect = ({ active = false, duration = 3000 }) => {
  const [show, setShow] = React.useState(active);

  React.useEffect(() => {
    if (active) {
      setShow(true);
      const timer = setTimeout(() => setShow(false), duration);
      return () => clearTimeout(timer);
    }
  }, [active, duration]);

  if (!show) return null;

  const confettiColors = ['#FF6B9D', '#4ECDC4', '#FFC93C', '#A8E6CF', '#FFD93D', '#FF8FB5'];
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-slideUp"
          style={{
            left: `${Math.random() * 100}%`,
            top: '100%',
            width: '10px',
            height: '10px',
            backgroundColor: confettiColors[Math.floor(Math.random() * confettiColors.length)],
            transform: `rotate(${Math.random() * 360}deg)`,
            animationDelay: `${Math.random() * 0.5}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};

/**
 * Gradient Overlay
 * Adds a beautiful gradient overlay to sections
 */
export const GradientOverlay = ({ position = 'top', opacity = 0.1, className = '' }) => {
  const positions = {
    top: 'bg-gradient-to-b from-pink-500/10 via-purple-500/5 to-transparent',
    bottom: 'bg-gradient-to-t from-pink-500/10 via-purple-500/5 to-transparent',
    left: 'bg-gradient-to-r from-pink-500/10 via-purple-500/5 to-transparent',
    right: 'bg-gradient-to-l from-pink-500/10 via-purple-500/5 to-transparent',
    radial: 'bg-radial-gradient from-pink-500/20 via-purple-500/10 to-transparent'
  };

  return (
    <div 
      className={`pointer-events-none absolute inset-0 ${positions[position]} ${className}`}
      style={{ opacity }}
    />
  );
};

export default AnimatedBackground;
