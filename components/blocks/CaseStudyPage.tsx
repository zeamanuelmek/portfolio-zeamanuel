'use client';

import { useState, useEffect, type CSSProperties } from 'react';
import { Button as MantineButton } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { designTokens } from '@/themes/tokens';
import { ScrollReveal } from '@/components/animations';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Badge } from '@/components/atoms/Badge';
import { Card } from '@/components/atoms/Card';
import { Divider } from '@/components/atoms/Divider';
import { Stack } from '@/components/atoms/Stack';
import { Group } from '@/components/atoms/Group';
import { ImageSlider } from '@/components/molecules/ImageSlider';

import type { Project } from '@/data';

const { typography, radius, colors } = designTokens;

const goldGradientText: CSSProperties = {
  backgroundImage: 'linear-gradient(135deg, var(--theme-gold-from, #D4AF37), var(--theme-gold-to, #E8C84A))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const monoLabel: CSSProperties = {
  fontFamily: typography.fontFamily.mono,
  fontSize: 11,
  fontWeight: 600,
  color: 'var(--theme-gold, #D4AF37)',
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
};

/* ═══ CSS ═══ */

const pageStyles = `
.cs-back-link {
  transition: opacity 200ms ease;
}
.cs-back-link:hover {
  opacity: 0.7;
}

.cs-before-after-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 0;
  align-items: stretch;
}
@media (max-width: 640px) {
  .cs-before-after-grid {
    grid-template-columns: 1fr;
  }
  .cs-ba-arrow {
    display: none !important;
  }
  .cs-ba-before {
    border-radius: 12px 12px 0 0 !important;
    border-right: 1px solid var(--theme-card-border, rgba(0,0,0,0.06)) !important;
  }
  .cs-ba-after {
    border-radius: 0 0 12px 12px !important;
    border-left: 1px solid var(--theme-accent-line, rgba(212,175,55,0.15)) !important;
  }
}

.cs-metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  text-align: center;
}
@media (max-width: 640px) {
  .cs-metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.cs-workflow-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.cs-meta-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 24px;
}

.cs-expand-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  font-family: ${typography.fontFamily.body};
  font-size: 14px;
  font-weight: 600;
  color: var(--theme-gold, #D4AF37);
  transition: opacity 200ms ease;
}
.cs-expand-btn:hover { opacity: 0.8; }
.cs-expand-btn:focus-visible { outline: 2px solid #D4AF37; outline-offset: 2px; }
`;

/* ═══ Props ═══ */

export interface CaseStudyPageProps {
  project: Project;
  nextProject: Project;
}

/* ═══ Scroll Progress ═══ */

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${progress}%`,
        height: 3,
        background: 'linear-gradient(90deg, var(--theme-gold-from, #D4AF37), var(--theme-gold-to, #E8C84A))',
        zIndex: 100,
        transition: 'width 0.1s linear',
        pointerEvents: 'none',
      }}
    />
  );
}

/* ═══ Moment Section ═══ */

function MomentSection({
  moment,
  isEven,
}: {
  moment: NonNullable<Project['caseStudy']>['moments'][0];
  isEven: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  const bgColor = isEven ? 'var(--theme-bg, #FFFFFF)' : 'var(--theme-bg-page, #FAF8F3)';
  const altBg = isEven ? 'var(--theme-bg-page, #FAF8F3)' : 'var(--theme-bg, #FFFFFF)';

  return (
    <section
      style={{
        background: bgColor,
        padding: 'clamp(64px, 10vh, 96px) 24px',
        position: 'relative',
        transition: 'background-color 400ms ease',
      }}
    >
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <ScrollReveal direction="up">
          {/* Moment number + theme */}
          <Group gap={16} align="baseline" style={{ marginBottom: 16, flexWrap: 'wrap' }}>
            <Text
              size="xs"
              style={{ ...monoLabel, letterSpacing: '0.05em' }}
            >
              MOMENT {moment.number}
            </Text>
            <Text
              size="xs"
              c="dimmed"
              fs="italic"
              style={{ fontFamily: typography.fontFamily.body, fontSize: 13 }}
            >
              {moment.theme}
            </Text>
          </Group>

          {/* Title */}
          <Heading
            order={2}
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              color: 'var(--theme-text, #2C2C2C)',
              marginBottom: 4,
              transition: 'color 400ms ease',
            }}
          >
            {moment.title}
          </Heading>

          {/* Headline */}
          <Text
            size="lg"
            style={{
              color: 'var(--theme-text-secondary, #6B6B6B)',
              margin: '0 0 32px',
              lineHeight: 1.6,
              maxWidth: 640,
              transition: 'color 400ms ease',
            }}
          >
            &ldquo;{moment.headline}&rdquo;
          </Text>

          {/* Summary */}
          <Text
            style={{
              fontSize: 16,
              color: 'var(--theme-text, #2C2C2C)',
              lineHeight: 1.7,
              margin: '0 0 40px',
              maxWidth: 700,
              transition: 'color 400ms ease',
            }}
          >
            {moment.summary}
          </Text>
        </ScrollReveal>

        {/* Before / After */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="cs-before-after-grid" style={{ marginBottom: 40 }}>
            {/* Before */}
            <Card
              className="cs-ba-before"
              radius={0}
              style={{
                background: altBg,
                borderRadius: '12px 0 0 12px',
                padding: 24,
                border: '1px solid var(--theme-card-border, rgba(0,0,0,0.06))',
                borderRight: 'none',
                transition: 'background-color 400ms ease',
              }}
            >
              <Text
                size="xs"
                style={{ ...monoLabel, color: colors.brand.rust, marginBottom: 12 }}
              >
                BEFORE
              </Text>
              <Text
                size="sm"
                style={{
                  color: 'var(--theme-text-secondary, #6B6B6B)',
                  lineHeight: 1.6,
                  transition: 'color 400ms ease',
                }}
              >
                {moment.before}
              </Text>
            </Card>

            {/* Arrow */}
            <div
              className="cs-ba-arrow"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: altBg,
                padding: '0 16px',
                borderTop: '1px solid var(--theme-card-border, rgba(0,0,0,0.06))',
                borderBottom: '1px solid var(--theme-card-border, rgba(0,0,0,0.06))',
                transition: 'background-color 400ms ease',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--theme-gold, #D4AF37)" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>

            {/* After */}
            <Card
              className="cs-ba-after"
              radius={0}
              style={{
                background: altBg,
                borderRadius: '0 12px 12px 0',
                padding: 24,
                border: '1px solid var(--theme-accent-line, rgba(212,175,55,0.15))',
                borderLeft: 'none',
                transition: 'background-color 400ms ease',
              }}
            >
              <Text
                size="xs"
                style={{ ...monoLabel, color: colors.brand.forest, marginBottom: 12 }}
              >
                AFTER
              </Text>
              <Text
                size="sm"
                style={{
                  color: 'var(--theme-text, #2C2C2C)',
                  lineHeight: 1.6,
                  transition: 'color 400ms ease',
                }}
              >
                {moment.after}
              </Text>
            </Card>
          </div>
        </ScrollReveal>

        {/* Image Slider */}
        {moment.images && moment.images.length > 0 && (
          <ScrollReveal direction="up" delay={0.15}>
            <div style={{ marginBottom: 32 }}>
              <ImageSlider images={moment.images} height={360} />
            </div>
          </ScrollReveal>
        )}

        {/* Expand/Collapse */}
        <button
          className="cs-expand-btn"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--theme-gold, #D4AF37)"
            strokeWidth="2"
            style={{
              transition: 'transform 300ms ease',
              transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)',
            }}
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
          {expanded ? 'Less detail' : 'Deep dive \u2014 what I actually did'}
        </button>

        {/* Expandable details */}
        <div
          style={{
            maxHeight: expanded ? 800 : 0,
            overflow: 'hidden',
            transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <Stack gap={16} style={{ paddingTop: 24, paddingBottom: 8 }}>
            {moment.details.map((detail, i) => (
              <Group key={i} gap={12} align="flex-start" wrap="nowrap">
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: 'var(--theme-gold, #D4AF37)',
                    marginTop: 7,
                    flexShrink: 0,
                  }}
                />
                <Text
                  style={{
                    fontSize: 15,
                    color: 'var(--theme-text, #2C2C2C)',
                    lineHeight: 1.7,
                    transition: 'color 400ms ease',
                  }}
                >
                  {detail}
                </Text>
              </Group>
            ))}

            {/* Insight callout */}
            <div
              style={{
                marginTop: 16,
                padding: '20px 24px',
                background: 'linear-gradient(135deg, rgba(212,175,55,0.06), rgba(212,175,55,0.02))',
                borderRadius: radius.lg,
                borderLeft: '3px solid var(--theme-gold, #D4AF37)',
              }}
            >
              <Text size="xs" style={{ ...monoLabel, marginBottom: 8 }}>
                WHAT THIS SHOWS
              </Text>
              <Text
                fs="italic"
                style={{
                  fontSize: 15,
                  color: 'var(--theme-text, #2C2C2C)',
                  lineHeight: 1.6,
                  transition: 'color 400ms ease',
                }}
              >
                {moment.insight}
              </Text>
            </div>
          </Stack>
        </div>
      </div>
    </section>
  );
}

/* ═══ Main Component ═══ */

export function CaseStudyPage({
  project,
  nextProject,
}: CaseStudyPageProps): React.ReactElement {
  const cs = project.caseStudy;

  if (!cs) {
    return (
      <FallbackCaseStudy project={project} nextProject={nextProject} />
    );
  }

  return (
    <>
      <style>{pageStyles}</style>
      <ScrollProgress />

      {/* ═══ HERO SECTION ═══ */}
      <section
        style={{
          backgroundColor: 'var(--theme-bg-page, #FAF8F3)',
          paddingTop: 'clamp(80px, 10vw, 120px)',
          paddingBottom: 'clamp(64px, 8vh, 96px)',
          paddingLeft: 24,
          paddingRight: 24,
          position: 'relative',
          transition: 'background-color 400ms ease',
        }}
      >
        <div style={{ maxWidth: 960, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          {/* Back link — inline, not fixed */}
          <ScrollReveal direction="up">
            <a
              href="/work"
              className="cs-back-link"
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.medium,
                color: 'var(--theme-gold)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                marginBottom: 'clamp(32px, 5vh, 48px)',
              }}
            >
              <span aria-hidden="true">&larr;</span> Back to Work
            </a>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.05}>
            {/* Tags */}
            <Group gap={10} style={{ marginBottom: 28, flexWrap: 'wrap' }}>
              {cs.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  color="gold"
                  size="lg"
                  radius="xl"
                  styles={{
                    root: {
                      fontFamily: typography.fontFamily.body,
                      fontSize: '0.8125rem',
                      fontWeight: 500,
                      textTransform: 'none',
                      letterSpacing: '0.01em',
                      padding: '6px 16px',
                      height: 'auto',
                      borderColor: 'var(--theme-badge-border)',
                      backgroundColor: 'var(--theme-badge-bg)',
                      color: 'var(--theme-gold)',
                      transition: 'background-color 400ms ease, border-color 400ms ease, color 400ms ease',
                    },
                  }}
                >
                  {tag}
                </Badge>
              ))}
            </Group>

            {/* Title */}
            <Heading
              order={1}
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                color: 'var(--theme-text, #2C2C2C)',
                lineHeight: 1.1,
                marginBottom: 8,
                transition: 'color 400ms ease',
              }}
            >
              {project.title}
            </Heading>

            {/* Subtitle */}
            <Heading
              order={3}
              goldGradient
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: typography.fontWeight.medium,
                marginBottom: 40,
                lineHeight: 1.3,
              }}
            >
              {project.subtitle}
            </Heading>

            {/* Hook quote */}
            <div
              style={{
                borderLeft: '3px solid var(--theme-gold, #D4AF37)',
                paddingLeft: 24,
                marginBottom: 56,
                maxWidth: 720,
              }}
            >
              <Text
                size="lg"
                style={{
                  fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)',
                  lineHeight: 1.6,
                  color: 'var(--theme-text, #2C2C2C)',
                  fontWeight: typography.fontWeight.normal,
                  transition: 'color 400ms ease',
                }}
              >
                {cs.hook}
              </Text>
            </div>
          </ScrollReveal>

          {/* Meta grid */}
          <ScrollReveal direction="up" delay={0.1}>
            <div
              className="cs-meta-grid"
              style={{
                paddingTop: 32,
                borderTop: '1px solid var(--theme-accent-line, rgba(212,175,55,0.15))',
              }}
            >
              {[
                { label: 'Role', value: cs.role },
                { label: 'Duration', value: cs.duration },
                { label: 'Platform', value: cs.platforms },
                { label: 'Team', value: cs.team },
              ].map((item) => (
                <div key={item.label}>
                  <Text size="xs" style={{ ...monoLabel, display: 'block', marginBottom: 6 }}>
                    {item.label}
                  </Text>
                  <Text
                    size="sm"
                    style={{
                      fontFamily: typography.fontFamily.body,
                      color: 'var(--theme-text-secondary, #6B6B6B)',
                      lineHeight: 1.5,
                      transition: 'color 400ms ease',
                    }}
                  >
                    {item.value}
                  </Text>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ METRICS BAR ═══ */}
      <section
        style={{
          background: 'var(--theme-bg, #FFFFFF)',
          borderBottom: '1px solid var(--theme-accent-line, rgba(212,175,55,0.12))',
          padding: '48px 24px',
          transition: 'background-color 400ms ease',
        }}
      >
        <div className="cs-metrics-grid" style={{ maxWidth: 960, margin: '0 auto' }}>
          {cs.metrics.map((m) => (
            <ScrollReveal key={m.label} direction="up" delay={0.05}>
              <div>
                <Heading
                  order={2}
                  goldGradient
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    lineHeight: 1.1,
                    marginBottom: 4,
                  }}
                >
                  {m.value}
                </Heading>
                <Text
                  size="xs"
                  tt="uppercase"
                  ff="monospace"
                  c="dimmed"
                  style={{ letterSpacing: '0.08em', fontWeight: 500 }}
                >
                  {m.label}
                </Text>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══ WORKFLOW SECTION ═══ */}
      <section
        style={{
          background: 'var(--theme-bg-page, #FAF8F3)',
          padding: 'clamp(64px, 10vh, 96px) 24px',
          transition: 'background-color 400ms ease',
        }}
      >
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <ScrollReveal direction="up">
            <Text size="xs" style={{ ...monoLabel, display: 'block', marginBottom: 12 }}>
              PROCESS
            </Text>
            <Heading
              order={2}
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                color: 'var(--theme-text, #2C2C2C)',
                marginBottom: 12,
                transition: 'color 400ms ease',
              }}
            >
              {cs.workflow.title}
            </Heading>
            <Text
              c="dimmed"
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                maxWidth: 600,
                margin: '0 0 48px 0',
              }}
            >
              {cs.workflow.description}
            </Text>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <div className="cs-workflow-grid">
              {cs.workflow.steps.map((step) => (
                <Card
                  key={step.num}
                  style={{
                    background: 'var(--theme-bg, #FFFFFF)',
                    borderRadius: radius.lg,
                    padding: '20px 16px',
                    border: '1px solid var(--theme-accent-line, rgba(212,175,55,0.1))',
                    transition: 'background-color 400ms ease',
                  }}
                >
                  <Text
                    size="xs"
                    style={{
                      fontFamily: typography.fontFamily.mono,
                      fontWeight: 700,
                      color: 'var(--theme-gold, #D4AF37)',
                      opacity: 0.5,
                      display: 'block',
                      marginBottom: 8,
                      fontSize: 10,
                    }}
                  >
                    {step.num}
                  </Text>
                  <Text
                    fw={600}
                    style={{
                      fontFamily: typography.fontFamily.heading,
                      fontSize: 14,
                      color: 'var(--theme-text, #2C2C2C)',
                      marginBottom: 4,
                      transition: 'color 400ms ease',
                    }}
                  >
                    {step.label}
                  </Text>
                  <Text
                    size="xs"
                    c="dimmed"
                    style={{ lineHeight: 1.5 }}
                  >
                    {step.detail}
                  </Text>
                </Card>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ MOMENT SECTIONS ═══ */}
      {cs.moments.map((moment, i) => (
        <MomentSection key={moment.id} moment={moment} isEven={i % 2 === 0} />
      ))}

      {/* ═══ RESOLUTION SECTION ═══ */}
      <section
        style={{
          background: 'var(--theme-bg-page, #FAF8F3)',
          padding: 'clamp(64px, 10vh, 96px) 24px',
          position: 'relative',
          overflow: 'hidden',
          transition: 'background-color 400ms ease',
        }}
      >
        <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <ScrollReveal direction="up">
            <Text size="xs" style={{ ...monoLabel, display: 'block', marginBottom: 12 }}>
              REFLECTION
            </Text>
            <Heading
              order={2}
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                color: 'var(--theme-text, #2C2C2C)',
                marginBottom: 32,
                transition: 'color 400ms ease',
              }}
            >
              The Growth Arc
            </Heading>

            <Text
              size="lg"
              style={{
                color: 'var(--theme-text-secondary, #6B6B6B)',
                lineHeight: 1.8,
                marginBottom: 24,
                fontSize: 17,
                transition: 'color 400ms ease',
              }}
            >
              {cs.resolution.growth}
            </Text>

            <Text
              size="lg"
              style={{
                color: 'var(--theme-text-secondary, #6B6B6B)',
                lineHeight: 1.8,
                marginBottom: 48,
                fontSize: 17,
                transition: 'color 400ms ease',
              }}
            >
              {cs.resolution.discovery}
            </Text>
          </ScrollReveal>

          {/* Founder quote */}
          <ScrollReveal direction="up" delay={0.1}>
            <div
              style={{
                textAlign: 'center',
                padding: '40px 0',
                borderTop: '1px solid var(--theme-accent-line, rgba(212,175,55,0.15))',
                borderBottom: '1px solid var(--theme-accent-line, rgba(212,175,55,0.15))',
                marginBottom: 48,
              }}
            >
              <Heading
                order={2}
                goldGradient
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontStyle: 'italic',
                  marginBottom: 12,
                }}
              >
                &ldquo;{cs.resolution.founderQuote}&rdquo;
              </Heading>
              <Text
                size="xs"
                c="dimmed"
                style={{ fontSize: 13 }}
              >
                &mdash; OMOC Founder, said repeatedly throughout the project
              </Text>
            </div>
          </ScrollReveal>

          {/* Advice */}
          <ScrollReveal direction="up" delay={0.15}>
            <Card
              style={{
                background: 'var(--theme-card-bg, #FFFFFF)',
                borderRadius: radius.xl,
                padding: 32,
                border: '1px solid var(--theme-accent-line, rgba(212,175,55,0.1))',
                transition: 'background-color 400ms ease, border-color 400ms ease',
              }}
            >
              <Text size="xs" style={{ ...monoLabel, display: 'block', marginBottom: 12 }}>
                FOR JUNIOR DESIGNERS NAVIGATING GROWING SCOPE
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: 'var(--theme-text, #2C2C2C)',
                  lineHeight: 1.7,
                  transition: 'color 400ms ease',
                }}
              >
                {cs.resolution.advice}
              </Text>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <section
        style={{
          background: 'var(--theme-bg, #FFFFFF)',
          padding: 'clamp(64px, 10vh, 96px) 24px',
          textAlign: 'center',
          transition: 'background-color 400ms ease',
        }}
      >
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <ScrollReveal direction="up">
            <Heading
              order={2}
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                color: 'var(--theme-text, #2C2C2C)',
                marginBottom: 12,
                transition: 'color 400ms ease',
              }}
            >
              Want the full walkthrough?
            </Heading>
            <Text
              c="dimmed"
              style={{
                fontSize: 16,
                marginBottom: 32,
                lineHeight: 1.6,
              }}
            >
              I can walk you through every screen, every decision, and every pivot.
              The Figma file has 100+ screens worth of stories.
            </Text>
            <Group gap={12} justify="center" style={{ flexWrap: 'wrap' }}>
              <MantineButton
                component="a"
                href="/contact"
                color="gold"
                radius="xl"
                size="md"
                style={{
                  fontWeight: 600,
                  padding: '14px 32px',
                  boxShadow: designTokens.shadows.goldGlow,
                }}
                rightSection={<IconChevronRight size={16} />}
              >
                Let&apos;s Talk
              </MantineButton>
              <MantineButton
                component="a"
                href="/work"
                variant="outline"
                color="gold"
                radius="xl"
                size="md"
                style={{
                  fontWeight: 600,
                  padding: '14px 32px',
                }}
              >
                &larr; Back to Work
              </MantineButton>
            </Group>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ NEXT PROJECT ═══ */}
      <section
        style={{
          background: 'var(--theme-bg-page, #FAF8F3)',
          padding: 'clamp(48px, 8vh, 72px) 24px',
          transition: 'background-color 400ms ease',
        }}
      >
        <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal direction="up">
            <Text
              size="xs"
              c="dimmed"
              tt="uppercase"
              style={{ letterSpacing: '0.1em', marginBottom: 12 }}
            >
              Next Project
            </Text>
            <a
              href={`/work/${nextProject.id}`}
              style={{
                fontFamily: typography.fontFamily.heading,
                fontSize: 'clamp(1.5rem, 2.5vw + 0.5rem, 2.25rem)',
                fontWeight: typography.fontWeight.bold,
                color: 'var(--theme-text, #2C2C2C)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                transition: 'color 400ms ease',
              }}
            >
              {nextProject.title}
              <span style={{ ...goldGradientText, fontSize: 'clamp(1.25rem, 2vw + 0.25rem, 1.75rem)' }} aria-hidden="true">
                &rarr;
              </span>
            </a>
            <Text
              size="sm"
              c="dimmed"
              style={{ marginTop: 8 }}
            >
              {nextProject.subtitle}
            </Text>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <div style={{ width: 200, margin: '24px auto 0' }}>
              <Divider habesha />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

/* ═══ Coming Soon — creative fallback for projects without case study ═══ */

const comingSoonStyles = `
/* ── floating particles ── */
@keyframes csFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.15; }
  50%      { transform: translateY(-30px) rotate(180deg); opacity: 0.35; }
}
@keyframes csFloatSlow {
  0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
  50%      { transform: translateY(-18px) rotate(90deg) scale(1.1); }
}
@keyframes csPulse {
  0%, 100% { opacity: 0.12; transform: scale(1); }
  50%      { opacity: 0.25; transform: scale(1.05); }
}

/* ── drawing stroke animation ── */
@keyframes csDraw {
  to { stroke-dashoffset: 0; }
}
@keyframes csDrawReverse {
  from { stroke-dashoffset: 0; }
  to   { stroke-dashoffset: 800; }
}

/* ── fade-in entrance ── */
@keyframes csFadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes csFadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* ── pulsing gold dot ── */
@keyframes csDotPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(212,175,55,0.4); }
  50%      { box-shadow: 0 0 0 8px rgba(212,175,55,0); }
}

/* ── typewriter cursor ── */
@keyframes csBlink {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
}

/* ── rotating cross ── */
@keyframes csRotate {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

/* ── blueprint grid ── */
.cs-coming-soon-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--theme-accent-line, rgba(212,175,55,0.08)) 1px, transparent 1px),
    linear-gradient(90deg, var(--theme-accent-line, rgba(212,175,55,0.08)) 1px, transparent 1px);
  background-size: 48px 48px;
  pointer-events: none;
  mask-image: radial-gradient(ellipse 60% 50% at 50% 50%, black 20%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse 60% 50% at 50% 50%, black 20%, transparent 70%);
}

/* ── CTA hover ── */
.cs-coming-cta {
  transition: transform 200ms ease, box-shadow 200ms ease !important;
}
.cs-coming-cta:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 24px rgba(212,175,55,0.25) !important;
}

/* ── next project link hover ── */
.cs-coming-next:hover {
  color: var(--theme-gold, #D4AF37) !important;
}

/* ── responsive ── */
@media (max-width: 640px) {
  .cs-coming-meta-grid {
    grid-template-columns: 1fr 1fr !important;
  }
  .cs-coming-tags {
    justify-content: center !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cs-coming-soon-grid,
  .cs-particle,
  .cs-illustration svg * {
    animation: none !important;
  }
}
`;

function BlueprintIllustration() {
  return (
    <div
      className="cs-illustration"
      style={{
        width: 'clamp(200px, 40vw, 320px)',
        height: 'clamp(200px, 40vw, 320px)',
        position: 'relative',
        margin: '0 auto',
        animation: 'csFadeIn 1.2s ease 0.3s both',
      }}
    >
      <svg
        viewBox="0 0 320 320"
        fill="none"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Outer rotating ring */}
        <circle
          cx="160"
          cy="160"
          r="140"
          stroke="var(--theme-gold, #D4AF37)"
          strokeWidth="0.5"
          strokeDasharray="4 8"
          opacity="0.3"
          style={{ animation: 'csRotate 60s linear infinite' , transformOrigin: '160px 160px'}}
        />

        {/* Inner pulsing circle */}
        <circle
          cx="160"
          cy="160"
          r="100"
          stroke="var(--theme-gold, #D4AF37)"
          strokeWidth="0.5"
          opacity="0.15"
          style={{ animation: 'csPulse 4s ease-in-out infinite' , transformOrigin: '160px 160px'}}
        />

        {/* Ethiopian cross — drawn with stroke animation */}
        <g style={{ transformOrigin: '160px 160px' }}>
          {/* Vertical bar */}
          <rect
            x="152"
            y="100"
            width="16"
            height="120"
            rx="3"
            stroke="var(--theme-gold, #D4AF37)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="400"
            strokeDashoffset="400"
            style={{ animation: 'csDraw 2s ease 0.6s forwards' }}
          />
          {/* Horizontal bar */}
          <rect
            x="100"
            y="145"
            width="120"
            height="16"
            rx="3"
            stroke="var(--theme-gold, #D4AF37)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="400"
            strokeDashoffset="400"
            style={{ animation: 'csDraw 2s ease 0.9s forwards' }}
          />
          {/* Top ornament */}
          <path
            d="M148 100 L160 80 L172 100"
            stroke="var(--theme-gold, #D4AF37)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="60"
            strokeDashoffset="60"
            style={{ animation: 'csDraw 1s ease 1.8s forwards' }}
          />
          {/* Bottom ornament */}
          <path
            d="M148 220 L160 240 L172 220"
            stroke="var(--theme-gold, #D4AF37)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="60"
            strokeDashoffset="60"
            style={{ animation: 'csDraw 1s ease 2s forwards' }}
          />
          {/* Left ornament */}
          <path
            d="M100 140 L80 153 L100 166"
            stroke="var(--theme-gold, #D4AF37)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="60"
            strokeDashoffset="60"
            style={{ animation: 'csDraw 1s ease 2.2s forwards' }}
          />
          {/* Right ornament */}
          <path
            d="M220 140 L240 153 L220 166"
            stroke="var(--theme-gold, #D4AF37)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="60"
            strokeDashoffset="60"
            style={{ animation: 'csDraw 1s ease 2.4s forwards' }}
          />
        </g>

        {/* Corner accents */}
        <path d="M40 40 L40 70 M40 40 L70 40" stroke="var(--theme-gold, #D4AF37)" strokeWidth="1" opacity="0.25" />
        <path d="M280 40 L280 70 M280 40 L250 40" stroke="var(--theme-gold, #D4AF37)" strokeWidth="1" opacity="0.25" />
        <path d="M40 280 L40 250 M40 280 L70 280" stroke="var(--theme-gold, #D4AF37)" strokeWidth="1" opacity="0.25" />
        <path d="M280 280 L280 250 M280 280 L250 280" stroke="var(--theme-gold, #D4AF37)" strokeWidth="1" opacity="0.25" />

        {/* Dimension lines */}
        <line x1="60" y1="30" x2="260" y2="30" stroke="var(--theme-gold, #D4AF37)" strokeWidth="0.5" opacity="0.15" strokeDasharray="2 4" />
        <line x1="30" y1="60" x2="30" y2="260" stroke="var(--theme-gold, #D4AF37)" strokeWidth="0.5" opacity="0.15" strokeDasharray="2 4" />

        {/* Small diamonds — habesha textile motif */}
        {[
          { cx: 90, cy: 90 },
          { cx: 230, cy: 90 },
          { cx: 90, cy: 230 },
          { cx: 230, cy: 230 },
        ].map((pos, i) => (
          <g key={i} style={{ animation: `csFloatSlow ${3 + i * 0.5}s ease-in-out ${i * 0.3}s infinite`, transformOrigin: `${pos.cx}px ${pos.cy}px` }}>
            <path
              d={`M${pos.cx} ${pos.cy - 8} L${pos.cx + 8} ${pos.cy} L${pos.cx} ${pos.cy + 8} L${pos.cx - 8} ${pos.cy} Z`}
              stroke="var(--theme-gold, #D4AF37)"
              strokeWidth="1"
              fill="none"
              opacity="0.3"
            />
          </g>
        ))}
      </svg>

      {/* Center pulsing dot */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'var(--theme-gold, #D4AF37)',
          transform: 'translate(-50%, -50%)',
          animation: 'csDotPulse 2s ease-in-out infinite',
        }}
      />
    </div>
  );
}

function FloatingParticles() {
  const particles = [
    { top: '12%', left: '8%', size: 4, delay: 0, dur: 6 },
    { top: '22%', right: '12%', size: 3, delay: 1.5, dur: 7 },
    { top: '65%', left: '5%', size: 5, delay: 0.8, dur: 8 },
    { top: '72%', right: '8%', size: 3, delay: 2.2, dur: 5 },
    { top: '45%', left: '15%', size: 2, delay: 3, dur: 9 },
    { top: '35%', right: '18%', size: 4, delay: 1, dur: 6.5 },
    { top: '85%', left: '20%', size: 3, delay: 0.5, dur: 7.5 },
    { top: '55%', right: '22%', size: 2, delay: 2.8, dur: 8.5 },
  ];

  return (
    <>
      {particles.map((p, i) => (
        <div
          key={i}
          className="cs-particle"
          style={{
            position: 'absolute',
            top: p.top,
            left: 'left' in p ? p.left : undefined,
            right: 'right' in p ? p.right : undefined,
            width: p.size,
            height: p.size,
            borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '1px' : '0',
            transform: i % 3 === 2 ? 'rotate(45deg)' : undefined,
            background: 'var(--theme-gold, #D4AF37)',
            animation: `csFloat ${p.dur}s ease-in-out ${p.delay}s infinite`,
            pointerEvents: 'none' as const,
          }}
        />
      ))}
    </>
  );
}

function FallbackCaseStudy({
  project,
  nextProject,
}: {
  project: Project;
  nextProject: Project;
}) {
  return (
    <>
      <style>{comingSoonStyles}</style>

      {/* ═══ MAIN COMING SOON SECTION ═══ */}
      <section
        style={{
          backgroundColor: 'var(--theme-bg-page, #FAF8F3)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          padding: 'clamp(120px, 14vw, 180px) 24px clamp(64px, 8vh, 96px)',
          transition: 'background-color 400ms ease',
        }}
      >
        {/* Blueprint grid background */}
        <div className="cs-coming-soon-grid" />

        {/* Floating particles */}
        <FloatingParticles />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 640, textAlign: 'center' }}>

          {/* Back link */}
          <div style={{ animation: 'csFadeUp 0.6s ease both', marginBottom: 'clamp(40px, 6vh, 64px)' }}>
            <a
              href="/work"
              className="cs-back-link"
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.medium,
                color: 'var(--theme-gold)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <span aria-hidden="true">&larr;</span> Back to Work
            </a>
          </div>

          {/* Blueprint illustration */}
          <BlueprintIllustration />

          {/* Project title */}
          <div style={{ animation: 'csFadeUp 0.7s ease 0.4s both', marginTop: 'clamp(32px, 5vh, 48px)' }}>
            <Heading
              order={1}
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                color: 'var(--theme-text, #2C2C2C)',
                lineHeight: 1.05,
                marginBottom: 8,
                transition: 'color 400ms ease',
              }}
            >
              {project.title}
            </Heading>
            <Heading
              order={3}
              goldGradient
              style={{
                fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                fontWeight: typography.fontWeight.medium,
                lineHeight: 1.3,
                marginBottom: 'clamp(24px, 4vh, 40px)',
              }}
            >
              {project.subtitle}
            </Heading>
          </div>

          {/* "Case study in progress" label with typewriter cursor */}
          <div style={{ animation: 'csFadeUp 0.7s ease 0.7s both', marginBottom: 'clamp(24px, 4vh, 36px)' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                padding: '8px 20px',
                borderRadius: radius.full,
                border: '1px solid var(--theme-accent-line, rgba(212,175,55,0.25))',
                background: 'var(--theme-badge-bg, rgba(212,175,55,0.06))',
              }}
            >
              <span
                style={{
                  fontFamily: typography.fontFamily.mono,
                  fontSize: 12,
                  fontWeight: 600,
                  color: 'var(--theme-gold, #D4AF37)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Case study in progress
              </span>
              <span
                style={{
                  width: 2,
                  height: 14,
                  background: 'var(--theme-gold, #D4AF37)',
                  animation: 'csBlink 1s step-end infinite',
                  marginLeft: 2,
                }}
              />
            </div>
          </div>

          {/* Description */}
          <div style={{ animation: 'csFadeUp 0.7s ease 0.9s both' }}>
            <Text
              style={{
                fontSize: 'clamp(0.9375rem, 0.5vw + 0.75rem, 1.0625rem)',
                lineHeight: 1.7,
                color: 'var(--theme-text-secondary, #6B6B6B)',
                marginBottom: 'clamp(20px, 3vh, 32px)',
                maxWidth: 520,
                margin: '0 auto',
                transition: 'color 400ms ease',
              }}
            >
              {project.description}
            </Text>
          </div>

          {/* Tags */}
          <div
            className="cs-coming-tags"
            style={{
              animation: 'csFadeUp 0.7s ease 1.1s both',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 8,
              justifyContent: 'center',
              margin: 'clamp(20px, 3vh, 32px) auto',
              maxWidth: 480,
            }}
          >
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                color="gold"
                size="sm"
                radius="xl"
                styles={{
                  root: {
                    fontFamily: typography.fontFamily.body,
                    fontWeight: 500,
                    textTransform: 'none',
                    borderColor: 'var(--theme-badge-border)',
                    backgroundColor: 'var(--theme-badge-bg)',
                    color: 'var(--theme-gold)',
                    transition: 'all 400ms ease',
                  },
                }}
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Meta grid */}
          <div
            className="cs-coming-meta-grid"
            style={{
              animation: 'csFadeUp 0.7s ease 1.3s both',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: 24,
              padding: '28px 0',
              margin: 'clamp(20px, 3vh, 32px) 0',
              borderTop: '1px solid var(--theme-accent-line, rgba(212,175,55,0.15))',
              borderBottom: '1px solid var(--theme-accent-line, rgba(212,175,55,0.15))',
              textAlign: 'center',
            }}
          >
            <div>
              <Text size="xs" style={{ ...monoLabel, display: 'block', marginBottom: 4 }}>Role</Text>
              <Text size="sm" fw={600} style={{ color: 'var(--theme-text)', transition: 'color 400ms ease' }}>{project.role}</Text>
            </div>
            <div>
              <Text size="xs" style={{ ...monoLabel, display: 'block', marginBottom: 4 }}>Year</Text>
              <Text size="sm" fw={600} style={{ color: 'var(--theme-text)', transition: 'color 400ms ease' }}>{project.year}</Text>
            </div>
            <div>
              <Text size="xs" style={{ ...monoLabel, display: 'block', marginBottom: 4 }}>Duration</Text>
              <Text size="sm" fw={600} style={{ color: 'var(--theme-text)', transition: 'color 400ms ease' }}>{project.duration}</Text>
            </div>
            {project.team && (
              <div>
                <Text size="xs" style={{ ...monoLabel, display: 'block', marginBottom: 4 }}>Team</Text>
                <Text size="sm" fw={600} style={{ color: 'var(--theme-text)', transition: 'color 400ms ease' }}>{project.team}</Text>
              </div>
            )}
          </div>

          {/* CTAs */}
          <div style={{ animation: 'csFadeUp 0.7s ease 1.5s both', display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="/work/omoc"
              className="cs-coming-cta"
              style={{
                fontFamily: typography.fontFamily.heading,
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.semibold,
                color: '#FFFFFF',
                textDecoration: 'none',
                padding: '12px 28px',
                borderRadius: radius.full,
                background: 'linear-gradient(135deg, var(--theme-gold-from, #D4AF37), var(--theme-gold-to, #E8C84A))',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              View OMOC Case Study <span aria-hidden="true">&rarr;</span>
            </a>
            <a
              href="/work"
              className="cs-coming-cta"
              style={{
                fontFamily: typography.fontFamily.heading,
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.semibold,
                color: 'var(--theme-gold, #D4AF37)',
                textDecoration: 'none',
                padding: '12px 28px',
                borderRadius: radius.full,
                border: '1px solid var(--theme-accent-line, rgba(212,175,55,0.35))',
                background: 'transparent',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              All Projects
            </a>
          </div>
        </div>
      </section>

      {/* ═══ NEXT PROJECT ═══ */}
      <section
        style={{
          background: 'var(--theme-bg, #FFFFFF)',
          padding: 'clamp(48px, 8vh, 72px) 24px',
          transition: 'background-color 400ms ease',
        }}
      >
        <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
          <Text
            size="xs"
            c="dimmed"
            tt="uppercase"
            style={{ letterSpacing: '0.1em', marginBottom: 12 }}
          >
            Next Project
          </Text>
          <a
            href={`/work/${nextProject.id}`}
            className="cs-coming-next"
            style={{
              fontFamily: typography.fontFamily.heading,
              fontSize: 'clamp(1.5rem, 2.5vw + 0.5rem, 2.25rem)',
              fontWeight: typography.fontWeight.bold,
              color: 'var(--theme-text, #2C2C2C)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              transition: 'color 300ms ease',
            }}
          >
            {nextProject.title}
            <span style={{ ...goldGradientText, fontSize: 'clamp(1.25rem, 2vw + 0.25rem, 1.75rem)' }} aria-hidden="true">
              &rarr;
            </span>
          </a>
          <Text
            size="sm"
            c="dimmed"
            style={{ marginTop: 8 }}
          >
            {nextProject.subtitle}
          </Text>
          <div style={{ width: 200, margin: '24px auto 0' }}>
            <Divider habesha />
          </div>
        </div>
      </section>
    </>
  );
}
