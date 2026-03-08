import{j as e}from"./iframe-B9BJqu6d.js";import{S as r}from"./ScrollReveal-DbaJV_ME.js";import{B as g}from"./Button-DwqnNDR6.js";import"./Input-Do8NMghM.js";import"./TextArea-DRAn4Ts4.js";import"./Select-BGPBIup-.js";import"./Checkbox-CqoC1Exu.js";import"./Radio-CG_NFvxn.js";import"./Switch-CcnjTQuD.js";import"./Slider-Day5tWhq.js";import{B as s}from"./Badge-sA5cXLIZ.js";import{C as i}from"./Card-DtPqvK_N.js";import"./Avatar-D2aAznpT.js";import"./Image-DucVnRPS.js";import"./Divider-y02dhm4n.js";import"./Icon-BiHqG3VD.js";import"./Container-BuIkP306.js";import"./Stack-jC5Moorz.js";import"./Group-RWrop04D.js";import"./Grid-CsAQ84Uo.js";import{H as p}from"./Heading-C-Vlo7Fx.js";import"./Text-BTHSitow.js";import"./Link-B76xZzt4.js";import"./Alert-C7kZFWyV.js";import"./Loader-C6gCMyQ7.js";import"./RotatingText-BM6ABw1q.js";import{B as o}from"./polymorphic-factory-B38yjnoz.js";import{S as h}from"./Stack-C9852h35.js";import{T as t}from"./Text-CSoEI4MQ.js";import{G as x}from"./Group-BevGUIxM.js";import{T as u}from"./Title-WVNpPliK.js";import"./preload-helper-PPVm8Dsz.js";import"./use-in-view-DUtWkbiw.js";import"./MotionConfigContext-DNPWTmP9.js";import"./proxy-BzSxHJRt.js";import"./Button-BZIRSy9J.js";import"./Loader-DZfoLsgY.js";import"./Transition-Bb3Tv-9Y.js";import"./index-hXcUJGPb.js";import"./UnstyledButton-DkrSQbAm.js";import"./InputBase-Do1NeyG7.js";import"./Input-BuZp05Ay.js";import"./CloseButton-BnUzdrEK.js";import"./DirectionProvider-D56X0qNl.js";import"./use-merged-ref-6g4MH8R8.js";import"./create-safe-context-DliEnmUg.js";import"./use-uncontrolled-CCehXbBN.js";import"./CheckIcon-Bbl4f29v.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./InputsGroupFieldset-Db5G0Zux.js";import"./Badge--6N5_VeE.js";import"./Paper-DOhuRlTg.js";import"./IconX-Bmzros4I.js";import"./createReactComponent-C2aEuSvQ.js";import"./IconCheck-BArXFSiY.js";const ye={title:"Animations/ScrollReveal",component:r,parameters:{layout:"fullscreen",docs:{description:{component:`
**What it does:** Wraps any element and animates it into view when it enters the viewport on scroll.

**When to use:** Section headings, cards, images, text blocks — anything that should "appear" as the user scrolls down. This is the single most impactful animation for making a site feel premium.

**Animation Library:** Framer Motion (useInView + motion.div)

**Performance:** Uses IntersectionObserver under the hood — no scroll event listeners. Very performant even with many instances.

**Accessibility:** Respects \`prefers-reduced-motion\` — when enabled, elements appear instantly with no animation.
        `}}},tags:["autodocs"],argTypes:{direction:{description:"Direction the element slides in from",control:"select",options:["up","down","left","right","none"]},duration:{description:"Animation duration in seconds",control:{type:"range",min:.1,max:2,step:.1}},delay:{description:"Delay before animation starts (seconds)",control:{type:"range",min:0,max:1,step:.1}},distance:{description:"How far the element travels (px)",control:{type:"range",min:10,max:100,step:5}},once:{description:"If true, only animates the first time it enters view",control:"boolean"},threshold:{description:"How much of the element must be visible to trigger (0-1)",control:{type:"range",min:0,max:1,step:.1}}}},n={render:a=>e.jsx(o,{p:"xl",style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(h,{gap:"xl",maw:600,mx:"auto",pt:100,children:[e.jsx(t,{c:"dimmed",ta:"center",children:"Scroll down to see the animation"}),e.jsx(o,{style:{height:"60vh"}}),e.jsx(r,{...a,children:e.jsxs(i,{p:"lg",w:400,mx:"auto",children:[e.jsx(u,{order:3,mb:"xs",children:"Hello from ScrollReveal"}),e.jsx(t,{size:"sm",c:"dimmed",children:"This card faded up into view when you scrolled here."})]})}),e.jsx(o,{style:{height:"40vh"}})]})}),args:{direction:"up",duration:.6,delay:0,distance:40,once:!0,threshold:.2},parameters:{docs:{description:{story:"A single card fading up into view. Use the controls to experiment with direction, speed, and distance."}}}},l={render:()=>e.jsx(o,{p:"xl",style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(h,{gap:"xl",maw:800,mx:"auto",pt:60,children:[e.jsx(t,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",ta:"center",children:"All Directions"}),e.jsx(t,{c:"dimmed",ta:"center",size:"sm",children:"Scroll down — each card enters from a different direction"}),e.jsx(o,{style:{height:"50vh"}}),e.jsxs(x,{gap:"lg",justify:"center",wrap:"wrap",children:[e.jsx(r,{direction:"up",duration:.7,children:e.jsxs(i,{p:"lg",w:220,children:[e.jsx(s,{color:"gold",mb:"xs",children:"Up"}),e.jsx(t,{size:"sm",c:"dimmed",children:"Slides up into place"})]})}),e.jsx(r,{direction:"down",duration:.7,children:e.jsxs(i,{p:"lg",w:220,children:[e.jsx(s,{color:"rust",mb:"xs",children:"Down"}),e.jsx(t,{size:"sm",c:"dimmed",children:"Slides down into place"})]})}),e.jsx(r,{direction:"left",duration:.7,children:e.jsxs(i,{p:"lg",w:220,children:[e.jsx(s,{color:"forest",mb:"xs",children:"Left"}),e.jsx(t,{size:"sm",c:"dimmed",children:"Slides in from the right"})]})}),e.jsx(r,{direction:"right",duration:.7,children:e.jsxs(i,{p:"lg",w:220,children:[e.jsx(s,{color:"earth",mb:"xs",children:"Right"}),e.jsx(t,{size:"sm",c:"dimmed",children:"Slides in from the left"})]})})]}),e.jsx(r,{direction:"none",duration:1,children:e.jsxs(i,{p:"lg",w:300,mx:"auto",children:[e.jsx(s,{color:"gold",variant:"outline",mb:"xs",children:"None"}),e.jsx(t,{size:"sm",c:"dimmed",children:"Pure opacity fade — no movement"})]})}),e.jsx(o,{style:{height:"40vh"}})]})}),parameters:{docs:{description:{story:"Five cards demonstrating all direction options: up, down, left, right, and none (fade only)."}}}},d={render:()=>e.jsx(o,{style:{backgroundColor:"#FAF8F3",minHeight:"300vh"},children:e.jsxs(o,{maw:700,mx:"auto",px:"xl",py:80,children:[e.jsx(r,{children:e.jsx(p,{order:1,mb:"lg",children:"Portfolio"})}),e.jsx(r,{delay:.1,children:e.jsx(t,{c:"dimmed",size:"lg",mb:80,children:"A showcase of Ethiopian-inspired design work."})}),["Brand Identity","Web Platform","Mobile App","Design System"].map((a,m)=>e.jsx(r,{delay:.05*m,distance:50,children:e.jsxs(i,{p:"xl",mb:"xl",children:[e.jsxs(x,{justify:"space-between",mb:"sm",children:[e.jsx(p,{order:3,children:a}),e.jsx(s,{color:["gold","rust","forest","earth"][m],children:["Active","Complete","Active","Planning"][m]})]}),e.jsxs(t,{c:"dimmed",size:"sm",children:["Project description for ",a.toLowerCase()," — Ethiopian SaaS context with gold accents and warm earth tones throughout."]})]})},a)),e.jsx(r,{direction:"none",delay:.2,children:e.jsx(o,{ta:"center",py:60,children:e.jsx(g,{color:"gold",size:"lg",children:"View All Projects"})})})]})}),parameters:{docs:{description:{story:"Real-world usage pattern: a scrollable portfolio page where each section reveals sequentially with staggered delays."}}}},c={render:()=>e.jsx(o,{p:"xl",style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(h,{gap:"xl",maw:600,mx:"auto",pt:60,children:[e.jsx(t,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",ta:"center",children:"Repeating Animation"}),e.jsx(t,{c:"dimmed",ta:"center",size:"sm",children:"Scroll past, then scroll back up — the animation replays every time"}),e.jsx(o,{style:{height:"60vh"}}),e.jsx(r,{once:!1,direction:"up",distance:60,duration:.8,children:e.jsxs(i,{p:"xl",w:400,mx:"auto",children:[e.jsx(p,{order:3,mb:"xs",children:"I re-animate!"}),e.jsxs(t,{size:"sm",c:"dimmed",children:["With ",e.jsx("code",{children:"once=false"}),", this card animates every time it enters the viewport. Scroll past it, then scroll back up."]})]})}),e.jsx(o,{style:{height:"80vh"}})]})}),parameters:{docs:{description:{story:"With `once: false`, the animation replays every time the element re-enters the viewport. Scroll past and back to see it."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Box p="xl" style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      <Stack gap="xl" maw={600} mx="auto" pt={100}>
        <Text c="dimmed" ta="center">Scroll down to see the animation</Text>
        <Box style={{
        height: '60vh'
      }} />
        <ScrollReveal {...args}>
          <Card p="lg" w={400} mx="auto">
            <Title order={3} mb="xs">Hello from ScrollReveal</Title>
            <Text size="sm" c="dimmed">
              This card faded up into view when you scrolled here.
            </Text>
          </Card>
        </ScrollReveal>
        <Box style={{
        height: '40vh'
      }} />
      </Stack>
    </Box>,
  args: {
    direction: 'up',
    duration: 0.6,
    delay: 0,
    distance: 40,
    once: true,
    threshold: 0.2
  },
  parameters: {
    docs: {
      description: {
        story: 'A single card fading up into view. Use the controls to experiment with direction, speed, and distance.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      <Stack gap="xl" maw={800} mx="auto" pt={60}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" ta="center">
          All Directions
        </Text>
        <Text c="dimmed" ta="center" size="sm">Scroll down — each card enters from a different direction</Text>
        <Box style={{
        height: '50vh'
      }} />

        <Group gap="lg" justify="center" wrap="wrap">
          <ScrollReveal direction="up" duration={0.7}>
            <Card p="lg" w={220}>
              <Badge color="gold" mb="xs">Up</Badge>
              <Text size="sm" c="dimmed">Slides up into place</Text>
            </Card>
          </ScrollReveal>

          <ScrollReveal direction="down" duration={0.7}>
            <Card p="lg" w={220}>
              <Badge color="rust" mb="xs">Down</Badge>
              <Text size="sm" c="dimmed">Slides down into place</Text>
            </Card>
          </ScrollReveal>

          <ScrollReveal direction="left" duration={0.7}>
            <Card p="lg" w={220}>
              <Badge color="forest" mb="xs">Left</Badge>
              <Text size="sm" c="dimmed">Slides in from the right</Text>
            </Card>
          </ScrollReveal>

          <ScrollReveal direction="right" duration={0.7}>
            <Card p="lg" w={220}>
              <Badge color="earth" mb="xs">Right</Badge>
              <Text size="sm" c="dimmed">Slides in from the left</Text>
            </Card>
          </ScrollReveal>
        </Group>

        <ScrollReveal direction="none" duration={1}>
          <Card p="lg" w={300} mx="auto">
            <Badge color="gold" variant="outline" mb="xs">None</Badge>
            <Text size="sm" c="dimmed">Pure opacity fade — no movement</Text>
          </Card>
        </ScrollReveal>

        <Box style={{
        height: '40vh'
      }} />
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Five cards demonstrating all direction options: up, down, left, right, and none (fade only).'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Box style={{
    backgroundColor: '#FAF8F3',
    minHeight: '300vh'
  }}>
      <Box maw={700} mx="auto" px="xl" py={80}>
        <ScrollReveal>
          <Heading order={1} mb="lg">Portfolio</Heading>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Text c="dimmed" size="lg" mb={80}>
            A showcase of Ethiopian-inspired design work.
          </Text>
        </ScrollReveal>

        {['Brand Identity', 'Web Platform', 'Mobile App', 'Design System'].map((title, i) => <ScrollReveal key={title} delay={0.05 * i} distance={50}>
              <Card p="xl" mb="xl">
                <Group justify="space-between" mb="sm">
                  <Heading order={3}>{title}</Heading>
                  <Badge color={['gold', 'rust', 'forest', 'earth'][i]}>
                    {['Active', 'Complete', 'Active', 'Planning'][i]}
                  </Badge>
                </Group>
                <Text c="dimmed" size="sm">
                  Project description for {title.toLowerCase()} — Ethiopian SaaS context
                  with gold accents and warm earth tones throughout.
                </Text>
              </Card>
            </ScrollReveal>)}

        <ScrollReveal direction="none" delay={0.2}>
          <Box ta="center" py={60}>
            <Button color="gold" size="lg">View All Projects</Button>
          </Box>
        </ScrollReveal>
      </Box>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Real-world usage pattern: a scrollable portfolio page where each section reveals sequentially with staggered delays.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      <Stack gap="xl" maw={600} mx="auto" pt={60}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" ta="center">
          Repeating Animation
        </Text>
        <Text c="dimmed" ta="center" size="sm">
          Scroll past, then scroll back up — the animation replays every time
        </Text>
        <Box style={{
        height: '60vh'
      }} />

        <ScrollReveal once={false} direction="up" distance={60} duration={0.8}>
          <Card p="xl" w={400} mx="auto">
            <Heading order={3} mb="xs">I re-animate!</Heading>
            <Text size="sm" c="dimmed">
              With <code>once=false</code>, this card animates every time it enters the viewport.
              Scroll past it, then scroll back up.
            </Text>
          </Card>
        </ScrollReveal>

        <Box style={{
        height: '80vh'
      }} />
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'With \`once: false\`, the animation replays every time the element re-enters the viewport. Scroll past and back to see it.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const fe=["Default","AllDirections","LongPage","WithRepeat"];export{l as AllDirections,n as Default,d as LongPage,c as WithRepeat,fe as __namedExportsOrder,ye as default};
