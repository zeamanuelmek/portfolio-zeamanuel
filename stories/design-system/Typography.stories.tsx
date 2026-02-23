import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Text, Title, Box, Group, Paper, Code } from '@mantine/core';

const meta: Meta = {
  title: 'Design System/Typography',
  parameters: {
    layout: 'padded',
  },
};
export default meta;

export const FontFamilies: StoryObj = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl">
        <Title order={2} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Typography System
        </Title>

        <Paper p="xl" radius="lg" withBorder>
          <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" mb="sm">Heading Font</Text>
          <Text size="xl" fw={700} style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}>
            Space Grotesk
          </Text>
          <Text c="#6B6B6B" size="sm" mt="xs">
            Used for all headings, hero text, and display typography.
            Geometric sans-serif with distinctive character.
          </Text>
          <Text mt="md" style={{ fontFamily: "'Space Grotesk', sans-serif" }} size="lg">
            ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
          </Text>
        </Paper>

        <Paper p="xl" radius="lg" withBorder>
          <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" mb="sm">Body Font</Text>
          <Text size="xl" fw={700} style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            Inter
          </Text>
          <Text c="#6B6B6B" size="sm" mt="xs">
            Used for body text, descriptions, labels, and UI elements.
            Highly legible at all sizes.
          </Text>
          <Text mt="md" style={{ fontFamily: "'Inter', system-ui, sans-serif" }} size="lg">
            ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
          </Text>
        </Paper>

        <Paper p="xl" radius="lg" withBorder>
          <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" mb="sm">Monospace Font</Text>
          <Text size="xl" fw={700} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            JetBrains Mono
          </Text>
          <Text c="#6B6B6B" size="sm" mt="xs">
            Used for code snippets, technical content, and data displays.
          </Text>
          <Code block mt="md" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1rem' }}>
            {`const brand = '#D4AF37'; // Ethiopian Gold`}
          </Code>
        </Paper>
      </Stack>
    </Box>
  ),
};

export const HeadingScale: StoryObj = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl">
        <Title order={2} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Heading Scale
        </Title>
        <Text c="#6B6B6B" mb="md">All headings use Space Grotesk, weight 700</Text>

        <Paper p="xl" radius="lg" withBorder>
          <Stack gap="lg">
            {[
              { order: 1 as const, size: '3rem (48px)', label: 'h1' },
              { order: 2 as const, size: '2.25rem (36px)', label: 'h2' },
              { order: 3 as const, size: '1.875rem (30px)', label: 'h3' },
              { order: 4 as const, size: '1.5rem (24px)', label: 'h4' },
              { order: 5 as const, size: '1.25rem (20px)', label: 'h5' },
              { order: 6 as const, size: '1.125rem (18px)', label: 'h6' },
            ].map(({ order, size, label }) => (
              <Group key={label} align="baseline" wrap="nowrap">
                <Text
                  size="xs"
                  ff="monospace"
                  c="#D4AF37"
                  fw={600}
                  style={{ minWidth: 80 }}
                >
                  {label} — {size}
                </Text>
                <Title order={order} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  SemEnaWerk Design
                </Title>
              </Group>
            ))}
          </Stack>
        </Paper>
      </Stack>
    </Box>
  ),
};

export const BodyTextScale: StoryObj = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl">
        <Title order={2} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Body Text Scale
        </Title>
        <Text c="#6B6B6B" mb="md">All body text uses Inter</Text>

        <Paper p="xl" radius="lg" withBorder>
          <Stack gap="lg">
            {[
              { size: 'xs' as const, px: '12px', rem: '0.75rem' },
              { size: 'sm' as const, px: '14px', rem: '0.875rem' },
              { size: 'md' as const, px: '16px', rem: '1rem' },
              { size: 'lg' as const, px: '18px', rem: '1.125rem' },
              { size: 'xl' as const, px: '20px', rem: '1.25rem' },
            ].map(({ size, px, rem }) => (
              <Group key={size} align="baseline" wrap="nowrap">
                <Text size="xs" ff="monospace" c="#D4AF37" fw={600} style={{ minWidth: 120 }}>
                  {size} — {px} ({rem})
                </Text>
                <Text size={size} c="#2C2C2C">
                  Ethiopian-inspired design with warm gold accents
                </Text>
              </Group>
            ))}
          </Stack>
        </Paper>
      </Stack>
    </Box>
  ),
};

export const FontWeights: StoryObj = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl">
        <Title order={2} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Font Weights
        </Title>

        <Paper p="xl" radius="lg" withBorder>
          <Stack gap="md">
            {[
              { weight: 400, label: 'Regular (400)' },
              { weight: 500, label: 'Medium (500)' },
              { weight: 600, label: 'Semibold (600)' },
              { weight: 700, label: 'Bold (700)' },
            ].map(({ weight, label }) => (
              <Group key={weight} align="baseline" wrap="nowrap">
                <Text size="xs" ff="monospace" c="#D4AF37" fw={600} style={{ minWidth: 140 }}>
                  {label}
                </Text>
                <Text size="xl" fw={weight} c="#2C2C2C">
                  SemEnaWerk — Building Digital Ethiopia
                </Text>
              </Group>
            ))}
          </Stack>
        </Paper>
      </Stack>
    </Box>
  ),
};
