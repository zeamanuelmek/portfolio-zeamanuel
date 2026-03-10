import type { Meta, StoryObj } from '@storybook/react';
import { AboutPage } from '../../components/blocks/AboutPage';

const meta: Meta<typeof AboutPage> = {
  title: 'Blocks/AboutPage',
  component: AboutPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**What it does:** Personal about page with four editorial zones — intro (photo + bio), skills grid, experience timeline, and values cards.

**When to use:** Standalone \`/about\` route for the portfolio. Presents Zeamanuel's background, capabilities, work history, and design philosophy.

**Ethiopian Design Context:** Gold gradient accents on headings and section labels. Gold-bordered profile photo with glow shadow. Gold mono-font year labels in experience timeline. Dark values section (#1A1A1A) with glassmorphic cards and sand-colored text. All sections use \`var(--theme-*)\` CSS custom properties for dark/light theming.

**Accessibility:** Semantic heading hierarchy (h1 name → h2 section titles → h3 card titles). Profile image has alt text. Social links open in new tabs with \`rel="noopener noreferrer"\`. Availability badge uses green dot + text (not color alone). ScrollReveal respects \`prefers-reduced-motion\`.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    bio: {
      description: 'Bio paragraph text',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Full about page with all four sections — intro, skills, experience, and values.',
      },
    },
  },
};

export const CustomBio: Story = {
  args: {
    bio: 'A designer who codes and a coder who designs. Specializing in bridging the gap between product teams and engineering through design systems and interactive prototyping.',
  },
  parameters: {
    docs: {
      description: {
        story: 'About page with a custom bio text — demonstrating the bio prop override.',
      },
    },
  },
};
