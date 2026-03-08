'use client';

import { useRef, type CSSProperties } from 'react';
import Link from 'next/link';
import { designTokens } from '@/themes/tokens';

const { typography, radius } = designTokens;

export interface ProjectCardWideProps {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
  /** 'browser' for web projects, 'mobile' for app projects */
  mockupType?: 'browser' | 'mobile';
  /** Scroll transition variant */
  transitionVariant?: 'fade-up' | 'slide-left' | 'scale-up' | 'slide-right';
  /** Callback when mouse enters card (for custom cursor) */
  onHoverStart?: () => void;
  /** Callback when mouse leaves card */
  onHoverEnd?: () => void;
  /** Alternate layout (mockup on left, content on right) */
  alternate?: boolean;
}

/* === Browser mockup chrome === */
function BrowserChrome({ image, title }: { image: string; title: string }) {
  return (
    <div
      style={{
        borderRadius: radius.xl,
        overflow: 'hidden',
        backgroundColor: 'var(--theme-card-bg)',
        border: '1px solid var(--theme-card-border)',
        boxShadow: 'var(--theme-card-shadow)',
        transition: 'box-shadow 400ms ease, border-color 400ms ease',
      }}
    >
      {/* Title bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '10px 14px',
          borderBottom: '1px solid var(--theme-card-border)',
          backgroundColor: 'var(--theme-tag-bg)',
          transition: 'background-color 400ms ease, border-color 400ms ease',
        }}
      >
        <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FF5F57' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FEBC2E' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#28C840' }} />
        <span
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            fontFamily: typography.fontFamily.mono,
            fontSize: '0.625rem',
            color: 'var(--theme-text-dimmed)',
            letterSpacing: '0.02em',
            transition: 'color 400ms ease',
          }}
        >
          {title.toLowerCase().replace(/\s+/g, '-')}.app
        </span>
      </div>
      {/* Screen */}
      <div style={{ aspectRatio: '16 / 10', position: 'relative', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={`${title} preview`}
          className="wide-card-img"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 800ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          onError={(e) => {
            const t = e.currentTarget;
            t.style.display = 'none';
            if (t.parentElement) {
              t.parentElement.style.background = `linear-gradient(135deg, var(--theme-card-bg) 0%, var(--theme-tag-bg) 50%, rgba(212,175,55,0.08) 100%)`;
            }
          }}
        />
      </div>
    </div>
  );
}

/* === Mobile mockup === */
function MobileChrome({ image, title }: { image: string; title: string }) {
  return (
    <div
      style={{
        width: '75%',
        maxWidth: '280px',
        margin: '0 auto',
        borderRadius: '28px',
        overflow: 'hidden',
        backgroundColor: 'var(--theme-card-bg)',
        border: '1px solid var(--theme-card-border)',
        boxShadow: 'var(--theme-card-shadow)',
        transition: 'box-shadow 400ms ease, border-color 400ms ease',
      }}
    >
      {/* Status bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '8px 14px',
          backgroundColor: 'var(--theme-tag-bg)',
          borderBottom: '1px solid var(--theme-card-border)',
          transition: 'background-color 400ms ease',
        }}
      >
        <div
          style={{
            width: '40%',
            height: '4px',
            borderRadius: '9999px',
            backgroundColor: 'var(--theme-text-dimmed)',
            opacity: 0.3,
          }}
        />
      </div>
      {/* Screen */}
      <div style={{ aspectRatio: '9 / 16', maxHeight: '400px', position: 'relative', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={`${title} mobile preview`}
          className="wide-card-img"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 800ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          onError={(e) => {
            const t = e.currentTarget;
            t.style.display = 'none';
            if (t.parentElement) {
              t.parentElement.style.background = `linear-gradient(135deg, var(--theme-card-bg) 0%, var(--theme-tag-bg) 50%, rgba(212,175,55,0.08) 100%)`;
            }
          }}
        />
      </div>
      {/* Home indicator */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '6px',
          backgroundColor: 'var(--theme-tag-bg)',
          borderTop: '1px solid var(--theme-card-border)',
          transition: 'background-color 400ms ease',
        }}
      >
        <div
          style={{
            width: '36%',
            height: '4px',
            borderRadius: '9999px',
            backgroundColor: 'var(--theme-text-dimmed)',
            opacity: 0.25,
          }}
        />
      </div>
    </div>
  );
}

/* === Gold gradient text === */
const goldGradientText: CSSProperties = {
  backgroundImage: 'linear-gradient(135deg, var(--theme-gold-from), var(--theme-gold-to))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

/* === Main Card === */
export function ProjectCardWide({
  title,
  subtitle,
  description,
  tags,
  image,
  href,
  mockupType = 'browser',
  onHoverStart,
  onHoverEnd,
  alternate = false,
}: ProjectCardWideProps): React.ReactElement {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1200px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = 'perspective(1200px) rotateY(0deg) rotateX(0deg)';
    }
    onHoverEnd?.();
  };

  const Mockup = mockupType === 'mobile' ? MobileChrome : BrowserChrome;

  return (
    <Link
      ref={cardRef}
      href={href}
      className={alternate ? 'wide-card wide-card-alt' : 'wide-card'}
      onMouseEnter={onHoverStart}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: 'clamp(1.5rem, 3vw, 2.5rem)',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'inherit',
        padding: 'clamp(1.5rem, 3vw, 2.5rem)',
        borderRadius: radius['2xl'],
        backgroundColor: 'var(--theme-card-bg)',
        border: '1px solid var(--theme-card-border)',
        boxShadow: 'var(--theme-card-shadow)',
        cursor: 'none',
        transition: 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 400ms ease, border-color 400ms ease',
        willChange: 'transform',
      }}
    >
      {/* Mockup preview */}
      <div className="wide-card-mockup-order">
        <Mockup image={image} title={title} />
      </div>

      {/* Content */}
      <div className="wide-card-content-order">
        {/* Category badge */}
        <span
          style={{
            ...goldGradientText,
            fontFamily: typography.fontFamily.mono,
            fontSize: '0.6875rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          {subtitle}
        </span>

        {/* Title */}
        <h3
          className="wide-card-title"
          style={{
            fontFamily: typography.fontFamily.heading,
            fontSize: 'clamp(1.5rem, 2vw + 0.5rem, 2.25rem)',
            fontWeight: 700,
            color: 'var(--theme-text)',
            margin: '8px 0 0',
            lineHeight: 1.15,
            transition: 'color 300ms ease',
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: 'clamp(0.8125rem, 0.5vw + 0.65rem, 0.9375rem)',
            lineHeight: 1.65,
            color: 'var(--theme-text-secondary)',
            margin: '12px 0 0',
            maxWidth: '36rem',
            transition: 'color 400ms ease',
          }}
        >
          {description}
        </p>

        {/* Tags */}
        <div
          role="list"
          aria-label={`Tags for ${title}`}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            marginTop: '16px',
          }}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              role="listitem"
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: '0.6875rem',
                fontWeight: 500,
                color: 'var(--theme-text-secondary)',
                backgroundColor: 'var(--theme-tag-bg)',
                borderRadius: radius.full,
                padding: '4px 12px',
                whiteSpace: 'nowrap',
                border: '1px solid var(--theme-tag-border)',
                transition: 'background-color 400ms ease, border-color 400ms ease, color 400ms ease',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginTop: '20px',
            ...goldGradientText,
            fontFamily: typography.fontFamily.body,
            fontSize: '0.8125rem',
            fontWeight: 600,
          }}
        >
          View Case Study
          <span aria-hidden="true" style={{ fontSize: '1rem', transition: 'transform 300ms ease' }}>&#8594;</span>
        </div>
      </div>
    </Link>
  );
}
