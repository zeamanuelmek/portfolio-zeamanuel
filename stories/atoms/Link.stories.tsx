import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack, Text, Paper, Group } from '@mantine/core';
import { IconExternalLink, IconArrowRight } from '@tabler/icons-react';
import { Link } from '../../components/atoms/Link';

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**When to use:**
Link renders styled anchor elements for navigation and references. Use for inline text links, breadcrumbs, footer navigation, and any clickable text that navigates to another page or section.

**Ethiopian Design Context:**
Defaults to gold color (\`c="gold"\`) with underline on hover — matching the brand accent without being visually heavy. On dark backgrounds, use \`c="gold"\` or \`c="#E8D5B7"\` (sand) for sufficient contrast.

**Common Patterns:**
- Inline links within body text (project names, invoice references)
- Breadcrumb navigation (Dashboard / Projects / E-Commerce Redesign)
- Footer navigation columns on dark backgrounds
- "View all" and "See more" action links with arrow icons

**Accessibility:**
Links use semantic \`<a>\` elements with proper focus styles. Underline on hover provides clear affordance. Use descriptive link text — avoid "click here".
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      description: 'Link destination URL',
      control: 'text',
    },
    c: {
      description: 'Link color (defaults to gold)',
      control: 'text',
    },
    size: {
      description: 'Text size (xs | sm | md | lg | xl)',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    underline: {
      description: 'Underline behavior — hover (default), always, or never',
      control: 'select',
      options: ['hover', 'always', 'never'],
    },
    fw: {
      description: 'Font weight for emphasis',
      control: 'select',
      options: [400, 500, 600, 700],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Link>;

export const Variants: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Link Variants</Text>

        <Paper p="xl" radius="lg" withBorder>
          <Stack gap="md">
            <div>
              <Text fw={500} mb="xs">Default (gold, underline on hover)</Text>
              <Link href="#">View project details</Link>
            </div>

            <div>
              <Text fw={500} mb="xs">Always underlined</Text>
              <Link href="#" underline="always">Always underlined link</Link>
            </div>

            <div>
              <Text fw={500} mb="xs">Never underlined</Text>
              <Link href="#" underline="never">Never underlined link</Link>
            </div>

            <div>
              <Text fw={500} mb="xs">Brand colors</Text>
              <Group gap="lg">
                <Link href="#" c="gold">Gold link</Link>
                <Link href="#" c="rust">Rust link</Link>
                <Link href="#" c="forest">Forest link</Link>
                <Link href="#" c="earth">Earth link</Link>
              </Group>
            </div>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Link variants: default gold with hover underline, always underlined, never underlined, and brand color options.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="md">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Link Sizes</Text>
        <Paper p="xl" radius="lg" withBorder>
          <Stack gap="sm">
            <Link href="#" size="xs">Extra small link</Link>
            <Link href="#" size="sm">Small link</Link>
            <Link href="#" size="md">Medium link (default)</Link>
            <Link href="#" size="lg">Large link</Link>
            <Link href="#" size="xl">Extra large link</Link>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Five sizes matching the Text size scale. Use sm for footer/breadcrumb links, md for inline text, lg/xl for featured links.',
      },
    },
  },
};

export const WithIcons: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="md">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Links with Icons</Text>
        <Paper p="xl" radius="lg" withBorder>
          <Stack gap="sm">
            <Group gap={4}>
              <Link href="#">View documentation</Link>
              <IconExternalLink size={14} color="#D4AF37" />
            </Group>

            <Group gap={4}>
              <Link href="#">Go to dashboard</Link>
              <IconArrowRight size={14} color="#D4AF37" />
            </Group>

            <Group gap={4}>
              <Link href="#" fw={600}>See all projects</Link>
              <IconArrowRight size={14} color="#D4AF37" />
            </Group>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Links paired with icons: external link indicator and arrow-right for navigation. Use gold-colored icons to match the link color.',
      },
    },
  },
};

export const InlineWithText: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl" style={{ maxWidth: 500 }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Inline Links</Text>

        <Paper p="xl" radius="lg" withBorder>
          <Text size="sm">
            Welcome to <Link href="#">SemEnaWerk</Link>, an Ethiopian-inspired digital agency.
            Check out our <Link href="#">portfolio</Link> or read about our{' '}
            <Link href="#">design process</Link>.
          </Text>
        </Paper>

        <Paper p="xl" radius="lg" withBorder>
          <Text size="sm">
            Your invoice <Link href="#" fw={600}>#1042</Link> for{' '}
            <Link href="#" c="forest" fw={600}>E-Commerce Redesign</Link> is due on March 15.
            Please <Link href="#" c="rust">pay now</Link> to avoid late fees.
          </Text>
        </Paper>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Inline links within body text. Use default gold for general links, forest for positive references, rust for action-required items.',
      },
    },
  },
};

export const OnDarkBackground: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#1A1A1A', borderRadius: 12 }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Links on Dark Background</Text>

        <Stack gap="sm">
          <Link href="#" c="gold">Gold link on dark</Link>
          <Link href="#" c="#E8D5B7">Sand link on dark</Link>
          <Link href="#" c="white">White link on dark</Link>
        </Stack>

        <Text size="sm" c="#E8D5B7">
          Visit <Link href="#" c="gold">our portfolio</Link> or{' '}
          <Link href="#" c="gold">contact us</Link> for a free consultation.
        </Text>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Link colors on dark backgrounds: gold for primary links, sand for secondary, white for high contrast.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl" style={{ maxWidth: 500 }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Ethiopian SaaS Use Cases</Text>

        {/* Breadcrumb-style */}
        <Paper p="lg" radius="lg" withBorder>
          <Group gap={8}>
            <Link href="#" size="sm">Dashboard</Link>
            <Text size="sm" c="dimmed">/</Text>
            <Link href="#" size="sm">Projects</Link>
            <Text size="sm" c="dimmed">/</Text>
            <Text size="sm" fw={500}>E-Commerce Redesign</Text>
          </Group>
        </Paper>

        {/* Footer links */}
        <Box p="lg" style={{ backgroundColor: '#1A1A1A', borderRadius: 12 }}>
          <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" mb="md">Footer Navigation</Text>
          <Group gap="xl">
            <Stack gap="xs">
              <Text size="xs" c="#E8D5B7" fw={600}>Services</Text>
              <Link href="#" c="#E8D5B7" size="sm">Branding</Link>
              <Link href="#" c="#E8D5B7" size="sm">Web Design</Link>
              <Link href="#" c="#E8D5B7" size="sm">Mobile Apps</Link>
            </Stack>
            <Stack gap="xs">
              <Text size="xs" c="#E8D5B7" fw={600}>Company</Text>
              <Link href="#" c="#E8D5B7" size="sm">About</Link>
              <Link href="#" c="#E8D5B7" size="sm">Portfolio</Link>
              <Link href="#" c="#E8D5B7" size="sm">Contact</Link>
            </Stack>
            <Stack gap="xs">
              <Text size="xs" c="#E8D5B7" fw={600}>Legal</Text>
              <Link href="#" c="#E8D5B7" size="sm">Privacy</Link>
              <Link href="#" c="#E8D5B7" size="sm">Terms</Link>
            </Stack>
          </Group>
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb navigation pattern and dark footer with three-column link layout. Sand-colored links on dark for the SemEnaWerk footer style.',
      },
    },
  },
};
