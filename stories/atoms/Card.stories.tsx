import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Box, Text, Group, Title, Badge as MantineBadge } from '@mantine/core';
import { IconBriefcase, IconCalendar, IconCurrencyDollar } from '@tabler/icons-react';
import { Card } from '../../components/atoms/Card';

const meta: Meta<typeof Card> = {
  title: 'Atoms/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**When to use:**
Card is the primary container for grouping related content — project summaries, client profiles, invoice items, and dashboard widgets. Use it whenever content needs visual separation from the page background.

**Default behavior:** All cards have a 1px gold (#D4AF37) border. On hover, cards lift 4px with a soft neutral shadow — clean, no gold glow.

**Ethiopian Design Context:**
Cards default to \`lg\` border-radius for the modern, rounded aesthetic. The gold border ties every card to the brand identity. Use \`Card.Section\` for header areas with brand gradients.

**Common Patterns:**
- Project cards with status badges, due dates, and ETB budgets
- Client profile cards with avatars and contact info
- Invoice/expense summary cards
- Dashboard stat widgets

**Accessibility:**
When cards are clickable, use \`component="a"\` or wrap in a link. The hover lift effect provides visual feedback. Ensure sufficient color contrast on dark card variants.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    shadow: {
      description: 'Card shadow elevation (xs | sm | md | lg | xl)',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    padding: {
      description: 'Inner padding (xs | sm | md | lg | xl)',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    withBorder: {
      description: 'Adds a subtle border around the card',
      control: 'boolean',
    },
    radius: {
      description: 'Border radius (defaults to lg from theme)',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Variants: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Card Variants</Text>

        <Group gap="lg" wrap="wrap" align="flex-start">
          <Card style={{ width: 300 }}>
            <Title order={4} mb="xs">Default Card</Title>
            <Text size="sm" c="dimmed">
              Default card with gold border, subtle hover lift, and lg border radius from theme defaults.
            </Text>
          </Card>

          <Card shadow="md" style={{ width: 300 }}>
            <Title order={4} mb="xs">Elevated Card</Title>
            <Text size="sm" c="dimmed">
              Higher elevation with medium shadow for important content.
            </Text>
          </Card>

          <Card shadow="lg" style={{ width: 300 }}>
            <Title order={4} mb="xs">High Elevation</Title>
            <Text size="sm" c="dimmed">
              Large shadow for modals, popovers, and featured content.
            </Text>
          </Card>
        </Group>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Three elevation levels. All cards share the gold border and hover lift effect.',
      },
    },
  },
};

export const HoverEffect: Story = {
  args: {
    children: (
      <>
        <Text fw={600}>Hover over me</Text>
        <Text size="sm" c="dimmed" mt="xs">
          Cards lift with a subtle shadow on hover — no gold glow.
        </Text>
      </>
    ),
    p: 'lg',
    w: 320,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default hover: 4px lift + soft neutral shadow. Gold border stays constant.',
      },
    },
  },
};

export const WithSections: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Card with Sections</Text>

        <Group gap="lg" wrap="wrap" align="flex-start">
          <Card style={{ width: 320 }} padding="lg">
            <Card.Section
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #E8C84A)',
                padding: 24,
              }}
            >
              <Text c="white" fw={700} size="lg">Gold Header</Text>
              <Text c="white" size="sm" style={{ opacity: 0.9 }}>Brand gradient section</Text>
            </Card.Section>
            <Text size="sm" c="dimmed" mt="md">
              Card sections allow distinct visual areas within a single card.
            </Text>
          </Card>

          <Card style={{ width: 320 }} padding="lg">
            <Card.Section
              style={{
                background: '#1A1A1A',
                padding: 24,
              }}
            >
              <Text c="#D4AF37" fw={700} size="lg">Dark Header</Text>
              <Text c="#E8D5B7" size="sm">Premium dark section</Text>
            </Card.Section>
            <Text size="sm" c="dimmed" mt="md">
              Dark sections for hero-style card headers with gold accents.
            </Text>
          </Card>
        </Group>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card.Section creates full-bleed areas for headers, images, or backgrounds. Use the gold gradient or dark backgrounds for visual hierarchy.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Ethiopian SaaS Use Cases</Text>

        <Group gap="lg" wrap="wrap" align="flex-start">
          <Card style={{ width: 320 }} padding="lg">
            <Group justify="space-between" mb="sm">
              <MantineBadge color="gold" variant="light">In Progress</MantineBadge>
              <IconBriefcase size={20} color="#D4AF37" />
            </Group>
            <Title order={4} mb="xs">E-Commerce Redesign</Title>
            <Text size="sm" c="dimmed" mb="md">
              Full redesign of online marketplace for Ethiopian artisans.
            </Text>
            <Group gap="lg">
              <Group gap={4}>
                <IconCalendar size={14} color="#6B6B6B" />
                <Text size="xs" c="dimmed">Due Mar 15</Text>
              </Group>
              <Group gap={4}>
                <IconCurrencyDollar size={14} color="#6B6B6B" />
                <Text size="xs" c="dimmed">45,000 ETB</Text>
              </Group>
            </Group>
          </Card>

          <Card style={{ width: 320 }} padding="lg">
            <Group justify="space-between" mb="sm">
              <MantineBadge color="forest">Completed</MantineBadge>
              <IconBriefcase size={20} color="#2C5530" />
            </Group>
            <Title order={4} mb="xs">Restaurant Branding</Title>
            <Text size="sm" c="dimmed" mb="md">
              Brand identity for traditional Ethiopian restaurant chain.
            </Text>
            <Group gap="lg">
              <Group gap={4}>
                <IconCalendar size={14} color="#6B6B6B" />
                <Text size="xs" c="dimmed">Delivered Feb 28</Text>
              </Group>
              <Group gap={4}>
                <IconCurrencyDollar size={14} color="#6B6B6B" />
                <Text size="xs" c="dimmed">25,000 ETB</Text>
              </Group>
            </Group>
          </Card>

          <Card style={{ width: 320, backgroundColor: '#1A1A1A' }} padding="lg" withBorder={false}>
            <MantineBadge color="rust" variant="light" mb="sm">Urgent</MantineBadge>
            <Title order={4} mb="xs" c="white">Mobile App Launch</Title>
            <Text size="sm" c="#E8D5B7" mb="md">
              TeleBirr-integrated payment app for local businesses.
            </Text>
            <Group gap="lg">
              <Group gap={4}>
                <IconCalendar size={14} color="#D4AF37" />
                <Text size="xs" c="#E8D5B7">Due Tomorrow</Text>
              </Group>
              <Group gap={4}>
                <IconCurrencyDollar size={14} color="#D4AF37" />
                <Text size="xs" c="#E8D5B7">120,000 ETB</Text>
              </Group>
            </Group>
          </Card>
        </Group>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Project cards showing real Ethiopian SaaS patterns: status badges, ETB budgets, due dates, and a dark variant for urgent items with TeleBirr integration.',
      },
    },
  },
};

export const OnDarkBackground: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#1A1A1A', borderRadius: 12 }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">On Dark Background</Text>

        <Group gap="lg" wrap="wrap" align="flex-start">
          <Card
            style={{ width: 300, backgroundColor: '#3D3D3D', border: '1px solid rgba(212,175,55,0.2)' }}
            withBorder={false}
          >
            <Title order={4} mb="xs" c="white">Dark Card</Title>
            <Text size="sm" c="#E8D5B7">
              Cards on dark backgrounds use charcoal bg with gold border hints.
            </Text>
          </Card>

          <Card
            style={{
              width: 300,
              backgroundColor: '#3D3D3D',
              border: '1px solid rgba(212,175,55,0.2)',
            }}
            withBorder={false}
          >
            <Title order={4} mb="xs" c="white">Dark Hover Card</Title>
            <Text size="sm" c="#E8D5B7">
              Hover lift effect works on dark backgrounds too.
            </Text>
          </Card>
        </Group>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dark background cards with charcoal fills and gold-tinted borders. The hover lift effect works on any background.',
      },
    },
  },
};
