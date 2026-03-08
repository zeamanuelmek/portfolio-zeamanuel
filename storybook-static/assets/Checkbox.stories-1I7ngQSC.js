import{j as e}from"./iframe-B9BJqu6d.js";import{C as t}from"./Checkbox-CqoC1Exu.js";import{B as c}from"./polymorphic-factory-B38yjnoz.js";import{S as s}from"./Stack-C9852h35.js";import{T as o}from"./Text-CSoEI4MQ.js";import"./preload-helper-PPVm8Dsz.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./InputsGroupFieldset-Db5G0Zux.js";import"./Input-BuZp05Ay.js";import"./CloseButton-BnUzdrEK.js";import"./UnstyledButton-DkrSQbAm.js";import"./use-uncontrolled-CCehXbBN.js";import"./CheckIcon-Bbl4f29v.js";const j={title:"Atoms/Checkbox",component:t,parameters:{layout:"padded",docs:{description:{component:`
**When to use:**
Use Checkbox for toggling a single boolean option or selecting multiple items from a list. For mutually exclusive choices, use Radio instead. For on/off toggles, consider Switch.

**Ethiopian Design Context:**
Defaults to \`color="gold"\` for brand consistency. Use forest green for success-related selections and rust for destructive confirmations (e.g., "I confirm deletion").

**Common Patterns:**
- Service selection checklists (Branding, Web Design, Mobile App)
- Invoice options (Include VAT 15%, send receipt, enable recurring billing)
- Terms and conditions acceptance
- Filter toggles in project/client dashboards

**Accessibility:**
Each checkbox must have a \`label\`. Use \`description\` for additional context. The \`indeterminate\` state is useful for "select all" parent checkboxes.
        `}}},tags:["autodocs"],argTypes:{label:{description:"Checkbox label text",control:"text"},description:{description:"Helper text displayed below the label",control:"text"},color:{description:"Check color from theme palette (defaults to gold)",control:"select",options:["gold","rust","forest","earth","gray"]},size:{description:"Checkbox size (xs | sm | md | lg | xl)",control:"select",options:["xs","sm","md","lg","xl"]},disabled:{description:"Disables the checkbox",control:"boolean"},indeterminate:{description:"Shows indeterminate state (neither checked nor unchecked)",control:"boolean"},error:{description:"Error message displayed below the checkbox",control:"text"}}},a={render:()=>e.jsx(c,{p:"xl",style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(s,{gap:"xl",children:[e.jsx(o,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Checkbox States"}),e.jsxs(s,{gap:"md",children:[e.jsx(t,{label:"Unchecked"}),e.jsx(t,{label:"Checked",defaultChecked:!0}),e.jsx(t,{label:"Indeterminate",indeterminate:!0}),e.jsx(t,{label:"Disabled",disabled:!0}),e.jsx(t,{label:"Disabled Checked",disabled:!0,defaultChecked:!0}),e.jsx(t,{label:"With Description",description:"Additional details about this option"}),e.jsx(t,{label:"With Error",error:"You must accept the terms"})]}),e.jsx(o,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",mt:"md",children:"Brand Colors"}),e.jsxs(s,{gap:"md",children:[e.jsx(t,{label:"Gold (Default)",defaultChecked:!0,color:"gold"}),e.jsx(t,{label:"Rust",defaultChecked:!0,color:"rust"}),e.jsx(t,{label:"Forest",defaultChecked:!0,color:"forest"}),e.jsx(t,{label:"Earth",defaultChecked:!0,color:"earth"})]})]})}),parameters:{docs:{description:{story:"All checkbox states and brand color variants. Gold is the default, matching the Ethiopian brand palette."}}}},l={render:()=>e.jsx(c,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(s,{gap:"md",children:[e.jsx(o,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Checkbox Sizes"}),e.jsx(t,{size:"xs",label:"Extra small",defaultChecked:!0}),e.jsx(t,{size:"sm",label:"Small",defaultChecked:!0}),e.jsx(t,{size:"md",label:"Medium (default)",defaultChecked:!0}),e.jsx(t,{size:"lg",label:"Large",defaultChecked:!0}),e.jsx(t,{size:"xl",label:"Extra large",defaultChecked:!0})]})}),parameters:{docs:{description:{story:"Five sizes from xs to xl. Use md for standard forms, lg/xl for touch-friendly mobile layouts."}}}},r={render:()=>e.jsx(c,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(s,{gap:"xl",children:[e.jsx(o,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Ethiopian SaaS Use Cases"}),e.jsxs("div",{children:[e.jsx(o,{fw:600,mb:"sm",children:"Project Services"}),e.jsxs(s,{gap:"xs",children:[e.jsx(t,{label:"Branding & Identity",defaultChecked:!0}),e.jsx(t,{label:"Web Design & Development",defaultChecked:!0}),e.jsx(t,{label:"Mobile App Development"}),e.jsx(t,{label:"SEO & Digital Marketing"}),e.jsx(t,{label:"Social Media Management"})]})]}),e.jsxs("div",{children:[e.jsx(o,{fw:600,mb:"sm",children:"Invoice Options"}),e.jsxs(s,{gap:"xs",children:[e.jsx(t,{label:"Include VAT (15%)",defaultChecked:!0}),e.jsx(t,{label:"Send receipt via email",defaultChecked:!0}),e.jsx(t,{label:"Enable recurring billing"})]})]})]})}),parameters:{docs:{description:{story:"Multi-select patterns for Ethiopian SaaS: service selection for project scoping and invoice configuration with VAT options."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Checkbox States</Text>
        <Stack gap="md">
          <Checkbox label="Unchecked" />
          <Checkbox label="Checked" defaultChecked />
          <Checkbox label="Indeterminate" indeterminate />
          <Checkbox label="Disabled" disabled />
          <Checkbox label="Disabled Checked" disabled defaultChecked />
          <Checkbox label="With Description" description="Additional details about this option" />
          <Checkbox label="With Error" error="You must accept the terms" />
        </Stack>

        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" mt="md">Brand Colors</Text>
        <Stack gap="md">
          <Checkbox label="Gold (Default)" defaultChecked color="gold" />
          <Checkbox label="Rust" defaultChecked color="rust" />
          <Checkbox label="Forest" defaultChecked color="forest" />
          <Checkbox label="Earth" defaultChecked color="earth" />
        </Stack>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'All checkbox states and brand color variants. Gold is the default, matching the Ethiopian brand palette.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="md">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Checkbox Sizes</Text>
        <Checkbox size="xs" label="Extra small" defaultChecked />
        <Checkbox size="sm" label="Small" defaultChecked />
        <Checkbox size="md" label="Medium (default)" defaultChecked />
        <Checkbox size="lg" label="Large" defaultChecked />
        <Checkbox size="xl" label="Extra large" defaultChecked />
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Five sizes from xs to xl. Use md for standard forms, lg/xl for touch-friendly mobile layouts.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Ethiopian SaaS Use Cases</Text>

        <div>
          <Text fw={600} mb="sm">Project Services</Text>
          <Stack gap="xs">
            <Checkbox label="Branding & Identity" defaultChecked />
            <Checkbox label="Web Design & Development" defaultChecked />
            <Checkbox label="Mobile App Development" />
            <Checkbox label="SEO & Digital Marketing" />
            <Checkbox label="Social Media Management" />
          </Stack>
        </div>

        <div>
          <Text fw={600} mb="sm">Invoice Options</Text>
          <Stack gap="xs">
            <Checkbox label="Include VAT (15%)" defaultChecked />
            <Checkbox label="Send receipt via email" defaultChecked />
            <Checkbox label="Enable recurring billing" />
          </Stack>
        </div>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Multi-select patterns for Ethiopian SaaS: service selection for project scoping and invoice configuration with VAT options.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const S=["Variants","Sizes","UseCases"];export{l as Sizes,r as UseCases,a as Variants,S as __namedExportsOrder,j as default};
