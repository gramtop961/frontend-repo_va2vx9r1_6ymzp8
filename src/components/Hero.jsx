import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Zap, ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden bg-black text-white">
      {/* Spline 3D Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xVcGsBa0crFDHR-t/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for cinematic depth (won't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <span className="text-sm text-violet-100">Industrial • Robotics • Interactive • Dark</span>
          </div>

          <h1 className="mx-auto max-w-4xl bg-gradient-to-br from-white via-violet-200 to-fuchsia-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl">
            Interactive 3D hero with magnetic controls
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-balance text-lg text-white/80 md:text-xl">
            A cursor‑aware, tactile interface with smooth scrolling, sticky storytelling, and parallax depth.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              href="#features"
              className="bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white shadow-lg shadow-fuchsia-500/25 hover:brightness-110"
            >
              <Rocket className="h-5 w-5" />
              <span>Dive in</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </MagneticButton>

            <MagneticButton
              href="#story"
              className="border border-white/15 bg-white/5 text-white/90 backdrop-blur hover:bg-white/10"
            >
              <Zap className="h-5 w-5 text-amber-300" />
              <span>See the scroll magic</span>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid w-full grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6"
        >
          {['Interactive', 'Minimalist', 'Digital', 'Modern', 'Technology', 'Corporate'].map((t) => (
            <div key={t} className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-xs text-white/70 backdrop-blur">
              {t}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
