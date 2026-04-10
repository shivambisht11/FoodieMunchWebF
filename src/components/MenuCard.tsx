import React from 'react';

interface MenuCardProps {
  image: string;
  title: string;
  price: string;
  category: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ image, title, price, category }) => {
  return (
    <div className="group glass-card overflow-hidden flex flex-col h-full bg-black/60 border-white/5 hover:border-accent-yellow/50 transition-all duration-500">
      <div className="relative aspect-square overflow-hidden rounded-2xl mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
        />
        <div className="absolute top-4 left-4 bg-accent-red px-4 py-1.5 rounded-full text-[10px] uppercase font-black tracking-widest text-white shadow-lg">
          {category}
        </div>
      </div>
      
      <div className="mt-auto">
        <div className="flex justify-between items-end mb-2">
          <h3 className="text-2xl font-black text-white group-hover:text-accent-yellow transition-colors italic uppercase tracking-tighter leading-none">{title}</h3>
          <span className="text-accent-yellow font-black text-xl">₹{price}</span>
        </div>
        <p className="text-white/60 text-xs mb-6 font-medium leading-relaxed">Indulge in our chef's special preparation with premium, locally sourced ingredients.</p>
        
        <button className="w-full py-4 rounded-xl border-2 border-accent-red/20 text-accent-yellow text-[10px] font-black uppercase tracking-[0.2em] group-hover:bg-accent-red group-hover:text-white group-hover:border-transparent transition-all duration-300">
          Add To Munch
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
