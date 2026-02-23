import type { Meta, StoryObj } from '@storybook/react';
import { Box, Text, Paper, Title } from '@mantine/core';
import { Stack } from '@mantine/core';
import { Grid } from '../../components/atoms/Grid';

const meta: Meta<typeof Grid> = {
  title: 'Atoms/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**When to use:**
Grid creates responsive column layouts using a 12-column system. Use for dashboard stat cards, project card grids, sidebar + content layouts, and any multi-column arrangement that needs to collapse on mobile.

**Ethiopian Design Context:**
Grid with responsive spans (\`{ base: 12, sm: 6, md: 4 }\`) ensures cards stack vertically on mobile — critical for Ethiopian users primarily on mobile devices. Dashboard stats use 4 equal columns on desktop, 2 on tablet, stacked on mobile.

**Common Patterns:**
- Dashboard stats: 4 columns (3 span each), 2 on tablet, stacked on mobile
- Project card grid: 3 columns, responsive to 2 and 1
- Sidebar layout: 3+9 or 4+8 with full-width mobile fallback
- Form two-column layouts

**Accessibility:**
Grid produces semantic HTML. Content reflows naturally for screen readers. Use responsive spans to ensure readable content width at all breakpoints.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    gutter: {
      description: 'Gap between grid columns (xs | sm | md | lg | xl)',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Grid>;

const GridCell = ({ label, span, color = '#D4AF37' }: { label: string; span: number; color?: string }) => (
  <Paper
    p="md"
    radius="lg"
    style={{
      backgroundColor: `${color}1a`,
      border: `2px solid ${color}`,
      textAlign: 'center',
    }}
  >
    <Text size="sm" fw={600}>{label}</Text>
    <Text size="xs" c="dimmed">span={span}</Text>
  </Paper>
);

export const BasicGrid: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Basic Grid (12 columns)</Text>

        <div>
          <Text size="sm" fw={500} mb="xs">Equal columns (4+4+4)</Text>
          <Grid>
            <Grid.Col span={4}><GridCell label="Col 1" span={4} /></Grid.Col>
            <Grid.Col span={4}><GridCell label="Col 2" span={4} color="#C44536" /></Grid.Col>
            <Grid.Col span={4}><GridCell label="Col 3" span={4} color="#2C5530" /></Grid.Col>
          </Grid>
        </div>

        <div>
          <Text size="sm" fw={500} mb="xs">Two columns (6+6)</Text>
          <Grid>
            <Grid.Col span={6}><GridCell label="Left" span={6} /></Grid.Col>
            <Grid.Col span={6}><GridCell label="Right" span={6} color="#C44536" /></Grid.Col>
          </Grid>
        </div>

        <div>
          <Text size="sm" fw={500} mb="xs">Sidebar layout (3+9)</Text>
          <Grid>
            <Grid.Col span={3}><GridCell label="Sidebar" span={3} color="#8B4513" /></Grid.Col>
            <Grid.Col span={9}><GridCell label="Main Content" span={9} /></Grid.Col>
          </Grid>
        </div>

        <div>
          <Text size="sm" fw={500} mb="xs">Asymmetric (2+7+3)</Text>
          <Grid>
            <Grid.Col span={2}><GridCell label="Nav" span={2} color="#2C5530" /></Grid.Col>
            <Grid.Col span={7}><GridCell label="Content" span={7} /></Grid.Col>
            <Grid.Col span={3}><GridCell label="Panel" span={3} color="#C44536" /></Grid.Col>
          </Grid>
        </div>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Static 12-column grid layouts: equal thirds, halves, sidebar + content, and three-panel asymmetric.',
      },
    },
  },
};

export const ResponsiveGrid: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Responsive Grid</Text>
        <Text size="sm" c="dimmed">Resize your browser to see breakpoint changes.</Text>

        <div>
          <Text size="sm" fw={500} mb="xs">Responsive cards (12 → 6 → 4)</Text>
          <Grid>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Grid.Col key={i} span={{ base: 12, sm: 6, md: 4 }}>
                <GridCell
                  label={`Card ${i}`}
                  span={4}
                  color={['#D4AF37', '#C44536', '#2C5530', '#8B4513', '#D4AF37', '#C44536'][i - 1]}
                />
              </Grid.Col>
            ))}
          </Grid>
        </div>

        <div>
          <Text size="sm" fw={500} mb="xs">Responsive sidebar (stacks on mobile)</Text>
          <Grid>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Paper p="lg" radius="lg" style={{ backgroundColor: '#1A1A1A', minHeight: 120 }}>
                <Text c="#D4AF37" fw={600}>Sidebar</Text>
                <Text size="xs" c="#E8D5B7">Full width on mobile, 4-col on desktop</Text>
              </Paper>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 8 }}>
              <Paper p="lg" radius="lg" withBorder style={{ minHeight: 120 }}>
                <Text fw={600}>Main Content</Text>
                <Text size="xs" c="dimmed">Full width on mobile, 8-col on desktop</Text>
              </Paper>
            </Grid.Col>
          </Grid>
        </div>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Responsive spans collapse from multi-column to single-column on mobile. Critical for Ethiopian mobile-first users.',
      },
    },
  },
};

export const GutterSizes: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Gutter (Gap) Sizes</Text>

        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((gutter) => (
          <div key={gutter}>
            <Text size="sm" fw={500} mb="xs">gutter=&quot;{gutter}&quot;</Text>
            <Grid gutter={gutter}>
              <Grid.Col span={4}><GridCell label="1" span={4} /></Grid.Col>
              <Grid.Col span={4}><GridCell label="2" span={4} /></Grid.Col>
              <Grid.Col span={4}><GridCell label="3" span={4} /></Grid.Col>
            </Grid>
          </div>
        ))}
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Gutter controls the gap between columns. Use md (default) for most layouts, xs for tight data grids, lg/xl for spacious card grids.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Ethiopian SaaS Use Cases</Text>

        <div>
          <Text fw={500} mb="sm">Dashboard Stats Grid</Text>
          <Grid>
            {[
              { label: 'Active Projects', value: '12', color: '#D4AF37' },
              { label: 'Total Revenue', value: '485K ETB', color: '#2C5530' },
              { label: 'Pending Invoices', value: '7', color: '#C44536' },
              { label: 'Team Members', value: '8', color: '#8B4513' },
            ].map(({ label, value, color }) => (
              <Grid.Col key={label} span={{ base: 6, md: 3 }}>
                <Paper p="lg" radius="lg" withBorder style={{ borderTop: `3px solid ${color}` }}>
                  <Text size="xs" c="dimmed" tt="uppercase">{label}</Text>
                  <Title order={3} mt="xs" style={{ color }}>{value}</Title>
                </Paper>
              </Grid.Col>
            ))}
          </Grid>
        </div>

        <div>
          <Text fw={500} mb="sm">Project Cards Grid</Text>
          <Grid>
            {[
              { name: 'Restaurant Branding', status: 'Active', budget: '25K ETB' },
              { name: 'E-Commerce App', status: 'Review', budget: '120K ETB' },
              { name: 'Hotel Website', status: 'Completed', budget: '45K ETB' },
            ].map(({ name, status, budget }) => (
              <Grid.Col key={name} span={{ base: 12, sm: 6, md: 4 }}>
                <Paper p="lg" radius="lg" withBorder>
                  <Text fw={600} mb="xs">{name}</Text>
                  <Text size="xs" c="dimmed">{status} | {budget}</Text>
                </Paper>
              </Grid.Col>
            ))}
          </Grid>
        </div>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dashboard stats with color-coded top borders and ETB values. Project cards in a responsive 3-column grid with status and budget.',
      },
    },
  },
};
