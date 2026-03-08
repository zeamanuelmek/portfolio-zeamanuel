'use client';

import { useState, type CSSProperties } from 'react';
import {
  Text,
  Input,
  TextArea,
  Badge,
  Grid,
  Stack,
  Group,
} from '@/components/atoms';
import { ScrollReveal, MagneticElement } from '@/components/animations';
import { designTokens } from '@/themes/tokens';
import { Button as MantineButton } from '@mantine/core';

/* === Types === */

export interface ContactSectionProps {
  /** Main heading — plain prefix before the gold accent */
  headingPrefix?: string;
  /** Gold-accented word(s) in the heading */
  headingAccent?: string;
  /** Continuation after the accent */
  headingSuffix?: string;
  /** Subtitle below the heading */
  subtitle?: string;
  /** Service chip options */
  services?: string[];
  /** Submit button label */
  submitLabel?: string;
  /** Response time text next to button */
  responseTimeText?: string;
}

/* === Default data === */

const defaultServices = [
  'UX/UI Design',
  'Design Systems',
  'Frontend Development',
  'Branding',
  'Rapid Prototyping',
  'User Research',
];

/* === Tokens === */

const { typography } = designTokens;

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

/* === Component === */

export function ContactSection({
  headingAccent = 'Say Hi!',
  headingPrefix = '',
  headingSuffix = ' and tell me about\nyour idea',
  subtitle = 'Have a project in mind? Reach out and let\u2019s chat.',
  services = defaultServices,
  submitLabel = 'Send Me',
  responseTimeText = 'I\u2019ll get back to you within 24 hours',
}: ContactSectionProps): React.ReactElement {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
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
        {/* Section header — matches ProjectShowcase/SkillsSection pattern */}
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
            <h2
              id="contact-heading"
              style={{
                fontFamily: typography.fontFamily.heading,
                fontSize: 'clamp(1.75rem, 3vw + 0.5rem, 2.75rem)',
                fontWeight: 700,
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              <span style={{ color: 'var(--theme-text)', transition: 'color 400ms ease' }}>
                {headingPrefix}
              </span>
              <span style={goldGradientText}>{headingAccent}</span>
              <span
                style={{
                  color: 'var(--theme-text)',
                  transition: 'color 400ms ease',
                  whiteSpace: 'pre-line',
                }}
              >
                {headingSuffix}
              </span>
            </h2>

            <p
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
              {subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* TODO: Wire up form submission — Formspree, EmailJS, or Next.js API route */}
        <ScrollReveal direction="up" delay={0.2}>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ maxWidth: 640, margin: '0 auto' }}
          >
            <Stack gap="lg">
              {/* Row 1: Name + Email */}
              <Grid gutter="lg">
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <Input
                    label="Name"
                    placeholder="Hello..."
                    required
                    variant="unstyled"
                    styles={{ input: underlineInput, label: labelStyle }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <Input
                    label="Email"
                    placeholder="Where can I reply"
                    required
                    type="email"
                    variant="unstyled"
                    styles={{ input: underlineInput, label: labelStyle }}
                  />
                </Grid.Col>
              </Grid>

              {/* Row 2: Company name */}
              <Input
                label="Company name"
                placeholder="Your company or website?"
                variant="unstyled"
                styles={{ input: underlineInput, label: labelStyle }}
              />

              {/* Row 3: Service chips */}
              <Stack gap="xs">
                <Text
                  fw={600}
                  size="sm"
                  style={{ color: 'var(--theme-text)', transition: 'color 400ms ease' }}
                >
                  What&apos;s on your mind?
                  <span style={{ color: designTokens.colors.brand.rust }}> *</span>
                </Text>
                <Group gap="xs">
                  {services.map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        style={{
                          all: 'unset',
                          cursor: 'pointer',
                        }}
                      >
                        <Badge
                          variant={isSelected ? 'filled' : 'default'}
                          color={isSelected ? 'gold' : undefined}
                          size="lg"
                          radius="xl"
                          style={{
                            fontWeight: 500,
                            transition: 'all 200ms ease',
                            pointerEvents: 'none',
                            ...(isSelected
                              ? {}
                              : {
                                  backgroundColor: 'var(--theme-tag-bg)',
                                  border: '1px solid var(--theme-tag-border)',
                                  color: 'var(--theme-text-secondary)',
                                }),
                          }}
                        >
                          {service}
                        </Badge>
                      </button>
                    );
                  })}
                </Group>
              </Stack>

              {/* Row 4: Message */}
              <TextArea
                label="Message"
                placeholder="Tell me about your project..."
                autosize
                minRows={3}
                maxRows={6}
                variant="unstyled"
                styles={{ input: underlineInput, label: labelStyle }}
              />

              {/* Row 5: Submit + response time */}
              <Group justify="flex-start" align="center" gap={20} wrap="wrap">
                <MagneticElement strength={0.25}>
                  <MantineButton
                    color="gold"
                    size="sm"
                    radius={9999}
                    rightSection={
                      <span style={{ fontSize: 13, marginLeft: 2 }} aria-hidden="true">→</span>
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
                    {submitLabel}
                  </MantineButton>
                </MagneticElement>
                <Text
                  size="sm"
                  style={{
                    color: 'var(--theme-text-dimmed)',
                    transition: 'color 400ms ease',
                  }}
                >
                  {responseTimeText}
                </Text>
              </Group>
            </Stack>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
