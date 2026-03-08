'use client';

import { useEffect, useRef, useState } from 'react';
import type { AlbumTile } from '@/data/albumArt';

export interface AlbumArtPanelProps {
  /** Which side: left or right */
  side: 'left' | 'right';
  /** Tiles to display for this side */
  tiles?: AlbumTile[];
}

/**
 * Vertical mosaic of Ethiopiques album art tiles flanking the main content.
 * Desktop-only (≥1280px), parallax scroll effect, random slight rotations.
 */
export function AlbumArtPanel({ side, tiles }: AlbumArtPanelProps): React.ReactElement {
  const columnRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  const displayTiles = tiles || [];

  // Seeded pseudo-random rotations (consistent across renders)
  const rotations = displayTiles.map((_, i) => {
    const seed = side === 'left' ? i * 7 + 3 : i * 11 + 5;
    return ((seed % 9) - 4) * 0.8; // -3.2 to +3.2 degrees
  });

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (displayTiles.length === 0) return <></>;


  const parallaxOffset = side === 'left' ? scrollY * 0.04 : scrollY * -0.03;

  return (
    <div
      ref={columnRef}
      className="album-art-panel"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        [side]: 0,
        width: 'clamp(80px, 6vw, 120px)',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '20px 10px',
        justifyContent: 'center',
        overflow: 'hidden',
        opacity: 0.35,
        transform: `translateY(${parallaxOffset}px)`,
        transition: 'opacity 400ms ease',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    >
      {displayTiles.map((tile, i) => (
        <div
          key={tile.id}
          style={{
            width: '100%',
            aspectRatio: '1',
            borderRadius: '8px',
            overflow: 'hidden',
            transform: `rotate(${rotations[i]}deg)`,
            flexShrink: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={tile.image}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
      ))}
    </div>
  );
}
