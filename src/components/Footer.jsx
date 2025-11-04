import React from 'react';
import { Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 mt-10 border-t border-white/10 bg-black/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 text-sm text-white/70 md:flex-row">
        <div className="flex items-center gap-2 text-white/80">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-600">
            <Rocket className="h-4 w-4 text-white" />
          </div>
          <span className="font-semibold text-white">Nebula Studio</span>
        </div>
        <nav className="flex flex-wrap items-center gap-4">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#" className="hover:text-white">Docs</a>
          <a href="#" className="hover:text-white">Contact</a>
        </nav>
        <p className="text-xs text-white/50">© {new Date().getFullYear()} Nebula Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}
