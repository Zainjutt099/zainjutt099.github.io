import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-0 left-0 w-full flex items-center justify-between px-10 py-6 z-50 bg-black/10 backdrop-blur-md border-b border-white/5"
    >
      {/* Logo */}
      <NavLink to="/" aria-label="Go to Home" className="flex items-center space-x-2 group cursor-pointer">
        <span className="text-3xl font-heading font-bold tracking-tighter text-blue-600 group-hover:text-blue-500 transition-colors">MZ</span>
        <span className="text-xl font-heading font-bold tracking-widest text-white group-hover:text-gray-200 transition-colors">M. ZAIN</span>
      </NavLink>

      {/* Links */}
      <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-gray-400">
        {links.map((link) => (
          <NavLink 
            key={link.name} 
            to={link.path} 
            className={({ isActive }) => `
              relative transition-colors duration-300 pb-1 
              ${isActive ? 'text-white' : 'hover:text-white'}
            `}
          >
            {({ isActive }) => (
              <>
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* Button */}
      <NavLink to="/contact" className="relative overflow-hidden group bg-blue-600 text-white px-7 py-2.5 rounded-lg font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
        <span className="relative z-10">Hire Me</span>
        <div className="absolute inset-0 bg-blue-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
      </NavLink>
    </motion.nav>
  );
};

export default Navbar;
