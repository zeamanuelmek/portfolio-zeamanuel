'use client';

import { useState } from 'react';
import {
  Text,
  Divider,
} from '@/components/atoms';
import { ScrollReveal } from '@/components/animations';
import { designTokens } from '@/themes/tokens';

/* === Types === */

export interface FooterProps {
  /** Logo letter displayed in the gold circle */
  logoText?: string;
  /** Social links */
  socialLinks?: { label: string; href: string }[];
  /** Name for copyright text */
  copyrightName?: string;
  /** Tagline displayed in the footer */
  tagline?: string;
  /** Email address */
  email?: string;
}

/* === Default data === */

const defaultSocialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zeamanuel-ayalew-0280561b5' },
  { label: 'Instagram', href: 'https://www.instagram.com/semenawerk_?igsh=MnQ5OTNpbWppbnJl' },
  { label: 'GitHub', href: 'https://github.com/zeamanuelmek' },
  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~01776b30fd514e79b5?mp_source=share' },
];

const { typography, colors } = designTokens;

/* === Component === */

export function Footer({
  logoText = 'Z',
  socialLinks = defaultSocialLinks,
  copyrightName = 'Zeamanuel Ayalew',
  tagline = 'Designing with purpose, building with precision.',
  email = 'zeamekonnen@gmail.com',
}: FooterProps): React.ReactElement {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <footer
      style={{
        width: '100%',
        padding: 'clamp(3rem, 6vh, 5rem) clamp(1.5rem, 6vw, 6rem) clamp(1.5rem, 3vh, 2.5rem)',
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
        {/* Top: Logo + tagline row */}
        <ScrollReveal direction="up" delay={0.1}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 16,
              marginBottom: 24,
            }}
          >
            {/* Logo */}
            <a
              href="#"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: colors.brand.gold,
                color: colors.background.dark,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: typography.fontFamily.heading,
                fontWeight: 700,
                fontSize: 16,
                textDecoration: 'none',
                flexShrink: 0,
              }}
            >
              {logoText}
            </a>

            {/* Tagline */}
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: '0.8125rem',
                color: 'var(--theme-text-dimmed)',
                margin: 0,
                fontStyle: 'italic',
                transition: 'color 400ms ease',
              }}
            >
              {tagline}
            </p>
          </div>
        </ScrollReveal>

        {/* Gold gradient divider */}
        <ScrollReveal direction="up" delay={0.15}>
          <Divider goldGradient />
        </ScrollReveal>

        {/* Bottom: Social links + email + copyright */}
        <ScrollReveal direction="up" delay={0.2}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px 24px',
              marginTop: 20,
            }}
          >
            {/* Social links */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '8px 20px',
              }}
            >
              {socialLinks.map((link, index) => (
                <span key={link.label} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: typography.fontFamily.body,
                      fontSize: '0.8125rem',
                      color:
                        hoveredLink === link.label
                          ? 'var(--theme-gold)'
                          : 'var(--theme-text-dimmed)',
                      textDecoration: 'none',
                      transition: 'color 200ms ease',
                      letterSpacing: '0.01em',
                    }}
                    onMouseEnter={() => setHoveredLink(link.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.label}
                  </a>
                  {index < socialLinks.length - 1 && (
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

            {/* Email + copyright */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                flexWrap: 'wrap',
              }}
            >
              <a
                href={`mailto:${email}`}
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: '0.8125rem',
                  color: 'var(--theme-gold)',
                  textDecoration: 'none',
                  transition: 'opacity 200ms ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.7';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                {email}
              </a>
              <Text
                size="xs"
                style={{
                  color: 'var(--theme-text-dimmed)',
                  transition: 'color 400ms ease',
                  opacity: 0.6,
                }}
              >
                © {new Date().getFullYear()} {copyrightName}
              </Text>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
