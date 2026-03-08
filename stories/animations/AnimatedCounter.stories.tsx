import type { Meta, StoryObj } from '@storybook/react';
import { Box, Text, Group, Stack } from '@mantine/core';
import { AnimatedCounter } from '../../components/animations/AnimatedCounter';
import { Card, Heading } from '../../components/atoms';

const meta: Meta<typeof AnimatedCounter> = {
  title: 'Animations/AnimatedCounter',
  component: AnimatedCounter,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**What it does:** Displays a number that counts up from a start value to a target value when it enters the viewport. Supports formatting with prefix, suffix, thousands separators, and decimals.

**When to use:** Stats sections, dashboard KPIs, portfolio metrics — any number that should feel dynamic and earned rather than static.

**Animation Library:** Framer Motion (useMotionValue + animate + useInView)

**Performance:** Uses a single motion value with \`requestAnimationFrame\` internally — no DOM thrashing. The IntersectionObserver triggers only once by default.

**Accessibility:** Respects \`prefers-reduced-motion\` — when enabled, the final number appears instantly with no counting animation.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    target: {
      description: 'The final number to count to',
      control: { type: 'number' },
    },
    start: {
      description: 'Starting number (default: 0)',
      control: { type: 'number' },
    },
    duration: {
      description: 'Animation duration in seconds',
      control: { type: 'range', min: 0.3, max: 5, step: 0.1 },
    },
    delay: {
      description: 'Delay before counting starts (seconds)',
      control: { type: 'range', min: 0, max: 2, step: 0.1 },
    },
    prefix: {
      description: 'Text before the number (e.g., "ETB ", "$")',
      control: 'text',
    },
    suffix: {
      description: 'Text after the number (e.g., "+", "%", "K")',
      control: 'text',
    },
    decimals: {
      description: 'Number of decimal places',
      control: { type: 'range', min: 0, max: 3, step: 1 },
    },
    separator: {
      description: 'Thousands separator character',
      control: 'text',
    },
    once: {
      description: 'If true, only counts the first time it enters view',
      control: 'boolean',
    },
  },
};
export default meta;

type Story = StoryObj<typeof AnimatedCounter>;

export const Default: Story = {
  render: (args) => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack maw={400} mx="auto" pt={60} ta="center">
        <Text c="dimmed" size="sm">Scroll down to trigger the counter</Text>
        <Box style={{ height: '60vh' }} />
        <Card p="xl">
          <AnimatedCounter
            {...args}
            style={{
              fontSize: '3rem',
              fontWeight: 700,
              fontFamily: "'Space Grotesk', sans-serif",
              color: '#D4AF37',
            }}
          />
          <Text c="dimmed" mt="xs">Projects delivered</Text>
        </Card>
        <Box style={{ height: '40vh' }} />
      </Stack>
    </Box>
  ),
  args: {
    target: 50,
    suffix: '+',
    duration: 2,
    delay: 0,
    decimals: 0,
    separator: ',',
    once: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'A single counter counting to 50+. Use the controls to change the target, duration, prefix/suffix, and formatting.',
      },
    },
  },
};

export const StatsRow: Story = {
  render: () => (
    <Box style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Box maw={900} mx="auto" px="xl" pt={80}>
        <Heading order={2} mb="xs" ta="center">By the Numbers</Heading>
        <Text c="dimmed" ta="center" mb="xl">Impact across the Ethiopian tech ecosystem</Text>
        <Box style={{ height: '40vh' }} />
        <Group justify="center" gap="xl" wrap="wrap">
          {[
            { target: 50, suffix: '+', label: 'Projects' },
            { target: 12, suffix: '', label: 'Clients' },
            { target: 2500000, prefix: 'ETB ', suffix: '', label: 'Revenue' },
            { target: 99, suffix: '%', label: 'Satisfaction' },
          ].map((stat) => (
            <Card key={stat.label} p="xl" w={190} ta="center">
              <AnimatedCounter
                target={stat.target}
                prefix={stat.prefix}
                suffix={stat.suffix}
                duration={2.5}
                separator=","
                style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: '#D4AF37',
                  display: 'block',
                }}
              />
              <Text c="dimmed" size="sm" mt="xs">{stat.label}</Text>
            </Card>
          ))}
        </Group>
        <Box style={{ height: '40vh' }} />
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Four stats in a row: 50+ Projects, 12 Clients, ETB 2,500,000 Revenue, 99% Satisfaction. All count simultaneously when the row enters view.',
      },
    },
  },
};

export const WithFormatting: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Box maw={700} mx="auto" pt={60}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" ta="center">
          Formatting Options
        </Text>
        <Box style={{ height: '50vh' }} />
        <Stack gap="lg">
          {[
            { target: 25000, prefix: 'ETB ', separator: ',', decimals: 0, label: 'Prefix + separator' },
            { target: 99.9, suffix: '%', decimals: 1, label: 'One decimal + suffix' },
            { target: 3.14159, decimals: 3, label: 'Three decimals' },
            { target: 1250, suffix: 'K', separator: ',', label: 'Suffix as unit' },
            { target: 50, prefix: '$', suffix: '.00', label: 'Dollar format' },
          ].map((item) => (
            <Card key={item.label} p="lg">
              <Group justify="space-between" align="center">
                <Text c="dimmed" size="sm">{item.label}</Text>
                <AnimatedCounter
                  target={item.target}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  separator={item.separator}
                  decimals={item.decimals}
                  duration={2}
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: '#2C2C2C',
                  }}
                />
              </Group>
            </Card>
          ))}
        </Stack>
        <Box style={{ height: '40vh' }} />
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates all formatting options: prefix (ETB, $), suffix (%, K), thousands separator, and 0-3 decimal places.',
      },
    },
  },
};

export const CustomDuration: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Box maw={700} mx="auto" pt={60}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" ta="center">
          Speed Comparison
        </Text>
        <Text c="dimmed" ta="center" size="sm" mb="lg">
          Same target, different durations
        </Text>
        <Box style={{ height: '50vh' }} />
        <Group justify="center" gap="xl" wrap="wrap">
          {[
            { duration: 0.5, label: 'Fast (0.5s)' },
            { duration: 2, label: 'Normal (2s)' },
            { duration: 4, label: 'Slow (4s)' },
          ].map((item) => (
            <Card key={item.label} p="xl" w={200} ta="center">
              <AnimatedCounter
                target={100}
                duration={item.duration}
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: '#D4AF37',
                  display: 'block',
                }}
              />
              <Text c="dimmed" size="sm" mt="xs">{item.label}</Text>
            </Card>
          ))}
        </Group>
        <Box style={{ height: '40vh' }} />
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Three counters racing to 100 at different speeds: 0.5s (snappy), 2s (natural), and 4s (dramatic). Shows how duration affects the feel.',
      },
    },
  },
};
