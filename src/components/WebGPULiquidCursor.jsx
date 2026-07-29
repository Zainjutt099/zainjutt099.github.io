import React, { useEffect, useRef } from 'react';
import { initLiquidCursor } from '../liquid/index.ts';

const WebGPULiquidCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let cleanup = null;
    let isCancelled = false;
    
    if (canvasRef.current) {
      initLiquidCursor(canvasRef.current)
        .then((result) => {
          if (isCancelled) {
            result.onCleanup();
          } else {
            cleanup = result.onCleanup;
          }
        })
        .catch(err => {
          console.error("Failed to initialize WebGPU liquid cursor:", err);
        });
    }

    return () => {
      isCancelled = true;
      if (cleanup) {
        cleanup();
      }
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="pointer-events-none fixed top-0 left-0 z-0 mix-blend-screen w-full h-full"
    />
  );
};

export default WebGPULiquidCursor;
