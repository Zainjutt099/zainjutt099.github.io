import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const frameCount = 160;

const currentFrame = index => (
  `/frames/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.png`
);

const MilestoneCard = ({ scrollYProgress, start, end, title, description, alignment }) => {
  const opacity = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [50, 0, 0, -50]);
  const scale = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0.95, 1, 1, 0.95]);

  return (
    <motion.div 
      style={{ opacity, y, scale }}
      className={`absolute top-1/2 -translate-y-1/2 w-full max-w-md p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] z-30 ${alignment === 'left' ? 'left-[10%]' : 'right-[10%]'}`}
    >
      <h3 className="text-3xl font-heading font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const ScrollSequence = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const endTextOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const endTextScale = useTransform(scrollYProgress, [0.85, 1], [0.9, 1.05]);

  useEffect(() => {
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        setLoaded(loadedCount);
      };
      loadedImages.push(img);
    }
    
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    if (images.length === 0 || loaded < frameCount * 0.5) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    
    const render = (img) => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      context.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      const scale = Math.max(window.innerWidth / img.width, window.innerHeight / img.height);
      const x = (window.innerWidth / 2) - (img.width / 2) * scale;
      const y = (window.innerHeight / 2) - (img.height / 2) * scale;
      
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      context.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    render(images[0]);

    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = rect.height - window.innerHeight;
      const scrollTop = -rect.top;
      
      const scrollFraction = Math.max(0, Math.min(1, scrollTop / scrollHeight));
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => {
        if (images[frameIndex] && images[frameIndex].complete) {
          render(images[frameIndex]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const handleResize = () => {
      handleScroll();
    };
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [images, loaded]);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-[#050508]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {loaded < frameCount * 0.1 && (
          <div className="absolute inset-0 flex items-center justify-center text-white z-10 bg-[#050508]">
            <p className="text-xl font-heading font-medium tracking-widest text-blue-500 animate-pulse uppercase">Initializing Core...</p>
          </div>
        )}
        
        <motion.canvas 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5 }}
          ref={canvasRef} 
          className="w-full h-full object-cover mix-blend-lighten pointer-events-none absolute inset-0"
        />

        {/* Subtle Dark Gradient Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-transparent to-[#050508] pointer-events-none z-10 opacity-80" />

        {/* Narrative Milestones */}
        <MilestoneCard 
          scrollYProgress={scrollYProgress} 
          start={0.1} end={0.3} 
          title="The Foundation" 
          description="Every great digital product starts with a solid foundation. We meticulously architect solutions that scale, perform flawlessly, and lay the groundwork for incredible user experiences." 
          alignment="left"
        />
        
        <MilestoneCard 
          scrollYProgress={scrollYProgress} 
          start={0.4} end={0.6} 
          title="Fluid Interactions" 
          description="Motion is emotion. By leveraging advanced web technologies like Canvas and Framer Motion, we bring interfaces to life, creating intuitive, responsive, and delightful moments." 
          alignment="right"
        />

        <MilestoneCard 
          scrollYProgress={scrollYProgress} 
          start={0.7} end={0.8} 
          title="Pixel Perfection" 
          description="Attention to detail separates the good from the great. Our typography, spacing, and visual language are refined to an editorial standard, ensuring every pixel serves a purpose." 
          alignment="left"
        />
        
        {/* Cinematic End Frame */}
        <motion.div 
          style={{ opacity: endTextOpacity, scale: endTextScale }}
          className="absolute z-20 pointer-events-none flex flex-col items-center justify-center mix-blend-difference"
        >
          <h2 className="text-7xl md:text-[8rem] font-heading font-extrabold tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
            CREATE IMPACT.
          </h2>
        </motion.div>

      </div>
    </div>
  );
};

export default ScrollSequence;
