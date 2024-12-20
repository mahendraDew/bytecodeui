import { ByteDailyDemo } from '@/components/templates/demos/byte-daily-demo'
import { BytecodeUiDemo } from '@/components/templates/demos/bytecode-ui-demo'
import SimplePortfolioDemo from '@/components/templates/demos/simple-portfolio-demo'

export const TEMPLATE_LIST = [
  {
    id: 1,
    title: 'Bytecode ui',
    description:
      'Bytecode ui is the collection of ready-to-use components and template lib.',
    imageUrl: '/assests/template/bytecode-ui.png',
    category: 'landing page',
    slug: 'bytecode-ui',
    pageDemo: BytecodeUiDemo,
    components: [
      'feature-card.tsx',
      'pricing-card.tsx',
      'smooth-scroll-link.tsx'
    ]
  },
  {
    id: 2,
    title: 'Bytedaily',
    description:
      'Bytedaily - get the daily news on your mail.',
    imageUrl: '/assests/template/byte-daily.png',
    category: 'One page',
    slug: 'byte-daily',
    pageDemo: ByteDailyDemo,
    components: [
      
    ]
  },
  {
    id: 3,
    title: 'Simple Portfolio',
    description:
      'Simple portfolio to showcase your work',
    imageUrl: '/assests/template/simple-portfolio.png',
    category: 'portfolio',
    slug: 'simple-portfolio',
    pageDemo: SimplePortfolioDemo,
    components: [
      
    ]
  }
]
