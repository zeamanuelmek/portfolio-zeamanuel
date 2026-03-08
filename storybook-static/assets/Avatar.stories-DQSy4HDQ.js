import{j as e}from"./iframe-B9BJqu6d.js";import{A as r}from"./Avatar-D2aAznpT.js";import{B as d}from"./polymorphic-factory-B38yjnoz.js";import{S as t}from"./Stack-C9852h35.js";import{T as a}from"./Text-CSoEI4MQ.js";import{G as s}from"./Group-BevGUIxM.js";import{c as p}from"./createReactComponent-C2aEuSvQ.js";import{I as h}from"./IconBriefcase-CMiqvLRo.js";import"./preload-helper-PPVm8Dsz.js";const u=[["path",{d:"M3 21l18 0",key:"svg-0"}],["path",{d:"M9 8l1 0",key:"svg-1"}],["path",{d:"M9 12l1 0",key:"svg-2"}],["path",{d:"M9 16l1 0",key:"svg-3"}],["path",{d:"M14 8l1 0",key:"svg-4"}],["path",{d:"M14 12l1 0",key:"svg-5"}],["path",{d:"M14 16l1 0",key:"svg-6"}],["path",{d:"M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16",key:"svg-7"}]],c=p("outline","building","Building",u);const g=[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}]],f=p("outline","user","User",g),B={title:"Atoms/Avatar",component:r,parameters:{layout:"padded",docs:{description:{component:`
**When to use:**
Avatar represents a user, team member, or organization. Use for profile images, team lists, comment threads, and client directories. Falls back to initials or a placeholder icon when no image is provided.

**Ethiopian Design Context:**
Defaults to \`color="gold"\` for the background fill. Use the brand palette to differentiate team roles or client types. \`Avatar.Group\` with overlapping avatars is perfect for showing project team members.

**Common Patterns:**
- Team member lists with initials and role descriptions
- Client/organization avatars with building icons
- Avatar.Group for project team composition at a glance
- Comment thread author indicators

**Accessibility:**
Always provide meaningful \`alt\` text for image avatars. Initials-based avatars are decorative — pair with visible name text nearby.
        `}}},tags:["autodocs"],argTypes:{color:{description:"Background color from theme palette (defaults to gold)",control:"select",options:["gold","rust","forest","earth","gray"]},variant:{description:"Visual style — filled (default), light, or outline",control:"select",options:["filled","light","outline"]},size:{description:"Avatar size (xs | sm | md | lg | xl or number)",control:"select",options:["xs","sm","md","lg","xl"]},radius:{description:"Border radius — defaults to full circle (xl)",control:"select",options:["xs","sm","md","lg","xl"]},src:{description:"Image URL — falls back to children (initials) or placeholder",control:"text"}}},o={render:()=>e.jsx(d,{p:"xl",style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(t,{gap:"xl",children:[e.jsx(a,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Avatar Variants"}),e.jsxs("div",{children:[e.jsx(a,{fw:500,mb:"sm",children:"With Initials (Gold Default)"}),e.jsxs(s,{gap:"md",children:[e.jsx(r,{children:"ZA"}),e.jsx(r,{color:"rust",children:"AB"}),e.jsx(r,{color:"forest",children:"MK"}),e.jsx(r,{color:"earth",children:"TG"})]})]}),e.jsxs("div",{children:[e.jsx(a,{fw:500,mb:"sm",children:"With Icons"}),e.jsxs(s,{gap:"md",children:[e.jsx(r,{children:e.jsx(f,{size:20})}),e.jsx(r,{color:"rust",children:e.jsx(h,{size:20})}),e.jsx(r,{color:"forest",children:e.jsx(c,{size:20})})]})]}),e.jsxs("div",{children:[e.jsx(a,{fw:500,mb:"sm",children:"Placeholder (No Content)"}),e.jsxs(s,{gap:"md",children:[e.jsx(r,{}),e.jsx(r,{color:"rust"}),e.jsx(r,{color:"forest"})]})]}),e.jsxs("div",{children:[e.jsx(a,{fw:500,mb:"sm",children:"Variants"}),e.jsxs(s,{gap:"md",children:[e.jsx(r,{variant:"filled",children:"ZA"}),e.jsx(r,{variant:"light",children:"ZA"}),e.jsx(r,{variant:"outline",children:"ZA"})]})]})]})}),parameters:{docs:{description:{story:"Avatar content types: initials across brand colors, icon-based, empty placeholder, and the three visual variants (filled, light, outline)."}}}},i={render:()=>e.jsx(d,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(t,{gap:"md",children:[e.jsx(a,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Avatar Sizes"}),e.jsxs(s,{gap:"md",align:"center",children:[e.jsx(r,{size:"xs",children:"Z"}),e.jsx(r,{size:"sm",children:"ZA"}),e.jsx(r,{size:"md",children:"ZA"}),e.jsx(r,{size:"lg",children:"ZA"}),e.jsx(r,{size:"xl",children:"ZA"})]})]})}),parameters:{docs:{description:{story:"Five sizes. Use sm for inline mentions, md for lists, lg/xl for profile headers and detail views."}}}},l={render:()=>e.jsx(d,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(t,{gap:"xl",children:[e.jsx(a,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Avatar Group (Team Members)"}),e.jsxs(r.Group,{children:[e.jsx(r,{color:"gold",children:"ZA"}),e.jsx(r,{color:"rust",children:"AB"}),e.jsx(r,{color:"forest",children:"MK"}),e.jsx(r,{color:"earth",children:"TG"}),e.jsx(r,{children:"+3"})]}),e.jsx(a,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",mt:"md",children:"Large Group"}),e.jsxs(r.Group,{children:[e.jsx(r,{size:"lg",color:"gold",children:"ZA"}),e.jsx(r,{size:"lg",color:"rust",children:"AB"}),e.jsx(r,{size:"lg",color:"forest",children:"MK"}),e.jsx(r,{size:"lg",children:"+5"})]})]})}),parameters:{docs:{description:{story:'Avatar.Group shows overlapping team members with a "+N" overflow indicator. Use on project cards and team composition views.'}}}},n={render:()=>e.jsx(d,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(t,{gap:"xl",children:[e.jsx(a,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Ethiopian SaaS Use Cases"}),e.jsxs("div",{children:[e.jsx(a,{fw:500,mb:"sm",children:"Team Members"}),e.jsx(t,{gap:"xs",children:[{initials:"ZA",name:"Zeamanuel Admasu",role:"Lead Designer",color:"gold"},{initials:"AB",name:"Abebe Bikila",role:"Developer",color:"rust"},{initials:"MK",name:"Meron Kebede",role:"Project Manager",color:"forest"},{initials:"TG",name:"Tigist Girma",role:"Marketing",color:"earth"}].map(({initials:m,name:x,role:v,color:A})=>e.jsxs(s,{gap:"sm",children:[e.jsx(r,{color:A,size:"md",children:m}),e.jsxs("div",{children:[e.jsx(a,{size:"sm",fw:500,children:x}),e.jsx(a,{size:"xs",c:"dimmed",children:v})]})]},m))})]}),e.jsxs("div",{children:[e.jsx(a,{fw:500,mb:"sm",children:"Client Avatars"}),e.jsxs(s,{gap:"sm",children:[e.jsx(r,{color:"gold",radius:"md",size:"lg",children:e.jsx(c,{size:24})}),e.jsx(r,{color:"forest",radius:"md",size:"lg",children:e.jsx(c,{size:24})}),e.jsx(r,{color:"rust",radius:"md",size:"lg",children:e.jsx(c,{size:24})})]})]})]})}),parameters:{docs:{description:{story:"Team member list with Ethiopian names and color-coded roles. Client organization avatars use rounded-square radius for distinction."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Avatar Variants</Text>

        <div>
          <Text fw={500} mb="sm">With Initials (Gold Default)</Text>
          <Group gap="md">
            <Avatar>ZA</Avatar>
            <Avatar color="rust">AB</Avatar>
            <Avatar color="forest">MK</Avatar>
            <Avatar color="earth">TG</Avatar>
          </Group>
        </div>

        <div>
          <Text fw={500} mb="sm">With Icons</Text>
          <Group gap="md">
            <Avatar><IconUser size={20} /></Avatar>
            <Avatar color="rust"><IconBriefcase size={20} /></Avatar>
            <Avatar color="forest"><IconBuilding size={20} /></Avatar>
          </Group>
        </div>

        <div>
          <Text fw={500} mb="sm">Placeholder (No Content)</Text>
          <Group gap="md">
            <Avatar />
            <Avatar color="rust" />
            <Avatar color="forest" />
          </Group>
        </div>

        <div>
          <Text fw={500} mb="sm">Variants</Text>
          <Group gap="md">
            <Avatar variant="filled">ZA</Avatar>
            <Avatar variant="light">ZA</Avatar>
            <Avatar variant="outline">ZA</Avatar>
          </Group>
        </div>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Avatar content types: initials across brand colors, icon-based, empty placeholder, and the three visual variants (filled, light, outline).'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="md">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Avatar Sizes</Text>
        <Group gap="md" align="center">
          <Avatar size="xs">Z</Avatar>
          <Avatar size="sm">ZA</Avatar>
          <Avatar size="md">ZA</Avatar>
          <Avatar size="lg">ZA</Avatar>
          <Avatar size="xl">ZA</Avatar>
        </Group>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Five sizes. Use sm for inline mentions, md for lists, lg/xl for profile headers and detail views.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Avatar Group (Team Members)</Text>
        <Avatar.Group>
          <Avatar color="gold">ZA</Avatar>
          <Avatar color="rust">AB</Avatar>
          <Avatar color="forest">MK</Avatar>
          <Avatar color="earth">TG</Avatar>
          <Avatar>+3</Avatar>
        </Avatar.Group>

        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" mt="md">Large Group</Text>
        <Avatar.Group>
          <Avatar size="lg" color="gold">ZA</Avatar>
          <Avatar size="lg" color="rust">AB</Avatar>
          <Avatar size="lg" color="forest">MK</Avatar>
          <Avatar size="lg">+5</Avatar>
        </Avatar.Group>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Avatar.Group shows overlapping team members with a "+N" overflow indicator. Use on project cards and team composition views.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Ethiopian SaaS Use Cases</Text>

        <div>
          <Text fw={500} mb="sm">Team Members</Text>
          <Stack gap="xs">
            {[{
            initials: 'ZA',
            name: 'Zeamanuel Admasu',
            role: 'Lead Designer',
            color: 'gold' as const
          }, {
            initials: 'AB',
            name: 'Abebe Bikila',
            role: 'Developer',
            color: 'rust' as const
          }, {
            initials: 'MK',
            name: 'Meron Kebede',
            role: 'Project Manager',
            color: 'forest' as const
          }, {
            initials: 'TG',
            name: 'Tigist Girma',
            role: 'Marketing',
            color: 'earth' as const
          }].map(({
            initials,
            name,
            role,
            color
          }) => <Group key={initials} gap="sm">
                <Avatar color={color} size="md">{initials}</Avatar>
                <div>
                  <Text size="sm" fw={500}>{name}</Text>
                  <Text size="xs" c="dimmed">{role}</Text>
                </div>
              </Group>)}
          </Stack>
        </div>

        <div>
          <Text fw={500} mb="sm">Client Avatars</Text>
          <Group gap="sm">
            <Avatar color="gold" radius="md" size="lg"><IconBuilding size={24} /></Avatar>
            <Avatar color="forest" radius="md" size="lg"><IconBuilding size={24} /></Avatar>
            <Avatar color="rust" radius="md" size="lg"><IconBuilding size={24} /></Avatar>
          </Group>
        </div>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Team member list with Ethiopian names and color-coded roles. Client organization avatars use rounded-square radius for distinction.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};const M=["Variants","Sizes","AvatarGroup","UseCases"];export{l as AvatarGroup,i as Sizes,n as UseCases,o as Variants,M as __namedExportsOrder,B as default};
