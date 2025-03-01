// import React from 'react';

// interface AuthToggleProps {
//   isLogin: boolean;
//   onToggle: () => void;
// }

// const AuthToggle: React.FC<AuthToggleProps> = ({ isLogin, onToggle }) => (
//   <button
//     onClick={onToggle}
//     className="text-sm text-blue-400 hover:text-emerald-300 
//       transition-colors duration-300"
//   >
//     {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
//   </button>
// );

// export default AuthToggle;

import React from "react";
import { motion } from "framer-motion";

interface AuthToggleProps {
  isLogin: boolean;
  onToggle: () => void;
}

const AuthToggle: React.FC<AuthToggleProps> = ({ isLogin, onToggle }) => {
  return (
    <p className="text-gray-400">
      {isLogin ? "Need facility access? " : "Already have an account? "}
      <motion.a 
        href="#" 
        onClick={(e) => {
          e.preventDefault();
          onToggle();
        }}
        className="text-green-400 hover:text-green-300 font-medium transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isLogin ? "Request credentials" : "Sign in"}
      </motion.a>
    </p>
  );
};

export default AuthToggle;