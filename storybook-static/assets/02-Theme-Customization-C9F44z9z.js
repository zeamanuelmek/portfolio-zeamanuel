import{j as e}from"./iframe-DSgyGHZ6.js";import{useMDXComponents as i}from"./index-Daod07PP.js";import{M as s}from"./blocks-ZpUjFyny.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DQUcR2cE.js";function t(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Theme Customization"}),`
`,e.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",fontFamily:"Inter, sans-serif"},children:[e.jsx(n.h1,{id:"theme-customization",children:"Theme Customization"}),e.jsxs(n.p,{children:["SemEnaWerk's theming system lets you rebrand the entire UI by changing ",e.jsx(n.strong,{children:"a single function call"}),`.
No digging through CSS files. No find-and-replace hex codes. Just configure and deploy.`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"how-it-works",children:"How It Works"}),e.jsx(n.p,{children:"The theme flows through three layers:"}),e.jsx(n.pre,{children:e.jsx(n.code,{children:`tokens.ts → createClientTheme() → MantineProvider → All Components
`})}),e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"themes/tokens.ts"})})," — raw design tokens (colors, fonts, spacing)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"themes/createClientTheme.ts"})})," — generates a complete Mantine theme with tint/shade color scales"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"MantineProvider"})})," — applies the theme to every component in the tree"]}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"quick-start-5-minute-theme-swap",children:"Quick Start: 5-Minute Theme Swap"}),e.jsx(n.h3,{id:"step-1--create-a-client-theme",children:"Step 1 — Create a Client Theme"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// themes/clients/startup-x.ts
import { createClientTheme } from '../createClientTheme';

export const startupXTheme = createClientTheme({
  brandColor: '#FF6B35',    // Client's primary brand color
  fontFamily: 'Poppins',    // Optional: override heading + body font
});
`})}),e.jsxs(n.p,{children:["That's it. ",e.jsx(n.code,{children:"createClientTheme"})," automatically generates:"]}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.strong,{children:"10-shade color scale"})," from your brand color (light → dark)"]}),`
`,e.jsxs(n.li,{children:["Matching ",e.jsx(n.strong,{children:"component defaults"})," (button colors, focus rings, active states)"]}),`
`,e.jsxs(n.li,{children:["Proper ",e.jsx(n.strong,{children:"contrast ratios"})," for text on colored backgrounds"]}),`
`]}),e.jsx(n.h3,{id:"step-2--apply-in-layout",children:"Step 2 — Apply in Layout"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// app/layout.tsx
import { MantineProvider } from '@mantine/core';
import { startupXTheme } from '@/themes/clients/startup-x';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MantineProvider theme={startupXTheme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
`})}),e.jsx(n.h3,{id:"step-3--deploy",children:"Step 3 — Deploy"}),e.jsxs(n.p,{children:[`Every component automatically picks up the new theme. Buttons turn orange, focus rings
match, cards glow in the new brand color. `,e.jsx(n.strong,{children:"Zero component changes needed."})]}),e.jsx(n.hr,{}),e.jsxs(n.h2,{id:"the-createclienttheme-api",children:["The ",e.jsx(n.code,{children:"createClientTheme"})," API"]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`createClientTheme({
  brandColor: string,     // Required — primary brand color (hex)
  fontFamily?: string,    // Optional — overrides both heading and body fonts
})
`})}),e.jsx(n.h3,{id:"what-it-generates",children:"What It Generates"}),e.jsxs(n.p,{children:[`| Theme Key | Generated From | Example |
|-----------|---------------|---------|
| `,e.jsx(n.code,{children:"colors.brand"})," | 10-shade scale from ",e.jsx(n.code,{children:"brandColor"})," | ",e.jsx(n.code,{children:"brand.0"})," (lightest) → ",e.jsx(n.code,{children:"brand.9"}),` (darkest) |
| `,e.jsx(n.code,{children:"colors.gold"}),` | Ethiopian gold scale | Always available as accent |
| `,e.jsx(n.code,{children:"colors.rust"}),` | Ethiopian rust scale | For warnings/destructive |
| `,e.jsx(n.code,{children:"colors.forest"}),` | Ethiopian forest scale | For success states |
| `,e.jsx(n.code,{children:"colors.earth"}),` | Ethiopian earth scale | For neutral warmth |
| `,e.jsx(n.code,{children:"primaryColor"})," | Set to ",e.jsx(n.code,{children:"'brand'"}),` | Components default to brand color |
| `,e.jsx(n.code,{children:"fontFamily"})," | ",e.jsx(n.code,{children:"fontFamily"}),` param or Inter | Body text font |
| `,e.jsx(n.code,{children:"headings.fontFamily"})," | ",e.jsx(n.code,{children:"fontFamily"}),` param or Space Grotesk | Heading font |
| `,e.jsx(n.code,{children:"defaultRadius"})," | ",e.jsx(n.code,{children:"'lg'"}),` | Rounded, friendly aesthetic |
| `,e.jsx(n.code,{children:"other.goldGradient"})," | Fixed | ",e.jsx(n.code,{children:"linear-gradient(135deg, #D4AF37, #E8C84A)"}),` |
| `,e.jsx(n.code,{children:"other.creamBg"})," | Fixed | ",e.jsx(n.code,{children:"#FAF8F3"}),` |
| `,e.jsx(n.code,{children:"other.goldGlow"})," | Fixed | Gold box-shadow string |"]}),e.jsx(n.h3,{id:"color-scale-generation",children:"Color Scale Generation"}),e.jsxs(n.p,{children:[e.jsx(n.code,{children:"createClientTheme"})," generates real tint/shade scales — not opacity hacks:"]}),e.jsx(n.pre,{children:e.jsx(n.code,{children:`brand.0  →  lightest tint (backgrounds, hover states)
brand.1  →  light tint
brand.2  →  ...
brand.5  →  base color (your brandColor lands here)
brand.6  →  primary shade (default for filled components)
brand.7  →  darker shade
brand.9  →  darkest shade (text on light backgrounds)
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"pre-built-client-themes",children:"Pre-Built Client Themes"}),e.jsxs(n.p,{children:["Three example themes ship in ",e.jsx(n.code,{children:"themes/clients/"}),":"]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px",margin:"24px 0"},children:[e.jsxs("div",{style:{border:"2px solid #D4AF37",borderRadius:"12px",padding:"16px",textAlign:"center"},children:[e.jsx("div",{style:{width:"48px",height:"48px",background:"#D4AF37",borderRadius:"50%",margin:"0 auto 8px"}}),e.jsx("strong",{children:"Default (Gold)"}),e.jsx("div",{style:{fontSize:"13px",color:"#666"},children:"#D4AF37"}),e.jsx("div",{style:{fontSize:"12px",color:"#999",marginTop:"4px"},children:"Ethiopian heritage"})]}),e.jsxs("div",{style:{border:"2px solid #2C5530",borderRadius:"12px",padding:"16px",textAlign:"center"},children:[e.jsx("div",{style:{width:"48px",height:"48px",background:"#2C5530",borderRadius:"50%",margin:"0 auto 8px"}}),e.jsx("strong",{children:"Forest (Green)"}),e.jsx("div",{style:{fontSize:"13px",color:"#666"},children:"#2C5530"}),e.jsx("div",{style:{fontSize:"12px",color:"#999",marginTop:"4px"},children:"Nature & growth"})]}),e.jsxs("div",{style:{border:"2px solid #C44536",borderRadius:"12px",padding:"16px",textAlign:"center"},children:[e.jsx("div",{style:{width:"48px",height:"48px",background:"#C44536",borderRadius:"50%",margin:"0 auto 8px"}}),e.jsx("strong",{children:"Rust (Red)"}),e.jsx("div",{style:{fontSize:"13px",color:"#666"},children:"#C44536"}),e.jsx("div",{style:{fontSize:"12px",color:"#999",marginTop:"4px"},children:"Warm & bold"})]})]}),e.jsx(n.p,{children:"Use these as references when creating new client themes."}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"live-preview",children:"Live Preview"}),e.jsxs(n.p,{children:["Visit ",e.jsx(n.strong,{children:e.jsx(n.a,{href:"http://localhost:3000/demo",rel:"nofollow",children:"/demo"})}),` to see theme switching in action.
The demo page includes a `,e.jsx(n.code,{children:"SegmentedControl"}),` that swaps between Gold, Forest, Rust, and Earth
themes — all 23 atoms recolor instantly.`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"advanced-multi-tenant-runtime-theming",children:"Advanced: Multi-Tenant Runtime Theming"}),e.jsx(n.p,{children:"For SaaS platforms serving multiple tenants, themes can be swapped at runtime:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Dynamic theme based on tenant
const tenantThemes = {
  'startup-a': createClientTheme({ brandColor: '#FF6B35' }),
  'startup-b': createClientTheme({ brandColor: '#6366F1' }),
  'startup-c': createClientTheme({ brandColor: '#059669' }),
};

function App({ tenantId }: { tenantId: string }) {
  const theme = tenantThemes[tenantId] ?? createClientTheme();

  return (
    <MantineProvider theme={theme}>
      <YourApp />
    </MantineProvider>
  );
}
`})}),e.jsx(n.p,{children:"No rebuild required. No CSS overrides. Just swap the theme object."}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"workflow-comparison",children:"Workflow Comparison"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",margin:"24px 0"},children:[e.jsxs("div",{style:{background:"#fee2e2",borderRadius:"12px",padding:"20px"},children:[e.jsx("strong",{style:{color:"#991b1b"},children:"Without SemEnaWerk"}),e.jsxs("ul",{style:{fontSize:"14px",color:"#555",paddingLeft:"20px",marginBottom:0},children:[e.jsx("li",{children:"Design from scratch — 1 week"}),e.jsx("li",{children:"Build components — 1 week"}),e.jsx("li",{children:"Integrate & test — 1 week"}),e.jsxs("li",{children:["Total: ",e.jsx("strong",{children:"3+ weeks"})]})]})]}),e.jsxs("div",{style:{background:"#dcfce7",borderRadius:"12px",padding:"20px"},children:[e.jsx("strong",{style:{color:"#166534"},children:"With SemEnaWerk"}),e.jsxs("ul",{style:{fontSize:"14px",color:"#555",paddingLeft:"20px",marginBottom:0},children:[e.jsx("li",{children:"Clone template — 1 minute"}),e.jsx("li",{children:"Create client theme — 5 minutes"}),e.jsx("li",{children:"Customize content — 2-3 hours"}),e.jsxs("li",{children:["Total: ",e.jsx("strong",{children:"half a day"})]})]})]})]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"checklist-for-new-client-sites",children:"Checklist for New Client Sites"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["[ ] Clone ",e.jsx(n.code,{children:"semenawerk-master-template"})]}),`
`,e.jsxs(n.li,{children:["[ ] Create ",e.jsx(n.code,{children:"themes/clients/[client-name].ts"})," with their brand color"]}),`
`,e.jsxs(n.li,{children:["[ ] Update ",e.jsx(n.code,{children:"app/layout.tsx"})," to use the new theme"]}),`
`,e.jsx(n.li,{children:"[ ] Replace content (copy, images, logo)"}),`
`,e.jsx(n.li,{children:"[ ] Test on mobile (Ethiopian market priority)"}),`
`,e.jsx(n.li,{children:"[ ] Deploy"}),`
`]}),e.jsx(n.hr,{}),e.jsx("div",{style:{textAlign:"center",padding:"24px 0",color:"#666",fontSize:"14px"},children:e.jsx(n.p,{children:"One template. Infinite brands. Ship fast."})})]})]})}function h(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{h as default};
