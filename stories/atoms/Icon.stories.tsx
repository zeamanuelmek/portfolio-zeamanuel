import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Box, Text, Group } from '@mantine/core';
import {
  IconHome,
  IconBriefcase,
  IconUsers,
  IconReceipt,
  IconCreditCard,
  IconChartBar,
  IconSettings,
  IconBell,
  IconCheck,
  IconX,
  IconAlertTriangle,
  IconInfoCircle,
  IconPlus,
  IconSearch,
  IconEdit,
  IconTrash,
} from '@tabler/icons-react';
import { Icon } from '../../components/atoms/Icon';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**When to use:**
Icon wraps Tabler icons in a themed container with consistent sizing, color, and radius. Use for navigation items, status indicators, action buttons, and feature highlights.

**Ethiopian Design Context:**
Defaults to \`color="gold"\` with \`variant="light"\` and \`radius="lg"\`. The light variant provides a soft gold background that works on both cream (#FAF8F3) and dark (#1A1A1A) surfaces. Use filled variant on dark backgrounds for stronger visibility.

**Common Patterns:**
- Navigation sidebar icons (Dashboard, Projects, Clients, Invoices)
- Semantic status icons (success=forest, error=rust, warning=gold, info=gold)
- Action icons (Add, Search, Edit, Delete) in toolbars
- Feature highlights in marketing sections

**Accessibility:**
Icons are decorative when paired with text labels. For standalone icons, wrap in a button with \`aria-label\`. The ThemeIcon wrapper provides consistent hit targets.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'Icon container color from theme palette (defaults to gold)',
      control: 'select',
      options: ['gold', 'rust', 'forest', 'earth', 'gray'],
    },
    variant: {
      description: 'Visual style — light (default), filled, outline, or subtle',
      control: 'select',
      options: ['light', 'filled', 'outline', 'subtle'],
    },
    size: {
      description: 'Container size (xs | sm | md | lg | xl)',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    radius: {
      description: 'Border radius (defaults to lg)',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Variants: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Icon Variants</Text>

        <div>
          <Text fw={500} mb="sm">Light (Default)</Text>
          <Group gap="md" wrap="wrap">
            <Icon color="gold"><IconHome size={20} /></Icon>
            <Icon color="rust"><IconBriefcase size={20} /></Icon>
            <Icon color="forest"><IconUsers size={20} /></Icon>
            <Icon color="earth"><IconReceipt size={20} /></Icon>
          </Group>
        </div>

        <div>
          <Text fw={500} mb="sm">Filled</Text>
          <Group gap="md" wrap="wrap">
            <Icon color="gold" variant="filled"><IconHome size={20} /></Icon>
            <Icon color="rust" variant="filled"><IconBriefcase size={20} /></Icon>
            <Icon color="forest" variant="filled"><IconUsers size={20} /></Icon>
            <Icon color="earth" variant="filled"><IconReceipt size={20} /></Icon>
          </Group>
        </div>

        <div>
          <Text fw={500} mb="sm">Outline</Text>
          <Group gap="md" wrap="wrap">
            <Icon color="gold" variant="outline"><IconHome size={20} /></Icon>
            <Icon color="rust" variant="outline"><IconBriefcase size={20} /></Icon>
            <Icon color="forest" variant="outline"><IconUsers size={20} /></Icon>
            <Icon color="earth" variant="outline"><IconReceipt size={20} /></Icon>
          </Group>
        </div>

        <div>
          <Text fw={500} mb="sm">Subtle</Text>
          <Group gap="md" wrap="wrap">
            <Icon color="gold" variant="subtle"><IconHome size={20} /></Icon>
            <Icon color="rust" variant="subtle"><IconBriefcase size={20} /></Icon>
            <Icon color="forest" variant="subtle"><IconUsers size={20} /></Icon>
            <Icon color="earth" variant="subtle"><IconReceipt size={20} /></Icon>
          </Group>
        </div>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Four icon variants across all brand colors. Light is the default for general use, filled for emphasis, outline for borders, subtle for minimal UI.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="md">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Icon Sizes</Text>
        <Group gap="md" align="center">
          <Icon size="xs"><IconHome size={12} /></Icon>
          <Icon size="sm"><IconHome size={14} /></Icon>
          <Icon size="md"><IconHome size={18} /></Icon>
          <Icon size="lg"><IconHome size={22} /></Icon>
          <Icon size="xl"><IconHome size={28} /></Icon>
        </Group>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Five container sizes. Scale the inner Tabler icon to match: xs=12, sm=14, md=18, lg=22, xl=28.',
      },
    },
  },
};

export const SemanticIcons: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Semantic Icons</Text>

        <div>
          <Text fw={500} mb="sm">Status</Text>
          <Group gap="md">
            <Group gap="xs">
              <Icon color="forest" variant="filled" size="sm"><IconCheck size={14} /></Icon>
              <Text size="sm">Success</Text>
            </Group>
            <Group gap="xs">
              <Icon color="rust" variant="filled" size="sm"><IconX size={14} /></Icon>
              <Text size="sm">Error</Text>
            </Group>
            <Group gap="xs">
              <Icon color="gold" variant="filled" size="sm"><IconAlertTriangle size={14} /></Icon>
              <Text size="sm">Warning</Text>
            </Group>
            <Group gap="xs">
              <Icon color="gold" variant="filled" size="sm"><IconInfoCircle size={14} /></Icon>
              <Text size="sm">Info</Text>
            </Group>
          </Group>
        </div>

        <div>
          <Text fw={500} mb="sm">Actions</Text>
          <Group gap="md">
            <Group gap="xs">
              <Icon color="gold" size="sm"><IconPlus size={14} /></Icon>
              <Text size="sm">Add</Text>
            </Group>
            <Group gap="xs">
              <Icon color="gold" size="sm"><IconSearch size={14} /></Icon>
              <Text size="sm">Search</Text>
            </Group>
            <Group gap="xs">
              <Icon color="gold" size="sm"><IconEdit size={14} /></Icon>
              <Text size="sm">Edit</Text>
            </Group>
            <Group gap="xs">
              <Icon color="rust" size="sm"><IconTrash size={14} /></Icon>
              <Text size="sm">Delete</Text>
            </Group>
          </Group>
        </div>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Semantic icon patterns: status indicators (forest=success, rust=error, gold=warning/info) and common CRUD action icons.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Ethiopian SaaS Navigation Icons</Text>

        <Group gap="xl" wrap="wrap">
          {[
            { icon: <IconHome size={22} />, label: 'Dashboard', color: 'gold' as const },
            { icon: <IconBriefcase size={22} />, label: 'Projects', color: 'gold' as const },
            { icon: <IconUsers size={22} />, label: 'Clients', color: 'gold' as const },
            { icon: <IconReceipt size={22} />, label: 'Invoices', color: 'gold' as const },
            { icon: <IconCreditCard size={22} />, label: 'Payments', color: 'gold' as const },
            { icon: <IconChartBar size={22} />, label: 'Reports', color: 'gold' as const },
            { icon: <IconBell size={22} />, label: 'Alerts', color: 'rust' as const },
            { icon: <IconSettings size={22} />, label: 'Settings', color: 'earth' as const },
          ].map(({ icon, label, color }) => (
            <Stack key={label} align="center" gap={4}>
              <Icon color={color} size="lg">{icon}</Icon>
              <Text size="xs" c="dimmed">{label}</Text>
            </Stack>
          ))}
        </Group>

        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" mt="md">On Dark Background</Text>
        <Box p="xl" style={{ backgroundColor: '#1A1A1A', borderRadius: 12 }}>
          <Group gap="xl" wrap="wrap">
            {[
              { icon: <IconHome size={22} />, label: 'Dashboard' },
              { icon: <IconBriefcase size={22} />, label: 'Projects' },
              { icon: <IconUsers size={22} />, label: 'Clients' },
              { icon: <IconReceipt size={22} />, label: 'Invoices' },
            ].map(({ icon, label }) => (
              <Stack key={label} align="center" gap={4}>
                <Icon color="gold" variant="filled" size="lg">{icon}</Icon>
                <Text size="xs" c="#E8D5B7">{label}</Text>
              </Stack>
            ))}
          </Group>
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete SaaS navigation icon set with light variant on cream and filled variant on dark backgrounds. Alerts use rust, Settings use earth for differentiation.',
      },
    },
  },
};
