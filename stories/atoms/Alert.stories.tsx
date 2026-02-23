import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack, Text, Paper } from '@mantine/core';
import { IconRocket, IconCreditCard, IconWifi, IconCloudUpload } from '@tabler/icons-react';
import { Alert } from '../../components/atoms/Alert';

const meta: Meta<typeof Alert> = {
  title: 'Atoms/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**When to use:**
Alert displays contextual feedback messages — success confirmations, error notices, warnings, and informational tips. Use for form validation, payment status, offline mode notices, and system messages.

**Ethiopian Design Context:**
The custom \`semantic\` prop auto-configures color and icon for common states:
- \`success\` → forest green + check icon
- \`error\` → rust + X icon
- \`warning\` → gold + triangle icon
- \`info\` → gold + info circle icon

Default border-radius is \`lg\` for consistency with the design system.

**Common Patterns:**
- Payment confirmations (TeleBirr/Chapa success/failure)
- Offline mode notifications with sync status
- Form validation error summaries
- Feature announcements (receipt capture, new integrations)

**Accessibility:**
Alerts use \`role="alert"\` by default, announcing content to screen readers. Use \`title\` for a concise summary. The \`withCloseButton\` prop adds a dismissible control.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    semantic: {
      description: 'Pre-configured semantic variant with auto color + icon (success | error | warning | info)',
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
    },
    title: {
      description: 'Alert title displayed in bold above the message',
      control: 'text',
    },
    color: {
      description: 'Manual color override (gold, rust, forest, earth)',
      control: 'select',
      options: ['gold', 'rust', 'forest', 'earth'],
    },
    variant: {
      description: 'Visual style — light (default), filled, or outline',
      control: 'select',
      options: ['light', 'filled', 'outline'],
    },
    withCloseButton: {
      description: 'Adds a dismiss/close button',
      control: 'boolean',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const SemanticVariants: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl" style={{ maxWidth: 600 }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Semantic Alert Variants</Text>

        <Alert semantic="success" title="Success">
          Project has been created successfully. Your team has been notified.
        </Alert>

        <Alert semantic="error" title="Error">
          Failed to process payment. Please check your payment details and try again.
        </Alert>

        <Alert semantic="warning" title="Warning">
          Your subscription expires in 3 days. Upgrade now to avoid service interruption.
        </Alert>

        <Alert semantic="info" title="Information">
          New feature available: Offline sync is now enabled for expense tracking.
        </Alert>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The `semantic` prop auto-configures color and icon: success=forest, error=rust, warning=gold, info=gold. Use for quick, consistent feedback.',
      },
    },
  },
};

export const BrandColors: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl" style={{ maxWidth: 600 }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Brand Color Alerts</Text>

        <Alert color="gold" title="Gold Alert" variant="light">
          Default gold-themed alert for general brand messaging.
        </Alert>

        <Alert color="rust" title="Rust Alert" variant="light">
          Innovation and AI-related notifications use rust accent.
        </Alert>

        <Alert color="forest" title="Forest Alert" variant="light">
          Availability and success states use forest green.
        </Alert>

        <Alert color="earth" title="Earth Alert" variant="light">
          Warm accent for supplementary information.
        </Alert>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Manual color control with the brand palette. Use when the semantic variants don\'t fit — e.g., brand announcements or themed notifications.',
      },
    },
  },
};

export const Variants: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl" style={{ maxWidth: 600 }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Alert Style Variants</Text>

        <div>
          <Text fw={500} mb="sm">Light (default)</Text>
          <Alert semantic="info" title="Light variant" variant="light">
            Subtle background with colored text. Best for inline notifications.
          </Alert>
        </div>

        <div>
          <Text fw={500} mb="sm">Filled</Text>
          <Alert semantic="info" title="Filled variant" variant="filled">
            Full colored background. Use for high-priority messages.
          </Alert>
        </div>

        <div>
          <Text fw={500} mb="sm">Outline</Text>
          <Alert semantic="info" title="Outline variant" variant="outline">
            Bordered style with minimal fill. Good for secondary alerts.
          </Alert>
        </div>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Three visual variants: light for inline notices, filled for high-priority banners, outline for secondary information.',
      },
    },
  },
};

export const WithCustomIcons: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl" style={{ maxWidth: 600 }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Custom Icons</Text>

        <Alert color="gold" title="New Feature" icon={<IconRocket size={20} />}>
          Receipt capture with camera is now available. Try it on your next expense!
        </Alert>

        <Alert color="forest" title="Payment Received" icon={<IconCreditCard size={20} />}>
          TeleBirr payment of 25,000 ETB confirmed for Invoice #1042.
        </Alert>

        <Alert color="rust" title="Connection Lost" icon={<IconWifi size={20} />}>
          You are currently offline. Changes will sync when connection is restored.
        </Alert>

        <Alert color="earth" title="Syncing" icon={<IconCloudUpload size={20} />}>
          Uploading 3 offline expenses to the server...
        </Alert>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Custom icons override the semantic defaults. Use for feature announcements (rocket), payment (credit card), offline (wifi), and sync (cloud upload).',
      },
    },
  },
};

export const Closable: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl" style={{ maxWidth: 600 }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Closable Alerts</Text>

        <Alert semantic="success" title="Payment Confirmed" withCloseButton>
          Your TeleBirr payment of 45,000 ETB has been processed successfully.
        </Alert>

        <Alert semantic="warning" title="Action Required" withCloseButton>
          3 invoices are overdue. Review your pending payments.
        </Alert>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dismissible alerts with close button. Use for transient success messages and non-critical warnings that users can acknowledge.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl" style={{ maxWidth: 600 }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Ethiopian SaaS Use Cases</Text>

        {/* Form validation */}
        <Paper p="lg" radius="lg" withBorder>
          <Text fw={600} mb="md">Form Validation</Text>
          <Stack gap="sm">
            <Alert semantic="error" title="Missing Fields">
              Please fill in the following required fields: Client Name, Project Type, Budget.
            </Alert>
          </Stack>
        </Paper>

        {/* Offline mode */}
        <Paper p="lg" radius="lg" withBorder>
          <Text fw={600} mb="md">Offline Mode</Text>
          <Stack gap="sm">
            <Alert color="earth" icon={<IconWifi size={20} />} title="Offline Mode Active" variant="outline">
              You can still add expenses and create quotes. Data will sync automatically when you reconnect.
            </Alert>
          </Stack>
        </Paper>

        {/* Payment flow */}
        <Paper p="lg" radius="lg" withBorder>
          <Text fw={600} mb="md">Payment Flow</Text>
          <Stack gap="sm">
            <Alert semantic="info" title="Processing Payment">
              Connecting to Chapa payment gateway. Please do not close this window.
            </Alert>
            <Alert semantic="success" title="Payment Complete" withCloseButton>
              Invoice #1042 has been paid. Receipt sent to client@email.com.
            </Alert>
          </Stack>
        </Paper>

        {/* On dark background */}
        <Box p="lg" style={{ backgroundColor: '#1A1A1A', borderRadius: 12 }}>
          <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" mb="md">On Dark Background</Text>
          <Stack gap="sm">
            <Alert semantic="success" title="Synced" variant="filled">
              All offline data has been synchronized successfully.
            </Alert>
            <Alert color="gold" title="Welcome Back" variant="filled">
              You have 5 new notifications and 2 pending approvals.
            </Alert>
          </Stack>
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Ethiopian SaaS alert patterns: form validation errors, offline mode notices, Chapa payment flow with processing → success states, and filled alerts on dark backgrounds.',
      },
    },
  },
};
