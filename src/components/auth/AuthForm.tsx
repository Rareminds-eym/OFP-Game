// import React from "react";
// import { FormData } from "../../types/auth";
// import InputField from "../ui/InputField";
// import AuthButton from "./AuthButton";

// interface AuthFormProps {
//   isLogin: boolean;
//   formData: FormData;
//   setFormData: (data: FormData) => void;
//   onSubmit: (e: React.FormEvent) => void;
// }

// const AuthForm: React.FC<AuthFormProps> = ({
//   isLogin,
//   formData,
//   setFormData,
//   onSubmit,
// }) => (
//   <form onSubmit={onSubmit} className="space-y-6">
//     {!isLogin && (
//       <InputField
//         label="Username"
//         type="text"
//         placeholder="Enter your username"
//         value={formData.username}
//         onChange={(e) => setFormData({ ...formData, username: e.target.value })}
//       />
//     )}
//     { (
//       <InputField
//         label="Email"
//         type="email"
//         placeholder="Enter your email"
//         value={formData.email}
//         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//       />
//     )}

//     <InputField
//       label="Password"
//       type="password"
//       placeholder="Enter your password"
//       value={formData.password}
//       onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//     />

//     <AuthButton type="submit" isLogin={isLogin} />
//   </form>
// );

// export default AuthForm;
import React from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import { FormData } from "../../types/auth";

interface AuthFormProps {
  isLogin: boolean;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onSubmit: (e: React.FormEvent) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  isLogin,
  formData,
  setFormData,
  onSubmit,
}) => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.97 }
  };

  return (
    <form onSubmit={onSubmit}>
      {/* Username Input (only for signup) */}
      {!isLogin && (
        <motion.div 
          className="mb-6"
          variants={itemVariants}
        >
          <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
            Username
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-green-400" />
            </div>
            <motion.input
              type="text"
              id="username"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
              className="block w-full pl-10 pr-3 py-3 bg-black/30 border border-green-500/30 rounded-xl 
                       text-white placeholder-gray-500
                       focus:ring-2 focus:ring-green-500/30 focus:border-green-500/40
                       transition-colors duration-200 ease-in-out"
              placeholder="Your username"
              whileFocus={{ 
                scale: 1.01,
                boxShadow: "0 0 8px 1px rgba(52, 211, 153, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
        </motion.div>
      )}

      {/* Email Input */}
      <motion.div 
        className="mb-6"
        variants={itemVariants}
      >
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email Address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-green-400" />
          </div>
          <motion.input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="block w-full pl-10 pr-3 py-3 bg-black/30 border border-green-500/30 rounded-xl 
                     text-white placeholder-gray-500
                     focus:ring-2 focus:ring-green-500/30 focus:border-green-500/40
                     transition-colors duration-200 ease-in-out"
            placeholder="your@email.com"
            whileFocus={{ 
              scale: 1.01,
              boxShadow: "0 0 8px 1px rgba(52, 211, 153, 0.3)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
      </motion.div>

      {/* Password Input */}
      <motion.div 
        className="mb-6"
        variants={itemVariants}
      >
        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
          Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-green-400" />
          </div>
          <motion.input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            className="block w-full pl-10 pr-3 py-3 bg-black/30 border border-green-500/30 rounded-xl 
                     text-white placeholder-gray-500
                     focus:ring-2 focus:ring-green-500/30 focus:border-green-500/40
                     transition-colors duration-200 ease-in-out"
            placeholder="Enter your password"
            whileFocus={{ 
              scale: 1.01,
              boxShadow: "0 0 8px 1px rgba(52, 211, 153, 0.3)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
      </motion.div>

      {/* Remember Me and Forgot Password */}
      {isLogin && (
        <motion.div 
          className="flex items-center justify-between mb-6"
          variants={itemVariants}
        >
          <div className="flex items-center">
            {/* <motion.input
              type="checkbox"
              id="remember"
              className="h-4 w-4 rounded border-green-500/30 bg-black/30 text-green-500 
                       focus:ring-green-500/30 focus:ring-offset-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            /> */}
            {/* <label htmlFor="remember" className="ml-2 text-sm text-gray-300">
              Remember me
            </label> */}
          </div>
          {/* <motion.a 
            href="#" 
            className="text-sm text-green-400 hover:text-green-300 transition-colors"
            whileHover={{ scale: 1.05, x: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            Forgot password?
          </motion.a> */}
        </motion.div>
      )}

      {/* Submit Button */}
      <motion.button
        type="submit"
        className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-white 
                 py-3 rounded-xl flex items-center justify-center space-x-2
                 shadow-lg shadow-green-900/30 hover:shadow-green-900/40"
        variants={buttonVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
      >
        <span>{isLogin ? "Login" : "Create Account"}</span>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: [0, 5, 0] }}
          transition={{ 
            repeat: Infinity, 
            repeatType: "loop", 
            duration: 1.5,
            repeatDelay: 0.5
          }}
        >
          <ArrowRight className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </form>
  );
};

export default AuthForm;