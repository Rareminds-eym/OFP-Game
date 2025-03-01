// import React from 'react';
// import { ANIMATION_DELAYS } from '../../../utils/animation';

// interface CircuitLinesProps {
//   count?: number;
//   className?: string;
// }

// const CircuitLines: React.FC<CircuitLinesProps> = ({ 
//   count = 5,
//   className = ''
// }) => {
//   return (
//     <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
//       {[...Array(count)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent
//             animate-circuit-line"
//           style={{
//             top: `${20 + i * 15}%`,
//             left: '0',
//             width: '100%',
//             animationDelay: `${i * ANIMATION_DELAYS.CIRCUIT_LINE}s`,
//             transform: `rotate(${i % 2 ? 2 : -2}deg)`
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default CircuitLines;

import React from "react";
import { motion } from "framer-motion";

const CircuitLines: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-20">
      {/* This is a placeholder for your existing CircuitLines component */}
      {/* You can keep your original implementation here */}
      {/* I'm adding some basic circuit-like lines as an example */}
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <motion.path
          d="M0,100 Q50,50 100,100 T200,100 T300,100 T400,100"
          stroke="rgba(52, 211, 153, 0.5)"
          strokeWidth="1"
          fill="transparent"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 0.5,
            strokeDasharray: ["0, 1", "1, 0"]
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        />
        <motion.path
          d="M0,200 Q50,150 100,200 T200,200 T300,200 T400,200"
          stroke="rgba(52, 211, 153, 0.5)"
          strokeWidth="1"
          fill="transparent"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 0.5,
            strokeDasharray: ["0, 1", "1, 0"]
          }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "loop" }}
        />
        <motion.path
          d="M100,0 Q150,50 100,100 T100,200 T100,300 T100,400"
          stroke="rgba(52, 211, 153, 0.5)"
          strokeWidth="1"
          fill="transparent"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 0.5,
            strokeDasharray: ["0, 1", "1, 0"]
          }}
          transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "loop" }}
        />
      </svg>
    </div>
  );
};

export default CircuitLines;