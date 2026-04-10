import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from '../utils/gsap';
import interiorImg from '../assets/interior-1.png';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-text > *', {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });

      gsap.from(imageRef.current, {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative bg-background overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Column */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-square lg:aspect-auto lg:h-[600px] border border-white/10 glass shadow-2xl">
              <img
                ref={imageRef}
                src={interiorImg}
                alt="Foodie Munch Interior"
                className="w-full h-full object-cover transition-all duration-700 will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 glass-card p-8 border-accent-yellow/30 hidden md:block animate-float shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <p className="text-accent-yellow font-black text-6xl italic leading-none">7+</p>
              <p className="text-white/60 text-[10px] uppercase tracking-[0.3em] font-black mt-2">Years of Vibes</p>
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full lg:w-1/2 about-text">
            <h4 className="text-accent-yellow font-black uppercase tracking-[0.4em] mb-4 text-xs italic">Our Legacy</h4>
            <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.8] mb-8 italic uppercase tracking-tighter">
              Crafting <span className="text-accent-red">Dope</span> <br /> Food Moments
            </h2>
            <p className="text-white/60 text-lg md:text-xl mb-8 leading-relaxed font-medium uppercase tracking-wide">
              Foodie Munch is more than just a café; it's a sanctuary for food lovers in Khatima. We specialize in transforming simple ingredients into <span className="text-accent-yellow">premium fast food experiences</span>.
            </p>
            
            <div className="grid grid-cols-2 gap-10 mt-12">
              <div className="group">
                <h3 className="text-3xl font-black text-white mb-2 italic uppercase tracking-tighter group-hover:text-accent-red transition-colors">Fresh</h3>
                <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Locally sourced premium assets</p>
              </div>
              <div className="group">
                <h3 className="text-3xl font-black text-white mb-2 italic uppercase tracking-tighter group-hover:text-accent-yellow transition-colors">Fast</h3>
                <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Quick service, Zero Lag vibe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
