import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Char = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const color = useTransform(
    progress,
    range,
    ["rgba(100, 116, 139, 0.5)", "rgba(255, 255, 255, 1)"]
  );

  return (
    <motion.span style={{ opacity, color }} className="inline-block relative">
      {children}
    </motion.span>
  );
};

export const ScrollRevealText = ({ text, className = "" }) => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "center 50%"]
  });

  const words = text.split(" ");
  
  let charCount = 0;
  const totalChars = text.replace(/\s/g, "").length;

  return (
    <p ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const chars = word.split("");
        return (
          <span key={i} className="inline-flex mr-[0.25em] mb-[0.25em]">
            {chars.map((char, j) => {
              const start = charCount / totalChars;
              charCount++;
              const end = start + (1 / totalChars);
              
              return (
                <Char key={j} progress={scrollYProgress} range={[start, end]}>
                  {char}
                </Char>
              );
            })}
          </span>
        );
      })}
    </p>
  );
};

export default ScrollRevealText;
