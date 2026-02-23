import{a as n,j as t,d as s}from"./iframe-DSgyGHZ6.js";const u={backgroundImage:`linear-gradient(135deg, ${s.colors.brand.gold}, ${s.colors.brand.goldLight})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",fontStyle:"italic",fontWeight:600,display:"inline-block"},p=`
@keyframes rotatingTextSlideUp {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
}

@keyframes rotatingTextSlideIn {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
`;function f({phrases:e,interval:r=3e3,className:i}){const[o,l]=n.useState(0),[c,a]=n.useState(!1);n.useEffect(()=>{if(e.length<=1)return;const m=setInterval(()=>{a(!0),setTimeout(()=>{l(g=>(g+1)%e.length),a(!1)},400)},r);return()=>clearInterval(m)},[e,r]);const d=c?{animation:"rotatingTextSlideUp 400ms cubic-bezier(0.4, 0, 0.2, 1) forwards"}:{animation:"rotatingTextSlideIn 400ms cubic-bezier(0.4, 0, 0.2, 1) forwards"};return t.jsxs(t.Fragment,{children:[t.jsx("style",{children:p}),t.jsx("span",{className:i,style:{...u,...d},children:e[o]})]})}f.__docgenInfo={description:"",methods:[],displayName:"RotatingText",props:{phrases:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Array of phrases to cycle through"},interval:{required:!1,tsType:{name:"number"},description:"Interval between phrase changes in milliseconds",defaultValue:{value:"3000",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name"}}};export{f as R};
