import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// A reusable magnetic button that subtly follows the cursor and
// adds a dynamic radial highlight. Works with any children.
export default function MagneticButton({ as: Tag = 'a', href, onClick, className = '', children }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const hover = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.3 });

  const translateX = useTransform(springX, (v) => `${v}px`);
  const translateY = useTransform(springY, (v) => `${v}px`);
  const glowOpacity = useTransform(hover, [0, 1], [0, 1]);

  function onMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.25);
    y.set(relY * 0.25);
  }

  function onMouseLeave() {
    hover.set(0);
    x.set(0);
    y.set(0);
  }

  function onMouseEnter() {
    hover.set(1);
  }

  const commonProps = {
    href,
    onClick,
    onMouseMove,
    onMouseLeave,
    onMouseEnter,
  };

  return (
    <motion.div
      ref={ref}
      className="relative inline-block"
      style={{ x: translateX, y: translateY }}
    >
      <Tag
        {...commonProps}
        className={`group relative inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition will-change-transform ${className}`}
      >
        {/* Dynamic glow */}
        <motion.span
          className="pointer-events-none absolute inset-0 rounded-xl"
          style={{
            background:
              'radial-gradient(250px 250px at var(--mouse-x,50%) var(--mouse-y,50%), rgba(255,255,255,0.18), rgba(255,255,255,0) 60%)',
            opacity: glowOpacity,
          }}
        />
        {children}
      </Tag>
    </motion.div>
  );
}
