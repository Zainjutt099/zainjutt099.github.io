import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const LiquidCursor = () => {
  const canvasRef = useRef(null);
  const location = useLocation();
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device uses touch (disables cursor)
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    
    // Target mouse positions (updated by event listeners)
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    
    // Physics arrays
    const numPoints = 20;
    let points = Array.from({ length: numPoints }, () => ({
      x: targetX, y: targetY, vx: 0, vy: 0
    }));

    let isClicking = false;
    let isHovering = false;
    let animationFrameId;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    resize();

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const onMouseDown = () => (isClicking = true);
    const onMouseUp = () => (isClicking = false);
    
    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        isHovering = true;
      } else {
        isHovering = false;
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    window.addEventListener('resize', resize, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Spring physics on lead point
      let leadPoint = points[0];
      leadPoint.x += (targetX - leadPoint.x) * 0.45;
      leadPoint.y += (targetY - leadPoint.y) * 0.45;

      // Relax following points
      for (let i = 1; i < numPoints; i++) {
        let p = points[i];
        let prev = points[i - 1];
        
        let dx = prev.x - p.x;
        let dy = prev.y - p.y;
        
        p.vx += dx * 0.55; // stiffness
        p.vy += dy * 0.55;
        p.vx *= 0.45; // friction
        p.vy *= 0.45;
        
        p.x += p.vx;
        p.y += p.vy;
      }

      ctx.beginPath();
      // Target radius based on interaction
      const targetRadius = isClicking ? 12 : (isHovering ? 25 : 6);
      
      for (let i = 0; i < numPoints - 1; i++) {
        const p1 = points[i];
        const p2 = points[i + 1];
        
        const progress = 1 - (i / numPoints);
        const radius = targetRadius * Math.pow(progress, 0.5); // Smoother tapering
        
        const xc = (p1.x + p2.x) / 2;
        const yc = (p1.y + p2.y) / 2;
        
        if (i === 0) {
          ctx.moveTo(p1.x, p1.y);
          ctx.arc(p1.x, p1.y, radius, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.lineTo(xc, yc);
        ctx.lineWidth = radius * 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
      }

      ctx.strokeStyle = '#3b82f6';
      ctx.fillStyle = '#3b82f6';
      ctx.globalCompositeOperation = 'screen';
      
      // Hardware-accelerated glow via shadow
      ctx.shadowBlur = isHovering ? 20 : 10;
      ctx.shadowColor = 'rgba(59, 130, 246, 0.6)';
      
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [location.pathname]);

  if (isTouchDevice) return null;

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ backfaceVisibility: 'hidden' }}
    />
  );
};

export default LiquidCursor;
