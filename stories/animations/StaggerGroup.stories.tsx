import type { Meta, StoryObj } from '@storybook/react';
import { Box, Text, Title, Group } from '@mantine/core';
import { StaggerGroup } from '../../components/animations/StaggerGroup';
import { Card, Badge, Heading } from '../../components/atoms';

const meta: Meta<typeof StaggerGroup> = {
  title: 'Animations/StaggerGroup',
  component: StaggerGroup,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**What it does:** Wraps multiple children and reveals them one by one with staggered delays. Each child animates in sequence when the group enters the viewport.

**When to use:** Card grids, feature lists, stat rows, team member sections — anywhere you have repeating items that should cascade in rather than appear all at once.

**Animation Library:** Framer Motion (variants + staggerChildren + useInView)

**Performance:** Single IntersectionObserver for the whole group. Children use Framer Motion's variant propagation — no extra observers per child.

**Accessibility:** Respects \`prefers-reduced-motion\` — when enabled, all children appear instantly with no animation.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    staggerDelay: {
      description: 'Seconds between each child animation start',
      control: { type: 'range', min: 0.02, max: 0.5, step: 0.02 },
    },
    direction: {
      description: 'Direction each child slides in from',
      control: 'select',
      options: ['up', 'down', 'left', 'right', 'none'],
    },
    duration: {
      description: 'Animation duration per child in seconds',
      control: { type: 'range', min: 0.1, max: 1.5, step: 0.1 },
    },
    distance: {
      description: 'How far each child travels (px)',
      control: { type: 'range', min: 10, max: 80, step: 5 },
    },
    once: {
      description: 'If true, only animates the first time the group enters view',
      control: 'boolean',
    },
    threshold: {
      description: 'How much of the group must be visible to trigger (0-1)',
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
    },
  },
};
export default meta;

type Story = StoryObj<typeof StaggerGroup>;

export const Default: Story = {
  render: (args) => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Box maw={900} mx="auto" pt={60}>
        <Text c="dimmed" ta="center" mb="lg">Scroll down to see the stagger</Text>
        <Box style={{ height: '60vh' }} />
        <StaggerGroup
          {...args}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1rem',
          }}
        >
          {['Branding', 'Web Design', 'Mobile App', 'UX Research', 'Illustration', 'Motion'].map(
            (title) => (
              <Card key={title} p="lg">
                <Title order={4} mb="xs">{title}</Title>
                <Text size="sm" c="dimmed">
                  Service description for {title.toLowerCase()} projects.
                </Text>
              </Card>
            )
          )}
        </StaggerGroup>
        <Box style={{ height: '40vh' }} />
      </Box>
    </Box>
  ),
  args: {
    staggerDelay: 0.1,
    direction: 'up',
    duration: 0.5,
    distance: 30,
    once: true,
    threshold: 0.1,
  },
  parameters: {
    docs: {
      description: {
        story: '6 cards in a CSS grid, staggering in one by one. Use the controls to adjust timing, direction, and distance.',
      },
    },
  },
};

export const ProjectGrid: Story = {
  render: () => {
    const projects = [
      { title: 'E-Commerce Redesign', status: 'Active', color: 'gold', budget: '45,000 ETB' },
      { title: 'Restaurant Branding', status: 'Complete', color: 'forest', budget: '25,000 ETB' },
      { title: 'TeleBirr Integration', status: 'Urgent', color: 'rust', budget: '120,000 ETB' },
      { title: 'Coffee Export Portal', status: 'Planning', color: 'earth', budget: '80,000 ETB' },
      { title: 'Hotel Booking App', status: 'Active', color: 'gold', budget: '95,000 ETB' },
      { title: 'NGO Dashboard', status: 'Complete', color: 'forest', budget: '55,000 ETB' },
    ];

    return (
      <Box style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
        <Box maw={1000} mx="auto" px="xl" py={80}>
          <Heading order={2} mb="xs">Projects</Heading>
          <Text c="dimmed" mb="xl">Recent client work across Ethiopian industries</Text>
          <Box style={{ height: '30vh' }} />
          <StaggerGroup
            staggerDelay={0.12}
            distance={40}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {projects.map((p) => (
              <Card key={p.title} p="lg">
                <Group justify="space-between" mb="sm">
                  <Badge color={p.color}>{p.status}</Badge>
                  <Text size="xs" c="dimmed">{p.budget}</Text>
                </Group>
                <Title order={4} mb="xs">{p.title}</Title>
                <Text size="sm" c="dimmed">
                  Full-scope design and development for the Ethiopian market.
                </Text>
              </Card>
            ))}
          </StaggerGroup>
          <Box style={{ height: '40vh' }} />
        </Box>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Realistic 3-column project card grid with badges, budgets in ETB, and staggered reveal — a common Ethiopian SaaS portfolio pattern.',
      },
    },
  },
};

export const StatsList: Story = {
  render: () => (
    <Box style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Box maw={500} mx="auto" px="xl" py={80}>
        <Heading order={2} mb="xl">By the Numbers</Heading>
        <Box style={{ height: '40vh' }} />
        <StaggerGroup staggerDelay={0.15} distance={20}>
          {[
            { label: 'Projects Delivered', value: '50+' },
            { label: 'Happy Clients', value: '32' },
            { label: 'Revenue Generated', value: 'ETB 2.5M' },
            { label: 'Client Satisfaction', value: '99%' },
          ].map((stat) => (
            <Box
              key={stat.label}
              py="md"
              style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}
            >
              <Group justify="space-between">
                <Text c="dimmed">{stat.label}</Text>
                <Text fw={700} size="xl" c="#D4AF37">{stat.value}</Text>
              </Group>
            </Box>
          ))}
        </StaggerGroup>
        <Box style={{ height: '40vh' }} />
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vertical list of stats staggering in from the top. Clean layout with gold accent values.',
      },
    },
  },
};

export const FastStagger: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Box maw={900} mx="auto" pt={60}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" ta="center">Fast Stagger (0.05s)</Text>
        <Text c="dimmed" ta="center" size="sm" mb="lg">Rapid-fire reveal effect</Text>
        <Box style={{ height: '50vh' }} />
        <StaggerGroup
          staggerDelay={0.05}
          duration={0.3}
          distance={20}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: '0.75rem',
          }}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <Card key={i} p="md" ta="center">
              <Text fw={600} size="lg" c="#D4AF37">{String(i + 1).padStart(2, '0')}</Text>
              <Text size="xs" c="dimmed">Item {i + 1}</Text>
            </Card>
          ))}
        </StaggerGroup>
        <Box style={{ height: '40vh' }} />
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Ultra-fast 0.05s stagger with 12 items — creates a rapid cascade effect. Great for icon grids or tag clouds.',
      },
    },
  },
};

export const DirectionVariants: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Box maw={900} mx="auto" pt={60}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" ta="center">
          Direction: Left
        </Text>
        <Text c="dimmed" ta="center" size="sm" mb="lg">
          Children slide in from the right side
        </Text>
        <Box style={{ height: '50vh' }} />
        <StaggerGroup
          direction="left"
          staggerDelay={0.12}
          distance={50}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1rem',
          }}
        >
          {['Discovery', 'Strategy', 'Design', 'Development', 'Launch', 'Support'].map(
            (phase, i) => (
              <Card key={phase} p="lg">
                <Text size="xs" c="#D4AF37" fw={600} mb={4}>Phase {i + 1}</Text>
                <Title order={4}>{phase}</Title>
              </Card>
            )
          )}
        </StaggerGroup>
        <Box style={{ height: '40vh' }} />
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Same grid layout but items slide in from the right (direction="left"). Works well for process/timeline sections.',
      },
    },
  },
};
