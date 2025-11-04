import React from 'react';
import { Image, Wand2, Layers, Paintbrush, Download, Sliders, Shield } from 'lucide-react';

const features = [
  {
    icon: Image,
    title: 'Generative Engine',
    desc: 'Prompt-to-image with multi-model routing for speed, detail, or photorealism. Batch generate and compare.',
    badge: 'v4.2',
  },
  {
    icon: Wand2,
    title: 'Fine‑tuning',
    desc: 'Train custom styles and subjects safely. Manage datasets, checkpoints, and versioning in one place.',
    badge: 'Pro',
  },
  {
    icon: Layers,
    title: '8K Upscale',
    desc: 'Context-aware, detail-preserving upscaling with film grain and texture controls built in.',
    badge: '8K',
  },
  {
    icon: Paintbrush,
    title: 'Hand‑edit Studio',
    desc: 'Masking, in/outpainting, vectorize paths, and real-time brush edits. Export PSD with layers or SVG.',
    badge: 'Studio',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Built for creative superpowers</h2>
          <p className="mt-3 max-w-2xl text-white/70">Craft breathtaking visuals with a pipeline designed for quality. Control every step from ideas to final master.</p>
        </div>
        <div className="hidden gap-2 sm:flex">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">PSD</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">SVG</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">PNG</span>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {features.map(({ icon: Icon, title, desc, badge }) => (
          <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.06] p-6 shadow-xl backdrop-blur transition hover:from-white/[0.14]">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-white/10 p-2">
                <Icon className="h-6 w-6 text-violet-200" />
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wide text-white/70">{badge}</span>
            </div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>

            <div className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden>
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-violet-500/20" />
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-fuchsia-500/20" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-3">
        <div className="flex items-center gap-3">
          <Sliders className="h-5 w-5 text-emerald-300" />
          <p className="text-sm text-white/80">Parametric controls for CFG, denoise, seeds, LUTs</p>
        </div>
        <div className="flex items-center gap-3">
          <Download className="h-5 w-5 text-sky-300" />
          <p className="text-sm text-white/80">Export PSD (layers), SVG (paths), PNG, JPG, WebP</p>
        </div>
        <div className="flex items-center gap-3">
          <Shield className="h-5 w-5 text-amber-300" />
          <p className="text-sm text-white/80">Rights guard, content provenance, safe fine‑tuning</p>
        </div>
      </div>
    </section>
  );
}
