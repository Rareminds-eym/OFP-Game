import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const PlantGrowth: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    const startAnimation = async () => {
      // Start the animation sequence
      await controls.start("roots");
      await controls.start("stem");
      await controls.start("branches");
      await controls.start("leaves");
      await controls.start("glow");
      
      // Reset and loop the animation after a delay
      setTimeout(() => {
        controls.set("hidden");
        startAnimation();
      }, 3000);
    };

    startAnimation();
  }, [controls]);

  // SVG variants for each growth stage
  const svgVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  // Root variants
  const rootVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    roots: {
      pathLength: 1,
      opacity: 1,
      transition: { 
        pathLength: { duration: 1.5, ease: "easeInOut" },
        opacity: { duration: 0.3 }
      }
    }
  };

  // Stem variants
  const stemVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    stem: {
      pathLength: 1,
      opacity: 1,
      transition: { 
        pathLength: { duration: 1.5, ease: "easeInOut" },
        opacity: { duration: 0.3 }
      }
    }
  };

  // Branch variants
  const branchVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    branches: {
      pathLength: 1,
      opacity: 1,
      transition: { 
        pathLength: { duration: 1.2, ease: "easeInOut" },
        opacity: { duration: 0.3 }
      }
    }
  };

  // Leaf variants
  const leafVariants = {
    hidden: { scale: 0, opacity: 0 },
    leaves: {
      scale: 1,
      opacity: 1,
      transition: { 
        scale: { duration: 0.8, ease: "easeOut" },
        opacity: { duration: 0.5 }
      }
    }
  };

  // Glow variants
  const glowVariants = {
    hidden: { opacity: 0 },
    glow: {
      opacity: [0, 0.7, 0.5],
      transition: { 
        opacity: { duration: 1.5, times: [0, 0.7, 1] },
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      <motion.svg
        width="300"
        height="400"
        viewBox="0 0 300 400"
        initial="hidden"
        animate="visible"
        variants={svgVariants}
        className="opacity-20"
      >
        {/* Glow effect */}
        <motion.ellipse
          cx="150"
          cy="200"
          rx="120"
          ry="180"
          fill="rgba(52, 211, 153, 0.2)"
          initial="hidden"
          animate={controls}
          variants={glowVariants}
        />

        {/* Roots */}
        <motion.path
          d="M150,350 C130,380 100,390 80,395 M150,350 C170,380 200,390 220,395 M150,350 C140,380 120,385 110,390 M150,350 C160,380 180,385 190,390"
          stroke="rgba(52, 211, 153, 0.8)"
          strokeWidth="2"
          fill="transparent"
          initial="hidden"
          animate={controls}
          variants={rootVariants}
        />

        {/* Main stem */}
        <motion.path
          d="M150,350 L150,150"
          stroke="rgba(52, 211, 153, 0.8)"
          strokeWidth="3"
          fill="transparent"
          initial="hidden"
          animate={controls}
          variants={stemVariants}
        />

        {/* Branches */}
        <motion.path
          d="M150,250 C130,230 100,240 80,230 M150,200 C170,180 200,190 220,180 M150,150 C130,130 110,140 90,130 M150,150 C170,130 190,140 210,130"
          stroke="rgba(52, 211, 153, 0.8)"
          strokeWidth="2"
          fill="transparent"
          initial="hidden"
          animate={controls}
          variants={branchVariants}
        />

        {/* Leaves */}
        <motion.g initial="hidden" animate={controls} variants={leafVariants}>
          {/* Left leaves */}
          <ellipse cx="80" cy="230" rx="15" ry="8" fill="rgba(52, 211, 153, 0.8)" transform="rotate(-30, 80, 230)" />
          <ellipse cx="90" cy="130" rx="15" ry="8" fill="rgba(52, 211, 153, 0.8)" transform="rotate(-30, 90, 130)" />
          <ellipse cx="110" cy="180" rx="12" ry="7" fill="rgba(52, 211, 153, 0.8)" transform="rotate(-30, 110, 180)" />
          
          {/* Right leaves */}
          <ellipse cx="220" cy="180" rx="15" ry="8" fill="rgba(52, 211, 153, 0.8)" transform="rotate(30, 220, 180)" />
          <ellipse cx="210" cy="130" rx="15" ry="8" fill="rgba(52, 211, 153, 0.8)" transform="rotate(30, 210, 130)" />
          <ellipse cx="190" cy="230" rx="12" ry="7" fill="rgba(52, 211, 153, 0.8)" transform="rotate(30, 190, 230)" />
          
          {/* Top leaves */}
          <ellipse cx="150" cy="120" rx="10" ry="15" fill="rgba(52, 211, 153, 0.8)" />
          <ellipse cx="135" cy="110" rx="8" ry="12" fill="rgba(52, 211, 153, 0.8)" transform="rotate(-20, 135, 110)" />
          <ellipse cx="165" cy="110" rx="8" ry="12" fill="rgba(52, 211, 153, 0.8)" transform="rotate(20, 165, 110)" />
        </motion.g>
      </motion.svg>
    </div>
  );
};

export default PlantGrowth;