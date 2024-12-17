// import { Navbar } from '@/components/Navbar'
import React from 'react'

import { Manrope } from 'next/font/google'
import { COMPONENTS_LIST } from '@/data/component-list'
import {CardContainer} from '@/components/card-container'
import AnimatedShinyText from '@/components/ui/animated-shiny-text'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  style: ['normal']
})

export default function page () {
  return (
    // <div className='px-4 mx-auto flex min-h-screen max-w-7xl flex-col'>
    //   <Navbar logoText='UI' />
    <div className='w-full h-full  mb-32'>

      {/* Hero Heading */}
      <section>
        <div
          className={`relative z-0 mx-auto max-w-3xl pb-24 pt-12 text-center `}
        >
          <div>
            <h1 className='mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl'>
              <AnimatedShinyText className='inline-flex items-center justify-center px-4 py-1 transition ease-out'>
                ui components
              </AnimatedShinyText>
            </h1>
            <p
              className={`mt-6 text-center text-gray-500 [text-wrap:balance] md:text-xl ${manrope.className}`}
            >
              A collection of ready-to-use interactive components for your
              projects.
            </p>
          </div>
        </div>
      </section>
      {/* Component-Listing card */}
      <div className='mx-auto max-w-7xl py-10 '>
        <div className='grid grid-cols-1 gap-36 md:grid-cols-2 lg:grid-cols-3'>
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
      </div>
    </div>
    // </div>
  )
}