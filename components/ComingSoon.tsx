import React from 'react'
import AnimatedShinyText from './ui/animated-shiny-text'

export function ComingSoon ({ text }: { text: string }) {
  return (
    <div className='bg-gradient-to-br from-slate-300 to-slate-500 py-12 bg-clip-text text-center font-medium tracking-tight text-transparent text-lg md:text-3xl bg-red-300'>
     {/* <div className=' py-10  text-center font-medium tracking-tight  text-lg md:text-3xl bg-red-300'>  */}
      <AnimatedShinyText className='inline-flex items-center justify-center px-4 py-1 transition ease-out'>
        {text}
      </AnimatedShinyText>
    </div>
  )
}
