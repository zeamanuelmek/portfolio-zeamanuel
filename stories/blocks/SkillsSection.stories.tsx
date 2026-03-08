import type { Meta, StoryObj } from '@storybook/react';
import { SkillsSection } from '../../components/blocks/SkillsSection';

const meta: Meta<typeof SkillsSection> = {
  title: 'Blocks/SkillsSection',
  component: SkillsSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**What it does:** Editorial-style capabilities showcase with a 3-column skill card grid.

**Composition:** Card, Grid, Icon, Stack atoms + ScrollReveal animation. Section header matches ProjectShowcase's pattern — heading with gold accent word + right-aligned tagline.

**Ethiopian Design Context:** Gold-bordered cards with hover lift, gold accent icons, one dark featured card with sand-colored text. Gold gradient text on heading accent and tagline accent.

**Featured card:** AI-Augmented Development uses dark background to highlight Zeamanuel's key differentiator.

**Accessibility:** Semantic section element, heading hierarchy (h2 for section, h3 for cards), sufficient color contrast on both light and dark cards.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    headingPrefix: {
      description: 'Plain prefix of the section heading',
      control: 'text',
    },
    heading: {
      description: 'Gold-accented word in the section heading',
      control: 'text',
    },
    tagline: {
      description: 'Tagline text displayed opposite the heading',
      control: 'text',
    },
    taglineAccent: {
      description: 'Gold-accented word within the tagline',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SkillsSection>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Full capabilities section as it appears on the portfolio homepage — matching the ProjectShowcase header pattern.',
      },
    },
  },
};

export const DarkBackground: Story = {
  decorators: [
    (Story) => (
      <div style={{ background: '#1A1A1A' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          'Skills section on a dark background — testing card visibility and contrast.',
      },
    },
  },
};
