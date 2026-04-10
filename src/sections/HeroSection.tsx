import React, { useLayoutEffect, useRef } from 'react';
import ThreeScene from '../three/ThreeScene';
import FoodModel from '../three/FoodModel';
import { gsap } from '../utils/gsap';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      gsap.from('.hero-title span', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out',
      });

      gsap.from('.hero-subtext', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.hero-btns', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1,
        ease: 'power3.out',
      });

      // Scroll parallax for text
      gsap.to(textRef.current, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* 3D Scene removed for stability */}

      {/* Hero Content */}
      <div ref={textRef} className="relative z-10 text-center px-6 max-w-5xl pointer-events-none">
        <h1 className="hero-title text-7xl md:text-[10rem] font-black tracking-tighter text-white uppercase leading-[0.8] overflow-hidden">
          <span className="block italic text-accent-yellow drop-shadow-[0_2px_20px_rgba(255,204,0,0.3)]">Experience</span>
          <span className="block drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">Taste Like</span>
          <span className="block text-accent-red drop-shadow-[0_2px_20px_rgba(238,39,46,0.3)]">Never Before</span>
        </h1>
        
        <p className="hero-subtext mt-8 text-lg md:text-2xl text-white/80 font-light max-w-2xl mx-auto uppercase tracking-wide">
          Indulge in vibrant flavors crafted with obsession. <span className="text-accent-yellow font-bold">Foodie</span> <span className="text-accent-red font-bold">Munch</span> brings you the ultimate café experience.
        </p>

        <div className="hero-btns mt-12 flex flex-col md:flex-row items-center justify-center gap-6 pointer-events-auto">
          <a href="#menu" className="btn-primary w-full md:w-auto">
            Explore Menu
          </a>
          <a href="#contact" className="btn-secondary w-full md:w-auto">
            Find Us
          </a>
        </div>
      </div>

      {/* Decorative Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none z-[5]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-transparent pointer-events-none z-[5]" />
    </section>
  );
};

export default HeroSection;
