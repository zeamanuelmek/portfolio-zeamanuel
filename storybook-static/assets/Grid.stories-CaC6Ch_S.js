import{j as e}from"./iframe-DSgyGHZ6.js";import{G as s}from"./Grid-BwhTZGYD.js";import{B as m}from"./polymorphic-factory-d0jWGRqG.js";import{S as x}from"./Stack-Ca_rH8Tr.js";import{T as r}from"./Text-B4hK2jMs.js";import{P as t}from"./Paper-BOEY9P_j.js";import{T as u}from"./Title-BBmoHL22.js";import"./preload-helper-PPVm8Dsz.js";import"./create-safe-context-CboTp2eA.js";const w={title:"Atoms/Grid",component:s,parameters:{layout:"padded",docs:{description:{component:`
**When to use:**
Grid creates responsive column layouts using a 12-column system. Use for dashboard stat cards, project card grids, sidebar + content layouts, and any multi-column arrangement that needs to collapse on mobile.

**Ethiopian Design Context:**
Grid with responsive spans (\`{ base: 12, sm: 6, md: 4 }\`) ensures cards stack vertically on mobile — critical for Ethiopian users primarily on mobile devices. Dashboard stats use 4 equal columns on desktop, 2 on tablet, stacked on mobile.

**Common Patterns:**
- Dashboard stats: 4 columns (3 span each), 2 on tablet, stacked on mobile
- Project card grid: 3 columns, responsive to 2 and 1
- Sidebar layout: 3+9 or 4+8 with full-width mobile fallback
- Form two-column layouts

**Accessibility:**
Grid produces semantic HTML. Content reflows naturally for screen readers. Use responsive spans to ensure readable content width at all breakpoints.
        `}}},tags:["autodocs"],argTypes:{gutter:{description:"Gap between grid columns (xs | sm | md | lg | xl)",control:"select",options:["xs","sm","md","lg","xl"]}}},o=({label:l,span:a,color:i="#D4AF37"})=>e.jsxs(t,{p:"md",radius:"lg",style:{backgroundColor:`${i}1a`,border:`2px solid ${i}`,textAlign:"center"},children:[e.jsx(r,{size:"sm",fw:600,children:l}),e.jsxs(r,{size:"xs",c:"dimmed",children:["span=",a]})]}),d={render:()=>e.jsx(m,{p:"xl",style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(x,{gap:"xl",children:[e.jsx(r,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Basic Grid (12 columns)"}),e.jsxs("div",{children:[e.jsx(r,{size:"sm",fw:500,mb:"xs",children:"Equal columns (4+4+4)"}),e.jsxs(s,{children:[e.jsx(s.Col,{span:4,children:e.jsx(o,{label:"Col 1",span:4})}),e.jsx(s.Col,{span:4,children:e.jsx(o,{label:"Col 2",span:4,color:"#C44536"})}),e.jsx(s.Col,{span:4,children:e.jsx(o,{label:"Col 3",span:4,color:"#2C5530"})})]})]}),e.jsxs("div",{children:[e.jsx(r,{size:"sm",fw:500,mb:"xs",children:"Two columns (6+6)"}),e.jsxs(s,{children:[e.jsx(s.Col,{span:6,children:e.jsx(o,{label:"Left",span:6})}),e.jsx(s.Col,{span:6,children:e.jsx(o,{label:"Right",span:6,color:"#C44536"})})]})]}),e.jsxs("div",{children:[e.jsx(r,{size:"sm",fw:500,mb:"xs",children:"Sidebar layout (3+9)"}),e.jsxs(s,{children:[e.jsx(s.Col,{span:3,children:e.jsx(o,{label:"Sidebar",span:3,color:"#8B4513"})}),e.jsx(s.Col,{span:9,children:e.jsx(o,{label:"Main Content",span:9})})]})]}),e.jsxs("div",{children:[e.jsx(r,{size:"sm",fw:500,mb:"xs",children:"Asymmetric (2+7+3)"}),e.jsxs(s,{children:[e.jsx(s.Col,{span:2,children:e.jsx(o,{label:"Nav",span:2,color:"#2C5530"})}),e.jsx(s.Col,{span:7,children:e.jsx(o,{label:"Content",span:7})}),e.jsx(s.Col,{span:3,children:e.jsx(o,{label:"Panel",span:3,color:"#C44536"})})]})]})]})}),parameters:{docs:{description:{story:"Static 12-column grid layouts: equal thirds, halves, sidebar + content, and three-panel asymmetric."}}}},n={render:()=>e.jsx(m,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(x,{gap:"xl",children:[e.jsx(r,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Responsive Grid"}),e.jsx(r,{size:"sm",c:"dimmed",children:"Resize your browser to see breakpoint changes."}),e.jsxs("div",{children:[e.jsx(r,{size:"sm",fw:500,mb:"xs",children:"Responsive cards (12 → 6 → 4)"}),e.jsx(s,{children:[1,2,3,4,5,6].map(l=>e.jsx(s.Col,{span:{base:12,sm:6,md:4},children:e.jsx(o,{label:`Card ${l}`,span:4,color:["#D4AF37","#C44536","#2C5530","#8B4513","#D4AF37","#C44536"][l-1]})},l))})]}),e.jsxs("div",{children:[e.jsx(r,{size:"sm",fw:500,mb:"xs",children:"Responsive sidebar (stacks on mobile)"}),e.jsxs(s,{children:[e.jsx(s.Col,{span:{base:12,md:4},children:e.jsxs(t,{p:"lg",radius:"lg",style:{backgroundColor:"#1A1A1A",minHeight:120},children:[e.jsx(r,{c:"#D4AF37",fw:600,children:"Sidebar"}),e.jsx(r,{size:"xs",c:"#E8D5B7",children:"Full width on mobile, 4-col on desktop"})]})}),e.jsx(s.Col,{span:{base:12,md:8},children:e.jsxs(t,{p:"lg",radius:"lg",withBorder:!0,style:{minHeight:120},children:[e.jsx(r,{fw:600,children:"Main Content"}),e.jsx(r,{size:"xs",c:"dimmed",children:"Full width on mobile, 8-col on desktop"})]})})]})]})]})}),parameters:{docs:{description:{story:"Responsive spans collapse from multi-column to single-column on mobile. Critical for Ethiopian mobile-first users."}}}},c={render:()=>e.jsx(m,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(x,{gap:"xl",children:[e.jsx(r,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Gutter (Gap) Sizes"}),["xs","sm","md","lg","xl"].map(l=>e.jsxs("div",{children:[e.jsxs(r,{size:"sm",fw:500,mb:"xs",children:['gutter="',l,'"']}),e.jsxs(s,{gutter:l,children:[e.jsx(s.Col,{span:4,children:e.jsx(o,{label:"1",span:4})}),e.jsx(s.Col,{span:4,children:e.jsx(o,{label:"2",span:4})}),e.jsx(s.Col,{span:4,children:e.jsx(o,{label:"3",span:4})})]})]},l))]})}),parameters:{docs:{description:{story:"Gutter controls the gap between columns. Use md (default) for most layouts, xs for tight data grids, lg/xl for spacious card grids."}}}},p={render:()=>e.jsx(m,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(x,{gap:"xl",children:[e.jsx(r,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Ethiopian SaaS Use Cases"}),e.jsxs("div",{children:[e.jsx(r,{fw:500,mb:"sm",children:"Dashboard Stats Grid"}),e.jsx(s,{children:[{label:"Active Projects",value:"12",color:"#D4AF37"},{label:"Total Revenue",value:"485K ETB",color:"#2C5530"},{label:"Pending Invoices",value:"7",color:"#C44536"},{label:"Team Members",value:"8",color:"#8B4513"}].map(({label:l,value:a,color:i})=>e.jsx(s.Col,{span:{base:6,md:3},children:e.jsxs(t,{p:"lg",radius:"lg",withBorder:!0,style:{borderTop:`3px solid ${i}`},children:[e.jsx(r,{size:"xs",c:"dimmed",tt:"uppercase",children:l}),e.jsx(u,{order:3,mt:"xs",style:{color:i},children:a})]})},l))})]}),e.jsxs("div",{children:[e.jsx(r,{fw:500,mb:"sm",children:"Project Cards Grid"}),e.jsx(s,{children:[{name:"Restaurant Branding",status:"Active",budget:"25K ETB"},{name:"E-Commerce App",status:"Review",budget:"120K ETB"},{name:"Hotel Website",status:"Completed",budget:"45K ETB"}].map(({name:l,status:a,budget:i})=>e.jsx(s.Col,{span:{base:12,sm:6,md:4},children:e.jsxs(t,{p:"lg",radius:"lg",withBorder:!0,children:[e.jsx(r,{fw:600,mb:"xs",children:l}),e.jsxs(r,{size:"xs",c:"dimmed",children:[a," | ",i]})]})},l))})]})]})}),parameters:{docs:{description:{story:"Dashboard stats with color-coded top borders and ETB values. Project cards in a responsive 3-column grid with status and budget."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Basic Grid (12 columns)</Text>

        <div>
          <Text size="sm" fw={500} mb="xs">Equal columns (4+4+4)</Text>
          <Grid>
            <Grid.Col span={4}><GridCell label="Col 1" span={4} /></Grid.Col>
            <Grid.Col span={4}><GridCell label="Col 2" span={4} color="#C44536" /></Grid.Col>
            <Grid.Col span={4}><GridCell label="Col 3" span={4} color="#2C5530" /></Grid.Col>
          </Grid>
        </div>

        <div>
          <Text size="sm" fw={500} mb="xs">Two columns (6+6)</Text>
          <Grid>
            <Grid.Col span={6}><GridCell label="Left" span={6} /></Grid.Col>
            <Grid.Col span={6}><GridCell label="Right" span={6} color="#C44536" /></Grid.Col>
          </Grid>
        </div>

        <div>
          <Text size="sm" fw={500} mb="xs">Sidebar layout (3+9)</Text>
          <Grid>
            <Grid.Col span={3}><GridCell label="Sidebar" span={3} color="#8B4513" /></Grid.Col>
            <Grid.Col span={9}><GridCell label="Main Content" span={9} /></Grid.Col>
          </Grid>
        </div>

        <div>
          <Text size="sm" fw={500} mb="xs">Asymmetric (2+7+3)</Text>
          <Grid>
            <Grid.Col span={2}><GridCell label="Nav" span={2} color="#2C5530" /></Grid.Col>
            <Grid.Col span={7}><GridCell label="Content" span={7} /></Grid.Col>
            <Grid.Col span={3}><GridCell label="Panel" span={3} color="#C44536" /></Grid.Col>
          </Grid>
        </div>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Static 12-column grid layouts: equal thirds, halves, sidebar + content, and three-panel asymmetric.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Responsive Grid</Text>
        <Text size="sm" c="dimmed">Resize your browser to see breakpoint changes.</Text>

        <div>
          <Text size="sm" fw={500} mb="xs">Responsive cards (12 → 6 → 4)</Text>
          <Grid>
            {[1, 2, 3, 4, 5, 6].map(i => <Grid.Col key={i} span={{
            base: 12,
            sm: 6,
            md: 4
          }}>
                <GridCell label={\`Card \${i}\`} span={4} color={['#D4AF37', '#C44536', '#2C5530', '#8B4513', '#D4AF37', '#C44536'][i - 1]} />
              </Grid.Col>)}
          </Grid>
        </div>

        <div>
          <Text size="sm" fw={500} mb="xs">Responsive sidebar (stacks on mobile)</Text>
          <Grid>
            <Grid.Col span={{
            base: 12,
            md: 4
          }}>
              <Paper p="lg" radius="lg" style={{
              backgroundColor: '#1A1A1A',
              minHeight: 120
            }}>
                <Text c="#D4AF37" fw={600}>Sidebar</Text>
                <Text size="xs" c="#E8D5B7">Full width on mobile, 4-col on desktop</Text>
              </Paper>
            </Grid.Col>
            <Grid.Col span={{
            base: 12,
            md: 8
          }}>
              <Paper p="lg" radius="lg" withBorder style={{
              minHeight: 120
            }}>
                <Text fw={600}>Main Content</Text>
                <Text size="xs" c="dimmed">Full width on mobile, 8-col on desktop</Text>
              </Paper>
            </Grid.Col>
          </Grid>
        </div>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Responsive spans collapse from multi-column to single-column on mobile. Critical for Ethiopian mobile-first users.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Gutter (Gap) Sizes</Text>

        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(gutter => <div key={gutter}>
            <Text size="sm" fw={500} mb="xs">gutter=&quot;{gutter}&quot;</Text>
            <Grid gutter={gutter}>
              <Grid.Col span={4}><GridCell label="1" span={4} /></Grid.Col>
              <Grid.Col span={4}><GridCell label="2" span={4} /></Grid.Col>
              <Grid.Col span={4}><GridCell label="3" span={4} /></Grid.Col>
            </Grid>
          </div>)}
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Gutter controls the gap between columns. Use md (default) for most layouts, xs for tight data grids, lg/xl for spacious card grids.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Ethiopian SaaS Use Cases</Text>

        <div>
          <Text fw={500} mb="sm">Dashboard Stats Grid</Text>
          <Grid>
            {[{
            label: 'Active Projects',
            value: '12',
            color: '#D4AF37'
          }, {
            label: 'Total Revenue',
            value: '485K ETB',
            color: '#2C5530'
          }, {
            label: 'Pending Invoices',
            value: '7',
            color: '#C44536'
          }, {
            label: 'Team Members',
            value: '8',
            color: '#8B4513'
          }].map(({
            label,
            value,
            color
          }) => <Grid.Col key={label} span={{
            base: 6,
            md: 3
          }}>
                <Paper p="lg" radius="lg" withBorder style={{
              borderTop: \`3px solid \${color}\`
            }}>
                  <Text size="xs" c="dimmed" tt="uppercase">{label}</Text>
                  <Title order={3} mt="xs" style={{
                color
              }}>{value}</Title>
                </Paper>
              </Grid.Col>)}
          </Grid>
        </div>

        <div>
          <Text fw={500} mb="sm">Project Cards Grid</Text>
          <Grid>
            {[{
            name: 'Restaurant Branding',
            status: 'Active',
            budget: '25K ETB'
          }, {
            name: 'E-Commerce App',
            status: 'Review',
            budget: '120K ETB'
          }, {
            name: 'Hotel Website',
            status: 'Completed',
            budget: '45K ETB'
          }].map(({
            name,
            status,
            budget
          }) => <Grid.Col key={name} span={{
            base: 12,
            sm: 6,
            md: 4
          }}>
                <Paper p="lg" radius="lg" withBorder>
                  <Text fw={600} mb="xs">{name}</Text>
                  <Text size="xs" c="dimmed">{status} | {budget}</Text>
                </Paper>
              </Grid.Col>)}
          </Grid>
        </div>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Dashboard stats with color-coded top borders and ETB values. Project cards in a responsive 3-column grid with status and budget.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};const y=["BasicGrid","ResponsiveGrid","GutterSizes","UseCases"];export{d as BasicGrid,c as GutterSizes,n as ResponsiveGrid,p as UseCases,y as __namedExportsOrder,w as default};
