// import { Navbar } from '@/components/Navbar'
'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Manrope } from 'next/font/google'
import { COMPONENTS_LIST } from '@/data/component-list'
import { CardContainer } from '@/components/card-container'
import AnimatedShinyText from '@/components/ui/animated-shiny-text'
import { ComingSoon } from '@/components/ComingSoon'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  style: ['normal']
})

export default function Page () {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const animation = useAnimation()
  const cardContainerIsInView = useInView(ref, { once: true })

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } }
  }

  useEffect(() => {
    if (cardContainerIsInView) {
      animation.start('show')
    }
  }, [cardContainerIsInView, animation])

  return (
    <div className='w-full h-full  flex flex-col '>
      <div className='w-full h-full  mb-32'>
        {/* Hero Heading */}
        <section>
          <div
            className={`relative z-0 mx-auto max-w-3xl pb-24 pt-12 text-center `}
          >
            <motion.div
              initial='hidden'
              ref={ref}
              animate={isInView ? 'show' : 'hidden'}
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
            >
              <motion.h1
                variants={FADE_DOWN_ANIMATION_VARIANTS}
                className='  bg-gradient-to-br from-slate-300 to-zinc-500 bg-clip-text text-transparent tracking-normal text-4xl md:text-7xl'
              >
                {/* <div>
              <h1 className='mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl'> */}
                <AnimatedShinyText className='inline-flex items-center justify-center px-4 py-1 transition ease-out'>
                  ui components
                </AnimatedShinyText>
                {/* </h1> */}
              </motion.h1>
              <motion.h1 variants={FADE_DOWN_ANIMATION_VARIANTS}>
                <p
                  className={`mt-6 text-center text-gray-500 [text-wrap:balance] md:text-xl ${manrope.className}`}
                >
                  A collection of ready-to-use interactive components for your
                  projects.
                </p>
              </motion.h1>
            </motion.div>

            {/* </div> */}
          </div>
        </section>
        {/* Component-Listing card */}
        <div className='mx-auto max-w-7xl py-10'>
          <motion.div
            ref={ref}
            initial='hidden'
            animate={animation}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className='mx-auto max-w-7xl w-full h-full py-10'
          >
            <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
              <div className='grid grid-cols-1 gap-36 md:grid-cols-2 lg:grid-cols-3 '>
                {COMPONENTS_LIST.map((component, index) => (
                  <CardContainer
                    key={index}
                    name={component.name}
                    description={component.description}
                    slug={component.slug}
                  >
                    <component.component />
                  </CardContainer>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className='w-full h-full mx-auto max-w-7xl  flex justify-center items-center'>
        <ComingSoon text='More Coming soon' />
      </div>
    </div>
  )
}
