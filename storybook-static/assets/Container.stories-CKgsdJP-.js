import{j as e}from"./iframe-B9BJqu6d.js";import{C as t}from"./Container-BuIkP306.js";import{B as s}from"./polymorphic-factory-B38yjnoz.js";import{P as d}from"./Paper-DOhuRlTg.js";import{T as o}from"./Title-WVNpPliK.js";import{T as r}from"./Text-CSoEI4MQ.js";import"./preload-helper-PPVm8Dsz.js";const f={title:"Atoms/Container",component:t,parameters:{layout:"fullscreen",docs:{description:{component:`
**When to use:**
Container constrains content to a readable max-width and centers it horizontally. Wrap page sections, form layouts, and content areas. Use inside full-bleed backgrounds (dark, gold gradient) so the background stretches edge-to-edge while content stays centered.

**Ethiopian Design Context:**
Defaults to \`56rem\` (896px) max-width — optimized for the portfolio/SaaS dashboard layout. Use \`size="xs"\` (576px) for focused forms like login or settings. Full-bleed dark sections with Container create the signature SemEnaWerk hero pattern.

**Common Patterns:**
- Full-bleed dark hero with centered Container content
- Page content sections at default 56rem width
- Narrow form containers at xs (576px) for auth/settings
- Gold gradient CTA sections with contained text

**Accessibility:**
Container provides natural line-length constraints (~60-80 characters) for readable body text, improving readability for all users.
        `}}},tags:["autodocs"],argTypes:{size:{description:"Max-width of the container (defaults to 56rem / 896px)",control:"select",options:["xs","sm","md","lg","xl"]}}},a={render:()=>e.jsx(s,{style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},py:"xl",children:e.jsx(t,{children:e.jsxs(d,{p:"xl",radius:"lg",withBorder:!0,children:[e.jsx(o,{order:3,mb:"xs",children:"Default Container (56rem / 896px)"}),e.jsx(r,{size:"sm",c:"dimmed",mb:"md",children:"The default max-width matches the portfolio layout. Content stays readable and centered on large screens."}),e.jsx(s,{style:{height:4,backgroundColor:"#D4AF37",borderRadius:2,width:"100%"}})]})})}),parameters:{docs:{description:{story:"Default 56rem container width. Optimized for readable content and dashboard layouts."}}}},n={render:()=>e.jsxs(s,{style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},py:"xl",children:[e.jsx(s,{px:"md",children:e.jsx(r,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",mb:"xl",ta:"center",children:"Container Sizes"})}),[{size:"xs",label:"XS (36rem / 576px)"},{size:"sm",label:"SM (48rem / 768px)"},{size:"md",label:"MD (52rem / 832px)"},{size:"56rem",label:"Default (56rem / 896px)"},{size:"lg",label:"LG (62rem / 992px)"},{size:"xl",label:"XL (75rem / 1200px)"}].map(({size:c,label:l})=>e.jsx(t,{size:c,mb:"md",children:e.jsx(d,{p:"md",radius:"lg",style:{border:"2px dashed rgba(212,175,55,0.3)"},children:e.jsx(r,{size:"sm",fw:500,children:l})})},l))]}),parameters:{docs:{description:{story:"All available container sizes from xs (576px) to xl (1200px). Use xs for login forms, default for content pages, xl for wide dashboards."}}}},i={render:()=>e.jsxs(s,{style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:[e.jsx(s,{style:{backgroundColor:"#1A1A1A"},py:"xl",children:e.jsxs(t,{children:[e.jsx(o,{order:2,c:"white",mb:"xs",style:{fontFamily:"'Space Grotesk', sans-serif"},children:"Hero sections use Container inside full-width backgrounds"}),e.jsx(r,{c:"#E8D5B7",children:"The dark background stretches edge-to-edge while content stays within 56rem."})]})}),e.jsxs(t,{py:"xl",children:[e.jsx(o,{order:3,mb:"xs",children:"Content Section"}),e.jsx(r,{size:"sm",c:"dimmed",mb:"xl",children:"Standard page content sits inside the container with comfortable reading width."}),e.jsxs(d,{p:"xl",radius:"lg",withBorder:!0,children:[e.jsx(o,{order:4,mb:"xs",children:"Nested Card"}),e.jsx(r,{size:"sm",c:"dimmed",children:"Cards inside containers inherit the constrained width naturally."})]})]}),e.jsx(s,{style:{background:"linear-gradient(135deg, #D4AF37, #E8C84A)"},py:"xl",children:e.jsxs(t,{children:[e.jsx(o,{order:3,c:"white",mb:"xs",style:{fontFamily:"'Space Grotesk', sans-serif"},children:"Brand Accent Section"}),e.jsx(r,{c:"white",style:{opacity:.9},children:"Gold gradient backgrounds with contained content for CTAs and highlights."})]})}),e.jsxs(t,{size:"xs",py:"xl",children:[e.jsx(o,{order:3,mb:"xs",ta:"center",children:"Narrow Container for Forms"}),e.jsx(r,{size:"sm",c:"dimmed",ta:"center",mb:"md",children:'Use size="xs" (576px) for login forms, settings, and focused content.'}),e.jsx(d,{p:"xl",radius:"lg",withBorder:!0,children:e.jsx(r,{size:"sm",c:"dimmed",ta:"center",children:"Form content goes here"})})]})]}),parameters:{docs:{description:{story:"Real page layout patterns: full-bleed dark hero, cream content area, gold gradient CTA, and narrow form container. Shows the Container + full-bleed background technique."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Box style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }} py="xl">
      <Container>
        <Paper p="xl" radius="lg" withBorder>
          <Title order={3} mb="xs">Default Container (56rem / 896px)</Title>
          <Text size="sm" c="dimmed" mb="md">
            The default max-width matches the portfolio layout. Content stays readable
            and centered on large screens.
          </Text>
          <Box style={{
          height: 4,
          backgroundColor: '#D4AF37',
          borderRadius: 2,
          width: '100%'
        }} />
        </Paper>
      </Container>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Default 56rem container width. Optimized for readable content and dashboard layouts.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Box style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }} py="xl">
      <Box px="md">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" mb="xl" ta="center">Container Sizes</Text>
      </Box>

      {[{
      size: 'xs',
      label: 'XS (36rem / 576px)'
    }, {
      size: 'sm',
      label: 'SM (48rem / 768px)'
    }, {
      size: 'md',
      label: 'MD (52rem / 832px)'
    }, {
      size: '56rem',
      label: 'Default (56rem / 896px)'
    }, {
      size: 'lg',
      label: 'LG (62rem / 992px)'
    }, {
      size: 'xl',
      label: 'XL (75rem / 1200px)'
    }].map(({
      size,
      label
    }) => <Container key={label} size={size} mb="md">
          <Paper p="md" radius="lg" style={{
        border: '2px dashed rgba(212,175,55,0.3)'
      }}>
            <Text size="sm" fw={500}>{label}</Text>
          </Paper>
        </Container>)}
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'All available container sizes from xs (576px) to xl (1200px). Use xs for login forms, default for content pages, xl for wide dashboards.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Box style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      {/* Full-width dark hero */}
      <Box style={{
      backgroundColor: '#1A1A1A'
    }} py="xl">
        <Container>
          <Title order={2} c="white" mb="xs" style={{
          fontFamily: "'Space Grotesk', sans-serif"
        }}>
            Hero sections use Container inside full-width backgrounds
          </Title>
          <Text c="#E8D5B7">
            The dark background stretches edge-to-edge while content stays within 56rem.
          </Text>
        </Container>
      </Box>

      {/* Cream content area */}
      <Container py="xl">
        <Title order={3} mb="xs">Content Section</Title>
        <Text size="sm" c="dimmed" mb="xl">
          Standard page content sits inside the container with comfortable reading width.
        </Text>

        <Paper p="xl" radius="lg" withBorder>
          <Title order={4} mb="xs">Nested Card</Title>
          <Text size="sm" c="dimmed">
            Cards inside containers inherit the constrained width naturally.
          </Text>
        </Paper>
      </Container>

      {/* Gold gradient section */}
      <Box style={{
      background: 'linear-gradient(135deg, #D4AF37, #E8C84A)'
    }} py="xl">
        <Container>
          <Title order={3} c="white" mb="xs" style={{
          fontFamily: "'Space Grotesk', sans-serif"
        }}>
            Brand Accent Section
          </Title>
          <Text c="white" style={{
          opacity: 0.9
        }}>
            Gold gradient backgrounds with contained content for CTAs and highlights.
          </Text>
        </Container>
      </Box>

      {/* Narrow container for forms */}
      <Container size="xs" py="xl">
        <Title order={3} mb="xs" ta="center">Narrow Container for Forms</Title>
        <Text size="sm" c="dimmed" ta="center" mb="md">
          Use size=&quot;xs&quot; (576px) for login forms, settings, and focused content.
        </Text>
        <Paper p="xl" radius="lg" withBorder>
          <Text size="sm" c="dimmed" ta="center">Form content goes here</Text>
        </Paper>
      </Container>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Real page layout patterns: full-bleed dark hero, cream content area, gold gradient CTA, and narrow form container. Shows the Container + full-bleed background technique.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const y=["DefaultSize","Sizes","UseCases"];export{a as DefaultSize,n as Sizes,i as UseCases,y as __namedExportsOrder,f as default};
