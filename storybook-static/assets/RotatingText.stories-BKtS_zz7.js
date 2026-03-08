import{j as r}from"./iframe-B9BJqu6d.js";import{R as n}from"./RotatingText-BM6ABw1q.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Atoms/RotatingText",component:n,parameters:{layout:"padded",backgrounds:{default:"dark"},docs:{description:{component:`
**When to use:**
Animated text that cycles through a list of phrases with a slide-up transition. Use for hero sections, taglines, or any place where rotating copy adds visual interest.

**Ethiopian Design Context:**
Displays in the brand gold gradient (linear-gradient #D4AF37 → #E8C84A) with italic semibold styling. Pairs well with dimmed lead-in text like "who ships" or "we build".

**Common Patterns:**
- Hero section rotating taglines
- Service descriptions cycling through offerings
- Feature highlights on landing pages

**Accessibility:**
Screen readers will read the current visible phrase. The animation is CSS-only (no JS layout thrashing). Consider \`prefers-reduced-motion\` for users who disable animations.
        `}}},tags:["autodocs"],argTypes:{phrases:{description:"Array of strings to cycle through",control:"object"},interval:{description:"Time in milliseconds between phrase changes (default: 3000)",control:{type:"number",min:500,max:1e4,step:500}},className:{description:"Additional CSS class name for custom styling",control:"text"}},decorators:[o=>r.jsxs("div",{style:{fontSize:24,fontFamily:"'Inter', sans-serif",color:"#9A9A9A"},children:["who ships ",r.jsx(o,{})]})]},e={args:{phrases:["working prototypes","functional products","AI-augmented solutions","complete experiences"],interval:3e3},parameters:{docs:{description:{story:"Default rotating text with portfolio hero phrases, cycling every 3 seconds."}}}},s={args:{phrases:["branding","web apps","mobile apps","design systems"],interval:3e3},parameters:{docs:{description:{story:"Custom phrases for a service offerings context."}}}},t={args:{phrases:["fast","smooth","polished"],interval:1e3},parameters:{docs:{description:{story:"Faster 1-second interval for high-energy contexts."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    phrases: ['working prototypes', 'functional products', 'AI-augmented solutions', 'complete experiences'],
    interval: 3000
  },
  parameters: {
    docs: {
      description: {
        story: 'Default rotating text with portfolio hero phrases, cycling every 3 seconds.'
      }
    }
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    phrases: ['branding', 'web apps', 'mobile apps', 'design systems'],
    interval: 3000
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom phrases for a service offerings context.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    phrases: ['fast', 'smooth', 'polished'],
    interval: 1000
  },
  parameters: {
    docs: {
      description: {
        story: 'Faster 1-second interval for high-energy contexts.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};const l=["Default","CustomPhrases","FastInterval"];export{s as CustomPhrases,e as Default,t as FastInterval,l as __namedExportsOrder,p as default};
