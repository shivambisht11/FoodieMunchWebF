import React from 'react';
import { Coffee, Send, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-background border-t border-white/5 selection:bg-accent-yellow selection:text-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          {/* Brand */}
          <div className="max-w-xs">
            <h2 className="text-3xl font-black tracking-tighter text-white mb-4 italic uppercase">
              <span className="text-accent-yellow">FOODIE</span> <span className="text-accent-red">MUNCH</span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed font-bold uppercase tracking-widest">
              Premium Munch, <br /> Khatima's Finest.
            </p>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center gap-6">
            <h4 className="text-white/60 text-[10px] uppercase tracking-widest font-black italic">The Tribe</h4>
            <div className="flex gap-6">
              <a href="#" className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent-yellow border-white/10 hover:border-accent-yellow hover:scale-110 transition-all duration-300">
                <Coffee size={24} />
              </a>
              <a href="tel:7500888206" className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent-red border-white/10 hover:border-accent-red hover:scale-110 transition-all duration-300">
                <Phone size={24} />
              </a>
              <a href="#" className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-white/40 border-white/10 hover:border-white hover:scale-110 transition-all duration-300">
                <Send size={24} />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-accent-red font-black text-xs mb-2 uppercase tracking-tighter">Stay Wired. Stay Munching.</p>
            <p className="text-white/40 text-sm font-bold uppercase">© 2026 FOODIE MUNCH.</p>
          </div>
        </div>
        
        {/* Decorative Quote */}
        <div className="mt-16 text-center">
            <p className="text-[12vw] font-black text-white/5 italic select-none pointer-events-none leading-none">
                THE REAL MUNCH
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
