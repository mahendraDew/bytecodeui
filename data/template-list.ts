import { ByteDailyDemo } from '@/components/templates/demos/byte-daily-demo'
import { BytecodeUiDemo } from '@/components/templates/demos/bytecode-ui-demo'
import { ImaginationWaitlistDemo } from '@/components/templates/demos/imagination-waitlist-demo'
import SimplePortfolioDemo from '@/components/templates/demos/simple-portfolio-demo'
import SimpleSAASLandingPageDemo from '@/components/templates/demos/simple-saas-landing-demo'

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
  },
  {
    id: 4,
    title: 'Simple SAAS Landing Page',
    description:
      'Simple SAAS Landing page for your next SAAS idea',
    imageUrl: '/assests/template/simple-saas-landing-page.png',
    category: 'saas',
    slug: 'simple-saas-landing-page',
    pageDemo: SimpleSAASLandingPageDemo,
    components: [
      'badge.tsx',
      'footer.tsx',
      'Main.tsx',
      'navbar.tsx'
    ]
  },
  {
    id: 5,
    title: 'Imagination Waitlist',
    description: "Imagination waitlist - use this template for creating a waitlist of your next app.",
    imageUrl: '/assests/template/imagination-waitlist.png',
    category: 'waitlist',
    slug: "imagination-waitlist",
    pageDemo: ImaginationWaitlistDemo,
    components: [
      'footer.tsx',
      'header.tsx',
      'waitlist-form.tsx'
    ]
  }

]
