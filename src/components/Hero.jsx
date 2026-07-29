import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  '/slideshow/1.png',
  '/slideshow/2.png',
  '/slideshow/3.png',
  '/slideshow/4.png',
  '/slideshow/5.png',
  '/slideshow/6.png'
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center px-6 md:px-10 overflow-hidden py-32">
      
      {/* Background abstract elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-1 lg:col-span-7 flex flex-col space-y-6 md:space-y-8 mt-12 md:mt-0 text-center lg:text-left items-center lg:items-start"
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-heading font-bold tracking-tighter text-white leading-[1.1]">
              Architecting<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                Digital
              </span><br className="hidden md:block" />
              Experiences.
            </h1>
          </div>
          
          <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-xl font-light leading-relaxed">
            I craft immersive, high-performance web experiences that blend striking aesthetics with seamless functionality.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 md:gap-6 pt-4">
            <a href="/portfolio" className="relative overflow-hidden group bg-white text-black px-6 md:px-8 py-3 md:py-3.5 rounded-full text-sm md:text-base font-medium transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <span className="relative z-10 font-semibold tracking-wide">Explore Work</span>
              <div className="absolute inset-0 bg-gray-200 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
            </a>
            
            <a href="/contact" className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-colors px-4 py-2 text-sm md:text-base">
              <span className="font-medium tracking-wide">Get in touch</span>
              <svg className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Visual Element / Slideshow */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-1 lg:col-span-5 relative flex justify-center items-center h-[500px] lg:h-[650px]"
        >
          {/* Glassmorphic Portrait Container */}
          <div className="relative w-full max-w-[400px] h-[500px] bg-gradient-to-tr from-[#050508] to-white/[0.05] backdrop-blur-md border border-white/10 rounded-2xl md:rounded-full shadow-2xl overflow-hidden flex items-center justify-center group">
            
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"></div>
            
            <AnimatePresence>
              <motion.img
                key={currentSlide}
                src={slides[currentSlide]}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover object-center z-10"
                alt="Slideshow showcasing M. Zain"
              />
            </AnimatePresence>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
