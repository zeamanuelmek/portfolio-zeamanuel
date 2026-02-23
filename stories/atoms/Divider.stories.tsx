import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Box, Text, Paper, Title } from '@mantine/core';
import { Divider } from '../../components/atoms/Divider';

const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**When to use:**
Divider separates content sections visually. Use between form groups, card sections, and page areas. Choose from four styles depending on the level of visual emphasis needed.

**Ethiopian Design Context:**
Three custom variants celebrate Ethiopian design heritage:
- \`goldGradient\` — Fades from transparent → gold → transparent for elegant section breaks
- \`habesha\` — Triple-line divider in Ethiopian flag colors (green/gold/red)
- \`diamond\` — Habesha textile-inspired diamond motif with gold accents

**Common Patterns:**
- Gold gradient between major page sections
- Habesha divider as a cultural signature in headers/footers
- Diamond pattern for premium/featured section separators
- Standard Mantine divider with labels for form sections

**Accessibility:**
Dividers are decorative (\`role="separator"\`). The custom variants (goldGradient, habesha, diamond) render as styled \`Box\` elements — purely visual.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    goldGradient: {
      description: 'Renders a gold fade-in/fade-out gradient line',
      control: 'boolean',
    },
    habesha: {
      description: 'Renders triple-line divider in Ethiopian flag colors (green/gold/red)',
      control: 'boolean',
    },
    diamond: {
      description: 'Renders a Habesha textile-inspired diamond motif',
      control: 'boolean',
    },
    label: {
      description: 'Text label displayed on the divider line (standard variant only)',
      control: 'text',
    },
    labelPosition: {
      description: 'Position of the label (left, center, right)',
      control: 'select',
      options: ['left', 'center', 'right'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Divider>;

export const Variants: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl" style={{ maxWidth: 600 }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Divider Variants</Text>

        <div>
          <Text fw={500} mb="md">Default (Mantine)</Text>
          <Divider />
        </div>

        <div>
          <Text fw={500} mb="md">Gold Gradient</Text>
          <Divider goldGradient />
        </div>

        <div>
          <Text fw={500} mb="md">Habesha (Ethiopian Flag)</Text>
          <Divider habesha />
        </div>

        <div>
          <Text fw={500} mb="md">Diamond Pattern</Text>
          <Divider diamond />
        </div>

        <div>
          <Text fw={500} mb="md">With Label</Text>
          <Divider label="Section Title" labelPosition="center" />
        </div>

        <div>
          <Text fw={500} mb="md">With Left Label</Text>
          <Divider label="Details" labelPosition="left" />
        </div>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All divider variants: standard Mantine, gold gradient, Ethiopian flag (habesha), diamond motif, and labeled dividers for section headings.',
      },
    },
  },
};

export const InContext: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl" style={{ maxWidth: 600 }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Dividers in Context</Text>

        <Paper p="xl" radius="lg" withBorder>
          <Title order={3} mb="xs">Project Overview</Title>
          <Text size="sm" c="dimmed">E-Commerce platform redesign for Ethiopian artisans.</Text>

          <Box my="lg"><Divider goldGradient /></Box>

          <Title order={5} mb="xs">Project Details</Title>
          <Text size="sm" c="dimmed">Timeline: 6 weeks | Budget: 85,000 ETB</Text>

          <Box my="lg"><Divider diamond /></Box>

          <Title order={5} mb="xs">Team</Title>
          <Text size="sm" c="dimmed">3 designers, 2 developers, 1 PM</Text>
        </Paper>

        <Box p="xl" style={{ backgroundColor: '#1A1A1A', borderRadius: 12 }}>
          <Title order={3} c="white" mb="sm">Dark Section</Title>
          <Text size="sm" c="#E8D5B7" mb="lg">Gold dividers shine on dark backgrounds.</Text>

          <Divider goldGradient />

          <Text size="sm" c="#E8D5B7" mt="lg" mb="lg">Between sections of dark content.</Text>

          <Divider habesha />

          <Text size="sm" c="#E8D5B7" mt="lg">Ethiopian flag divider adds cultural touch.</Text>
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dividers used within cards and dark sections. Gold gradient and diamond pattern separate project details. Habesha divider adds cultural flair on dark backgrounds.',
      },
    },
  },
};
