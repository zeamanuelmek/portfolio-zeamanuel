'use client';

import { useState, useEffect, useRef, type CSSProperties } from 'react';
import { designTokens } from '@/themes/tokens';
import { projects } from '@/data';
import type { Project } from '@/data';

/* === Tokens === */

const { typography, radius, colors } = designTokens;

const goldGradientText: CSSProperties = {
  backgroundImage: `linear-gradient(135deg, var(--theme-gold-from), var(--theme-gold-to))`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

/* === Filter categories derived from project data === */

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Mobile App', value: 'mobile-app' },
  { label: 'E-Commerce', value: 'e-commerce' },
  { label: 'Web App', value: 'web-app' },
  { label: 'Framer', value: 'framer' },
] as const;

/* === Styles (CSS for hover + responsive grid) === */

const workPageStyles = `
.work-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2rem, 4vw, 3rem);
}

@media (min-width: 640px) {
  .work-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .work-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.work-card-thumb {
  transition: box-shadow 400ms ease, border-color 400ms ease;
}
.work-card:hover .work-card-thumb {
  box-shadow: var(--theme-card-hover-shadow);
  border-color: ${colors.brand.gold}33;
}
.work-card:hover .work-card-img {
  transform: scale(1.03);
}
.work-card:hover .work-card-title {
  color: var(--theme-gold) !important;
}
.work-card:hover .work-card-arrow {
  transform: translateX(4px);
  color: var(--theme-gold) !important;
}

.work-filter-chip {
  cursor: pointer;
  border: none;
  outline: none;
  transition: background-color 250ms ease, color 250ms ease, border-color 250ms ease, box-shadow 250ms ease;
}
.work-filter-chip:focus-visible {
  box-shadow: 0 0 0 2px var(--theme-gold);
}
`;

/* === ScrollReveal helper === */

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

/* === ProjectCard === */

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <ScrollReveal delay={(index % 3) * 80}>
      <a
        href={`/work/${project.id}`}
        className="work-card"
        style={{
          display: 'block',
          cursor: 'pointer',
          textDecoration: 'none',
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
          className="work-card-thumb"
          style={{
            width: '100%',
            aspectRatio: '16 / 10',
            borderRadius: radius['2xl'],
            overflow: 'hidden',
            backgroundColor: 'var(--theme-card-bg)',
            border: '1px solid var(--theme-card-border)',
            boxShadow: 'var(--theme-card-shadow)',
            position: 'relative',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.thumbnail}
            alt={project.title}
            className="work-card-img"
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
                target.parentElement.style.background = `linear-gradient(135deg, var(--theme-card-bg) 0%, var(--theme-tag-bg) 50%, ${colors.brand.gold}14 100%)`;
              }
            }}
          />
        </div>

        {/* Category badge */}
        <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: '0.6875rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              ...goldGradientText,
            }}
          >
            {project.category.replace('-', ' ')}
          </span>
          {project.status === 'in-development' && (
            <span
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: '0.6rem',
                fontWeight: 500,
                color: 'var(--theme-text-dimmed)',
                backgroundColor: 'var(--theme-tag-bg)',
                border: '1px solid var(--theme-tag-border)',
                borderRadius: radius.full,
                padding: '1px 8px',
                transition: 'background-color 400ms ease, border-color 400ms ease, color 400ms ease',
              }}
            >
              In Progress
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className="work-card-title"
          style={{
            fontFamily: typography.fontFamily.heading,
            fontSize: 'clamp(1.05rem, 0.8vw + 0.7rem, 1.25rem)',
            fontWeight: 600,
            color: 'var(--theme-text)',
            margin: '6px 0 0',
            lineHeight: 1.3,
            transition: 'color 300ms ease',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.title}: {project.subtitle}
        </h3>

        {/* Tags — max 3, single row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            marginTop: '10px',
          }}
        >
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: '0.6875rem',
                fontWeight: 500,
                color: 'var(--theme-text-secondary)',
                backgroundColor: 'var(--theme-tag-bg)',
                borderRadius: radius.full,
                padding: '3px 10px',
                whiteSpace: 'nowrap',
                border: '1px solid var(--theme-tag-border)',
                transition: 'background-color 400ms ease, border-color 400ms ease, color 400ms ease',
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
            color: 'var(--theme-text-secondary)',
            margin: '10px 0 0',
            transition: 'color 400ms ease',
          }}
        >
          {project.description}
        </p>

        {/* View Case Study link */}
        <span
          className="work-card-arrow"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontFamily: typography.fontFamily.body,
            fontSize: '0.8125rem',
            fontWeight: 500,
            color: 'var(--theme-text-dimmed)',
            marginTop: 12,
            transition: 'color 300ms ease, transform 300ms ease',
          }}
        >
          View Case Study <span aria-hidden="true">&#8594;</span>
        </span>
      </a>
    </ScrollReveal>
  );
}

/* === WorkPage Props === */

export interface WorkPageProps {
  /** Override the heading text */
  heading?: string;
  /** Override the heading accent word */
  headingAccent?: string;
}

/* === Main Component === */

export function WorkPage({
  heading = 'Selected',
  headingAccent = 'Work',
}: WorkPageProps): React.ReactElement {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <style>{workPageStyles}</style>
      <section
        aria-labelledby="work-page-heading"
        style={{
          width: '100%',
          minHeight: '100vh',
          padding: 'clamp(140px, 14vw, 180px) clamp(1.5rem, 6vw, 6rem) clamp(4rem, 8vh, 6rem)',
          transition: 'background-color 400ms ease',
        }}
      >
        <div
          style={{
            maxWidth: '64rem',
            width: '100%',
            margin: '0 auto',
          }}
        >
          {/* === Header === */}
          <ScrollReveal>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap',
                gap: 16,
                paddingBottom: 'clamp(1.5rem, 3vh, 2rem)',
                borderBottom: `1px solid ${colors.brand.gold}26`,
                marginBottom: 'clamp(2rem, 4vh, 3rem)',
              }}
            >
              <h1
                id="work-page-heading"
                style={{
                  fontFamily: typography.fontFamily.heading,
                  fontSize: 'clamp(1.75rem, 3vw + 0.5rem, 2.75rem)',
                  fontWeight: 700,
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                <span style={{ color: 'var(--theme-text)', transition: 'color 400ms ease' }}>
                  {heading}{' '}
                </span>
                <span style={goldGradientText}>{headingAccent}</span>
              </h1>

              <p
                style={{
                  fontFamily: typography.fontFamily.mono,
                  fontSize: '0.8125rem',
                  color: 'var(--theme-text-dimmed)',
                  margin: 0,
                  transition: 'color 400ms ease',
                  letterSpacing: '0.02em',
                }}
              >
                {String(projects.length).padStart(2, '0')} Projects
              </p>
            </div>
          </ScrollReveal>

          {/* === Filter bar === */}
          <ScrollReveal delay={80}>
            <div
              role="tablist"
              aria-label="Filter projects by category"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
                marginBottom: 'clamp(2.5rem, 5vh, 4rem)',
              }}
            >
              {categories.map((cat) => {
                const isActive = activeFilter === cat.value;
                return (
                  <button
                    key={cat.value}
                    role="tab"
                    aria-selected={isActive}
                    className="work-filter-chip"
                    onClick={() => setActiveFilter(cat.value)}
                    style={{
                      fontFamily: typography.fontFamily.body,
                      fontSize: '0.8125rem',
                      fontWeight: 500,
                      padding: '6px 16px',
                      borderRadius: radius.full,
                      backgroundColor: isActive ? 'var(--theme-gold)' : 'var(--theme-tag-bg)',
                      color: isActive ? '#FFFFFF' : 'var(--theme-text-secondary)',
                      border: `1px solid ${isActive ? 'transparent' : 'var(--theme-tag-border)'}`,
                    }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* === Project grid === */}
          <div className="work-grid" role="list" aria-label="Projects">
            {filtered.map((project, i) => (
              <div key={project.id} role="listitem">
                <ProjectCard project={project} index={i} />
              </div>
            ))}
          </div>

          {/* === Empty state === */}
          {filtered.length === 0 && (
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: '1rem',
                color: 'var(--theme-text-dimmed)',
                textAlign: 'center',
                padding: '4rem 0',
                transition: 'color 400ms ease',
              }}
            >
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
