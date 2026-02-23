import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack, Group, Paper, Title } from '@mantine/core';
import { Text } from '../../components/atoms/Text';

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**When to use:**
Text renders body copy, labels, descriptions, and any non-heading text content. Uses Inter font for readability. Supports a \`goldGradient\` prop for accent labels and featured text.

**Ethiopian Design Context:**
Inter provides excellent readability for both English and transliterated Amharic text. The \`goldGradient\` prop creates accent labels (section headers, feature highlights). Use \`c="dimmed"\` for secondary text and \`lineClamp\` for truncated descriptions.

**Common Patterns:**
- Body text with dimmed secondary descriptions
- Gold gradient section labels (uppercase, semibold, xs size)
- ETB currency displays with weight emphasis
- Strikethrough for discounted prices
- Line-clamped card descriptions

**Accessibility:**
Text renders semantic \`<p>\` elements by default. Use \`component="span"\` for inline contexts. The goldGradient is visual-only — content is still readable by screen readers.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'Text size (xs | sm | md | lg | xl)',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    fw: {
      description: 'Font weight (400=regular, 500=medium, 600=semibold, 700=bold)',
      control: 'select',
      options: [400, 500, 600, 700],
    },
    c: {
      description: 'Text color — use "dimmed" for secondary, brand names for accents',
      control: 'text',
    },
    goldGradient: {
      description: 'Applies the signature gold gradient as text fill',
      control: 'boolean',
    },
    lineClamp: {
      description: 'Number of lines before truncating with ellipsis',
      control: 'number',
    },
    tt: {
      description: 'Text transform (uppercase, capitalize, lowercase)',
      control: 'select',
      options: ['uppercase', 'capitalize', 'lowercase'],
    },
    td: {
      description: 'Text decoration (underline, line-through)',
      control: 'select',
      options: ['underline', 'line-through'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Sizes: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} goldGradient>Text Sizes (Inter)</Text>

        <Paper p="xl" radius="lg" withBorder>
          <Stack gap="md">
            {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
              <Group key={size} align="baseline" wrap="nowrap">
                <Text size="xs" ff="monospace" c="#D4AF37" fw={600} style={{ minWidth: 30 }}>
                  {size}
                </Text>
                <Text size={size}>Ethiopian-inspired design with warm gold accents and earth tones</Text>
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
        story: 'Five text sizes in Inter. Use xs for labels/captions, sm for descriptions, md for body text, lg/xl for featured content.',
      },
    },
  },
};

export const Weights: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} goldGradient>Font Weights</Text>

        <Paper p="xl" radius="lg" withBorder>
          <Stack gap="md">
            {[
              { weight: 400, label: '400 — Regular (body text)' },
              { weight: 500, label: '500 — Medium (buttons, labels)' },
              { weight: 600, label: '600 — Semibold (emphasis)' },
              { weight: 700, label: '700 — Bold (headings)' },
            ].map(({ weight, label }) => (
              <Group key={weight} align="baseline" wrap="nowrap">
                <Text size="xs" ff="monospace" c="#D4AF37" fw={600} style={{ minWidth: 40 }}>
                  {weight}
                </Text>
                <Text size="lg" fw={weight}>{label}</Text>
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
        story: 'Four font weights available in Inter. Use 400 for body, 500 for buttons/labels, 600 for emphasis, 700 for strong headings.',
      },
    },
  },
};

export const Colors: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} goldGradient>Text Colors</Text>

        <Paper p="xl" radius="lg" withBorder>
          <Stack gap="sm">
            <Text>Primary text (default #2C2C2C)</Text>
            <Text c="dimmed">Dimmed / secondary text</Text>
            <Text c="#D4AF37">Gold accent text</Text>
            <Text c="#C44536">Rust accent text</Text>
            <Text c="#2C5530">Forest accent text</Text>
            <Text c="#8B4513">Earth accent text</Text>
          </Stack>
        </Paper>

        <Box p="xl" style={{ backgroundColor: '#1A1A1A', borderRadius: 12 }}>
          <Stack gap="sm">
            <Text c="white">White text on dark</Text>
            <Text c="#E8D5B7">Sand text on dark</Text>
            <Text c="#D4AF37">Gold text on dark</Text>
            <Text goldGradient fw={600}>Gold gradient text on dark</Text>
          </Stack>
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Color palette for text on light and dark backgrounds. Use dimmed for secondary, brand colors for accents, white/sand on dark surfaces.',
      },
    },
  },
};

export const GoldGradient: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} goldGradient>Gold Gradient Text</Text>

        <Paper p="xl" radius="lg" withBorder>
          <Stack gap="md">
            <Text size="xl" fw={700} goldGradient>Large bold gradient text</Text>
            <Text size="lg" fw={600} goldGradient>Medium semibold gradient</Text>
            <Text size="md" fw={500} goldGradient>Regular medium gradient</Text>
            <Text size="sm" fw={600} goldGradient tt="uppercase">Small uppercase gradient label</Text>
          </Stack>
        </Paper>

        <Box p="xl" style={{ backgroundColor: '#1A1A1A', borderRadius: 12 }}>
          <Text size="xl" fw={700} goldGradient>Gold gradient shines on dark backgrounds</Text>
          <Text c="#E8D5B7" mt="sm">Pair with sand-colored body text for best contrast.</Text>
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The `goldGradient` prop creates branded accent text. Best used for section labels (xs, uppercase, semibold) and featured headlines on dark backgrounds.',
      },
    },
  },
};

export const TextTransforms: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} goldGradient>Text Transforms &amp; Decoration</Text>

        <Paper p="xl" radius="lg" withBorder>
          <Stack gap="sm">
            <Text tt="uppercase" fw={600} size="sm" c="#D4AF37">Uppercase label</Text>
            <Text tt="capitalize">capitalized sentence text</Text>
            <Text td="underline">Underlined text for emphasis</Text>
            <Text td="line-through" c="dimmed">Strikethrough for old prices</Text>
            <Text fs="italic" c="dimmed">Italic for quotes or descriptions</Text>
            <Text ff="monospace">Monospace for code or data</Text>
            <Text lineClamp={2}>
              This is a long text that will be truncated after two lines. Ethiopian-inspired design
              system with gold accents, warm earth tones, and cultural elements that celebrate the
              rich heritage of Ethiopian craftsmanship and modern digital innovation.
            </Text>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Text transforms and decorations: uppercase labels, line-through for discounted prices, monospace for data, and lineClamp for truncated descriptions.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl" style={{ maxWidth: 500 }}>
        <Text size="xs" tt="uppercase" fw={600} goldGradient>Ethiopian SaaS Use Cases</Text>

        <Paper p="lg" radius="lg" withBorder>
          <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" mb="xs">Project Overview</Text>
          <Title order={4}>E-Commerce Platform Redesign</Title>
          <Text size="sm" c="dimmed" mt="xs">
            Complete redesign of online marketplace for Ethiopian artisans,
            featuring TeleBirr integration and Amharic language support.
          </Text>
          <Group mt="md" gap="lg">
            <div>
              <Text size="xs" c="dimmed">Budget</Text>
              <Text fw={600}>120,000 ETB</Text>
            </div>
            <div>
              <Text size="xs" c="dimmed">Timeline</Text>
              <Text fw={600}>8 weeks</Text>
            </div>
            <div>
              <Text size="xs" c="dimmed">Status</Text>
              <Text fw={600} c="#2C5530">Active</Text>
            </div>
          </Group>
        </Paper>

        <Paper p="lg" radius="lg" withBorder>
          <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" mb="xs">Invoice</Text>
          <Group justify="space-between">
            <Text fw={600}>Invoice #1042</Text>
            <Text td="line-through" c="dimmed" size="sm">50,000 ETB</Text>
          </Group>
          <Text fw={700} size="xl" c="#2C5530">45,000 ETB</Text>
          <Text size="xs" c="dimmed" mt="xs">10% discount applied</Text>
        </Paper>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Text in context: gold uppercase section labels, dimmed descriptions, bold ETB amounts, and strikethrough for discounted prices.',
      },
    },
  },
};
