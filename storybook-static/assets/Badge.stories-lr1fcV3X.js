import{j as e}from"./iframe-B9BJqu6d.js";import{B as r}from"./Badge-sA5cXLIZ.js";import{B as d}from"./polymorphic-factory-B38yjnoz.js";import{S as n}from"./Stack-C9852h35.js";import{T as o}from"./Text-CSoEI4MQ.js";import{G as t}from"./Group-BevGUIxM.js";import{I as g,a as p}from"./IconCheck-BArXFSiY.js";import{c}from"./createReactComponent-C2aEuSvQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Badge--6N5_VeE.js";const h=[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 7v5l3 3",key:"svg-1"}]],x=c("outline","clock","Clock",h);const m=[["path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245",key:"svg-0"}]],u=c("outline","star","Star",m),T={title:"Atoms/Badge",component:r,parameters:{layout:"padded",docs:{description:{component:`
**When to use:**
Badges highlight status, counts, or labels. Use for notification dots, feature tags, or status indicators. Keep text short — one or two words maximum.

**Ethiopian Design Context:**
Default gold variant (#D4AF37) matches the brand accent. Use \`variant="dot"\` with forest green for "Available" status, rust for "Urgent" flags. The light variant works well for service category tags.

**Common Patterns:**
- Project status indicators (Discovery, In Progress, Review, Completed)
- Service tags (Branding, Web Dev, Mobile App, UI/UX)
- Payment status (Paid, Pending, Overdue, Partial)
- Notification counts and feature labels

**Accessibility:**
Consider using \`aria-label\` for icon-only badges to provide context for screen readers. Color alone should not convey meaning — pair with text or icons.
        `}}},tags:["autodocs"],argTypes:{color:{description:"Badge color from theme palette (defaults to gold)",control:"select",options:["gold","rust","forest","earth","gray"]},variant:{description:"Visual style — filled (default), light, outline, or dot",control:"select",options:["filled","light","outline","dot"]},size:{description:"Badge size (xs for subtle tags, lg for prominent labels)",control:"select",options:["xs","sm","md","lg","xl"]},children:{description:"Badge text content",control:"text"}}},a={render:()=>e.jsx(d,{p:"xl",style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(n,{gap:"xl",children:[e.jsx(o,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Badge Variants"}),e.jsxs("div",{children:[e.jsx(o,{fw:500,mb:"sm",children:"Filled"}),e.jsxs(t,{gap:"sm",wrap:"wrap",children:[e.jsx(r,{color:"gold",children:"Gold"}),e.jsx(r,{color:"rust",children:"Rust"}),e.jsx(r,{color:"forest",children:"Forest"}),e.jsx(r,{color:"earth",children:"Earth"})]})]}),e.jsxs("div",{children:[e.jsx(o,{fw:500,mb:"sm",children:"Light"}),e.jsxs(t,{gap:"sm",wrap:"wrap",children:[e.jsx(r,{variant:"light",color:"gold",children:"Gold"}),e.jsx(r,{variant:"light",color:"rust",children:"Rust"}),e.jsx(r,{variant:"light",color:"forest",children:"Forest"}),e.jsx(r,{variant:"light",color:"earth",children:"Earth"})]})]}),e.jsxs("div",{children:[e.jsx(o,{fw:500,mb:"sm",children:"Outline"}),e.jsxs(t,{gap:"sm",wrap:"wrap",children:[e.jsx(r,{variant:"outline",color:"gold",children:"Gold"}),e.jsx(r,{variant:"outline",color:"rust",children:"Rust"}),e.jsx(r,{variant:"outline",color:"forest",children:"Forest"}),e.jsx(r,{variant:"outline",color:"earth",children:"Earth"})]})]}),e.jsxs("div",{children:[e.jsx(o,{fw:500,mb:"sm",children:"Dot"}),e.jsxs(t,{gap:"sm",wrap:"wrap",children:[e.jsx(r,{variant:"dot",color:"gold",children:"Active"}),e.jsx(r,{variant:"dot",color:"rust",children:"Urgent"}),e.jsx(r,{variant:"dot",color:"forest",children:"Available"}),e.jsx(r,{variant:"dot",color:"earth",children:"Pending"})]})]})]})}),parameters:{docs:{description:{story:"All four badge variants across the brand palette. Filled for strong emphasis, light for categories, outline for subtle tags, dot for status indicators."}}}},s={render:()=>e.jsx(d,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(n,{gap:"md",children:[e.jsx(o,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Badge Sizes"}),e.jsxs(t,{gap:"sm",align:"center",wrap:"wrap",children:[e.jsx(r,{size:"xs",children:"XS"}),e.jsx(r,{size:"sm",children:"SM"}),e.jsx(r,{size:"md",children:"MD"}),e.jsx(r,{size:"lg",children:"LG"}),e.jsx(r,{size:"xl",children:"XL"})]})]})}),parameters:{docs:{description:{story:"Five sizes from xs to xl. Use xs/sm for inline tags within cards, md for standard labels, lg/xl for featured badges."}}}},i={render:()=>e.jsx(d,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(n,{gap:"md",children:[e.jsx(o,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"With Icons"}),e.jsxs(t,{gap:"sm",wrap:"wrap",children:[e.jsx(r,{leftSection:e.jsx(g,{size:12}),color:"forest",children:"Completed"}),e.jsx(r,{leftSection:e.jsx(x,{size:12}),color:"gold",children:"In Progress"}),e.jsx(r,{leftSection:e.jsx(p,{size:12}),color:"rust",children:"Overdue"}),e.jsx(r,{leftSection:e.jsx(u,{size:12}),color:"earth",children:"Featured"})]})]})}),parameters:{docs:{description:{story:"Icon + text badges for richer status communication. Use leftSection with small (12px) Tabler icons."}}}},l={render:()=>e.jsx(d,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(n,{gap:"xl",children:[e.jsx(o,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Ethiopian SaaS Use Cases"}),e.jsxs("div",{children:[e.jsx(o,{fw:500,mb:"sm",children:"Project Status"}),e.jsxs(t,{gap:"sm",wrap:"wrap",children:[e.jsx(r,{variant:"light",color:"gold",children:"Discovery"}),e.jsx(r,{variant:"light",color:"earth",children:"In Progress"}),e.jsx(r,{variant:"light",color:"rust",children:"Review"}),e.jsx(r,{variant:"light",color:"forest",children:"Completed"}),e.jsx(r,{variant:"dot",color:"gold",children:"On Hold"})]})]}),e.jsxs("div",{children:[e.jsx(o,{fw:500,mb:"sm",children:"Service Tags"}),e.jsxs(t,{gap:"sm",wrap:"wrap",children:[e.jsx(r,{variant:"outline",color:"gold",children:"Branding"}),e.jsx(r,{variant:"outline",color:"rust",children:"Web Dev"}),e.jsx(r,{variant:"outline",color:"forest",children:"Mobile App"}),e.jsx(r,{variant:"outline",color:"earth",children:"UI/UX"})]})]}),e.jsxs("div",{children:[e.jsx(o,{fw:500,mb:"sm",children:"Payment Status"}),e.jsxs(t,{gap:"sm",wrap:"wrap",children:[e.jsx(r,{color:"forest",children:"Paid"}),e.jsx(r,{color:"gold",children:"Pending"}),e.jsx(r,{color:"rust",children:"Overdue"}),e.jsx(r,{variant:"light",color:"earth",children:"Partial"})]})]})]})}),parameters:{docs:{description:{story:"Real-world badge patterns: project workflow statuses, service category tags, and payment tracking with semantic colors."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Badge Variants</Text>

        <div>
          <Text fw={500} mb="sm">Filled</Text>
          <Group gap="sm" wrap="wrap">
            <Badge color="gold">Gold</Badge>
            <Badge color="rust">Rust</Badge>
            <Badge color="forest">Forest</Badge>
            <Badge color="earth">Earth</Badge>
          </Group>
        </div>

        <div>
          <Text fw={500} mb="sm">Light</Text>
          <Group gap="sm" wrap="wrap">
            <Badge variant="light" color="gold">Gold</Badge>
            <Badge variant="light" color="rust">Rust</Badge>
            <Badge variant="light" color="forest">Forest</Badge>
            <Badge variant="light" color="earth">Earth</Badge>
          </Group>
        </div>

        <div>
          <Text fw={500} mb="sm">Outline</Text>
          <Group gap="sm" wrap="wrap">
            <Badge variant="outline" color="gold">Gold</Badge>
            <Badge variant="outline" color="rust">Rust</Badge>
            <Badge variant="outline" color="forest">Forest</Badge>
            <Badge variant="outline" color="earth">Earth</Badge>
          </Group>
        </div>

        <div>
          <Text fw={500} mb="sm">Dot</Text>
          <Group gap="sm" wrap="wrap">
            <Badge variant="dot" color="gold">Active</Badge>
            <Badge variant="dot" color="rust">Urgent</Badge>
            <Badge variant="dot" color="forest">Available</Badge>
            <Badge variant="dot" color="earth">Pending</Badge>
          </Group>
        </div>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'All four badge variants across the brand palette. Filled for strong emphasis, light for categories, outline for subtle tags, dot for status indicators.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="md">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Badge Sizes</Text>
        <Group gap="sm" align="center" wrap="wrap">
          <Badge size="xs">XS</Badge>
          <Badge size="sm">SM</Badge>
          <Badge size="md">MD</Badge>
          <Badge size="lg">LG</Badge>
          <Badge size="xl">XL</Badge>
        </Group>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Five sizes from xs to xl. Use xs/sm for inline tags within cards, md for standard labels, lg/xl for featured badges.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="md">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">With Icons</Text>
        <Group gap="sm" wrap="wrap">
          <Badge leftSection={<IconCheck size={12} />} color="forest">Completed</Badge>
          <Badge leftSection={<IconClock size={12} />} color="gold">In Progress</Badge>
          <Badge leftSection={<IconAlertTriangle size={12} />} color="rust">Overdue</Badge>
          <Badge leftSection={<IconStar size={12} />} color="earth">Featured</Badge>
        </Group>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Icon + text badges for richer status communication. Use leftSection with small (12px) Tabler icons.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Ethiopian SaaS Use Cases</Text>

        <div>
          <Text fw={500} mb="sm">Project Status</Text>
          <Group gap="sm" wrap="wrap">
            <Badge variant="light" color="gold">Discovery</Badge>
            <Badge variant="light" color="earth">In Progress</Badge>
            <Badge variant="light" color="rust">Review</Badge>
            <Badge variant="light" color="forest">Completed</Badge>
            <Badge variant="dot" color="gold">On Hold</Badge>
          </Group>
        </div>

        <div>
          <Text fw={500} mb="sm">Service Tags</Text>
          <Group gap="sm" wrap="wrap">
            <Badge variant="outline" color="gold">Branding</Badge>
            <Badge variant="outline" color="rust">Web Dev</Badge>
            <Badge variant="outline" color="forest">Mobile App</Badge>
            <Badge variant="outline" color="earth">UI/UX</Badge>
          </Group>
        </div>

        <div>
          <Text fw={500} mb="sm">Payment Status</Text>
          <Group gap="sm" wrap="wrap">
            <Badge color="forest">Paid</Badge>
            <Badge color="gold">Pending</Badge>
            <Badge color="rust">Overdue</Badge>
            <Badge variant="light" color="earth">Partial</Badge>
          </Group>
        </div>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Real-world badge patterns: project workflow statuses, service category tags, and payment tracking with semantic colors.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};const k=["Variants","Sizes","WithIcons","UseCases"];export{s as Sizes,l as UseCases,a as Variants,i as WithIcons,k as __namedExportsOrder,T as default};
