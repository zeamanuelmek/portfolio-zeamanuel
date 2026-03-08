'use client';

import { type ReactNode, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export interface MagneticElementProps {
  children: ReactNode;
  /** How strongly the element follows the cursor (0-1) */
  strength?: number;
  /** Pixel radius of the magnetic field around the element */
  radius?: number;
  /** Spring physics configuration */
  springConfig?: {
    stiffness?: number;
    damping?: number;
  };
  className?: string;
  style?: React.CSSProperties;
}

export function MagneticElement({
  children,
  strength = 0.3,
  radius = 200,
  springConfig = { stiffness: 150, damping: 15 },
  className,
  style,
}: MagneticElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  if (
    typeof window !== 'undefined' &&
    !window.matchMedia('(hover: hover)').matches
  ) {
    return (
      <div className={className} style={{ display: 'inline-block', ...style }}>
        {children}
      </div>
    );
  }

  if (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return (
      <div className={className} style={{ display: 'inline-block', ...style }}>
        {children}
      </div>
    );
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distFromCenter = Math.sqrt(
      (e.clientX - centerX) ** 2 + (e.clientY - centerY) ** 2,
    );

    if (distFromCenter > radius) {
      x.set(0);
      y.set(0);
      return;
    }

    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ display: 'inline-block', x: springX, y: springY, ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
