'use client';

import { useEffect, useRef } from 'react';
import { designTokens } from '@/themes/tokens';

const { typography } = designTokens;

export interface CustomCursorProps {
  /** Whether the cursor is active/visible */
  active: boolean;
  /** Label text shown inside the pill */
  label?: string;
}

/**
 * Floating gold pill cursor that follows the mouse.
 * Uses direct mousemove → style.transform with no lerp/RAF loop.
 * The smooth trailing effect comes from a CSS transition on transform.
 */
export function CustomCursor({ active, label = 'Click to Open' }: CustomCursorProps): React.ReactElement {
  const pillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pill = pillRef.current;
    if (!pill) return;

    if (active) {
      pill.style.opacity = '1';
      pill.style.scale = '1';

      const onMove = (e: MouseEvent) => {
        pill.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      };

      window.addEventListener('mousemove', onMove, { passive: true });
      return () => window.removeEventListener('mousemove', onMove);
    } else {
      pill.style.opacity = '0';
      pill.style.scale = '0.6';
    }
  }, [active]);

  return (
    <div
      ref={pillRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 9999,
        fontFamily: typography.fontFamily.body,
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.02em',
        color: '#1A1A1A',
        background: 'linear-gradient(135deg, #D4AF37, #E8C84A)',
        borderRadius: '9999px',
        padding: '8px 18px',
        whiteSpace: 'nowrap',
        boxShadow: '0 4px 20px rgba(212,175,55,0.4)',
        opacity: 0,
        scale: '0.6',
        transition: 'opacity 200ms ease, scale 200ms ease, transform 80ms linear',
        willChange: 'transform',
      }}
    >
      {label}
    </div>
  );
}
