import React from 'react';
import { motion } from 'framer-motion';

const BannerContact = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-10 bg-[#050508] z-10 overflow-hidden flex flex-col items-center justify-center">
      
      {/* Abstract Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center space-y-12"
      >
        
        {/* Banner Image */}
        <div className="w-full rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] bg-white/[0.02] backdrop-blur-sm group relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
          <img 
            src="/banner.png" 
            alt="M. Zain - Front-End Developer Banner" 
            className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />
        </div>

        {/* Contact Call to Action */}
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tighter">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">collaborate?</span>
          </h2>
          <a 
            href="/contact" 
            className="relative overflow-hidden group bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-medium transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)]"
          >
            <span className="relative z-10 tracking-wide font-semibold">Get in Touch</span>
            <div className="absolute inset-0 bg-blue-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
          </a>
        </div>

      </motion.div>
    </section>
  );
};

export default BannerContact;
