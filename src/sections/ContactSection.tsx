import React from 'react';
import { MapPin, Phone, Coffee } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-background relative selection:bg-accent-yellow selection:text-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div className="about-text">
            <h4 className="text-accent-yellow font-black uppercase tracking-[0.4em] mb-4 text-xs italic">Contact</h4>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-12 leading-[0.9] italic uppercase tracking-tighter">
              Find Your <br /><span className="text-accent-red">Munch</span> Spot
            </h2>

            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent-yellow shrink-0 group-hover:bg-accent-yellow group-hover:text-black transition-all duration-300">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-xs font-black text-white uppercase tracking-widest mb-2">Location</h3>
                  <p className="text-white/60 text-lg font-medium">Chauhan Market, Khatima,<br />Uttarakhand, 262308</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent-red shrink-0 group-hover:bg-accent-red group-hover:text-white transition-all duration-300">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="text-xs font-black text-white uppercase tracking-widest mb-2">Order Line</h3>
                  <p className="text-white/60 text-2xl font-black italic hover:text-accent-yellow transition-colors">
                    <a href="tel:7500888206">+91 7500888206</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent-yellow shrink-0 group-hover:bg-accent-yellow group-hover:text-black transition-all duration-300">
                  <Coffee size={28} />
                </div>
                <div>
                  <h3 className="text-xs font-black text-white uppercase tracking-widest mb-2">Follow The Munch</h3>
                  <p className="text-white/60 text-lg font-medium hover:text-accent-red transition-colors">
                    <a href="https://instagram.com/foodiemunch" target="_blank" rel="noopener noreferrer">@foodie_munch</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-10 rounded-[2rem] border border-accent-red/20 bg-accent-red/5 glass relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-yellow/10 blur-3xl rounded-full" />
              <h3 className="text-2xl font-black text-accent-yellow mb-6 italic uppercase tracking-tighter">Munching Hours</h3>
              <div className="space-y-4 text-white/80 font-bold uppercase tracking-widest text-sm">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Mon - Fri</span>
                  <span className="text-accent-red">10:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sat - Sun</span>
                  <span className="text-accent-yellow">09:00 AM - 11:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="h-[600px] lg:h-full min-h-[600px] rounded-[2.5rem] overflow-hidden glass border border-white/5 order-last relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14002.345678901234!2d79.9723456!3d28.9123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1a1a1a1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2sKhatima%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
              allowFullScreen
              loading="lazy"
              className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 pointer-events-none border-[1rem] border-background" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
