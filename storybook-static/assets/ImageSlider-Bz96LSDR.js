import{a as s,j as e,d as I}from"./iframe-B9BJqu6d.js";import{I as w}from"./Image-DucVnRPS.js";import{T as f}from"./Text-BTHSitow.js";const{radius:x,colors:C}=I,T=`
.img-slider-btn {
  background: rgba(26, 26, 26, 0.6);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 200ms ease;
  padding: 0;
}
.img-slider-btn:hover {
  background: rgba(212, 175, 55, 0.8);
  border-color: rgba(212, 175, 55, 0.5);
  color: #1A1A1A;
}
.img-slider-btn:focus-visible {
  outline: 2px solid #D4AF37;
  outline-offset: 2px;
}
.img-slider-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 200ms ease;
}
.img-slider-dot:focus-visible {
  outline: 2px solid #D4AF37;
  outline-offset: 2px;
}
`;function E({images:c,height:u=400,borderRadius:y=x.xl}){const[o,v]=s.useState(0),m=s.useRef(0),b=s.useRef(0),h=s.useRef(null),n=c.length,g=n<=1,i=s.useCallback(t=>{v((t%n+n)%n)},[n]),a=s.useCallback(()=>i(o+1),[o,i]),l=s.useCallback(()=>i(o-1),[o,i]);s.useEffect(()=>{const t=h.current;if(!t)return;const r=d=>{d.key==="ArrowRight"?(d.preventDefault(),a()):d.key==="ArrowLeft"&&(d.preventDefault(),l())};return t.addEventListener("keydown",r),()=>t.removeEventListener("keydown",r)},[a,l]);const k=t=>{m.current=t.touches[0].clientX},j=t=>{b.current=t.touches[0].clientX},F=()=>{const t=m.current-b.current;Math.abs(t)>50&&(t>0?a():l())};if(n===0)return e.jsx(e.Fragment,{});const p=c[o];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:T}),e.jsxs("div",{ref:h,tabIndex:0,role:"region","aria-label":"Image slider","aria-roledescription":"carousel",style:{position:"relative",borderRadius:y,overflow:"hidden",border:"1px solid rgba(212,175,55,0.1)"},onTouchStart:k,onTouchMove:j,onTouchEnd:F,children:[e.jsxs("div",{style:{position:"relative",height:typeof u=="number"?`${u}px`:u,backgroundColor:"var(--theme-card-bg, #FAF8F3)",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",inset:0,animation:"sliderFadeIn 300ms ease forwards"},children:e.jsx(w,{src:p.url,alt:p.alt,radius:0,style:{width:"100%",height:"100%",objectFit:"cover"},fallbackSrc:void 0,onError:t=>{const r=t.currentTarget;r.style.display="none",r.parentElement&&(r.parentElement.style.background="linear-gradient(135deg, var(--theme-card-bg, #FAF8F3) 0%, rgba(212,175,55,0.08) 100%)",r.parentElement.style.display="flex",r.parentElement.style.alignItems="center",r.parentElement.style.justifyContent="center")}})},o),!g&&e.jsxs(f,{size:"xs",ff:"monospace",style:{position:"absolute",top:12,right:12,backgroundColor:"rgba(26, 26, 26, 0.6)",backdropFilter:"blur(8px)",color:"rgba(255, 255, 255, 0.8)",padding:"4px 10px",borderRadius:x.full,fontSize:11,fontWeight:500,zIndex:2},children:[o+1," / ",n]}),!g&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"img-slider-btn",onClick:l,"aria-label":"Previous image",style:{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",zIndex:2},children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M15 18l-6-6 6-6"})})}),e.jsx("button",{className:"img-slider-btn",onClick:a,"aria-label":"Next image",style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",zIndex:2},children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M9 18l6-6-6-6"})})})]})]}),e.jsxs("div",{style:{padding:"12px 16px",backgroundColor:"var(--theme-card-bg, #FFFFFF)",borderTop:"1px solid rgba(212,175,55,0.08)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,transition:"background-color 400ms ease"},children:[e.jsx(f,{size:"sm",c:"dimmed",style:{margin:0,flex:1,minWidth:0},children:p.caption}),!g&&e.jsx("div",{style:{display:"flex",gap:6,flexShrink:0},role:"tablist","aria-label":"Slide indicators",children:c.map((t,r)=>e.jsx("button",{className:"img-slider-dot",role:"tab","aria-selected":r===o,"aria-label":`Go to slide ${r+1}`,onClick:()=>i(r),style:{backgroundColor:r===o?C.brand.gold:"var(--theme-tag-border, rgba(0,0,0,0.15))",transform:r===o?"scale(1.25)":"scale(1)"}},r))})]})]}),e.jsx("style",{children:`
        @keyframes sliderFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `})]})}E.__docgenInfo={description:"",methods:[],displayName:"ImageSlider",props:{images:{required:!0,tsType:{name:"Array",elements:[{name:"ImageSliderImage"}],raw:"ImageSliderImage[]"},description:""},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"400",computed:!1}},borderRadius:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"radius.xl",computed:!0}}}};export{E as I};
