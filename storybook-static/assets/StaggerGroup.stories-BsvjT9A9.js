import{j as e}from"./iframe-B9BJqu6d.js";import{S as o}from"./StaggerGroup-Cyfz_Syu.js";import"./Button-DwqnNDR6.js";import"./Input-Do8NMghM.js";import"./TextArea-DRAn4Ts4.js";import"./Select-BGPBIup-.js";import"./Checkbox-CqoC1Exu.js";import"./Radio-CG_NFvxn.js";import"./Switch-CcnjTQuD.js";import"./Slider-Day5tWhq.js";import{B as x}from"./Badge-sA5cXLIZ.js";import{C as m}from"./Card-DtPqvK_N.js";import"./Avatar-D2aAznpT.js";import"./Image-DucVnRPS.js";import"./Divider-y02dhm4n.js";import"./Icon-BiHqG3VD.js";import"./Container-BuIkP306.js";import"./Stack-jC5Moorz.js";import"./Group-RWrop04D.js";import"./Grid-CsAQ84Uo.js";import{H as g}from"./Heading-C-Vlo7Fx.js";import"./Text-BTHSitow.js";import"./Link-B76xZzt4.js";import"./Alert-C7kZFWyV.js";import"./Loader-C6gCMyQ7.js";import"./RotatingText-BM6ABw1q.js";import{B as t}from"./polymorphic-factory-B38yjnoz.js";import{T as i}from"./Text-CSoEI4MQ.js";import{T as p}from"./Title-WVNpPliK.js";import{G as h}from"./Group-BevGUIxM.js";import"./preload-helper-PPVm8Dsz.js";import"./use-in-view-DUtWkbiw.js";import"./MotionConfigContext-DNPWTmP9.js";import"./proxy-BzSxHJRt.js";import"./Button-BZIRSy9J.js";import"./Loader-DZfoLsgY.js";import"./Transition-Bb3Tv-9Y.js";import"./index-hXcUJGPb.js";import"./UnstyledButton-DkrSQbAm.js";import"./InputBase-Do1NeyG7.js";import"./Input-BuZp05Ay.js";import"./CloseButton-BnUzdrEK.js";import"./DirectionProvider-D56X0qNl.js";import"./use-merged-ref-6g4MH8R8.js";import"./create-safe-context-DliEnmUg.js";import"./use-uncontrolled-CCehXbBN.js";import"./CheckIcon-Bbl4f29v.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./InputsGroupFieldset-Db5G0Zux.js";import"./Badge--6N5_VeE.js";import"./Paper-DOhuRlTg.js";import"./Stack-C9852h35.js";import"./IconX-Bmzros4I.js";import"./createReactComponent-C2aEuSvQ.js";import"./IconCheck-BArXFSiY.js";const ye={title:"Animations/StaggerGroup",component:o,parameters:{layout:"fullscreen",docs:{description:{component:`
**What it does:** Wraps multiple children and reveals them one by one with staggered delays. Each child animates in sequence when the group enters the viewport.

**When to use:** Card grids, feature lists, stat rows, team member sections — anywhere you have repeating items that should cascade in rather than appear all at once.

**Animation Library:** Framer Motion (variants + staggerChildren + useInView)

**Performance:** Single IntersectionObserver for the whole group. Children use Framer Motion's variant propagation — no extra observers per child.

**Accessibility:** Respects \`prefers-reduced-motion\` — when enabled, all children appear instantly with no animation.
        `}}},tags:["autodocs"],argTypes:{staggerDelay:{description:"Seconds between each child animation start",control:{type:"range",min:.02,max:.5,step:.02}},direction:{description:"Direction each child slides in from",control:"select",options:["up","down","left","right","none"]},duration:{description:"Animation duration per child in seconds",control:{type:"range",min:.1,max:1.5,step:.1}},distance:{description:"How far each child travels (px)",control:{type:"range",min:10,max:80,step:5}},once:{description:"If true, only animates the first time the group enters view",control:"boolean"},threshold:{description:"How much of the group must be visible to trigger (0-1)",control:{type:"range",min:0,max:1,step:.1}}}},a={render:s=>e.jsx(t,{p:"xl",style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(t,{maw:900,mx:"auto",pt:60,children:[e.jsx(i,{c:"dimmed",ta:"center",mb:"lg",children:"Scroll down to see the stagger"}),e.jsx(t,{style:{height:"60vh"}}),e.jsx(o,{...s,style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:"1rem"},children:["Branding","Web Design","Mobile App","UX Research","Illustration","Motion"].map(r=>e.jsxs(m,{p:"lg",children:[e.jsx(p,{order:4,mb:"xs",children:r}),e.jsxs(i,{size:"sm",c:"dimmed",children:["Service description for ",r.toLowerCase()," projects."]})]},r))}),e.jsx(t,{style:{height:"40vh"}})]})}),args:{staggerDelay:.1,direction:"up",duration:.5,distance:30,once:!0,threshold:.1},parameters:{docs:{description:{story:"6 cards in a CSS grid, staggering in one by one. Use the controls to adjust timing, direction, and distance."}}}},l={render:()=>{const s=[{title:"E-Commerce Redesign",status:"Active",color:"gold",budget:"45,000 ETB"},{title:"Restaurant Branding",status:"Complete",color:"forest",budget:"25,000 ETB"},{title:"TeleBirr Integration",status:"Urgent",color:"rust",budget:"120,000 ETB"},{title:"Coffee Export Portal",status:"Planning",color:"earth",budget:"80,000 ETB"},{title:"Hotel Booking App",status:"Active",color:"gold",budget:"95,000 ETB"},{title:"NGO Dashboard",status:"Complete",color:"forest",budget:"55,000 ETB"}];return e.jsx(t,{style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(t,{maw:1e3,mx:"auto",px:"xl",py:80,children:[e.jsx(g,{order:2,mb:"xs",children:"Projects"}),e.jsx(i,{c:"dimmed",mb:"xl",children:"Recent client work across Ethiopian industries"}),e.jsx(t,{style:{height:"30vh"}}),e.jsx(o,{staggerDelay:.12,distance:40,style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"1.25rem"},children:s.map(r=>e.jsxs(m,{p:"lg",children:[e.jsxs(h,{justify:"space-between",mb:"sm",children:[e.jsx(x,{color:r.color,children:r.status}),e.jsx(i,{size:"xs",c:"dimmed",children:r.budget})]}),e.jsx(p,{order:4,mb:"xs",children:r.title}),e.jsx(i,{size:"sm",c:"dimmed",children:"Full-scope design and development for the Ethiopian market."})]},r.title))}),e.jsx(t,{style:{height:"40vh"}})]})})},parameters:{docs:{description:{story:"Realistic 3-column project card grid with badges, budgets in ETB, and staggered reveal — a common Ethiopian SaaS portfolio pattern."}}}},n={render:()=>e.jsx(t,{style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(t,{maw:500,mx:"auto",px:"xl",py:80,children:[e.jsx(g,{order:2,mb:"xl",children:"By the Numbers"}),e.jsx(t,{style:{height:"40vh"}}),e.jsx(o,{staggerDelay:.15,distance:20,children:[{label:"Projects Delivered",value:"50+"},{label:"Happy Clients",value:"32"},{label:"Revenue Generated",value:"ETB 2.5M"},{label:"Client Satisfaction",value:"99%"}].map(s=>e.jsx(t,{py:"md",style:{borderBottom:"1px solid rgba(0,0,0,0.06)"},children:e.jsxs(h,{justify:"space-between",children:[e.jsx(i,{c:"dimmed",children:s.label}),e.jsx(i,{fw:700,size:"xl",c:"#D4AF37",children:s.value})]})},s.label))}),e.jsx(t,{style:{height:"40vh"}})]})}),parameters:{docs:{description:{story:"Vertical list of stats staggering in from the top. Clean layout with gold accent values."}}}},d={render:()=>e.jsx(t,{p:"xl",style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(t,{maw:900,mx:"auto",pt:60,children:[e.jsx(i,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",ta:"center",children:"Fast Stagger (0.05s)"}),e.jsx(i,{c:"dimmed",ta:"center",size:"sm",mb:"lg",children:"Rapid-fire reveal effect"}),e.jsx(t,{style:{height:"50vh"}}),e.jsx(o,{staggerDelay:.05,duration:.3,distance:20,style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",gap:"0.75rem"},children:Array.from({length:12},(s,r)=>e.jsxs(m,{p:"md",ta:"center",children:[e.jsx(i,{fw:600,size:"lg",c:"#D4AF37",children:String(r+1).padStart(2,"0")}),e.jsxs(i,{size:"xs",c:"dimmed",children:["Item ",r+1]})]},r))}),e.jsx(t,{style:{height:"40vh"}})]})}),parameters:{docs:{description:{story:"Ultra-fast 0.05s stagger with 12 items — creates a rapid cascade effect. Great for icon grids or tag clouds."}}}},c={render:()=>e.jsx(t,{p:"xl",style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(t,{maw:900,mx:"auto",pt:60,children:[e.jsx(i,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",ta:"center",children:"Direction: Left"}),e.jsx(i,{c:"dimmed",ta:"center",size:"sm",mb:"lg",children:"Children slide in from the right side"}),e.jsx(t,{style:{height:"50vh"}}),e.jsx(o,{direction:"left",staggerDelay:.12,distance:50,style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:"1rem"},children:["Discovery","Strategy","Design","Development","Launch","Support"].map((s,r)=>e.jsxs(m,{p:"lg",children:[e.jsxs(i,{size:"xs",c:"#D4AF37",fw:600,mb:4,children:["Phase ",r+1]}),e.jsx(p,{order:4,children:s})]},s))}),e.jsx(t,{style:{height:"40vh"}})]})}),parameters:{docs:{description:{story:'Same grid layout but items slide in from the right (direction="left"). Works well for process/timeline sections.'}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Box p="xl" style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      <Box maw={900} mx="auto" pt={60}>
        <Text c="dimmed" ta="center" mb="lg">Scroll down to see the stagger</Text>
        <Box style={{
        height: '60vh'
      }} />
        <StaggerGroup {...args} style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1rem'
      }}>
          {['Branding', 'Web Design', 'Mobile App', 'UX Research', 'Illustration', 'Motion'].map(title => <Card key={title} p="lg">
                <Title order={4} mb="xs">{title}</Title>
                <Text size="sm" c="dimmed">
                  Service description for {title.toLowerCase()} projects.
                </Text>
              </Card>)}
        </StaggerGroup>
        <Box style={{
        height: '40vh'
      }} />
      </Box>
    </Box>,
  args: {
    staggerDelay: 0.1,
    direction: 'up',
    duration: 0.5,
    distance: 30,
    once: true,
    threshold: 0.1
  },
  parameters: {
    docs: {
      description: {
        story: '6 cards in a CSS grid, staggering in one by one. Use the controls to adjust timing, direction, and distance.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const projects = [{
      title: 'E-Commerce Redesign',
      status: 'Active',
      color: 'gold',
      budget: '45,000 ETB'
    }, {
      title: 'Restaurant Branding',
      status: 'Complete',
      color: 'forest',
      budget: '25,000 ETB'
    }, {
      title: 'TeleBirr Integration',
      status: 'Urgent',
      color: 'rust',
      budget: '120,000 ETB'
    }, {
      title: 'Coffee Export Portal',
      status: 'Planning',
      color: 'earth',
      budget: '80,000 ETB'
    }, {
      title: 'Hotel Booking App',
      status: 'Active',
      color: 'gold',
      budget: '95,000 ETB'
    }, {
      title: 'NGO Dashboard',
      status: 'Complete',
      color: 'forest',
      budget: '55,000 ETB'
    }];
    return <Box style={{
      backgroundColor: '#FAF8F3',
      minHeight: '100vh'
    }}>
        <Box maw={1000} mx="auto" px="xl" py={80}>
          <Heading order={2} mb="xs">Projects</Heading>
          <Text c="dimmed" mb="xl">Recent client work across Ethiopian industries</Text>
          <Box style={{
          height: '30vh'
        }} />
          <StaggerGroup staggerDelay={0.12} distance={40} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.25rem'
        }}>
            {projects.map(p => <Card key={p.title} p="lg">
                <Group justify="space-between" mb="sm">
                  <Badge color={p.color}>{p.status}</Badge>
                  <Text size="xs" c="dimmed">{p.budget}</Text>
                </Group>
                <Title order={4} mb="xs">{p.title}</Title>
                <Text size="sm" c="dimmed">
                  Full-scope design and development for the Ethiopian market.
                </Text>
              </Card>)}
          </StaggerGroup>
          <Box style={{
          height: '40vh'
        }} />
        </Box>
      </Box>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Realistic 3-column project card grid with badges, budgets in ETB, and staggered reveal — a common Ethiopian SaaS portfolio pattern.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Box style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      <Box maw={500} mx="auto" px="xl" py={80}>
        <Heading order={2} mb="xl">By the Numbers</Heading>
        <Box style={{
        height: '40vh'
      }} />
        <StaggerGroup staggerDelay={0.15} distance={20}>
          {[{
          label: 'Projects Delivered',
          value: '50+'
        }, {
          label: 'Happy Clients',
          value: '32'
        }, {
          label: 'Revenue Generated',
          value: 'ETB 2.5M'
        }, {
          label: 'Client Satisfaction',
          value: '99%'
        }].map(stat => <Box key={stat.label} py="md" style={{
          borderBottom: '1px solid rgba(0,0,0,0.06)'
        }}>
              <Group justify="space-between">
                <Text c="dimmed">{stat.label}</Text>
                <Text fw={700} size="xl" c="#D4AF37">{stat.value}</Text>
              </Group>
            </Box>)}
        </StaggerGroup>
        <Box style={{
        height: '40vh'
      }} />
      </Box>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Vertical list of stats staggering in from the top. Clean layout with gold accent values.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      <Box maw={900} mx="auto" pt={60}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" ta="center">Fast Stagger (0.05s)</Text>
        <Text c="dimmed" ta="center" size="sm" mb="lg">Rapid-fire reveal effect</Text>
        <Box style={{
        height: '50vh'
      }} />
        <StaggerGroup staggerDelay={0.05} duration={0.3} distance={20} style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
        gap: '0.75rem'
      }}>
          {Array.from({
          length: 12
        }, (_, i) => <Card key={i} p="md" ta="center">
              <Text fw={600} size="lg" c="#D4AF37">{String(i + 1).padStart(2, '0')}</Text>
              <Text size="xs" c="dimmed">Item {i + 1}</Text>
            </Card>)}
        </StaggerGroup>
        <Box style={{
        height: '40vh'
      }} />
      </Box>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Ultra-fast 0.05s stagger with 12 items — creates a rapid cascade effect. Great for icon grids or tag clouds.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      <Box maw={900} mx="auto" pt={60}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" ta="center">
          Direction: Left
        </Text>
        <Text c="dimmed" ta="center" size="sm" mb="lg">
          Children slide in from the right side
        </Text>
        <Box style={{
        height: '50vh'
      }} />
        <StaggerGroup direction="left" staggerDelay={0.12} distance={50} style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1rem'
      }}>
          {['Discovery', 'Strategy', 'Design', 'Development', 'Launch', 'Support'].map((phase, i) => <Card key={phase} p="lg">
                <Text size="xs" c="#D4AF37" fw={600} mb={4}>Phase {i + 1}</Text>
                <Title order={4}>{phase}</Title>
              </Card>)}
        </StaggerGroup>
        <Box style={{
        height: '40vh'
      }} />
      </Box>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Same grid layout but items slide in from the right (direction="left"). Works well for process/timeline sections.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const fe=["Default","ProjectGrid","StatsList","FastStagger","DirectionVariants"];export{a as Default,c as DirectionVariants,d as FastStagger,l as ProjectGrid,n as StatsList,fe as __namedExportsOrder,ye as default};
