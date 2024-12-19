import { BytecodeUiDemo } from "@/components/templates/demos/bytecode-ui-demo";

export const TEMPLATE_LIST = [
    {
      id: 1,
      title: 'bytecode ui',
      description:"Bytecode ui is the collection of ready-to-use components and template lib.",
      imageUrl: '/assests/template/bytecode-ui.png',
      category: 'landing page',
      slug: 'bytecode-ui',
      pageDemo: BytecodeUiDemo,
      components: [
        "feature-card.tsx",
        "pricing-card.tsx",
        "smooth-scroll-link.tsx"
      ]
    }

]