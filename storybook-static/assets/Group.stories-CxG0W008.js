import{j as e}from"./iframe-DSgyGHZ6.js";import{G as a}from"./Group-IiqItL1-.js";import{B as c}from"./polymorphic-factory-d0jWGRqG.js";import{S as x}from"./Stack-Ca_rH8Tr.js";import{T as s}from"./Text-B4hK2jMs.js";import{P as i}from"./Paper-BOEY9P_j.js";import{I as g}from"./IconBriefcase-CHZrPvT5.js";import{B as m}from"./Badge-CMMD3edI.js";import{I as h}from"./IconCalendar-DGUwWOs_.js";import{B as u}from"./Button-SQek9IrY.js";import"./preload-helper-PPVm8Dsz.js";import"./Group-4XXa0sCO.js";import"./createReactComponent-BhLdaQkJ.js";import"./Loader-CqrB4hZB.js";import"./Transition-7WyLQzDL.js";import"./index-DQUcR2cE.js";import"./UnstyledButton-BRgJMr7w.js";const I={title:"Atoms/Group",component:a,parameters:{layout:"padded",docs:{description:{component:`
**When to use:**
Group arranges children horizontally with consistent spacing. Use for button rows, tag clouds, icon-label pairs, card headers, and action bars. Prefer Group over manual flexbox.

**Ethiopian Design Context:**
Group is the horizontal counterpart to Stack. Use \`justify="space-between"\` for card headers (title + status badge), \`gap="xs"\` for tag clouds, and \`wrap="wrap"\` for responsive tag/badge lists.

**Common Patterns:**
- Card headers: title on left, status badge on right (space-between)
- Action bars: metadata left, buttons right
- Tag clouds: wrapped badges with xs gap
- Icon-label pairs: icon + text with sm gap

**Accessibility:**
Group creates a natural horizontal reading flow. Wrapped items maintain tab order across rows.
        `}}},tags:["autodocs"],argTypes:{gap:{description:"Horizontal spacing between children (xs | sm | md | lg | xl or number)",control:"select",options:["xs","sm","md","lg","xl"]},justify:{description:"Horizontal distribution of children",control:"select",options:["flex-start","center","flex-end","space-between","space-around"]},wrap:{description:"Whether children wrap to next line when overflowing",control:"select",options:["wrap","nowrap"]},align:{description:"Vertical alignment of children",control:"select",options:["flex-start","center","flex-end","stretch"]}}},o=({label:r,color:t="#D4AF37"})=>e.jsx(i,{p:"sm",radius:"lg",style:{border:`2px solid ${t}`,backgroundColor:`${t}1a`},children:e.jsx(s,{size:"sm",fw:500,children:r})}),n={render:()=>e.jsx(c,{p:"xl",style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(x,{gap:"xl",children:[e.jsx(s,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Group Gap Sizes"}),["xs","sm","md","lg","xl"].map(r=>e.jsxs("div",{children:[e.jsxs(s,{size:"sm",fw:500,mb:"xs",children:['gap="',r,'"']}),e.jsxs(a,{gap:r,children:[e.jsx(o,{label:"Item 1"}),e.jsx(o,{label:"Item 2"}),e.jsx(o,{label:"Item 3"})]})]},r))]})}),parameters:{docs:{description:{story:"Five gap sizes. Use xs for tight badge groups, sm/md for button rows, lg/xl for spaced-out nav items."}}}},p={render:()=>e.jsx(c,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(x,{gap:"xl",children:[e.jsx(s,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Group Justify"}),["flex-start","center","flex-end","space-between","space-around"].map(r=>e.jsxs("div",{children:[e.jsxs(s,{size:"sm",fw:500,mb:"xs",children:['justify="',r,'"']}),e.jsx(i,{p:"sm",radius:"lg",withBorder:!0,children:e.jsxs(a,{justify:r,children:[e.jsx(o,{label:"A",color:"#D4AF37"}),e.jsx(o,{label:"B",color:"#C44536"}),e.jsx(o,{label:"C",color:"#2C5530"})]})})]},r))]})}),parameters:{docs:{description:{story:"Justify options for horizontal distribution. space-between is the most common for card headers and action bars."}}}},l={render:()=>e.jsx(c,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(x,{gap:"xl",children:[e.jsx(s,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Wrapping Behavior"}),e.jsxs("div",{children:[e.jsx(s,{size:"sm",fw:500,mb:"xs",children:'wrap="wrap" (default)'}),e.jsx(i,{p:"md",radius:"lg",withBorder:!0,style:{maxWidth:400},children:e.jsx(a,{wrap:"wrap",gap:"sm",children:Array.from({length:8}).map((r,t)=>e.jsx(o,{label:`Tag ${t+1}`},t))})})]}),e.jsxs("div",{children:[e.jsx(s,{size:"sm",fw:500,mb:"xs",children:'wrap="nowrap"'}),e.jsx(i,{p:"md",radius:"lg",withBorder:!0,style:{maxWidth:400,overflow:"hidden"},children:e.jsx(a,{wrap:"nowrap",gap:"sm",children:Array.from({length:8}).map((r,t)=>e.jsx(o,{label:`Tag ${t+1}`},t))})})]})]})}),parameters:{docs:{description:{story:"Wrap vs nowrap. Use wrap for tag clouds and badge lists that should flow to new lines. Use nowrap for fixed-width toolbars."}}}},d={render:()=>e.jsx(c,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(x,{gap:"xl",style:{maxWidth:600},children:[e.jsx(s,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Ethiopian SaaS Use Cases"}),e.jsxs(i,{p:"lg",radius:"lg",withBorder:!0,children:[e.jsx(s,{fw:500,mb:"sm",children:"Card Header Pattern"}),e.jsxs(a,{justify:"space-between",children:[e.jsxs(a,{gap:"sm",children:[e.jsx(g,{size:20,color:"#D4AF37"}),e.jsx(s,{fw:600,children:"E-Commerce Redesign"})]}),e.jsx(m,{color:"gold",variant:"light",children:"In Progress"})]})]}),e.jsxs(i,{p:"lg",radius:"lg",withBorder:!0,children:[e.jsx(s,{fw:500,mb:"sm",children:"Action Bar Pattern"}),e.jsxs(a,{justify:"space-between",children:[e.jsxs(a,{gap:"xs",children:[e.jsx(h,{size:16,color:"#6B6B6B"}),e.jsx(s,{size:"sm",c:"dimmed",children:"Due: March 15, 2026"})]}),e.jsxs(a,{gap:"sm",children:[e.jsx(u,{variant:"light",color:"gold",size:"xs",children:"Edit"}),e.jsx(u,{color:"gold",size:"xs",children:"View"})]})]})]}),e.jsxs(i,{p:"lg",radius:"lg",withBorder:!0,children:[e.jsx(s,{fw:500,mb:"sm",children:"Tag Cloud Pattern"}),e.jsx(a,{gap:"xs",wrap:"wrap",children:["Branding","UI/UX","Web Dev","Mobile","TeleBirr","Chapa","React","Figma"].map(r=>e.jsx(m,{variant:"outline",color:"gold",size:"lg",children:r},r))})]})]})}),parameters:{docs:{description:{story:"Group patterns: card header with space-between (icon+title | badge), action bar (metadata | buttons), and wrapped tag cloud with xs gap."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Group Gap Sizes</Text>

        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(gap => <div key={gap}>
            <Text size="sm" fw={500} mb="xs">gap=&quot;{gap}&quot;</Text>
            <Group gap={gap}>
              <DemoBox label="Item 1" />
              <DemoBox label="Item 2" />
              <DemoBox label="Item 3" />
            </Group>
          </div>)}
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Five gap sizes. Use xs for tight badge groups, sm/md for button rows, lg/xl for spaced-out nav items.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Group Justify</Text>

        {(['flex-start', 'center', 'flex-end', 'space-between', 'space-around'] as const).map(justify => <div key={justify}>
            <Text size="sm" fw={500} mb="xs">justify=&quot;{justify}&quot;</Text>
            <Paper p="sm" radius="lg" withBorder>
              <Group justify={justify}>
                <DemoBox label="A" color="#D4AF37" />
                <DemoBox label="B" color="#C44536" />
                <DemoBox label="C" color="#2C5530" />
              </Group>
            </Paper>
          </div>)}
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Justify options for horizontal distribution. space-between is the most common for card headers and action bars.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Wrapping Behavior</Text>

        <div>
          <Text size="sm" fw={500} mb="xs">wrap=&quot;wrap&quot; (default)</Text>
          <Paper p="md" radius="lg" withBorder style={{
          maxWidth: 400
        }}>
            <Group wrap="wrap" gap="sm">
              {Array.from({
              length: 8
            }).map((_, i) => <DemoBox key={i} label={\`Tag \${i + 1}\`} />)}
            </Group>
          </Paper>
        </div>

        <div>
          <Text size="sm" fw={500} mb="xs">wrap=&quot;nowrap&quot;</Text>
          <Paper p="md" radius="lg" withBorder style={{
          maxWidth: 400,
          overflow: 'hidden'
        }}>
            <Group wrap="nowrap" gap="sm">
              {Array.from({
              length: 8
            }).map((_, i) => <DemoBox key={i} label={\`Tag \${i + 1}\`} />)}
            </Group>
          </Paper>
        </div>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Wrap vs nowrap. Use wrap for tag clouds and badge lists that should flow to new lines. Use nowrap for fixed-width toolbars.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="xl" style={{
      maxWidth: 600
    }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Ethiopian SaaS Use Cases</Text>

        <Paper p="lg" radius="lg" withBorder>
          <Text fw={500} mb="sm">Card Header Pattern</Text>
          <Group justify="space-between">
            <Group gap="sm">
              <IconBriefcase size={20} color="#D4AF37" />
              <Text fw={600}>E-Commerce Redesign</Text>
            </Group>
            <MantineBadge color="gold" variant="light">In Progress</MantineBadge>
          </Group>
        </Paper>

        <Paper p="lg" radius="lg" withBorder>
          <Text fw={500} mb="sm">Action Bar Pattern</Text>
          <Group justify="space-between">
            <Group gap="xs">
              <IconCalendar size={16} color="#6B6B6B" />
              <Text size="sm" c="dimmed">Due: March 15, 2026</Text>
            </Group>
            <Group gap="sm">
              <MantineButton variant="light" color="gold" size="xs">Edit</MantineButton>
              <MantineButton color="gold" size="xs">View</MantineButton>
            </Group>
          </Group>
        </Paper>

        <Paper p="lg" radius="lg" withBorder>
          <Text fw={500} mb="sm">Tag Cloud Pattern</Text>
          <Group gap="xs" wrap="wrap">
            {['Branding', 'UI/UX', 'Web Dev', 'Mobile', 'TeleBirr', 'Chapa', 'React', 'Figma'].map(tag => <MantineBadge key={tag} variant="outline" color="gold" size="lg">{tag}</MantineBadge>)}
          </Group>
        </Paper>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Group patterns: card header with space-between (icon+title | badge), action bar (metadata | buttons), and wrapped tag cloud with xs gap.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};const W=["GapSizes","Justify","Wrapping","UseCases"];export{n as GapSizes,p as Justify,d as UseCases,l as Wrapping,W as __namedExportsOrder,I as default};
