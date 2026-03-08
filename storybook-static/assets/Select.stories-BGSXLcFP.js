import{j as e}from"./iframe-B9BJqu6d.js";import{S as t}from"./Select-BGPBIup-.js";import{B as s}from"./polymorphic-factory-B38yjnoz.js";import{S as l}from"./Stack-C9852h35.js";import{T as i}from"./Text-CSoEI4MQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Input-BuZp05Ay.js";import"./CloseButton-BnUzdrEK.js";import"./UnstyledButton-DkrSQbAm.js";import"./DirectionProvider-D56X0qNl.js";import"./index-hXcUJGPb.js";import"./use-merged-ref-6g4MH8R8.js";import"./Transition-Bb3Tv-9Y.js";import"./create-safe-context-DliEnmUg.js";import"./use-uncontrolled-CCehXbBN.js";import"./CheckIcon-Bbl4f29v.js";import"./InputBase-Do1NeyG7.js";const v={title:"Atoms/Select",component:t,parameters:{layout:"padded",docs:{description:{component:`
**When to use:**
Use Select for choosing one option from a predefined list — service types, payment methods, cities, statuses. For multiple selections, use a checkbox group. For free-text entry with suggestions, use a combobox pattern.

**Ethiopian Design Context:**
Select supports grouped options for organizing Ethiopian service categories (Design, Development, Marketing). The \`searchable\` prop is essential for long lists like Ethiopian cities or bank names.

**Common Patterns:**
- Payment method selection (TeleBirr, Chapa, Bank Transfer, Cash)
- Ethiopian city picker with searchable dropdown
- Service type grouped by category (Design / Development / Marketing)
- Project status updates (Discovery → In Progress → Review → Completed)

**Accessibility:**
Select is keyboard-navigable by default. The \`searchable\` variant filters on type. Use \`clearable\` when selection is optional.
        `}}},tags:["autodocs"],argTypes:{label:{description:"Select label displayed above the field",control:"text"},placeholder:{description:"Placeholder text shown when no option is selected",control:"text"},data:{description:"Array of options — strings, objects with `value`/`label`, or grouped items"},description:{description:"Helper text displayed below the select",control:"text"},error:{description:"Error message — replaces description when present",control:"text"},size:{description:"Select size (xs | sm | md | lg | xl)",control:"select",options:["xs","sm","md","lg","xl"]},searchable:{description:"Enables type-to-search filtering in the dropdown",control:"boolean"},clearable:{description:"Shows a clear button when a value is selected",control:"boolean"},disabled:{description:"Disables the select",control:"boolean"},withAsterisk:{description:"Shows a required asterisk next to the label",control:"boolean"}}},a={render:()=>e.jsx(s,{p:"xl",style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(l,{gap:"xl",style:{maxWidth:400},children:[e.jsx(i,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Select Variants"}),e.jsx(t,{label:"Default Select",placeholder:"Choose an option",data:["Option 1","Option 2","Option 3"]}),e.jsx(t,{label:"With Description",description:"Select your preferred option",placeholder:"Choose...",data:["Branding","Web Design","Mobile App","Full Stack"]}),e.jsx(t,{label:"Required",placeholder:"Required field",withAsterisk:!0,data:["Active","Paused","Completed"]}),e.jsx(t,{label:"With Error",placeholder:"Select...",error:"Please select a project type",data:["Branding","Web Design","Mobile App"]}),e.jsx(t,{label:"Disabled",placeholder:"Cannot change",disabled:!0,data:["Locked"],value:"Locked"}),e.jsx(t,{label:"Searchable",placeholder:"Search cities...",searchable:!0,data:["Addis Ababa","Bahir Dar","Hawassa","Dire Dawa","Mekelle","Gondar","Jimma","Adama"]}),e.jsx(t,{label:"Clearable",placeholder:"Select and clear...",clearable:!0,data:["Gold","Rust","Forest","Earth"]})]})}),parameters:{docs:{description:{story:"All select variants: default, with description, required, error, disabled, searchable, and clearable. The searchable variant is ideal for long lists like Ethiopian cities."}}}},r={render:()=>e.jsx(s,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(l,{gap:"md",style:{maxWidth:400},children:[e.jsx(i,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Select Sizes"}),e.jsx(t,{size:"xs",placeholder:"Extra small",label:"XS",data:["Option A","Option B"]}),e.jsx(t,{size:"sm",placeholder:"Small",label:"SM",data:["Option A","Option B"]}),e.jsx(t,{size:"md",placeholder:"Medium (default)",label:"MD",data:["Option A","Option B"]}),e.jsx(t,{size:"lg",placeholder:"Large",label:"LG",data:["Option A","Option B"]}),e.jsx(t,{size:"xl",placeholder:"Extra large",label:"XL",data:["Option A","Option B"]})]})}),parameters:{docs:{description:{story:"Five size options matching Input sizes for consistent form layouts."}}}},o={render:()=>e.jsx(s,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(l,{gap:"xl",style:{maxWidth:400},children:[e.jsx(i,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Ethiopian SaaS Use Cases"}),e.jsx(t,{label:"Service Type",placeholder:"What do you need?",withAsterisk:!0,data:[{group:"Design",items:["Branding","UI/UX Design","Print Design"]},{group:"Development",items:["Web App","Mobile App","API Development"]},{group:"Marketing",items:["Social Media","SEO","Content Strategy"]}]}),e.jsx(t,{label:"Payment Method",placeholder:"Select payment...",data:["TeleBirr","Chapa","Bank Transfer","Cash"]}),e.jsx(t,{label:"Project Status",placeholder:"Update status",data:["Discovery","In Progress","Review","Completed","On Hold"]})]})}),parameters:{docs:{description:{story:"Ethiopian SaaS patterns: grouped service types, TeleBirr/Chapa payment methods, and project status workflow."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      <Stack gap="xl" style={{
      maxWidth: 400
    }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Select Variants</Text>

        <Select label="Default Select" placeholder="Choose an option" data={['Option 1', 'Option 2', 'Option 3']} />
        <Select label="With Description" description="Select your preferred option" placeholder="Choose..." data={['Branding', 'Web Design', 'Mobile App', 'Full Stack']} />
        <Select label="Required" placeholder="Required field" withAsterisk data={['Active', 'Paused', 'Completed']} />
        <Select label="With Error" placeholder="Select..." error="Please select a project type" data={['Branding', 'Web Design', 'Mobile App']} />
        <Select label="Disabled" placeholder="Cannot change" disabled data={['Locked']} value="Locked" />
        <Select label="Searchable" placeholder="Search cities..." searchable data={['Addis Ababa', 'Bahir Dar', 'Hawassa', 'Dire Dawa', 'Mekelle', 'Gondar', 'Jimma', 'Adama']} />
        <Select label="Clearable" placeholder="Select and clear..." clearable data={['Gold', 'Rust', 'Forest', 'Earth']} />
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'All select variants: default, with description, required, error, disabled, searchable, and clearable. The searchable variant is ideal for long lists like Ethiopian cities.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="md" style={{
      maxWidth: 400
    }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Select Sizes</Text>
        <Select size="xs" placeholder="Extra small" label="XS" data={['Option A', 'Option B']} />
        <Select size="sm" placeholder="Small" label="SM" data={['Option A', 'Option B']} />
        <Select size="md" placeholder="Medium (default)" label="MD" data={['Option A', 'Option B']} />
        <Select size="lg" placeholder="Large" label="LG" data={['Option A', 'Option B']} />
        <Select size="xl" placeholder="Extra large" label="XL" data={['Option A', 'Option B']} />
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Five size options matching Input sizes for consistent form layouts.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="xl" style={{
      maxWidth: 400
    }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Ethiopian SaaS Use Cases</Text>

        <Select label="Service Type" placeholder="What do you need?" withAsterisk data={[{
        group: 'Design',
        items: ['Branding', 'UI/UX Design', 'Print Design']
      }, {
        group: 'Development',
        items: ['Web App', 'Mobile App', 'API Development']
      }, {
        group: 'Marketing',
        items: ['Social Media', 'SEO', 'Content Strategy']
      }]} />
        <Select label="Payment Method" placeholder="Select payment..." data={['TeleBirr', 'Chapa', 'Bank Transfer', 'Cash']} />
        <Select label="Project Status" placeholder="Update status" data={['Discovery', 'In Progress', 'Review', 'Completed', 'On Hold']} />
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Ethiopian SaaS patterns: grouped service types, TeleBirr/Chapa payment methods, and project status workflow.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const C=["Variants","Sizes","UseCases"];export{r as Sizes,o as UseCases,a as Variants,C as __namedExportsOrder,v as default};
