import type { Meta, StoryObj } from '@storybook/react';
import { Box, Text, Title } from '@mantine/core';
import { ParallaxLayer } from '../../components/animations/ParallaxLayer';
import { Card, Heading, Badge } from '../../components/atoms';

const meta: Meta<typeof ParallaxLayer> = {
  title: 'Animations/ParallaxLayer',
  component: ParallaxLayer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**What it does:** Wraps an element and makes it scroll at a different speed than the page, creating a sense of depth.

**When to use:** Hero background images, decorative elements, section illustrations — anywhere you want visual layering. The coffee ceremony image behind hero text is a classic use case.

**Animation Library:** GSAP + ScrollTrigger (dynamically imported to avoid SSR issues)

**Performance:** Uses \`scrub: true\` for frame-perfect scroll sync. Parallax is automatically disabled on mobile (<768px) for performance and usability. Uses \`will-change: transform\` for GPU acceleration.

**Accessibility:** Respects \`prefers-reduced-motion\` — when enabled, elements scroll normally with no parallax offset.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    speed: {
      description: 'Scroll speed multiplier (0 = fixed, 0.5 = half speed, 1 = normal, >1 = faster)',
      control: { type: 'range', min: 0, max: 2, step: 0.1 },
    },
    direction: {
      description: 'Axis of the parallax offset',
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof ParallaxLayer>;

const SectionDivider = ({ label }: { label: string }) => (
  <Box py={60} ta="center">
    <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">{label}</Text>
  </Box>
);

export const Default: Story = {
  render: (args) => (
    <Box style={{ backgroundColor: '#FAF8F3', minHeight: '250vh' }}>
      <Box maw={800} mx="auto" px="xl" pt={80}>
        <Heading order={2} mb="xs">Parallax Demo</Heading>
        <Text c="dimmed" mb="xl">Scroll down — the image and text move at different speeds.</Text>
      </Box>

      <Box style={{ height: '20vh' }} />

      <Box
        maw={900}
        mx="auto"
        px="xl"
        style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}
      >
        <ParallaxLayer {...args}>
          <Box
            style={{
              width: 360,
              height: 440,
              borderRadius: 16,
              background: 'linear-gradient(135deg, #D4AF37 0%, #8B4513 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text c="white" fw={700} size="xl">Image Layer</Text>
          </Box>
        </ParallaxLayer>

        <Box style={{ flex: 1, paddingTop: 80 }}>
          <Heading order={3} mb="md">This text scrolls normally</Heading>
          <Text c="dimmed" mb="lg">
            The gold box on the left has a parallax speed of {args.speed ?? 0.5} —
            it moves {((1 - (args.speed ?? 0.5)) * 100).toFixed(0)}% slower than
            this text, creating a layered depth effect.
          </Text>
          <Text c="dimmed" mb="lg">
            This is the most common parallax pattern: a background image or
            decorative element drifts behind foreground content as you scroll.
          </Text>
          <Text c="dimmed">
            Try adjusting the speed control: 0 = fixed in place, 0.5 = classic
            parallax, 1 = normal scroll, values above 1 move faster than the page.
          </Text>
        </Box>
      </Box>

      <Box style={{ height: '100vh' }} />
    </Box>
  ),
  args: {
    speed: 0.5,
    direction: 'vertical',
  },
  parameters: {
    docs: {
      description: {
        story: 'A gold box scrolling at half speed beside normal text. Adjust the speed slider to feel the difference between 0 (fixed) and 1 (normal).',
      },
    },
  },
};

export const MultiLayer: Story = {
  render: () => (
    <Box style={{ backgroundColor: '#1A1A1A', minHeight: '300vh', overflow: 'hidden' }}>
      <Box ta="center" pt={80} pb={40}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Multi-Layer Depth</Text>
        <Title order={2} c="white" mt="xs">Three layers, three speeds</Title>
        <Text c="#E8D5B7" mt="xs">Scroll slowly to see the separation</Text>
      </Box>

      <Box style={{ height: '10vh' }} />

      <Box style={{ position: 'relative', height: '80vh', maxWidth: 900, margin: '0 auto' }}>
        {/* Back layer — slowest */}
        <ParallaxLayer speed={0.2}>
          <Box
            style={{
              position: 'absolute',
              top: 0,
              left: '10%',
              width: 300,
              height: 300,
              borderRadius: 24,
              background: 'rgba(212, 175, 55, 0.1)',
              border: '1px solid rgba(212, 175, 55, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text c="#D4AF37" fw={600} style={{ opacity: 0.5 }}>Back · 0.2x</Text>
          </Box>
        </ParallaxLayer>

        {/* Mid layer */}
        <ParallaxLayer speed={0.5}>
          <Box
            style={{
              position: 'absolute',
              top: 80,
              left: '30%',
              width: 280,
              height: 280,
              borderRadius: 20,
              background: 'rgba(212, 175, 55, 0.2)',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text c="#D4AF37" fw={600} style={{ opacity: 0.7 }}>Mid · 0.5x</Text>
          </Box>
        </ParallaxLayer>

        {/* Front layer — fastest */}
        <ParallaxLayer speed={1.0}>
          <Box
            style={{
              position: 'absolute',
              top: 160,
              left: '50%',
              width: 260,
              height: 260,
              borderRadius: 16,
              background: 'rgba(212, 175, 55, 0.35)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text c="#D4AF37" fw={700}>Front · 1.0x</Text>
          </Box>
        </ParallaxLayer>
      </Box>

      <Box style={{ height: '120vh' }} />
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Three overlapping layers at speeds 0.2, 0.5, and 1.0 on a dark background. Scroll slowly to see how they separate and create visual depth.',
      },
    },
  },
};

export const CoffeeIllustration: Story = {
  render: () => (
    <Box style={{ backgroundColor: '#FAF8F3', minHeight: '250vh' }}>
      <Box
        maw={1000}
        mx="auto"
        px="xl"
        pt={100}
        style={{
          display: 'flex',
          gap: '3rem',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        {/* Text column */}
        <Box style={{ flex: '1 1 400px' }}>
          <Badge color="gold" variant="light" mb="md">Available for work</Badge>
          <Title
            order={1}
            mb="md"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2rem, 4vw + 1rem, 3.5rem)',
              lineHeight: 1.15,
              color: '#2C2C2C',
            }}
          >
            Crafting digital
            <br />
            experiences with
            <br />
            <span style={{
              backgroundImage: 'linear-gradient(135deg, #D4AF37, #E8C84A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Ethiopian soul
            </span>
          </Title>
          <Text c="dimmed" size="lg" mb="xl" maw={480}>
            UX systems designer blending warm earth tones, gold accents,
            and modern interfaces for East African startups and beyond.
          </Text>
        </Box>

        {/* Parallax illustration column */}
        <Box style={{ flex: '0 0 340px' }}>
          <ParallaxLayer speed={0.3}>
            <Box
              style={{
                width: 340,
                height: 420,
                borderRadius: 20,
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(139, 69, 19, 0.15)',
              }}
            >
              <img
                src="/images/coffee-ceremony.jpg"
                alt="Ethiopian coffee ceremony"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                onError={(e) => {
                  const el = e.currentTarget;
                  el.style.display = 'none';
                  el.parentElement!.style.background =
                    'linear-gradient(135deg, #D4AF37 0%, #8B4513 50%, #2C5530 100%)';
                  el.parentElement!.innerHTML =
                    '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:white;font-weight:600;font-size:1.125rem;padding:2rem;text-align:center;">Coffee Ceremony<br/>Illustration</div>';
                }}
              />
            </Box>
          </ParallaxLayer>
        </Box>
      </Box>

      <Box style={{ height: '120vh' }} />
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Realistic portfolio preview: coffee ceremony image at 0.3x speed drifts behind hero text. Falls back to a gradient placeholder if the image is missing.',
      },
    },
  },
};
