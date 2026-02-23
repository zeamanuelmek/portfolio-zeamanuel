import{j as e}from"./iframe-DSgyGHZ6.js";import{C as a}from"./Card-DxYjujrS.js";import{B as d}from"./polymorphic-factory-d0jWGRqG.js";import{S as i}from"./Stack-Ca_rH8Tr.js";import{T as r}from"./Text-B4hK2jMs.js";import{G as s}from"./Group-4XXa0sCO.js";import{T as o}from"./Title-BBmoHL22.js";import{B as t}from"./Badge-CMMD3edI.js";import{I as x}from"./IconBriefcase-CHZrPvT5.js";import{I as p}from"./IconCalendar-DGUwWOs_.js";import{c as u}from"./createReactComponent-BhLdaQkJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-BOEY9P_j.js";import"./create-safe-context-CboTp2eA.js";const w=[["path",{d:"M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2",key:"svg-0"}],["path",{d:"M12 3v3m0 12v3",key:"svg-1"}]],h=u("outline","currency-dollar","CurrencyDollar",w),E={title:"Atoms/Card",component:a,parameters:{layout:"padded",docs:{description:{component:`
**When to use:**
Card is the primary container for grouping related content — project summaries, client profiles, invoice items, and dashboard widgets. Use it whenever content needs visual separation from the page background.

**Ethiopian Design Context:**
Cards default to \`xl\` border-radius for the modern, rounded aesthetic. The custom \`goldGlow\` prop adds a signature hover effect — gold box-shadow with subtle lift — for featured or premium content. Use \`Card.Section\` for header areas with brand gradients.

**Common Patterns:**
- Project cards with status badges, due dates, and ETB budgets
- Client profile cards with avatars and contact info
- Invoice/expense summary cards
- Dashboard stat widgets with gold glow for emphasis

**Accessibility:**
When cards are clickable, use \`component="a"\` or wrap in a link. The goldGlow hover effect provides visual feedback. Ensure sufficient color contrast on dark card variants.
        `}}},tags:["autodocs"],argTypes:{goldGlow:{description:"Enables gold box-shadow glow and lift effect on hover",control:"boolean"},shadow:{description:"Card shadow elevation (xs | sm | md | lg | xl)",control:"select",options:["xs","sm","md","lg","xl"]},padding:{description:"Inner padding (xs | sm | md | lg | xl)",control:"select",options:["xs","sm","md","lg","xl"]},withBorder:{description:"Adds a subtle border around the card",control:"boolean"},radius:{description:"Border radius (defaults to xl from theme)",control:"select",options:["xs","sm","md","lg","xl"]}}},l={render:()=>e.jsx(d,{p:"xl",style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(i,{gap:"xl",children:[e.jsx(r,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Card Variants"}),e.jsxs(s,{gap:"lg",wrap:"wrap",align:"flex-start",children:[e.jsxs(a,{style:{width:300},children:[e.jsx(o,{order:4,mb:"xs",children:"Default Card"}),e.jsx(r,{size:"sm",c:"dimmed",children:"Default card with border, subtle shadow, and xl border radius from theme defaults."})]}),e.jsxs(a,{shadow:"md",style:{width:300},children:[e.jsx(o,{order:4,mb:"xs",children:"Elevated Card"}),e.jsx(r,{size:"sm",c:"dimmed",children:"Higher elevation with medium shadow for important content."})]}),e.jsxs(a,{shadow:"lg",style:{width:300},children:[e.jsx(o,{order:4,mb:"xs",children:"High Elevation"}),e.jsx(r,{size:"sm",c:"dimmed",children:"Large shadow for modals, popovers, and featured content."})]})]})]})}),parameters:{docs:{description:{story:"Three elevation levels. Default for standard content, md for secondary emphasis, lg for modals and featured items."}}}},n={render:()=>e.jsx(d,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(i,{gap:"xl",children:[e.jsx(r,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Gold Glow on Hover"}),e.jsx(r,{size:"sm",c:"dimmed",children:"Hover over the cards to see the gold glow effect."}),e.jsxs(s,{gap:"lg",wrap:"wrap",align:"flex-start",children:[e.jsxs(a,{goldGlow:!0,style:{width:300},children:[e.jsx(o,{order:4,mb:"xs",children:"Featured Project"}),e.jsx(r,{size:"sm",c:"dimmed",children:"Gold glow effect on hover for premium and featured content cards."})]}),e.jsxs(a,{goldGlow:!0,style:{width:300},children:[e.jsx(t,{color:"gold",variant:"light",mb:"sm",children:"Premium"}),e.jsx(o,{order:4,mb:"xs",children:"Premium Service"}),e.jsx(r,{size:"sm",c:"dimmed",children:"Highlight premium offerings with the signature gold glow."})]}),e.jsxs(a,{goldGlow:!0,style:{width:300},children:[e.jsxs(s,{gap:"xs",mb:"sm",children:[e.jsx(t,{color:"forest",variant:"light",children:"Active"}),e.jsx(t,{color:"gold",variant:"outline",children:"Priority"})]}),e.jsx(o,{order:4,mb:"xs",children:"Active Project"}),e.jsx(r,{size:"sm",c:"dimmed",children:"Combine gold glow with status badges for rich project cards."})]})]})]})}),parameters:{docs:{description:{story:"The signature `goldGlow` prop adds a gold box-shadow and -2px lift on hover. Use for featured projects, premium services, and priority items."}}}},c={render:()=>e.jsx(d,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(i,{gap:"xl",children:[e.jsx(r,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Card with Sections"}),e.jsxs(s,{gap:"lg",wrap:"wrap",align:"flex-start",children:[e.jsxs(a,{style:{width:320},padding:"lg",children:[e.jsxs(a.Section,{style:{background:"linear-gradient(135deg, #D4AF37, #E8C84A)",padding:24},children:[e.jsx(r,{c:"white",fw:700,size:"lg",children:"Gold Header"}),e.jsx(r,{c:"white",size:"sm",style:{opacity:.9},children:"Brand gradient section"})]}),e.jsx(r,{size:"sm",c:"dimmed",mt:"md",children:"Card sections allow distinct visual areas within a single card."})]}),e.jsxs(a,{style:{width:320},padding:"lg",children:[e.jsxs(a.Section,{style:{background:"#1A1A1A",padding:24},children:[e.jsx(r,{c:"#D4AF37",fw:700,size:"lg",children:"Dark Header"}),e.jsx(r,{c:"#E8D5B7",size:"sm",children:"Premium dark section"})]}),e.jsx(r,{size:"sm",c:"dimmed",mt:"md",children:"Dark sections for hero-style card headers with gold accents."})]})]})]})}),parameters:{docs:{description:{story:"Card.Section creates full-bleed areas for headers, images, or backgrounds. Use the gold gradient or dark backgrounds for visual hierarchy."}}}},m={render:()=>e.jsx(d,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(i,{gap:"xl",children:[e.jsx(r,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Ethiopian SaaS Use Cases"}),e.jsxs(s,{gap:"lg",wrap:"wrap",align:"flex-start",children:[e.jsxs(a,{goldGlow:!0,style:{width:320},padding:"lg",children:[e.jsxs(s,{justify:"space-between",mb:"sm",children:[e.jsx(t,{color:"gold",variant:"light",children:"In Progress"}),e.jsx(x,{size:20,color:"#D4AF37"})]}),e.jsx(o,{order:4,mb:"xs",children:"E-Commerce Redesign"}),e.jsx(r,{size:"sm",c:"dimmed",mb:"md",children:"Full redesign of online marketplace for Ethiopian artisans."}),e.jsxs(s,{gap:"lg",children:[e.jsxs(s,{gap:4,children:[e.jsx(p,{size:14,color:"#6B6B6B"}),e.jsx(r,{size:"xs",c:"dimmed",children:"Due Mar 15"})]}),e.jsxs(s,{gap:4,children:[e.jsx(h,{size:14,color:"#6B6B6B"}),e.jsx(r,{size:"xs",c:"dimmed",children:"45,000 ETB"})]})]})]}),e.jsxs(a,{style:{width:320},padding:"lg",children:[e.jsxs(s,{justify:"space-between",mb:"sm",children:[e.jsx(t,{color:"forest",children:"Completed"}),e.jsx(x,{size:20,color:"#2C5530"})]}),e.jsx(o,{order:4,mb:"xs",children:"Restaurant Branding"}),e.jsx(r,{size:"sm",c:"dimmed",mb:"md",children:"Brand identity for traditional Ethiopian restaurant chain."}),e.jsxs(s,{gap:"lg",children:[e.jsxs(s,{gap:4,children:[e.jsx(p,{size:14,color:"#6B6B6B"}),e.jsx(r,{size:"xs",c:"dimmed",children:"Delivered Feb 28"})]}),e.jsxs(s,{gap:4,children:[e.jsx(h,{size:14,color:"#6B6B6B"}),e.jsx(r,{size:"xs",c:"dimmed",children:"25,000 ETB"})]})]})]}),e.jsxs(a,{style:{width:320,backgroundColor:"#1A1A1A"},padding:"lg",withBorder:!1,children:[e.jsx(t,{color:"rust",variant:"light",mb:"sm",children:"Urgent"}),e.jsx(o,{order:4,mb:"xs",c:"white",children:"Mobile App Launch"}),e.jsx(r,{size:"sm",c:"#E8D5B7",mb:"md",children:"TeleBirr-integrated payment app for local businesses."}),e.jsxs(s,{gap:"lg",children:[e.jsxs(s,{gap:4,children:[e.jsx(p,{size:14,color:"#D4AF37"}),e.jsx(r,{size:"xs",c:"#E8D5B7",children:"Due Tomorrow"})]}),e.jsxs(s,{gap:4,children:[e.jsx(h,{size:14,color:"#D4AF37"}),e.jsx(r,{size:"xs",c:"#E8D5B7",children:"120,000 ETB"})]})]})]})]})]})}),parameters:{docs:{description:{story:"Project cards showing real Ethiopian SaaS patterns: status badges, ETB budgets, due dates, and a dark variant for urgent items with TeleBirr integration."}}}},g={render:()=>e.jsx(d,{p:"xl",style:{backgroundColor:"#1A1A1A",borderRadius:12},children:e.jsxs(i,{gap:"xl",children:[e.jsx(r,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"On Dark Background"}),e.jsxs(s,{gap:"lg",wrap:"wrap",align:"flex-start",children:[e.jsxs(a,{style:{width:300,backgroundColor:"#3D3D3D",border:"1px solid rgba(212,175,55,0.2)"},withBorder:!1,children:[e.jsx(o,{order:4,mb:"xs",c:"white",children:"Dark Card"}),e.jsx(r,{size:"sm",c:"#E8D5B7",children:"Cards on dark backgrounds use charcoal bg with gold border hints."})]}),e.jsxs(a,{goldGlow:!0,style:{width:300,backgroundColor:"#3D3D3D",border:"1px solid rgba(212,175,55,0.2)"},withBorder:!1,children:[e.jsx(o,{order:4,mb:"xs",c:"white",children:"Gold Glow Dark"}),e.jsx(r,{size:"sm",c:"#E8D5B7",children:"Gold glow effect is even more striking on dark backgrounds."})]})]})]})}),parameters:{docs:{description:{story:"Dark background cards with charcoal fills and gold-tinted borders. The goldGlow hover effect is especially dramatic on dark surfaces."}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
              Default card with border, subtle shadow, and xl border radius from theme defaults.
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
        story: 'Three elevation levels. Default for standard content, md for secondary emphasis, lg for modals and featured items.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Gold Glow on Hover</Text>
        <Text size="sm" c="dimmed">Hover over the cards to see the gold glow effect.</Text>

        <Group gap="lg" wrap="wrap" align="flex-start">
          <Card goldGlow style={{
          width: 300
        }}>
            <Title order={4} mb="xs">Featured Project</Title>
            <Text size="sm" c="dimmed">
              Gold glow effect on hover for premium and featured content cards.
            </Text>
          </Card>

          <Card goldGlow style={{
          width: 300
        }}>
            <MantineBadge color="gold" variant="light" mb="sm">Premium</MantineBadge>
            <Title order={4} mb="xs">Premium Service</Title>
            <Text size="sm" c="dimmed">
              Highlight premium offerings with the signature gold glow.
            </Text>
          </Card>

          <Card goldGlow style={{
          width: 300
        }}>
            <Group gap="xs" mb="sm">
              <MantineBadge color="forest" variant="light">Active</MantineBadge>
              <MantineBadge color="gold" variant="outline">Priority</MantineBadge>
            </Group>
            <Title order={4} mb="xs">Active Project</Title>
            <Text size="sm" c="dimmed">
              Combine gold glow with status badges for rich project cards.
            </Text>
          </Card>
        </Group>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'The signature \`goldGlow\` prop adds a gold box-shadow and -2px lift on hover. Use for featured projects, premium services, and priority items.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Ethiopian SaaS Use Cases</Text>

        <Group gap="lg" wrap="wrap" align="flex-start">
          <Card goldGlow style={{
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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

          <Card goldGlow style={{
          width: 300,
          backgroundColor: '#3D3D3D',
          border: '1px solid rgba(212,175,55,0.2)'
        }} withBorder={false}>
            <Title order={4} mb="xs" c="white">Gold Glow Dark</Title>
            <Text size="sm" c="#E8D5B7">
              Gold glow effect is even more striking on dark backgrounds.
            </Text>
          </Card>
        </Group>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Dark background cards with charcoal fills and gold-tinted borders. The goldGlow hover effect is especially dramatic on dark surfaces.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};const S=["Variants","GoldGlow","WithSections","UseCases","OnDarkBackground"];export{n as GoldGlow,g as OnDarkBackground,m as UseCases,l as Variants,c as WithSections,S as __namedExportsOrder,E as default};
