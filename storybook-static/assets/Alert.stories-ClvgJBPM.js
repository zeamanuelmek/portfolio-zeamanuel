import{j as e}from"./iframe-DSgyGHZ6.js";import{A as t}from"./Alert-6NoBjk9J.js";import{B as i}from"./polymorphic-factory-d0jWGRqG.js";import{S as s}from"./Stack-Ca_rH8Tr.js";import{T as r}from"./Text-B4hK2jMs.js";import{P as m}from"./Paper-BOEY9P_j.js";import{c as p}from"./createReactComponent-BhLdaQkJ.js";import{I as f}from"./IconCreditCard-YswRrPlt.js";import"./preload-helper-PPVm8Dsz.js";import"./CloseButton-Cb7xwsVO.js";import"./UnstyledButton-BRgJMr7w.js";import"./IconX-CW2aCY-N.js";import"./IconCheck-CciNn6M3.js";const h=[["path",{d:"M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1",key:"svg-0"}],["path",{d:"M9 15l3 -3l3 3",key:"svg-1"}],["path",{d:"M12 12l0 9",key:"svg-2"}]],g=p("outline","cloud-upload","CloudUpload",h);const x=[["path",{d:"M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3",key:"svg-0"}],["path",{d:"M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3",key:"svg-1"}],["path",{d:"M14 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]],y=p("outline","rocket","Rocket",x);const A=[["path",{d:"M12 18l.01 0",key:"svg-0"}],["path",{d:"M9.172 15.172a4 4 0 0 1 5.656 0",key:"svg-1"}],["path",{d:"M6.343 12.343a8 8 0 0 1 11.314 0",key:"svg-2"}],["path",{d:"M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0",key:"svg-3"}]],u=p("outline","wifi","Wifi",A),D={title:"Atoms/Alert",component:t,parameters:{layout:"padded",docs:{description:{component:`
**When to use:**
Alert displays contextual feedback messages — success confirmations, error notices, warnings, and informational tips. Use for form validation, payment status, offline mode notices, and system messages.

**Ethiopian Design Context:**
The custom \`semantic\` prop auto-configures color and icon for common states:
- \`success\` → forest green + check icon
- \`error\` → rust + X icon
- \`warning\` → gold + triangle icon
- \`info\` → gold + info circle icon

Default border-radius is \`lg\` for consistency with the design system.

**Common Patterns:**
- Payment confirmations (TeleBirr/Chapa success/failure)
- Offline mode notifications with sync status
- Form validation error summaries
- Feature announcements (receipt capture, new integrations)

**Accessibility:**
Alerts use \`role="alert"\` by default, announcing content to screen readers. Use \`title\` for a concise summary. The \`withCloseButton\` prop adds a dismissible control.
        `}}},tags:["autodocs"],argTypes:{semantic:{description:"Pre-configured semantic variant with auto color + icon (success | error | warning | info)",control:"select",options:["success","error","warning","info"]},title:{description:"Alert title displayed in bold above the message",control:"text"},color:{description:"Manual color override (gold, rust, forest, earth)",control:"select",options:["gold","rust","forest","earth"]},variant:{description:"Visual style — light (default), filled, or outline",control:"select",options:["light","filled","outline"]},withCloseButton:{description:"Adds a dismiss/close button",control:"boolean"}}},o={render:()=>e.jsx(i,{p:"xl",style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(s,{gap:"xl",style:{maxWidth:600},children:[e.jsx(r,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Semantic Alert Variants"}),e.jsx(t,{semantic:"success",title:"Success",children:"Project has been created successfully. Your team has been notified."}),e.jsx(t,{semantic:"error",title:"Error",children:"Failed to process payment. Please check your payment details and try again."}),e.jsx(t,{semantic:"warning",title:"Warning",children:"Your subscription expires in 3 days. Upgrade now to avoid service interruption."}),e.jsx(t,{semantic:"info",title:"Information",children:"New feature available: Offline sync is now enabled for expense tracking."})]})}),parameters:{docs:{description:{story:"The `semantic` prop auto-configures color and icon: success=forest, error=rust, warning=gold, info=gold. Use for quick, consistent feedback."}}}},a={render:()=>e.jsx(i,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(s,{gap:"xl",style:{maxWidth:600},children:[e.jsx(r,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Brand Color Alerts"}),e.jsx(t,{color:"gold",title:"Gold Alert",variant:"light",children:"Default gold-themed alert for general brand messaging."}),e.jsx(t,{color:"rust",title:"Rust Alert",variant:"light",children:"Innovation and AI-related notifications use rust accent."}),e.jsx(t,{color:"forest",title:"Forest Alert",variant:"light",children:"Availability and success states use forest green."}),e.jsx(t,{color:"earth",title:"Earth Alert",variant:"light",children:"Warm accent for supplementary information."})]})}),parameters:{docs:{description:{story:"Manual color control with the brand palette. Use when the semantic variants don't fit — e.g., brand announcements or themed notifications."}}}},n={render:()=>e.jsx(i,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(s,{gap:"xl",style:{maxWidth:600},children:[e.jsx(r,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Alert Style Variants"}),e.jsxs("div",{children:[e.jsx(r,{fw:500,mb:"sm",children:"Light (default)"}),e.jsx(t,{semantic:"info",title:"Light variant",variant:"light",children:"Subtle background with colored text. Best for inline notifications."})]}),e.jsxs("div",{children:[e.jsx(r,{fw:500,mb:"sm",children:"Filled"}),e.jsx(t,{semantic:"info",title:"Filled variant",variant:"filled",children:"Full colored background. Use for high-priority messages."})]}),e.jsxs("div",{children:[e.jsx(r,{fw:500,mb:"sm",children:"Outline"}),e.jsx(t,{semantic:"info",title:"Outline variant",variant:"outline",children:"Bordered style with minimal fill. Good for secondary alerts."})]})]})}),parameters:{docs:{description:{story:"Three visual variants: light for inline notices, filled for high-priority banners, outline for secondary information."}}}},l={render:()=>e.jsx(i,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(s,{gap:"xl",style:{maxWidth:600},children:[e.jsx(r,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Custom Icons"}),e.jsx(t,{color:"gold",title:"New Feature",icon:e.jsx(y,{size:20}),children:"Receipt capture with camera is now available. Try it on your next expense!"}),e.jsx(t,{color:"forest",title:"Payment Received",icon:e.jsx(f,{size:20}),children:"TeleBirr payment of 25,000 ETB confirmed for Invoice #1042."}),e.jsx(t,{color:"rust",title:"Connection Lost",icon:e.jsx(u,{size:20}),children:"You are currently offline. Changes will sync when connection is restored."}),e.jsx(t,{color:"earth",title:"Syncing",icon:e.jsx(g,{size:20}),children:"Uploading 3 offline expenses to the server..."})]})}),parameters:{docs:{description:{story:"Custom icons override the semantic defaults. Use for feature announcements (rocket), payment (credit card), offline (wifi), and sync (cloud upload)."}}}},c={render:()=>e.jsx(i,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(s,{gap:"xl",style:{maxWidth:600},children:[e.jsx(r,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Closable Alerts"}),e.jsx(t,{semantic:"success",title:"Payment Confirmed",withCloseButton:!0,children:"Your TeleBirr payment of 45,000 ETB has been processed successfully."}),e.jsx(t,{semantic:"warning",title:"Action Required",withCloseButton:!0,children:"3 invoices are overdue. Review your pending payments."})]})}),parameters:{docs:{description:{story:"Dismissible alerts with close button. Use for transient success messages and non-critical warnings that users can acknowledge."}}}},d={render:()=>e.jsx(i,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(s,{gap:"xl",style:{maxWidth:600},children:[e.jsx(r,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Ethiopian SaaS Use Cases"}),e.jsxs(m,{p:"lg",radius:"lg",withBorder:!0,children:[e.jsx(r,{fw:600,mb:"md",children:"Form Validation"}),e.jsx(s,{gap:"sm",children:e.jsx(t,{semantic:"error",title:"Missing Fields",children:"Please fill in the following required fields: Client Name, Project Type, Budget."})})]}),e.jsxs(m,{p:"lg",radius:"lg",withBorder:!0,children:[e.jsx(r,{fw:600,mb:"md",children:"Offline Mode"}),e.jsx(s,{gap:"sm",children:e.jsx(t,{color:"earth",icon:e.jsx(u,{size:20}),title:"Offline Mode Active",variant:"outline",children:"You can still add expenses and create quotes. Data will sync automatically when you reconnect."})})]}),e.jsxs(m,{p:"lg",radius:"lg",withBorder:!0,children:[e.jsx(r,{fw:600,mb:"md",children:"Payment Flow"}),e.jsxs(s,{gap:"sm",children:[e.jsx(t,{semantic:"info",title:"Processing Payment",children:"Connecting to Chapa payment gateway. Please do not close this window."}),e.jsx(t,{semantic:"success",title:"Payment Complete",withCloseButton:!0,children:"Invoice #1042 has been paid. Receipt sent to client@email.com."})]})]}),e.jsxs(i,{p:"lg",style:{backgroundColor:"#1A1A1A",borderRadius:12},children:[e.jsx(r,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",mb:"md",children:"On Dark Background"}),e.jsxs(s,{gap:"sm",children:[e.jsx(t,{semantic:"success",title:"Synced",variant:"filled",children:"All offline data has been synchronized successfully."}),e.jsx(t,{color:"gold",title:"Welcome Back",variant:"filled",children:"You have 5 new notifications and 2 pending approvals."})]})]})]})}),parameters:{docs:{description:{story:"Ethiopian SaaS alert patterns: form validation errors, offline mode notices, Chapa payment flow with processing → success states, and filled alerts on dark backgrounds."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      <Stack gap="xl" style={{
      maxWidth: 600
    }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Semantic Alert Variants</Text>

        <Alert semantic="success" title="Success">
          Project has been created successfully. Your team has been notified.
        </Alert>

        <Alert semantic="error" title="Error">
          Failed to process payment. Please check your payment details and try again.
        </Alert>

        <Alert semantic="warning" title="Warning">
          Your subscription expires in 3 days. Upgrade now to avoid service interruption.
        </Alert>

        <Alert semantic="info" title="Information">
          New feature available: Offline sync is now enabled for expense tracking.
        </Alert>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'The \`semantic\` prop auto-configures color and icon: success=forest, error=rust, warning=gold, info=gold. Use for quick, consistent feedback.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="xl" style={{
      maxWidth: 600
    }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Brand Color Alerts</Text>

        <Alert color="gold" title="Gold Alert" variant="light">
          Default gold-themed alert for general brand messaging.
        </Alert>

        <Alert color="rust" title="Rust Alert" variant="light">
          Innovation and AI-related notifications use rust accent.
        </Alert>

        <Alert color="forest" title="Forest Alert" variant="light">
          Availability and success states use forest green.
        </Alert>

        <Alert color="earth" title="Earth Alert" variant="light">
          Warm accent for supplementary information.
        </Alert>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Manual color control with the brand palette. Use when the semantic variants don\\'t fit — e.g., brand announcements or themed notifications.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="xl" style={{
      maxWidth: 600
    }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Alert Style Variants</Text>

        <div>
          <Text fw={500} mb="sm">Light (default)</Text>
          <Alert semantic="info" title="Light variant" variant="light">
            Subtle background with colored text. Best for inline notifications.
          </Alert>
        </div>

        <div>
          <Text fw={500} mb="sm">Filled</Text>
          <Alert semantic="info" title="Filled variant" variant="filled">
            Full colored background. Use for high-priority messages.
          </Alert>
        </div>

        <div>
          <Text fw={500} mb="sm">Outline</Text>
          <Alert semantic="info" title="Outline variant" variant="outline">
            Bordered style with minimal fill. Good for secondary alerts.
          </Alert>
        </div>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Three visual variants: light for inline notices, filled for high-priority banners, outline for secondary information.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="xl" style={{
      maxWidth: 600
    }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Custom Icons</Text>

        <Alert color="gold" title="New Feature" icon={<IconRocket size={20} />}>
          Receipt capture with camera is now available. Try it on your next expense!
        </Alert>

        <Alert color="forest" title="Payment Received" icon={<IconCreditCard size={20} />}>
          TeleBirr payment of 25,000 ETB confirmed for Invoice #1042.
        </Alert>

        <Alert color="rust" title="Connection Lost" icon={<IconWifi size={20} />}>
          You are currently offline. Changes will sync when connection is restored.
        </Alert>

        <Alert color="earth" title="Syncing" icon={<IconCloudUpload size={20} />}>
          Uploading 3 offline expenses to the server...
        </Alert>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Custom icons override the semantic defaults. Use for feature announcements (rocket), payment (credit card), offline (wifi), and sync (cloud upload).'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="xl" style={{
      maxWidth: 600
    }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Closable Alerts</Text>

        <Alert semantic="success" title="Payment Confirmed" withCloseButton>
          Your TeleBirr payment of 45,000 ETB has been processed successfully.
        </Alert>

        <Alert semantic="warning" title="Action Required" withCloseButton>
          3 invoices are overdue. Review your pending payments.
        </Alert>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Dismissible alerts with close button. Use for transient success messages and non-critical warnings that users can acknowledge.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="xl" style={{
      maxWidth: 600
    }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Ethiopian SaaS Use Cases</Text>

        {/* Form validation */}
        <Paper p="lg" radius="lg" withBorder>
          <Text fw={600} mb="md">Form Validation</Text>
          <Stack gap="sm">
            <Alert semantic="error" title="Missing Fields">
              Please fill in the following required fields: Client Name, Project Type, Budget.
            </Alert>
          </Stack>
        </Paper>

        {/* Offline mode */}
        <Paper p="lg" radius="lg" withBorder>
          <Text fw={600} mb="md">Offline Mode</Text>
          <Stack gap="sm">
            <Alert color="earth" icon={<IconWifi size={20} />} title="Offline Mode Active" variant="outline">
              You can still add expenses and create quotes. Data will sync automatically when you reconnect.
            </Alert>
          </Stack>
        </Paper>

        {/* Payment flow */}
        <Paper p="lg" radius="lg" withBorder>
          <Text fw={600} mb="md">Payment Flow</Text>
          <Stack gap="sm">
            <Alert semantic="info" title="Processing Payment">
              Connecting to Chapa payment gateway. Please do not close this window.
            </Alert>
            <Alert semantic="success" title="Payment Complete" withCloseButton>
              Invoice #1042 has been paid. Receipt sent to client@email.com.
            </Alert>
          </Stack>
        </Paper>

        {/* On dark background */}
        <Box p="lg" style={{
        backgroundColor: '#1A1A1A',
        borderRadius: 12
      }}>
          <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" mb="md">On Dark Background</Text>
          <Stack gap="sm">
            <Alert semantic="success" title="Synced" variant="filled">
              All offline data has been synchronized successfully.
            </Alert>
            <Alert color="gold" title="Welcome Back" variant="filled">
              You have 5 new notifications and 2 pending approvals.
            </Alert>
          </Stack>
        </Box>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Ethiopian SaaS alert patterns: form validation errors, offline mode notices, Chapa payment flow with processing → success states, and filled alerts on dark backgrounds.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};const I=["SemanticVariants","BrandColors","Variants","WithCustomIcons","Closable","UseCases"];export{a as BrandColors,c as Closable,o as SemanticVariants,d as UseCases,n as Variants,l as WithCustomIcons,I as __namedExportsOrder,D as default};
