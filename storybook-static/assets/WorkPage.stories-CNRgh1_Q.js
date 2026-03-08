import{a as m,j as e,d as v}from"./iframe-B9BJqu6d.js";import{p as h}from"./projects-D7-SkX0S.js";import"./preload-helper-PPVm8Dsz.js";const{typography:i,radius:p,colors:b}=v,u={backgroundImage:"linear-gradient(135deg, var(--theme-gold-from), var(--theme-gold-to))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},k=[{label:"All",value:"all"},{label:"Mobile App",value:"mobile-app"},{label:"E-Commerce",value:"e-commerce"},{label:"Web App",value:"web-app"},{label:"Framer",value:"framer"}],w=`
.work-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2rem, 4vw, 3rem);
}

@media (min-width: 640px) {
  .work-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .work-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.work-card-thumb {
  transition: box-shadow 400ms ease, border-color 400ms ease;
}
.work-card:hover .work-card-thumb {
  box-shadow: var(--theme-card-hover-shadow);
  border-color: ${b.brand.gold}33;
}
.work-card:hover .work-card-img {
  transform: scale(1.03);
}
.work-card:hover .work-card-title {
  color: var(--theme-gold) !important;
}
.work-card:hover .work-card-arrow {
  transform: translateX(4px);
  color: var(--theme-gold) !important;
}

.work-filter-chip {
  cursor: pointer;
  border: none;
  outline: none;
  transition: background-color 250ms ease, color 250ms ease, border-color 250ms ease, box-shadow 250ms ease;
}
.work-filter-chip:focus-visible {
  box-shadow: 0 0 0 2px var(--theme-gold);
}
`;function f({children:r,delay:n=0,style:t}){const s=m.useRef(null),[l,a]=m.useState(!1);return m.useEffect(()=>{const o=s.current;if(!o)return;const g=new IntersectionObserver(([x])=>{x.isIntersecting&&(a(!0),g.unobserve(o))},{threshold:.1});return g.observe(o),()=>g.disconnect()},[]),e.jsx("div",{ref:s,style:{opacity:l?1:0,transform:l?"translateY(0)":"translateY(28px)",transition:`opacity 650ms cubic-bezier(0.16, 1, 0.3, 1) ${n}ms, transform 650ms cubic-bezier(0.16, 1, 0.3, 1) ${n}ms`,...t},children:r})}function j({project:r,index:n}){return e.jsx(f,{delay:n%3*80,children:e.jsxs("a",{href:`/work/${r.id}`,className:"work-card",style:{display:"block",cursor:"pointer",textDecoration:"none",transition:"transform 400ms cubic-bezier(0.16, 1, 0.3, 1)"},onMouseEnter:t=>{t.currentTarget.style.transform="translateY(-6px)"},onMouseLeave:t=>{t.currentTarget.style.transform="translateY(0)"},children:[e.jsx("div",{className:"work-card-thumb",style:{width:"100%",aspectRatio:"16 / 10",borderRadius:p["2xl"],overflow:"hidden",backgroundColor:"var(--theme-card-bg)",border:"1px solid var(--theme-card-border)",boxShadow:"var(--theme-card-shadow)",position:"relative"},children:e.jsx("img",{src:r.thumbnail,alt:r.title,className:"work-card-img",style:{width:"100%",height:"100%",objectFit:"cover",display:"block",transition:"transform 600ms cubic-bezier(0.16, 1, 0.3, 1)"},onError:t=>{const s=t.currentTarget;s.style.display="none",s.parentElement&&(s.parentElement.style.background=`linear-gradient(135deg, var(--theme-card-bg) 0%, var(--theme-tag-bg) 50%, ${b.brand.gold}14 100%)`)}})}),e.jsxs("div",{style:{marginTop:14,display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{fontFamily:i.fontFamily.body,fontSize:"0.6875rem",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",...u},children:r.category.replace("-"," ")}),r.status==="in-development"&&e.jsx("span",{style:{fontFamily:i.fontFamily.body,fontSize:"0.6rem",fontWeight:500,color:"var(--theme-text-dimmed)",backgroundColor:"var(--theme-tag-bg)",border:"1px solid var(--theme-tag-border)",borderRadius:p.full,padding:"1px 8px",transition:"background-color 400ms ease, border-color 400ms ease, color 400ms ease"},children:"In Progress"})]}),e.jsxs("h3",{className:"work-card-title",style:{fontFamily:i.fontFamily.heading,fontSize:"clamp(1.05rem, 0.8vw + 0.7rem, 1.25rem)",fontWeight:600,color:"var(--theme-text)",margin:"6px 0 0",lineHeight:1.3,transition:"color 300ms ease"},children:[r.title," — ",r.subtitle]}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginTop:"10px"},children:r.tags.map(t=>e.jsx("span",{style:{fontFamily:i.fontFamily.body,fontSize:"0.6875rem",fontWeight:500,color:"var(--theme-text-secondary)",backgroundColor:"var(--theme-tag-bg)",borderRadius:p.full,padding:"3px 10px",whiteSpace:"nowrap",border:"1px solid var(--theme-tag-border)",transition:"background-color 400ms ease, border-color 400ms ease, color 400ms ease"},children:t},t))}),e.jsx("p",{style:{fontFamily:i.fontFamily.body,fontSize:"0.8125rem",lineHeight:1.6,color:"var(--theme-text-secondary)",margin:"10px 0 0",transition:"color 400ms ease"},children:r.description}),e.jsxs("span",{className:"work-card-arrow",style:{display:"inline-flex",alignItems:"center",gap:6,fontFamily:i.fontFamily.body,fontSize:"0.8125rem",fontWeight:500,color:"var(--theme-text-dimmed)",marginTop:12,transition:"color 300ms ease, transform 300ms ease"},children:["View Case Study ",e.jsx("span",{"aria-hidden":"true",children:"→"})]})]})})}function y({heading:r="Selected",headingAccent:n="Work"}){const[t,s]=m.useState("all"),l=t==="all"?h:h.filter(a=>a.category===t);return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:w}),e.jsx("section",{"aria-labelledby":"work-page-heading",style:{width:"100%",minHeight:"100vh",padding:"clamp(140px, 14vw, 180px) clamp(1.5rem, 6vw, 6rem) clamp(4rem, 8vh, 6rem)",transition:"background-color 400ms ease"},children:e.jsxs("div",{style:{maxWidth:"64rem",width:"100%",margin:"0 auto"},children:[e.jsx(f,{children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,paddingBottom:"clamp(1.5rem, 3vh, 2rem)",borderBottom:`1px solid ${b.brand.gold}26`,marginBottom:"clamp(2rem, 4vh, 3rem)"},children:[e.jsxs("h1",{id:"work-page-heading",style:{fontFamily:i.fontFamily.heading,fontSize:"clamp(1.75rem, 3vw + 0.5rem, 2.75rem)",fontWeight:700,margin:0,lineHeight:1.1},children:[e.jsxs("span",{style:{color:"var(--theme-text)",transition:"color 400ms ease"},children:[r," "]}),e.jsx("span",{style:u,children:n})]}),e.jsxs("p",{style:{fontFamily:i.fontFamily.mono,fontSize:"0.8125rem",color:"var(--theme-text-dimmed)",margin:0,transition:"color 400ms ease",letterSpacing:"0.02em"},children:[String(h.length).padStart(2,"0")," Projects"]})]})}),e.jsx(f,{delay:80,children:e.jsx("div",{role:"tablist","aria-label":"Filter projects by category",style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:"clamp(2.5rem, 5vh, 4rem)"},children:k.map(a=>{const o=t===a.value;return e.jsx("button",{role:"tab","aria-selected":o,className:"work-filter-chip",onClick:()=>s(a.value),style:{fontFamily:i.fontFamily.body,fontSize:"0.8125rem",fontWeight:500,padding:"6px 16px",borderRadius:p.full,backgroundColor:o?"var(--theme-gold)":"var(--theme-tag-bg)",color:o?"#FFFFFF":"var(--theme-text-secondary)",border:`1px solid ${o?"transparent":"var(--theme-tag-border)"}`},children:a.label},a.value)})})}),e.jsx("div",{className:"work-grid",role:"list","aria-label":"Projects",children:l.map((a,o)=>e.jsx("div",{role:"listitem",children:e.jsx(j,{project:a,index:o})},a.id))}),l.length===0&&e.jsx("p",{style:{fontFamily:i.fontFamily.body,fontSize:"1rem",color:"var(--theme-text-dimmed)",textAlign:"center",padding:"4rem 0",transition:"color 400ms ease"},children:"No projects in this category yet."})]})})]})}y.__docgenInfo={description:"",methods:[],displayName:"WorkPage",props:{heading:{required:!1,tsType:{name:"string"},description:"Override the heading text",defaultValue:{value:"'Selected'",computed:!1}},headingAccent:{required:!1,tsType:{name:"string"},description:"Override the heading accent word",defaultValue:{value:"'Work'",computed:!1}}}};const A={title:"Blocks/WorkPage",component:y,parameters:{layout:"fullscreen",docs:{description:{component:'\n**What it does:** Full work/portfolio page section with a header, category filter bar, and responsive project grid (1→2→3 columns).\n\n**When to use:** Standalone `/work` route to display all projects with filtering. Shares the same card styling as the homepage ProjectShowcase but shows every project and adds filter controls.\n\n**Ethiopian Design Context:** Gold gradient accent on heading, gold-filled active filter chips, gold border hover on cards, category labels in gold gradient uppercase. Same editorial typography (Space Grotesk headings, Inter body) and `var(--theme-*)` CSS custom properties for dark/light theming.\n\n**Accessibility:** `role="tablist"` on filter bar with `aria-selected` on active tab. Semantic `role="list"` on grid. All cards are `<a>` links to case study pages. Focus-visible ring on filter chips.\n        '}}},tags:["autodocs"],argTypes:{heading:{description:"Plain prefix of the page heading",control:"text"},headingAccent:{description:"Gold-accented word in the page heading",control:"text"}}},d={parameters:{docs:{description:{story:"Full work page with all projects and category filter bar."}}}},c={decorators:[r=>e.jsx("div",{style:{background:"#1A1A1A"},children:e.jsx(r,{})})],parameters:{docs:{description:{story:"Work page on a dark background — verifying card contrast and filter chip visibility."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Full work page with all projects and category filter bar.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    background: '#1A1A1A'
  }}>
        <Story />
      </div>],
  parameters: {
    docs: {
      description: {
        story: 'Work page on a dark background — verifying card contrast and filter chip visibility.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const z=["Default","DarkBackground"];export{c as DarkBackground,d as Default,z as __namedExportsOrder,A as default};
