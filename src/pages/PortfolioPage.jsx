import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Life of Blood",
    category: "Healthcare & Community",
    image: "/projects/life-of-blood.jpg",
    link: "https://zainjutt099.github.io/life-of-blood-kunri/",
    description: "A dedicated platform connecting blood donors with recipients. This project facilitates life-saving interactions securely, featuring a seamless user experience tailored for communities."
  },
  {
    title: "Limca Soda",
    category: "Brand & Promotional",
    image: "/projects/limca-soda.jpg",
    link: "https://zainjutt099.github.io/limca-soda/",
    description: "A refreshing, modern promotional website for a vibrant beverage brand. It highlights product details with engaging visuals and dynamic interactive elements to captivate users."
  },
  {
    title: "Real Estate",
    category: "Property Portal",
    image: "/projects/real-estate.jpg",
    link: "https://zainjutt099.github.io/real-estate/",
    description: "A comprehensive real estate platform featuring detailed property listings and advanced search filters. It provides an intuitive, high-performance interface for home seekers."
  },
  {
    title: "Lawyers",
    category: "Professional Services",
    image: "/projects/lawyers.jpg",
    link: "https://zainjutt099.github.io/Lawyers/",
    description: "A professional and trustworthy digital presence for a legal firm. The site offers clear service breakdowns and seamless client contact options to boost firm credibility."
  },
  {
    title: "Beauty Salon",
    category: "Booking & Services",
    image: "/projects/beauty-salon.jpg",
    link: "https://zainjutt099.github.io/beauty-salon/",
    description: "An elegant web experience designed for a premium beauty salon. It beautifully showcases service portfolios and facilitates effortless online bookings for clients."
  },
  {
    title: "Dental Clinic",
    category: "Healthcare Services",
    image: "/projects/dental-clinic.jpg",
    link: "https://zainjutt099.github.io/dental_clinic/",
    description: "A welcoming and informative online platform tailored for a dental practice. The site prioritizes patient education while offering straightforward appointment scheduling."
  },
  {
    title: "Award-Winning",
    category: "Creative Portfolio",
    image: "/projects/award-winning.jpg",
    link: "https://zainjutt099.github.io/Award-Winning/",
    description: "A visually striking showcase of award-winning digital projects. This portfolio emphasizes high-end design aesthetics, smooth micro-interactions, and engaging user experiences."
  }
];

const PortfolioPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center mb-20"
      >
        <p className="text-blue-500 font-medium tracking-widest uppercase text-sm mb-4">Featured Work</p>
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tighter mb-6">
          Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Portfolio</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
          A curated collection of my most impactful work. Having successfully delivered <span className="text-white font-medium">over 20 live projects</span>, I specialize in crafting modern, high-performance, and visually engaging digital experiences.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group block relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#050508] border border-white/5"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
            />
            
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
            
            {/* Content Reveal */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] flex flex-col justify-end h-full">
              <div className="transform transition-all duration-500">
                <p className="text-blue-400 font-medium tracking-widest uppercase text-xs mb-2">{project.category}</p>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.description}
                </p>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300"
                  >
                    Live Demo
                    <svg className="w-4 h-4 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
