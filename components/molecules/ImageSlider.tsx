'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { Image } from '@/components/atoms/Image';
import { Text } from '@/components/atoms/Text';
import { designTokens } from '@/themes/tokens';

const { radius, colors } = designTokens;

export interface ImageSliderImage {
  url: string;
  caption: string;
  alt: string;
}

export interface ImageSliderProps {
  images: ImageSliderImage[];
  height?: number | string;
  borderRadius?: string;
}

const sliderStyles = `
.img-slider-btn {
  background: rgba(26, 26, 26, 0.6);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 200ms ease;
  padding: 0;
}
.img-slider-btn:hover {
  background: rgba(212, 175, 55, 0.8);
  border-color: rgba(212, 175, 55, 0.5);
  color: #1A1A1A;
}
.img-slider-btn:focus-visible {
  outline: 2px solid #D4AF37;
  outline-offset: 2px;
}
.img-slider-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 200ms ease;
}
.img-slider-dot:focus-visible {
  outline: 2px solid #D4AF37;
  outline-offset: 2px;
}
`;

export function ImageSlider({
  images,
  height = 400,
  borderRadius = radius.xl,
}: ImageSliderProps): React.ReactElement {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = images.length;
  const isSingle = total <= 1;

  const goTo = useCallback(
    (index: number) => {
      setCurrent(((index % total) + total) % total);
    },
    [total],
  );

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      }
    };

    el.addEventListener('keydown', handleKeyDown);
    return () => el.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  if (total === 0) return <></>;

  const img = images[current];

  return (
    <>
      <style>{sliderStyles}</style>
      <div
        ref={containerRef}
        tabIndex={0}
        role="region"
        aria-label="Image slider"
        aria-roledescription="carousel"
        style={{
          position: 'relative',
          borderRadius,
          overflow: 'hidden',
          border: '1px solid rgba(212,175,55,0.1)',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Image area */}
        <div
          style={{
            position: 'relative',
            height: typeof height === 'number' ? `${height}px` : height,
            backgroundColor: 'var(--theme-card-bg, #FAF8F3)',
            overflow: 'hidden',
          }}
        >
          {/* Image with crossfade */}
          <div
            key={current}
            style={{
              position: 'absolute',
              inset: 0,
              animation: 'sliderFadeIn 300ms ease forwards',
            }}
          >
            <Image
              src={img.url}
              alt={img.alt}
              radius={0}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              fallbackSrc={undefined}
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
                if (target.parentElement) {
                  target.parentElement.style.background = `linear-gradient(135deg, var(--theme-card-bg, #FAF8F3) 0%, rgba(212,175,55,0.08) 100%)`;
                  target.parentElement.style.display = 'flex';
                  target.parentElement.style.alignItems = 'center';
                  target.parentElement.style.justifyContent = 'center';
                }
              }}
            />
          </div>

          {/* Counter */}
          {!isSingle && (
            <Text
              size="xs"
              ff="monospace"
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                backgroundColor: 'rgba(26, 26, 26, 0.6)',
                backdropFilter: 'blur(8px)',
                color: 'rgba(255, 255, 255, 0.8)',
                padding: '4px 10px',
                borderRadius: radius.full,
                fontSize: 11,
                fontWeight: 500,
                zIndex: 2,
              }}
            >
              {current + 1} / {total}
            </Text>
          )}

          {/* Arrows */}
          {!isSingle && (
            <>
              <button
                className="img-slider-btn"
                onClick={goPrev}
                aria-label="Previous image"
                style={{
                  position: 'absolute',
                  left: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                className="img-slider-btn"
                onClick={goNext}
                aria-label="Next image"
                style={{
                  position: 'absolute',
                  right: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Caption + dots */}
        <div
          style={{
            padding: '12px 16px',
            backgroundColor: 'var(--theme-card-bg, #FFFFFF)',
            borderTop: '1px solid rgba(212,175,55,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            transition: 'background-color 400ms ease',
          }}
        >
          <Text size="sm" c="dimmed" style={{ margin: 0, flex: 1, minWidth: 0 }}>
            {img.caption}
          </Text>

          {!isSingle && (
            <div
              style={{ display: 'flex', gap: 6, flexShrink: 0 }}
              role="tablist"
              aria-label="Slide indicators"
            >
              {images.map((_, i) => (
                <button
                  key={i}
                  className="img-slider-dot"
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  style={{
                    backgroundColor:
                      i === current ? colors.brand.gold : 'var(--theme-tag-border, rgba(0,0,0,0.15))',
                    transform: i === current ? 'scale(1.25)' : 'scale(1)',
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes sliderFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}
