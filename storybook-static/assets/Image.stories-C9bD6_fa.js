import{j as e}from"./iframe-DSgyGHZ6.js";import{I as s}from"./Image-DT27U7xb.js";import{B as o}from"./polymorphic-factory-d0jWGRqG.js";import{S as i}from"./Stack-Ca_rH8Tr.js";import{T as t}from"./Text-B4hK2jMs.js";import{G as l}from"./Group-4XXa0sCO.js";import"./preload-helper-PPVm8Dsz.js";const u={title:"Atoms/Image",component:s,parameters:{layout:"padded",docs:{description:{component:`
**When to use:**
Image displays responsive images with built-in border radius and fallback support. Use for project thumbnails, receipt captures, portfolio items, and hero backgrounds.

**Ethiopian Design Context:**
Images default to \`radius="lg"\` for consistency with the rounded Card and Button styles. Use \`fallbackSrc\` for graceful degradation — important for Ethiopian networks where images may load slowly.

**Common Patterns:**
- Project portfolio thumbnails in grid layouts
- Receipt capture previews with dashed gold borders
- Client logo displays
- Hero section background images

**Accessibility:**
Always provide meaningful \`alt\` text describing the image content. Use \`fallbackSrc\` to show a placeholder when the primary image fails to load.
        `}}},tags:["autodocs"],argTypes:{src:{description:"Image source URL",control:"text"},alt:{description:"Alt text for accessibility (required)",control:"text"},radius:{description:"Border radius (defaults to lg from theme)",control:"select",options:["xs","sm","md","lg","xl"]},w:{description:"Image width",control:"number"},h:{description:"Image height",control:"number"},fallbackSrc:{description:"Fallback image URL shown when src fails to load",control:"text"}}},a={render:()=>e.jsx(o,{p:"xl",style:{backgroundColor:"#FAF8F3",minHeight:"100vh"},children:e.jsxs(i,{gap:"xl",children:[e.jsx(t,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Image Variants"}),e.jsxs("div",{children:[e.jsx(t,{fw:500,mb:"sm",children:"Default (lg radius)"}),e.jsx(s,{src:"https://placehold.co/400x200/D4AF37/FFFFFF?text=SemEnaWerk",alt:"Placeholder",w:400,h:200})]}),e.jsxs("div",{children:[e.jsx(t,{fw:500,mb:"sm",children:"Radius Options"}),e.jsxs(l,{gap:"md",wrap:"wrap",children:[e.jsxs("div",{children:[e.jsx(s,{src:"https://placehold.co/200x150/1A1A1A/D4AF37?text=sm",alt:"Small radius",w:200,h:150,radius:"sm"}),e.jsx(t,{size:"xs",c:"dimmed",mt:"xs",ta:"center",children:"radius=sm"})]}),e.jsxs("div",{children:[e.jsx(s,{src:"https://placehold.co/200x150/1A1A1A/D4AF37?text=lg",alt:"Large radius",w:200,h:150,radius:"lg"}),e.jsx(t,{size:"xs",c:"dimmed",mt:"xs",ta:"center",children:"radius=lg (default)"})]}),e.jsxs("div",{children:[e.jsx(s,{src:"https://placehold.co/200x150/1A1A1A/D4AF37?text=xl",alt:"XL radius",w:200,h:150,radius:"xl"}),e.jsx(t,{size:"xs",c:"dimmed",mt:"xs",ta:"center",children:"radius=xl"})]})]})]}),e.jsxs("div",{children:[e.jsx(t,{fw:500,mb:"sm",children:"With Fallback"}),e.jsx(s,{src:null,alt:"Fallback image",w:400,h:200,fallbackSrc:"https://placehold.co/400x200/FAF8F3/6B6B6B?text=No+Image"})]})]})}),parameters:{docs:{description:{story:"Default image with lg radius, radius comparison, and fallback behavior when src is null or fails to load."}}}},r={render:()=>e.jsx(o,{p:"xl",style:{backgroundColor:"#FAF8F3"},children:e.jsxs(i,{gap:"xl",children:[e.jsx(t,{size:"xs",tt:"uppercase",fw:600,c:"#D4AF37",children:"Ethiopian SaaS Use Cases"}),e.jsxs("div",{children:[e.jsx(t,{fw:500,mb:"sm",children:"Project Thumbnails"}),e.jsxs(l,{gap:"md",wrap:"wrap",children:[e.jsx(s,{src:"https://placehold.co/240x160/D4AF37/FFFFFF?text=Branding",alt:"Branding project",w:240,h:160}),e.jsx(s,{src:"https://placehold.co/240x160/C44536/FFFFFF?text=Web+App",alt:"Web app project",w:240,h:160}),e.jsx(s,{src:"https://placehold.co/240x160/2C5530/FFFFFF?text=Mobile",alt:"Mobile project",w:240,h:160})]})]}),e.jsxs("div",{children:[e.jsx(t,{fw:500,mb:"sm",children:"Receipt Capture Preview"}),e.jsx(s,{src:"https://placehold.co/300x400/FAF8F3/2C2C2C?text=Receipt+Image",alt:"Captured receipt",w:300,h:400,style:{border:"2px dashed #D4AF37",borderRadius:12}})]})]})}),parameters:{docs:{description:{story:"Project portfolio thumbnails with brand-colored backgrounds and receipt capture preview with dashed gold border for the expense tracking feature."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3',
    minHeight: '100vh'
  }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Image Variants</Text>

        <div>
          <Text fw={500} mb="sm">Default (lg radius)</Text>
          <Image src="https://placehold.co/400x200/D4AF37/FFFFFF?text=SemEnaWerk" alt="Placeholder" w={400} h={200} />
        </div>

        <div>
          <Text fw={500} mb="sm">Radius Options</Text>
          <Group gap="md" wrap="wrap">
            <div>
              <Image src="https://placehold.co/200x150/1A1A1A/D4AF37?text=sm" alt="Small radius" w={200} h={150} radius="sm" />
              <Text size="xs" c="dimmed" mt="xs" ta="center">radius=sm</Text>
            </div>
            <div>
              <Image src="https://placehold.co/200x150/1A1A1A/D4AF37?text=lg" alt="Large radius" w={200} h={150} radius="lg" />
              <Text size="xs" c="dimmed" mt="xs" ta="center">radius=lg (default)</Text>
            </div>
            <div>
              <Image src="https://placehold.co/200x150/1A1A1A/D4AF37?text=xl" alt="XL radius" w={200} h={150} radius="xl" />
              <Text size="xs" c="dimmed" mt="xs" ta="center">radius=xl</Text>
            </div>
          </Group>
        </div>

        <div>
          <Text fw={500} mb="sm">With Fallback</Text>
          <Image src={null} alt="Fallback image" w={400} h={200} fallbackSrc="https://placehold.co/400x200/FAF8F3/6B6B6B?text=No+Image" />
        </div>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Default image with lg radius, radius comparison, and fallback behavior when src is null or fails to load.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="xl" style={{
    backgroundColor: '#FAF8F3'
  }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Ethiopian SaaS Use Cases</Text>

        <div>
          <Text fw={500} mb="sm">Project Thumbnails</Text>
          <Group gap="md" wrap="wrap">
            <Image src="https://placehold.co/240x160/D4AF37/FFFFFF?text=Branding" alt="Branding project" w={240} h={160} />
            <Image src="https://placehold.co/240x160/C44536/FFFFFF?text=Web+App" alt="Web app project" w={240} h={160} />
            <Image src="https://placehold.co/240x160/2C5530/FFFFFF?text=Mobile" alt="Mobile project" w={240} h={160} />
          </Group>
        </div>

        <div>
          <Text fw={500} mb="sm">Receipt Capture Preview</Text>
          <Image src="https://placehold.co/300x400/FAF8F3/2C2C2C?text=Receipt+Image" alt="Captured receipt" w={300} h={400} style={{
          border: '2px dashed #D4AF37',
          borderRadius: 12
        }} />
        </div>
      </Stack>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Project portfolio thumbnails with brand-colored backgrounds and receipt capture preview with dashed gold border for the expense tracking feature.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const F=["Variants","UseCases"];export{r as UseCases,a as Variants,F as __namedExportsOrder,u as default};
