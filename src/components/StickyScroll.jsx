import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Sparkles, Shield, Palette } from 'lucide-react';

const steps = [
  {
    icon: Rocket,
    title: 'Performance that feels alive',
    desc: 'Smooth, GPU‑accelerated motion across sections with buttery scrolling and smart easing.'
  },
  {
    icon: Sparkles,
    title: 'Sticky storytelling',
    desc: 'Pin key content while the background evolves, guiding focus as you scroll.'
  },
  {
    icon: Shield,
    title: 'Stable and accessible',
    desc: 'Motion with intention. Reduced motion preference respected by default.'
  },
  {
    icon: Palette,
    title: 'Micro‑interactions everywhere',
    desc: 'Hover, tap, press—tiny details that make the whole interface feel responsive.'
  },
];

export default function StickyScroll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  // Background parallax + hue shift subtly as you scroll this section
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const hue = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.9]);

  return (
    <section ref={ref} aria-label="Sticky showcase" className="relative overflow-hidden bg-black py-28 text-white">
      {/* Moving gradient backdrop (doesn't block interaction) */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ y, filter: hue.to((h) => `hue-rotate(${h}deg)`), opacity }}
        aria-hidden
      >
        <div className="absolute -top-40 left-1/2 h-[50rem] w-[50rem] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -bottom-40 left-10 h-[35rem] w-[35rem] rounded-full bg-violet-500/10 blur-3xl" />
      </motion.div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-6 md:grid-cols-2">
        {/* Sticky panel */}
        <div className="sticky top-24 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-white via-violet-200 to-fuchsia-200 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent md:text-4xl"
          >
            Sticky scrolling that tells a story
          </motion.h2>
          <p className="max-w-md text-white/70">
            Scroll down to see the content cards animate into view while this panel stays pinned. Each card has subtle
            hover and press interactions to make the experience feel tactile.
          </p>
        </div>

        {/* Scrollable content cards */}
        <div className="space-y-6">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.995 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              {/* Accent gradient on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden>
                <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-500/15 blur-2xl" />
                <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-violet-500/15 blur-2xl" />
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white/10 p-2">
                  <Icon className="h-6 w-6 text-violet-200" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm text-white/70">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
