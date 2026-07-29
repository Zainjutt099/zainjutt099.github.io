import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Front-End Engineering",
    description: "Building blazing-fast, accessible, and responsive user interfaces with modern frameworks like React, Next.js, and TailwindCSS.",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: "Interactive WebGL",
    description: "Crafting immersive 3D experiences and fluid physics-based animations using Three.js, Canvas, and custom WebGL shaders.",
    icon: (
      <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    )
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive, conversion-optimized interfaces with a strong focus on typography, whitespace, and micro-interactions.",
    icon: (
      <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    title: "Performance Optimization",
    description: "Auditing and optimizing web applications to achieve 100 Lighthouse scores, ensuring flawless performance and SEO.",
    icon: (
      <svg className="w-8 h-8 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center mb-20"
      >
        <p className="text-blue-500 font-medium tracking-widest uppercase text-sm mb-4">What I Do</p>
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tighter mb-6">
          Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Services</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
          I provide end-to-end digital solutions, combining cutting-edge engineering with premium visual aesthetics to elevate your brand.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-[#050508] border border-white/5 rounded-3xl p-10 hover:bg-white/[0.02] transition-colors overflow-hidden"
          >
            {/* Hover Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-8">
              {service.icon}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
            <p className="text-gray-400 leading-relaxed font-light">{service.description}</p>
            
            <div className="mt-8">
              <a href="/contact" className="inline-flex items-center space-x-2 text-sm font-semibold text-blue-400 hover:text-white transition-colors group-hover:translate-x-2 transform duration-300">
                <span>Discuss Project</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
