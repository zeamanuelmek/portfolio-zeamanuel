import{j as e}from"./iframe-B9BJqu6d.js";import{D as r}from"./Divider-y02dhm4n.js";import{B as t}from"./polymorphic-factory-B38yjnoz.js";import{S as o}from"./Stack-C9852h35.js";import{T as i}from"./Text-CSoEI4MQ.js";import{P as n}from"./Paper-DOhuRlTg.js";import{T as d}from"./Title-WVNpPliK.js";import"./preload-helper-PPVm8Dsz.js";const v={title:"Atoms/Divider",component:r,parameters:{layout:"padded",docs:{description:{component:`
**When to use:**
Divider separates content sections visually. Use between form groups, card sections, and page areas. Choose from four styles depending on the level of visual emphasis needed.

**Ethiopian Design Context:**
Three custom variants celebrate Ethiopian design heritage:
- \`goldGradient\` — Fades from transparent → gold → transparent for elegant section breaks
- \`habesha\` — Triple-line divider in Ethiopian flag colors (green/gold/red)
- \`diamond\` — Habesha textile-inspired diamond motif with gold accents

**Common Patterns:**
- Gold gradient between major page sections
- Habesha divider as a cultural signature in headers/footers
- Diamond pattern for premium/featured section separators
- Standard Mantine divider with labels for form sections

**Accessibility:**
Dividers are decorative (\`role="separator"\`). The custom variants (goldGradient, habesha, diamond) render as styled \`Box\` elements — purely visual.
        `}}},tags:["autodocs"],argTypes:{goldGradient:{description:"Renders a gold fade-in/fade-out gradient line",control:"boolean"},habesha:{description:"Renders triple-line divider in Ethiopian flag colors (green/gold/red)",control:"boolean"},diamond:{description:"Renders a Habesha textile-inspired diamond motif",control:"boolean"},label:{description:"Text label displayed on the divider line (standard variant only)",control:"text"},labelPosition:{description:"Position of the label (left, center, right)",control:"select",options:["left","center","right"]}}},s={render:()=>e.jsx(t,{p:"xl",style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(o,{gap:"xl",style:{maxWidth:600},children:[e.jsx(i,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Divider Variants"}),e.jsxs("div",{children:[e.jsx(i,{fw:500,mb:"md",children:"Default (Mantine)"}),e.jsx(r,{})]}),e.jsxs("div",{children:[e.jsx(i,{fw:500,mb:"md",children:"Gold Gradient"}),e.jsx(r,{goldGradient:!0})]}),e.jsxs("div",{children:[e.jsx(i,{fw:500,mb:"md",children:"Habesha (Ethiopian Flag)"}),e.jsx(r,{habesha:!0})]}),e.jsxs("div",{children:[e.jsx(i,{fw:500,mb:"md",children:"Diamond Pattern"}),e.jsx(r,{diamond:!0})]}),e.jsxs("div",{children:[e.jsx(i,{fw:500,mb:"md",children:"With Label"}),e.jsx(r,{label:"Section Title",labelPosition:"center"})]}),e.jsxs("div",{children:[e.jsx(i,{fw:500,mb:"md",children:"With Left Label"}),e.jsx(r,{label:"Details",labelPosition:"left"})]})]})}),parameters:{docs:{description:{story:"All divider variants: standard Mantine, gold gradient, Ethiopian flag (habesha), diamond motif, and labeled dividers for section headings."}}}},a={render:()=>e.jsx(t,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(o,{gap:"xl",style:{maxWidth:600},children:[e.jsx(i,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Dividers in Context"}),e.jsxs(n,{p:"xl",radius:"lg",withBorder:!0,children:[e.jsx(d,{order:3,mb:"xs",children:"Project Overview"}),e.jsx(i,{size:"sm",c:"dimmed",children:"E-Commerce platform redesign for Ethiopian artisans."}),e.jsx(t,{my:"lg",children:e.jsx(r,{goldGradient:!0})}),e.jsx(d,{order:5,mb:"xs",children:"Project Details"}),e.jsx(i,{size:"sm",c:"dimmed",children:"Timeline: 6 weeks | Budget: 85,000 ETB"}),e.jsx(t,{my:"lg",children:e.jsx(r,{diamond:!0})}),e.jsx(d,{order:5,mb:"xs",children:"Team"}),e.jsx(i,{size:"sm",c:"dimmed",children:"3 designers, 2 developers, 1 PM"})]}),e.jsxs(t,{p:"xl",style:{backgroundColor:"#1A1A1A",borderRadius:12},children:[e.jsx(d,{order:3,c:"white",mb:"sm",children:"Dark Section"}),e.jsx(i,{size:"sm",c:"#E8D5B7",mb:"lg",children:"Gold dividers shine on dark backgrounds."}),e.jsx(r,{goldGradient:!0}),e.jsx(i,{size:"sm",c:"#E8D5B7",mt:"lg",mb:"lg",children:"Between sections of dark content."}),e.jsx(r,{habesha:!0}),e.jsx(i,{size:"sm",c:"#E8D5B7",mt:"lg",children:"Ethiopian flag divider adds cultural touch."})]})]})}),parameters:{docs:{description:{story:"Dividers used within cards and dark sections. Gold gradient and diamond pattern separate project details. Habesha divider adds cultural flair on dark backgrounds."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      <Stack gap="xl" style={{
      maxWidth: 600
    }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Divider Variants</Text>

        <div>
          <Text fw={500} mb="md">Default (Mantine)</Text>
          <Divider />
        </div>

        <div>
          <Text fw={500} mb="md">Gold Gradient</Text>
          <Divider goldGradient />
        </div>

        <div>
          <Text fw={500} mb="md">Habesha (Ethiopian Flag)</Text>
          <Divider habesha />
        </div>

        <div>
          <Text fw={500} mb="md">Diamond Pattern</Text>
          <Divider diamond />
        </div>

        <div>
          <Text fw={500} mb="md">With Label</Text>
          <Divider label="Section Title" labelPosition="center" />
        </div>

        <div>
          <Text fw={500} mb="md">With Left Label</Text>
          <Divider label="Details" labelPosition="left" />
        </div>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'All divider variants: standard Mantine, gold gradient, Ethiopian flag (habesha), diamond motif, and labeled dividers for section headings.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="xl" style={{
      maxWidth: 600
    }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Dividers in Context</Text>

        <Paper p="xl" radius="lg" withBorder>
          <Title order={3} mb="xs">Project Overview</Title>
          <Text size="sm" c="dimmed">E-Commerce platform redesign for Ethiopian artisans.</Text>

          <Box my="lg"><Divider goldGradient /></Box>

          <Title order={5} mb="xs">Project Details</Title>
          <Text size="sm" c="dimmed">Timeline: 6 weeks | Budget: 85,000 ETB</Text>

          <Box my="lg"><Divider diamond /></Box>

          <Title order={5} mb="xs">Team</Title>
          <Text size="sm" c="dimmed">3 designers, 2 developers, 1 PM</Text>
        </Paper>

        <Box p="xl" style={{
        backgroundColor: '#1A1A1A',
        borderRadius: 12
      }}>
          <Title order={3} c="white" mb="sm">Dark Section</Title>
          <Text size="sm" c="#E8D5B7" mb="lg">Gold dividers shine on dark backgrounds.</Text>

          <Divider goldGradient />

          <Text size="sm" c="#E8D5B7" mt="lg" mb="lg">Between sections of dark content.</Text>

          <Divider habesha />

          <Text size="sm" c="#E8D5B7" mt="lg">Ethiopian flag divider adds cultural touch.</Text>
        </Box>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Dividers used within cards and dark sections. Gold gradient and diamond pattern separate project details. Habesha divider adds cultural flair on dark backgrounds.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const u=["Variants","InContext"];export{a as InContext,s as Variants,u as __namedExportsOrder,v as default};
