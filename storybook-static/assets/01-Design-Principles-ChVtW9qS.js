import{j as e}from"./iframe-DSgyGHZ6.js";import{useMDXComponents as r}from"./index-Daod07PP.js";import{M as t}from"./blocks-ZpUjFyny.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DQUcR2cE.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Design Principles"}),`
`,e.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",fontFamily:"Inter, sans-serif"},children:[e.jsx(n.h1,{id:"design-principles",children:"Design Principles"}),e.jsx(n.p,{children:`The SemEnaWerk design system draws from Ethiopian cultural heritage to create interfaces that feel both
familiar and modern. Every design decision serves a purpose — rooted in culture, optimized for usability.`}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"ethiopian-cultural-elements",children:"Ethiopian Cultural Elements"}),e.jsx(n.h3,{id:"gold-d4af37--heritage--craftsmanship",children:"Gold (#D4AF37) — Heritage & Craftsmanship"}),e.jsx("div",{style:{borderLeft:"4px solid #D4AF37",paddingLeft:"16px",margin:"16px 0"},children:e.jsxs(n.p,{children:["Ethiopian gold represents centuries of craftsmanship and quality. In our system, gold is the ",e.jsx(n.strong,{children:`primary
action color`}),` — it signals "this is important, this is valuable." Used for primary buttons, active
states, and premium features.`]})}),e.jsx(n.p,{children:"Gold appears as:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Solid fills"})," — primary buttons, active badges"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Gradients"})," — headings with ",e.jsx(n.code,{children:"goldGradient"})," prop, decorative elements"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Glow effects"})," — hover states on cards via ",e.jsx(n.code,{children:"goldGlow"})," prop"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Borders"})," — focus rings, selected states"]}),`
`]}),e.jsx(n.h3,{id:"habesha-patterns--textile-heritage",children:"Habesha Patterns — Textile Heritage"}),e.jsx(n.p,{children:"The traditional woven patterns of Ethiopian textiles (habesha kemis) inspire our decorative elements:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Habesha Divider"})," — triple-line divider in green, gold, and red (Ethiopian flag colors)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Diamond Divider"})," — geometric motif inspired by textile weaving patterns"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Pattern backgrounds"})," — subtle geometric fills for section backgrounds"]}),`
`]}),e.jsxs(n.p,{children:["These elements are available through the ",e.jsx(n.code,{children:"Divider"})," component's ",e.jsx(n.code,{children:"habesha"})," and ",e.jsx(n.code,{children:"diamond"})," props."]}),e.jsx(n.h3,{id:"warm-earth-tones--the-ethiopian-landscape",children:"Warm Earth Tones — The Ethiopian Landscape"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"16px",margin:"16px 0"},children:[e.jsxs("div",{style:{background:"#FAF8F3",border:"1px solid #E8D5B7",borderRadius:"8px",padding:"16px"},children:[e.jsx("strong",{children:"Cream (#FAF8F3)"}),e.jsx("p",{style:{margin:"4px 0 0",fontSize:"14px",color:"#666"},children:"Page backgrounds — warm, inviting, never harsh white"})]}),e.jsxs("div",{style:{background:"#E8D5B7",borderRadius:"8px",padding:"16px"},children:[e.jsx("strong",{children:"Sand (#E8D5B7)"}),e.jsx("p",{style:{margin:"4px 0 0",fontSize:"14px",color:"#555"},children:"Secondary surfaces — cards, sidebars, subtle containers"})]}),e.jsxs("div",{style:{background:"#2C5530",borderRadius:"8px",padding:"16px",color:"white"},children:[e.jsx("strong",{children:"Forest (#2C5530)"}),e.jsx("p",{style:{margin:"4px 0 0",fontSize:"14px",color:"#ccc"},children:"Success states, growth indicators, nature connection"})]}),e.jsxs("div",{style:{background:"#C44536",borderRadius:"8px",padding:"16px",color:"white"},children:[e.jsx("strong",{children:"Rust (#C44536)"}),e.jsx("p",{style:{margin:"4px 0 0",fontSize:"14px",color:"#ccc"},children:"Warnings, destructive actions, warmth and urgency"})]})]}),e.jsxs(n.p,{children:["Our backgrounds use ",e.jsx(n.strong,{children:"cream (#FAF8F3)"}),` instead of pure white. This warmth reduces eye strain and
creates an inviting atmosphere — reflecting the hospitality central to Ethiopian culture.`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"interaction-patterns",children:"Interaction Patterns"}),e.jsx(n.h3,{id:"gold-glow-on-hover",children:"Gold Glow on Hover"}),e.jsxs(n.p,{children:["Primary interactive elements receive a ",e.jsx(n.strong,{children:"gold box-shadow lift"})," on hover:"]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
transform: translateY(-2px);
`})}),e.jsxs(n.p,{children:['This creates a "floating" effect that draws attention to interactive elements. Applied via the ',e.jsx(n.code,{children:"goldGlow"}),`
prop on the Card component — activates on hover automatically.`]}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Why gold glow?"}),` It creates a premium, tactile feel. Users perceive gold-glowing elements as more
valuable and interactive, increasing engagement with primary actions.`]}),e.jsx(n.h3,{id:"glass-morphism",children:"Glass Morphism"}),e.jsx(n.p,{children:"Navigation and overlay elements use subtle transparency:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`background: rgba(255, 255, 255, 0.8);
backdrop-filter: blur(10px);
`})}),e.jsx(n.p,{children:"This creates depth without heaviness — modern interfaces that feel light and spacious."}),e.jsx(n.h3,{id:"generous-border-radius",children:"Generous Border Radius"}),e.jsxs(n.p,{children:["Components default to ",e.jsx(n.code,{children:'radius="lg"'})," (buttons, inputs) and ",e.jsx(n.code,{children:'radius="xl"'}),` (cards). This creates a
friendly, approachable aesthetic that contrasts with sharp corporate designs.`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"typography-philosophy",children:"Typography Philosophy"}),e.jsx(n.h3,{id:"three-font-system",children:"Three-Font System"}),e.jsxs(n.p,{children:[`| Font | Role | Character |
|------|------|-----------|
| `,e.jsx(n.strong,{children:"Space Grotesk"}),` | Headings | Geometric, modern, distinctive |
| `,e.jsx(n.strong,{children:"Inter"}),` | Body text | Highly readable, neutral, professional |
| `,e.jsx(n.strong,{children:"JetBrains Mono"})," | Code/data | Technical, precise, monospaced |"]}),e.jsx(n.p,{children:`Space Grotesk was chosen for headings because its geometric forms echo the angular patterns in
Ethiopian art and architecture, while remaining thoroughly modern.`}),e.jsx(n.h3,{id:"scale--hierarchy",children:"Scale & Hierarchy"}),e.jsx(n.p,{children:"Headings use a deliberate size scale that creates clear visual hierarchy:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"h1: 2.5rem"})," — page titles, hero text"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"h2: 2rem"})," — section headers"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"h3: 1.5rem"})," — subsection headers"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"h4: 1.25rem"})," — card titles, feature names"]}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"component-philosophy",children:"Component Philosophy"}),e.jsx(n.h3,{id:"mantine-base--ethiopian-brand-layer",children:"Mantine Base + Ethiopian Brand Layer"}),e.jsx(n.p,{children:"Every component starts with a Mantine primitive and adds an Ethiopian design layer:"}),e.jsx(n.pre,{children:e.jsx(n.code,{children:`Mantine Button → gold color default + lg radius → SemEnaWerk Button
Mantine Card   → goldGlow hover + xl radius    → SemEnaWerk Card
Mantine Alert  → semantic color mapping         → SemEnaWerk Alert
`})}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Why Mantine?"}),` It provides accessible, tested, production-ready components. We add brand identity
on top — not reinventing the wheel, but painting it gold.`]}),e.jsx(n.h3,{id:"single-responsibility",children:"Single Responsibility"}),e.jsxs(n.p,{children:["Each atom does ",e.jsx(n.strong,{children:"one thing well"}),":"]}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Button"})," handles clicks — never layout"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Card"})," contains content — never navigation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Container"})," constrains width — never decorates"]}),`
`]}),e.jsx(n.p,{children:"This makes components predictable, composable, and easy to test."}),e.jsx(n.h3,{id:"theme-driven-not-hardcoded",children:"Theme-Driven, Not Hardcoded"}),e.jsx(n.p,{children:"Every color, spacing value, and shadow comes from the theme system:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Good — uses theme tokens
<Button color="gold">Pay with TeleBirr</Button>
<Card style={{ boxShadow: theme.other.goldGlow }}>

// Bad — hardcoded values
<Button style={{ background: '#D4AF37' }}>
<Card style={{ boxShadow: '0 4px 20px rgba(212,175,55,0.3)' }}>
`})}),e.jsxs(n.p,{children:["This enables ",e.jsx(n.strong,{children:"5-minute theme swaps"})," — change one file, entire site recolors."]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),e.jsx(n.h3,{id:"commitments",children:"Commitments"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Color contrast"})," — all text meets WCAG 2.1 AA (4.5:1 for body, 3:1 for large text)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus indicators"})," — visible gold focus rings on all interactive elements"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Screen readers"})," — semantic HTML, ARIA labels on icon-only buttons"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keyboard navigation"})," — all components are fully keyboard accessible via Mantine"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Motion"})," — respects ",e.jsx(n.code,{children:"prefers-reduced-motion"})," for animations"]}),`
`]}),e.jsx(n.h3,{id:"ethiopian-context",children:"Ethiopian Context"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Mobile-first"})," — the Ethiopian market is mobile-dominant; every component is designed for touch"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Low bandwidth"})," — minimal JavaScript, optimized assets, no heavy animations"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multilingual-ready"})," — components handle Amharic text (right-to-left not needed, but long characters supported)"]}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"design-decision-log",children:"Design Decision Log"}),e.jsxs(n.p,{children:[`| Decision | Rationale |
|----------|-----------|
| Cream background over white | Warmer, less clinical, reflects Ethiopian hospitality |
| Gold as primary color | Cultural significance + premium perception |
| `,e.jsx(n.code,{children:'radius="lg"'}),` default | Friendly, modern, approachable |
| Space Grotesk headings | Geometric forms echo Ethiopian patterns |
| Habesha divider patterns | Cultural identity in micro-interactions |
| Mobile-first approach | Ethiopian market reality |`]}),e.jsx(n.hr,{}),e.jsx("div",{style:{textAlign:"center",padding:"24px 0",color:"#666",fontSize:"14px"},children:e.jsx(n.p,{children:"Every design choice tells a story. Ours is Ethiopian."})})]})]})}function h(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{h as default};
