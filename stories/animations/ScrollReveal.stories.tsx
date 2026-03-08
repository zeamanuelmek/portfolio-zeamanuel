import type { Meta, StoryObj } from '@storybook/react';
import { Box, Text, Title, Group, Stack } from '@mantine/core';
import { ScrollReveal } from '../../components/animations/ScrollReveal';
import { Card, Badge, Heading, Button } from '../../components/atoms';

const meta: Meta<typeof ScrollReveal> = {
  title: 'Animations/ScrollReveal',
  component: ScrollReveal,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**What it does:** Wraps any element and animates it into view when it enters the viewport on scroll.

**When to use:** Section headings, cards, images, text blocks — anything that should "appear" as the user scrolls down. This is the single most impactful animation for making a site feel premium.

**Animation Library:** Framer Motion (useInView + motion.div)

**Performance:** Uses IntersectionObserver under the hood — no scroll event listeners. Very performant even with many instances.

**Accessibility:** Respects \`prefers-reduced-motion\` — when enabled, elements appear instantly with no animation.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      description: 'Direction the element slides in from',
      control: 'select',
      options: ['up', 'down', 'left', 'right', 'none'],
    },
    duration: {
      description: 'Animation duration in seconds',
      control: { type: 'range', min: 0.1, max: 2, step: 0.1 },
    },
    delay: {
      description: 'Delay before animation starts (seconds)',
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
    },
    distance: {
      description: 'How far the element travels (px)',
      control: { type: 'range', min: 10, max: 100, step: 5 },
    },
    once: {
      description: 'If true, only animates the first time it enters view',
      control: 'boolean',
    },
    threshold: {
      description: 'How much of the element must be visible to trigger (0-1)',
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ScrollReveal>;

export const Default: Story = {
  render: (args) => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl" maw={600} mx="auto" pt={100}>
        <Text c="dimmed" ta="center">Scroll down to see the animation</Text>
        <Box style={{ height: '60vh' }} />
        <ScrollReveal {...args}>
          <Card p="lg" w={400} mx="auto">
            <Title order={3} mb="xs">Hello from ScrollReveal</Title>
            <Text size="sm" c="dimmed">
              This card faded up into view when you scrolled here.
            </Text>
          </Card>
        </ScrollReveal>
        <Box style={{ height: '40vh' }} />
      </Stack>
    </Box>
  ),
  args: {
    direction: 'up',
    duration: 0.6,
    delay: 0,
    distance: 40,
    once: true,
    threshold: 0.2,
  },
  parameters: {
    docs: {
      description: {
        story: 'A single card fading up into view. Use the controls to experiment with direction, speed, and distance.',
      },
    },
  },
};

export const AllDirections: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl" maw={800} mx="auto" pt={60}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" ta="center">
          All Directions
        </Text>
        <Text c="dimmed" ta="center" size="sm">Scroll down — each card enters from a different direction</Text>
        <Box style={{ height: '50vh' }} />

        <Group gap="lg" justify="center" wrap="wrap">
          <ScrollReveal direction="up" duration={0.7}>
            <Card p="lg" w={220}>
              <Badge color="gold" mb="xs">Up</Badge>
              <Text size="sm" c="dimmed">Slides up into place</Text>
            </Card>
          </ScrollReveal>

          <ScrollReveal direction="down" duration={0.7}>
            <Card p="lg" w={220}>
              <Badge color="rust" mb="xs">Down</Badge>
              <Text size="sm" c="dimmed">Slides down into place</Text>
            </Card>
          </ScrollReveal>

          <ScrollReveal direction="left" duration={0.7}>
            <Card p="lg" w={220}>
              <Badge color="forest" mb="xs">Left</Badge>
              <Text size="sm" c="dimmed">Slides in from the right</Text>
            </Card>
          </ScrollReveal>

          <ScrollReveal direction="right" duration={0.7}>
            <Card p="lg" w={220}>
              <Badge color="earth" mb="xs">Right</Badge>
              <Text size="sm" c="dimmed">Slides in from the left</Text>
            </Card>
          </ScrollReveal>
        </Group>

        <ScrollReveal direction="none" duration={1}>
          <Card p="lg" w={300} mx="auto">
            <Badge color="gold" variant="outline" mb="xs">None</Badge>
            <Text size="sm" c="dimmed">Pure opacity fade — no movement</Text>
          </Card>
        </ScrollReveal>

        <Box style={{ height: '40vh' }} />
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Five cards demonstrating all direction options: up, down, left, right, and none (fade only).',
      },
    },
  },
};

export const LongPage: Story = {
  render: () => (
    <Box style={{ backgroundColor: '#FAF8F3', minHeight: '300vh' }}>
      <Box maw={700} mx="auto" px="xl" py={80}>
        <ScrollReveal>
          <Heading order={1} mb="lg">Portfolio</Heading>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Text c="dimmed" size="lg" mb={80}>
            A showcase of Ethiopian-inspired design work.
          </Text>
        </ScrollReveal>

        {['Brand Identity', 'Web Platform', 'Mobile App', 'Design System'].map(
          (title, i) => (
            <ScrollReveal key={title} delay={0.05 * i} distance={50}>
              <Card p="xl" mb="xl">
                <Group justify="space-between" mb="sm">
                  <Heading order={3}>{title}</Heading>
                  <Badge color={['gold', 'rust', 'forest', 'earth'][i]}>
                    {['Active', 'Complete', 'Active', 'Planning'][i]}
                  </Badge>
                </Group>
                <Text c="dimmed" size="sm">
                  Project description for {title.toLowerCase()} — Ethiopian SaaS context
                  with gold accents and warm earth tones throughout.
                </Text>
              </Card>
            </ScrollReveal>
          )
        )}

        <ScrollReveal direction="none" delay={0.2}>
          <Box ta="center" py={60}>
            <Button color="gold" size="lg">View All Projects</Button>
          </Box>
        </ScrollReveal>
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world usage pattern: a scrollable portfolio page where each section reveals sequentially with staggered delays.',
      },
    },
  },
};

export const WithRepeat: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl" maw={600} mx="auto" pt={60}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" ta="center">
          Repeating Animation
        </Text>
        <Text c="dimmed" ta="center" size="sm">
          Scroll past, then scroll back up — the animation replays every time
        </Text>
        <Box style={{ height: '60vh' }} />

        <ScrollReveal once={false} direction="up" distance={60} duration={0.8}>
          <Card p="xl" w={400} mx="auto">
            <Heading order={3} mb="xs">I re-animate!</Heading>
            <Text size="sm" c="dimmed">
              With <code>once=false</code>, this card animates every time it enters the viewport.
              Scroll past it, then scroll back up.
            </Text>
          </Card>
        </ScrollReveal>

        <Box style={{ height: '80vh' }} />
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'With `once: false`, the animation replays every time the element re-enters the viewport. Scroll past and back to see it.',
      },
    },
  },
};
