import React, { useMemo } from 'react';

const StarBackground: React.FC = () => {
  const stars = useMemo(() => {
    const starCount = 300;
    const galaxyCount = 3; // Number of "swarms" or clusters
    const result = [];

    // Background stars (distributed)
    for (let i = 0; i < starCount; i++) {
      const size = Math.random() < 0.1 ? (Math.random() * 2 + 1) : (Math.random() * 1.5);
      result.push({
        id: `star-${i}`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${size}px`,
        opacity: Math.random() * 0.7 + 0.3,
        duration: `${Math.random() * 3 + 2}s`,
        delay: `${Math.random() * 5}s`,
      });
    }

    // Galaxy clusters
    for (let g = 0; g < galaxyCount; g++) {
      const clusterX = Math.random() * 100;
      const clusterY = Math.random() * 100;
      const clusterStarCount = 50;

      for (let i = 0; i < clusterStarCount; i++) {
        // Use Gaussian-like distribution for clusters
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * 15; // Radius of the cluster
        const top = clusterY + Math.sin(angle) * dist * (Math.random() * 0.8 + 0.2);
        const left = clusterX + Math.cos(angle) * dist * (Math.random() * 0.8 + 0.2);

        result.push({
          id: `cluster-${g}-${i}`,
          top: `${top}%`,
          left: `${left}%`,
          size: `${Math.random() * 1.2}px`,
          opacity: Math.random() * 0.5 + 0.2,
          duration: `${Math.random() * 2 + 1}s`,
          delay: `${Math.random() * 2}s`,
        });
      }
    }

    return result;
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
      {/* Galaxy Nebulas (Gradient blurs) */}
      <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] bg-blue-900/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[150px]"></div>
      <div className="absolute top-[50%] left-[60%] w-[30vw] h-[30vw] bg-indigo-900/5 rounded-full blur-[100px]"></div>

      {/* The Stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
              animation: `twinkle ${star.duration} ease-in-out infinite`,
              animationDelay: star.delay,
              boxShadow: parseFloat(star.size) > 1.5 ? '0 0 4px 1px rgba(255, 255, 255, 0.4)' : 'none'
            }}
          />
        ))}
      </div>

      {/* Shooting Stars */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="shooting-star"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .shooting-star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: linear-gradient(90deg, white, transparent);
          border-radius: 50%;
          opacity: 0;
          animation: shooting 5s linear infinite;
        }
        @keyframes shooting {
          0% { transform: translateX(0) translateY(0) rotate(-45deg) scale(1); opacity: 0; }
          10% { opacity: 1; }
          20% { transform: translateX(-500px) translateY(500px) rotate(-45deg) scale(1); opacity: 0; }
          100% { transform: translateX(-500px) translateY(500px) rotate(-45deg) scale(1); opacity: 0; }
        }
      `}</style>
      
      {/* Deep Space Dust texture overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
    </div>
  );
};

export default StarBackground;
