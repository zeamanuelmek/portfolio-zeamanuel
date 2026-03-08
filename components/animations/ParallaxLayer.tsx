'use client';

import { type ReactNode, useRef, useEffect, useState } from 'react';

export interface ParallaxLayerProps {
  children: ReactNode;
  /** Speed multiplier: 0 = fixed, 0.5 = half speed (classic parallax), 1 = normal, >1 = faster */
  speed?: number;
  /** Scroll direction for the parallax offset */
  direction?: 'vertical' | 'horizontal';
  className?: string;
  style?: React.CSSProperties;
}

export function ParallaxLayer({
  children,
  speed = 0.5,
  direction = 'vertical',
  className,
  style,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (isMobile || !ref.current) return;

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    let ctx: { revert: () => void } | undefined;

    const initGSAP = async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (!ref.current) return;

      const offset = (1 - speed) * 200;
      const prop = direction === 'vertical' ? 'y' : 'x';

      ctx = gsap.context(() => {
        gsap.to(ref.current, {
          [prop]: -offset,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }, ref);
    };

    initGSAP();

    return () => {
      ctx?.revert();
    };
  }, [isMobile, speed, direction]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: isMobile ? undefined : 'transform', ...style }}
    >
      {children}
    </div>
  );
}
