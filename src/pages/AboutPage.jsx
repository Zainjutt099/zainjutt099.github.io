import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const skills = [
    { name: 'React / Next.js', level: 95 },
    { name: 'Framer Motion & GSAP', level: 90 },
    { name: 'Three.js / WebGL', level: 85 },
    { name: 'TailwindCSS / Styling', level: 98 },
    { name: 'Node.js & Backend', level: 80 }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 md:grid-cols-2 gap-16"
      >
        
        {/* Left Column - Biography */}
        <div className="flex flex-col space-y-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white tracking-tighter mb-4">
              Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Code</span>
            </h1>
            <p className="text-blue-500 font-medium tracking-widest uppercase text-sm">Biography & Journey</p>
          </div>
          
          <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
            <p>
              Hi, I'm M. Zain. I'm a passionate creative developer specializing in building immersive digital experiences that blur the line between design and engineering.
            </p>
            <p>
              With a background in both visual design and full-stack development, I approach every project not just as code, but as a narrative. My goal is to build interfaces that feel alive, using smooth animations, physics-based interactions, and high-performance rendering.
            </p>
            <p>
              Whether it's a sleek SaaS product, a cinematic portfolio, or an experimental WebGL journey, I strive for absolute pixel perfection.
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <a href="/portfolio" className="border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 px-8 py-3 rounded-full text-white transition-all">
              View My Work
            </a>
            <a href="/contact" className="px-8 py-3 rounded-full text-gray-300 hover:text-white transition-all">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Column - Skills & Image */}
        <div className="flex flex-col space-y-12">
          
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/5 group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent z-10"></div>
            <img 
              src="/2.png" 
              alt="M. Zain working" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
            />
          </div>

          <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">Technical Arsenal</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-400 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>

      </motion.div>
    </div>
  );
};

export default AboutPage;
