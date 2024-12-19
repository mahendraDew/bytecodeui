'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SmoothScrollLink } from './components/smooth-scroll-link'
import { FeatureCard } from './components/feature-card'
import { PricingCard } from './components/pricing-card'
import { FlameKindling, LoaderPinwheel, ShipWheel, Sparkle } from 'lucide-react'

export function Home () {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='min-h-screen max-w-7xl bg-black text-white'>
        {/* Navigation */}
        <nav className='container mx-auto flex items-center justify-between p-6'>
          <div className='text-xl text-slate-300 font-lg '>BYTECODE</div>
          <div className='hidden space-x-6 md:flex'>
            <SmoothScrollLink
              href='#features'
              className='text-gray-300 hover:text-white'
            >
              Features
            </SmoothScrollLink>
            <SmoothScrollLink
              href='#pricing'
              className='text-gray-300 hover:text-white'
            >
              Pricing
            </SmoothScrollLink>
            <SmoothScrollLink
              href='#demo'
              className='text-gray-300 hover:text-white'
            >
              Demo
            </SmoothScrollLink>
          </div>
          <div className='flex items-center space-x-4'>
            <Button variant='ghost' className='text-gray-300 hover:text-white'>
              Sign in
            </Button>
            <Button>Sign up</Button>
          </div>
        </nav>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='container mx-auto px-6 py-24 text-center'
        >
          <motion.h1
            className='mb-4 text-5xl font-bold tracking-tight'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Bringing Darkness
            <br />
            <span className='bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent'>
              straight to the web
            </span>
          </motion.h1>
          <motion.p
            className='mx-auto mb-8 max-w-2xl text-gray-400'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            BYTECODE is a React/Nextjs component library with customizable UI,
            responsive designs, and built-in accessibility to help you create
            stunning web apps—lightning fast.
          </motion.p>
          <motion.div
            className='flex justify-center space-x-4'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button size='lg'>Get Started</Button>
            <Button size='lg' variant='outline'>
              View Docs
            </Button>
          </motion.div>
        </motion.section>

        {/* Feature Image */}
        <motion.div
          className='flex justify-center space-x-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <section id='demo' className='container mx-auto px-6 py-12'>
            <div className='overflow-hidden rounded-lg'>
              <Image
                src='/template/pages/bytecode-ui/1.webp'
                alt='BYTECODE UI Components'
                width={800}
                height={400}
                className='w-full object-cover'
              />
            </div>
            <p className='mt-4 text-center text-sm text-gray-400'>
              Maybe we&apos;re bringing brightness too?
            </p>
          </section>
        </motion.div>

        {/* Sponsors */}
        <section className='py-24'>
          <div className='container mx-auto px-6'>
            <h2 className='mb-12 text-center text-3xl font-bold'>
              Trusted by industry leaders
            </h2>
            <div className='flex items-center justify-center'>
              <div className='flex items-center justify-center gap-4 md:gap-24'>
                <span>
                  <Sparkle className='w-16 h-16' />
                </span>
                <span>
                  <FlameKindling className='w-16 h-16' />
                </span>
                <span>
                  <LoaderPinwheel className='w-16 h-16' />
                </span>
                <span>
                  <ShipWheel className='w-16 h-16' />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id='features' className='container mx-auto px-6 py-24'>
          <motion.h2
            className='mb-12 text-center text-3xl font-bold'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Packed with{' '}
            <span className='bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent'>
              powerful
            </span>{' '}
            and{' '}
            <span className='bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent'>
              flexible
            </span>{' '}
            features
          </motion.h2>
          <div className='grid gap-8 md:grid-cols-2'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <FeatureCard
                title='Responsive Design'
                image='/template/pages/bytecode-ui/2.webp'
                tags={['mobile-first', 'flexible-grid']}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <FeatureCard
                title='Customizable Themes'
                image='/template/pages/bytecode-ui/3.webp'
                tags={['dark-mode', 'color-schemes']}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <FeatureCard
                title='Accessibility'
                image='/template/pages/bytecode-ui/4.webp'
                tags={['WCAG', 'keyboard-navigation']}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <FeatureCard
                title='Performance Optimized'
                image='/template/pages/bytecode-ui/5.webp'
                tags={['lazy-loading', 'code-splitting']}
              />
            </motion.div>
          </div>
        </section>

        {/* Pricing */}
        <section id='pricing' className='container mx-auto px-6 py-24'>
          <motion.h2
            className='mb-12 text-center text-3xl font-bold'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            All with {' '}
            <span className='bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent'>
              affordable
            </span>{' '}
            and{' '}
            <span className='bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent'>
              friendly
            </span>{' '}
            pricing
          </motion.h2>
          <div className='grid gap-8 md:grid-cols-3'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <PricingCard
                title='Starter'
                price={0}
                description='Perfect for side projects and small teams'
                features={[
                  'Core UI components',
                  'Basic customization',
                  'Community support'
                ]}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <PricingCard
                title='Pro'
                price={49}
                description='Ideal for growing businesses and larger projects'
                features={[
                  'All Starter features',
                  'Advanced components',
                  'Priority support',
                  'Custom theming'
                ]}
                featured
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <PricingCard
                title='Enterprise'
                price={199}
                description='For large-scale applications and organizations'
                features={[
                  'All Pro features',
                  'Dedicated support',
                  'Custom development',
                  'SLA guarantees',
                  'Early access to new features'
                ]}
              />
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className='border-t border-gray-800 py-12'>
          <div className='container mx-auto flex items-center justify-between px-6'>
            <div className='text-xl font-bold'>BYTECODE</div>
            <div className='flex space-x-6'>
              <Link
                href='https://x.com/mahendra_dew'
                className='text-gray-400 hover:text-white'
              >
                Twitter
              </Link>
              <Link
                href='https://github.com/mahendraDew'
                className='text-gray-400 hover:text-white'
              >
                GitHub
              </Link>
              <Link
                href='https://www.linkedin.com/in/mahendradew/'
                className='text-gray-400 hover:text-white'
              >
                Linkedin
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
