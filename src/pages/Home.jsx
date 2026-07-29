import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ScrollSequence from '../components/ScrollSequence';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col relative z-10"
    >
      <ScrollSequence />
      <Hero />
      <About />
    </motion.div>
  );
};

export default Home;
