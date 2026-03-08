import{a as r,j as e,d as F}from"./iframe-B9BJqu6d.js";import{c as w}from"./createReactComponent-C2aEuSvQ.js";import"./preload-helper-PPVm8Dsz.js";const z=[["path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008",key:"svg-0"}]],M=w("outline","moon","Moon",z);const A=[["path",{d:"M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",key:"svg-1"}]],E=w("outline","sun","Sun",A),N=r.createContext(null);function v(){const o=r.useContext(N);if(!o)throw new Error("useTheme must be used within a ThemeProvider");return o}const L=`
.theme-toggle {
  position: relative;
  width: 60px;
  height: 30px;
  border-radius: 9999px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.06);
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition: border-color 300ms ease, box-shadow 300ms ease;
}
.theme-toggle:hover {
  border-color: rgba(212,175,55,0.4);
  box-shadow: 0 0 12px rgba(212,175,55,0.12);
}

/* Sliding pill indicator */
.theme-toggle-pill {
  position: absolute;
  top: 2px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(212,175,55,0.18);
  transition: left 350ms cubic-bezier(0.16, 1, 0.3, 1);
}
.theme-toggle-pill--light {
  left: 2px;
}
.theme-toggle-pill--dark {
  left: 32px;
}

/* Icon containers */
.theme-toggle-icons {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;
}
.theme-toggle-icon-wrap {
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  transition: opacity 300ms ease;
}
.theme-toggle-icon-wrap--active {
  opacity: 1;
}
.theme-toggle-icon-wrap--inactive {
  opacity: 0.35;
}
`;function b(){const{mode:o,toggle:s}=v(),t=o==="dark";return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:L}),e.jsxs("button",{className:"theme-toggle",onClick:s,role:"switch","aria-checked":t,"aria-label":t?"Switch to light mode":"Switch to dark mode",title:t?"Switch to light mode":"Switch to dark mode",children:[e.jsx("span",{className:`theme-toggle-pill ${t?"theme-toggle-pill--dark":"theme-toggle-pill--light"}`}),e.jsxs("span",{className:"theme-toggle-icons",children:[e.jsx("span",{className:`theme-toggle-icon-wrap ${t?"theme-toggle-icon-wrap--inactive":"theme-toggle-icon-wrap--active"}`,children:e.jsx(E,{size:14,color:"#D4AF37",stroke:2})}),e.jsx("span",{className:`theme-toggle-icon-wrap ${t?"theme-toggle-icon-wrap--active":"theme-toggle-icon-wrap--inactive"}`,children:e.jsx(M,{size:14,color:"#D4AF37",stroke:2})})]})]})]})}b.__docgenInfo={description:"",methods:[],displayName:"ThemeToggle"};const T=[{label:"Work",href:"/work"},{label:"About",href:"/about"},{label:"Contact",href:"/contact"},{label:"Upwork",href:"#upwork",dimmed:!0}],{typography:c,colors:i}=F;function W({isOpen:o,onClick:s}){const t={width:22,height:2,backgroundColor:i.text.sand,borderRadius:1,transition:"all 300ms cubic-bezier(0.4, 0, 0.2, 1)",transformOrigin:"center"};return e.jsxs("button",{onClick:s,"aria-label":o?"Close navigation menu":"Open navigation menu","aria-expanded":o,style:{background:"none",border:"none",cursor:"pointer",padding:8,display:"flex",flexDirection:"column",gap:5,alignItems:"center",justifyContent:"center",zIndex:52,position:"relative"},children:[e.jsx("span",{style:{...t,transform:o?"translateY(7px) rotate(45deg)":"none"}}),e.jsx("span",{style:{...t,opacity:o?0:1}}),e.jsx("span",{style:{...t,transform:o?"translateY(-7px) rotate(-45deg)":"none"}})]})}function j({links:o=T}){const{mode:s}=v(),t=s==="dark",[d,C]=r.useState(!1),[l,u]=r.useState(!1),[S,x]=r.useState(null),a=t?{bg:"#121212",linkColor:i.text.sand,linkDimmed:"rgba(255,255,255,0.35)",hoverColor:i.brand.gold,infoColor:"rgba(255,255,255,0.3)",emailColor:i.brand.gold}:{bg:"#FAF8F3",linkColor:"#2C2C2C",linkDimmed:"rgba(0,0,0,0.3)",hoverColor:"#8B6914",infoColor:"rgba(0,0,0,0.35)",emailColor:"#8B6914"},m=r.useCallback(()=>{C(window.innerWidth<768)},[]);r.useEffect(()=>(m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)),[m]),r.useEffect(()=>{d||u(!1)},[d]),r.useEffect(()=>(l?(document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden"):(document.documentElement.style.overflow="",document.body.style.overflow=""),()=>{document.documentElement.style.overflow="",document.body.style.overflow=""}),[l]);const y=d?{position:"fixed",top:16,left:16,right:16,zIndex:51,background:"rgba(30, 30, 30, 0.7)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:9999,padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"space-between"}:{position:"fixed",top:16,left:"50%",transform:"translateX(-50%)",zIndex:50,background:"rgba(30, 30, 30, 0.7)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:9999,padding:"10px 24px",display:"flex",alignItems:"center",gap:32},k={width:34,height:34,borderRadius:"50%",backgroundColor:i.brand.gold,color:i.background.dark,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:c.fontFamily.heading,fontWeight:700,fontSize:16,flexShrink:0,textDecoration:"none"},I={color:i.text.sand,textDecoration:"none",fontSize:14,fontFamily:c.fontFamily.body,fontWeight:400,transition:"color 200ms ease",background:"none",border:"none",cursor:"pointer",padding:0};return d?e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          @keyframes menuLinkIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}),e.jsxs("nav",{role:"navigation",style:y,children:[e.jsx("a",{href:"#",style:k,children:"Z"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[e.jsx(b,{}),e.jsx(W,{isOpen:l,onClick:()=>u(!l)})]})]}),l&&e.jsxs("div",{style:{position:"fixed",inset:0,zIndex:50,background:a.bg,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:0,overflow:"hidden"},children:[e.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:o.map((n,D)=>e.jsx("a",{href:n.href,onClick:()=>u(!1),style:{color:n.dimmed?a.linkDimmed:a.linkColor,textDecoration:"none",fontFamily:c.fontFamily.heading,fontSize:"clamp(2rem, 8vw, 3.5rem)",fontWeight:600,letterSpacing:"-0.02em",lineHeight:1.3,animation:`menuLinkIn 400ms ${100+D*80}ms both cubic-bezier(0.4, 0, 0.2, 1)`,transition:"color 200ms ease"},onMouseEnter:f=>{f.currentTarget.style.color=a.hoverColor},onMouseLeave:f=>{f.currentTarget.style.color=n.dimmed?a.linkDimmed:a.linkColor},children:n.label},n.href))}),e.jsxs("div",{style:{position:"absolute",bottom:48,left:0,right:0,display:"flex",flexDirection:"column",alignItems:"center",gap:8,animation:"menuLinkIn 500ms 400ms both ease"},children:[e.jsx("span",{style:{fontSize:"0.75rem",fontFamily:c.fontFamily.mono,color:a.infoColor,letterSpacing:"0.1em",textTransform:"uppercase"},children:"Available for projects"}),e.jsx("a",{href:"mailto:hello@zeamanuel.com",style:{fontSize:"0.875rem",fontFamily:c.fontFamily.body,color:a.emailColor,textDecoration:"none"},children:"hello@zeamanuel.com"})]})]})]}):e.jsxs("nav",{role:"navigation",style:y,children:[e.jsx("a",{href:"#",style:k,children:"Z"}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:28},children:o.map(n=>e.jsx("a",{href:n.href,style:{...I,...n.dimmed?{color:"#9A9A9A"}:{},...S===n.href?{color:i.brand.gold}:{}},onMouseEnter:()=>x(n.href),onMouseLeave:()=>x(null),children:n.label},n.href))}),e.jsx(b,{})]})}j.__docgenInfo={description:"",methods:[],displayName:"Navigation",props:{links:{required:!1,tsType:{name:"Array",elements:[{name:"NavLink"}],raw:"NavLink[]"},description:"Navigation links to display",defaultValue:{value:`[
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Upwork', href: '#upwork', dimmed: true },
]`,computed:!1}}}};const H={title:"Molecules/Navigation",component:j,parameters:{layout:"fullscreen",backgrounds:{default:"dark"},docs:{description:{component:`
**When to use:**
Glassmorphic sticky navigation bar for portfolio and landing pages. Appears as a centered pill-shaped bar on desktop and a full-width bar with hamburger menu on mobile.

**Ethiopian Design Context:**
Features a gold "Z" logo circle (#D4AF37 background) as the brand mark. Links use sand color (#E8D5B7) with gold hover states. The glassmorphic effect (backdrop-blur + semi-transparent dark bg) creates depth while maintaining readability over dark hero sections.

**Common Patterns:**
- Portfolio navigation with section anchors (Work, About, Contact)
- External links (Upwork, LinkedIn) rendered with dimmed styling
- Mobile hamburger menu with animated line-to-X transition

**Accessibility:**
Uses \`role="navigation"\` on the nav element. Hamburger button has \`aria-label\` and \`aria-expanded\` for screen readers. Mobile menu closes on link click for single-page navigation.
        `}}},tags:["autodocs"],argTypes:{links:{description:"Array of navigation links with label, href, and optional dimmed flag",control:"object"}}},g={args:{},parameters:{docs:{description:{story:"Default navigation with Work, About, Contact, and Upwork links."}}}},p={args:{links:[{label:"Projects",href:"#projects"},{label:"Services",href:"#services"},{label:"Blog",href:"#blog"},{label:"GitHub",href:"#github",dimmed:!0}]},parameters:{docs:{description:{story:"Navigation with custom link set for a different page layout."}}}},h={args:{},parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Mobile viewport showing the hamburger menu layout. Click the hamburger to see the dropdown."}}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Default navigation with Work, About, Contact, and Upwork links.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    links: [{
      label: 'Projects',
      href: '#projects'
    }, {
      label: 'Services',
      href: '#services'
    }, {
      label: 'Blog',
      href: '#blog'
    }, {
      label: 'GitHub',
      href: '#github',
      dimmed: true
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation with custom link set for a different page layout.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Mobile viewport showing the hamburger menu layout. Click the hamburger to see the dropdown.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};const U=["Default","WithCustomLinks","MobileView"];export{g as Default,h as MobileView,p as WithCustomLinks,U as __namedExportsOrder,H as default};
