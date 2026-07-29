import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import LiquidCursor from './components/LiquidCursor';
import DynamicBackground from './components/DynamicBackground';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <div className="bg-transparent min-h-screen text-white font-sans selection:bg-blue-600 selection:text-white flex flex-col">
        {isLoading && <Preloader onLoadingComplete={() => setIsLoading(false)} />}
        
        {/* Global Dynamic Effects */}
        <DynamicBackground />
        <LiquidCursor />
        
        {/* Global Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="relative z-10 w-full flex-grow flex flex-col pt-24">
          <AnimatedRoutes />
        </main>
        
        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
