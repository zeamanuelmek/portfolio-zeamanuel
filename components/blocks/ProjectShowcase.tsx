'use client';

import { useState, useEffect, useRef, type CSSProperties } from 'react';
import { designTokens } from '@/themes/tokens';
import { Button as MantineButton } from '@mantine/core';

/* ═══ Types ═══ */

export interface Project {
  title: string;
  image: string;
  tags: string[];
  description: string;
}

export interface ProjectShowcaseProps {
  heading?: string;
  headingPrefix?: string;
  tagline?: string;
  taglineAccent?: string;
  projects?: Project[];
  initialCount?: number;
}

/* ═══ Tokens ═══ */

const { colors, typography, radius } = designTokens;

const goldGradientText: CSSProperties = {
  backgroundImage: `linear-gradient(135deg, ${colors.brand.gold}, ${colors.brand.goldLight})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

/* ═══ Default project data ═══ */

const defaultProjects: Project[] = [
  {
    title: 'FlexPay \u2013 AI Finance',
    image: '/images/projects/flexpay.jpg',
    tags: ['UX/UI Design', 'Product Design', 'Dashboard'],
    description:
      'A finance management platform powered by AI. Redesigned their mobile experience to simplify budgeting, credit tracking, and smarter financial decision-making.',
  },
  {
    title: 'Cowboy \u2013 Modern Timeless Bike',
    image: '/images/projects/cowboy.jpg',
    tags: ['UX/UI Design'],
    description:
      'Redesigned the digital experience for Cowboy, a premium e-bike brand. Focused on creating a modern, intuitive UI across mobile and web.',
  },
  {
    title: 'Credivance \u2013 AI Credit Manager',
    image: '/images/projects/credivance.jpg',
    tags: ['Brand Development', 'Visual Identity'],
    description:
      'Developed a bold, modern brand identity for Credivance, an AI-powered credit management platform.',
  },
  {
    title: 'Archivr. \u2013 AI Digital Product',
    image: '/images/projects/archivr.jpg',
    tags: ['Brand Development', 'Visual Identity'],
    description:
      'GenAI | Web & Mobile | Product Launch & Go-to-market. Created a complete brand system for Archivr, an AI-powered productivity platform.',
  },
  {
    title: 'Xpend Startup',
    image: '/images/projects/xpend.jpg',
    tags: ['UX/UI Design', 'Mobile App', 'Product Design', 'Dashboard'],
    description:
      'Designed the mobile experience for Xpend, a smart expense tracking app for young professionals. Focused on clarity.',
  },
  {
    title: 'FlexPay \u2013 AI Finance',
    image: '/images/projects/flexpay-web.jpg',
    tags: ['UX/UI Design', 'Product Design', 'Dashboard'],
    description:
      'Extended the FlexPay ecosystem into desktop. Built a responsive web portal to match the mobile app, enabling seamless cross-device finance tracking.',
  },
];

/* ═══ Styles ═══ */

const showcaseStyles = `
.showcase-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2rem, 4vw, 3rem);
}

@media (min-width: 640px) {
  .showcase-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.showcase-card-thumb {
  transition: box-shadow 400ms ease, border-color 400ms ease;
}
.showcase-card:hover .showcase-card-thumb {
  box-shadow: 0 16px 48px rgba(139,69,19,0.1), 0 4px 12px rgba(0,0,0,0.06);
  border-color: rgba(212,175,55,0.3);
}
.showcase-card:hover .showcase-card-img {
  transform: scale(1.03);
}
.showcase-card:hover .showcase-card-title {
  color: #B8941F !important;
}
`;

/* ═══ ScrollReveal helper ═══ */

function ScrollReveal({
  children,
  delay = 0,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 650ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 650ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ═══ ProjectCard ═══ */

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <ScrollReveal delay={index % 2 === 0 ? 0 : 100}>
      <article
        className="showcase-card"
        style={{
          cursor: 'pointer',
          transition: 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        }}
      >
        {/* Thumbnail */}
        <div
          className="showcase-card-thumb"
          style={{
            width: '100%',
            aspectRatio: '16 / 10',
            borderRadius: radius['2xl'],
            overflow: 'hidden',
            backgroundColor: '#F0EDE6',
            border: '1px solid rgba(0,0,0,0.06)',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            position: 'relative',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className="showcase-card-img"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              if (target.parentElement) {
                target.parentElement.style.background = `linear-gradient(135deg, #F0EDE6 0%, #E8E2D8 50%, rgba(212,175,55,0.06) 100%)`;
              }
            }}
          />
        </div>

        {/* Title row with number */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '10px',
            marginTop: '14px',
          }}
        >
          <span
            style={{
              fontFamily: typography.fontFamily.mono,
              fontSize: '0.6875rem',
              color: 'rgba(212,175,55,0.45)',
              flexShrink: 0,
            }}
          >
            {num}
          </span>
          <h3
            className="showcase-card-title"
            style={{
              fontFamily: typography.fontFamily.heading,
              fontSize: 'clamp(1.05rem, 0.8vw + 0.7rem, 1.25rem)',
              fontWeight: 600,
              color: colors.text.primary,
              margin: 0,
              lineHeight: 1.3,
              transition: 'color 300ms ease',
            }}
          >
            {project.title}
          </h3>
        </div>

        {/* Tags */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            marginTop: '10px',
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: '0.6875rem',
                fontWeight: 500,
                color: colors.text.secondary,
                backgroundColor: 'rgba(0,0,0,0.03)',
                borderRadius: radius.full,
                padding: '3px 10px',
                whiteSpace: 'nowrap',
                border: '1px solid rgba(0,0,0,0.06)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: '0.8125rem',
            lineHeight: 1.6,
            color: colors.text.secondary,
            margin: '10px 0 0',
          }}
        >
          {project.description}
        </p>
      </article>
    </ScrollReveal>
  );
}

/* ═══ Main Component ═══ */

export function ProjectShowcase({
  headingPrefix = 'Project',
  heading = 'Showcase',
  tagline = "In today\u2019s crowded digital world, it\u2019s not about being louder\u2014it\u2019s about being",
  taglineAccent = 'sharper.',
  projects = defaultProjects,
  initialCount = 4,
}: ProjectShowcaseProps): React.ReactElement {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const hasMore = visibleCount < projects.length;

  return (
    <>
      <style>{showcaseStyles}</style>
      <section
        id="work"
        style={{
          width: '100%',
          padding: 'clamp(2rem, 6vh, 4rem) clamp(1.5rem, 6vw, 6rem)',
        }}
      >
        <div
          style={{
            maxWidth: '64rem',
            width: '100%',
            margin: '0 auto',
          }}
        >
          {/* ── Section header ── */}
          <ScrollReveal>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px',
              }}
            >
              <span
                style={{
                  fontFamily: typography.fontFamily.mono,
                  fontSize: '0.6875rem',
                  color: 'rgba(0,0,0,0.2)',
                  letterSpacing: '0.08em',
                }}
              >
                02
              </span>
              <span
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: '0.6875rem',
                  color: 'rgba(0,0,0,0.2)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                Selected Work
              </span>
            </div>

            {/* Gold accent line */}
            <div
              style={{
                height: 1,
                background: `linear-gradient(90deg, ${colors.brand.gold}, transparent 50%)`,
                opacity: 0.25,
                marginBottom: 'clamp(2rem, 4vh, 3rem)',
              }}
            />

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: 'clamp(2.5rem, 5vh, 4rem)',
              }}
            >
              <h2
                style={{
                  fontFamily: typography.fontFamily.heading,
                  fontSize: 'clamp(1.75rem, 3vw + 0.5rem, 2.75rem)',
                  fontWeight: 700,
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                <span style={{ color: colors.text.primary }}>
                  {headingPrefix}{' '}
                </span>
                <span style={goldGradientText}>{heading}</span>
              </h2>

              <p
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: 'clamp(0.8125rem, 0.5vw + 0.65rem, 0.875rem)',
                  color: colors.text.secondary,
                  margin: 0,
                  maxWidth: '22rem',
                  lineHeight: 1.55,
                  textAlign: 'right',
                }}
              >
                {tagline}{' '}
                <span
                  style={{
                    ...goldGradientText,
                    fontWeight: 600,
                    fontStyle: 'italic',
                  }}
                >
                  {taglineAccent}
                </span>
              </p>
            </div>
          </ScrollReveal>

          {/* ── Project grid ── */}
          <div className="showcase-grid">
            {projects.slice(0, visibleCount).map((project, i) => (
              <ProjectCard
                key={`${project.title}-${i}`}
                project={project}
                index={i}
              />
            ))}
          </div>

          {/* ── Load More ── */}
          {hasMore && (
            <ScrollReveal
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 'clamp(2.5rem, 5vh, 4rem)',
              }}
            >
              <MantineButton
                color="gold"
                variant="outline"
                size="sm"
                radius={9999}
                rightSection={<span style={{ fontSize: 14 }}>&#8594;</span>}
                styles={{
                  root: {
                    padding: '9px 26px',
                    fontWeight: 500,
                    fontSize: '0.8125rem',
                    height: 'auto',
                    borderColor: 'rgba(212,175,55,0.35)',
                    color: colors.brand.gold,
                  },
                }}
                onClick={() =>
                  setVisibleCount((prev) =>
                    Math.min(prev + 2, projects.length)
                  )
                }
              >
                Load More
              </MantineButton>
            </ScrollReveal>
          )}
        </div>
      </section>
    </>
  );
}
