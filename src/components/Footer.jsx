import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Navigation Links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  // Social Links updated with your GitHub Portfolio and LinkedIn
  const socialLinks = [
    { name: 'Portfolio', url: 'https://zainjutt099.github.io/' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/zain-jutt-094618241/' },
    { name: 'Twitter / X', url: 'https://twitter.com' },
    { name: 'YouTube', url: 'https://youtube.com' }
  ];

  return (
    <footer className="relative w-full bg-[#050508] pt-32 pb-10 px-6 md:px-10 border-t border-white/5 z-50 overflow-hidden">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-t-full"></div>

      <div className="max-w-7xl mx-auto flex flex-col relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          
          <div className="col-span-1 md:col-span-6 flex flex-col items-start">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-4xl font-heading font-bold tracking-tighter text-blue-500">MZ</span>
              <span className="text-2xl font-heading font-bold tracking-widest text-white">MUHAMMAD ZAIN</span>
            </div>
            <p className="text-gray-400 max-w-sm text-lg leading-relaxed mb-8">
              Founder of Nexvora Tech. Crafting high-performance digital experiences that merge dynamic web development with cutting-edge technology.
            </p>
            
            {/* Real Email Link */}
            <a href="mailto:zainjutt0167@gmail.com" className="group flex items-center space-x-3 text-white font-medium hover:text-blue-400 transition-colors">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span>zainjutt0167@gmail.com</span>
            </a>
          </div>

          {/* Navigation */}
          <div className="col-span-1 md:col-span-3 flex flex-col space-y-4">
            <h4 className="text-white font-heading font-semibold tracking-widest uppercase text-sm mb-4">Navigation</h4>
            {navLinks.map((item) => (
              <a key={item.name} href={item.path} className="text-gray-400 hover:text-blue-400 transition-colors w-max text-sm uppercase tracking-wider">
                {item.name}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="col-span-1 md:col-span-3 flex flex-col space-y-4">
            <h4 className="text-white font-heading font-semibold tracking-widest uppercase text-sm mb-4">Socials</h4>
            {socialLinks.map((item) => (
              <a 
                key={item.name} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors w-max text-sm uppercase tracking-wider"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} MUHAMMAD ZAIN. All rights reserved.</p>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
            
            <button 
              onClick={scrollToTop}
              className="ml-4 flex items-center space-x-2 text-white hover:text-blue-400 transition-colors group focus:outline-none"
            >
              <span>Back to Top</span>
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all">
                <svg className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
