import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from '../utils/gsap';
import MenuCard from '../components/MenuCard';

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
    <section id="menu" ref={sectionRef} className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="menu-header text-center mb-16 px-6">
          <h4 className="text-accent-yellow font-black uppercase tracking-[0.4em] mb-4 text-xs">Taste the passion</h4>
          <h2 className="text-5xl md:text-8xl font-black text-white italic leading-tight">Curated <span className="text-accent-red">Menu</span></h2>
          
          {/* Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  activeTab === cat 
                    ? 'bg-accent-yellow text-black shadow-[0_0_20px_rgba(255,204,0,0.4)] scale-105' 
                    : 'text-white/40 hover:text-white border border-white/10 hover:border-accent-red/50 bg-black/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="menu-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div key={index} className="menu-item">
              <MenuCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
