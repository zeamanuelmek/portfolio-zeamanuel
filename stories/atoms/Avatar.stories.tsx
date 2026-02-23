import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Box, Text, Group } from '@mantine/core';
import { IconUser, IconBriefcase, IconBuilding } from '@tabler/icons-react';
import { Avatar } from '../../components/atoms/Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**When to use:**
Avatar represents a user, team member, or organization. Use for profile images, team lists, comment threads, and client directories. Falls back to initials or a placeholder icon when no image is provided.

**Ethiopian Design Context:**
Defaults to \`color="gold"\` for the background fill. Use the brand palette to differentiate team roles or client types. \`Avatar.Group\` with overlapping avatars is perfect for showing project team members.

**Common Patterns:**
- Team member lists with initials and role descriptions
- Client/organization avatars with building icons
- Avatar.Group for project team composition at a glance
- Comment thread author indicators

**Accessibility:**
Always provide meaningful \`alt\` text for image avatars. Initials-based avatars are decorative — pair with visible name text nearby.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'Background color from theme palette (defaults to gold)',
      control: 'select',
      options: ['gold', 'rust', 'forest', 'earth', 'gray'],
    },
    variant: {
      description: 'Visual style — filled (default), light, or outline',
      control: 'select',
      options: ['filled', 'light', 'outline'],
    },
    size: {
      description: 'Avatar size (xs | sm | md | lg | xl or number)',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    radius: {
      description: 'Border radius — defaults to full circle (xl)',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    src: {
      description: 'Image URL — falls back to children (initials) or placeholder',
      control: 'text',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Variants: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Avatar Variants</Text>

        <div>
          <Text fw={500} mb="sm">With Initials (Gold Default)</Text>
          <Group gap="md">
            <Avatar>ZA</Avatar>
            <Avatar color="rust">AB</Avatar>
            <Avatar color="forest">MK</Avatar>
            <Avatar color="earth">TG</Avatar>
          </Group>
        </div>

        <div>
          <Text fw={500} mb="sm">With Icons</Text>
          <Group gap="md">
            <Avatar><IconUser size={20} /></Avatar>
            <Avatar color="rust"><IconBriefcase size={20} /></Avatar>
            <Avatar color="forest"><IconBuilding size={20} /></Avatar>
          </Group>
        </div>

        <div>
          <Text fw={500} mb="sm">Placeholder (No Content)</Text>
          <Group gap="md">
            <Avatar />
            <Avatar color="rust" />
            <Avatar color="forest" />
          </Group>
        </div>

        <div>
          <Text fw={500} mb="sm">Variants</Text>
          <Group gap="md">
            <Avatar variant="filled">ZA</Avatar>
            <Avatar variant="light">ZA</Avatar>
            <Avatar variant="outline">ZA</Avatar>
          </Group>
        </div>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatar content types: initials across brand colors, icon-based, empty placeholder, and the three visual variants (filled, light, outline).',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="md">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Avatar Sizes</Text>
        <Group gap="md" align="center">
          <Avatar size="xs">Z</Avatar>
          <Avatar size="sm">ZA</Avatar>
          <Avatar size="md">ZA</Avatar>
          <Avatar size="lg">ZA</Avatar>
          <Avatar size="xl">ZA</Avatar>
        </Group>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Five sizes. Use sm for inline mentions, md for lists, lg/xl for profile headers and detail views.',
      },
    },
  },
};

export const AvatarGroup: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Avatar Group (Team Members)</Text>
        <Avatar.Group>
          <Avatar color="gold">ZA</Avatar>
          <Avatar color="rust">AB</Avatar>
          <Avatar color="forest">MK</Avatar>
          <Avatar color="earth">TG</Avatar>
          <Avatar>+3</Avatar>
        </Avatar.Group>

        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" mt="md">Large Group</Text>
        <Avatar.Group>
          <Avatar size="lg" color="gold">ZA</Avatar>
          <Avatar size="lg" color="rust">AB</Avatar>
          <Avatar size="lg" color="forest">MK</Avatar>
          <Avatar size="lg">+5</Avatar>
        </Avatar.Group>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatar.Group shows overlapping team members with a "+N" overflow indicator. Use on project cards and team composition views.',
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
          <Text fw={500} mb="sm">Team Members</Text>
          <Stack gap="xs">
            {[
              { initials: 'ZA', name: 'Zeamanuel Admasu', role: 'Lead Designer', color: 'gold' as const },
              { initials: 'AB', name: 'Abebe Bikila', role: 'Developer', color: 'rust' as const },
              { initials: 'MK', name: 'Meron Kebede', role: 'Project Manager', color: 'forest' as const },
              { initials: 'TG', name: 'Tigist Girma', role: 'Marketing', color: 'earth' as const },
            ].map(({ initials, name, role, color }) => (
              <Group key={initials} gap="sm">
                <Avatar color={color} size="md">{initials}</Avatar>
                <div>
                  <Text size="sm" fw={500}>{name}</Text>
                  <Text size="xs" c="dimmed">{role}</Text>
                </div>
              </Group>
            ))}
          </Stack>
        </div>

        <div>
          <Text fw={500} mb="sm">Client Avatars</Text>
          <Group gap="sm">
            <Avatar color="gold" radius="md" size="lg"><IconBuilding size={24} /></Avatar>
            <Avatar color="forest" radius="md" size="lg"><IconBuilding size={24} /></Avatar>
            <Avatar color="rust" radius="md" size="lg"><IconBuilding size={24} /></Avatar>
          </Group>
        </div>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Team member list with Ethiopian names and color-coded roles. Client organization avatars use rounded-square radius for distinction.',
      },
    },
  },
};
