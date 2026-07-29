import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate asset loading
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadingComplete(), 500); // Wait a half second at 100%
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="preloader"
        initial={{ y: 0 }}
        exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        className="fixed inset-0 z-[100] bg-[#050508] flex flex-col items-center justify-center pointer-events-none"
      >
        <div className="relative flex flex-col items-center">
          {/* Logo / Initial */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-white font-heading font-bold text-5xl mb-8 tracking-tighter"
          >
            M. ZAIN
          </motion.div>
          
          {/* Progress Bar Container */}
          <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: "easeOut", duration: 0.2 }}
            />
          </div>

          {/* Progress Text */}
          <motion.div 
            className="text-gray-500 text-sm tracking-widest font-mono mt-4"
          >
            {Math.min(progress, 100)}%
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
