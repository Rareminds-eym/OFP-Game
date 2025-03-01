// import React from 'react';
// import AnimatedLogo from '../ui/AnimatedLogo';

// interface AuthHeaderProps {
//   isLogin: boolean;
// }

// const AuthHeader: React.FC<AuthHeaderProps> = ({ isLogin }) => (
//   <>
//     <div className="flex justify-center mb-8">
//       <AnimatedLogo className="w-24 h-24" />
//     </div>
//     <h2 className="text-3xl font-bold text-center mb-8 
//       bg-gradient-to-r from-blue-400 via-emerald-300 to-blue-400 
//       bg-clip-text text-transparent animate-pulse">
//       {isLogin ? 'Welcome Back' : 'Create Account'}
//     </h2>
//   </>
// );

// export default AuthHeader;
import React from "react";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

interface AuthHeaderProps {
  isLogin: boolean;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ isLogin }) => {
  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  return (
    <div className="text-center mb-8">
      <motion.div 
        className="inline-flex items-center justify-center mb-6"
        variants={logoVariants}
      >
        <motion.div 
          className="w-24 h-24 rounded-full flex items-center justify-center relative"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div 
            className="absolute inset-0 rounded-full"
            animate={{ 
              boxShadow: [
                "0 0 15px 5px rgba(52, 211, 153, 0.3)", 
                "0 0 25px 8px rgba(52, 211, 153, 0.5)", 
                "0 0 15px 5px rgba(52, 211, 153, 0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <Leaf className="w-12 h-12 text-green-400" />
        </motion.div>
      </motion.div>
      <h1 className="text-3xl font-bold text-white mb-2">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500">
          Organic Food Production
        </span>
      </h1>
      <p className="text-gray-300">
        {isLogin 
          ? "Sign in to access sustainable food processing" 
          : "Create an account to join our platform"}
      </p>
    </div>
  );
};

export default AuthHeader;