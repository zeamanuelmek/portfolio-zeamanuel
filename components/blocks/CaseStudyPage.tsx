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
          paddingTop: 'clamp(120px, 14vw, 180px)',
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

/* ═══ Fallback for projects without storytelling case study ═══ */

function FallbackCaseStudy({
  project,
  nextProject,
}: {
  project: Project;
  nextProject: Project;
}) {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          backgroundColor: 'var(--theme-bg-page, #FAF8F3)',
          paddingTop: 'clamp(120px, 14vw, 180px)',
          paddingBottom: 'clamp(48px, 6vh, 72px)',
          paddingLeft: 'clamp(1.5rem, 6vw, 6rem)',
          paddingRight: 'clamp(1.5rem, 6vw, 6rem)',
          transition: 'background-color 400ms ease',
        }}
      >
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <a
            href="/work"
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
            &larr; Back to Work
          </a>

          <Badge
            variant="outline"
            color="gold"
            size="xs"
            styles={{
              root: {
                borderColor: 'var(--theme-badge-border)',
                backgroundColor: 'var(--theme-badge-bg)',
                color: 'var(--theme-gold)',
                marginBottom: 20,
                display: 'block',
                width: 'fit-content',
                transition: 'background-color 400ms ease, border-color 400ms ease, color 400ms ease',
              },
            }}
          >
            {project.category.replace('-', ' ')}
          </Badge>

          <Heading
            order={1}
            style={{
              fontSize: 'clamp(2rem, 4vw + 0.5rem, 3.5rem)',
              color: 'var(--theme-text, #2C2C2C)',
              marginBottom: 8,
              lineHeight: 1.1,
              transition: 'color 400ms ease',
            }}
          >
            {project.title}
          </Heading>

          <Heading
            order={3}
            goldGradient
            style={{
              fontSize: 'clamp(1.125rem, 1.5vw + 0.5rem, 1.5rem)',
              fontWeight: typography.fontWeight.medium,
              marginBottom: 'clamp(2rem, 4vh, 3rem)',
              lineHeight: 1.3,
            }}
          >
            {project.subtitle}
          </Heading>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2.5rem)',
              paddingTop: 'clamp(1.5rem, 3vh, 2rem)',
              borderTop: '1px solid var(--theme-accent-line, rgba(212,175,55,0.15))',
            }}
          >
            {project.team && (
              <div>
                <Text size="xs" style={{ ...monoLabel, marginBottom: 6 }}>Team</Text>
                <Text size="sm" fw={600} style={{ color: 'var(--theme-text)', transition: 'color 400ms ease' }}>{project.team}</Text>
              </div>
            )}
            <div>
              <Text size="xs" style={{ ...monoLabel, marginBottom: 6 }}>Year</Text>
              <Text size="sm" fw={600} style={{ color: 'var(--theme-text)', transition: 'color 400ms ease' }}>{project.year}</Text>
            </div>
            <div>
              <Text size="xs" style={{ ...monoLabel, marginBottom: 6 }}>Role</Text>
              <Text size="sm" fw={600} style={{ color: 'var(--theme-text)', transition: 'color 400ms ease' }}>{project.role}</Text>
            </div>
            <div>
              <Text size="xs" style={{ ...monoLabel, marginBottom: 6 }}>Duration</Text>
              <Text size="sm" fw={600} style={{ color: 'var(--theme-text)', transition: 'color 400ms ease' }}>{project.duration}</Text>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section
        style={{
          backgroundColor: 'var(--theme-bg, #FFFFFF)',
          padding: 'clamp(3rem, 6vh, 5rem) clamp(1.5rem, 6vw, 6rem)',
          transition: 'background-color 400ms ease',
        }}
      >
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <Text
            style={{
              fontSize: 'clamp(0.9375rem, 0.5vw + 0.75rem, 1.0625rem)',
              lineHeight: 1.7,
              color: 'var(--theme-text-secondary)',
              marginBottom: 20,
              transition: 'color 400ms ease',
            }}
          >
            {project.description}
          </Text>
          <Group gap={8} style={{ flexWrap: 'wrap', marginBottom: 24 }}>
            {project.tags.map((tag) => (
              <Badge key={tag} variant="light" color="gold" size="sm">
                {tag}
              </Badge>
            ))}
          </Group>
          {project.status === 'in-development' && (
            <Text
              size="sm"
              c="dimmed"
              fs="italic"
            >
              This project is currently in development. Full case study coming soon.
            </Text>
          )}
        </div>
      </section>

      {/* Next project */}
      <section
        style={{
          background: 'var(--theme-bg-page, #FAF8F3)',
          padding: 'clamp(48px, 8vh, 72px) clamp(1.5rem, 6vw, 6rem)',
          transition: 'background-color 400ms ease',
        }}
      >
        <div style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
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
          <div style={{ width: 200, margin: '24px auto 0' }}>
            <Divider habesha />
          </div>
        </div>
      </section>
    </>
  );
}
