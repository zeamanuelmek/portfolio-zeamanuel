import{j as e,d as n}from"./iframe-B9BJqu6d.js";import"./Button-DwqnNDR6.js";import"./Input-Do8NMghM.js";import"./TextArea-DRAn4Ts4.js";import"./Select-BGPBIup-.js";import"./Checkbox-CqoC1Exu.js";import"./Radio-CG_NFvxn.js";import"./Switch-CcnjTQuD.js";import"./Slider-Day5tWhq.js";import{B as h}from"./Badge-sA5cXLIZ.js";import"./Card-DtPqvK_N.js";import"./Avatar-D2aAznpT.js";import"./Image-DucVnRPS.js";import"./Divider-y02dhm4n.js";import"./Icon-BiHqG3VD.js";import{C as g}from"./Container-BuIkP306.js";import"./Stack-jC5Moorz.js";import{G as p}from"./Group-RWrop04D.js";import"./Grid-CsAQ84Uo.js";import{H as f}from"./Heading-C-Vlo7Fx.js";import{T as r}from"./Text-BTHSitow.js";import"./Link-B76xZzt4.js";import"./Alert-C7kZFWyV.js";import"./Loader-C6gCMyQ7.js";import"./RotatingText-BM6ABw1q.js";import"./ScrollReveal-DbaJV_ME.js";import"./StaggerGroup-Cyfz_Syu.js";import"./ParallaxLayer-WUPF_Kao.js";import"./AnimatedCounter-CF-NcSBM.js";import{M as x}from"./MagneticElement-D-Ujmxw4.js";import{T as o}from"./Text-CSoEI4MQ.js";import{B as u}from"./Button-BZIRSy9J.js";import"./preload-helper-PPVm8Dsz.js";import"./polymorphic-factory-B38yjnoz.js";import"./InputBase-Do1NeyG7.js";import"./Input-BuZp05Ay.js";import"./CloseButton-BnUzdrEK.js";import"./UnstyledButton-DkrSQbAm.js";import"./DirectionProvider-D56X0qNl.js";import"./index-hXcUJGPb.js";import"./use-merged-ref-6g4MH8R8.js";import"./Transition-Bb3Tv-9Y.js";import"./create-safe-context-DliEnmUg.js";import"./use-uncontrolled-CCehXbBN.js";import"./CheckIcon-Bbl4f29v.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./InputsGroupFieldset-Db5G0Zux.js";import"./Badge--6N5_VeE.js";import"./Paper-DOhuRlTg.js";import"./Stack-C9852h35.js";import"./Group-BevGUIxM.js";import"./Title-WVNpPliK.js";import"./IconX-Bmzros4I.js";import"./createReactComponent-C2aEuSvQ.js";import"./IconCheck-BArXFSiY.js";import"./Loader-DZfoLsgY.js";import"./use-in-view-DUtWkbiw.js";import"./MotionConfigContext-DNPWTmP9.js";import"./proxy-BzSxHJRt.js";import"./use-motion-value-B6044a5a.js";const{typography:y}=n,w=`
@keyframes heroFadeSlideUp {
  0% {
    opacity: 0;
    transform: translateY(24px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes heroPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.hero-profile-img {
  transition: box-shadow 400ms ease, transform 400ms ease;
}
.hero-profile-img:hover {
  box-shadow: 0 6px 32px rgba(212,175,55,0.3) !important;
  transform: scale(1.04);
}

.hero-section {
  transition: background-color 400ms ease;
}
`,l={backgroundImage:"linear-gradient(135deg, var(--theme-gold-from), var(--theme-gold-to))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"};function t({children:s,delay:c,style:d}){return e.jsx("div",{style:{opacity:0,animation:`heroFadeSlideUp 700ms cubic-bezier(0.16, 1, 0.3, 1) ${c}ms forwards`,...d},children:s})}function m({profileImageSrc:s="/images/profile.jpg"}){return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:w}),e.jsx("section",{className:"hero-section",style:{width:"100%",backgroundColor:"var(--theme-bg-page)",paddingTop:"clamp(148px, 14vw, 200px)",paddingBottom:"clamp(64px, 8vh, 100px)"},children:e.jsxs(g,{children:[e.jsx(t,{delay:0,children:e.jsxs(f,{order:1,style:{fontSize:"clamp(2.25rem, 4.5vw + 0.5rem, 4.25rem)",lineHeight:1.15,letterSpacing:"-0.02em"},children:[e.jsx(o,{component:"span",inherit:!0,fw:400,style:{color:"var(--theme-text-secondary)",transition:"color 400ms ease"},children:"Hello, I'm"})," ",e.jsx("img",{src:s,alt:"Zeamanuel's profile",className:"hero-profile-img",width:72,height:72,style:{width:"clamp(48px, 4.5vw + 12px, 72px)",height:"clamp(48px, 4.5vw + 12px, 72px)",borderRadius:"clamp(10px, 1.2vw, 16px)",border:`2px solid ${n.colors.brand.gold}73`,objectFit:"cover",objectPosition:"center top",display:"inline-block",verticalAlign:"middle",margin:"0 clamp(6px, 0.8vw, 14px)",boxShadow:n.shadows.goldGlow}}),e.jsx(o,{component:"span",inherit:!0,fw:700,style:l,children:"Zeamanuel!"})]})}),e.jsx(t,{delay:150,style:{marginTop:"clamp(10px, 1.5vh, 18px)"},children:e.jsxs(r,{ff:y.fontFamily.heading,style:{fontSize:"clamp(1.5rem, 2.8vw + 0.4rem, 2.5rem)",lineHeight:1.2,letterSpacing:"-0.015em"},children:[e.jsxs(o,{component:"span",inherit:!0,fw:400,style:{color:"var(--theme-text-secondary)",transition:"color 400ms ease"},children:["I'm a"," "]}),e.jsx(o,{component:"span",inherit:!0,fw:700,style:l,children:"UX Systems Designer"})]})}),e.jsx(t,{delay:300,style:{marginTop:"clamp(14px, 2vh, 24px)"},children:e.jsxs(r,{lh:1.65,maw:"38rem",style:{fontSize:"clamp(0.875rem, 0.5vw + 0.7rem, 1.0625rem)",color:"var(--theme-text-secondary)",transition:"color 400ms ease"},children:["I turn ideas into"," ",e.jsx(o,{component:"span",inherit:!0,fw:500,style:{color:"var(--theme-text)",transition:"color 400ms ease"},children:"working prototypes"})," ","and"," ",e.jsx(o,{component:"span",inherit:!0,fw:500,style:{color:"var(--theme-text)",transition:"color 400ms ease"},children:"functional products"})," ","— crafting"," ",e.jsx(o,{component:"span",inherit:!0,fw:600,fs:"italic",style:{color:"var(--theme-gold)",transition:"color 400ms ease"},children:"AI-augmented solutions"})," ","that deliver"," ",e.jsx(o,{component:"span",inherit:!0,fw:500,style:{color:"var(--theme-text)",transition:"color 400ms ease"},children:"complete experiences"}),", not just pixels."]})}),e.jsx(t,{delay:450,style:{marginTop:"clamp(20px, 3vh, 36px)"},children:e.jsxs(p,{gap:14,wrap:"wrap",align:"center",children:[e.jsx(h,{variant:"outline",radius:"xl",size:"md",styles:{root:{borderColor:"var(--theme-badge-border)",backgroundColor:"var(--theme-badge-bg)",textTransform:"none",fontWeight:600,color:"var(--theme-gold)",transition:"background-color 400ms ease, border-color 400ms ease, color 400ms ease"}},leftSection:e.jsx("span",{style:{width:7,height:7,borderRadius:"50%",backgroundColor:n.colors.brand.forest,display:"inline-block",animation:"heroPulse 2.5s ease-in-out infinite"}}),children:"Available for Projects"}),e.jsx(r,{size:"sm",style:{letterSpacing:"0.03em",color:"var(--theme-text-secondary)",transition:"color 400ms ease"},children:"Based in Addis Ababa, Ethiopia"})]})}),e.jsx("div",{style:{marginTop:"clamp(32px, 5vh, 52px)"},children:e.jsx(t,{delay:550,children:e.jsxs(p,{gap:20,wrap:"wrap",align:"center",children:[e.jsx(x,{strength:.25,children:e.jsx(u,{component:"a",href:"#work",color:"gold",size:"sm",radius:9999,rightSection:e.jsx("span",{style:{fontSize:13,marginLeft:2},"aria-hidden":"true",children:"↓"}),styles:{root:{padding:"9px 22px",fontWeight:500,fontSize:"0.8125rem",flexShrink:0,height:"auto",letterSpacing:"0.01em"}},children:"View My Work"})}),e.jsx(r,{size:"sm",lh:1.6,style:{maxWidth:"clamp(200px, 30vw, 280px)",fontSize:"clamp(0.75rem, 0.3vw + 0.65rem, 0.8125rem)",color:"var(--theme-text-secondary)",transition:"color 400ms ease"},children:"Feel free to explore my portfolio and reach out—I'd love to connect."})]})})})]})})]})}m.__docgenInfo={description:"",methods:[],displayName:"HeroSection",props:{profileImageSrc:{required:!1,tsType:{name:"string"},description:"Path to profile image",defaultValue:{value:"'/images/profile.jpg'",computed:!1}}}};const Ce={title:"Blocks/HeroSection",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`
**What it does:** Left-aligned editorial portfolio hero with inline profile image, gold gradient name typography, and section label transition bar.

**Composition:** Heading, Text, Button, Badge, Group, Container atoms + ScrollReveal and MagneticElement animation wrappers.

**Ethiopian Design Context:** Gold gradient name typography, forest green availability badge, gold-accented section divider. Clean white background lets the gold accents breathe. All colors sourced from \`designTokens\`.

**Layout:** Auto-height (content-driven, not 100vh). Compact and confident — no wasted white space. Section label bar (01 / SELECTED WORK) creates a designed transition into the projects section.

**Responsive:** Name fits one line on desktop (~68px), wraps gracefully on mobile (~36px). Section label bar spans full width at all breakpoints.

**Accessibility:** Single h1 for name, semantic section element, profile image has descriptive alt text. Animations respect \`prefers-reduced-motion\`.
        `}}},tags:["autodocs"],argTypes:{profileImageSrc:{description:"Path to the profile photo displayed inline with the name",control:"text"}}},i={args:{profileImageSrc:"/images/profile.jpg"},parameters:{docs:{description:{story:"Full hero section as it appears on the portfolio homepage — compact height with section transition bar."}}}},a={args:{profileImageSrc:""},parameters:{docs:{description:{story:"Hero section with a missing/empty profile image path — shows the layout gracefully degrading."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    profileImageSrc: '/images/profile.jpg'
  },
  parameters: {
    docs: {
      description: {
        story: 'Full hero section as it appears on the portfolio homepage — compact height with section transition bar.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    profileImageSrc: ''
  },
  parameters: {
    docs: {
      description: {
        story: 'Hero section with a missing/empty profile image path — shows the layout gracefully degrading.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const Ie=["Default","WithoutProfileImage"];export{i as Default,a as WithoutProfileImage,Ie as __namedExportsOrder,Ce as default};
