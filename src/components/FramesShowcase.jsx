import React from 'react';
import { motion, useAnimationControls } from 'framer-motion';

// Generate a sampled array of 20 frames from the 160 total frames to keep performance optimal
const sampledFrames = Array.from({ length: 20 }, (_, i) => {
  const frameNumber = String((i * 8) + 1).padStart(3, '0');
  return `/frames/ezgif-frame-${frameNumber}.png`;
});

// We duplicate the array to create a seamless infinite loop
const marqueeFrames = [...sampledFrames, ...sampledFrames];

const FramesShowcase = () => {
  const controls = useAnimationControls();

  // Start the infinite scroll
  React.useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        ease: "linear",
        duration: 40,
        repeat: Infinity,
      }
    });
  }, [controls]);

  return (
    <section className="relative w-full py-24 overflow-hidden bg-transparent border-t border-white/5">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-600/5 blur-[120px] pointer-events-none rounded-b-full"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tighter mb-4">
          Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Explorations</span>
        </h2>
        <p className="text-gray-400 text-lg font-light max-w-xl">
          A curated sequence of interactive frames demonstrating high-performance WebGL and canvas rendering techniques.
        </p>
      </div>

      {/* Infinite Marquee Container */}
      <div 
        className="flex w-max"
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() => {
          controls.start({
            x: ["0%", "-50%"],
            transition: {
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            }
          });
        }}
      >
        <motion.div 
          animate={controls}
          className="flex space-x-6 px-3"
        >
          {marqueeFrames.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-[280px] h-[380px] rounded-2xl overflow-hidden cursor-pointer group border border-white/10 flex-shrink-0 bg-[#050508]"
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              
              <img 
                src={src} 
                alt={`Interactive Frame ${index}`} 
                loading="lazy"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300 relative z-0"
              />
              
              <div className="absolute bottom-4 left-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                  Frame {(index % 20) + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default FramesShowcase;
