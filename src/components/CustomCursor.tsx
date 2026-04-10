import React, { useEffect, useState } from 'react';
import { gsap } from '../utils/gsap';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorGlow = document.querySelector('.cursor-glow');
    const cursorBlur = document.querySelector('.cursor-blur');

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(cursorGlow, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });
      gsap.to(cursorBlur, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
      });
    };

    const handleHover = () => setIsHovering(true);
    const handleUnhover = () => setIsHovering(false);

    window.addEventListener('mousemove', moveCursor);
    
    const interactiveElements = document.querySelectorAll('a, button, .menu-item, .glass-card');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleUnhover);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot fixed top-0 left-0 w-2 h-2 bg-accent-yellow rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#FFCC00]" />
      <div className={`cursor-glow fixed top-0 left-0 w-12 h-12 border border-accent-red/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${isHovering ? 'scale-[3]' : 'scale-1'}`} />
      <div className="cursor-blur fixed top-0 left-0 w-60 h-60 bg-accent-yellow/5 rounded-full pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2 blur-3xl" />
    </>
  );
};

export default CustomCursor;
