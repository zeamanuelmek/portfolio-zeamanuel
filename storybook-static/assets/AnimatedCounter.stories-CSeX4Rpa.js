import{j as e}from"./iframe-B9BJqu6d.js";import{A as s}from"./AnimatedCounter-CF-NcSBM.js";import"./Button-DwqnNDR6.js";import"./Input-Do8NMghM.js";import"./TextArea-DRAn4Ts4.js";import"./Select-BGPBIup-.js";import"./Checkbox-CqoC1Exu.js";import"./Radio-CG_NFvxn.js";import"./Switch-CcnjTQuD.js";import"./Slider-Day5tWhq.js";import"./Badge-sA5cXLIZ.js";import{C as m}from"./Card-DtPqvK_N.js";import"./Avatar-D2aAznpT.js";import"./Image-DucVnRPS.js";import"./Divider-y02dhm4n.js";import"./Icon-BiHqG3VD.js";import"./Container-BuIkP306.js";import"./Stack-jC5Moorz.js";import"./Group-RWrop04D.js";import"./Grid-CsAQ84Uo.js";import{H as d}from"./Heading-C-Vlo7Fx.js";import"./Text-BTHSitow.js";import"./Link-B76xZzt4.js";import"./Alert-C7kZFWyV.js";import"./Loader-C6gCMyQ7.js";import"./RotatingText-BM6ABw1q.js";import{B as r}from"./polymorphic-factory-B38yjnoz.js";import{T as a}from"./Text-CSoEI4MQ.js";import{G as c}from"./Group-BevGUIxM.js";import{S as p}from"./Stack-C9852h35.js";import"./preload-helper-PPVm8Dsz.js";import"./use-motion-value-B6044a5a.js";import"./MotionConfigContext-DNPWTmP9.js";import"./use-in-view-DUtWkbiw.js";import"./Button-BZIRSy9J.js";import"./Loader-DZfoLsgY.js";import"./Transition-Bb3Tv-9Y.js";import"./index-hXcUJGPb.js";import"./UnstyledButton-DkrSQbAm.js";import"./InputBase-Do1NeyG7.js";import"./Input-BuZp05Ay.js";import"./CloseButton-BnUzdrEK.js";import"./DirectionProvider-D56X0qNl.js";import"./use-merged-ref-6g4MH8R8.js";import"./create-safe-context-DliEnmUg.js";import"./use-uncontrolled-CCehXbBN.js";import"./CheckIcon-Bbl4f29v.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./InputsGroupFieldset-Db5G0Zux.js";import"./Badge--6N5_VeE.js";import"./Paper-DOhuRlTg.js";import"./Title-WVNpPliK.js";import"./IconX-Bmzros4I.js";import"./createReactComponent-C2aEuSvQ.js";import"./IconCheck-BArXFSiY.js";const fe={title:"Animations/AnimatedCounter",component:s,parameters:{layout:"fullscreen",docs:{description:{component:`
**What it does:** Displays a number that counts up from a start value to a target value when it enters the viewport. Supports formatting with prefix, suffix, thousands separators, and decimals.

**When to use:** Stats sections, dashboard KPIs, portfolio metrics — any number that should feel dynamic and earned rather than static.

**Animation Library:** Framer Motion (useMotionValue + animate + useInView)

**Performance:** Uses a single motion value with \`requestAnimationFrame\` internally — no DOM thrashing. The IntersectionObserver triggers only once by default.

**Accessibility:** Respects \`prefers-reduced-motion\` — when enabled, the final number appears instantly with no counting animation.
        `}}},tags:["autodocs"],argTypes:{target:{description:"The final number to count to",control:{type:"number"}},start:{description:"Starting number (default: 0)",control:{type:"number"}},duration:{description:"Animation duration in seconds",control:{type:"range",min:.3,max:5,step:.1}},delay:{description:"Delay before counting starts (seconds)",control:{type:"range",min:0,max:2,step:.1}},prefix:{description:'Text before the number (e.g., "ETB ", "$")',control:"text"},suffix:{description:'Text after the number (e.g., "+", "%", "K")',control:"text"},decimals:{description:"Number of decimal places",control:{type:"range",min:0,max:3,step:1}},separator:{description:"Thousands separator character",control:"text"},once:{description:"If true, only counts the first time it enters view",control:"boolean"}}},o={render:t=>e.jsx(r,{p:"xl",style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(p,{maw:400,mx:"auto",pt:60,ta:"center",children:[e.jsx(a,{c:"dimmed",size:"sm",children:"Scroll down to trigger the counter"}),e.jsx(r,{style:{height:"60vh"}}),e.jsxs(m,{p:"xl",children:[e.jsx(s,{...t,style:{fontSize:"3rem",fontWeight:700,fontFamily:"'Space Grotesk', sans-serif",color:"#D4AF37"}}),e.jsx(a,{c:"dimmed",mt:"xs",children:"Projects delivered"})]}),e.jsx(r,{style:{height:"40vh"}})]})}),args:{target:50,suffix:"+",duration:2,delay:0,decimals:0,separator:",",once:!0},parameters:{docs:{description:{story:"A single counter counting to 50+. Use the controls to change the target, duration, prefix/suffix, and formatting."}}}},i={render:()=>e.jsx(r,{style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(r,{maw:900,mx:"auto",px:"xl",pt:80,children:[e.jsx(d,{order:2,mb:"xs",ta:"center",children:"By the Numbers"}),e.jsx(a,{c:"dimmed",ta:"center",mb:"xl",children:"Impact across the Ethiopian tech ecosystem"}),e.jsx(r,{style:{height:"40vh"}}),e.jsx(c,{justify:"center",gap:"xl",wrap:"wrap",children:[{target:50,suffix:"+",label:"Projects"},{target:12,suffix:"",label:"Clients"},{target:25e5,prefix:"ETB ",suffix:"",label:"Revenue"},{target:99,suffix:"%",label:"Satisfaction"}].map(t=>e.jsxs(m,{p:"xl",w:190,ta:"center",children:[e.jsx(s,{target:t.target,prefix:t.prefix,suffix:t.suffix,duration:2.5,separator:",",style:{fontSize:"2rem",fontWeight:700,fontFamily:"'Space Grotesk', sans-serif",color:"#D4AF37",display:"block"}}),e.jsx(a,{c:"dimmed",size:"sm",mt:"xs",children:t.label})]},t.label))}),e.jsx(r,{style:{height:"40vh"}})]})}),parameters:{docs:{description:{story:"Four stats in a row: 50+ Projects, 12 Clients, ETB 2,500,000 Revenue, 99% Satisfaction. All count simultaneously when the row enters view."}}}},n={render:()=>e.jsx(r,{p:"xl",style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(r,{maw:700,mx:"auto",pt:60,children:[e.jsx(a,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",ta:"center",children:"Formatting Options"}),e.jsx(r,{style:{height:"50vh"}}),e.jsx(p,{gap:"lg",children:[{target:25e3,prefix:"ETB ",separator:",",decimals:0,label:"Prefix + separator"},{target:99.9,suffix:"%",decimals:1,label:"One decimal + suffix"},{target:3.14159,decimals:3,label:"Three decimals"},{target:1250,suffix:"K",separator:",",label:"Suffix as unit"},{target:50,prefix:"$",suffix:".00",label:"Dollar format"}].map(t=>e.jsx(m,{p:"lg",children:e.jsxs(c,{justify:"space-between",align:"center",children:[e.jsx(a,{c:"dimmed",size:"sm",children:t.label}),e.jsx(s,{target:t.target,prefix:t.prefix,suffix:t.suffix,separator:t.separator,decimals:t.decimals,duration:2,style:{fontSize:"1.5rem",fontWeight:700,fontFamily:"'Space Grotesk', sans-serif",color:"#2C2C2C"}})]})},t.label))}),e.jsx(r,{style:{height:"40vh"}})]})}),parameters:{docs:{description:{story:"Demonstrates all formatting options: prefix (ETB, $), suffix (%, K), thousands separator, and 0-3 decimal places."}}}},l={render:()=>e.jsx(r,{p:"xl",style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(r,{maw:700,mx:"auto",pt:60,children:[e.jsx(a,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",ta:"center",children:"Speed Comparison"}),e.jsx(a,{c:"dimmed",ta:"center",size:"sm",mb:"lg",children:"Same target, different durations"}),e.jsx(r,{style:{height:"50vh"}}),e.jsx(c,{justify:"center",gap:"xl",wrap:"wrap",children:[{duration:.5,label:"Fast (0.5s)"},{duration:2,label:"Normal (2s)"},{duration:4,label:"Slow (4s)"}].map(t=>e.jsxs(m,{p:"xl",w:200,ta:"center",children:[e.jsx(s,{target:100,duration:t.duration,style:{fontSize:"2.5rem",fontWeight:700,fontFamily:"'Space Grotesk', sans-serif",color:"#D4AF37",display:"block"}}),e.jsx(a,{c:"dimmed",size:"sm",mt:"xs",children:t.label})]},t.label))}),e.jsx(r,{style:{height:"40vh"}})]})}),parameters:{docs:{description:{story:"Three counters racing to 100 at different speeds: 0.5s (snappy), 2s (natural), and 4s (dramatic). Shows how duration affects the feel."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Box p="xl" style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      <Stack maw={400} mx="auto" pt={60} ta="center">
        <Text c="dimmed" size="sm">Scroll down to trigger the counter</Text>
        <Box style={{
        height: '60vh'
      }} />
        <Card p="xl">
          <AnimatedCounter {...args} style={{
          fontSize: '3rem',
          fontWeight: 700,
          fontFamily: "'Space Grotesk', sans-serif",
          color: '#D4AF37'
        }} />
          <Text c="dimmed" mt="xs">Projects delivered</Text>
        </Card>
        <Box style={{
        height: '40vh'
      }} />
      </Stack>
    </Box>,
  args: {
    target: 50,
    suffix: '+',
    duration: 2,
    delay: 0,
    decimals: 0,
    separator: ',',
    once: true
  },
  parameters: {
    docs: {
      description: {
        story: 'A single counter counting to 50+. Use the controls to change the target, duration, prefix/suffix, and formatting.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Box style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      <Box maw={900} mx="auto" px="xl" pt={80}>
        <Heading order={2} mb="xs" ta="center">By the Numbers</Heading>
        <Text c="dimmed" ta="center" mb="xl">Impact across the Ethiopian tech ecosystem</Text>
        <Box style={{
        height: '40vh'
      }} />
        <Group justify="center" gap="xl" wrap="wrap">
          {[{
          target: 50,
          suffix: '+',
          label: 'Projects'
        }, {
          target: 12,
          suffix: '',
          label: 'Clients'
        }, {
          target: 2500000,
          prefix: 'ETB ',
          suffix: '',
          label: 'Revenue'
        }, {
          target: 99,
          suffix: '%',
          label: 'Satisfaction'
        }].map(stat => <Card key={stat.label} p="xl" w={190} ta="center">
              <AnimatedCounter target={stat.target} prefix={stat.prefix} suffix={stat.suffix} duration={2.5} separator="," style={{
            fontSize: '2rem',
            fontWeight: 700,
            fontFamily: "'Space Grotesk', sans-serif",
            color: '#D4AF37',
            display: 'block'
          }} />
              <Text c="dimmed" size="sm" mt="xs">{stat.label}</Text>
            </Card>)}
        </Group>
        <Box style={{
        height: '40vh'
      }} />
      </Box>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Four stats in a row: 50+ Projects, 12 Clients, ETB 2,500,000 Revenue, 99% Satisfaction. All count simultaneously when the row enters view.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      <Box maw={700} mx="auto" pt={60}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" ta="center">
          Formatting Options
        </Text>
        <Box style={{
        height: '50vh'
      }} />
        <Stack gap="lg">
          {[{
          target: 25000,
          prefix: 'ETB ',
          separator: ',',
          decimals: 0,
          label: 'Prefix + separator'
        }, {
          target: 99.9,
          suffix: '%',
          decimals: 1,
          label: 'One decimal + suffix'
        }, {
          target: 3.14159,
          decimals: 3,
          label: 'Three decimals'
        }, {
          target: 1250,
          suffix: 'K',
          separator: ',',
          label: 'Suffix as unit'
        }, {
          target: 50,
          prefix: '$',
          suffix: '.00',
          label: 'Dollar format'
        }].map(item => <Card key={item.label} p="lg">
              <Group justify="space-between" align="center">
                <Text c="dimmed" size="sm">{item.label}</Text>
                <AnimatedCounter target={item.target} prefix={item.prefix} suffix={item.suffix} separator={item.separator} decimals={item.decimals} duration={2} style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              fontFamily: "'Space Grotesk', sans-serif",
              color: '#2C2C2C'
            }} />
              </Group>
            </Card>)}
        </Stack>
        <Box style={{
        height: '40vh'
      }} />
      </Box>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates all formatting options: prefix (ETB, $), suffix (%, K), thousands separator, and 0-3 decimal places.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      <Box maw={700} mx="auto" pt={60}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" ta="center">
          Speed Comparison
        </Text>
        <Text c="dimmed" ta="center" size="sm" mb="lg">
          Same target, different durations
        </Text>
        <Box style={{
        height: '50vh'
      }} />
        <Group justify="center" gap="xl" wrap="wrap">
          {[{
          duration: 0.5,
          label: 'Fast (0.5s)'
        }, {
          duration: 2,
          label: 'Normal (2s)'
        }, {
          duration: 4,
          label: 'Slow (4s)'
        }].map(item => <Card key={item.label} p="xl" w={200} ta="center">
              <AnimatedCounter target={100} duration={item.duration} style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            fontFamily: "'Space Grotesk', sans-serif",
            color: '#D4AF37',
            display: 'block'
          }} />
              <Text c="dimmed" size="sm" mt="xs">{item.label}</Text>
            </Card>)}
        </Group>
        <Box style={{
        height: '40vh'
      }} />
      </Box>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Three counters racing to 100 at different speeds: 0.5s (snappy), 2s (natural), and 4s (dramatic). Shows how duration affects the feel.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};const ue=["Default","StatsRow","WithFormatting","CustomDuration"];export{l as CustomDuration,o as Default,i as StatsRow,n as WithFormatting,ue as __namedExportsOrder,fe as default};
