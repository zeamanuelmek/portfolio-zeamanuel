'use client';

import { type CSSProperties } from 'react';
import { designTokens } from '@/themes/tokens';
import { ScrollReveal } from '@/components/animations';
import { Divider } from '@/components/atoms';
import {
  IconPalette,
  IconCode,
  IconBulb,
  IconRobot,
  IconSearch,
  IconComponents,
  IconBrandFigma,
  IconLayoutGrid,
  IconHeart,
  IconTargetArrow,
  IconMessages,
} from '@tabler/icons-react';

/* === Tokens === */

const { typography, radius, colors, shadows } = designTokens;

const goldGradientText: CSSProperties = {
  backgroundImage: `linear-gradient(135deg, var(--theme-gold-from), var(--theme-gold-to))`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

/* === Styles === */

const aboutStyles = `
.about-photo {
  transition: box-shadow 400ms ease, transform 400ms ease;
}
.about-photo:hover {
  box-shadow: ${shadows.goldGlowHover};
  transform: translateY(-4px);
}
.about-intro-layout {
  display: flex;
  flex-direction: column;
  gap: clamp(2.5rem, 5vw, 4rem);
  align-items: center;
}
@media (min-width: 768px) {
  .about-intro-layout {
    flex-direction: row;
    align-items: flex-start;
  }
}
.about-skill-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(1rem, 2vw, 1.5rem);
}
@media (min-width: 768px) {
  .about-skill-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
.about-skill-card {
  transition: transform 300ms ease, box-shadow 300ms ease;
}
.about-skill-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--theme-card-hover-shadow);
}
.about-exp-layout {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
@media (min-width: 640px) {
  .about-exp-layout {
    flex-direction: row;
    gap: clamp(2rem, 4vw, 4rem);
  }
}
.about-values-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1rem, 2vw, 1.5rem);
}
@media (min-width: 768px) {
  .about-values-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.about-value-card {
  transition: transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease;
}
.about-value-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.4);
  border-color: ${colors.brand.gold}4D;
}
.about-social-link {
  text-decoration: none;
  transition: color 200ms ease, opacity 200ms ease;
}
.about-social-link:hover {
  opacity: 0.7;
}
`;

/* === Data === */

const skills = [
  { icon: IconPalette, name: 'UX Design', desc: 'User-centered interfaces' },
  { icon: IconLayoutGrid, name: 'Design Systems', desc: 'Scalable component libraries' },
  { icon: IconBrandFigma, name: 'Figma', desc: 'Prototyping & handoff' },
  { icon: IconCode, name: 'React / Next.js', desc: 'Production frontend code' },
  { icon: IconRobot, name: 'AI Integration', desc: 'LLM-augmented workflows' },
  { icon: IconBulb, name: 'Prototyping', desc: 'Interactive concept validation' },
  { icon: IconSearch, name: 'User Research', desc: 'Interviews, testing, synthesis' },
  { icon: IconComponents, name: 'Component Libraries', desc: 'Mantine, Tailwind, Storybook' },
];

const experience = [
  {
    year: '2024 — Present',
    role: 'Lead Product Designer',
    company: 'OMOC',
    desc: 'Redesigning a two-sided social commerce marketplace — seller dashboard, buyer mobile app, and end-to-end design system across web, iOS, and Android.',
  },
  {
    year: '2025',
    role: 'UX/UI Designer',
    company: 'Ablenee',
    desc: 'Designed a WCAG AA-compliant accessibility platform connecting people with disabilities to services and opportunities in Ethiopia.',
  },
  {
    year: '2025',
    role: 'UX/UI Designer',
    company: 'DH',
    desc: 'Enhancing an iOS task management app with intuitive task flows, team collaboration features, and design system consistency.',
  },
  {
    year: '2025',
    role: 'Product Designer',
    company: 'Outcast',
    desc: 'Building a mobile community app for Ethiopian creatives — musicians, artists, and designers — to collaborate and showcase work.',
  },
];

const values = [
  {
    icon: IconHeart,
    name: 'Human-First Design',
    desc: 'Every pixel serves a person. I start with empathy, end with impact, and measure success by how people feel using the product.',
  },
  {
    icon: IconTargetArrow,
    name: 'Ship, Then Iterate',
    desc: 'Perfect is the enemy of shipped. I believe in rapid prototyping, real-world testing, and continuous refinement over endless polishing.',
  },
  {
    icon: IconMessages,
    name: 'Bridge the Gap',
    desc: 'I speak both design and code. The best products come from tight loops between designers and engineers — no walls, no handoff friction.',
  },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/zeamanuel' },
  { label: 'Dribbble', href: 'https://dribbble.com/zeamanuel' },
  { label: 'Behance', href: 'https://behance.net/zeamanuel' },
];

/* === Props === */

export interface AboutPageProps {
  /** Override the bio text */
  bio?: string;
  /** Profile image path */
  profileImage?: string;
}

/* === Component === */

export function AboutPage({
  bio = "I\u2019m Zeamanuel Alemu, a UX Systems Designer based in Addis Ababa, Ethiopia. I bridge the gap between design vision and engineering reality \u2014 building design systems, interactive prototypes, and AI-augmented products that actually ship.",
  profileImage = '/images/profile.jpg',
}: AboutPageProps): React.ReactElement {
  return (
    <>
      <style>{aboutStyles}</style>

      {/* ═══ INTRO SECTION ═══ */}
      <section
        style={{
          width: '100%',
          backgroundColor: 'var(--theme-bg)',
          padding: 'clamp(140px, 14vw, 180px) clamp(1.5rem, 6vw, 6rem) clamp(4rem, 8vh, 6rem)',
          transition: 'background-color 400ms ease',
        }}
      >
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <ScrollReveal direction="up" delay={0}>
            <div className="about-intro-layout">
              {/* Photo */}
              <div style={{ flexShrink: 0 }}>
                <div
                  className="about-photo"
                  style={{
                    width: 'clamp(200px, 20vw + 80px, 280px)',
                    aspectRatio: '1',
                    borderRadius: radius.xl,
                    overflow: 'hidden',
                    border: `2px solid ${colors.brand.gold}`,
                    boxShadow: shadows.goldGlow,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={profileImage}
                    alt="Zeamanuel Alemu"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.style.background = `linear-gradient(135deg, ${colors.brand.gold}22, ${colors.brand.earth}22)`;
                      }
                    }}
                  />
                </div>
              </div>

              {/* Bio content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <h1
                  style={{
                    fontFamily: typography.fontFamily.heading,
                    fontSize: 'clamp(2rem, 3vw + 0.5rem, 3rem)',
                    fontWeight: typography.fontWeight.bold,
                    margin: '0 0 6px',
                    lineHeight: 1.1,
                    color: 'var(--theme-text)',
                    transition: 'color 400ms ease',
                  }}
                >
                  Zeamanuel{' '}
                  <span style={goldGradientText}>Alemu</span>
                </h1>

                <p
                  style={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: 'clamp(1rem, 0.5vw + 0.75rem, 1.25rem)',
                    color: 'var(--theme-text-dimmed)',
                    margin: '0 0 clamp(1.25rem, 2vh, 2rem)',
                    transition: 'color 400ms ease',
                  }}
                >
                  UX Systems Designer
                </p>

                <p
                  style={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: 'clamp(0.9375rem, 0.5vw + 0.75rem, 1.0625rem)',
                    lineHeight: 1.75,
                    color: 'var(--theme-text-secondary)',
                    margin: '0 0 clamp(1.5rem, 3vh, 2.5rem)',
                    maxWidth: '36rem',
                    transition: 'color 400ms ease',
                  }}
                >
                  {bio}
                </p>

                {/* Social + availability row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '16px 24px',
                  }}
                >
                  {/* Social links */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    {socialLinks.map((link, i) => (
                      <span key={link.label} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="about-social-link"
                          style={{
                            fontFamily: typography.fontFamily.body,
                            fontSize: typography.fontSize.sm,
                            fontWeight: typography.fontWeight.medium,
                            color: 'var(--theme-gold)',
                          }}
                        >
                          {link.label}
                        </a>
                        {i < socialLinks.length - 1 && (
                          <span
                            style={{
                              width: 3,
                              height: 3,
                              borderRadius: '50%',
                              backgroundColor: 'var(--theme-accent-line)',
                              flexShrink: 0,
                            }}
                          />
                        )}
                      </span>
                    ))}
                  </div>

                  {/* Availability badge */}
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      fontFamily: typography.fontFamily.body,
                      fontSize: typography.fontSize.xs,
                      fontWeight: typography.fontWeight.medium,
                      color: colors.brand.forest,
                      backgroundColor: `${colors.brand.forest}12`,
                      border: `1px solid ${colors.brand.forest}33`,
                      borderRadius: radius.full,
                      padding: '4px 14px',
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: colors.brand.forest,
                      }}
                    />
                    Available for projects
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SKILLS SECTION ═══ */}
      <section
        style={{
          width: '100%',
          backgroundColor: 'var(--theme-bg-page)',
          padding: 'clamp(3rem, 6vh, 5rem) clamp(1.5rem, 6vw, 6rem)',
          transition: 'background-color 400ms ease',
        }}
      >
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <ScrollReveal direction="up" delay={0}>
            <h2
              style={{
                fontFamily: typography.fontFamily.heading,
                fontSize: 'clamp(1.5rem, 2vw + 0.5rem, 2rem)',
                fontWeight: typography.fontWeight.bold,
                margin: '0 0 clamp(2rem, 4vh, 3rem)',
                lineHeight: 1.2,
              }}
            >
              <span style={{ color: 'var(--theme-text)', transition: 'color 400ms ease' }}>
                What I{' '}
              </span>
              <span style={goldGradientText}>Do</span>
            </h2>
          </ScrollReveal>

          <div className="about-skill-grid">
            {skills.map((skill, i) => {
              const SkillIcon = skill.icon;
              return (
                <ScrollReveal key={skill.name} direction="up" delay={0.06 * i}>
                  <div
                    className="about-skill-card"
                    style={{
                      backgroundColor: 'var(--theme-card-bg)',
                      border: '1px solid var(--theme-card-border)',
                      borderRadius: radius.xl,
                      padding: 'clamp(16px, 2vw, 24px)',
                      boxShadow: 'var(--theme-card-shadow)',
                      transition: 'background-color 400ms ease, border-color 400ms ease, box-shadow 400ms ease',
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: radius.lg,
                        backgroundColor: `${colors.brand.gold}14`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 12,
                      }}
                    >
                      <SkillIcon size={20} color={colors.brand.gold} stroke={1.5} />
                    </div>
                    <h3
                      style={{
                        fontFamily: typography.fontFamily.heading,
                        fontSize: typography.fontSize.sm,
                        fontWeight: typography.fontWeight.semibold,
                        color: 'var(--theme-text)',
                        margin: '0 0 4px',
                        transition: 'color 400ms ease',
                      }}
                    >
                      {skill.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: typography.fontFamily.body,
                        fontSize: typography.fontSize.xs,
                        color: 'var(--theme-text-dimmed)',
                        margin: 0,
                        lineHeight: 1.5,
                        transition: 'color 400ms ease',
                      }}
                    >
                      {skill.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ EXPERIENCE SECTION ═══ */}
      <section
        style={{
          width: '100%',
          backgroundColor: 'var(--theme-bg)',
          padding: 'clamp(3rem, 6vh, 5rem) clamp(1.5rem, 6vw, 6rem)',
          transition: 'background-color 400ms ease',
        }}
      >
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <ScrollReveal direction="up" delay={0}>
            <h2
              style={{
                fontFamily: typography.fontFamily.heading,
                fontSize: 'clamp(1.5rem, 2vw + 0.5rem, 2rem)',
                fontWeight: typography.fontWeight.bold,
                margin: '0 0 clamp(2rem, 4vh, 3rem)',
                lineHeight: 1.2,
              }}
            >
              <span style={{ color: 'var(--theme-text)', transition: 'color 400ms ease' }}>
                Experience
              </span>
            </h2>
          </ScrollReveal>

          <div style={{ maxWidth: '48rem' }}>
            {experience.map((exp, i) => (
              <ScrollReveal key={`${exp.company}-${exp.year}`} direction="up" delay={0.08 * i}>
                <div>
                  <div className="about-exp-layout">
                    {/* Year */}
                    <p
                      style={{
                        fontFamily: typography.fontFamily.mono,
                        fontSize: typography.fontSize.sm,
                        fontWeight: typography.fontWeight.medium,
                        color: 'var(--theme-gold)',
                        margin: 0,
                        whiteSpace: 'nowrap',
                        minWidth: 130,
                        flexShrink: 0,
                        transition: 'color 400ms ease',
                      }}
                    >
                      {exp.year}
                    </p>

                    {/* Details */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p
                        style={{
                          fontFamily: typography.fontFamily.heading,
                          fontSize: 'clamp(0.9375rem, 0.5vw + 0.75rem, 1.0625rem)',
                          fontWeight: typography.fontWeight.semibold,
                          color: 'var(--theme-text)',
                          margin: '0 0 2px',
                          transition: 'color 400ms ease',
                        }}
                      >
                        {exp.role}
                      </p>
                      <p
                        style={{
                          fontFamily: typography.fontFamily.body,
                          fontSize: typography.fontSize.sm,
                          color: 'var(--theme-text-dimmed)',
                          margin: '0 0 8px',
                          transition: 'color 400ms ease',
                        }}
                      >
                        {exp.company}
                      </p>
                      <p
                        style={{
                          fontFamily: typography.fontFamily.body,
                          fontSize: typography.fontSize.sm,
                          lineHeight: 1.65,
                          color: 'var(--theme-text-secondary)',
                          margin: 0,
                          transition: 'color 400ms ease',
                        }}
                      >
                        {exp.desc}
                      </p>
                    </div>
                  </div>

                  {/* Divider between items */}
                  {i < experience.length - 1 && (
                    <div style={{ margin: 'clamp(1.5rem, 3vh, 2rem) 0' }}>
                      <Divider />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VALUES SECTION ═══ */}
      <section
        style={{
          width: '100%',
          backgroundColor: colors.background.dark,
          padding: 'clamp(3rem, 6vh, 5rem) clamp(1.5rem, 6vw, 6rem)',
        }}
      >
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <ScrollReveal direction="up" delay={0}>
            <h2
              style={{
                fontFamily: typography.fontFamily.heading,
                fontSize: 'clamp(1.5rem, 2vw + 0.5rem, 2rem)',
                fontWeight: typography.fontWeight.bold,
                margin: '0 0 clamp(2rem, 4vh, 3rem)',
                lineHeight: 1.2,
              }}
            >
              <span style={{ color: colors.text.onDark }}>How I </span>
              <span style={goldGradientText}>Work</span>
            </h2>
          </ScrollReveal>

          <div className="about-values-grid">
            {values.map((val, i) => {
              const ValIcon = val.icon;
              return (
                <ScrollReveal key={val.name} direction="up" delay={0.08 * i}>
                  <div
                    className="about-value-card"
                    style={{
                      backgroundColor: `rgba(255,255,255,0.04)`,
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: `1px solid rgba(255,255,255,0.08)`,
                      borderRadius: radius.xl,
                      padding: 'clamp(20px, 3vw, 32px)',
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: radius.lg,
                        backgroundColor: `${colors.brand.gold}18`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 16,
                      }}
                    >
                      <ValIcon size={22} color={colors.brand.gold} stroke={1.5} />
                    </div>
                    <h3
                      style={{
                        fontFamily: typography.fontFamily.heading,
                        fontSize: 'clamp(1rem, 0.5vw + 0.75rem, 1.125rem)',
                        fontWeight: typography.fontWeight.semibold,
                        color: colors.text.onDark,
                        margin: '0 0 8px',
                      }}
                    >
                      {val.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: typography.fontFamily.body,
                        fontSize: typography.fontSize.sm,
                        lineHeight: 1.65,
                        color: colors.text.sand,
                        opacity: 0.7,
                        margin: 0,
                      }}
                    >
                      {val.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
