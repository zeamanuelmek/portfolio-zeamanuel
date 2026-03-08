'use client';

import { type CSSProperties } from 'react';
import {
  Button as MantineButton,
  Text as MantineText,
} from '@mantine/core';
import { designTokens } from '@/themes/tokens';
import {
  Heading,
  Text,
  Badge,
  Container,
  Group,
} from '@/components/atoms';
import { MagneticElement } from '@/components/animations';

export interface HeroSectionProps {
  /** Path to profile image */
  profileImageSrc?: string;
}

const { typography } = designTokens;

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

.hero-profile-img {
  transition: box-shadow 400ms ease, transform 400ms ease;
}
.hero-profile-img:hover {
  box-shadow: 0 6px 32px rgba(212,175,55,0.3) !important;
  transform: scale(1.04);
}

.hero-section {
  transition: background-color 400ms ease;
}
`;

/**
 * Gold gradient for large text (headings).
 * Uses CSS vars so it adapts to light/dark theme.
 */
const goldGradientText: CSSProperties = {
  backgroundImage: `linear-gradient(135deg, var(--theme-gold-from), var(--theme-gold-to))`,
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

export function HeroSection({
  profileImageSrc = '/images/profile.jpg',
}: HeroSectionProps): React.ReactElement {
  return (
    <>
      <style>{heroKeyframes}</style>
      <section
        className="hero-section"
        style={{
          width: '100%',
          backgroundColor: 'var(--theme-bg-page)',
          paddingTop: 'clamp(148px, 14vw, 200px)' as unknown as number,
          paddingBottom: 'clamp(64px, 8vh, 100px)' as unknown as number,
        }}
      >
        <Container>
          {/* -- Line 1: Hello, I'm [image] Zeamanuel! -- */}
          <AnimatedSection delay={0}>
            <Heading
              order={1}
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw + 0.5rem, 4.25rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              <MantineText
                component="span"
                inherit
                fw={400}
                style={{ color: 'var(--theme-text-secondary)', transition: 'color 400ms ease' }}
              >
                Hello, I&apos;m
              </MantineText>{' '}
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
                  border: `2px solid ${designTokens.colors.brand.gold}73`,
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  margin: '0 clamp(6px, 0.8vw, 14px)',
                  boxShadow: designTokens.shadows.goldGlow,
                }}
              />
              <MantineText component="span" inherit fw={700} style={goldGradientText}>
                Zeamanuel!
              </MantineText>
            </Heading>
          </AnimatedSection>

          {/* -- Line 2: Role -- */}
          <AnimatedSection delay={150} style={{ marginTop: 'clamp(10px, 1.5vh, 18px)' }}>
            <Text
              ff={typography.fontFamily.heading}
              style={{
                fontSize: 'clamp(1.5rem, 2.8vw + 0.4rem, 2.5rem)',
                lineHeight: 1.2,
                letterSpacing: '-0.015em',
              }}
            >
              <MantineText
                component="span"
                inherit
                fw={400}
                style={{ color: 'var(--theme-text-secondary)', transition: 'color 400ms ease' }}
              >
                I&apos;m a{' '}
              </MantineText>
              <MantineText component="span" inherit fw={700} style={goldGradientText}>
                UX Systems Designer
              </MantineText>
            </Text>
          </AnimatedSection>

          {/* -- Line 3: What I do -- */}
          <AnimatedSection delay={300} style={{ marginTop: 'clamp(14px, 2vh, 24px)' }}>
            <Text
              lh={1.65}
              maw="38rem"
              style={{
                fontSize: 'clamp(0.875rem, 0.5vw + 0.7rem, 1.0625rem)',
                color: 'var(--theme-text-secondary)',
                transition: 'color 400ms ease',
              }}
            >
              I turn ideas into{' '}
              <MantineText
                component="span"
                inherit
                fw={500}
                style={{ color: 'var(--theme-text)', transition: 'color 400ms ease' }}
              >
                working prototypes
              </MantineText>
              {' '}and{' '}
              <MantineText
                component="span"
                inherit
                fw={500}
                style={{ color: 'var(--theme-text)', transition: 'color 400ms ease' }}
              >
                functional products
              </MantineText>
              {' '}&mdash; crafting{' '}
              <MantineText
                component="span"
                inherit
                fw={600}
                fs="italic"
                style={{ color: 'var(--theme-gold)', transition: 'color 400ms ease' }}
              >
                AI-augmented solutions
              </MantineText>
              {' '}that deliver{' '}
              <MantineText
                component="span"
                inherit
                fw={500}
                style={{ color: 'var(--theme-text)', transition: 'color 400ms ease' }}
              >
                complete experiences
              </MantineText>
              , not just pixels.
            </Text>
          </AnimatedSection>

          {/* -- Line 4: Badge + Location -- */}
          <AnimatedSection delay={450} style={{ marginTop: 'clamp(20px, 3vh, 36px)' }}>
            <Group gap={14} wrap="wrap" align="center">
              <Badge
                variant="outline"
                radius="xl"
                size="md"
                styles={{
                  root: {
                    borderColor: 'var(--theme-badge-border)',
                    backgroundColor: 'var(--theme-badge-bg)',
                    textTransform: 'none',
                    fontWeight: 600,
                    color: 'var(--theme-gold)',
                    transition: 'background-color 400ms ease, border-color 400ms ease, color 400ms ease',
                  },
                }}
                leftSection={
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      backgroundColor: designTokens.colors.brand.forest,
                      display: 'inline-block',
                      animation: 'heroPulse 2.5s ease-in-out infinite',
                    }}
                  />
                }
              >
                Available for Projects
              </Badge>
              <Text
                size="sm"
                style={{
                  letterSpacing: '0.03em',
                  color: 'var(--theme-text-secondary)',
                  transition: 'color 400ms ease',
                }}
              >
                Based in Addis Ababa, Ethiopia
              </Text>
            </Group>
          </AnimatedSection>

          {/* -- Bottom group: CTA + description -- */}
          <div style={{ marginTop: 'clamp(32px, 5vh, 52px)' }}>
            <AnimatedSection delay={550}>
              <Group gap={20} wrap="wrap" align="center">
                <MagneticElement strength={0.25}>
                  <MantineButton
                    component="a"
                    href="#work"
                    color="gold"
                    size="sm"
                    radius={9999}
                    rightSection={
                      <span style={{ fontSize: 13, marginLeft: 2 }} aria-hidden="true">&#8595;</span>
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
                </MagneticElement>
                <Text
                  size="sm"
                  lh={1.6}
                  style={{
                    maxWidth: 'clamp(200px, 30vw, 280px)',
                    fontSize: 'clamp(0.75rem, 0.3vw + 0.65rem, 0.8125rem)',
                    color: 'var(--theme-text-secondary)',
                    transition: 'color 400ms ease',
                  }}
                >
                  Feel free to explore my portfolio and
                  reach out—I&apos;d love to connect.
                </Text>
              </Group>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </>
  );
}
