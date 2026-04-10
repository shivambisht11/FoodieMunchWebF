import React from 'react';

const ExperienceSection: React.FC = () => {
  return (
    <section className="relative py-32 bg-background overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h4 className="text-accent-yellow font-black uppercase tracking-[0.4em] mb-4 text-xs italic">The Vibe</h4>
        <h2 className="text-6xl md:text-9xl font-black text-white mb-8 leading-[0.8] italic uppercase tracking-tighter">
          More than <br /> <span className="text-accent-red">Just Food</span>
        </h2>
        <p className="text-white/60 text-lg md:text-2xl max-w-xl mx-auto mb-16 font-light uppercase tracking-[0.2em] leading-relaxed">
          The ultimate café sanctuary in Khatima's heart.
        </p>

        {/* 3D Scene removed for stability */}
      </div>

      {/* Decorative Radial Gradient (Vibrant) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-red/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-yellow/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

// 3D Preloads removed for stability

export default ExperienceSection;
