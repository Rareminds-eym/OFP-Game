import React from 'react';

const GrowthAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Root particles */}
      {[...Array(3)].map((_, i) => (
        <div 
          key={`root-${i}`}
          className="absolute w-1 h-1 bg-brown-600 rounded-full opacity-70"
          style={{
            left: `${45 + (i - 1) * 5}%`,
            top: `${80 + i * 5}%`,
            animation: `rootGrow${i + 1} ${3 + i * 0.5}s infinite ease-in-out`
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes rootGrow1 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(5px) scale(1.2); }
        }
        @keyframes rootGrow2 {
          0%, 100% { transform: translateY(0) scale(0.8); }
          50% { transform: translateY(8px) scale(1.1); }
        }
        @keyframes rootGrow3 {
          0%, 100% { transform: translateY(0) scale(1.1); }
          50% { transform: translateY(6px) scale(1.3); }
        }
      `}</style>
    </div>
  );
};

export default GrowthAnimation;