import{j as e}from"./iframe-B9BJqu6d.js";import{I as r}from"./Input-Do8NMghM.js";import{B as l}from"./polymorphic-factory-B38yjnoz.js";import{S as i}from"./Stack-C9852h35.js";import{T as n}from"./Text-CSoEI4MQ.js";import{I as c}from"./IconMail-DyN4kkrn.js";import{I as p}from"./IconSearch-DXkwbren.js";import{c as d}from"./createReactComponent-C2aEuSvQ.js";import"./preload-helper-PPVm8Dsz.js";import"./InputBase-Do1NeyG7.js";import"./Input-BuZp05Ay.js";import"./CloseButton-BnUzdrEK.js";import"./UnstyledButton-DkrSQbAm.js";const u=[["path",{d:"M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M4 4l3 3",key:"svg-1"}],["path",{d:"M20 4l-3 3",key:"svg-2"}],["path",{d:"M4 20l3 -3",key:"svg-3"}],["path",{d:"M20 20l-3 -3",key:"svg-4"}]],m=d("outline","currency","Currency",u);const h=[["path",{d:"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6",key:"svg-0"}],["path",{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M8 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]],x=d("outline","lock","Lock",h),A={title:"Atoms/Input",component:r,parameters:{layout:"padded",docs:{description:{component:`
**When to use:**
Use Input for single-line text entry — names, emails, phone numbers, amounts, and search queries. For multi-line text, use TextArea instead.

**Ethiopian Design Context:**
Inputs inherit the theme's \`lg\` border-radius for a modern, rounded feel. Pair with \`leftSection\` icons for contextual cues (e.g., currency icon for ETB amounts, phone icon for TeleBirr numbers).

**Common Patterns:**
- Amount fields with ETB currency icon for expense tracking
- Search inputs for filtering projects, clients, or invoices
- Email/phone fields for client contact forms
- Password inputs for authentication flows

**Accessibility:**
Always provide a \`label\` for screen readers. Use \`description\` for helper text and \`error\` for validation messages — both are announced by assistive technology.
        `}}},tags:["autodocs"],argTypes:{label:{description:"Input label displayed above the field",control:"text"},placeholder:{description:"Placeholder text shown when the field is empty",control:"text"},description:{description:"Helper text displayed below the input",control:"text"},error:{description:"Error message — replaces description when present",control:"text"},size:{description:"Input size (xs | sm | md | lg | xl)",control:"select",options:["xs","sm","md","lg","xl"]},disabled:{description:"Disables the input",control:"boolean"},withAsterisk:{description:"Shows a required asterisk next to the label",control:"boolean"}}},t={render:()=>e.jsx(l,{p:"xl",style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(i,{gap:"xl",style:{maxWidth:400},children:[e.jsx(n,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Input Variants"}),e.jsx(r,{label:"Default Input",placeholder:"Enter text..."}),e.jsx(r,{label:"With Description",description:"This is a helper text",placeholder:"Enter text..."}),e.jsx(r,{label:"Required",placeholder:"Required field",withAsterisk:!0}),e.jsx(r,{label:"With Error",placeholder:"Invalid input",error:"This field is required"}),e.jsx(r,{label:"Disabled",placeholder:"Cannot edit",disabled:!0})]})}),parameters:{docs:{description:{story:"All input states: default, with description, required, error, and disabled. Shows how the input adapts to different validation contexts."}}}},o={render:()=>e.jsx(l,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(i,{gap:"md",style:{maxWidth:400},children:[e.jsx(n,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Input Sizes"}),e.jsx(r,{size:"xs",placeholder:"Extra small",label:"XS"}),e.jsx(r,{size:"sm",placeholder:"Small",label:"SM"}),e.jsx(r,{size:"md",placeholder:"Medium (default)",label:"MD"}),e.jsx(r,{size:"lg",placeholder:"Large",label:"LG"}),e.jsx(r,{size:"xl",placeholder:"Extra large",label:"XL"})]})}),parameters:{docs:{description:{story:"Five size options from xs to xl. Use md (default) for most forms, lg for prominent hero inputs, xs/sm for compact data tables."}}}},s={render:()=>e.jsx(l,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(i,{gap:"md",style:{maxWidth:400},children:[e.jsx(n,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"With Icons"}),e.jsx(r,{leftSection:e.jsx(p,{size:16}),placeholder:"Search projects...",label:"Search"}),e.jsx(r,{leftSection:e.jsx(c,{size:16}),placeholder:"you@example.com",label:"Email"}),e.jsx(r,{leftSection:e.jsx(x,{size:16}),placeholder:"Enter password",label:"Password",type:"password"}),e.jsx(r,{leftSection:e.jsx(m,{size:16}),placeholder:"0.00",label:"Amount (ETB)",description:"Ethiopian Birr"})]})}),parameters:{docs:{description:{story:"Inputs with left icons for contextual cues. Common pattern for ETB currency amounts, search fields, and authentication forms."}}}},a={render:()=>e.jsx(l,{p:"xl",style:{backgroundColor:"#1A1A1A",borderRadius:12},children:e.jsxs(i,{gap:"md",style:{maxWidth:400},children:[e.jsx(n,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"On Dark Background"}),e.jsx(r,{label:"Project Name",placeholder:"Enter project name...",styles:{label:{color:"#E8D5B7"},input:{backgroundColor:"#3D3D3D",borderColor:"rgba(212,175,55,0.3)",color:"#FFFFFF"}}}),e.jsx(r,{label:"Client Email",placeholder:"client@example.com",leftSection:e.jsx(c,{size:16,color:"#D4AF37"}),styles:{label:{color:"#E8D5B7"},input:{backgroundColor:"#3D3D3D",borderColor:"rgba(212,175,55,0.3)",color:"#FFFFFF"}}})]})}),parameters:{docs:{description:{story:"Custom styled inputs for dark backgrounds. Uses sand-colored labels and gold-tinted borders to maintain brand consistency on dark sections."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      <Stack gap="xl" style={{
      maxWidth: 400
    }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Input Variants</Text>

        <Input label="Default Input" placeholder="Enter text..." />
        <Input label="With Description" description="This is a helper text" placeholder="Enter text..." />
        <Input label="Required" placeholder="Required field" withAsterisk />
        <Input label="With Error" placeholder="Invalid input" error="This field is required" />
        <Input label="Disabled" placeholder="Cannot edit" disabled />
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'All input states: default, with description, required, error, and disabled. Shows how the input adapts to different validation contexts.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="md" style={{
      maxWidth: 400
    }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Input Sizes</Text>
        <Input size="xs" placeholder="Extra small" label="XS" />
        <Input size="sm" placeholder="Small" label="SM" />
        <Input size="md" placeholder="Medium (default)" label="MD" />
        <Input size="lg" placeholder="Large" label="LG" />
        <Input size="xl" placeholder="Extra large" label="XL" />
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Five size options from xs to xl. Use md (default) for most forms, lg for prominent hero inputs, xs/sm for compact data tables.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="md" style={{
      maxWidth: 400
    }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">With Icons</Text>
        <Input leftSection={<IconSearch size={16} />} placeholder="Search projects..." label="Search" />
        <Input leftSection={<IconMail size={16} />} placeholder="you@example.com" label="Email" />
        <Input leftSection={<IconLock size={16} />} placeholder="Enter password" label="Password" type="password" />
        <Input leftSection={<IconCurrency size={16} />} placeholder="0.00" label="Amount (ETB)" description="Ethiopian Birr" />
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Inputs with left icons for contextual cues. Common pattern for ETB currency amounts, search fields, and authentication forms.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#1A1A1A',
    borderRadius: 12
  }}>
      <Stack gap="md" style={{
      maxWidth: 400
    }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">On Dark Background</Text>
        <Input label="Project Name" placeholder="Enter project name..." styles={{
        label: {
          color: '#E8D5B7'
        },
        input: {
          backgroundColor: '#3D3D3D',
          borderColor: 'rgba(212,175,55,0.3)',
          color: '#FFFFFF'
        }
      }} />
        <Input label="Client Email" placeholder="client@example.com" leftSection={<IconMail size={16} color="#D4AF37" />} styles={{
        label: {
          color: '#E8D5B7'
        },
        input: {
          backgroundColor: '#3D3D3D',
          borderColor: 'rgba(212,175,55,0.3)',
          color: '#FFFFFF'
        }
      }} />
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Custom styled inputs for dark backgrounds. Uses sand-colored labels and gold-tinted borders to maintain brand consistency on dark sections.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const C=["Variants","Sizes","WithIcons","OnDarkBackground"];export{a as OnDarkBackground,o as Sizes,t as Variants,s as WithIcons,C as __namedExportsOrder,A as default};
