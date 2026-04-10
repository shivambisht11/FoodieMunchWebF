import React, { useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface PageProps {
  index: number;
  currentPage: number;
  children: React.ReactNode;
  isFlipped: boolean;
  zIndex: number;
  isCover?: boolean;
}

const Page: React.FC<PageProps> = ({ index, children, isFlipped, zIndex, isCover }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 origin-left transition-transform duration-1000 ease-in-out preserve-3d cursor-pointer shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]",
        isFlipped ? "-rotate-y-180" : "rotate-y-0"
      )}
      style={{ zIndex: zIndex }}
    >
      {/* Front Face */}
      <div className={cn(
        "absolute inset-0 backface-hidden border-l border-black/20 overflow-hidden",
        isCover ? "royal-mahogany-leather rounded-r-3xl border-l-[15px] border-[#bf953f]/40" : "vintage-page rounded-r-lg border-l-[10px] border-black/10"
      )}>
        {/* Page Shine/Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none" />
        
        {/* Gold Corner Ornaments for Pages */}
        {!isCover && (
            <>
                <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-[#bf953f]/30" />
                <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-[#bf953f]/30" />
            </>
        )}
        {children}
      </div>

      {/* Back Face */}
      <div className={cn(
        "absolute inset-0 backface-hidden rotate-y-180 border-r border-black/20 overflow-hidden",
        isCover ? "royal-mahogany-leather rounded-l-3xl border-r-[15px] border-[#bf953f]/40" : "vintage-page rounded-l-lg border-r-[10px] border-black/10"
      )}>
        <div className="w-full h-full flex flex-col items-center justify-center relative bg-black/5">
            <div className="gold-gilt absolute right-0 top-0 bottom-0 w-[4px]" />
            <span className="text-black/10 text-xl font-serif italic tracking-[0.5em] uppercase rotate-90">Archive Vol. 01</span>
        </div>
      </div>
    </div>
  );
};

const MenuBook: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = 4;

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    }

    const handlePrev = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
    }

    return (
        <div className="relative w-full max-w-[1300px] h-[800px] md:h-[900px] mx-auto perspective-3000 py-20 px-4 select-none">
            {/* Book Base (The pages underneath) */}
            <div className="absolute left-1/2 top-4 bottom-4 w-1/2 bg-white/5 rounded-r-3xl shadow-2xl -z-20" />

            <div className="relative w-1/2 h-full ml-auto preserve-3d">
                {/* Book Spine Ribs (The bumps) */}
                <div className="absolute left-[-20px] top-0 bottom-0 w-12 z-50 pointer-events-none flex flex-col justify-around py-12">
                   {[...Array(5)].map((_, i) => (
                       <div key={i} className="h-6 w-full bg-[#1a0505] rounded-l-full shadow-lg border-l border-[#bf953f]/20" />
                   ))}
                </div>

                {/* Page 0: ROYAL COVER */}
                <Page index={0} currentPage={currentPage} isFlipped={currentPage > 0} zIndex={4} isCover={true}>
                    <div 
                        className="w-full h-full flex flex-col items-center justify-between p-24 text-center relative"
                        onClick={handleNext}
                    >
                        {/* Gold Ornate Crest Background */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                            <svg className="w-4/5 h-4/5 text-[#bf953f]" viewBox="0 0 100 100" fill="currentColor">
                                <path d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.2" />
                            </svg>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-[#bf953f] font-serif uppercase tracking-[0.8em] text-xs italic">Royal Archive 2024</h4>
                            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#bf953f] to-transparent mx-auto" />
                        </div>

                        <div className="relative z-10">
                            <div className="mb-8">
                                <svg className="w-24 h-24 mx-auto text-[#bf953f] drop-shadow-[0_0_15px_rgba(186,149,63,0.4)]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                                </svg>
                            </div>
                            <h1 className="text-7xl md:text-9xl font-serif italic leading-none uppercase tracking-tighter engraved-gold">
                                Foodie <br /> 
                                <span className="text-6xl md:text-8xl mt-4 block opacity-90">Munch</span>
                            </h1>
                            <div className="mt-12 w-full h-[1px] bg-white/10" />
                            <p className="mt-6 text-[#bf953f]/70 text-[10px] font-serif uppercase tracking-[0.6em] italic">The Specification Manual</p>
                        </div>

                        <div className="animate-pulse">
                            <span className="text-[#bf953f] text-[9px] uppercase tracking-[0.4em] font-serif border border-[#bf953f]/30 px-8 py-3 rounded-full hover:bg-[#bf953f]/10 transition-all">Engage Geometry</span>
                        </div>
                    </div>
                </Page>

                {/* Page 1: CATEGORY ONE (Blueprints) */}
                <Page index={1} currentPage={currentPage} isFlipped={currentPage > 1} zIndex={3}>
                    <div className="w-full h-full p-20 flex flex-col justify-between relative" onClick={handleNext}>
                        <div className="absolute inset-0 blueprint-grid opacity-5 pointer-events-none" />
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-6 mb-16">
                                <span className="text-[#4a0404] text-5xl font-serif italic">§1</span>
                                <div className="h-[1px] flex-1 bg-black/10" />
                                <h2 className="text-4xl font-serif text-[#4a0404] italic uppercase tracking-widest">Main Modules</h2>
                            </div>

                            <div className="space-y-16 px-6">
                                <div className="group/item flex justify-between items-start border-b border-black/5 pb-8 relative">
                                    <div className="max-w-[75%]">
                                        <div className="text-[10px] text-accent-red font-bold uppercase tracking-[0.3em] mb-2 px-1">REF: BURG-01</div>
                                        <h3 className="text-black font-serif text-3xl group-hover/item:translate-x-4 transition-transform leading-none uppercase tracking-tighter">Signature Bistro Burger</h3>
                                        <p className="text-black/50 text-xs font-serif italic mt-4 leading-relaxed line-clamp-2 pr-12">Aged prime beef, truffle-infused raclette, and house-picked botanical onions. A structural masterpiece of flavor.</p>
                                    </div>
                                    <span className="text-[#4a0404] font-serif text-3xl italic gold-foil">₹199</span>
                                </div>
                                <div className="group/item flex justify-between items-start border-b border-black/5 pb-8 relative">
                                    <div className="max-w-[75%]">
                                        <div className="text-[10px] text-accent-red font-bold uppercase tracking-[0.3em] mb-2 px-1">REF: PAST-02</div>
                                        <h3 className="text-black font-serif text-3xl group-hover/item:translate-x-4 transition-transform leading-none uppercase tracking-tighter">Truffle Alfredo</h3>
                                        <p className="text-black/50 text-xs font-serif italic mt-4 leading-relaxed line-clamp-2 pr-12">Hand-crafted pasta reduction with imported wild mushrooms and clinical-grade cream.</p>
                                    </div>
                                    <span className="text-[#4a0404] font-serif text-3xl italic gold-foil">₹249</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center text-[10px] text-black/30 font-serif italic uppercase tracking-[0.5em] border-t border-black/10 pt-8 mt-auto">
                            <span>TECHNICAL MANUAL</span>
                            <span>PAGE. 01</span>
                        </div>
                    </div>
                </Page>

                {/* Page 2: CATEGORY TWO */}
                <Page index={2} currentPage={currentPage} isFlipped={currentPage > 2} zIndex={2}>
                    <div className="w-full h-full p-20 flex flex-col justify-between relative" onClick={handleNext}>
                        <div className="absolute inset-0 blueprint-grid opacity-5 pointer-events-none" />
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-6 mb-16">
                                <span className="text-[#4a0404] text-5xl font-serif italic">§2</span>
                                <div className="h-[1px] flex-1 bg-black/10" />
                                <h2 className="text-4xl font-serif text-[#4a0404] italic uppercase tracking-widest">Sub-Modules</h2>
                            </div>

                            <div className="space-y-16 px-6">
                                <div className="group/item flex justify-between items-start border-b border-black/5 pb-8 relative">
                                    <div className="max-w-[75%]">
                                        <div className="text-[10px] text-accent-red font-bold uppercase tracking-[0.3em] mb-2 px-1">REF: MOMO-03</div>
                                        <h3 className="text-black font-serif text-3xl group-hover/item:translate-x-4 transition-transform leading-none uppercase tracking-tighter">Gourmet Steamed Dumplings</h3>
                                        <p className="text-black/50 text-xs font-serif italic mt-4 leading-relaxed">Silk-wrapped parcels of mountain-harvested vegetables and heritage seasonings.</p>
                                    </div>
                                    <span className="text-[#4a0404] font-serif text-3xl italic gold-foil">₹149</span>
                                </div>
                                <div className="group/item flex justify-between items-start border-b border-black/5 pb-8 relative">
                                    <div className="max-w-[75%]">
                                        <div className="text-[10px] text-accent-red font-bold uppercase tracking-[0.3em] mb-2 px-1">REF: FRIES-04</div>
                                        <h3 className="text-black font-serif text-3xl group-hover/item:translate-x-4 transition-transform leading-none uppercase tracking-tighter">Technique French Fries</h3>
                                        <p className="text-black/50 text-xs font-serif italic mt-4 leading-relaxed">Double-blanched crisps dusted with Himalayan botanical sea salts.</p>
                                    </div>
                                    <span className="text-[#4a0404] font-serif text-3xl italic gold-foil">₹129</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center text-[10px] text-black/30 font-serif italic uppercase tracking-[0.5em] pt-8 mt-auto">
                           <div className="w-12 h-12 border border-black/10 rounded-full flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity">
                                <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2" /></svg>
                            </div>
                            <span>PAGE. 02</span>
                        </div>
                    </div>
                </Page>

                {/* Page 3: FINALE / BEVERAGES */}
                <Page index={3} currentPage={currentPage} isFlipped={currentPage > 3} zIndex={1}>
                    <div className="w-full h-full p-24 flex flex-col items-center justify-center text-center relative" onClick={handlePrev}>
                        <div className="absolute inset-0 blueprint-grid opacity-5 pointer-events-none" />
                        
                        <div className="relative z-10 w-full space-y-16">
                            <div className="space-y-4">
                                <h2 className="text-6xl font-serif text-[#4a0404] italic uppercase tracking-tighter leading-none">Beverages</h2>
                                <p className="text-black/30 text-[11px] font-serif italic uppercase tracking-[0.8em]">Cooled Liquid Logic</p>
                                <div className="w-24 h-[1px] bg-black/10 mx-auto" />
                            </div>
                            
                            <div className="space-y-10 max-w-[320px] mx-auto text-black font-serif italic">
                                {[
                                    { name: "Artisan Cold Brew", price: "129" },
                                    { name: "Curated Fruit Blend", price: "159" },
                                    { name: "Mist Espresso", price: "179" }
                                ].map((drink, i) => (
                                    <div key={i} className="flex justify-between items-center text-2xl group/drink cursor-pointer hover:translate-x-2 transition-transform">
                                        <span className="group-hover/drink:text-accent-red transition-colors whitespace-nowrap">{drink.name}</span>
                                        <div className="h-[1px] flex-1 bg-black/5 mx-4" />
                                        <span className="gold-foil">₹{drink.price}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-6 pt-12">
                                <button className="px-16 py-6 bg-[#4a0404] text-[#bf953f] font-serif italic uppercase tracking-[0.6em] shadow-[0_20px_50px_rgba(74,4,4,0.3)] hover:bg-black transition-all hover:scale-105 active:scale-95">
                                    RESERVE TABLE
                                </button>
                                <div className="mt-8 opacity-20 hover:opacity-100 transition-opacity cursor-pointer group/close inline-block" onClick={(e) => { e.stopPropagation(); setCurrentPage(0); }}>
                                    <p className="text-black text-[10px] font-black uppercase tracking-[0.6em] group-hover/close:text-accent-red">Close Manual</p>
                                    <div className="h-0.5 w-0 group-hover/close:w-full bg-accent-red transition-all duration-500 mx-auto mt-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Page>
            </div>
            
            {/* Book Base / Thick Shadow Support */}
            <div className="absolute left-1/2 top-[5%] bottom-[5%] w-[10px] bg-black/60 blur-[2px] -translate-x-1/2 z-0" />
        </div>
    );
};

export default MenuBook;
