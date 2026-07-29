import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
      >
        
        {/* Left Column - Information */}
        <div className="flex flex-col space-y-12">
          <div>
            <p className="text-blue-500 font-medium tracking-widest uppercase text-sm mb-4">Get In Touch</p>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tighter mb-6 leading-[1.1]">
              Let's create <br/>
              something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">extraordinary.</span>
            </h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
              Whether you have a project in mind, need a consultation, or just want to say hello, I'm always open to discussing new opportunities.
            </p>
          </div>
          
          <div className="flex flex-col space-y-6">
            <a href="mailto:zainjutt0167@gmail.com" className="group flex items-center space-x-6">
              <div className="w-14 h-14 rounded-full bg-[#050508] border border-white/10 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-widest mb-1">Email</p>
                <p className="text-white font-medium text-lg group-hover:text-blue-400 transition-colors">zainjutt0167@gmail.com</p>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-widest mb-1">linkedin</p>
                <p className="text-white font-medium text-lg group-hover:text-blue-400 transition-colors">https://www.linkedin.com/in/zain-jutt-094618241/</p>
              </div>
            </a>
            
            <a href="#" className="group flex items-center space-x-6">
              <div className="w-14 h-14 rounded-full bg-[#050508] border border-white/10 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-widest mb-1">Location</p>
                <p className="text-white font-medium text-lg group-hover:text-blue-400 transition-colors">Remote / Worldwide</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm relative overflow-hidden">
          {/* Subtle Background Glow inside form */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none -z-10"></div>
          
          <form 
            className="flex flex-col space-y-6" 
            action="https://formspree.io/f/YOUR_FORMSPREE_ID" 
            method="POST"
          >
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-400 tracking-wider">Your Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                required
                placeholder="John Doe"
                className="bg-[#050508]/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-gray-700"
              />
            </div>
            
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-400 tracking-wider">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required
                placeholder="john@example.com"
                className="bg-[#050508]/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-gray-700"
              />
            </div>
            
            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-400 tracking-wider">Project Details</label>
              <textarea 
                id="message"
                name="message" 
                rows="4"
                required
                placeholder="Tell me about your project, timeline, and goals..."
                className="bg-[#050508]/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-gray-700 resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="group relative overflow-hidden bg-white text-black font-semibold rounded-xl px-8 py-4 w-full mt-4"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-blue-100 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-out z-0"></div>
            </button>
          </form>
        </div>

      </motion.div>
    </div>
  );
};

export default ContactPage;
