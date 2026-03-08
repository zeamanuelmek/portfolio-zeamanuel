# SemEnaWerk Atom Reference

23 production-ready atoms built on Mantine UI with Ethiopian-inspired brand defaults.

All atoms export from `components/atoms/index.ts`:
```typescript
import { Button, Card, Heading, Alert } from '@/components/atoms';
```

---

## Form Atoms (8)

### Button
**File:** `components/atoms/Button.tsx` | **Base:** Mantine `Button`
**Default:** `color="gold"` | **Storybook:** `Atoms/Button`

Wraps Mantine Button with gold as the default color. Use for all interactive actions.

```tsx
<Button>Primary Action</Button>
<Button variant="light">Secondary</Button>
<Button variant="outline">Tertiary</Button>
<Button color="rust">Destructive</Button>
<Button loading>Processing...</Button>
```

**When to use:** CTAs, form submissions, navigation actions, modal triggers.

---

### Input
**File:** `components/atoms/Input.tsx` | **Base:** Mantine `TextInput`
**Storybook:** `Atoms/Input`

Standard text input with theme-default radius.

```tsx
<Input label="Project Name" placeholder="Enter name..." />
<Input label="Email" leftSection={<IconMail size={16} />} />
<Input label="Amount" placeholder="0.00" description="Ethiopian Birr" />
```

**When to use:** Single-line text entry — names, emails, search, amounts.

---

### TextArea
**File:** `components/atoms/TextArea.tsx` | **Base:** Mantine `Textarea`
**Storybook:** `Atoms/TextArea`

Multi-line text input. Supports auto-resize.

```tsx
<TextArea label="Description" autosize minRows={3} maxRows={8} />
```

**When to use:** Project briefs, notes, descriptions, comments.

---

### Select
**File:** `components/atoms/Select.tsx` | **Base:** Mantine `Select`
**Storybook:** `Atoms/Select`

Dropdown selection with search and grouping support.

```tsx
<Select
  label="Payment Method"
  data={['TeleBirr', 'Chapa', 'Bank Transfer', 'Cash']}
  searchable
/>
```

**When to use:** Choosing from predefined options — status, categories, cities, payment methods.

---

### Checkbox
**File:** `components/atoms/Checkbox.tsx` | **Base:** Mantine `Checkbox`
**Default:** `color="gold"` | **Storybook:** `Atoms/Checkbox`

```tsx
<Checkbox label="Include VAT (15%)" defaultChecked />
<Checkbox label="Send receipt via email" />
```

**When to use:** Multiple selections — services, features, agreement toggles.

---

### Radio
**File:** `components/atoms/Radio.tsx` | **Base:** Mantine `Radio` + `Radio.Group`
**Default:** `color="gold"` | **Storybook:** `Atoms/Radio`

```tsx
<Radio.Group label="Payment Method" defaultValue="telebirr">
  <Radio value="telebirr" label="TeleBirr" />
  <Radio value="chapa" label="Chapa" />
  <Radio value="bank" label="Bank Transfer" />
</Radio.Group>
```

**When to use:** Single selection from mutually exclusive options — payment method, priority, status.

---

### Switch
**File:** `components/atoms/Switch.tsx` | **Base:** Mantine `Switch`
**Default:** `color="gold"` | **Storybook:** `Atoms/Switch`

```tsx
<Switch label="Offline mode" description="Sync when connected" />
<Switch label="Auto-generate invoices" defaultChecked />
```

**When to use:** On/off toggles — settings, preferences, feature flags.

---

### Slider
**File:** `components/atoms/Slider.tsx` | **Base:** Mantine `Slider`
**Default:** `color="gold"` | **Storybook:** `Atoms/Slider`

```tsx
<Slider
  defaultValue={50000}
  min={5000}
  max={500000}
  step={5000}
  label={(val) => `${(val / 1000).toFixed(0)}K ETB`}
/>
```

**When to use:** Range selection — budgets, team size, completion percentage.

---

## Display Atoms (6)

### Badge
**File:** `components/atoms/Badge.tsx` | **Base:** Mantine `Badge`
**Default:** `color="gold"` | **Storybook:** `Atoms/Badge`

```tsx
<Badge>Active</Badge>
<Badge variant="light" color="forest">Completed</Badge>
<Badge variant="dot" color="rust">Urgent</Badge>
<Badge leftSection={<IconCheck size={12} />} color="forest">Paid</Badge>
```

**When to use:** Status indicators, tags, labels, counts.

---

### Card
**File:** `components/atoms/Card.tsx` | **Base:** Mantine `Card`
**Storybook:** `Atoms/Card`

**Default:** 1px gold border, hover lifts 4px with neutral shadow. No special props needed — all Cards behave this way.

```tsx
<Card>
  <Card.Section style={{ background: 'linear-gradient(135deg, #D4AF37, #E8C84A)', padding: 24 }}>
    <Text c="white" fw={700}>Featured Project</Text>
  </Card.Section>
  <Text mt="md">Project details...</Text>
</Card>
```

**When to use:** Content containers — project cards, invoice summaries, feature highlights.

---

### Avatar
**File:** `components/atoms/Avatar.tsx` | **Base:** Mantine `Avatar`
**Default:** `color="gold"` | **Storybook:** `Atoms/Avatar`

Supports `Avatar.Group` for team member stacking.

```tsx
<Avatar>ZA</Avatar>
<Avatar color="rust">AB</Avatar>
<Avatar.Group>
  <Avatar>ZA</Avatar>
  <Avatar>AB</Avatar>
  <Avatar>+3</Avatar>
</Avatar.Group>
```

**When to use:** User/team member display, client logos, initials.

---

### Image
**File:** `components/atoms/Image.tsx` | **Base:** Mantine `Image`
**Default:** `radius="lg"` | **Storybook:** `Atoms/Image`

```tsx
<Image src="/project-thumb.jpg" alt="Project" w={300} h={200} />
<Image src={null} fallbackSrc="/placeholder.png" alt="Fallback" />
```

**When to use:** Project thumbnails, receipt captures, portfolio images.

---

### Divider
**File:** `components/atoms/Divider.tsx` | **Base:** Mantine `Divider`
**Props:** `goldGradient`, `habesha`, `diamond` | **Storybook:** `Atoms/Divider`

```tsx
<Divider />                {/* Standard Mantine divider */}
<Divider goldGradient />   {/* Gold fade-in/out line */}
<Divider habesha />        {/* Ethiopian flag: green/gold/red triple line */}
<Divider diamond />        {/* Habesha textile diamond motif */}
<Divider label="Section" labelPosition="center" />
```

**When to use:** Section separators. Use `habesha` or `diamond` for Ethiopian cultural flair. Use `goldGradient` on dark backgrounds for premium feel.

---

### Icon
**File:** `components/atoms/Icon.tsx` | **Base:** Mantine `ThemeIcon`
**Default:** `color="gold"`, `variant="light"`, `radius="lg"` | **Storybook:** `Atoms/Icon`

Wraps any icon (from @tabler/icons-react) in a themed container.

```tsx
<Icon><IconHome size={20} /></Icon>
<Icon color="rust" variant="filled"><IconAlertTriangle size={20} /></Icon>
<Icon color="forest" size="lg"><IconCheck size={22} /></Icon>
```

**When to use:** Navigation items, feature icons, status indicators, action icons.

---

## Layout Atoms (4)

### Container
**File:** `components/atoms/Container.tsx` | **Base:** Mantine `Container`
**Default:** `size="56rem"` (896px) | **Storybook:** `Atoms/Container`

```tsx
<Container>Content within 896px max-width</Container>
<Container size="xs">Narrow form (576px)</Container>
```

**When to use:** Page content wrapper. Default 56rem matches portfolio layout.

---

### Stack
**File:** `components/atoms/Stack.tsx` | **Base:** Mantine `Stack`
**Storybook:** `Atoms/Stack`

```tsx
<Stack gap="md">
  <Input label="Name" />
  <Input label="Email" />
  <Button>Submit</Button>
</Stack>
```

**When to use:** Vertical layouts — form fields, card content, notification feeds.

---

### Group
**File:** `components/atoms/Group.tsx` | **Base:** Mantine `Group`
**Storybook:** `Atoms/Group`

```tsx
<Group justify="space-between">
  <Text>Invoice #1042</Text>
  <Badge>Paid</Badge>
</Group>
```

**When to use:** Horizontal layouts — button groups, card headers, action bars, tag clouds.

---

### Grid
**File:** `components/atoms/Grid.tsx` | **Base:** Mantine `Grid`
**Storybook:** `Atoms/Grid`

12-column responsive grid with `Grid.Col`.

```tsx
<Grid>
  <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
    <Card>Responsive card</Card>
  </Grid.Col>
</Grid>
```

**When to use:** Multi-column layouts — dashboard stats, project grids, responsive forms.

---

## Typography Atoms (3)

### Heading
**File:** `components/atoms/Heading.tsx` | **Base:** Mantine `Title`
**Props:** `goldGradient?: boolean` | **Storybook:** `Atoms/Heading`

Uses Space Grotesk via theme. Supports gold gradient text.

```tsx
<Heading order={1}>Page Title</Heading>
<Heading order={2} goldGradient>Featured Section</Heading>
<Heading order={4} c="white">On dark background</Heading>
```

**When to use:** Page titles (h1), section headings (h2-h3), card titles (h4-h5), labels (h6).

---

### Text
**File:** `components/atoms/Text.tsx` | **Base:** Mantine `Text`
**Props:** `goldGradient?: boolean` | **Storybook:** `Atoms/Text`

Uses Inter via theme. Supports gold gradient text.

```tsx
<Text>Default body text</Text>
<Text c="dimmed" size="sm">Secondary caption</Text>
<Text goldGradient fw={600}>Highlighted text</Text>
<Text tt="uppercase" size="xs" fw={600} c="#D4AF37">LABEL</Text>
```

**When to use:** Body content, descriptions, captions, labels, metadata.

---

### Link
**File:** `components/atoms/Link.tsx` | **Base:** Mantine `Anchor`
**Default:** `c="gold"`, `underline="hover"` | **Storybook:** `Atoms/Link`

```tsx
<Link href="/projects">View all projects</Link>
<Text>Visit <Link href="#">our portfolio</Link> for examples.</Text>
```

**When to use:** Navigation links, inline text links, breadcrumbs, footer links.

---

## Feedback Atoms (2)

### Alert
**File:** `components/atoms/Alert.tsx` | **Base:** Mantine `Alert`
**Props:** `semantic?: 'success' | 'error' | 'warning' | 'info'` | **Storybook:** `Atoms/Alert`

The `semantic` prop auto-configures color and icon.

```tsx
<Alert semantic="success" title="Payment Confirmed">
  TeleBirr payment of 25,000 ETB processed.
</Alert>
<Alert semantic="error" title="Connection Failed" withCloseButton>
  Unable to reach Chapa gateway.
</Alert>
```

| Semantic | Color | Icon |
|----------|-------|------|
| `success` | forest | Check |
| `error` | rust | X |
| `warning` | gold | AlertTriangle |
| `info` | gold | InfoCircle |

**When to use:** Form validation, payment status, offline notifications, system messages.

---

### Loader
**File:** `components/atoms/Loader.tsx` | **Base:** Mantine `Loader`
**Default:** `color="gold"` | **Storybook:** `Atoms/Loader`

```tsx
<Loader />                    {/* Gold oval spinner */}
<Loader type="dots" />        {/* Gold dots */}
<Loader type="bars" />        {/* Gold bars */}
<Loader color="forest" />     {/* Green spinner */}
```

**When to use:** Loading states — page loads, button processing, data sync, payment verification.

---

## Ethiopian Design Patterns

### Gold Accents
Use gold (`#D4AF37`) as the primary accent for CTAs, active states, and highlights. Reserve rust for warnings/destructive actions, forest for success/confirmation.

### Dark Sections
Use `#1A1A1A` background with gold text/accents and `#E8D5B7` (sand) for body text. Gold glow shadows are most striking on dark backgrounds.

### Cultural Elements
- **Habesha divider:** Ethiopian flag colors (green/gold/red) for patriotic sections
- **Diamond divider:** Inspired by traditional textile patterns
- **Gold gradient text:** Premium, modern feel for hero headlines
- **Cream background:** Warm, inviting alternative to stark white

### Spacing Philosophy
4px base unit. Generous padding (lg=24px, xl=32px) for breathing room. Ethiopian design values space and warmth over density.
