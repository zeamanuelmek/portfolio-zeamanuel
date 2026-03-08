'use client';

import { type CSSProperties } from 'react';
import {
  Input,
  TextArea,
  Stack,
  Divider,
} from '@/components/atoms';
import { ScrollReveal, MagneticElement } from '@/components/animations';
import { designTokens } from '@/themes/tokens';
import {
  Button as MantineButton,
  Select as MantineSelect,
} from '@mantine/core';
import {
  IconMail,
  IconBrandLinkedin,
  IconBrandDribbble,
  IconBrandUpwork,
  IconInfoCircle,
} from '@tabler/icons-react';

/* === Tokens === */

const { typography, radius, colors } = designTokens;

const goldGradientText: CSSProperties = {
  backgroundImage: `linear-gradient(135deg, var(--theme-gold-from), var(--theme-gold-to))`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const labelStyle: CSSProperties = {
  color: 'var(--theme-text)',
  transition: 'color 400ms ease',
};

const underlineInput: CSSProperties = {
  borderTop: 'none',
  borderLeft: 'none',
  borderRight: 'none',
  borderBottom: '1px solid var(--theme-accent-line)',
  borderRadius: 0,
  paddingLeft: 0,
  backgroundColor: 'transparent',
  color: 'var(--theme-text)',
  transition: 'border-color 300ms ease, color 400ms ease',
};

/* === Styles === */

const contactPageStyles = `
.contact-layout {
  display: flex;
  flex-direction: column;
  gap: clamp(3rem, 6vw, 4rem);
}
@media (min-width: 768px) {
  .contact-layout {
    flex-direction: row;
  }
}
.contact-channel {
  transition: transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease;
}
.contact-channel:hover {
  transform: translateY(-3px);
  box-shadow: var(--theme-card-hover-shadow);
  border-color: ${colors.brand.gold}33;
}
.contact-channel-link {
  text-decoration: none;
  display: block;
}
`;

/* === Channel data === */

const channels = [
  {
    icon: IconMail,
    label: 'Email',
    value: 'hello@zeamanuel.com',
    href: 'mailto:hello@zeamanuel.com',
  },
  {
    icon: IconBrandLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/zeamanuel',
    href: 'https://linkedin.com/in/zeamanuel',
  },
  {
    icon: IconBrandDribbble,
    label: 'Dribbble',
    value: 'dribbble.com/zeamanuel',
    href: 'https://dribbble.com/zeamanuel',
  },
  {
    icon: IconBrandUpwork,
    label: 'Upwork',
    value: 'Hire me on Upwork',
    href: 'https://upwork.com/freelancers/zeamanuel',
  },
];

const projectTypes = [
  'UX Design',
  'Design System',
  'Prototyping',
  'AI Integration',
  'Other',
];

/* === Props === */

export interface ContactPageProps {
  /** Override the page heading */
  heading?: string;
  /** Override the page description */
  description?: string;
}

/* === Component === */

export function ContactPage({
  heading = "Let\u2019s Work Together",
  description = "Whether you need a design system, a prototype, or a full product \u2014 I\u2019m here for it.",
}: ContactPageProps): React.ReactElement {
  return (
    <>
      <style>{contactPageStyles}</style>

      {/* ═══ HEADER ═══ */}
      <section
        style={{
          width: '100%',
          backgroundColor: 'var(--theme-bg)',
          padding: 'clamp(140px, 14vw, 180px) clamp(1.5rem, 6vw, 6rem) clamp(3rem, 6vh, 4rem)',
          transition: 'background-color 400ms ease',
        }}
      >
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <ScrollReveal direction="up" delay={0}>
            <h1
              style={{
                fontFamily: typography.fontFamily.heading,
                fontSize: 'clamp(2rem, 3vw + 0.5rem, 3rem)',
                fontWeight: typography.fontWeight.bold,
                margin: '0 0 12px',
                lineHeight: 1.1,
              }}
            >
              <span style={{ color: 'var(--theme-text)', transition: 'color 400ms ease' }}>
                Let&apos;s Work{' '}
              </span>
              <span style={goldGradientText}>Together</span>
            </h1>

            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: 'clamp(0.9375rem, 0.5vw + 0.75rem, 1.0625rem)',
                lineHeight: 1.6,
                color: 'var(--theme-text-dimmed)',
                margin: '0 0 20px',
                maxWidth: '30rem',
                transition: 'color 400ms ease',
              }}
            >
              {description}
            </p>

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
              Available for Projects
            </span>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ TWO-COLUMN CONTENT ═══ */}
      <section
        style={{
          width: '100%',
          padding: '0 clamp(1.5rem, 6vw, 6rem) clamp(4rem, 8vh, 6rem)',
          transition: 'background-color 400ms ease',
        }}
      >
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <div className="contact-layout">
            {/* LEFT — Contact form */}
            <div style={{ flex: '1.2', minWidth: 0 }}>
              <ScrollReveal direction="up" delay={0.05}>
                <form onSubmit={(e) => e.preventDefault()}>
                  <Stack gap="lg">
                    <Input
                      label="Your Name"
                      placeholder="Dawit Bekele"
                      required
                      variant="unstyled"
                      styles={{ input: underlineInput, label: labelStyle }}
                    />

                    <Input
                      label="Email"
                      placeholder="dawit@company.et"
                      required
                      type="email"
                      variant="unstyled"
                      styles={{ input: underlineInput, label: labelStyle }}
                    />

                    <MantineSelect
                      label="Project Type"
                      placeholder="Select a category"
                      data={projectTypes}
                      variant="unstyled"
                      styles={{
                        input: underlineInput,
                        label: labelStyle,
                      }}
                    />

                    <TextArea
                      label="Tell me about your project"
                      placeholder="What are you building? What's the timeline?"
                      autosize
                      minRows={4}
                      maxRows={8}
                      variant="unstyled"
                      styles={{ input: underlineInput, label: labelStyle }}
                    />

                    <MagneticElement strength={0.25}>
                      <MantineButton
                        color="gold"
                        size="md"
                        radius={9999}
                        fullWidth
                        rightSection={
                          <span style={{ fontSize: 14, marginLeft: 2 }} aria-hidden="true">&#8594;</span>
                        }
                        styles={{
                          root: {
                            fontWeight: 500,
                            fontSize: '0.875rem',
                            height: 44,
                            letterSpacing: '0.01em',
                          },
                        }}
                      >
                        Send Message
                      </MantineButton>
                    </MagneticElement>

                    {/* Info alert */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 10,
                        backgroundColor: 'var(--theme-tag-bg)',
                        border: '1px solid var(--theme-tag-border)',
                        borderRadius: radius.lg,
                        padding: '12px 16px',
                        transition: 'background-color 400ms ease, border-color 400ms ease',
                      }}
                    >
                      <IconInfoCircle
                        size={16}
                        color={colors.brand.gold}
                        style={{ flexShrink: 0, marginTop: 2 }}
                      />
                      <p
                        style={{
                          fontFamily: typography.fontFamily.body,
                          fontSize: typography.fontSize.xs,
                          lineHeight: 1.55,
                          color: 'var(--theme-text-secondary)',
                          margin: 0,
                          transition: 'color 400ms ease',
                        }}
                      >
                        Response within 24 hours. Located in Addis Ababa (EAT, UTC+3).
                      </p>
                    </div>
                  </Stack>
                </form>
              </ScrollReveal>
            </div>

            {/* RIGHT — Direct channels */}
            <div style={{ flex: '0.8', minWidth: 0 }}>
              <ScrollReveal direction="up" delay={0.15}>
                <h2
                  style={{
                    fontFamily: typography.fontFamily.heading,
                    fontSize: 'clamp(1.125rem, 1vw + 0.5rem, 1.375rem)',
                    fontWeight: typography.fontWeight.semibold,
                    color: 'var(--theme-text)',
                    margin: '0 0 clamp(1.25rem, 2vh, 1.75rem)',
                    transition: 'color 400ms ease',
                  }}
                >
                  Or reach me directly
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {channels.map((channel) => {
                    const ChannelIcon = channel.icon;
                    return (
                      <a
                        key={channel.label}
                        href={channel.href}
                        target={channel.href.startsWith('mailto') ? undefined : '_blank'}
                        rel={channel.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                        className="contact-channel-link"
                      >
                        <div
                          className="contact-channel"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 14,
                            backgroundColor: 'var(--theme-card-bg)',
                            border: '1px solid var(--theme-card-border)',
                            borderRadius: radius.xl,
                            padding: '14px 18px',
                            boxShadow: 'var(--theme-card-shadow)',
                          }}
                        >
                          <div
                            style={{
                              width: 36,
                              height: 36,
                              borderRadius: radius.lg,
                              backgroundColor: `${colors.brand.gold}14`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            <ChannelIcon size={18} color={colors.brand.gold} stroke={1.5} />
                          </div>
                          <div style={{ minWidth: 0 }}>
                            <p
                              style={{
                                fontFamily: typography.fontFamily.body,
                                fontSize: typography.fontSize.xs,
                                fontWeight: typography.fontWeight.medium,
                                color: 'var(--theme-text-dimmed)',
                                margin: '0 0 2px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.06em',
                                transition: 'color 400ms ease',
                              }}
                            >
                              {channel.label}
                            </p>
                            <p
                              style={{
                                fontFamily: typography.fontFamily.body,
                                fontSize: typography.fontSize.sm,
                                fontWeight: typography.fontWeight.medium,
                                color: 'var(--theme-gold)',
                                margin: 0,
                                transition: 'color 400ms ease',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                              }}
                            >
                              {channel.value}
                            </p>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Habesha divider */}
                <div style={{ margin: 'clamp(1.5rem, 3vh, 2rem) 0' }}>
                  <Divider habesha />
                </div>

                <p
                  style={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize.sm,
                    color: 'var(--theme-text-dimmed)',
                    margin: 0,
                    transition: 'color 400ms ease',
                  }}
                >
                  Working hours: Mon–Fri, 9am–6pm EAT
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
