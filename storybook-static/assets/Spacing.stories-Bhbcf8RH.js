import{j as e}from"./iframe-B9BJqu6d.js";import{B as t}from"./polymorphic-factory-B38yjnoz.js";import{S as n}from"./Stack-C9852h35.js";import{T as d}from"./Title-WVNpPliK.js";import{T as s}from"./Text-CSoEI4MQ.js";import{G as c}from"./Group-BevGUIxM.js";import{P as m}from"./Paper-DOhuRlTg.js";import"./preload-helper-PPVm8Dsz.js";const S={title:"Design System/Spacing",parameters:{layout:"padded"}},g=[{token:"0",px:"0px",rem:"0"},{token:"1",px:"4px",rem:"0.25rem"},{token:"2",px:"8px",rem:"0.5rem"},{token:"3",px:"12px",rem:"0.75rem"},{token:"4",px:"16px",rem:"1rem"},{token:"5",px:"20px",rem:"1.25rem"},{token:"6",px:"24px",rem:"1.5rem"},{token:"8",px:"32px",rem:"2rem"},{token:"10",px:"40px",rem:"2.5rem"},{token:"12",px:"48px",rem:"3rem"},{token:"16",px:"64px",rem:"4rem"},{token:"20",px:"80px",rem:"5rem"},{token:"24",px:"96px",rem:"6rem"}],o={render:()=>e.jsx(t,{p:"xl",style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(n,{gap:"xl",children:[e.jsxs("div",{children:[e.jsx(d,{order:2,style:{fontFamily:"'Space Grotesk', sans-serif"},children:"Spacing Scale"}),e.jsx(s,{c:"#6B6B6B",mt:"xs",children:"4px base unit. Consistent spacing across all components."})]}),e.jsx(m,{p:"xl",radius:"lg",withBorder:!0,children:e.jsx(n,{gap:"sm",children:g.map(({token:r,px:a,rem:i})=>e.jsxs(c,{align:"center",wrap:"nowrap",gap:"md",children:[e.jsx(s,{size:"xs",ff:"monospace",c:"#D4AF37",fw:600,style:{minWidth:40,textAlign:"right"},children:r}),e.jsxs(s,{size:"xs",ff:"monospace",c:"#6B6B6B",style:{minWidth:80},children:[a," (",i,")"]}),e.jsx(t,{style:{width:a,height:24,backgroundColor:"#D4AF37",borderRadius:4,opacity:.8,minWidth:r==="0"?2:void 0,transition:"opacity 150ms ease"},onMouseEnter:l=>{l.currentTarget.style.opacity="1"},onMouseLeave:l=>{l.currentTarget.style.opacity="0.8"}})]},r))})})]})})},h=[{mantine:"xs",token:"2",px:"8px"},{mantine:"sm",token:"3",px:"12px"},{mantine:"md",token:"4",px:"16px"},{mantine:"lg",token:"6",px:"24px"},{mantine:"xl",token:"8",px:"32px"}],p={render:()=>e.jsx(t,{p:"xl",style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(n,{gap:"xl",children:[e.jsxs("div",{children:[e.jsx(d,{order:2,style:{fontFamily:"'Space Grotesk', sans-serif"},children:"Mantine Spacing Mapping"}),e.jsx(s,{c:"#6B6B6B",mt:"xs",children:"How design tokens map to Mantine's spacing props."})]}),e.jsx(m,{p:"xl",radius:"lg",withBorder:!0,children:e.jsxs(n,{gap:"md",children:[e.jsxs(c,{gap:"xl",children:[e.jsx(s,{size:"xs",fw:700,c:"#2C2C2C",style:{minWidth:80},children:"MANTINE"}),e.jsx(s,{size:"xs",fw:700,c:"#2C2C2C",style:{minWidth:60},children:"TOKEN"}),e.jsx(s,{size:"xs",fw:700,c:"#2C2C2C",style:{minWidth:60},children:"VALUE"}),e.jsx(s,{size:"xs",fw:700,c:"#2C2C2C",children:"VISUAL"})]}),h.map(({mantine:r,token:a,px:i})=>e.jsxs(c,{gap:"xl",align:"center",children:[e.jsx(s,{size:"sm",ff:"monospace",c:"#D4AF37",fw:600,style:{minWidth:80},children:r}),e.jsxs(s,{size:"sm",ff:"monospace",c:"#6B6B6B",style:{minWidth:60},children:["spacing.",a]}),e.jsx(s,{size:"sm",ff:"monospace",c:"#6B6B6B",style:{minWidth:60},children:i}),e.jsxs(t,{style:{display:"flex",gap:i,alignItems:"center"},children:[e.jsx(t,{style:{width:32,height:32,backgroundColor:"#D4AF37",borderRadius:6,opacity:.3}}),e.jsx(t,{style:{width:32,height:32,backgroundColor:"#D4AF37",borderRadius:6,opacity:.3}})]})]},r))]})})]})})},x={render:()=>e.jsx(t,{p:"xl",style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(n,{gap:"xl",children:[e.jsxs("div",{children:[e.jsx(d,{order:2,style:{fontFamily:"'Space Grotesk', sans-serif"},children:"Border Radius"}),e.jsx(s,{c:"#6B6B6B",mt:"xs",children:"Rounded corners scale for components."})]}),e.jsx(c,{gap:"lg",wrap:"wrap",children:[{name:"sm",value:"4px",radius:4},{name:"md",value:"8px",radius:8},{name:"lg",value:"12px",radius:12},{name:"xl",value:"16px",radius:16},{name:"2xl",value:"24px",radius:24},{name:"full",value:"9999px",radius:9999}].map(({name:r,value:a,radius:i})=>e.jsxs(n,{align:"center",gap:"xs",children:[e.jsx(t,{style:{width:80,height:80,backgroundColor:"#D4AF37",borderRadius:i,opacity:.8}}),e.jsx(s,{size:"sm",fw:600,c:"#2C2C2C",children:r}),e.jsx(s,{size:"xs",ff:"monospace",c:"#6B6B6B",children:a})]},r))})]})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      <Stack gap="xl">
        <div>
          <Title order={2} style={{
          fontFamily: "'Space Grotesk', sans-serif"
        }}>
            Spacing Scale
          </Title>
          <Text c="#6B6B6B" mt="xs">4px base unit. Consistent spacing across all components.</Text>
        </div>

        <Paper p="xl" radius="lg" withBorder>
          <Stack gap="sm">
            {spacingScale.map(({
            token,
            px,
            rem
          }) => <Group key={token} align="center" wrap="nowrap" gap="md">
                <Text size="xs" ff="monospace" c="#D4AF37" fw={600} style={{
              minWidth: 40,
              textAlign: 'right'
            }}>
                  {token}
                </Text>
                <Text size="xs" ff="monospace" c="#6B6B6B" style={{
              minWidth: 80
            }}>
                  {px} ({rem})
                </Text>
                <Box style={{
              width: px,
              height: 24,
              backgroundColor: '#D4AF37',
              borderRadius: 4,
              opacity: 0.8,
              minWidth: token === '0' ? 2 : undefined,
              transition: 'opacity 150ms ease'
            }} onMouseEnter={e => {
              e.currentTarget.style.opacity = '1';
            }} onMouseLeave={e => {
              e.currentTarget.style.opacity = '0.8';
            }} />
              </Group>)}
          </Stack>
        </Paper>
      </Stack>
    </Box>
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      <Stack gap="xl">
        <div>
          <Title order={2} style={{
          fontFamily: "'Space Grotesk', sans-serif"
        }}>
            Mantine Spacing Mapping
          </Title>
          <Text c="#6B6B6B" mt="xs">How design tokens map to Mantine&apos;s spacing props.</Text>
        </div>

        <Paper p="xl" radius="lg" withBorder>
          <Stack gap="md">
            <Group gap="xl">
              <Text size="xs" fw={700} c="#2C2C2C" style={{
              minWidth: 80
            }}>MANTINE</Text>
              <Text size="xs" fw={700} c="#2C2C2C" style={{
              minWidth: 60
            }}>TOKEN</Text>
              <Text size="xs" fw={700} c="#2C2C2C" style={{
              minWidth: 60
            }}>VALUE</Text>
              <Text size="xs" fw={700} c="#2C2C2C">VISUAL</Text>
            </Group>
            {mantineMapping.map(({
            mantine,
            token,
            px
          }) => <Group key={mantine} gap="xl" align="center">
                <Text size="sm" ff="monospace" c="#D4AF37" fw={600} style={{
              minWidth: 80
            }}>
                  {mantine}
                </Text>
                <Text size="sm" ff="monospace" c="#6B6B6B" style={{
              minWidth: 60
            }}>
                  spacing.{token}
                </Text>
                <Text size="sm" ff="monospace" c="#6B6B6B" style={{
              minWidth: 60
            }}>
                  {px}
                </Text>
                <Box style={{
              display: 'flex',
              gap: px,
              alignItems: 'center'
            }}>
                  <Box style={{
                width: 32,
                height: 32,
                backgroundColor: '#D4AF37',
                borderRadius: 6,
                opacity: 0.3
              }} />
                  <Box style={{
                width: 32,
                height: 32,
                backgroundColor: '#D4AF37',
                borderRadius: 6,
                opacity: 0.3
              }} />
                </Box>
              </Group>)}
          </Stack>
        </Paper>
      </Stack>
    </Box>
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      <Stack gap="xl">
        <div>
          <Title order={2} style={{
          fontFamily: "'Space Grotesk', sans-serif"
        }}>
            Border Radius
          </Title>
          <Text c="#6B6B6B" mt="xs">Rounded corners scale for components.</Text>
        </div>

        <Group gap="lg" wrap="wrap">
          {[{
          name: 'sm',
          value: '4px',
          radius: 4
        }, {
          name: 'md',
          value: '8px',
          radius: 8
        }, {
          name: 'lg',
          value: '12px',
          radius: 12
        }, {
          name: 'xl',
          value: '16px',
          radius: 16
        }, {
          name: '2xl',
          value: '24px',
          radius: 24
        }, {
          name: 'full',
          value: '9999px',
          radius: 9999
        }].map(({
          name,
          value,
          radius
        }) => <Stack key={name} align="center" gap="xs">
              <Box style={{
            width: 80,
            height: 80,
            backgroundColor: '#D4AF37',
            borderRadius: radius,
            opacity: 0.8
          }} />
              <Text size="sm" fw={600} c="#2C2C2C">{name}</Text>
              <Text size="xs" ff="monospace" c="#6B6B6B">{value}</Text>
            </Stack>)}
        </Group>
      </Stack>
    </Box>
}`,...x.parameters?.docs?.source}}};const w=["SpacingScale","MantineMapping","BorderRadius"];export{x as BorderRadius,p as MantineMapping,o as SpacingScale,w as __namedExportsOrder,S as default};
