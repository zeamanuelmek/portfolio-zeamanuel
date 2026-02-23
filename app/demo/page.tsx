'use client';

import { useState } from 'react';
import {
  MantineProvider,
  Box,
  Stack,
  Group,
  Paper,
  Title,
  Text,
  Button,
  TextInput,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Slider,
  Badge,
  Card,
  Avatar,
  Divider,
  ThemeIcon,
  Alert,
  Loader,
  Anchor,
  Grid,
  Container,
  SegmentedControl,
} from '@mantine/core';
import {
  IconCheck,
  IconBriefcase,
  IconUsers,
  IconReceipt,
  IconSearch,
  IconArrowRight,
  IconAlertTriangle,
  IconInfoCircle,
  IconHome,
  IconSettings,
} from '@tabler/icons-react';
import { createClientTheme } from '@/themes/createClientTheme';
import '@mantine/core/styles.css';

const themes = {
  gold: { label: 'Gold (Default)', brandColor: '#D4AF37' },
  forest: { label: 'Forest Green', brandColor: '#2C5530' },
  rust: { label: 'Rust Red', brandColor: '#C44536' },
  earth: { label: 'Earth Brown', brandColor: '#8B4513' },
} as const;

type ThemeKey = keyof typeof themes;

export default function DemoPage() {
  const [activeTheme, setActiveTheme] = useState<ThemeKey>('gold');
  const config = themes[activeTheme];
  const theme = createClientTheme({ brandColor: config.brandColor });

  return (
    <MantineProvider theme={theme} forceColorScheme="light">
      <Box style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }} py="xl">
        <Container size="56rem">
          <Stack gap="xl">

            {/* Header + Theme Switcher */}
            <Paper p="xl" radius="xl" style={{ backgroundColor: '#1A1A1A' }}>
              <Group justify="space-between" align="flex-start" wrap="wrap">
                <div>
                  <Title
                    order={2}
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      backgroundImage: `linear-gradient(135deg, ${config.brandColor}, #E8C84A)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      backgroundColor: 'transparent',
                    }}
                  >
                    SemEnaWerk Design System
                  </Title>
                  <Text c="#E8D5B7" size="sm" mt="xs">
                    Theme: {config.label} ({config.brandColor})
                  </Text>
                </div>
                <SegmentedControl
                  value={activeTheme}
                  onChange={(val) => setActiveTheme(val as ThemeKey)}
                  data={[
                    { label: 'Gold', value: 'gold' },
                    { label: 'Forest', value: 'forest' },
                    { label: 'Rust', value: 'rust' },
                    { label: 'Earth', value: 'earth' },
                  ]}
                  size="sm"
                />
              </Group>
            </Paper>

            {/* Buttons */}
            <Paper p="xl" radius="xl" withBorder>
              <Title order={4} mb="md">Buttons</Title>
              <Stack gap="md">
                <Group gap="sm" wrap="wrap">
                  <Button>Filled</Button>
                  <Button variant="light">Light</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="subtle">Subtle</Button>
                </Group>
                <Group gap="sm" wrap="wrap">
                  <Button size="xs">XS</Button>
                  <Button size="sm">SM</Button>
                  <Button size="md">MD</Button>
                  <Button size="lg">LG</Button>
                </Group>
                <Group gap="sm" wrap="wrap">
                  <Button leftSection={<IconArrowRight size={16} />}>With Icon</Button>
                  <Button loading>Loading</Button>
                  <Button disabled>Disabled</Button>
                </Group>
              </Stack>
            </Paper>

            {/* Form Inputs */}
            <Paper p="xl" radius="xl" withBorder>
              <Title order={4} mb="md">Form Inputs</Title>
              <Grid>
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Stack gap="sm">
                    <TextInput label="Project Name" placeholder="Enter name..." leftSection={<IconSearch size={16} />} />
                    <TextInput label="With Error" placeholder="Required" error="This field is required" />
                    <Select label="Service Type" placeholder="Select..." data={['Branding', 'Web Dev', 'Mobile App', 'UI/UX']} />
                  </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Stack gap="sm">
                    <Textarea label="Description" placeholder="Project details..." autosize minRows={3} />
                    <div>
                      <Text size="sm" fw={500} mb="xs">Budget (ETB)</Text>
                      <Slider defaultValue={50} marks={[{ value: 0, label: '0' }, { value: 50, label: '50K' }, { value: 100, label: '100K' }]} mb="xl" />
                    </div>
                  </Stack>
                </Grid.Col>
              </Grid>
            </Paper>

            {/* Toggles & Checks */}
            <Paper p="xl" radius="xl" withBorder>
              <Title order={4} mb="md">Checkboxes, Radios, Switches</Title>
              <Grid>
                <Grid.Col span={{ base: 12, md: 4 }}>
                  <Text fw={500} size="sm" mb="xs">Checkboxes</Text>
                  <Stack gap="xs">
                    <Checkbox label="Branding" defaultChecked />
                    <Checkbox label="Web Design" defaultChecked />
                    <Checkbox label="Mobile App" />
                    <Checkbox label="SEO" />
                  </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4 }}>
                  <Text fw={500} size="sm" mb="xs">Radios</Text>
                  <Radio.Group defaultValue="telebirr">
                    <Stack gap="xs">
                      <Radio value="telebirr" label="TeleBirr" />
                      <Radio value="chapa" label="Chapa" />
                      <Radio value="bank" label="Bank Transfer" />
                      <Radio value="cash" label="Cash" />
                    </Stack>
                  </Radio.Group>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4 }}>
                  <Text fw={500} size="sm" mb="xs">Switches</Text>
                  <Stack gap="xs">
                    <Switch label="Email notifications" defaultChecked />
                    <Switch label="SMS (TeleBirr)" defaultChecked />
                    <Switch label="Offline mode" />
                    <Switch label="Auto-invoicing" />
                  </Stack>
                </Grid.Col>
              </Grid>
            </Paper>

            {/* Badges */}
            <Paper p="xl" radius="xl" withBorder>
              <Title order={4} mb="md">Badges</Title>
              <Stack gap="md">
                <Group gap="sm" wrap="wrap">
                  <Badge>Default</Badge>
                  <Badge variant="light">Light</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="dot">Dot</Badge>
                </Group>
                <Group gap="sm" wrap="wrap">
                  <Badge leftSection={<IconCheck size={12} />} color="green">Completed</Badge>
                  <Badge color="yellow">In Progress</Badge>
                  <Badge color="red">Overdue</Badge>
                  <Badge variant="dot">On Hold</Badge>
                </Group>
              </Stack>
            </Paper>

            {/* Cards */}
            <div>
              <Title order={4} mb="md">Cards</Title>
              <Grid>
                {[
                  { name: 'E-Commerce Redesign', status: 'Active', budget: '120K ETB', icon: <IconBriefcase size={20} /> },
                  { name: 'Restaurant Branding', status: 'Review', budget: '25K ETB', icon: <IconUsers size={20} /> },
                  { name: 'Hotel Website', status: 'Completed', budget: '45K ETB', icon: <IconReceipt size={20} /> },
                ].map(({ name, status, budget, icon }) => (
                  <Grid.Col key={name} span={{ base: 12, sm: 4 }}>
                    <Card
                      shadow="sm"
                      radius="xl"
                      withBorder
                      padding="lg"
                      style={{
                        transition: 'box-shadow 300ms ease, transform 200ms ease',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 8px 30px ${config.brandColor}80`;
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <Group justify="space-between" mb="sm">
                        <Badge variant="light">{status}</Badge>
                        <ThemeIcon variant="light" radius="lg">{icon}</ThemeIcon>
                      </Group>
                      <Title order={5} mb="xs">{name}</Title>
                      <Text size="sm" c="dimmed">{budget}</Text>
                    </Card>
                  </Grid.Col>
                ))}
              </Grid>
            </div>

            {/* Avatars */}
            <Paper p="xl" radius="xl" withBorder>
              <Title order={4} mb="md">Avatars</Title>
              <Group gap="md">
                <Avatar.Group>
                  <Avatar>ZA</Avatar>
                  <Avatar>AB</Avatar>
                  <Avatar>MK</Avatar>
                  <Avatar>TG</Avatar>
                  <Avatar>+3</Avatar>
                </Avatar.Group>
                <Divider orientation="vertical" />
                <Avatar size="lg">ZA</Avatar>
                <Avatar size="lg" variant="outline">AB</Avatar>
              </Group>
            </Paper>

            {/* Icons */}
            <Paper p="xl" radius="xl" withBorder>
              <Title order={4} mb="md">Icons</Title>
              <Group gap="md" wrap="wrap">
                {[
                  { icon: <IconHome size={22} />, label: 'Dashboard' },
                  { icon: <IconBriefcase size={22} />, label: 'Projects' },
                  { icon: <IconUsers size={22} />, label: 'Clients' },
                  { icon: <IconReceipt size={22} />, label: 'Invoices' },
                  { icon: <IconSettings size={22} />, label: 'Settings' },
                ].map(({ icon, label }) => (
                  <Stack key={label} align="center" gap={4}>
                    <ThemeIcon variant="light" radius="lg" size="lg">{icon}</ThemeIcon>
                    <Text size="xs" c="dimmed">{label}</Text>
                  </Stack>
                ))}
              </Group>
            </Paper>

            {/* Dividers */}
            <Paper p="xl" radius="xl" withBorder>
              <Title order={4} mb="md">Dividers</Title>
              <Stack gap="lg">
                <div>
                  <Text size="sm" mb="xs">Default</Text>
                  <Divider />
                </div>
                <div>
                  <Text size="sm" mb="xs">Gold Gradient</Text>
                  <Box style={{ height: 2, backgroundImage: `linear-gradient(90deg, transparent, ${config.brandColor}, transparent)`, width: '100%' }} />
                </div>
                <div>
                  <Text size="sm" mb="xs">Habesha (Ethiopian Flag)</Text>
                  <Stack gap={3}>
                    <Box style={{ height: 2, backgroundColor: '#2C5530', borderRadius: 1 }} />
                    <Box style={{ height: 2, backgroundColor: '#D4AF37', borderRadius: 1 }} />
                    <Box style={{ height: 2, backgroundColor: '#C44536', borderRadius: 1 }} />
                  </Stack>
                </div>
                <div>
                  <Text size="sm" mb="xs">With Label</Text>
                  <Divider label="Section" labelPosition="center" />
                </div>
              </Stack>
            </Paper>

            {/* Typography */}
            <Paper p="xl" radius="xl" withBorder>
              <Title order={4} mb="md">Typography</Title>
              <Stack gap="sm">
                <Title order={1}>Heading 1 — Space Grotesk</Title>
                <Title order={2}>Heading 2</Title>
                <Title order={3}>Heading 3</Title>
                <Title
                  order={2}
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${config.brandColor}, #E8C84A)`,
                    backgroundColor: 'transparent',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Gold Gradient Heading
                </Title>
                <Text size="lg">Large body text — Inter font for readability.</Text>
                <Text>Default body text for descriptions and content.</Text>
                <Text size="sm" c="dimmed">Small muted text for captions and metadata.</Text>
                <Anchor c={config.brandColor} href="#">Themed link with hover underline</Anchor>
              </Stack>
            </Paper>

            {/* Alerts */}
            <Paper p="xl" radius="xl" withBorder>
              <Title order={4} mb="md">Alerts</Title>
              <Stack gap="sm">
                <Alert color="green" icon={<IconCheck size={20} />} title="Success" radius="lg">
                  Project has been created successfully.
                </Alert>
                <Alert color="red" icon={<IconAlertTriangle size={20} />} title="Error" radius="lg">
                  Failed to process payment. Please try again.
                </Alert>
                <Alert icon={<IconInfoCircle size={20} />} title="Info" radius="lg">
                  Offline sync is now available for expense tracking.
                </Alert>
              </Stack>
            </Paper>

            {/* Loaders */}
            <Paper p="xl" radius="xl" withBorder>
              <Title order={4} mb="md">Loaders</Title>
              <Group gap="xl">
                <Stack align="center" gap="xs">
                  <Loader type="oval" />
                  <Text size="xs" c="dimmed">Oval</Text>
                </Stack>
                <Stack align="center" gap="xs">
                  <Loader type="bars" />
                  <Text size="xs" c="dimmed">Bars</Text>
                </Stack>
                <Stack align="center" gap="xs">
                  <Loader type="dots" />
                  <Text size="xs" c="dimmed">Dots</Text>
                </Stack>
              </Group>
            </Paper>

            {/* Dark Section */}
            <Paper p="xl" radius="xl" style={{ backgroundColor: '#1A1A1A' }}>
              <Title order={4} mb="md" c="white">Dark Section</Title>
              <Group gap="md" wrap="wrap">
                <Button>Filled on Dark</Button>
                <Button variant="outline">Outline on Dark</Button>
                <Button variant="white" color="dark">White on Dark</Button>
              </Group>
              <Group gap="sm" mt="md">
                <Badge>Default</Badge>
                <Badge variant="light">Light</Badge>
                <Avatar>ZA</Avatar>
                <Loader size="sm" />
              </Group>
              <Text c="#E8D5B7" size="sm" mt="md">
                All components adapt to the active theme: <Text span fw={700} c={config.brandColor}>{config.label}</Text>
              </Text>
            </Paper>

            {/* Footer */}
            <Text ta="center" size="xs" c="dimmed">
              SemEnaWerk Design System v0.2.0 — 23 Atoms | Theme: {config.label}
            </Text>

          </Stack>
        </Container>
      </Box>
    </MantineProvider>
  );
}
