'use client';

import { useRef, useCallback, type CSSProperties } from 'react';
import {
  Card,
  Grid,
  Stack,
} from '@/components/atoms';
import { ScrollReveal } from '@/components/animations';
import { designTokens } from '@/themes/tokens';
import {
  Stack as PhStack,
  Robot,
  BracketsCurly,
  PenNib,
  Lightning,
  UsersFour,
} from '@phosphor-icons/react';

/* === Types === */

interface Skill {
  icon: React.ComponentType<{ size?: number; weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'; color?: string }>;
  title: string;
  description: string;
  featured: boolean;
}

export interface SkillsSectionProps {
  /** Plain prefix of the heading (e.g. "What I") */
  headingPrefix?: string;
  /** Gold-accented word in the heading (e.g. "Bring") */
  heading?: string;
  /** Tagline displayed opposite the heading */
  tagline?: string;
  /** Gold-accented word within the tagline */
  taglineAccent?: string;
  /** Skills data array */
  skills?: Skill[];
}

/* === Default data === */

const defaultSkills: Skill[] = [
  {
    icon: PhStack,
    title: 'Design Systems',
    description:
      'Building scalable component libraries and design tokens that ensure consistency across products.',
    featured: false,
  },
  {
    icon: Robot,
    title: 'AI-Augmented Development',
    description:
      'Leveraging Claude, Cursor, and AI tools to bridge the gap between design and working code.',
    featured: true,
  },
  {
    icon: BracketsCurly,
    title: 'Frontend Development',
    description:
      'React, TypeScript, and modern web technologies to ship functional prototypes and products.',
    featured: false,
  },
  {
    icon: PenNib,
    title: 'UX/UI Design',
    description:
      'End-to-end product design from research and wireframes to high-fidelity prototypes.',
    featured: false,
  },
  {
    icon: Lightning,
    title: 'Rapid Prototyping',
    description:
      'Framer, Figma prototypes, and coded prototypes to validate ideas quickly with real users.',
    featured: false,
  },
  {
    icon: UsersFour,
    title: 'User Research',
    description:
      'Interviews, usability testing, and competitive analysis to ground design decisions in evidence.',
    featured: false,
  },
];

/* === Tokens === */

const { typography, colors } = designTokens;

const goldGradientText: CSSProperties = {
  backgroundImage: `linear-gradient(135deg, var(--theme-gold-from), var(--theme-gold-to))`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

/* === Animation styles === */

const skillCardStyles = `
@media (max-width: 600px) {
  .skills-tagline {
    text-align: left !important;
    max-width: 100% !important;
  }
}

@keyframes skillShimmer {
  0% { transform: translateX(-100%) rotate(15deg); }
  100% { transform: translateX(200%) rotate(15deg); }
}

@keyframes iconFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

.skill-card {
  position: relative;
  overflow: hidden;
  cursor: default;
}

/* Shimmer overlay */
.skill-card::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 60%;
  height: 200%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(212, 175, 55, 0.06) 40%,
    rgba(212, 175, 55, 0.12) 50%,
    rgba(212, 175, 55, 0.06) 60%,
    transparent 100%
  );
  transform: translateX(-100%) rotate(15deg);
  pointer-events: none;
  z-index: 1;
}

.skill-card:hover::after {
  animation: skillShimmer 800ms ease-out forwards;
}

.skill-card:hover .skill-icon-wrap {
  animation: iconFloat 1.5s ease-in-out infinite;
}

.skill-card:hover .skill-icon-wrap {
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.3), 0 0 40px rgba(212, 175, 55, 0.1);
  background-color: rgba(212, 175, 55, 0.15);
}

.skill-card:hover .skill-title {
  background-image: linear-gradient(135deg, var(--theme-gold-from), var(--theme-gold-to));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (hover: none) {
  .skill-card::after { display: none; }
}
`;

/* === Component === */

export function SkillsSection({
  headingPrefix = 'What I',
  heading = 'Bring',
  tagline = 'A comprehensive look at the skills and expertise I bring to every',
  taglineAccent = 'project.',
  skills = defaultSkills,
}: SkillsSectionProps): React.ReactElement {
  return (
    <>
      <style>{skillCardStyles}</style>
      <section
        id="skills"
        aria-labelledby="skills-heading"
        style={{
          width: '100%',
          padding: 'clamp(2rem, 6vh, 4rem) clamp(1.5rem, 6vw, 6rem)',
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
          {/* Section header — matches ProjectShowcase pattern */}
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
                id="skills-heading"
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
                className="skills-tagline"
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
                  }}
                >
                  {taglineAccent}
                </span>
              </p>
            </div>
          </ScrollReveal>

          {/* Card grid */}
          <Grid gutter="md">
            {skills.map((skill, index) => (
              <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={skill.title}>
                <ScrollReveal direction="up" delay={0.1 + index * 0.08}>
                  <SkillCard skill={skill} />
                </ScrollReveal>
              </Grid.Col>
            ))}
          </Grid>
        </div>
      </section>
    </>
  );
}

/* === Skill Card === */

function SkillCard({ skill }: { skill: Skill }) {
  const IconComponent = skill.icon;
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0px)';
    }
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        willChange: 'transform',
        transition: 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <Card
        p="lg"
        h="100%"
        className="skill-card"
        style={{
          backgroundColor: 'var(--theme-card-bg)',
          transition: 'background-color 400ms ease, box-shadow 350ms ease',
        }}
      >
        <Stack gap="md" style={{ position: 'relative', zIndex: 2 }}>
          <div
            className="skill-icon-wrap"
            style={{
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '12px',
              backgroundColor: 'rgba(212, 175, 55, 0.1)',
              transition: 'box-shadow 350ms ease, background-color 350ms ease',
            }}
          >
            <IconComponent size={26} weight="duotone" color="var(--theme-gold)" />
          </div>

          <h3
            className="skill-title"
            style={{
              fontFamily: typography.fontFamily.heading,
              fontSize: '1rem',
              fontWeight: 700,
              color: 'var(--theme-text)',
              margin: 0,
              transition: 'color 400ms ease',
            }}
          >
            {skill.title}
          </h3>

          <p
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: '0.875rem',
              lineHeight: 1.6,
              color: 'var(--theme-text-dimmed)',
              margin: 0,
              transition: 'color 400ms ease',
            }}
          >
            {skill.description}
          </p>
        </Stack>
      </Card>
    </div>
  );
}
