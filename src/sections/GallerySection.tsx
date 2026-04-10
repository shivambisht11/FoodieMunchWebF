import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from '../utils/gsap';

// Assets
import img1 from '../assets/interior-1.png';
import img2 from '../assets/interior-2.png';
import pizzaImg from '../assets/pizza.png';
import burgerImg from '../assets/burger.png';

const GallerySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const images = [
    { src: img1, className: 'col-span-2 row-span-2' },
    { src: pizzaImg, className: 'col-span-1 row-span-1' },
    { src: img2, className: 'col-span-1 row-span-2' },
    { src: burgerImg, className: 'col-span-1 row-span-1' },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-item', {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // Parallax effect on scroll
      gsap.to('.parallax-img', {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="py-24 bg-background overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 px-6">
          <h4 className="text-accent-yellow font-black uppercase tracking-[0.4em] mb-4 text-xs italic">Visual Vibes</h4>
          <h2 className="text-5xl md:text-[6rem] font-black text-white italic uppercase leading-[0.9] tracking-tighter">The <span className="text-accent-red">Munch</span> Gallery</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 auto-rows-[200px] md:auto-rows-[300px]">
          {images.map((img, i) => (
            <div key={i} className={`gallery-item relative rounded-[2rem] overflow-hidden glass border border-white/5 ${img.className}`}>
              <img
                src={img.src}
                alt={`Gallery ${i}`}
                className="parallax-img w-full h-[120%] object-cover absolute top-0 left-0 will-change-transform"
              />
              <div className="absolute inset-0 bg-background/20 hover:bg-transparent transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
