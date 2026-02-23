import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Box, Text, Group } from '@mantine/core';
import { IconCheck, IconClock, IconAlertTriangle, IconStar } from '@tabler/icons-react';
import { Badge } from '../../components/atoms/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**When to use:**
Badges highlight status, counts, or labels. Use for notification dots, feature tags, or status indicators. Keep text short — one or two words maximum.

**Ethiopian Design Context:**
Default gold variant (#D4AF37) matches the brand accent. Use \`variant="dot"\` with forest green for "Available" status, rust for "Urgent" flags. The light variant works well for service category tags.

**Common Patterns:**
- Project status indicators (Discovery, In Progress, Review, Completed)
- Service tags (Branding, Web Dev, Mobile App, UI/UX)
- Payment status (Paid, Pending, Overdue, Partial)
- Notification counts and feature labels

**Accessibility:**
Consider using \`aria-label\` for icon-only badges to provide context for screen readers. Color alone should not convey meaning — pair with text or icons.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'Badge color from theme palette (defaults to gold)',
      control: 'select',
      options: ['gold', 'rust', 'forest', 'earth', 'gray'],
    },
    variant: {
      description: 'Visual style — filled (default), light, outline, or dot',
      control: 'select',
      options: ['filled', 'light', 'outline', 'dot'],
    },
    size: {
      description: 'Badge size (xs for subtle tags, lg for prominent labels)',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    children: {
      description: 'Badge text content',
      control: 'text',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Variants: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Badge Variants</Text>

        <div>
          <Text fw={500} mb="sm">Filled</Text>
          <Group gap="sm" wrap="wrap">
            <Badge color="gold">Gold</Badge>
            <Badge color="rust">Rust</Badge>
            <Badge color="forest">Forest</Badge>
            <Badge color="earth">Earth</Badge>
          </Group>
        </div>

        <div>
          <Text fw={500} mb="sm">Light</Text>
          <Group gap="sm" wrap="wrap">
            <Badge variant="light" color="gold">Gold</Badge>
            <Badge variant="light" color="rust">Rust</Badge>
            <Badge variant="light" color="forest">Forest</Badge>
            <Badge variant="light" color="earth">Earth</Badge>
          </Group>
        </div>

        <div>
          <Text fw={500} mb="sm">Outline</Text>
          <Group gap="sm" wrap="wrap">
            <Badge variant="outline" color="gold">Gold</Badge>
            <Badge variant="outline" color="rust">Rust</Badge>
            <Badge variant="outline" color="forest">Forest</Badge>
            <Badge variant="outline" color="earth">Earth</Badge>
          </Group>
        </div>

        <div>
          <Text fw={500} mb="sm">Dot</Text>
          <Group gap="sm" wrap="wrap">
            <Badge variant="dot" color="gold">Active</Badge>
            <Badge variant="dot" color="rust">Urgent</Badge>
            <Badge variant="dot" color="forest">Available</Badge>
            <Badge variant="dot" color="earth">Pending</Badge>
          </Group>
        </div>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All four badge variants across the brand palette. Filled for strong emphasis, light for categories, outline for subtle tags, dot for status indicators.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="md">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Badge Sizes</Text>
        <Group gap="sm" align="center" wrap="wrap">
          <Badge size="xs">XS</Badge>
          <Badge size="sm">SM</Badge>
          <Badge size="md">MD</Badge>
          <Badge size="lg">LG</Badge>
          <Badge size="xl">XL</Badge>
        </Group>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Five sizes from xs to xl. Use xs/sm for inline tags within cards, md for standard labels, lg/xl for featured badges.',
      },
    },
  },
};

export const WithIcons: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="md">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">With Icons</Text>
        <Group gap="sm" wrap="wrap">
          <Badge leftSection={<IconCheck size={12} />} color="forest">Completed</Badge>
          <Badge leftSection={<IconClock size={12} />} color="gold">In Progress</Badge>
          <Badge leftSection={<IconAlertTriangle size={12} />} color="rust">Overdue</Badge>
          <Badge leftSection={<IconStar size={12} />} color="earth">Featured</Badge>
        </Group>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icon + text badges for richer status communication. Use leftSection with small (12px) Tabler icons.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Ethiopian SaaS Use Cases</Text>

        <div>
          <Text fw={500} mb="sm">Project Status</Text>
          <Group gap="sm" wrap="wrap">
            <Badge variant="light" color="gold">Discovery</Badge>
            <Badge variant="light" color="earth">In Progress</Badge>
            <Badge variant="light" color="rust">Review</Badge>
            <Badge variant="light" color="forest">Completed</Badge>
            <Badge variant="dot" color="gold">On Hold</Badge>
          </Group>
        </div>

        <div>
          <Text fw={500} mb="sm">Service Tags</Text>
          <Group gap="sm" wrap="wrap">
            <Badge variant="outline" color="gold">Branding</Badge>
            <Badge variant="outline" color="rust">Web Dev</Badge>
            <Badge variant="outline" color="forest">Mobile App</Badge>
            <Badge variant="outline" color="earth">UI/UX</Badge>
          </Group>
        </div>

        <div>
          <Text fw={500} mb="sm">Payment Status</Text>
          <Group gap="sm" wrap="wrap">
            <Badge color="forest">Paid</Badge>
            <Badge color="gold">Pending</Badge>
            <Badge color="rust">Overdue</Badge>
            <Badge variant="light" color="earth">Partial</Badge>
          </Group>
        </div>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world badge patterns: project workflow statuses, service category tags, and payment tracking with semantic colors.',
      },
    },
  },
};
