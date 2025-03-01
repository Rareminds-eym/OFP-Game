// import React, { useState } from "react";
// import { useAuth } from "../../context/AuthContext";
// import { FormData } from "../../types/auth";
// import CircuitLines from "../ui/animations/CircuitLines";
// import AuthForm from "./AuthForm";
// import AuthHeader from "./AuthHeader";
// import AuthToggle from "./AuthToggle";

// const Auth: React.FC = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState<FormData>({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const { login } = useAuth();
//   const { signup } = useAuth();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     isLogin
//       ? login(
//           formData.email,
//           formData.password
//         )
//       : signup(formData.email, formData.password, formData.username);
//   };

//   return (
//     <div
//       className="flex-1 bg-gradient-to-b from-slate-950 to-slate-900 
//       flex items-center justify-center p-4 relative overflow-hidden"
//     >
//       <CircuitLines />
//       <div
//         className="bg-white/10 rounded-lg shadow-2xl p-8 
//         w-full max-w-md relative z-10"
//       >
//         <AuthHeader isLogin={isLogin} />
//         <AuthForm
//           isLogin={isLogin}
//           formData={formData}
//           setFormData={setFormData}
//           onSubmit={handleSubmit}
//         />
//         <div className="mt-6 text-center">
//           <AuthToggle isLogin={isLogin} onToggle={() => setIsLogin(!isLogin)} />
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { FormData } from "../../types/auth";
import CircuitLines from "../ui/animations/CircuitLines";
import PlantGrowth from "../ui/animations/PlantGrowth";
import AuthForm from "./AuthForm";
import AuthHeader from "./AuthHeader";
import AuthToggle from "./AuthToggle";

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });
  const { login, signup } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    isLogin
      ? login(formData.email, formData.password)
      : signup(formData.email, formData.password, formData.username);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  // Floating leaf animation
  const floatingLeafVariants = {
    initial: { y: 0, x: 0, rotate: 0 },
    animate: {
      y: [0, -15, 0, -10, 0],
      x: [0, 10, 5, -5, 0],
      rotate: [0, 10, 5, -5, 0],
      transition: {
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <div className="flex-1 bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}

        {/* Plant Growth Animation */}
      <PlantGrowth />
      
      <div className="absolute inset-0 overflow-hidden">
        {/* Neon glow effects */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-70"
          animate={{ 
            opacity: [0.4, 0.7, 0.4],
            boxShadow: [
              "0 0 10px 2px rgba(52, 211, 153, 0.3)", 
              "0 0 20px 4px rgba(52, 211, 153, 0.5)", 
              "0 0 10px 2px rgba(52, 211, 153, 0.3)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-70"
          animate={{ 
            opacity: [0.4, 0.7, 0.4],
            boxShadow: [
              "0 0 10px 2px rgba(52, 211, 153, 0.3)", 
              "0 0 20px 4px rgba(52, 211, 153, 0.5)", 
              "0 0 10px 2px rgba(52, 211, 153, 0.3)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div 
          className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-green-400 to-transparent opacity-70"
          animate={{ 
            opacity: [0.4, 0.7, 0.4],
            boxShadow: [
              "0 0 10px 2px rgba(52, 211, 153, 0.3)", 
              "0 0 20px 4px rgba(52, 211, 153, 0.5)", 
              "0 0 10px 2px rgba(52, 211, 153, 0.3)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-transparent via-green-400 to-transparent opacity-70"
          animate={{ 
            opacity: [0.4, 0.7, 0.4],
            boxShadow: [
              "0 0 10px 2px rgba(52, 211, 153, 0.3)", 
              "0 0 20px 4px rgba(52, 211, 153, 0.5)", 
              "0 0 10px 2px rgba(52, 211, 153, 0.3)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        />
        
        {/* Floating leaves */}
        <motion.div 
          className="absolute top-1/4 left-1/4 text-green-400 opacity-20"
          variants={floatingLeafVariants}
          initial="initial"
          animate="animate"
        >
          <Leaf className="w-16 h-16" />
        </motion.div>
        <motion.div 
          className="absolute bottom-1/4 right-1/4 text-green-400 opacity-20"
          variants={floatingLeafVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 2 }}
        >
          <Leaf className="w-12 h-12" />
        </motion.div>
        <motion.div 
          className="absolute top-2/3 left-1/3 text-green-400 opacity-20"
          variants={floatingLeafVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
        >
          <Leaf className="w-10 h-10" />
        </motion.div>
      </div>

    

      {/* Keep your CircuitLines component if you want to combine both effects */}
      <CircuitLines />

      <motion.div 
        className="w-full max-w-md relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="backdrop-blur-xl bg-black/30 rounded-2xl p-8 border border-green-500/20 relative"
          variants={itemVariants}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 15,
            delay: 0.2
          }}
        >
          {/* Neon glow around the card */}
          <motion.div 
            className="absolute inset-0 rounded-2xl z-[-1]"
            animate={{ 
              boxShadow: [
                "0 0 10px 1px rgba(52, 211, 153, 0.2)", 
                "0 0 15px 2px rgba(52, 211, 153, 0.3)", 
                "0 0 10px 1px rgba(52, 211, 153, 0.2)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Use your existing components */}
          <motion.div variants={itemVariants}>
            <AuthHeader isLogin={isLogin} />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <AuthForm
              isLogin={isLogin}
              formData={formData}
              setFormData={setFormData}
              onSubmit={handleSubmit}
            />
          </motion.div>
          
          <motion.div 
            className="mt-6 text-center"
            variants={itemVariants}
          >
            <AuthToggle isLogin={isLogin} onToggle={() => setIsLogin(!isLogin)} />
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="mt-8 text-center text-sm text-gray-500"
          variants={itemVariants}
        >
          <p>© 2025 Organic Food Production Solutions. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Auth;