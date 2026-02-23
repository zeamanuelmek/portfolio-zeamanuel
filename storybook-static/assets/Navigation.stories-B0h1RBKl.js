import{a,j as e,d as o}from"./iframe-DSgyGHZ6.js";import"./preload-helper-PPVm8Dsz.js";const h=[{label:"Work",href:"#work"},{label:"About",href:"#about"},{label:"Contact",href:"#contact"},{label:"Upwork",href:"#upwork",dimmed:!0}],n={nav:{position:"fixed",top:16,left:"50%",transform:"translateX(-50%)",zIndex:50,background:"rgba(30, 30, 30, 0.7)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:9999,padding:"10px 24px",display:"flex",alignItems:"center",gap:32},navMobile:{position:"fixed",top:16,left:16,right:16,zIndex:50,background:"rgba(30, 30, 30, 0.7)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:9999,padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"space-between"},logo:{width:34,height:34,borderRadius:"50%",backgroundColor:o.colors.brand.gold,color:o.colors.background.dark,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:o.typography.fontFamily.heading,fontWeight:700,fontSize:16,flexShrink:0,textDecoration:"none"},linksContainer:{display:"flex",alignItems:"center",gap:28},link:{color:o.colors.text.sand,textDecoration:"none",fontSize:14,fontFamily:o.typography.fontFamily.body,fontWeight:400,transition:"color 200ms ease",background:"none",border:"none",cursor:"pointer",padding:0},linkDimmed:{color:"#9A9A9A"},dropdown:{position:"fixed",top:72,left:16,right:16,zIndex:49,background:"rgba(30, 30, 30, 0.85)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:20,padding:"20px 24px",display:"flex",flexDirection:"column",gap:16,transition:"opacity 300ms ease, transform 300ms ease"},dropdownLink:{color:o.colors.text.sand,textDecoration:"none",fontSize:16,fontFamily:o.typography.fontFamily.body,fontWeight:400,background:"none",border:"none",cursor:"pointer",padding:0,textAlign:"left"}},k=`
@keyframes navHamburgerLine1Open {
  to { transform: translateY(7px) rotate(45deg); }
}
@keyframes navHamburgerLine3Open {
  to { transform: translateY(-7px) rotate(-45deg); }
}
`;function x({isOpen:t,onClick:i}){const s={width:22,height:2,backgroundColor:o.colors.text.sand,borderRadius:1,transition:"all 300ms cubic-bezier(0.4, 0, 0.2, 1)",transformOrigin:"center"};return e.jsxs("button",{onClick:i,"aria-label":t?"Close navigation menu":"Open navigation menu","aria-expanded":t,style:{background:"none",border:"none",cursor:"pointer",padding:8,display:"flex",flexDirection:"column",gap:5,alignItems:"center",justifyContent:"center"},children:[e.jsx("span",{style:{...s,transform:t?"translateY(7px) rotate(45deg)":"none"}}),e.jsx("span",{style:{...s,opacity:t?0:1}}),e.jsx("span",{style:{...s,transform:t?"translateY(-7px) rotate(-45deg)":"none"}})]})}function b({links:t=h}){const[i,s]=a.useState(!1),[u,m]=a.useState(!1),[f,g]=a.useState(null),l=a.useCallback(()=>{s(window.innerWidth<768)},[]);return a.useEffect(()=>(l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)),[l]),a.useEffect(()=>{i||m(!1)},[i]),i?e.jsxs(e.Fragment,{children:[e.jsx("style",{children:k}),e.jsxs("nav",{role:"navigation",style:n.navMobile,children:[e.jsx("a",{href:"#",style:n.logo,children:"Z"}),e.jsx(x,{isOpen:u,onClick:()=>m(!u)})]}),u&&e.jsx("div",{style:n.dropdown,children:t.map(r=>e.jsx("a",{href:r.href,onClick:()=>m(!1),style:{...n.dropdownLink,...r.dimmed?n.linkDimmed:{}},children:r.label},r.href))})]}):e.jsxs("nav",{role:"navigation",style:n.nav,children:[e.jsx("a",{href:"#",style:n.logo,children:"Z"}),e.jsx("div",{style:n.linksContainer,children:t.map(r=>e.jsx("a",{href:r.href,style:{...n.link,...r.dimmed?n.linkDimmed:{},...f===r.href?{color:o.colors.brand.gold}:{}},onMouseEnter:()=>g(r.href),onMouseLeave:()=>g(null),children:r.label},r.href))})]})}b.__docgenInfo={description:"",methods:[],displayName:"Navigation",props:{links:{required:!1,tsType:{name:"Array",elements:[{name:"NavLink"}],raw:"NavLink[]"},description:"Navigation links to display",defaultValue:{value:`[
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Upwork', href: '#upwork', dimmed: true },
]`,computed:!1}}}};const w={title:"Molecules/Navigation",component:b,parameters:{layout:"fullscreen",backgrounds:{default:"dark"},docs:{description:{component:`
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
        `}}},tags:["autodocs"],argTypes:{links:{description:"Array of navigation links with label, href, and optional dimmed flag",control:"object"}}},d={args:{},parameters:{docs:{description:{story:"Default navigation with Work, About, Contact, and Upwork links."}}}},c={args:{links:[{label:"Projects",href:"#projects"},{label:"Services",href:"#services"},{label:"Blog",href:"#blog"},{label:"GitHub",href:"#github",dimmed:!0}]},parameters:{docs:{description:{story:"Navigation with custom link set for a different page layout."}}}},p={args:{},parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Mobile viewport showing the hamburger menu layout. Click the hamburger to see the dropdown."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Default navigation with Work, About, Contact, and Upwork links.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const j=["Default","WithCustomLinks","MobileView"];export{d as Default,p as MobileView,c as WithCustomLinks,j as __namedExportsOrder,w as default};
