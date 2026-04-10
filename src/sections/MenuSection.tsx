import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from '../utils/gsap';
import MenuCard from '../components/MenuCard';
import MenuBook from '../components/MenuBook';

// Assets
import burgerImg from '../assets/burger.png';
import pizzaImg from '../assets/pizza.png';
import pastaImg from '../assets/pasta.png';
import momosImg from '../assets/momos.png';
import drinksImg from '../assets/drinks.png';

const MenuSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('All');

  const menuItems = [
    { title: 'Signature Burger', price: '199', category: 'Fast Food', image: burgerImg },
    { title: 'Artisan Pizza', price: '299', category: 'Pizza', image: pizzaImg },
    { title: 'Truffle Pasta', price: '249', category: 'Pasta', image: pastaImg },
    { title: 'Gourmet Momos', price: '149', category: 'Appetizers', image: momosImg },
    { title: 'Cold Brew', price: '129', category: 'Beverages', image: drinksImg },
    { title: 'Fruit Cocktail', price: '159', category: 'Beverages', image: drinksImg },
  ];

  const categories = ['All', 'Fast Food', 'Pizza', 'Pasta', 'Appetizers', 'Beverages'];

  const filteredItems = activeTab === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeTab);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.menu-header > *', {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      gsap.from('.menu-item', {
        scale: 0.9,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.menu-grid',
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="menu" ref={sectionRef} className="py-24 wood-table relative border-t border-white/5 overflow-hidden min-h-screen flex items-center">
      {/* Intense Ambient Focus Lighting */}
      <div className="absolute inset-0 bg-black/80 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1000px] bg-radial-gradient from-[#bf953f]/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="menu-header text-center mb-24 px-6 relative">
          <h4 className="text-[#bf953f] font-serif uppercase tracking-[0.6em] mb-4 text-[10px] italic">Proprietary Gastronomy</h4>
          <h2 className="text-8xl md:text-[12rem] font-serif text-white italic leading-tight uppercase tracking-tighter opacity-5 absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap select-none pointer-events-none">
            ESTABLISHED TRADITION
          </h2>
          <h2 className="text-5xl md:text-8xl font-serif text-white italic leading-tight uppercase tracking-tighter relative drop-shadow-2xl">
            The Bill <span className="text-accent-red">of Fare</span>
          </h2>
          <div className="w-40 h-[1px] bg-[#bf953f]/30 mx-auto mt-6" />
          <p className="mt-8 text-white/20 text-[10px] md:text-xs font-serif uppercase tracking-[0.4em] italic">A physical chronicle of seasonal specifications</p>
        </div>

        {/* 3D Menu Book Implementation */}
        <div className="menu-grid relative py-12">
           <MenuBook />
        </div>

        {/* Floating Interactive Cues */}
        <div className="mt-16 text-center">
            <span className="text-[#bf953f]/40 text-[9px] uppercase tracking-[0.3em] font-serif italic border border-[#bf953f]/20 px-6 py-2 rounded-full">Explore with Physical Page Interaction</span>
        </div>
      </div>

      {/* Decorative Ornaments in corners of section */}
      <div className="absolute top-10 left-10 w-40 h-40 border-t border-l border-[#bf953f]/10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-40 h-40 border-b border-r border-[#bf953f]/10 pointer-events-none" />
    </section>
  );
};

export default MenuSection;
