import type { Meta, StoryObj } from '@storybook/react';
import { Box, Text, Paper, Title } from '@mantine/core';
import { Stack } from '../../components/atoms/Stack';

const meta: Meta<typeof Stack> = {
  title: 'Atoms/Stack',
  component: Stack,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**When to use:**
Stack arranges children vertically with consistent spacing. Use for form layouts, card content, notification feeds, and any vertical list of elements. Prefer Stack over manual margin/padding.

**Ethiopian Design Context:**
Stack is the primary vertical layout tool. Use \`gap="sm"\` for form fields, \`gap="xs"\` for compact lists (notification feeds, line items), and \`gap="xl"\` for major page sections.

**Common Patterns:**
- Form layouts with labeled inputs stacked vertically
- Notification/activity feeds with compact spacing
- Card content organization (title → description → metadata)
- Page section separators with large gaps

**Accessibility:**
Stack produces semantic HTML structure. Screen readers process content in natural reading order.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    gap: {
      description: 'Vertical spacing between children (xs | sm | md | lg | xl or number)',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    align: {
      description: 'Horizontal alignment of children',
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'stretch'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Stack>;

const DemoBox = ({ label, color = '#D4AF37' }: { label: string; color?: string }) => (
  <Paper p="md" radius="lg" style={{ border: `2px solid ${color}`, backgroundColor: `${color}1a` }}>
    <Text size="sm" fw={500}>{label}</Text>
  </Paper>
);

export const GapSizes: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Stack Gap Sizes</Text>

        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((gap) => (
          <div key={gap}>
            <Text size="sm" fw={500} mb="xs">gap=&quot;{gap}&quot;</Text>
            <Stack gap={gap} style={{ maxWidth: 300 }}>
              <DemoBox label="Item 1" />
              <DemoBox label="Item 2" />
              <DemoBox label="Item 3" />
            </Stack>
          </div>
        ))}
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Five gap sizes from xs (compact lists) to xl (page sections). Choose based on content density and visual hierarchy.',
      },
    },
  },
};

export const Alignment: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Stack Alignment</Text>

        <div>
          <Text size="sm" fw={500} mb="xs">align=&quot;flex-start&quot; (default)</Text>
          <Stack align="flex-start" gap="xs">
            <Paper p="sm" radius="lg" style={{ border: '2px solid #D4AF37' }}><Text size="sm">Short</Text></Paper>
            <Paper p="sm" radius="lg" style={{ border: '2px solid #D4AF37' }}><Text size="sm">Medium content</Text></Paper>
            <Paper p="sm" radius="lg" style={{ border: '2px solid #D4AF37' }}><Text size="sm">Longer content here</Text></Paper>
          </Stack>
        </div>

        <div>
          <Text size="sm" fw={500} mb="xs">align=&quot;center&quot;</Text>
          <Stack align="center" gap="xs">
            <Paper p="sm" radius="lg" style={{ border: '2px solid #C44536' }}><Text size="sm">Short</Text></Paper>
            <Paper p="sm" radius="lg" style={{ border: '2px solid #C44536' }}><Text size="sm">Medium content</Text></Paper>
            <Paper p="sm" radius="lg" style={{ border: '2px solid #C44536' }}><Text size="sm">Longer content here</Text></Paper>
          </Stack>
        </div>

        <div>
          <Text size="sm" fw={500} mb="xs">align=&quot;stretch&quot;</Text>
          <Stack align="stretch" gap="xs" style={{ maxWidth: 300 }}>
            <Paper p="sm" radius="lg" style={{ border: '2px solid #2C5530' }}><Text size="sm">Short</Text></Paper>
            <Paper p="sm" radius="lg" style={{ border: '2px solid #2C5530' }}><Text size="sm">Medium content</Text></Paper>
            <Paper p="sm" radius="lg" style={{ border: '2px solid #2C5530' }}><Text size="sm">Longer content here</Text></Paper>
          </Stack>
        </div>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Three alignment options. Use flex-start for forms, center for hero content, stretch for full-width items in constrained containers.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl" style={{ maxWidth: 400 }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Ethiopian SaaS Use Cases</Text>

        <Paper p="lg" radius="lg" withBorder>
          <Title order={4} mb="md">Project Form Layout</Title>
          <Stack gap="sm">
            <Paper p="sm" radius="md" style={{ backgroundColor: '#FAF8F3' }}>
              <Text size="xs" c="dimmed">Project Name Input</Text>
            </Paper>
            <Paper p="sm" radius="md" style={{ backgroundColor: '#FAF8F3' }}>
              <Text size="xs" c="dimmed">Client Select</Text>
            </Paper>
            <Paper p="sm" radius="md" style={{ backgroundColor: '#FAF8F3' }}>
              <Text size="xs" c="dimmed">Description TextArea</Text>
            </Paper>
            <Paper p="sm" radius="md" style={{ backgroundColor: '#FAF8F3' }}>
              <Text size="xs" c="dimmed">Budget Slider</Text>
            </Paper>
            <Paper p="sm" radius="md" style={{ backgroundColor: '#D4AF37', color: 'white' }}>
              <Text size="xs" c="white" ta="center" fw={500}>Submit Button</Text>
            </Paper>
          </Stack>
        </Paper>

        <Paper p="lg" radius="lg" withBorder>
          <Title order={4} mb="md">Notification Feed</Title>
          <Stack gap="xs">
            {['Payment received: 25,000 ETB', 'New project assigned', 'Invoice overdue: #1042'].map((msg) => (
              <Paper key={msg} p="sm" radius="md" style={{ borderLeft: '3px solid #D4AF37', backgroundColor: '#FAF8F3' }}>
                <Text size="sm">{msg}</Text>
              </Paper>
            ))}
          </Stack>
        </Paper>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Stack patterns for Ethiopian SaaS: form layout with sm gap for field spacing, and compact notification feed with xs gap and gold left-border accent.',
      },
    },
  },
};
