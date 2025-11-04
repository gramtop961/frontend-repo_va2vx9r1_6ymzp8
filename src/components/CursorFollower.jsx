import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Soft cursor follower glow that trails the mouse.
// It respects pointer interactions by not capturing events.
export default function CursorFollower() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 200, damping: 30, mass: 0.4 });
  const y = useSpring(mouseY, { stiffness: 200, damping: 30, mass: 0.4 });

  useEffect(() => {
    const handle = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      // update CSS vars for magnetic button highlight
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('pointermove', handle);
    return () => window.removeEventListener('pointermove', handle);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-fuchsia-400/30 to-violet-400/30 blur-xl"
      style={{ x, y }}
      aria-hidden
    />
  );
}
