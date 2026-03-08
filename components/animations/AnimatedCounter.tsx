'use client';

import { useRef, useEffect, useState } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';

export interface AnimatedCounterProps {
  /** The final number to count to */
  target: number;
  /** Starting number */
  start?: number;
  /** Animation duration in seconds */
  duration?: number;
  /** Delay before counting starts (seconds) */
  delay?: number;
  /** Text before the number (e.g., "ETB ", "$") */
  prefix?: string;
  /** Text after the number (e.g., "+", "%", "K") */
  suffix?: string;
  /** Number of decimal places */
  decimals?: number;
  /** If true, only counts the first time it enters view */
  once?: boolean;
  /** Thousands separator character */
  separator?: string;
  className?: string;
  style?: React.CSSProperties;
}

function formatNumber(
  value: number,
  decimals: number,
  separator: string,
): string {
  const fixed = value.toFixed(decimals);
  if (!separator) return fixed;

  const [intPart, decPart] = fixed.split('.');
  const withSep = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  return decPart !== undefined ? `${withSep}.${decPart}` : withSep;
}

export function AnimatedCounter({
  target,
  start = 0,
  duration = 2,
  delay = 0,
  prefix = '',
  suffix = '',
  decimals = 0,
  once = true,
  separator = ',',
  className,
  style,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(start);
  const isInView = useInView(ref, { once, amount: 0.5 });
  const [display, setDisplay] = useState(
    `${prefix}${formatNumber(start, decimals, separator)}${suffix}`,
  );
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView) return;
    if (once && hasAnimated.current) return;
    hasAnimated.current = true;

    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setDisplay(`${prefix}${formatNumber(target, decimals, separator)}${suffix}`);
      return;
    }

    motionValue.set(start);

    const controls = animate(motionValue, target, {
      duration,
      delay,
      ease: 'easeOut',
      onUpdate: (v) => {
        setDisplay(`${prefix}${formatNumber(v, decimals, separator)}${suffix}`);
      },
    });

    return () => controls.stop();
  }, [isInView, target, start, duration, delay, prefix, suffix, decimals, separator, once, motionValue]);

  return (
    <span ref={ref} className={className} style={style}>
      {display}
    </span>
  );
}
