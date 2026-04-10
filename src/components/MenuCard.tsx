import React, { useState, useRef } from 'react';

interface MenuCardProps {
  image: string;
  title: string;
  price: string;
  category: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ image, title, price, category }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -15; // Max 15 degrees tilt
    const rotateY = ((x - centerX) / centerX) * 15;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative perspective-1000 w-full h-full"
    >
      {/* 3D Container */}
      <div 
        className="relative w-full h-full glass-card rounded-[2.5rem] p-8 border-white/5 transition-transform duration-200 ease-out preserve-3d"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
      >
        {/* Graph Paper Background (Cyber Aesthetic) */}
        <div className="absolute inset-4 rounded-[2rem] graph-paper opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity" />
        
        {/* Scanning Laser Animation */}
        <div className="absolute inset-x-8 rounded-full overflow-hidden pointer-events-none h-full">
            <div className="scan-line" />
        </div>

        {/* Blueprint Corners */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-accent-red/40 rounded-tl-lg" />
        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-accent-red/40 rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-accent-red/40 rounded-bl-lg" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-accent-red/40 rounded-br-lg" />

        {/* Floating Dish Image */}
        <div className="relative -mt-20 mb-8 translate-z-20 preserve-3d">
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:translate-z-40">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
          </div>
          
          {/* 3D Floating Price Badge */}
          <div className="absolute -bottom-4 right-4 bg-accent-yellow text-black px-6 py-2 rounded-xl font-black text-xl shadow-[0_10px_30px_rgba(255,204,0,0.4)] translate-z-50">
            ₹{price}
          </div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 translate-z-30">
          <div className="flex flex-col items-start mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
              <span className="text-accent-red text-[10px] font-black uppercase tracking-[0.3em]">
                {category}
              </span>
            </div>
            <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter leading-none transition-colors group-hover:text-accent-yellow">
              {title}
            </h3>
          </div>

          <p className="text-white/40 text-xs italic leading-relaxed mb-8 border-l-2 border-white/10 pl-4">
            A precise architectural blend of seasonal textures and premium digital-grade flavors. INDULGE.
          </p>

          <button className="w-full py-4 rounded-xl bg-accent-red/10 border border-accent-red/20 text-white text-[11px] font-black uppercase tracking-[0.3em] hover:bg-accent-red hover:shadow-[0_0_30px_rgba(238,39,46,0.5)] transition-all flex items-center justify-center gap-2 group/btn translate-z-40">
            <span>Initiate Order</span>
            <svg 
              className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Background Decorative Glow (Depth) */}
      <div className="absolute -inset-4 bg-accent-red/5 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />
    </div>
  );
};

export default MenuCard;
