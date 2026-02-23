import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack, Group, Text, Paper } from '@mantine/core';
import { Heading } from '../../components/atoms/Heading';

const meta: Meta<typeof Heading> = {
  title: 'Atoms/Heading',
  component: Heading,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**When to use:**
Heading renders semantic headings (h1–h6) using Space Grotesk font. Use for page titles, section headers, card titles, and hero text. Supports a \`goldGradient\` prop for the signature brand effect.

**Ethiopian Design Context:**
Headings use Space Grotesk (set in \`createClientTheme\`) for a modern geometric feel. The \`goldGradient\` prop applies \`linear-gradient(135deg, #D4AF37, #E8C84A)\` as text fill — the signature SemEnaWerk hero effect. Most striking on dark (#1A1A1A) backgrounds.

**Common Patterns:**
- h1 + goldGradient for hero section brand names
- h2 for page titles (Dashboard, Projects, Invoices)
- h3/h4 for card and section titles
- h5/h6 for small labels and subheadings

**Accessibility:**
Uses semantic \`<h1>\`–\`<h6>\` tags. Maintain proper heading hierarchy — don't skip levels. The goldGradient effect is purely visual and doesn't affect screen reader output.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    order: {
      description: 'Heading level (1–6), maps to h1–h6 HTML elements',
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
    },
    goldGradient: {
      description: 'Applies the signature gold gradient (D4AF37 → E8C84A) as text fill',
      control: 'boolean',
    },
    c: {
      description: 'Text color override',
      control: 'text',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Heading>;

export const Scale: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Heading Scale (Space Grotesk)</Text>

        <Paper p="xl" radius="lg" withBorder>
          <Stack gap="lg">
            {([1, 2, 3, 4, 5, 6] as const).map((order) => (
              <Group key={order} align="baseline" wrap="nowrap">
                <Text size="xs" ff="monospace" c="#D4AF37" fw={600} style={{ minWidth: 30 }}>
                  h{order}
                </Text>
                <Heading order={order}>SemEnaWerk Design System</Heading>
              </Group>
            ))}
          </Stack>
        </Paper>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Full heading scale h1–h6 in Space Grotesk. Sizes are configured in createClientTheme with responsive values.',
      },
    },
  },
};

export const GoldGradient: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Gold Gradient Headings</Text>

        <Paper p="xl" radius="lg" withBorder>
          <Stack gap="md">
            <Heading order={1} goldGradient>Building Digital Ethiopia</Heading>
            <Heading order={2} goldGradient>Premium Design Services</Heading>
            <Heading order={3} goldGradient>Crafted with Purpose</Heading>
          </Stack>
        </Paper>

        <Box p="xl" style={{ backgroundColor: '#1A1A1A', borderRadius: 12 }}>
          <Stack gap="md">
            <Heading order={1} goldGradient>Gold on Dark</Heading>
            <Heading order={2} goldGradient>Striking Contrast</Heading>
            <Text c="#E8D5B7" size="lg">
              Gold gradient headings are the signature effect on dark hero sections.
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The `goldGradient` prop applies the signature gold text fill. Most impactful at large sizes (h1/h2) on dark backgrounds.',
      },
    },
  },
};

export const OnDarkBackground: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#1A1A1A', borderRadius: 12 }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Headings on Dark</Text>

        <Stack gap="md">
          <Heading order={1} c="white">White Heading</Heading>
          <Heading order={2} c="#E8D5B7">Sand Heading</Heading>
          <Heading order={3} c="#D4AF37">Gold Heading</Heading>
          <Heading order={3} goldGradient>Gold Gradient Heading</Heading>
        </Stack>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Heading color options on dark surfaces: white for primary, sand (#E8D5B7) for secondary, solid gold, and gold gradient.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl" style={{ maxWidth: 600 }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Ethiopian SaaS Use Cases</Text>

        {/* Hero section */}
        <Box p="xl" style={{ backgroundColor: '#1A1A1A', borderRadius: 12 }}>
          <Heading order={1} goldGradient>SemEnaWerk</Heading>
          <Heading order={3} c="#E8D5B7" mt="xs">Digital Agency for Ethiopia&apos;s Future</Heading>
        </Box>

        {/* Page title */}
        <div>
          <Heading order={2}>Project Dashboard</Heading>
          <Text c="dimmed" size="sm" mt="xs">Manage your active projects and invoices</Text>
        </div>

        {/* Section heading */}
        <Paper p="lg" radius="lg" withBorder>
          <Heading order={4} mb="xs">Recent Activity</Heading>
          <Text size="sm" c="dimmed">Latest updates from your team and clients.</Text>
        </Paper>

        {/* Card heading */}
        <Paper p="lg" radius="lg" withBorder>
          <Heading order={5} mb="xs">Invoice #1042</Heading>
          <Text size="sm" c="dimmed">45,000 ETB | Due March 15, 2026</Text>
        </Paper>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Heading hierarchy in practice: h1 goldGradient hero, h2 page title, h4 section header, h5 card title. Shows proper semantic nesting.',
      },
    },
  },
};
