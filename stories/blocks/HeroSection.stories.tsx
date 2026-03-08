import type { Meta, StoryObj } from '@storybook/react';
import { HeroSection } from '../../components/blocks/HeroSection';

const meta: Meta<typeof HeroSection> = {
  title: 'Blocks/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**What it does:** Left-aligned editorial portfolio hero with inline profile image, gold gradient name typography, and section label transition bar.

**Composition:** Heading, Text, Button, Badge, Group, Container atoms + ScrollReveal and MagneticElement animation wrappers.

**Ethiopian Design Context:** Gold gradient name typography, forest green availability badge, gold-accented section divider. Clean white background lets the gold accents breathe. All colors sourced from \`designTokens\`.

**Layout:** Auto-height (content-driven, not 100vh). Compact and confident — no wasted white space. Section label bar (01 / SELECTED WORK) creates a designed transition into the projects section.

**Responsive:** Name fits one line on desktop (~68px), wraps gracefully on mobile (~36px). Section label bar spans full width at all breakpoints.

**Accessibility:** Single h1 for name, semantic section element, profile image has descriptive alt text. Animations respect \`prefers-reduced-motion\`.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    profileImageSrc: {
      description: 'Path to the profile photo displayed inline with the name',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {
    profileImageSrc: '/images/profile.jpg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Full hero section as it appears on the portfolio homepage — compact height with section transition bar.',
      },
    },
  },
};

export const WithoutProfileImage: Story = {
  args: {
    profileImageSrc: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'Hero section with a missing/empty profile image path — shows the layout gracefully degrading.',
      },
    },
  },
};
