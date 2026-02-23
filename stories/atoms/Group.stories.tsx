import type { Meta, StoryObj } from '@storybook/react';
import { Box, Text, Paper, Badge as MantineBadge, Button as MantineButton } from '@mantine/core';
import { Stack } from '@mantine/core';
import { IconBriefcase, IconCalendar } from '@tabler/icons-react';
import { Group } from '../../components/atoms/Group';

const meta: Meta<typeof Group> = {
  title: 'Atoms/Group',
  component: Group,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**When to use:**
Group arranges children horizontally with consistent spacing. Use for button rows, tag clouds, icon-label pairs, card headers, and action bars. Prefer Group over manual flexbox.

**Ethiopian Design Context:**
Group is the horizontal counterpart to Stack. Use \`justify="space-between"\` for card headers (title + status badge), \`gap="xs"\` for tag clouds, and \`wrap="wrap"\` for responsive tag/badge lists.

**Common Patterns:**
- Card headers: title on left, status badge on right (space-between)
- Action bars: metadata left, buttons right
- Tag clouds: wrapped badges with xs gap
- Icon-label pairs: icon + text with sm gap

**Accessibility:**
Group creates a natural horizontal reading flow. Wrapped items maintain tab order across rows.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    gap: {
      description: 'Horizontal spacing between children (xs | sm | md | lg | xl or number)',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    justify: {
      description: 'Horizontal distribution of children',
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around'],
    },
    wrap: {
      description: 'Whether children wrap to next line when overflowing',
      control: 'select',
      options: ['wrap', 'nowrap'],
    },
    align: {
      description: 'Vertical alignment of children',
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'stretch'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Group>;

const DemoBox = ({ label, color = '#D4AF37' }: { label: string; color?: string }) => (
  <Paper p="sm" radius="lg" style={{ border: `2px solid ${color}`, backgroundColor: `${color}1a` }}>
    <Text size="sm" fw={500}>{label}</Text>
  </Paper>
);

export const GapSizes: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Group Gap Sizes</Text>

        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((gap) => (
          <div key={gap}>
            <Text size="sm" fw={500} mb="xs">gap=&quot;{gap}&quot;</Text>
            <Group gap={gap}>
              <DemoBox label="Item 1" />
              <DemoBox label="Item 2" />
              <DemoBox label="Item 3" />
            </Group>
          </div>
        ))}
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Five gap sizes. Use xs for tight badge groups, sm/md for button rows, lg/xl for spaced-out nav items.',
      },
    },
  },
};

export const Justify: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Group Justify</Text>

        {(['flex-start', 'center', 'flex-end', 'space-between', 'space-around'] as const).map((justify) => (
          <div key={justify}>
            <Text size="sm" fw={500} mb="xs">justify=&quot;{justify}&quot;</Text>
            <Paper p="sm" radius="lg" withBorder>
              <Group justify={justify}>
                <DemoBox label="A" color="#D4AF37" />
                <DemoBox label="B" color="#C44536" />
                <DemoBox label="C" color="#2C5530" />
              </Group>
            </Paper>
          </div>
        ))}
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Justify options for horizontal distribution. space-between is the most common for card headers and action bars.',
      },
    },
  },
};

export const Wrapping: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Wrapping Behavior</Text>

        <div>
          <Text size="sm" fw={500} mb="xs">wrap=&quot;wrap&quot; (default)</Text>
          <Paper p="md" radius="lg" withBorder style={{ maxWidth: 400 }}>
            <Group wrap="wrap" gap="sm">
              {Array.from({ length: 8 }).map((_, i) => (
                <DemoBox key={i} label={`Tag ${i + 1}`} />
              ))}
            </Group>
          </Paper>
        </div>

        <div>
          <Text size="sm" fw={500} mb="xs">wrap=&quot;nowrap&quot;</Text>
          <Paper p="md" radius="lg" withBorder style={{ maxWidth: 400, overflow: 'hidden' }}>
            <Group wrap="nowrap" gap="sm">
              {Array.from({ length: 8 }).map((_, i) => (
                <DemoBox key={i} label={`Tag ${i + 1}`} />
              ))}
            </Group>
          </Paper>
        </div>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Wrap vs nowrap. Use wrap for tag clouds and badge lists that should flow to new lines. Use nowrap for fixed-width toolbars.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl" style={{ maxWidth: 600 }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Ethiopian SaaS Use Cases</Text>

        <Paper p="lg" radius="lg" withBorder>
          <Text fw={500} mb="sm">Card Header Pattern</Text>
          <Group justify="space-between">
            <Group gap="sm">
              <IconBriefcase size={20} color="#D4AF37" />
              <Text fw={600}>E-Commerce Redesign</Text>
            </Group>
            <MantineBadge color="gold" variant="light">In Progress</MantineBadge>
          </Group>
        </Paper>

        <Paper p="lg" radius="lg" withBorder>
          <Text fw={500} mb="sm">Action Bar Pattern</Text>
          <Group justify="space-between">
            <Group gap="xs">
              <IconCalendar size={16} color="#6B6B6B" />
              <Text size="sm" c="dimmed">Due: March 15, 2026</Text>
            </Group>
            <Group gap="sm">
              <MantineButton variant="light" color="gold" size="xs">Edit</MantineButton>
              <MantineButton color="gold" size="xs">View</MantineButton>
            </Group>
          </Group>
        </Paper>

        <Paper p="lg" radius="lg" withBorder>
          <Text fw={500} mb="sm">Tag Cloud Pattern</Text>
          <Group gap="xs" wrap="wrap">
            {['Branding', 'UI/UX', 'Web Dev', 'Mobile', 'TeleBirr', 'Chapa', 'React', 'Figma'].map((tag) => (
              <MantineBadge key={tag} variant="outline" color="gold" size="lg">{tag}</MantineBadge>
            ))}
          </Group>
        </Paper>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Group patterns: card header with space-between (icon+title | badge), action bar (metadata | buttons), and wrapped tag cloud with xs gap.',
      },
    },
  },
};
