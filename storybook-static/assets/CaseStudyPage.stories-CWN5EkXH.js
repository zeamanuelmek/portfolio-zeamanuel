import{j as e,d as v,a as y}from"./iframe-B9BJqu6d.js";import{S as n}from"./ScrollReveal-DbaJV_ME.js";import"./StaggerGroup-Cyfz_Syu.js";import"./ParallaxLayer-WUPF_Kao.js";import"./AnimatedCounter-CF-NcSBM.js";import"./MagneticElement-D-Ujmxw4.js";import{H as d}from"./Heading-C-Vlo7Fx.js";import{T as t}from"./Text-BTHSitow.js";import{B as b}from"./Badge-sA5cXLIZ.js";import{C as x}from"./Card-DtPqvK_N.js";import{D as w}from"./Divider-y02dhm4n.js";import{S as C}from"./Stack-jC5Moorz.js";import{G as m}from"./Group-RWrop04D.js";import{I as W}from"./ImageSlider-Bz96LSDR.js";import{B as j}from"./Button-BZIRSy9J.js";import{c as T}from"./createReactComponent-C2aEuSvQ.js";import{g as k,p as S}from"./projects-D7-SkX0S.js";import"./preload-helper-PPVm8Dsz.js";import"./use-in-view-DUtWkbiw.js";import"./MotionConfigContext-DNPWTmP9.js";import"./proxy-BzSxHJRt.js";import"./use-motion-value-B6044a5a.js";import"./Title-WVNpPliK.js";import"./polymorphic-factory-B38yjnoz.js";import"./Text-CSoEI4MQ.js";import"./Badge--6N5_VeE.js";import"./Paper-DOhuRlTg.js";import"./create-safe-context-DliEnmUg.js";import"./Stack-C9852h35.js";import"./Group-BevGUIxM.js";import"./Image-DucVnRPS.js";import"./Loader-DZfoLsgY.js";import"./Transition-Bb3Tv-9Y.js";import"./index-hXcUJGPb.js";import"./UnstyledButton-DkrSQbAm.js";const D=[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]],A=T("outline","chevron-right","ChevronRight",D),{typography:a,radius:h,colors:o}=v,H={backgroundImage:"linear-gradient(135deg, var(--theme-gold-from, #D4AF37), var(--theme-gold-to, #E8C84A))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},c={fontFamily:a.fontFamily.mono,fontSize:11,fontWeight:600,color:"var(--theme-gold, #D4AF37)",textTransform:"uppercase",letterSpacing:"0.12em"},I=`
@keyframes bounceDown {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
}

.cs-back-nav {
  transition: border-color 200ms ease;
}
.cs-back-nav:hover {
  border-color: rgba(212,175,55,0.4) !important;
}

.cs-before-after-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 0;
  align-items: stretch;
}
@media (max-width: 640px) {
  .cs-before-after-grid {
    grid-template-columns: 1fr;
  }
  .cs-ba-arrow {
    transform: rotate(90deg);
    padding: 8px 0 !important;
    justify-content: center !important;
    border-top: 1px solid rgba(0,0,0,0.06) !important;
    border-bottom: 1px solid rgba(0,0,0,0.06) !important;
    border-left: none !important;
    border-right: none !important;
  }
  .cs-ba-before { border-radius: 12px 12px 0 0 !important; border-right: 1px solid rgba(0,0,0,0.06) !important; }
  .cs-ba-after  { border-radius: 0 0 12px 12px !important; border-left: 1px solid rgba(212,175,55,0.15) !important; }
}

.cs-metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  text-align: center;
}
@media (max-width: 640px) {
  .cs-metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.cs-workflow-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.cs-meta-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 24px;
}

.cs-expand-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  font-family: ${a.fontFamily.body};
  font-size: 14px;
  font-weight: 600;
  color: var(--theme-gold, #D4AF37);
  transition: opacity 200ms ease;
}
.cs-expand-btn:hover { opacity: 0.8; }
.cs-expand-btn:focus-visible { outline: 2px solid #D4AF37; outline-offset: 2px; }
`;function E(){const[r,l]=y.useState(0);return y.useEffect(()=>{const i=()=>{const s=document.documentElement.scrollHeight-window.innerHeight;l(s>0?window.scrollY/s*100:0)};return window.addEventListener("scroll",i,{passive:!0}),()=>window.removeEventListener("scroll",i)},[]),e.jsx("div",{style:{position:"fixed",top:0,left:0,width:`${r}%`,height:3,background:"linear-gradient(90deg, var(--theme-gold-from, #D4AF37), var(--theme-gold-to, #E8C84A))",zIndex:100,transition:"width 0.1s linear",pointerEvents:"none"}})}function N(){return e.jsxs("a",{href:"/work",className:"cs-back-nav",style:{position:"fixed",top:20,left:20,zIndex:90,display:"flex",alignItems:"center",gap:8,padding:"8px 16px",background:"rgba(26,26,26,0.85)",backdropFilter:"blur(12px)",borderRadius:h.full,cursor:"pointer",textDecoration:"none",border:"1px solid rgba(212,175,55,0.15)"},children:[e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:o.text.sand,strokeWidth:"2",children:e.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),e.jsx(t,{size:"xs",style:{fontFamily:a.fontFamily.body,fontSize:13,color:o.text.sand,fontWeight:500},children:"All Work"})]})}function R({moment:r,isEven:l}){const[i,s]=y.useState(!1),u=l?"var(--theme-bg, #FFFFFF)":"var(--theme-bg-page, #FAF8F3)",f=l?"var(--theme-bg-page, #FAF8F3)":"var(--theme-bg, #FFFFFF)";return e.jsx("section",{style:{background:u,padding:"clamp(64px, 10vh, 96px) 24px",position:"relative",transition:"background-color 400ms ease"},children:e.jsxs("div",{style:{maxWidth:960,margin:"0 auto"},children:[e.jsxs(n,{direction:"up",children:[e.jsxs(m,{gap:16,align:"baseline",style:{marginBottom:16,flexWrap:"wrap"},children:[e.jsxs(t,{size:"xs",style:{...c,letterSpacing:"0.05em"},children:["MOMENT ",r.number]}),e.jsx(t,{size:"xs",c:"dimmed",fs:"italic",style:{fontFamily:a.fontFamily.body,fontSize:13},children:r.theme})]}),e.jsx(d,{order:2,style:{fontSize:"clamp(1.5rem, 3vw, 2.25rem)",color:"var(--theme-text, #2C2C2C)",marginBottom:4,transition:"color 400ms ease"},children:r.title}),e.jsxs(t,{size:"lg",style:{color:"var(--theme-text-secondary, #6B6B6B)",margin:"0 0 32px",lineHeight:1.6,maxWidth:640,transition:"color 400ms ease"},children:["“",r.headline,"”"]}),e.jsx(t,{style:{fontSize:16,color:"var(--theme-text, #2C2C2C)",lineHeight:1.7,margin:"0 0 40px",maxWidth:700,transition:"color 400ms ease"},children:r.summary})]}),e.jsx(n,{direction:"up",delay:.1,children:e.jsxs("div",{className:"cs-before-after-grid",style:{marginBottom:40},children:[e.jsxs(x,{className:"cs-ba-before",radius:0,style:{background:f,borderRadius:"12px 0 0 12px",padding:24,border:"1px solid rgba(0,0,0,0.06)",borderRight:"none",transition:"background-color 400ms ease"},children:[e.jsx(t,{size:"xs",style:{...c,color:o.brand.rust,marginBottom:12},children:"BEFORE"}),e.jsx(t,{size:"sm",style:{color:"var(--theme-text-secondary, #6B6B6B)",lineHeight:1.6,transition:"color 400ms ease"},children:r.before})]}),e.jsx("div",{className:"cs-ba-arrow",style:{display:"flex",alignItems:"center",justifyContent:"center",background:f,padding:"0 16px",borderTop:"1px solid rgba(0,0,0,0.06)",borderBottom:"1px solid rgba(0,0,0,0.06)",transition:"background-color 400ms ease"},children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"var(--theme-gold, #D4AF37)",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})}),e.jsxs(x,{className:"cs-ba-after",radius:0,style:{background:f,borderRadius:"0 12px 12px 0",padding:24,border:"1px solid rgba(212,175,55,0.15)",borderLeft:"none",transition:"background-color 400ms ease"},children:[e.jsx(t,{size:"xs",style:{...c,color:o.brand.forest,marginBottom:12},children:"AFTER"}),e.jsx(t,{size:"sm",style:{color:"var(--theme-text, #2C2C2C)",lineHeight:1.6,transition:"color 400ms ease"},children:r.after})]})]})}),r.images&&r.images.length>0&&e.jsx(n,{direction:"up",delay:.15,children:e.jsx("div",{style:{marginBottom:32},children:e.jsx(W,{images:r.images,height:360})})}),e.jsxs("button",{className:"cs-expand-btn",onClick:()=>s(!i),"aria-expanded":i,children:[e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"var(--theme-gold, #D4AF37)",strokeWidth:"2",style:{transition:"transform 300ms ease",transform:i?"rotate(90deg)":"rotate(0deg)"},children:e.jsx("path",{d:"M9 18l6-6-6-6"})}),i?"Less detail":"Deep dive — what I actually did"]}),e.jsx("div",{style:{maxHeight:i?800:0,overflow:"hidden",transition:"max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)"},children:e.jsxs(C,{gap:16,style:{paddingTop:24,paddingBottom:8},children:[r.details.map((z,B)=>e.jsxs(m,{gap:12,align:"flex-start",wrap:"nowrap",children:[e.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:"var(--theme-gold, #D4AF37)",marginTop:7,flexShrink:0}}),e.jsx(t,{style:{fontSize:15,color:"var(--theme-text, #2C2C2C)",lineHeight:1.7,transition:"color 400ms ease"},children:z})]},B)),e.jsxs("div",{style:{marginTop:16,padding:"20px 24px",background:"linear-gradient(135deg, rgba(212,175,55,0.06), rgba(212,175,55,0.02))",borderRadius:h.lg,borderLeft:"3px solid var(--theme-gold, #D4AF37)"},children:[e.jsx(t,{size:"xs",style:{...c,marginBottom:8},children:"WHAT THIS SHOWS"}),e.jsx(t,{fs:"italic",style:{fontSize:15,color:"var(--theme-text, #2C2C2C)",lineHeight:1.6,transition:"color 400ms ease"},children:r.insight})]})]})})]})})}function F({project:r,nextProject:l}){const i=r.caseStudy;return i?e.jsxs(e.Fragment,{children:[e.jsx("style",{children:I}),e.jsx(E,{}),e.jsx(N,{}),e.jsxs("section",{style:{background:o.background.dark,minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",padding:"120px 24px 80px",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:`
              linear-gradient(rgba(212,175,55,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212,175,55,0.03) 1px, transparent 1px)
            `,backgroundSize:"60px 60px",pointerEvents:"none"}}),e.jsxs("div",{style:{maxWidth:960,margin:"0 auto",width:"100%",position:"relative",zIndex:1},children:[e.jsxs(n,{direction:"up",children:[e.jsx(m,{gap:8,style:{marginBottom:32,flexWrap:"wrap"},children:i.tags.map(s=>e.jsx(b,{variant:"outline",color:"gold",size:"xs",style:{fontFamily:a.fontFamily.mono,textTransform:"uppercase",letterSpacing:"0.08em"},children:s},s))}),e.jsx(d,{order:1,style:{fontSize:"clamp(2.5rem, 6vw, 4.5rem)",color:o.text.onDark,lineHeight:1.1,marginBottom:8},children:r.title}),e.jsx(d,{order:3,style:{fontSize:"clamp(1.25rem, 3vw, 1.75rem)",fontWeight:a.fontWeight.normal,color:o.text.sand,opacity:.8,marginBottom:40},children:r.subtitle}),e.jsx("div",{style:{borderLeft:`3px solid ${o.brand.gold}`,paddingLeft:24,marginBottom:56,maxWidth:720},children:e.jsx(t,{size:"lg",style:{fontSize:"clamp(1.1rem, 2.2vw, 1.35rem)",lineHeight:1.6,color:o.text.onDark,fontWeight:a.fontWeight.normal},children:i.hook})})]}),e.jsx(n,{direction:"up",delay:.1,children:e.jsx("div",{className:"cs-meta-grid",style:{paddingTop:32,borderTop:"1px solid rgba(212,175,55,0.15)"},children:[{label:"Role",value:i.role},{label:"Duration",value:i.duration},{label:"Platform",value:i.platforms},{label:"Team",value:i.team}].map(s=>e.jsxs("div",{children:[e.jsx(t,{size:"xs",style:{...c,display:"block",marginBottom:6},children:s.label}),e.jsx(t,{size:"sm",style:{fontFamily:a.fontFamily.body,color:o.text.sand,lineHeight:1.5},children:s.value})]},s.label))})})]}),e.jsxs("div",{style:{position:"absolute",bottom:32,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:8,opacity:.4,animation:"bounceDown 2s ease-in-out infinite"},children:[e.jsx(t,{size:"xs",style:{...c,fontSize:10,letterSpacing:"0.1em"},children:"SCROLL"}),e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:o.brand.gold,strokeWidth:"2",children:e.jsx("path",{d:"M12 5v14M19 12l-7 7-7-7"})})]})]}),e.jsx("section",{style:{background:"var(--theme-bg, #FFFFFF)",borderBottom:"1px solid rgba(212,175,55,0.12)",padding:"48px 24px",transition:"background-color 400ms ease"},children:e.jsx("div",{className:"cs-metrics-grid",style:{maxWidth:960,margin:"0 auto"},children:i.metrics.map(s=>e.jsxs("div",{children:[e.jsx(d,{order:2,goldGradient:!0,style:{fontSize:"clamp(2rem, 4vw, 3rem)",lineHeight:1.1,marginBottom:4},children:s.value}),e.jsx(t,{size:"xs",tt:"uppercase",ff:"monospace",c:"dimmed",style:{letterSpacing:"0.08em",fontWeight:500},children:s.label})]},s.label))})}),e.jsx("section",{style:{background:"var(--theme-bg-page, #FAF8F3)",padding:"80px 24px",transition:"background-color 400ms ease"},children:e.jsxs("div",{style:{maxWidth:960,margin:"0 auto"},children:[e.jsxs(n,{direction:"up",children:[e.jsx(t,{size:"xs",style:{...c,display:"block",marginBottom:12},children:"PROCESS"}),e.jsx(d,{order:2,style:{fontSize:"clamp(1.5rem, 3vw, 2rem)",color:"var(--theme-text, #2C2C2C)",marginBottom:12,transition:"color 400ms ease"},children:i.workflow.title}),e.jsx(t,{c:"dimmed",style:{fontSize:16,lineHeight:1.6,maxWidth:600,margin:"0 0 48px 0"},children:i.workflow.description})]}),e.jsx(n,{direction:"up",delay:.1,children:e.jsx("div",{className:"cs-workflow-grid",children:i.workflow.steps.map(s=>e.jsxs(x,{style:{background:"var(--theme-bg, #FFFFFF)",borderRadius:h.lg,padding:"20px 16px",border:"1px solid rgba(212,175,55,0.1)",transition:"background-color 400ms ease"},children:[e.jsx(t,{size:"xs",style:{fontFamily:a.fontFamily.mono,fontWeight:700,color:"var(--theme-gold, #D4AF37)",opacity:.5,display:"block",marginBottom:8,fontSize:10},children:s.num}),e.jsx(t,{fw:600,style:{fontFamily:a.fontFamily.heading,fontSize:14,color:"var(--theme-text, #2C2C2C)",marginBottom:4,transition:"color 400ms ease"},children:s.label}),e.jsx(t,{size:"xs",c:"dimmed",style:{lineHeight:1.5},children:s.detail})]},s.num))})})]})}),i.moments.map((s,u)=>e.jsx(R,{moment:s,isEven:u%2===0},s.id)),e.jsxs("section",{style:{background:o.background.dark,padding:"clamp(64px, 10vh, 96px) 24px",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:800,height:800,background:"radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)",pointerEvents:"none"}}),e.jsxs("div",{style:{maxWidth:720,margin:"0 auto",position:"relative",zIndex:1},children:[e.jsxs(n,{direction:"up",children:[e.jsx(t,{size:"xs",style:{...c,display:"block",marginBottom:12},children:"REFLECTION"}),e.jsx(d,{order:2,style:{fontSize:"clamp(1.5rem, 3vw, 2.25rem)",color:o.text.onDark,marginBottom:32},children:"The Growth Arc"}),e.jsx(t,{size:"lg",style:{color:o.text.sand,lineHeight:1.8,marginBottom:24,fontSize:17},children:i.resolution.growth}),e.jsx(t,{size:"lg",style:{color:o.text.sand,lineHeight:1.8,marginBottom:48,fontSize:17},children:i.resolution.discovery})]}),e.jsx(n,{direction:"up",delay:.1,children:e.jsxs("div",{style:{textAlign:"center",padding:"40px 0",borderTop:"1px solid rgba(212,175,55,0.15)",borderBottom:"1px solid rgba(212,175,55,0.15)",marginBottom:48},children:[e.jsxs(d,{order:2,goldGradient:!0,style:{fontSize:"clamp(1.5rem, 3vw, 2rem)",fontStyle:"italic",marginBottom:12},children:["“",i.resolution.founderQuote,"”"]}),e.jsx(t,{size:"xs",c:"dimmed",style:{fontSize:13},children:"— OMOC Founder, said repeatedly throughout the project"})]})}),e.jsx(n,{direction:"up",delay:.15,children:e.jsxs(x,{style:{background:"rgba(255,255,255,0.03)",borderRadius:h.xl,padding:32,border:"1px solid rgba(212,175,55,0.1)"},children:[e.jsx(t,{size:"xs",style:{...c,display:"block",marginBottom:12},children:"FOR JUNIOR DESIGNERS NAVIGATING GROWING SCOPE"}),e.jsx(t,{style:{fontSize:16,color:o.text.onDark,lineHeight:1.7},children:i.resolution.advice})]})})]})]}),e.jsx("section",{style:{background:"var(--theme-bg-page, #FAF8F3)",padding:"80px 24px",textAlign:"center",transition:"background-color 400ms ease"},children:e.jsx("div",{style:{maxWidth:560,margin:"0 auto"},children:e.jsxs(n,{direction:"up",children:[e.jsx(d,{order:2,style:{fontSize:"clamp(1.5rem, 3vw, 2rem)",color:"var(--theme-text, #2C2C2C)",marginBottom:12,transition:"color 400ms ease"},children:"Want the full walkthrough?"}),e.jsx(t,{c:"dimmed",style:{fontSize:16,marginBottom:32,lineHeight:1.6},children:"I can walk you through every screen, every decision, and every pivot. The Figma file has 100+ screens worth of stories."}),e.jsxs(m,{gap:12,justify:"center",style:{flexWrap:"wrap"},children:[e.jsx(j,{component:"a",href:"/contact",color:"gold",radius:"xl",size:"md",style:{fontWeight:600,padding:"14px 32px",boxShadow:v.shadows.goldGlow},rightSection:e.jsx(A,{size:16}),children:"Let's Talk"}),e.jsx(j,{component:"a",href:"/work",variant:"outline",color:"gold",radius:"xl",size:"md",style:{fontWeight:600,padding:"14px 32px"},children:"← Back to Work"})]})]})})}),e.jsxs("footer",{style:{background:o.background.dark,padding:"32px 24px"},children:[e.jsx(w,{habesha:!0}),e.jsxs(m,{justify:"space-between",align:"center",style:{maxWidth:960,margin:"24px auto 0"},children:[e.jsxs(t,{size:"xs",c:"dimmed",style:{fontSize:13},children:["© ",new Date().getFullYear()," Zeamanuel. Built with SemEnaWerk."]}),e.jsx(t,{size:"xs",ff:"monospace",c:"dimmed",style:{fontSize:11},children:"Addis Ababa, Ethiopia"})]})]})]}):e.jsx(O,{project:r,nextProject:l})}function O({project:r,nextProject:l}){return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:"100%",padding:"clamp(100px, 12vw, 140px) clamp(1.5rem, 6vw, 6rem) 0"},children:e.jsx("div",{style:{maxWidth:"64rem",margin:"0 auto"},children:e.jsx("a",{href:"/work",style:{fontFamily:a.fontFamily.body,fontSize:a.fontSize.sm,fontWeight:a.fontWeight.medium,color:"var(--theme-gold)",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:6},children:"← Back to Work"})})}),e.jsx("section",{style:{width:"100%",backgroundColor:o.background.dark,padding:"clamp(3rem, 8vh, 5rem) clamp(1.5rem, 6vw, 6rem)",marginTop:"clamp(1.5rem, 3vh, 2.5rem)"},children:e.jsxs("div",{style:{maxWidth:"64rem",margin:"0 auto"},children:[e.jsx(b,{variant:"outline",color:"gold",size:"xs",style:{marginBottom:20},children:r.category.replace("-"," ")}),e.jsx(d,{order:1,style:{fontSize:"clamp(2rem, 4vw + 0.5rem, 3.5rem)",color:o.text.onDark,marginBottom:8,lineHeight:1.1},children:r.title}),e.jsx(d,{order:3,goldGradient:!0,style:{fontSize:"clamp(1.125rem, 1.5vw + 0.5rem, 1.5rem)",fontWeight:a.fontWeight.medium,marginBottom:"clamp(2rem, 4vh, 3rem)",lineHeight:1.3},children:r.subtitle}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:"clamp(1.5rem, 3vw, 2.5rem)",paddingTop:"clamp(1.5rem, 3vh, 2rem)",borderTop:`1px solid ${o.brand.gold}1A`},children:[r.team&&e.jsxs("div",{children:[e.jsx(t,{size:"xs",style:{color:o.text.sand,opacity:.5,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:6},children:"Team"}),e.jsx(t,{size:"sm",fw:600,style:{color:o.text.onDark},children:r.team})]}),e.jsxs("div",{children:[e.jsx(t,{size:"xs",style:{color:o.text.sand,opacity:.5,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:6},children:"Year"}),e.jsx(t,{size:"sm",fw:600,style:{color:o.text.onDark},children:r.year})]}),e.jsxs("div",{children:[e.jsx(t,{size:"xs",style:{color:o.text.sand,opacity:.5,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:6},children:"Role"}),e.jsx(t,{size:"sm",fw:600,style:{color:o.text.onDark},children:r.role})]}),e.jsxs("div",{children:[e.jsx(t,{size:"xs",style:{color:o.text.sand,opacity:.5,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:6},children:"Duration"}),e.jsx(t,{size:"sm",fw:600,style:{color:o.text.onDark},children:r.duration})]})]})]})}),e.jsx("div",{style:{width:"100%",padding:"clamp(3rem, 6vh, 5rem) clamp(1.5rem, 6vw, 6rem)"},children:e.jsxs("div",{style:{maxWidth:"48rem",margin:"0 auto"},children:[e.jsx(t,{style:{fontSize:"clamp(0.9375rem, 0.5vw + 0.75rem, 1.0625rem)",lineHeight:1.7,color:"var(--theme-text-secondary)",marginBottom:20,transition:"color 400ms ease"},children:r.description}),e.jsx(m,{gap:8,style:{flexWrap:"wrap",marginBottom:24},children:r.tags.map(i=>e.jsx(b,{variant:"light",color:"gold",size:"sm",children:i},i))}),r.status==="in-development"&&e.jsx(t,{size:"sm",c:"dimmed",fs:"italic",children:"This project is currently in development. Full case study coming soon."})]})}),e.jsx("section",{style:{width:"100%",backgroundColor:o.background.dark,padding:"clamp(3rem, 6vh, 4.5rem) clamp(1.5rem, 6vw, 6rem)",marginTop:"clamp(2rem, 4vh, 3rem)"},children:e.jsxs("div",{style:{maxWidth:"48rem",margin:"0 auto",display:"flex",flexDirection:"column",alignItems:"center",gap:"clamp(1.5rem, 3vh, 2.5rem)"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{size:"xs",style:{color:o.text.sand,opacity:.5,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:12},children:"Next Project"}),e.jsxs("a",{href:`/work/${l.id}`,style:{fontFamily:a.fontFamily.heading,fontSize:"clamp(1.5rem, 2.5vw + 0.5rem, 2.25rem)",fontWeight:a.fontWeight.bold,color:o.text.onDark,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8},children:[l.title,e.jsx("span",{style:{...H,fontSize:"clamp(1.25rem, 2vw + 0.25rem, 1.75rem)"},"aria-hidden":"true",children:"→"})]}),e.jsx(t,{size:"sm",style:{color:o.text.sand,opacity:.6,marginTop:8},children:l.subtitle})]}),e.jsx("div",{style:{width:200},children:e.jsx(w,{habesha:!0})})]})})]})}F.__docgenInfo={description:"",methods:[],displayName:"CaseStudyPage",props:{project:{required:!0,tsType:{name:"Project"},description:""},nextProject:{required:!0,tsType:{name:"Project"},description:""}}};const M=S.find(r=>r.id==="omoc"),P=k("omoc").next,G=S.find(r=>r.id==="dh"),L=k("dh").next,Se={title:"Blocks/CaseStudyPage",component:F,parameters:{layout:"fullscreen",docs:{description:{component:`
**When to use:** Individual project case study with storytelling narrative structure.

**Structure:** Hero → Metrics → Workflow → Moments (expandable) → Resolution → CTA

**Key Features:**
- Scroll progress bar
- Before/After comparisons per moment
- Image sliders for Figma screenshots
- Expandable deep-dive sections
- Alternating background colors for visual rhythm

**Data:** Driven by \`CaseStudy\` type in \`data/projects.ts\`

**Accessibility:** Scroll progress is non-interactive. Back nav is keyboard-accessible. Expand/collapse buttons have \`aria-expanded\`. Image sliders support keyboard and touch navigation. All text uses theme CSS custom properties for dark/light mode.
        `}}},tags:["autodocs"],argTypes:{project:{description:"The project data object to render",control:!1},nextProject:{description:"The next project for bottom navigation",control:!1}}},p={args:{project:M,nextProject:P},parameters:{docs:{description:{story:"Full OMOC case study with storytelling structure: hero, metrics bar, workflow, 4 moments with before/after and image sliders, resolution with founder quote, and CTA."}}}},g={args:{project:G,nextProject:L},parameters:{docs:{description:{story:'DH project with no case study data — shows graceful fallback with description, tags, and "coming soon" notice.'}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    project: omoc,
    nextProject: omocNext
  },
  parameters: {
    docs: {
      description: {
        story: 'Full OMOC case study with storytelling structure: hero, metrics bar, workflow, 4 moments with before/after and image sliders, resolution with founder quote, and CTA.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    project: dh,
    nextProject: dhNext
  },
  parameters: {
    docs: {
      description: {
        story: 'DH project with no case study data \\u2014 shows graceful fallback with description, tags, and "coming soon" notice.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};const Fe=["OMOCCaseStudy","NoCaseStudy"];export{g as NoCaseStudy,p as OMOCCaseStudy,Fe as __namedExportsOrder,Se as default};
