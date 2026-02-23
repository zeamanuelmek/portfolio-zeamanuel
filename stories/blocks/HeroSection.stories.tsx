import type { Meta, StoryObj } from '@storybook/react';
import { HeroSection } from '../../components/blocks/HeroSection';

const meta: Meta<typeof HeroSection> = {
  title: 'Blocks/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: `
**When to use:**
Full-viewport portfolio hero section with Zeamanuel's personal branding. Features an inline profile image between text, animated rotating taglines, availability badge, and dual CTA buttons.

**Ethiopian Design Context:**
Dark background (#1A1A1A) with gold gradient name text, sand-colored greeting, and the Ethiopian-inspired color palette throughout. The "Available for Projects" badge uses forest green dot and gold outline. Entry animations are staggered for a polished reveal.

**Common Patterns:**
- Portfolio landing page hero
- Personal branding above-the-fold section
- Dark-themed hero with high-contrast gold accents

**Accessibility:**
Single \`<h1>\` wraps the entire name line (including inline image) for proper heading structure. Profile image has descriptive alt text. CTA buttons are anchor elements with clear labels. Scroll indicator uses a bouncing arrow animation.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    profileImageSrc: {
      description: 'Path to the profile image displayed inline with the name',
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
        story: 'Full hero section with profile image, rotating text, badge, and CTAs.',
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
