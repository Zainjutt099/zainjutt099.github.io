'use client'; // Required if using Next.js App Router with Framer Motion

import React from 'react';
import { motion } from 'framer-motion';
import ScrollRevealText from './ScrollRevealText';

const About = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center py-32 px-6 md:px-10 z-10 bg-transparent overflow-hidden">
      
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[#050508]/80 backdrop-blur-3xl border-t border-white/5" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative">
        
        {/* Background dot grid top left */}
        <div className="absolute -top-10 -left-10 w-40 h-40 grid grid-cols-5 gap-3 opacity-[0.03] pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
          ))}
        </div>

        {/* Left Content */}
        <div className="flex flex-col space-y-6 z-20">
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#3b82f6] tracking-[0.2em] font-semibold uppercase text-sm"
          >
            DIGITAL IDENTITY 01
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-[4.5rem] font-bold tracking-tighter text-white leading-[1.1]"
          >
            Architecting <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Digital</span><br/>
            Experiences.
          </motion.h2>
          
          <ScrollRevealText 
            text="M. Zain is a multi-disciplinary creator operating at the intersection of high-performance development and cinematic visual storytelling."
            className="text-gray-400 max-w-lg text-lg md:text-xl leading-relaxed pt-4 font-light"
          />
        </div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center items-center h-full"
        >
          {/* Subtle Back Glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full border-[1px] border-blue-500/5 bg-blue-600/5 shadow-[0_0_120px_rgba(37,99,235,0.1)] pointer-events-none z-0"></div>
          
          <div className="relative z-10 w-full h-[600px] flex items-center justify-center pointer-events-none group">
             {/* Back Portrait Image */}
             <div className="w-[360px] h-[580px] bg-gradient-to-b from-[#050508] to-transparent rounded-t-full border border-white/5 flex items-end justify-center backdrop-blur-md shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
              <img 
                src="/2.png" 
                alt="Portrait of M. Zain from back" 
                className="w-full h-full object-cover object-center relative z-0 transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="absolute bottom-5 right-5 w-32 h-32 grid grid-cols-4 gap-3 opacity-[0.03] pointer-events-none">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
