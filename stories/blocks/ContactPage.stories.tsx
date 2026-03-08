import type { Meta, StoryObj } from '@storybook/react';
import { ContactPage } from '../../components/blocks/ContactPage';

const meta: Meta<typeof ContactPage> = {
  title: 'Blocks/ContactPage',
  component: ContactPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**What it does:** Dedicated contact page with two-column layout — form on the left, direct channel cards on the right. Includes page header with availability badge.

**When to use:** Standalone \`/contact\` route. Conversion-focused layout offering two paths: structured form submission or direct outreach via email/LinkedIn/Dribbble/Upwork.

**Ethiopian Design Context:** Gold gradient on heading accent. Underline-style form inputs matching the homepage ContactSection pattern. Gold-icon channel cards with hover lift. Habesha divider (green/gold/red) between channels and working hours. Gold pill submit button with MagneticElement interaction. All colors via \`var(--theme-*)\` for dark/light theming.

**Accessibility:** Semantic form with required fields marked. Channel cards are \`<a>\` links (external links have \`rel="noopener noreferrer"\`). Info alert uses icon + text (not color alone). Heading hierarchy: h1 page title → h2 channel section. ScrollReveal respects \`prefers-reduced-motion\`.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    heading: {
      description: 'Page heading text',
      control: 'text',
    },
    description: {
      description: 'Subtitle below the heading',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContactPage>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Full contact page with form, channel cards, and availability badge.',
      },
    },
  },
};

export const CustomCopy: Story = {
  args: {
    heading: 'Start a Project',
    description: 'Tell me about your idea and I\'ll get back to you within a day.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Contact page with custom heading and description text.',
      },
    },
  },
};
