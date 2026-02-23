import{j as e}from"./iframe-DSgyGHZ6.js";import{L as r}from"./Link-B0CRWVto.js";import{B as n}from"./polymorphic-factory-d0jWGRqG.js";import{S as i}from"./Stack-Ca_rH8Tr.js";import{T as s}from"./Text-B4hK2jMs.js";import{P as t}from"./Paper-BOEY9P_j.js";import{G as o}from"./Group-4XXa0sCO.js";import{c as k}from"./createReactComponent-BhLdaQkJ.js";import{I as p}from"./IconArrowRight-CnTDaaVY.js";import"./preload-helper-PPVm8Dsz.js";const m=[["path",{d:"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6",key:"svg-0"}],["path",{d:"M11 13l9 -9",key:"svg-1"}],["path",{d:"M15 4h5v5",key:"svg-2"}]],f=k("outline","external-link","ExternalLink",m),D={title:"Atoms/Link",component:r,parameters:{layout:"padded",docs:{description:{component:`
**When to use:**
Link renders styled anchor elements for navigation and references. Use for inline text links, breadcrumbs, footer navigation, and any clickable text that navigates to another page or section.

**Ethiopian Design Context:**
Defaults to gold color (\`c="gold"\`) with underline on hover — matching the brand accent without being visually heavy. On dark backgrounds, use \`c="gold"\` or \`c="#E8D5B7"\` (sand) for sufficient contrast.

**Common Patterns:**
- Inline links within body text (project names, invoice references)
- Breadcrumb navigation (Dashboard / Projects / E-Commerce Redesign)
- Footer navigation columns on dark backgrounds
- "View all" and "See more" action links with arrow icons

**Accessibility:**
Links use semantic \`<a>\` elements with proper focus styles. Underline on hover provides clear affordance. Use descriptive link text — avoid "click here".
        `}}},tags:["autodocs"],argTypes:{href:{description:"Link destination URL",control:"text"},c:{description:"Link color (defaults to gold)",control:"text"},size:{description:"Text size (xs | sm | md | lg | xl)",control:"select",options:["xs","sm","md","lg","xl"]},underline:{description:"Underline behavior — hover (default), always, or never",control:"select",options:["hover","always","never"]},fw:{description:"Font weight for emphasis",control:"select",options:[400,500,600,700]}}},a={render:()=>e.jsx(n,{p:"xl",style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(i,{gap:"xl",children:[e.jsx(s,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Link Variants"}),e.jsx(t,{p:"xl",radius:"lg",withBorder:!0,children:e.jsxs(i,{gap:"md",children:[e.jsxs("div",{children:[e.jsx(s,{fw:500,mb:"xs",children:"Default (gold, underline on hover)"}),e.jsx(r,{href:"#",children:"View project details"})]}),e.jsxs("div",{children:[e.jsx(s,{fw:500,mb:"xs",children:"Always underlined"}),e.jsx(r,{href:"#",underline:"always",children:"Always underlined link"})]}),e.jsxs("div",{children:[e.jsx(s,{fw:500,mb:"xs",children:"Never underlined"}),e.jsx(r,{href:"#",underline:"never",children:"Never underlined link"})]}),e.jsxs("div",{children:[e.jsx(s,{fw:500,mb:"xs",children:"Brand colors"}),e.jsxs(o,{gap:"lg",children:[e.jsx(r,{href:"#",c:"gold",children:"Gold link"}),e.jsx(r,{href:"#",c:"rust",children:"Rust link"}),e.jsx(r,{href:"#",c:"forest",children:"Forest link"}),e.jsx(r,{href:"#",c:"earth",children:"Earth link"})]})]})]})})]})}),parameters:{docs:{description:{story:"Link variants: default gold with hover underline, always underlined, never underlined, and brand color options."}}}},c={render:()=>e.jsx(n,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(i,{gap:"md",children:[e.jsx(s,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Link Sizes"}),e.jsx(t,{p:"xl",radius:"lg",withBorder:!0,children:e.jsxs(i,{gap:"sm",children:[e.jsx(r,{href:"#",size:"xs",children:"Extra small link"}),e.jsx(r,{href:"#",size:"sm",children:"Small link"}),e.jsx(r,{href:"#",size:"md",children:"Medium link (default)"}),e.jsx(r,{href:"#",size:"lg",children:"Large link"}),e.jsx(r,{href:"#",size:"xl",children:"Extra large link"})]})})]})}),parameters:{docs:{description:{story:"Five sizes matching the Text size scale. Use sm for footer/breadcrumb links, md for inline text, lg/xl for featured links."}}}},l={render:()=>e.jsx(n,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(i,{gap:"md",children:[e.jsx(s,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Links with Icons"}),e.jsx(t,{p:"xl",radius:"lg",withBorder:!0,children:e.jsxs(i,{gap:"sm",children:[e.jsxs(o,{gap:4,children:[e.jsx(r,{href:"#",children:"View documentation"}),e.jsx(f,{size:14,color:"#D4AF37"})]}),e.jsxs(o,{gap:4,children:[e.jsx(r,{href:"#",children:"Go to dashboard"}),e.jsx(p,{size:14,color:"#D4AF37"})]}),e.jsxs(o,{gap:4,children:[e.jsx(r,{href:"#",fw:600,children:"See all projects"}),e.jsx(p,{size:14,color:"#D4AF37"})]})]})})]})}),parameters:{docs:{description:{story:"Links paired with icons: external link indicator and arrow-right for navigation. Use gold-colored icons to match the link color."}}}},d={render:()=>e.jsx(n,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(i,{gap:"xl",style:{maxWidth:500},children:[e.jsx(s,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Inline Links"}),e.jsx(t,{p:"xl",radius:"lg",withBorder:!0,children:e.jsxs(s,{size:"sm",children:["Welcome to ",e.jsx(r,{href:"#",children:"SemEnaWerk"}),", an Ethiopian-inspired digital agency. Check out our ",e.jsx(r,{href:"#",children:"portfolio"})," or read about our"," ",e.jsx(r,{href:"#",children:"design process"}),"."]})}),e.jsx(t,{p:"xl",radius:"lg",withBorder:!0,children:e.jsxs(s,{size:"sm",children:["Your invoice ",e.jsx(r,{href:"#",fw:600,children:"#1042"})," for"," ",e.jsx(r,{href:"#",c:"forest",fw:600,children:"E-Commerce Redesign"})," is due on March 15. Please ",e.jsx(r,{href:"#",c:"rust",children:"pay now"})," to avoid late fees."]})})]})}),parameters:{docs:{description:{story:"Inline links within body text. Use default gold for general links, forest for positive references, rust for action-required items."}}}},h={render:()=>e.jsx(n,{p:"xl",style:{backgroundColor:"#1A1A1A",borderRadius:12},children:e.jsxs(i,{gap:"xl",children:[e.jsx(s,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Links on Dark Background"}),e.jsxs(i,{gap:"sm",children:[e.jsx(r,{href:"#",c:"gold",children:"Gold link on dark"}),e.jsx(r,{href:"#",c:"#E8D5B7",children:"Sand link on dark"}),e.jsx(r,{href:"#",c:"white",children:"White link on dark"})]}),e.jsxs(s,{size:"sm",c:"#E8D5B7",children:["Visit ",e.jsx(r,{href:"#",c:"gold",children:"our portfolio"})," or"," ",e.jsx(r,{href:"#",c:"gold",children:"contact us"})," for a free consultation."]})]})}),parameters:{docs:{description:{story:"Link colors on dark backgrounds: gold for primary links, sand for secondary, white for high contrast."}}}},x={render:()=>e.jsx(n,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(i,{gap:"xl",style:{maxWidth:500},children:[e.jsx(s,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Ethiopian SaaS Use Cases"}),e.jsx(t,{p:"lg",radius:"lg",withBorder:!0,children:e.jsxs(o,{gap:8,children:[e.jsx(r,{href:"#",size:"sm",children:"Dashboard"}),e.jsx(s,{size:"sm",c:"dimmed",children:"/"}),e.jsx(r,{href:"#",size:"sm",children:"Projects"}),e.jsx(s,{size:"sm",c:"dimmed",children:"/"}),e.jsx(s,{size:"sm",fw:500,children:"E-Commerce Redesign"})]})}),e.jsxs(n,{p:"lg",style:{backgroundColor:"#1A1A1A",borderRadius:12},children:[e.jsx(s,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",mb:"md",children:"Footer Navigation"}),e.jsxs(o,{gap:"xl",children:[e.jsxs(i,{gap:"xs",children:[e.jsx(s,{size:"xs",c:"#E8D5B7",fw:600,children:"Services"}),e.jsx(r,{href:"#",c:"#E8D5B7",size:"sm",children:"Branding"}),e.jsx(r,{href:"#",c:"#E8D5B7",size:"sm",children:"Web Design"}),e.jsx(r,{href:"#",c:"#E8D5B7",size:"sm",children:"Mobile Apps"})]}),e.jsxs(i,{gap:"xs",children:[e.jsx(s,{size:"xs",c:"#E8D5B7",fw:600,children:"Company"}),e.jsx(r,{href:"#",c:"#E8D5B7",size:"sm",children:"About"}),e.jsx(r,{href:"#",c:"#E8D5B7",size:"sm",children:"Portfolio"}),e.jsx(r,{href:"#",c:"#E8D5B7",size:"sm",children:"Contact"})]}),e.jsxs(i,{gap:"xs",children:[e.jsx(s,{size:"xs",c:"#E8D5B7",fw:600,children:"Legal"}),e.jsx(r,{href:"#",c:"#E8D5B7",size:"sm",children:"Privacy"}),e.jsx(r,{href:"#",c:"#E8D5B7",size:"sm",children:"Terms"})]})]})]})]})}),parameters:{docs:{description:{story:"Breadcrumb navigation pattern and dark footer with three-column link layout. Sand-colored links on dark for the SemEnaWerk footer style."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Link Variants</Text>

        <Paper p="xl" radius="lg" withBorder>
          <Stack gap="md">
            <div>
              <Text fw={500} mb="xs">Default (gold, underline on hover)</Text>
              <Link href="#">View project details</Link>
            </div>

            <div>
              <Text fw={500} mb="xs">Always underlined</Text>
              <Link href="#" underline="always">Always underlined link</Link>
            </div>

            <div>
              <Text fw={500} mb="xs">Never underlined</Text>
              <Link href="#" underline="never">Never underlined link</Link>
            </div>

            <div>
              <Text fw={500} mb="xs">Brand colors</Text>
              <Group gap="lg">
                <Link href="#" c="gold">Gold link</Link>
                <Link href="#" c="rust">Rust link</Link>
                <Link href="#" c="forest">Forest link</Link>
                <Link href="#" c="earth">Earth link</Link>
              </Group>
            </div>
          </Stack>
        </Paper>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Link variants: default gold with hover underline, always underlined, never underlined, and brand color options.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="md">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Link Sizes</Text>
        <Paper p="xl" radius="lg" withBorder>
          <Stack gap="sm">
            <Link href="#" size="xs">Extra small link</Link>
            <Link href="#" size="sm">Small link</Link>
            <Link href="#" size="md">Medium link (default)</Link>
            <Link href="#" size="lg">Large link</Link>
            <Link href="#" size="xl">Extra large link</Link>
          </Stack>
        </Paper>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Five sizes matching the Text size scale. Use sm for footer/breadcrumb links, md for inline text, lg/xl for featured links.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="md">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Links with Icons</Text>
        <Paper p="xl" radius="lg" withBorder>
          <Stack gap="sm">
            <Group gap={4}>
              <Link href="#">View documentation</Link>
              <IconExternalLink size={14} color="#D4AF37" />
            </Group>

            <Group gap={4}>
              <Link href="#">Go to dashboard</Link>
              <IconArrowRight size={14} color="#D4AF37" />
            </Group>

            <Group gap={4}>
              <Link href="#" fw={600}>See all projects</Link>
              <IconArrowRight size={14} color="#D4AF37" />
            </Group>
          </Stack>
        </Paper>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Links paired with icons: external link indicator and arrow-right for navigation. Use gold-colored icons to match the link color.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="xl" style={{
      maxWidth: 500
    }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Inline Links</Text>

        <Paper p="xl" radius="lg" withBorder>
          <Text size="sm">
            Welcome to <Link href="#">SemEnaWerk</Link>, an Ethiopian-inspired digital agency.
            Check out our <Link href="#">portfolio</Link> or read about our{' '}
            <Link href="#">design process</Link>.
          </Text>
        </Paper>

        <Paper p="xl" radius="lg" withBorder>
          <Text size="sm">
            Your invoice <Link href="#" fw={600}>#1042</Link> for{' '}
            <Link href="#" c="forest" fw={600}>E-Commerce Redesign</Link> is due on March 15.
            Please <Link href="#" c="rust">pay now</Link> to avoid late fees.
          </Text>
        </Paper>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Inline links within body text. Use default gold for general links, forest for positive references, rust for action-required items.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#1A1A1A',
    borderRadius: 12
  }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Links on Dark Background</Text>

        <Stack gap="sm">
          <Link href="#" c="gold">Gold link on dark</Link>
          <Link href="#" c="#E8D5B7">Sand link on dark</Link>
          <Link href="#" c="white">White link on dark</Link>
        </Stack>

        <Text size="sm" c="#E8D5B7">
          Visit <Link href="#" c="gold">our portfolio</Link> or{' '}
          <Link href="#" c="gold">contact us</Link> for a free consultation.
        </Text>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Link colors on dark backgrounds: gold for primary links, sand for secondary, white for high contrast.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="xl" style={{
      maxWidth: 500
    }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Ethiopian SaaS Use Cases</Text>

        {/* Breadcrumb-style */}
        <Paper p="lg" radius="lg" withBorder>
          <Group gap={8}>
            <Link href="#" size="sm">Dashboard</Link>
            <Text size="sm" c="dimmed">/</Text>
            <Link href="#" size="sm">Projects</Link>
            <Text size="sm" c="dimmed">/</Text>
            <Text size="sm" fw={500}>E-Commerce Redesign</Text>
          </Group>
        </Paper>

        {/* Footer links */}
        <Box p="lg" style={{
        backgroundColor: '#1A1A1A',
        borderRadius: 12
      }}>
          <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" mb="md">Footer Navigation</Text>
          <Group gap="xl">
            <Stack gap="xs">
              <Text size="xs" c="#E8D5B7" fw={600}>Services</Text>
              <Link href="#" c="#E8D5B7" size="sm">Branding</Link>
              <Link href="#" c="#E8D5B7" size="sm">Web Design</Link>
              <Link href="#" c="#E8D5B7" size="sm">Mobile Apps</Link>
            </Stack>
            <Stack gap="xs">
              <Text size="xs" c="#E8D5B7" fw={600}>Company</Text>
              <Link href="#" c="#E8D5B7" size="sm">About</Link>
              <Link href="#" c="#E8D5B7" size="sm">Portfolio</Link>
              <Link href="#" c="#E8D5B7" size="sm">Contact</Link>
            </Stack>
            <Stack gap="xs">
              <Text size="xs" c="#E8D5B7" fw={600}>Legal</Text>
              <Link href="#" c="#E8D5B7" size="sm">Privacy</Link>
              <Link href="#" c="#E8D5B7" size="sm">Terms</Link>
            </Stack>
          </Group>
        </Box>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb navigation pattern and dark footer with three-column link layout. Sand-colored links on dark for the SemEnaWerk footer style.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};const F=["Variants","Sizes","WithIcons","InlineWithText","OnDarkBackground","UseCases"];export{d as InlineWithText,h as OnDarkBackground,c as Sizes,x as UseCases,a as Variants,l as WithIcons,F as __namedExportsOrder,D as default};
