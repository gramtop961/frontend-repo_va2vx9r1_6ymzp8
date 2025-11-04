import React from 'react';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$12',
    period: '/mo',
    highlight: false,
    features: [
      '200 image credits',
      'Standard upscales',
      'Basic editor',
      'PNG, JPG exports',
    ],
    cta: 'Start creating',
  },
  {
    name: 'Pro',
    price: '$39',
    period: '/mo',
    highlight: true,
    features: [
      '2,000 image credits',
      '8K upscale + film grain',
      'Hand‑edit studio + PSD/SVG',
      'Priority queue + API',
    ],
    cta: 'Go Pro',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    highlight: false,
    features: [
      'On‑prem or private cloud',
      'SAML/SSO & roles',
      'Custom models & SLAs',
      'Usage governance',
    ],
    cta: 'Contact sales',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Simple, scalable pricing</h2>
        <p className="mt-3 text-white/70">Choose the plan that fits your creative flow. Cancel anytime.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl border p-6 backdrop-blur ${
              plan.highlight
                ? 'border-violet-400/30 bg-gradient-to-b from-violet-500/20 to-fuchsia-500/10 shadow-xl'
                : 'border-white/10 bg-white/5'
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-violet-300/30 bg-violet-500/20 px-3 py-1 text-xs text-violet-100">
                Most popular
              </div>
            )}
            <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
            <div className="mt-2 flex items-end gap-1">
              <span className="text-4xl font-extrabold text-white">{plan.price}</span>
              <span className="mb-1 text-white/60">{plan.period}</span>
            </div>

            <ul className="mt-5 space-y-2">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                  <Check className="h-4 w-4 text-emerald-300" /> {f}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2 font-semibold transition ${
                plan.highlight
                  ? 'bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white shadow-lg shadow-fuchsia-500/25 hover:brightness-110'
                  : 'border border-white/15 bg-white/5 text-white/90 hover:bg-white/10'
              }`}
            >
              {plan.highlight && <Zap className="h-4 w-4" />} {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
