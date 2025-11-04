import React from 'react';

export default function Footer() {
  return (
    <footer className="mx-auto mt-20 w-full max-w-7xl px-6 pb-16 text-white/60">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm md:flex-row">
        <p>
          © {new Date().getFullYear()} Motion Canvas. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#story" className="hover:text-white">Story</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
