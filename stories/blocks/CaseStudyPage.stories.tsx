import type { Meta, StoryObj } from '@storybook/react';
import { CaseStudyPage } from '../../components/blocks/CaseStudyPage';
import { projects, getAdjacentProjects } from '../../data';

// Use OMOC (has full storytelling case study) for the demo
const omoc = projects.find((p) => p.id === 'omoc')!;
const omocNext = getAdjacentProjects('omoc').next;

// Use DH (no case study) for the fallback demo
const dh = projects.find((p) => p.id === 'dh')!;
const dhNext = getAdjacentProjects('dh').next;

const meta: Meta<typeof CaseStudyPage> = {
  title: 'Blocks/CaseStudyPage',
  component: CaseStudyPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**When to use:** Individual project case study with storytelling narrative structure.

**Structure:** Hero \u2192 Metrics \u2192 Workflow \u2192 Moments (expandable) \u2192 Resolution \u2192 CTA

**Key Features:**
- Scroll progress bar
- Before/After comparisons per moment
- Image sliders for Figma screenshots
- Expandable deep-dive sections
- Alternating background colors for visual rhythm

**Data:** Driven by \`CaseStudy\` type in \`data/projects.ts\`

**Accessibility:** Scroll progress is non-interactive. Back nav is keyboard-accessible. Expand/collapse buttons have \`aria-expanded\`. Image sliders support keyboard and touch navigation. All text uses theme CSS custom properties for dark/light mode.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    project: {
      description: 'The project data object to render',
      control: false,
    },
    nextProject: {
      description: 'The next project for bottom navigation',
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof CaseStudyPage>;

export const OMOCCaseStudy: Story = {
  args: {
    project: omoc,
    nextProject: omocNext,
  },
  parameters: {
    docs: {
      description: {
        story: 'Full OMOC case study with storytelling structure: hero, metrics bar, workflow, 4 moments with before/after and image sliders, resolution with founder quote, and CTA.',
      },
    },
  },
};

export const NoCaseStudy: Story = {
  args: {
    project: dh,
    nextProject: dhNext,
  },
  parameters: {
    docs: {
      description: {
        story: 'DH project with no case study data \u2014 shows graceful fallback with description, tags, and "coming soon" notice.',
      },
    },
  },
};
