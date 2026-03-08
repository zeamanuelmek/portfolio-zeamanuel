import{I as o}from"./ImageSlider-Bz96LSDR.js";import"./iframe-B9BJqu6d.js";import"./preload-helper-PPVm8Dsz.js";import"./Image-DucVnRPS.js";import"./polymorphic-factory-B38yjnoz.js";import"./Text-BTHSitow.js";import"./Text-CSoEI4MQ.js";const t=[{url:"/images/placeholder-screen.svg",caption:"Original 4-step signup",alt:"OMOC original onboarding flow"},{url:"/images/placeholder-screen.svg",caption:"Entity type classification",alt:"Seller classification step"},{url:"/images/placeholder-screen.svg",caption:"VIES validation states",alt:"Three validation states"},{url:"/images/placeholder-screen.svg",caption:"Final 7-step flow",alt:"Complete onboarding flow"}],g={title:"Molecules/ImageSlider",component:o,parameters:{layout:"padded",docs:{description:{component:`
**What it does:** Image carousel for case study screenshots. Displays one image at a time with caption, navigation arrows, dot indicators, and counter.

**When to use:** Inside case study moment sections to showcase Figma screens and design artifacts.

**Key Features:** Keyboard navigation (arrow keys), touch swipe on mobile, crossfade transitions, graceful image fallback, gold accent on active states.

**Accessibility:** Arrow buttons with aria-labels, dot indicators as tablist with aria-selected, region landmark with carousel roledescription, keyboard-focusable container.
        `}}},tags:["autodocs"],argTypes:{images:{description:"Array of image objects with url, caption, and alt",control:!1},height:{description:"Height of the image area (number in px or CSS string)",control:"number"},borderRadius:{description:"Border radius of the container",control:"text"}}},e={args:{images:t},parameters:{docs:{description:{story:"Default slider with 4 placeholder images showing navigation arrows, dots, counter, and captions."}}}},a={args:{images:[t[0]]},parameters:{docs:{description:{story:"Single image gracefully hides arrows, dots, and counter — shows only the image and caption."}}}},s={args:{images:[{url:"/images/placeholder-screen.svg",caption:"Seller order dashboard with 11+ statuses",alt:"OMOC seller dashboard"},{url:"/images/placeholder-screen.svg",caption:"Buyer item selection for cancellation",alt:"Buyer-side item selection"},{url:"/images/placeholder-screen.svg",caption:"Chat-based complaint resolution",alt:"Complaint flow with chat"}],height:350},parameters:{docs:{description:{story:"Slider with descriptive captions and custom height, demonstrating the caption area below the image."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    images: placeholderImages
  },
  parameters: {
    docs: {
      description: {
        story: 'Default slider with 4 placeholder images showing navigation arrows, dots, counter, and captions.'
      }
    }
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    images: [placeholderImages[0]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Single image gracefully hides arrows, dots, and counter \\u2014 shows only the image and caption.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    images: [{
      url: '/images/placeholder-screen.svg',
      caption: 'Seller order dashboard with 11+ statuses',
      alt: 'OMOC seller dashboard'
    }, {
      url: '/images/placeholder-screen.svg',
      caption: 'Buyer item selection for cancellation',
      alt: 'Buyer-side item selection'
    }, {
      url: '/images/placeholder-screen.svg',
      caption: 'Chat-based complaint resolution',
      alt: 'Complaint flow with chat'
    }],
    height: 350
  },
  parameters: {
    docs: {
      description: {
        story: 'Slider with descriptive captions and custom height, demonstrating the caption area below the image.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};const m=["Default","SingleImage","WithCaptions"];export{e as Default,a as SingleImage,s as WithCaptions,m as __namedExportsOrder,g as default};
