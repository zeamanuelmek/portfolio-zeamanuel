'use client';

import { type CSSProperties } from 'react';
import {
  Button as MantineButton,
} from '@mantine/core';
import { designTokens } from '@/themes/tokens';
import { MagneticElement } from '@/components/animations';

export interface HeroSectionProps {
  profileImageSrc?: string;
}

const { typography } = designTokens;

const goldGradient: CSSProperties = {
  backgroundImage: 'linear-gradient(135deg, var(--theme-gold-from), var(--theme-gold-to))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

/* ═══ Keyframes & Styles ═══ */

const heroStyles = `
@keyframes heroClipIn {
  from { clip-path: inset(100% 0 0 0); }
  to   { clip-path: inset(0 0 0 0); }
}
@keyframes heroFadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes heroLineGrow {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}
@keyframes heroPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
@keyframes heroPhotoReveal {
  from { clip-path: inset(100% 0 0 0); opacity: 0; }
  to   { clip-path: inset(0 0 0 0); opacity: 1; }
}

.hero-section {
  transition: background-color 400ms ease;
}

.hero-name-line {
  overflow: hidden;
}

/* Profile photo */
.hero-photo {
  transition: transform 500ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 500ms ease;
}
.hero-photo:hover {
  transform: scale(1.03) rotate(-1deg);
  box-shadow: 0 12px 40px rgba(212,175,55,0.25);
}

/* Hero bottom grid */
.hero-bottom {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 32px;
  align-items: end;
}
@media (max-width: 640px) {
  .hero-bottom {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

/* Name sizing */
.hero-firstname, .hero-lastname {
  font-family: ${typography.fontFamily.heading};
  line-height: 0.88;
  letter-spacing: -0.04em;
  margin: 0;
  transition: color 400ms ease;
}
.hero-firstname {
  font-size: clamp(3.5rem, 12vw, 9rem);
  font-weight: 800;
  color: var(--theme-text);
}
.hero-lastname {
  font-size: clamp(3.5rem, 12vw, 9rem);
  font-weight: 800;
}

/* Middle row with photo + role */
.hero-mid-row {
  display: flex;
  align-items: center;
  gap: clamp(16px, 3vw, 28px);
}
@media (max-width: 480px) {
  .hero-mid-row {
    flex-wrap: wrap;
    gap: 12px;
  }
}
`;

/* ═══ Animated wrapper ═══ */

function Reveal({
  children,
  delay,
  type = 'fade',
  style,
}: {
  children: React.ReactNode;
  delay: number;
  type?: 'fade' | 'clip' | 'line';
  style?: CSSProperties;
}) {
  const anims = {
    fade: `heroFadeUp 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms both`,
    clip: `heroClipIn 800ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms both`,
    line: `heroLineGrow 800ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms both`,
  };

  return (
    <div style={{ animation: anims[type], ...style }}>
      {children}
    </div>
  );
}

/* ═══ Component ═══ */

export function HeroSection({
  profileImageSrc = '/images/profile.jpg',
}: HeroSectionProps): React.ReactElement {
  return (
    <>
      <style>{heroStyles}</style>
      <section
        className="hero-section"
        style={{
          width: '100%',
          backgroundColor: 'var(--theme-bg-page)',
          paddingTop: 'clamp(100px, 10vw, 160px)',
          paddingBottom: 'clamp(48px, 6vh, 80px)',
          paddingLeft: 'clamp(20px, 4vw, 64px)',
          paddingRight: 'clamp(20px, 4vw, 64px)',
        }}
      >
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>

          {/* ── Top label ── */}
          <Reveal delay={0} style={{ marginBottom: 'clamp(24px, 3vh, 40px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span
                style={{
                  fontFamily: typography.fontFamily.mono,
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--theme-text-dimmed)',
                  transition: 'color 400ms ease',
                }}
              >
                Portfolio 2026
              </span>
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: designTokens.colors.brand.forest,
                  animation: 'heroPulse 2.5s ease-in-out infinite',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: typography.fontFamily.mono,
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--theme-gold)',
                  transition: 'color 400ms ease',
                }}
              >
                Open to work
              </span>
            </div>
          </Reveal>

          {/* ── First name ── */}
          <div className="hero-name-line">
            <Reveal delay={100} type="clip">
              <h1 className="hero-firstname">Zeamanuel</h1>
            </Reveal>
          </div>

          {/* ── Middle row: photo + role + location ── */}
          <Reveal delay={250} style={{ margin: 'clamp(8px, 1.2vw, 16px) 0' }}>
            <div className="hero-mid-row">
              {/* Profile photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profileImageSrc}
                alt="Zeamanuel Ayalew"
                className="hero-photo"
                width={64}
                height={64}
                style={{
                  width: 'clamp(48px, 5vw, 68px)',
                  height: 'clamp(48px, 5vw, 68px)',
                  borderRadius: 'clamp(10px, 1vw, 16px)',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  border: '2px solid var(--theme-gold)',
                  flexShrink: 0,
                  animation: `heroPhotoReveal 600ms cubic-bezier(0.16, 1, 0.3, 1) 350ms both`,
                }}
              />

              {/* Role */}
              <span
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: 'clamp(0.8125rem, 1vw + 0.3rem, 1.0625rem)',
                  fontWeight: 400,
                  color: 'var(--theme-text-secondary)',
                  letterSpacing: '0.02em',
                  lineHeight: 1.5,
                  transition: 'color 400ms ease',
                }}
              >
                Design Engineer — crafting{' '}
                <span style={{ ...goldGradient, fontWeight: 600 }}>AI&#8209;augmented</span>
                {' '}products<br />
                from Addis Ababa, Ethiopia
              </span>
            </div>
          </Reveal>

          {/* ── Gold divider line ── */}
          <Reveal
            delay={500}
            type="line"
            style={{
              height: 1,
              background: 'linear-gradient(90deg, var(--theme-gold-from), var(--theme-gold-to), transparent)',
              transformOrigin: 'left',
              marginTop: 'clamp(24px, 3vh, 40px)',
              marginBottom: 'clamp(24px, 3vh, 40px)',
            }}
          >
            <div />
          </Reveal>

          {/* ── Bottom row: tagline left, CTA right ── */}
          <Reveal delay={600}>
            <div className="hero-bottom">
              {/* Tagline */}
              <p
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: 'clamp(0.875rem, 0.4vw + 0.7rem, 1rem)',
                  lineHeight: 1.7,
                  color: 'var(--theme-text-secondary)',
                  margin: 0,
                  maxWidth: '32rem',
                  transition: 'color 400ms ease',
                }}
              >
                I turn ideas into{' '}
                <strong style={{ fontWeight: 600, color: 'var(--theme-text)', transition: 'color 400ms ease' }}>
                  working prototypes
                </strong>
                {' '}and{' '}
                <strong style={{ fontWeight: 600, color: 'var(--theme-text)', transition: 'color 400ms ease' }}>
                  scalable design systems
                </strong>
                {' '}&mdash; shipping complete experiences, not just pixels.
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                <MagneticElement strength={0.25}>
                  <MantineButton
                    component="a"
                    href="/work"
                    color="gold"
                    variant="filled"
                    size="sm"
                    radius={9999}
                    styles={{
                      root: {
                        padding: '9px 24px',
                        fontWeight: 500,
                        fontSize: '0.8125rem',
                        height: 'auto',
                        letterSpacing: '0.01em',
                      },
                    }}
                  >
                    View selected works
                  </MantineButton>
                </MagneticElement>
                <MagneticElement strength={0.25}>
                  <MantineButton
                    component="a"
                    href="/work"
                    color="gold"
                    variant="outline"
                    size="sm"
                    radius={9999}
                    styles={{
                      root: {
                        padding: '9px 24px',
                        fontWeight: 500,
                        fontSize: '0.8125rem',
                        height: 'auto',
                        letterSpacing: '0.01em',
                      },
                    }}
                  >
                    All projects
                  </MantineButton>
                </MagneticElement>
              </div>
            </div>
          </Reveal>

        </div>
      </section>
    </>
  );
}
