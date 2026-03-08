import{j as e}from"./iframe-B9BJqu6d.js";import{C as a}from"./Card-DtPqvK_N.js";import{T as r}from"./Text-CSoEI4MQ.js";import{B as c}from"./polymorphic-factory-B38yjnoz.js";import{S as p}from"./Stack-C9852h35.js";import{G as s}from"./Group-BevGUIxM.js";import{T as t}from"./Title-WVNpPliK.js";import{B as m}from"./Badge--6N5_VeE.js";import{I as x}from"./IconBriefcase-CMiqvLRo.js";import{I as h}from"./IconCalendar-D_G623j2.js";import{c as u}from"./createReactComponent-C2aEuSvQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DOhuRlTg.js";import"./create-safe-context-DliEnmUg.js";const f=[["path",{d:"M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2",key:"svg-0"}],["path",{d:"M12 3v3m0 12v3",key:"svg-1"}]],g=u("outline","currency-dollar","CurrencyDollar",f),G={title:"Atoms/Card",component:a,parameters:{layout:"padded",docs:{description:{component:`
**When to use:**
Card is the primary container for grouping related content — project summaries, client profiles, invoice items, and dashboard widgets. Use it whenever content needs visual separation from the page background.

**Default behavior:** All cards have a 1px gold (#D4AF37) border. On hover, cards lift 4px with a soft neutral shadow — clean, no gold glow.

**Ethiopian Design Context:**
Cards default to \`lg\` border-radius for the modern, rounded aesthetic. The gold border ties every card to the brand identity. Use \`Card.Section\` for header areas with brand gradients.

**Common Patterns:**
- Project cards with status badges, due dates, and ETB budgets
- Client profile cards with avatars and contact info
- Invoice/expense summary cards
- Dashboard stat widgets

**Accessibility:**
When cards are clickable, use \`component="a"\` or wrap in a link. The hover lift effect provides visual feedback. Ensure sufficient color contrast on dark card variants.
        `}}},tags:["autodocs"],argTypes:{shadow:{description:"Card shadow elevation (xs | sm | md | lg | xl)",control:"select",options:["xs","sm","md","lg","xl"]},padding:{description:"Inner padding (xs | sm | md | lg | xl)",control:"select",options:["xs","sm","md","lg","xl"]},withBorder:{description:"Adds a subtle border around the card",control:"boolean"},radius:{description:"Border radius (defaults to lg from theme)",control:"select",options:["xs","sm","md","lg","xl"]}}},o={render:()=>e.jsx(c,{p:"xl",style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(p,{gap:"xl",children:[e.jsx(r,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Card Variants"}),e.jsxs(s,{gap:"lg",wrap:"wrap",align:"flex-start",children:[e.jsxs(a,{style:{width:300},children:[e.jsx(t,{order:4,mb:"xs",children:"Default Card"}),e.jsx(r,{size:"sm",c:"dimmed",children:"Default card with gold border, subtle hover lift, and lg border radius from theme defaults."})]}),e.jsxs(a,{shadow:"md",style:{width:300},children:[e.jsx(t,{order:4,mb:"xs",children:"Elevated Card"}),e.jsx(r,{size:"sm",c:"dimmed",children:"Higher elevation with medium shadow for important content."})]}),e.jsxs(a,{shadow:"lg",style:{width:300},children:[e.jsx(t,{order:4,mb:"xs",children:"High Elevation"}),e.jsx(r,{size:"sm",c:"dimmed",children:"Large shadow for modals, popovers, and featured content."})]})]})]})}),parameters:{docs:{description:{story:"Three elevation levels. All cards share the gold border and hover lift effect."}}}},d={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r,{fw:600,children:"Hover over me"}),e.jsx(r,{size:"sm",c:"dimmed",mt:"xs",children:"Cards lift with a subtle shadow on hover — no gold glow."})]}),p:"lg",w:320},parameters:{docs:{description:{story:"Default hover: 4px lift + soft neutral shadow. Gold border stays constant."}}}},i={render:()=>e.jsx(c,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(p,{gap:"xl",children:[e.jsx(r,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Card with Sections"}),e.jsxs(s,{gap:"lg",wrap:"wrap",align:"flex-start",children:[e.jsxs(a,{style:{width:320},padding:"lg",children:[e.jsxs(a.Section,{style:{background:"linear-gradient(135deg, #D4AF37, #E8C84A)",padding:24},children:[e.jsx(r,{c:"white",fw:700,size:"lg",children:"Gold Header"}),e.jsx(r,{c:"white",size:"sm",style:{opacity:.9},children:"Brand gradient section"})]}),e.jsx(r,{size:"sm",c:"dimmed",mt:"md",children:"Card sections allow distinct visual areas within a single card."})]}),e.jsxs(a,{style:{width:320},padding:"lg",children:[e.jsxs(a.Section,{style:{background:"#1A1A1A",padding:24},children:[e.jsx(r,{c:"#D4AF37",fw:700,size:"lg",children:"Dark Header"}),e.jsx(r,{c:"#E8D5B7",size:"sm",children:"Premium dark section"})]}),e.jsx(r,{size:"sm",c:"dimmed",mt:"md",children:"Dark sections for hero-style card headers with gold accents."})]})]})]})}),parameters:{docs:{description:{story:"Card.Section creates full-bleed areas for headers, images, or backgrounds. Use the gold gradient or dark backgrounds for visual hierarchy."}}}},n={render:()=>e.jsx(c,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(p,{gap:"xl",children:[e.jsx(r,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Ethiopian SaaS Use Cases"}),e.jsxs(s,{gap:"lg",wrap:"wrap",align:"flex-start",children:[e.jsxs(a,{style:{width:320},padding:"lg",children:[e.jsxs(s,{justify:"space-between",mb:"sm",children:[e.jsx(m,{color:"gold",variant:"light",children:"In Progress"}),e.jsx(x,{size:20,color:"#D4AF37"})]}),e.jsx(t,{order:4,mb:"xs",children:"E-Commerce Redesign"}),e.jsx(r,{size:"sm",c:"dimmed",mb:"md",children:"Full redesign of online marketplace for Ethiopian artisans."}),e.jsxs(s,{gap:"lg",children:[e.jsxs(s,{gap:4,children:[e.jsx(h,{size:14,color:"#6B6B6B"}),e.jsx(r,{size:"xs",c:"dimmed",children:"Due Mar 15"})]}),e.jsxs(s,{gap:4,children:[e.jsx(g,{size:14,color:"#6B6B6B"}),e.jsx(r,{size:"xs",c:"dimmed",children:"45,000 ETB"})]})]})]}),e.jsxs(a,{style:{width:320},padding:"lg",children:[e.jsxs(s,{justify:"space-between",mb:"sm",children:[e.jsx(m,{color:"forest",children:"Completed"}),e.jsx(x,{size:20,color:"#2C5530"})]}),e.jsx(t,{order:4,mb:"xs",children:"Restaurant Branding"}),e.jsx(r,{size:"sm",c:"dimmed",mb:"md",children:"Brand identity for traditional Ethiopian restaurant chain."}),e.jsxs(s,{gap:"lg",children:[e.jsxs(s,{gap:4,children:[e.jsx(h,{size:14,color:"#6B6B6B"}),e.jsx(r,{size:"xs",c:"dimmed",children:"Delivered Feb 28"})]}),e.jsxs(s,{gap:4,children:[e.jsx(g,{size:14,color:"#6B6B6B"}),e.jsx(r,{size:"xs",c:"dimmed",children:"25,000 ETB"})]})]})]}),e.jsxs(a,{style:{width:320,backgroundColor:"#1A1A1A"},padding:"lg",withBorder:!1,children:[e.jsx(m,{color:"rust",variant:"light",mb:"sm",children:"Urgent"}),e.jsx(t,{order:4,mb:"xs",c:"white",children:"Mobile App Launch"}),e.jsx(r,{size:"sm",c:"#E8D5B7",mb:"md",children:"TeleBirr-integrated payment app for local businesses."}),e.jsxs(s,{gap:"lg",children:[e.jsxs(s,{gap:4,children:[e.jsx(h,{size:14,color:"#D4AF37"}),e.jsx(r,{size:"xs",c:"#E8D5B7",children:"Due Tomorrow"})]}),e.jsxs(s,{gap:4,children:[e.jsx(g,{size:14,color:"#D4AF37"}),e.jsx(r,{size:"xs",c:"#E8D5B7",children:"120,000 ETB"})]})]})]})]})]})}),parameters:{docs:{description:{story:"Project cards showing real Ethiopian SaaS patterns: status badges, ETB budgets, due dates, and a dark variant for urgent items with TeleBirr integration."}}}},l={render:()=>e.jsx(c,{p:"xl",style:{backgroundColor:"#1A1A1A",borderRadius:12},children:e.jsxs(p,{gap:"xl",children:[e.jsx(r,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"On Dark Background"}),e.jsxs(s,{gap:"lg",wrap:"wrap",align:"flex-start",children:[e.jsxs(a,{style:{width:300,backgroundColor:"#3D3D3D",border:"1px solid rgba(212,175,55,0.2)"},withBorder:!1,children:[e.jsx(t,{order:4,mb:"xs",c:"white",children:"Dark Card"}),e.jsx(r,{size:"sm",c:"#E8D5B7",children:"Cards on dark backgrounds use charcoal bg with gold border hints."})]}),e.jsxs(a,{style:{width:300,backgroundColor:"#3D3D3D",border:"1px solid rgba(212,175,55,0.2)"},withBorder:!1,children:[e.jsx(t,{order:4,mb:"xs",c:"white",children:"Dark Hover Card"}),e.jsx(r,{size:"sm",c:"#E8D5B7",children:"Hover lift effect works on dark backgrounds too."})]})]})]})}),parameters:{docs:{description:{story:"Dark background cards with charcoal fills and gold-tinted borders. The hover lift effect works on any background."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Card Variants</Text>

        <Group gap="lg" wrap="wrap" align="flex-start">
          <Card style={{
          width: 300
        }}>
            <Title order={4} mb="xs">Default Card</Title>
            <Text size="sm" c="dimmed">
              Default card with gold border, subtle hover lift, and lg border radius from theme defaults.
            </Text>
          </Card>

          <Card shadow="md" style={{
          width: 300
        }}>
            <Title order={4} mb="xs">Elevated Card</Title>
            <Text size="sm" c="dimmed">
              Higher elevation with medium shadow for important content.
            </Text>
          </Card>

          <Card shadow="lg" style={{
          width: 300
        }}>
            <Title order={4} mb="xs">High Elevation</Title>
            <Text size="sm" c="dimmed">
              Large shadow for modals, popovers, and featured content.
            </Text>
          </Card>
        </Group>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Three elevation levels. All cards share the gold border and hover lift effect.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Text fw={600}>Hover over me</Text>
        <Text size="sm" c="dimmed" mt="xs">
          Cards lift with a subtle shadow on hover — no gold glow.
        </Text>
      </>,
    p: 'lg',
    w: 320
  },
  parameters: {
    docs: {
      description: {
        story: 'Default hover: 4px lift + soft neutral shadow. Gold border stays constant.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Card with Sections</Text>

        <Group gap="lg" wrap="wrap" align="flex-start">
          <Card style={{
          width: 320
        }} padding="lg">
            <Card.Section style={{
            background: 'linear-gradient(135deg, #D4AF37, #E8C84A)',
            padding: 24
          }}>
              <Text c="white" fw={700} size="lg">Gold Header</Text>
              <Text c="white" size="sm" style={{
              opacity: 0.9
            }}>Brand gradient section</Text>
            </Card.Section>
            <Text size="sm" c="dimmed" mt="md">
              Card sections allow distinct visual areas within a single card.
            </Text>
          </Card>

          <Card style={{
          width: 320
        }} padding="lg">
            <Card.Section style={{
            background: '#1A1A1A',
            padding: 24
          }}>
              <Text c="#D4AF37" fw={700} size="lg">Dark Header</Text>
              <Text c="#E8D5B7" size="sm">Premium dark section</Text>
            </Card.Section>
            <Text size="sm" c="dimmed" mt="md">
              Dark sections for hero-style card headers with gold accents.
            </Text>
          </Card>
        </Group>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Card.Section creates full-bleed areas for headers, images, or backgrounds. Use the gold gradient or dark backgrounds for visual hierarchy.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Ethiopian SaaS Use Cases</Text>

        <Group gap="lg" wrap="wrap" align="flex-start">
          <Card style={{
          width: 320
        }} padding="lg">
            <Group justify="space-between" mb="sm">
              <MantineBadge color="gold" variant="light">In Progress</MantineBadge>
              <IconBriefcase size={20} color="#D4AF37" />
            </Group>
            <Title order={4} mb="xs">E-Commerce Redesign</Title>
            <Text size="sm" c="dimmed" mb="md">
              Full redesign of online marketplace for Ethiopian artisans.
            </Text>
            <Group gap="lg">
              <Group gap={4}>
                <IconCalendar size={14} color="#6B6B6B" />
                <Text size="xs" c="dimmed">Due Mar 15</Text>
              </Group>
              <Group gap={4}>
                <IconCurrencyDollar size={14} color="#6B6B6B" />
                <Text size="xs" c="dimmed">45,000 ETB</Text>
              </Group>
            </Group>
          </Card>

          <Card style={{
          width: 320
        }} padding="lg">
            <Group justify="space-between" mb="sm">
              <MantineBadge color="forest">Completed</MantineBadge>
              <IconBriefcase size={20} color="#2C5530" />
            </Group>
            <Title order={4} mb="xs">Restaurant Branding</Title>
            <Text size="sm" c="dimmed" mb="md">
              Brand identity for traditional Ethiopian restaurant chain.
            </Text>
            <Group gap="lg">
              <Group gap={4}>
                <IconCalendar size={14} color="#6B6B6B" />
                <Text size="xs" c="dimmed">Delivered Feb 28</Text>
              </Group>
              <Group gap={4}>
                <IconCurrencyDollar size={14} color="#6B6B6B" />
                <Text size="xs" c="dimmed">25,000 ETB</Text>
              </Group>
            </Group>
          </Card>

          <Card style={{
          width: 320,
          backgroundColor: '#1A1A1A'
        }} padding="lg" withBorder={false}>
            <MantineBadge color="rust" variant="light" mb="sm">Urgent</MantineBadge>
            <Title order={4} mb="xs" c="white">Mobile App Launch</Title>
            <Text size="sm" c="#E8D5B7" mb="md">
              TeleBirr-integrated payment app for local businesses.
            </Text>
            <Group gap="lg">
              <Group gap={4}>
                <IconCalendar size={14} color="#D4AF37" />
                <Text size="xs" c="#E8D5B7">Due Tomorrow</Text>
              </Group>
              <Group gap={4}>
                <IconCurrencyDollar size={14} color="#D4AF37" />
                <Text size="xs" c="#E8D5B7">120,000 ETB</Text>
              </Group>
            </Group>
          </Card>
        </Group>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Project cards showing real Ethiopian SaaS patterns: status badges, ETB budgets, due dates, and a dark variant for urgent items with TeleBirr integration.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#1A1A1A',
    borderRadius: 12
  }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">On Dark Background</Text>

        <Group gap="lg" wrap="wrap" align="flex-start">
          <Card style={{
          width: 300,
          backgroundColor: '#3D3D3D',
          border: '1px solid rgba(212,175,55,0.2)'
        }} withBorder={false}>
            <Title order={4} mb="xs" c="white">Dark Card</Title>
            <Text size="sm" c="#E8D5B7">
              Cards on dark backgrounds use charcoal bg with gold border hints.
            </Text>
          </Card>

          <Card style={{
          width: 300,
          backgroundColor: '#3D3D3D',
          border: '1px solid rgba(212,175,55,0.2)'
        }} withBorder={false}>
            <Title order={4} mb="xs" c="white">Dark Hover Card</Title>
            <Text size="sm" c="#E8D5B7">
              Hover lift effect works on dark backgrounds too.
            </Text>
          </Card>
        </Group>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Dark background cards with charcoal fills and gold-tinted borders. The hover lift effect works on any background.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};const S=["Variants","HoverEffect","WithSections","UseCases","OnDarkBackground"];export{d as HoverEffect,l as OnDarkBackground,n as UseCases,o as Variants,i as WithSections,S as __namedExportsOrder,G as default};
