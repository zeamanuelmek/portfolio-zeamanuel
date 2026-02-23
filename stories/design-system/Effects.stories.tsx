import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Text, Title, Box, Group, Paper } from '@mantine/core';

const meta: Meta = {
  title: 'Design System/Effects',
  parameters: {
    layout: 'padded',
  },
};
export default meta;

export const GoldTextGradient: StoryObj = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl">
        <Title order={2} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Gold Text Gradient
        </Title>
        <Text c="#6B6B6B">
          Signature gold gradient text effect for headlines and featured content.
        </Text>

        <Paper p="xl" radius="lg" withBorder>
          <Stack gap="lg">
            <Text
              size="xl"
              fw={700}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '3rem',
                background: 'linear-gradient(135deg, #D4AF37, #E8C84A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              SemEnaWerk
            </Text>
            <Text size="xs" ff="monospace" c="#6B6B6B">
              background: linear-gradient(135deg, #D4AF37, #E8C84A)
            </Text>
          </Stack>
        </Paper>

        <Box p="xl" style={{ backgroundColor: '#1A1A1A', borderRadius: 12 }}>
          <Stack gap="lg">
            <Text
              fw={700}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '3rem',
                background: 'linear-gradient(135deg, #D4AF37, #E8C84A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Building Digital Ethiopia
            </Text>
            <Text c="#E8D5B7" size="lg">
              Ethiopian-inspired design that speaks to the future.
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Box>
  ),
};

export const GlassMorphism: StoryObj = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl">
        <Title order={2} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Glass Morphism
        </Title>
        <Text c="#6B6B6B">Frosted glass effect for overlays and featured sections.</Text>

        <Box
          p="xl"
          style={{
            background: 'linear-gradient(135deg, #D4AF37, #C44536, #2C5530)',
            borderRadius: 16,
            minHeight: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <Paper
            p="xl"
            radius="lg"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              maxWidth: 400,
            }}
          >
            <Text c="white" fw={700} size="xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Glass Card
            </Text>
            <Text c="white" size="sm" mt="sm" style={{ opacity: 0.9 }}>
              Frosted glass overlay with brand gradient background.
              Perfect for hero sections and featured content.
            </Text>
          </Paper>
        </Box>

        <Box
          p="xl"
          style={{
            background: '#1A1A1A',
            borderRadius: 16,
            minHeight: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Paper
            p="xl"
            radius="lg"
            style={{
              background: 'rgba(212, 175, 55, 0.1)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              maxWidth: 400,
            }}
          >
            <Text c="#D4AF37" fw={700} size="xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Dark Glass
            </Text>
            <Text c="#E8D5B7" size="sm" mt="sm">
              Gold-tinted glass on dark background. Premium Ethiopian aesthetic.
            </Text>
          </Paper>
        </Box>
      </Stack>
    </Box>
  ),
};

export const HabeshaDivider: StoryObj = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl">
        <Title order={2} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Decorative Elements
        </Title>
        <Text c="#6B6B6B">Ethiopian-inspired decorative patterns and dividers.</Text>

        <Paper p="xl" radius="lg" withBorder>
          <Stack gap="xl">
            {/* Gold line divider */}
            <div>
              <Text size="sm" fw={600} c="#2C2C2C" mb="sm">Gold Line Divider</Text>
              <Box
                style={{
                  height: 2,
                  background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
                  width: '100%',
                }}
              />
            </div>

            {/* Diamond pattern divider */}
            <div>
              <Text size="sm" fw={600} c="#2C2C2C" mb="sm">Habesha Diamond Divider</Text>
              <Box style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Box style={{ flex: 1, height: 1, backgroundColor: '#D4AF37', opacity: 0.3 }} />
                <Box style={{ width: 8, height: 8, backgroundColor: '#D4AF37', transform: 'rotate(45deg)' }} />
                <Box style={{ width: 6, height: 6, backgroundColor: '#E8C84A', transform: 'rotate(45deg)' }} />
                <Box style={{ width: 8, height: 8, backgroundColor: '#D4AF37', transform: 'rotate(45deg)' }} />
                <Box style={{ flex: 1, height: 1, backgroundColor: '#D4AF37', opacity: 0.3 }} />
              </Box>
            </div>

            {/* Triple line divider */}
            <div>
              <Text size="sm" fw={600} c="#2C2C2C" mb="sm">Triple Line (Ethiopian Flag Inspired)</Text>
              <Stack gap={3}>
                <Box style={{ height: 2, backgroundColor: '#2C5530', borderRadius: 1 }} />
                <Box style={{ height: 2, backgroundColor: '#D4AF37', borderRadius: 1 }} />
                <Box style={{ height: 2, backgroundColor: '#C44536', borderRadius: 1 }} />
              </Stack>
            </div>

            {/* Dot pattern */}
            <div>
              <Text size="sm" fw={600} c="#2C2C2C" mb="sm">Dot Pattern Divider</Text>
              <Box style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
                {Array.from({ length: 9 }).map((_, i) => (
                  <Box
                    key={i}
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: '50%',
                      backgroundColor: '#D4AF37',
                      opacity: i < 4 ? 0.3 + i * 0.2 : i === 4 ? 1 : 1 - (i - 4) * 0.2,
                    }}
                  />
                ))}
              </Box>
            </div>
          </Stack>
        </Paper>

        {/* Gold accent bar */}
        <div>
          <Text size="sm" fw={600} c="#2C2C2C" mb="sm">Gold Accent Bar</Text>
          <Group gap="md" wrap="wrap">
            <Paper p="lg" radius="lg" withBorder style={{ borderLeft: '4px solid #D4AF37', width: 280 }}>
              <Text fw={600} c="#2C2C2C">Left Gold Accent</Text>
              <Text size="sm" c="#6B6B6B" mt="xs">Highlight important information with a gold bar.</Text>
            </Paper>
            <Paper p="lg" radius="lg" withBorder style={{ borderTop: '4px solid #D4AF37', width: 280 }}>
              <Text fw={600} c="#2C2C2C">Top Gold Accent</Text>
              <Text size="sm" c="#6B6B6B" mt="xs">Card header accent for featured content.</Text>
            </Paper>
          </Group>
        </div>
      </Stack>
    </Box>
  ),
};

export const BrandPatterns: StoryObj = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl">
        <Title order={2} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Brand Patterns
        </Title>
        <Text c="#6B6B6B">Subtle background patterns inspired by Ethiopian textile motifs.</Text>

        <Group gap="lg" wrap="wrap">
          <Stack align="center" gap="sm">
            <Box
              style={{
                width: 240,
                height: 180,
                borderRadius: 12,
                backgroundColor: '#1A1A1A',
                backgroundImage: `radial-gradient(circle at 25px 25px, rgba(212,175,55,0.15) 2px, transparent 0)`,
                backgroundSize: '50px 50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text c="#D4AF37" fw={600}>Dot Grid</Text>
            </Box>
            <Text size="xs" c="#6B6B6B">Gold dot pattern on dark</Text>
          </Stack>

          <Stack align="center" gap="sm">
            <Box
              style={{
                width: 240,
                height: 180,
                borderRadius: 12,
                backgroundColor: '#FAF8F3',
                backgroundImage: `
                  linear-gradient(45deg, rgba(212,175,55,0.05) 25%, transparent 25%),
                  linear-gradient(-45deg, rgba(212,175,55,0.05) 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, rgba(212,175,55,0.05) 75%),
                  linear-gradient(-45deg, transparent 75%, rgba(212,175,55,0.05) 75%)
                `,
                backgroundSize: '40px 40px',
                backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px',
                border: '1px solid rgba(0,0,0,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text c="#2C2C2C" fw={600}>Diamond Weave</Text>
            </Box>
            <Text size="xs" c="#6B6B6B">Textile-inspired pattern</Text>
          </Stack>

          <Stack align="center" gap="sm">
            <Box
              style={{
                width: 240,
                height: 180,
                borderRadius: 12,
                background: `linear-gradient(135deg, #1A1A1A 0%, #3D3D3D 100%)`,
                backgroundImage: `
                  repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 39px,
                    rgba(212,175,55,0.08) 39px,
                    rgba(212,175,55,0.08) 40px
                  ),
                  repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 39px,
                    rgba(212,175,55,0.08) 39px,
                    rgba(212,175,55,0.08) 40px
                  )
                `,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text c="#D4AF37" fw={600}>Gold Grid</Text>
            </Box>
            <Text size="xs" c="#6B6B6B">Subtle structural grid</Text>
          </Stack>
        </Group>
      </Stack>
    </Box>
  ),
};
