import type { Meta, StoryObj } from '@storybook/react';
import { Box, Text, Group, Stack, ActionIcon } from '@mantine/core';
import { IconArrowRight, IconBrandGithub, IconBrandLinkedin, IconBrandDribbble } from '@tabler/icons-react';
import { MagneticElement } from '../../components/animations/MagneticElement';
import { Button, Card, Heading } from '../../components/atoms';

const meta: Meta<typeof MagneticElement> = {
  title: 'Animations/MagneticElement',
  component: MagneticElement,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**What it does:** Wraps any element so it subtly pulls toward the cursor on hover. A premium micro-interaction that makes buttons, icons, and links feel alive.

**When to use:** CTA buttons, social icons, navigation links, interactive cards — any element that benefits from a tactile, magnetic feel. Use sparingly for maximum impact.

**Animation Library:** Framer Motion (useMotionValue + useSpring)

**Performance:** Uses spring physics on motion values — purely transform-based, no layout recalculations. The spring runs on Framer Motion's internal animation loop.

**Accessibility:** Disabled on touch devices (no hover capability). Respects \`prefers-reduced-motion\` — when enabled, the element stays static.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    strength: {
      description: 'How strongly the element follows the cursor (0-1)',
      control: { type: 'range', min: 0, max: 1, step: 0.05 },
    },
    radius: {
      description: 'Pixel radius of the magnetic field',
      control: { type: 'range', min: 50, max: 400, step: 25 },
    },
  },
};
export default meta;

type Story = StoryObj<typeof MagneticElement>;

export const Default: Story = {
  render: (args) => (
    <Box
      p="xl"
      style={{
        backgroundColor: '#FAF8F3',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack align="center" gap="xl">
        <Text c="dimmed" size="sm">Move your cursor around the button</Text>
        <MagneticElement {...args}>
          <Button size="lg" color="gold">
            Magnetic Button
          </Button>
        </MagneticElement>
      </Stack>
    </Box>
  ),
  args: {
    strength: 0.3,
    radius: 200,
  },
  parameters: {
    docs: {
      description: {
        story: 'A gold button that follows the cursor. Adjust strength (how far it pulls) and radius (how close the cursor needs to be).',
      },
    },
  },
};

export const StrengthComparison: Story = {
  render: () => (
    <Box
      p="xl"
      style={{
        backgroundColor: '#FAF8F3',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack align="center" gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Strength Comparison</Text>
        <Text c="dimmed" size="sm">Move cursor across all three — feel the pull increase</Text>
        <Group gap={60} justify="center">
          {[
            { strength: 0.1, label: 'Subtle (0.1)' },
            { strength: 0.3, label: 'Medium (0.3)' },
            { strength: 0.5, label: 'Strong (0.5)' },
          ].map((item) => (
            <Stack key={item.label} align="center" gap="xs">
              <MagneticElement strength={item.strength} radius={180}>
                <Button size="lg" color="gold" variant="outline">
                  {item.label}
                </Button>
              </MagneticElement>
              <Text size="xs" c="dimmed">{item.label}</Text>
            </Stack>
          ))}
        </Group>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Three buttons at strength 0.1, 0.3, and 0.5 side by side. Move across them to feel how strength affects the magnetic pull.',
      },
    },
  },
};

export const IconMagnetic: Story = {
  render: () => (
    <Box
      p="xl"
      style={{
        backgroundColor: '#1A1A1A',
        borderRadius: 12,
        minHeight: '40vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack align="center" gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Social Links</Text>
        <Group gap={40}>
          {[
            { icon: IconBrandGithub, label: 'GitHub' },
            { icon: IconBrandLinkedin, label: 'LinkedIn' },
            { icon: IconBrandDribbble, label: 'Dribbble' },
          ].map((item) => (
            <MagneticElement key={item.label} strength={0.35} radius={120}>
              <Stack align="center" gap={6}>
                <ActionIcon
                  size={56}
                  radius="xl"
                  variant="outline"
                  color="gold"
                  style={{ border: '1px solid rgba(212,175,55,0.3)' }}
                >
                  <item.icon size={24} color="#D4AF37" />
                </ActionIcon>
                <Text size="xs" c="#E8D5B7">{item.label}</Text>
              </Stack>
            </MagneticElement>
          ))}
        </Group>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Social icons on a dark background with magnetic hover — a common portfolio footer pattern. Each icon pulls toward the cursor independently.',
      },
    },
  },
};

export const CTAButton: Story = {
  render: () => (
    <Box
      style={{
        backgroundColor: '#FAF8F3',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack align="center" gap="lg">
        <Heading order={2}>Ready to collaborate?</Heading>
        <Text c="dimmed" maw={400} ta="center">
          Let&apos;s build something meaningful for the Ethiopian digital landscape.
        </Text>
        <MagneticElement strength={0.25} radius={250}>
          <Button
            size="xl"
            color="gold"
            rightSection={<IconArrowRight size={20} />}
            style={{
              paddingLeft: 32,
              paddingRight: 28,
              fontSize: '1.125rem',
            }}
          >
            View My Work
          </Button>
        </MagneticElement>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A realistic "View My Work" CTA with magnetic pull and arrow icon — exactly how it would look on a portfolio landing page.',
      },
    },
  },
};
