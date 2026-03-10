'use client';

import { useState, useEffect, useRef, type CSSProperties } from 'react';
import { designTokens } from '@/themes/tokens';
import { getFeaturedProjects } from '@/data';
import { ProjectCardWide } from '@/components/molecules/ProjectCardWide';
import { CustomCursor } from '@/components/molecules/CustomCursor';

/* === Types === */

export interface Project {
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  description: string;
  href: string;
  mockupType: 'browser' | 'mobile';
}

export interface ProjectShowcaseProps {
  /** Section heading -- the accented word */
  heading?: string;
  /** Section heading -- the plain prefix */
  headingPrefix?: string;
  /** Tagline displayed opposite the heading */
  tagline?: string;
  /** The accented word within the tagline (rendered in gold) */
  taglineAccent?: string;
  /** Projects to display */
  projects?: Project[];
}

/* === Tokens === */

const { typography, colors } = designTokens;

const goldGradientText: CSSProperties = {
  backgroundImage: `linear-gradient(135deg, var(--theme-gold-from), var(--theme-gold-to))`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

/* === Default project data === */

const defaultProjects: Project[] = getFeaturedProjects().map((p) => ({
  title: p.title,
  subtitle: p.subtitle,
  image: p.thumbnail,
  tags: p.tags,
  description: p.description,
  href: `/work/${p.id}`,
  mockupType: p.category === 'mobile-app' ? 'mobile' as const : 'browser' as const,
}));

/* === Scroll transition variants === */

const transitionVariants = ['fade-up', 'slide-left', 'scale-up', 'slide-right'] as const;

function getHiddenTransform(variant: string): string {
  switch (variant) {
    case 'slide-left': return 'translateX(-60px)';
    case 'slide-right': return 'translateX(60px)';
    case 'scale-up': return 'scale(0.92)';
    case 'fade-up':
    default: return 'translateY(40px)';
  }
}

/* === ScrollReveal with variant === */

function ScrollReveal({
  children,
  delay = 0,
  variant = 'fade-up',
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  variant?: string;
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
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate(0, 0) scale(1)' : getHiddenTransform(variant),
        transition: `opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* === Styles === */

const showcaseStyles = `
.showcase-section {
  transition: background-color 400ms ease;
}

.wide-card:hover {
  box-shadow: var(--theme-card-hover-shadow) !important;
  border-color: ${colors.brand.gold}33 !important;
}
.wide-card:hover .wide-card-img {
  transform: scale(1.03);
}
.wide-card:hover .wide-card-title {
  color: var(--theme-gold) !important;
}

@media (min-width: 768px) {
  .wide-card {
    grid-template-columns: 55% 1fr !important;
  }
  .wide-card .wide-card-content-order {
    order: 0 !important;
  }
  .wide-card .wide-card-mockup-order {
    order: 1 !important;
  }
}

/* Alternate layout: even cards flip mockup to left */
@media (min-width: 768px) {
  .wide-card-alt {
    grid-template-columns: 1fr 55% !important;
  }
  .wide-card-alt .wide-card-content-order {
    order: 1 !important;
  }
  .wide-card-alt .wide-card-mockup-order {
    order: 0 !important;
  }
}

/* Album art panels: only visible on wide screens */
.album-art-panel {
  display: none !important;
}
@media (min-width: 1280px) {
  .album-art-panel {
    display: flex !important;
  }
}

/* Section header tagline: left-align when it wraps on mobile */
@media (max-width: 600px) {
  .showcase-tagline {
    text-align: left !important;
    max-width: 100% !important;
  }
}

/* Touch devices: restore cursor on cards */
@media (hover: none) {
  .wide-card {
    cursor: auto !important;
  }
}
`;

/* === Main Component === */

export function ProjectShowcase({
  headingPrefix = 'Project',
  heading = 'Showcase',
  tagline = "In today\u2019s crowded digital world, it\u2019s not about being louder, it\u2019s about being",
  taglineAccent = 'sharper.',
  projects = defaultProjects,
}: ProjectShowcaseProps): React.ReactElement {
  const [cursorActive, setCursorActive] = useState(false);

  return (
    <>
      <style>{showcaseStyles}</style>
      <CustomCursor active={cursorActive} />

      <section
        id="work"
        aria-labelledby="showcase-heading"
        className="showcase-section"
        style={{
          width: '100%',
          padding: 'clamp(2rem, 6vh, 4rem) clamp(1.5rem, 6vw, 6rem)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          style={{
            maxWidth: '56rem',
            width: '100%',
            margin: '0 auto',
          }}
        >
          {/* -- Section header -- */}
          <ScrollReveal>
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
              {/* Heading */}
              <h2
                id="showcase-heading"
                style={{
                  fontFamily: typography.fontFamily.heading,
                  fontSize: 'clamp(1.75rem, 3vw + 0.5rem, 2.75rem)',
                  fontWeight: 700,
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                <span style={{ color: 'var(--theme-text)', transition: 'color 400ms ease' }}>
                  {headingPrefix}{' '}
                </span>
                <span style={goldGradientText}>{heading}</span>
              </h2>

              {/* Tagline */}
              <p
                className="showcase-tagline"
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: 'clamp(0.8125rem, 0.5vw + 0.65rem, 0.875rem)',
                  color: 'var(--theme-text-secondary)',
                  margin: 0,
                  maxWidth: '22rem',
                  lineHeight: 1.55,
                  textAlign: 'right',
                  transition: 'color 400ms ease',
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

          {/* -- Project cards (stacked, full-width) -- */}
          <div
            role="list"
            aria-label="Featured projects"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(2rem, 4vw, 3.5rem)',
            }}
          >
            {projects.map((project, i) => (
              <div key={`${project.title}-${i}`} role="listitem">
                <ScrollReveal
                  variant={transitionVariants[i % transitionVariants.length]}
                  delay={i * 60}
                >
                  <ProjectCardWide
                    title={project.title}
                    subtitle={project.subtitle}
                    description={project.description}
                    tags={project.tags}
                    image={project.image}
                    href={project.href}
                    mockupType={project.mockupType}
                    alternate={i % 2 === 1}
                    onHoverStart={() => setCursorActive(true)}
                    onHoverEnd={() => setCursorActive(false)}
                  />
                </ScrollReveal>
              </div>
            ))}
          </div>

          {/* -- View All Work link -- */}
          <ScrollReveal
            delay={200}
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 'clamp(2.5rem, 5vh, 4rem)',
            }}
          >
            <a
              href="/work"
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--theme-gold)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 24px',
                borderRadius: '9999px',
                border: `1px solid ${colors.brand.gold}4D`,
                transition: 'border-color 300ms ease, background-color 300ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${colors.brand.gold}80`;
                e.currentTarget.style.backgroundColor = `${colors.brand.gold}08`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${colors.brand.gold}4D`;
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              View All Work
              <span aria-hidden="true">&#8594;</span>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
