import{j as e}from"./iframe-DSgyGHZ6.js";import{S as t}from"./Switch-HA-162qH.js";import{B as o}from"./polymorphic-factory-d0jWGRqG.js";import{S as s}from"./Stack-Ca_rH8Tr.js";import{T as a}from"./Text-B4hK2jMs.js";import"./preload-helper-PPVm8Dsz.js";import"./InputsGroupFieldset-Bg0gabWi.js";import"./Input-CyO7TEbJ.js";import"./CloseButton-Cb7xwsVO.js";import"./UnstyledButton-BRgJMr7w.js";import"./use-uncontrolled-EUuE5Hv1.js";const S={title:"Atoms/Switch",component:t,parameters:{layout:"padded",docs:{description:{component:`
**When to use:**
Use Switch for binary on/off toggles that take effect immediately — feature flags, notification preferences, and settings. For form selections that submit later, prefer Checkbox.

**Ethiopian Design Context:**
Defaults to \`color="gold"\` for the active state. Switches are ideal for settings panels in Ethiopian SaaS apps: offline mode, SMS via TeleBirr, auto-invoicing, and client portal access.

**Common Patterns:**
- Notification preferences (email, SMS via TeleBirr, push)
- Feature toggles (offline mode, auto-generate invoices)
- Privacy and access controls (enable client portal)
- Project settings (time tracking, recurring billing)

**Accessibility:**
Switch includes a built-in label association. Use \`description\` for additional context about what the toggle controls. The switch is keyboard-accessible via Space/Enter.
        `}}},tags:["autodocs"],argTypes:{label:{description:"Switch label text",control:"text"},description:{description:"Helper text displayed below the label",control:"text"},color:{description:"Active state color from theme palette (defaults to gold)",control:"select",options:["gold","rust","forest","earth","gray"]},size:{description:"Switch size (xs | sm | md | lg | xl)",control:"select",options:["xs","sm","md","lg","xl"]},disabled:{description:"Disables the switch",control:"boolean"},error:{description:"Error message displayed below the switch",control:"text"}}},l={render:()=>e.jsx(o,{p:"xl",style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(s,{gap:"xl",children:[e.jsx(a,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Switch States"}),e.jsxs(s,{gap:"md",children:[e.jsx(t,{label:"Off"}),e.jsx(t,{label:"On",defaultChecked:!0}),e.jsx(t,{label:"Disabled Off",disabled:!0}),e.jsx(t,{label:"Disabled On",disabled:!0,defaultChecked:!0}),e.jsx(t,{label:"With Description",description:"Enable this feature"}),e.jsx(t,{label:"With Error",error:"Cannot toggle while processing"})]}),e.jsx(a,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",mt:"md",children:"Brand Colors"}),e.jsxs(s,{gap:"md",children:[e.jsx(t,{label:"Gold (Default)",defaultChecked:!0,color:"gold"}),e.jsx(t,{label:"Rust",defaultChecked:!0,color:"rust"}),e.jsx(t,{label:"Forest",defaultChecked:!0,color:"forest"}),e.jsx(t,{label:"Earth",defaultChecked:!0,color:"earth"})]})]})}),parameters:{docs:{description:{story:"All switch states and brand colors. Gold active state is the default. Use forest for positive toggles, rust for destructive ones."}}}},r={render:()=>e.jsx(o,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(s,{gap:"md",children:[e.jsx(a,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Switch Sizes"}),e.jsx(t,{size:"xs",label:"Extra small",defaultChecked:!0}),e.jsx(t,{size:"sm",label:"Small",defaultChecked:!0}),e.jsx(t,{size:"md",label:"Medium (default)",defaultChecked:!0}),e.jsx(t,{size:"lg",label:"Large",defaultChecked:!0}),e.jsx(t,{size:"xl",label:"Extra large",defaultChecked:!0})]})}),parameters:{docs:{description:{story:"Five sizes. Use md for settings panels, lg/xl for prominent feature toggles."}}}},i={render:()=>e.jsx(o,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(s,{gap:"xl",children:[e.jsx(a,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Ethiopian SaaS Use Cases"}),e.jsxs("div",{children:[e.jsx(a,{fw:600,mb:"sm",children:"Notification Preferences"}),e.jsxs(s,{gap:"xs",children:[e.jsx(t,{label:"Email notifications",defaultChecked:!0}),e.jsx(t,{label:"SMS notifications (TeleBirr)",defaultChecked:!0}),e.jsx(t,{label:"Push notifications"}),e.jsx(t,{label:"Weekly digest",defaultChecked:!0})]})]}),e.jsxs("div",{children:[e.jsx(a,{fw:600,mb:"sm",children:"Project Settings"}),e.jsxs(s,{gap:"xs",children:[e.jsx(t,{label:"Auto-generate invoices",defaultChecked:!0}),e.jsx(t,{label:"Enable client portal",defaultChecked:!0}),e.jsx(t,{label:"Track time automatically"}),e.jsx(t,{label:"Offline mode",description:"Sync data when connection is restored"})]})]})]})}),parameters:{docs:{description:{story:"Settings panel patterns: notification preferences with TeleBirr SMS and project feature toggles including offline sync mode."}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Switch States</Text>
        <Stack gap="md">
          <Switch label="Off" />
          <Switch label="On" defaultChecked />
          <Switch label="Disabled Off" disabled />
          <Switch label="Disabled On" disabled defaultChecked />
          <Switch label="With Description" description="Enable this feature" />
          <Switch label="With Error" error="Cannot toggle while processing" />
        </Stack>

        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" mt="md">Brand Colors</Text>
        <Stack gap="md">
          <Switch label="Gold (Default)" defaultChecked color="gold" />
          <Switch label="Rust" defaultChecked color="rust" />
          <Switch label="Forest" defaultChecked color="forest" />
          <Switch label="Earth" defaultChecked color="earth" />
        </Stack>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'All switch states and brand colors. Gold active state is the default. Use forest for positive toggles, rust for destructive ones.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="md">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Switch Sizes</Text>
        <Switch size="xs" label="Extra small" defaultChecked />
        <Switch size="sm" label="Small" defaultChecked />
        <Switch size="md" label="Medium (default)" defaultChecked />
        <Switch size="lg" label="Large" defaultChecked />
        <Switch size="xl" label="Extra large" defaultChecked />
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Five sizes. Use md for settings panels, lg/xl for prominent feature toggles.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Ethiopian SaaS Use Cases</Text>

        <div>
          <Text fw={600} mb="sm">Notification Preferences</Text>
          <Stack gap="xs">
            <Switch label="Email notifications" defaultChecked />
            <Switch label="SMS notifications (TeleBirr)" defaultChecked />
            <Switch label="Push notifications" />
            <Switch label="Weekly digest" defaultChecked />
          </Stack>
        </div>

        <div>
          <Text fw={600} mb="sm">Project Settings</Text>
          <Stack gap="xs">
            <Switch label="Auto-generate invoices" defaultChecked />
            <Switch label="Enable client portal" defaultChecked />
            <Switch label="Track time automatically" />
            <Switch label="Offline mode" description="Sync data when connection is restored" />
          </Stack>
        </div>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Settings panel patterns: notification preferences with TeleBirr SMS and project feature toggles including offline sync mode.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const k=["Variants","Sizes","UseCases"];export{r as Sizes,i as UseCases,l as Variants,k as __namedExportsOrder,S as default};
