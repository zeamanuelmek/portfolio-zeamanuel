import type { Meta, StoryObj } from '@storybook/react';
import { ContactSection } from '../../components/blocks/ContactSection';

const meta: Meta<typeof ContactSection> = {
  title: 'Blocks/ContactSection',
  component: ContactSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**What it does:** Bold CTA contact form with editorial heading, selectable service chips, and underline-style form fields.

**Composition:** Container, Input, TextArea, Button, Badge (as chips), Grid, Stack, Group, Text atoms + ScrollReveal animation. Section header follows the same pattern as ProjectShowcase/SkillsSection.

**Ethiopian Design Context:** "Say Hi!" in gold gradient, gold underline inputs, gold-filled service chips when selected, dark submit button.

**Form behavior:** Service chips are multi-select toggles. Form is static (no submission wired) — ready for Formspree/EmailJS/API route integration.

**Accessibility:** Required fields marked with asterisks, form labels on all inputs, chips are clickable with visual feedback.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    headingAccent: {
      description: 'Gold-accented word(s) in the heading',
      control: 'text',
    },
    headingSuffix: {
      description: 'Text after the gold accent in the heading',
      control: 'text',
    },
    subtitle: {
      description: 'Subtitle text below the heading',
      control: 'text',
    },
    submitLabel: {
      description: 'Label for the submit button',
      control: 'text',
    },
    responseTimeText: {
      description: 'Response time text next to submit button',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContactSection>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Full contact section with form and service selection chips.',
      },
    },
  },
};
