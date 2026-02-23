'use client';

import { type CSSProperties } from 'react';
import { designTokens } from '@/themes/tokens';
import { RotatingText } from '@/components/atoms';
import { Button as MantineButton } from '@mantine/core';

export interface HeroSectionProps {
  /** Path to profile image */
  profileImageSrc?: string;
}

const { colors, typography } = designTokens;

const heroKeyframes = `
@keyframes heroFadeSlideUp {
  0% {
    opacity: 0;
    transform: translateY(24px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes heroPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

@keyframes heroLineGrow {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}

.hero-profile-img {
  transition: box-shadow 400ms ease, transform 400ms ease;
}
.hero-profile-img:hover {
  box-shadow: 0 6px 32px rgba(212,175,55,0.3) !important;
  transform: scale(1.04);
}
`;

const goldGradientText: CSSProperties = {
  backgroundImage: `linear-gradient(135deg, ${colors.brand.gold}, ${colors.brand.goldLight})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

function AnimatedSection({
  children,
  delay,
  style,
}: {
  children: React.ReactNode;
  delay: number;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        opacity: 0,
        animation: `heroFadeSlideUp 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms forwards`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

const rotatingPhrases = [
  'working prototypes',
  'functional products',
  'AI-augmented solutions',
  'complete experiences',
];

export function HeroSection({
  profileImageSrc = '/images/profile.jpg',
}: HeroSectionProps): React.ReactElement {
  return (
    <>
      <style>{heroKeyframes}</style>
      <section
        style={{
          minHeight: 'clamp(600px, 85vh, 100vh)',
          width: '100%',
          background: `
            radial-gradient(ellipse 80% 60% at 15% 55%, rgba(212,175,55,0.06) 0%, transparent 100%),
            radial-gradient(ellipse 50% 40% at 85% 20%, rgba(212,175,55,0.03) 0%, transparent 100%)
          `,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 clamp(1.5rem, 6vw, 6rem)',
        }}
      >
        <div
          style={{
            maxWidth: '64rem',
            width: '100%',
            margin: '0 auto',
          }}
        >
          {/* ── Top: Section number + Availability ── */}
          <AnimatedSection delay={0}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              {/* Section counter */}
              <span
                style={{
                  fontFamily: typography.fontFamily.mono,
                  fontSize: '0.6875rem',
                  color: 'rgba(255,255,255,0.15)',
                  letterSpacing: '0.08em',
                }}
              >
                01
              </span>

              {/* Availability */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    backgroundColor: colors.brand.forest,
                    display: 'inline-block',
                    animation: 'heroPulse 2.5s ease-in-out infinite',
                  }}
                />
                <span
                  style={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    color: 'rgba(212,175,55,0.6)',
                    letterSpacing: '0.04em',
                  }}
                >
                  Available for Projects
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Gold accent line ── */}
          <div
            style={{
              height: 1,
              background: `linear-gradient(90deg, ${colors.brand.gold}, transparent 60%)`,
              opacity: 0.15,
              margin: '20px 0 clamp(32px, 5vh, 52px)',
              transformOrigin: 'left',
              animation: 'heroLineGrow 1s cubic-bezier(0.16, 1, 0.3, 1) 200ms both',
            }}
          />

          {/* ── Hero: Name with inline image ── */}
          <AnimatedSection delay={200}>
            <h1
              style={{
                fontFamily: typography.fontFamily.heading,
                fontSize: 'clamp(2.25rem, 4.5vw + 0.5rem, 4.25rem)',
                lineHeight: 1.15,
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}>
                Hello, I&apos;m
              </span>{' '}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profileImageSrc}
                alt="Zeamanuel's profile"
                className="hero-profile-img"
                width={72}
                height={72}
                style={{
                  width: 'clamp(48px, 4.5vw + 12px, 72px)',
                  height: 'clamp(48px, 4.5vw + 12px, 72px)',
                  borderRadius: 'clamp(10px, 1.2vw, 16px)',
                  border: '2px solid rgba(212,175,55,0.45)',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  margin: '0 clamp(6px, 0.8vw, 14px)',
                  boxShadow: '0 4px 24px rgba(212,175,55,0.15)',
                }}
              />
              <span style={{ ...goldGradientText, fontWeight: 700 }}>
                Zeamanuel!
              </span>
            </h1>
          </AnimatedSection>

          {/* ── Subtitle: Role + Rotating text ── */}
          <AnimatedSection delay={400} style={{ marginTop: 'clamp(16px, 2.5vh, 28px)' }}>
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: 'clamp(1rem, 1.2vw + 0.4rem, 1.25rem)',
                margin: 0,
                lineHeight: 1.6,
                maxWidth: '40rem',
              }}
            >
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>I&apos;m a </span>
              <span style={{ ...goldGradientText, fontWeight: 600 }}>
                UX Systems Designer
              </span>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}> who ships </span>
              <RotatingText phrases={rotatingPhrases} interval={3000} />
            </p>
          </AnimatedSection>

          {/* ── Bottom group ── */}
          <div style={{ marginTop: 'clamp(40px, 6vh, 64px)' }}>
            {/* Location */}
            <AnimatedSection delay={550}>
              <p
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: '0.8125rem',
                  color: 'rgba(255,255,255,0.25)',
                  margin: 0,
                  letterSpacing: '0.03em',
                }}
              >
                Based in Addis Ababa, Ethiopia
              </p>
            </AnimatedSection>

            {/* CTA row */}
            <AnimatedSection
              delay={650}
              style={{
                marginTop: '20px',
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '20px',
              }}
            >
              <MantineButton
                component="a"
                href="#work"
                color="gold"
                size="sm"
                radius={9999}
                rightSection={
                  <span style={{ fontSize: 13, marginLeft: 2 }}>&#8595;</span>
                }
                styles={{
                  root: {
                    padding: '9px 22px',
                    fontWeight: 500,
                    fontSize: '0.8125rem',
                    flexShrink: 0,
                    height: 'auto',
                    letterSpacing: '0.01em',
                  },
                }}
              >
                View My Work
              </MantineButton>
              <p
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: 'clamp(0.75rem, 0.3vw + 0.65rem, 0.8125rem)',
                  color: 'rgba(255,255,255,0.35)',
                  margin: 0,
                  maxWidth: 'clamp(200px, 30vw, 280px)',
                  lineHeight: 1.6,
                }}
              >
                Feel free to explore my portfolio and
                reach out—I&apos;d love to connect.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
