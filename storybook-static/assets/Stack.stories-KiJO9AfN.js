import{j as e}from"./iframe-DSgyGHZ6.js";import{S as t}from"./Stack-DP45xf34.js";import{B as n}from"./polymorphic-factory-d0jWGRqG.js";import{T as s}from"./Text-B4hK2jMs.js";import{P as r}from"./Paper-BOEY9P_j.js";import{T as p}from"./Title-BBmoHL22.js";import"./preload-helper-PPVm8Dsz.js";import"./Stack-Ca_rH8Tr.js";const j={title:"Atoms/Stack",component:t,parameters:{layout:"padded",docs:{description:{component:`
**When to use:**
Stack arranges children vertically with consistent spacing. Use for form layouts, card content, notification feeds, and any vertical list of elements. Prefer Stack over manual margin/padding.

**Ethiopian Design Context:**
Stack is the primary vertical layout tool. Use \`gap="sm"\` for form fields, \`gap="xs"\` for compact lists (notification feeds, line items), and \`gap="xl"\` for major page sections.

**Common Patterns:**
- Form layouts with labeled inputs stacked vertically
- Notification/activity feeds with compact spacing
- Card content organization (title → description → metadata)
- Page section separators with large gaps

**Accessibility:**
Stack produces semantic HTML structure. Screen readers process content in natural reading order.
        `}}},tags:["autodocs"],argTypes:{gap:{description:"Vertical spacing between children (xs | sm | md | lg | xl or number)",control:"select",options:["xs","sm","md","lg","xl"]},align:{description:"Horizontal alignment of children",control:"select",options:["flex-start","center","flex-end","stretch"]}}},l=({label:i,color:c="#D4AF37"})=>e.jsx(r,{p:"md",radius:"lg",style:{border:`2px solid ${c}`,backgroundColor:`${c}1a`},children:e.jsx(s,{size:"sm",fw:500,children:i})}),a={render:()=>e.jsx(n,{p:"xl",style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(t,{gap:"xl",children:[e.jsx(s,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Stack Gap Sizes"}),["xs","sm","md","lg","xl"].map(i=>e.jsxs("div",{children:[e.jsxs(s,{size:"sm",fw:500,mb:"xs",children:['gap="',i,'"']}),e.jsxs(t,{gap:i,style:{maxWidth:300},children:[e.jsx(l,{label:"Item 1"}),e.jsx(l,{label:"Item 2"}),e.jsx(l,{label:"Item 3"})]})]},i))]})}),parameters:{docs:{description:{story:"Five gap sizes from xs (compact lists) to xl (page sections). Choose based on content density and visual hierarchy."}}}},o={render:()=>e.jsx(n,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(t,{gap:"xl",children:[e.jsx(s,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Stack Alignment"}),e.jsxs("div",{children:[e.jsx(s,{size:"sm",fw:500,mb:"xs",children:'align="flex-start" (default)'}),e.jsxs(t,{align:"flex-start",gap:"xs",children:[e.jsx(r,{p:"sm",radius:"lg",style:{border:"2px solid #D4AF37"},children:e.jsx(s,{size:"sm",children:"Short"})}),e.jsx(r,{p:"sm",radius:"lg",style:{border:"2px solid #D4AF37"},children:e.jsx(s,{size:"sm",children:"Medium content"})}),e.jsx(r,{p:"sm",radius:"lg",style:{border:"2px solid #D4AF37"},children:e.jsx(s,{size:"sm",children:"Longer content here"})})]})]}),e.jsxs("div",{children:[e.jsx(s,{size:"sm",fw:500,mb:"xs",children:'align="center"'}),e.jsxs(t,{align:"center",gap:"xs",children:[e.jsx(r,{p:"sm",radius:"lg",style:{border:"2px solid #C44536"},children:e.jsx(s,{size:"sm",children:"Short"})}),e.jsx(r,{p:"sm",radius:"lg",style:{border:"2px solid #C44536"},children:e.jsx(s,{size:"sm",children:"Medium content"})}),e.jsx(r,{p:"sm",radius:"lg",style:{border:"2px solid #C44536"},children:e.jsx(s,{size:"sm",children:"Longer content here"})})]})]}),e.jsxs("div",{children:[e.jsx(s,{size:"sm",fw:500,mb:"xs",children:'align="stretch"'}),e.jsxs(t,{align:"stretch",gap:"xs",style:{maxWidth:300},children:[e.jsx(r,{p:"sm",radius:"lg",style:{border:"2px solid #2C5530"},children:e.jsx(s,{size:"sm",children:"Short"})}),e.jsx(r,{p:"sm",radius:"lg",style:{border:"2px solid #2C5530"},children:e.jsx(s,{size:"sm",children:"Medium content"})}),e.jsx(r,{p:"sm",radius:"lg",style:{border:"2px solid #2C5530"},children:e.jsx(s,{size:"sm",children:"Longer content here"})})]})]})]})}),parameters:{docs:{description:{story:"Three alignment options. Use flex-start for forms, center for hero content, stretch for full-width items in constrained containers."}}}},d={render:()=>e.jsx(n,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(t,{gap:"xl",style:{maxWidth:400},children:[e.jsx(s,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Ethiopian SaaS Use Cases"}),e.jsxs(r,{p:"lg",radius:"lg",withBorder:!0,children:[e.jsx(p,{order:4,mb:"md",children:"Project Form Layout"}),e.jsxs(t,{gap:"sm",children:[e.jsx(r,{p:"sm",radius:"md",style:{backgroundColor:"#FAF8F3"},children:e.jsx(s,{size:"xs",c:"dimmed",children:"Project Name Input"})}),e.jsx(r,{p:"sm",radius:"md",style:{backgroundColor:"#FAF8F3"},children:e.jsx(s,{size:"xs",c:"dimmed",children:"Client Select"})}),e.jsx(r,{p:"sm",radius:"md",style:{backgroundColor:"#FAF8F3"},children:e.jsx(s,{size:"xs",c:"dimmed",children:"Description TextArea"})}),e.jsx(r,{p:"sm",radius:"md",style:{backgroundColor:"#FAF8F3"},children:e.jsx(s,{size:"xs",c:"dimmed",children:"Budget Slider"})}),e.jsx(r,{p:"sm",radius:"md",style:{backgroundColor:"#D4AF37",color:"white"},children:e.jsx(s,{size:"xs",c:"white",ta:"center",fw:500,children:"Submit Button"})})]})]}),e.jsxs(r,{p:"lg",radius:"lg",withBorder:!0,children:[e.jsx(p,{order:4,mb:"md",children:"Notification Feed"}),e.jsx(t,{gap:"xs",children:["Payment received: 25,000 ETB","New project assigned","Invoice overdue: #1042"].map(i=>e.jsx(r,{p:"sm",radius:"md",style:{borderLeft:"3px solid #D4AF37",backgroundColor:"#FAF8F3"},children:e.jsx(s,{size:"sm",children:i})},i))})]})]})}),parameters:{docs:{description:{story:"Stack patterns for Ethiopian SaaS: form layout with sm gap for field spacing, and compact notification feed with xs gap and gold left-border accent."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Stack Gap Sizes</Text>

        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(gap => <div key={gap}>
            <Text size="sm" fw={500} mb="xs">gap=&quot;{gap}&quot;</Text>
            <Stack gap={gap} style={{
          maxWidth: 300
        }}>
              <DemoBox label="Item 1" />
              <DemoBox label="Item 2" />
              <DemoBox label="Item 3" />
            </Stack>
          </div>)}
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Five gap sizes from xs (compact lists) to xl (page sections). Choose based on content density and visual hierarchy.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Stack Alignment</Text>

        <div>
          <Text size="sm" fw={500} mb="xs">align=&quot;flex-start&quot; (default)</Text>
          <Stack align="flex-start" gap="xs">
            <Paper p="sm" radius="lg" style={{
            border: '2px solid #D4AF37'
          }}><Text size="sm">Short</Text></Paper>
            <Paper p="sm" radius="lg" style={{
            border: '2px solid #D4AF37'
          }}><Text size="sm">Medium content</Text></Paper>
            <Paper p="sm" radius="lg" style={{
            border: '2px solid #D4AF37'
          }}><Text size="sm">Longer content here</Text></Paper>
          </Stack>
        </div>

        <div>
          <Text size="sm" fw={500} mb="xs">align=&quot;center&quot;</Text>
          <Stack align="center" gap="xs">
            <Paper p="sm" radius="lg" style={{
            border: '2px solid #C44536'
          }}><Text size="sm">Short</Text></Paper>
            <Paper p="sm" radius="lg" style={{
            border: '2px solid #C44536'
          }}><Text size="sm">Medium content</Text></Paper>
            <Paper p="sm" radius="lg" style={{
            border: '2px solid #C44536'
          }}><Text size="sm">Longer content here</Text></Paper>
          </Stack>
        </div>

        <div>
          <Text size="sm" fw={500} mb="xs">align=&quot;stretch&quot;</Text>
          <Stack align="stretch" gap="xs" style={{
          maxWidth: 300
        }}>
            <Paper p="sm" radius="lg" style={{
            border: '2px solid #2C5530'
          }}><Text size="sm">Short</Text></Paper>
            <Paper p="sm" radius="lg" style={{
            border: '2px solid #2C5530'
          }}><Text size="sm">Medium content</Text></Paper>
            <Paper p="sm" radius="lg" style={{
            border: '2px solid #2C5530'
          }}><Text size="sm">Longer content here</Text></Paper>
          </Stack>
        </div>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Three alignment options. Use flex-start for forms, center for hero content, stretch for full-width items in constrained containers.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="xl" style={{
      maxWidth: 400
    }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Ethiopian SaaS Use Cases</Text>

        <Paper p="lg" radius="lg" withBorder>
          <Title order={4} mb="md">Project Form Layout</Title>
          <Stack gap="sm">
            <Paper p="sm" radius="md" style={{
            backgroundColor: '#FAF8F3'
          }}>
              <Text size="xs" c="dimmed">Project Name Input</Text>
            </Paper>
            <Paper p="sm" radius="md" style={{
            backgroundColor: '#FAF8F3'
          }}>
              <Text size="xs" c="dimmed">Client Select</Text>
            </Paper>
            <Paper p="sm" radius="md" style={{
            backgroundColor: '#FAF8F3'
          }}>
              <Text size="xs" c="dimmed">Description TextArea</Text>
            </Paper>
            <Paper p="sm" radius="md" style={{
            backgroundColor: '#FAF8F3'
          }}>
              <Text size="xs" c="dimmed">Budget Slider</Text>
            </Paper>
            <Paper p="sm" radius="md" style={{
            backgroundColor: '#D4AF37',
            color: 'white'
          }}>
              <Text size="xs" c="white" ta="center" fw={500}>Submit Button</Text>
            </Paper>
          </Stack>
        </Paper>

        <Paper p="lg" radius="lg" withBorder>
          <Title order={4} mb="md">Notification Feed</Title>
          <Stack gap="xs">
            {['Payment received: 25,000 ETB', 'New project assigned', 'Invoice overdue: #1042'].map(msg => <Paper key={msg} p="sm" radius="md" style={{
            borderLeft: '3px solid #D4AF37',
            backgroundColor: '#FAF8F3'
          }}>
                <Text size="sm">{msg}</Text>
              </Paper>)}
          </Stack>
        </Paper>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Stack patterns for Ethiopian SaaS: form layout with sm gap for field spacing, and compact notification feed with xs gap and gold left-border accent.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};const b=["GapSizes","Alignment","UseCases"];export{o as Alignment,a as GapSizes,d as UseCases,b as __namedExportsOrder,j as default};
