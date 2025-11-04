import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop',
    alt: 'Industrial robot arm',
  },
  {
    src: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    alt: 'Circuit board closeup',
  },
  {
    src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop',
    alt: 'Futuristic interface',
  },
];

export default function ParallaxGallery() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <section ref={ref} className="relative mx-auto w-full max-w-7xl px-6 py-24 text-white">
      <div className="mb-10 max-w-2xl">
        <h2 className="bg-gradient-to-br from-white via-violet-200 to-fuchsia-200 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">Parallax gallery</h2>
        <p className="mt-2 text-white/70">Layers move at different speeds as you scroll, adding depth without overwhelming the layout.</p>
      </div>

      <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
        <motion.div style={{ y: y1, opacity }} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur">
          <img src={images[0].src} alt={images[0].alt} className="h-64 w-full rounded-xl object-cover" />
        </motion.div>
        <motion.div style={{ y: y2, opacity }} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur">
          <img src={images[1].src} alt={images[1].alt} className="h-64 w-full rounded-xl object-cover" />
        </motion.div>
        <motion.div style={{ y: y3, opacity }} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur">
          <img src={images[2].src} alt={images[2].alt} className="h-64 w-full rounded-xl object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
