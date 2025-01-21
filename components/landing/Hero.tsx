'use client'

import React from 'react'
import FlickeringGrid from '../ui/flickering-grid'

import { Manrope, Inter } from 'next/font/google'
import GradualSpacing from '../ui/gradual-spacing'

import { motion, useInView } from 'framer-motion'
import AnimatedShinyText from '../ui/animated-shiny-text'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  style: ['normal']
})
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  style: ['normal', 'italic']
})

export default function Hero () {
  const ref = React.useRef(null)
  const isInView = useInView(ref)

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } }
  }
  return (
    <div className='w-full min-h-screen h-screen flex justify-center items-center '>
      <div className='z-0 relative  w-full h-full'>
        <FlickeringGrid
          className='-z-0  size-full bg-black'
          squareSize={4}
          gridGap={6}
          color='#6b728011'
          maxOpacity={0.1}
          flickerChance={0.1}
        />

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
          <div
            className={`w-full  flex justify-center items-center z-10 absolute top-0  h-full px-5 ${manrope.className} `}
          >
            {/*home page layout v1 */}
            {/* <motion.h1
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className=' text-4xl font-bold  bg-gradient-to-br from-slate-300 to-zinc-500 bg-clip-text text-transparent tracking-normal sm:text-7xl  md:text-9xl '
            >
              <div className='w-full h-1/2 text-9xl md:text-11xl lg:text-13xl font-extrabold   flex items-end  '>
                BYTE
              </div>
            </motion.h1>
            <motion.h1
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className=' text-4xl font-bold  bg-gradient-to-br from-slate-300 to-zinc-500 bg-clip-text text-transparent tracking-normal sm:text-7xl  md:text-9xl '
            >
              <div className='w-full h-1/2 text-9xl md:text-11xl lg:text-13xl font-extrabold  flex items-start  justify-end '>
                CODE
              </div>
            </motion.h1> */}

            {/*home page layout v2*/}
            <motion.h1 variants={FADE_DOWN_ANIMATION_VARIANTS} className='  '>
              <AnimatedShinyText className='inline-flex items-center justify-center px-4 py-1 transition ease-out font-semibold  bg-gradient-to-br from-slate-300 to-zinc-500 bg-clip-text text-transparent tracking-normal text-xl'>
                BYTECODE
              </AnimatedShinyText>
            </motion.h1>
          </div>
        </motion.div>
        <div
          className={`absolute z-10 top-5 right-0  px-5 uppercase ${inter.className} italic font-light`}
        >
          <GradualSpacing
            className='font-display text-center text-xs sm:text-sm bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent'
            text='< A Minimalist UI components'
          />
        </div>
        <div
          className={`absolute z-10 bottom-5 left-0  px-5 uppercase ${inter.className} italic font-light`}
        >
          <GradualSpacing
            className='font-display text-center  text-xs sm:text-sm bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent'
            text='Simple | Minimal | Classy >'
          />
        </div>
        <div
          className={`absolute z-0 w-full h-1/5  bg-gradient-to-b from-black to-transparent top-0  px-5`}
        ></div>
        <div
          className={`absolute z-0 w-full h-1/5  bg-gradient-to-b from-transparent to-black bottom-0  px-5`}
        ></div>
      </div>
    </div>
  )
}
