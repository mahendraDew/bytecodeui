import React from 'react'
import AnimatedShinyText from './ui/animated-shiny-text'

export function ComingSoon ({ text }: { text: string }) {
  return (
    <div className='mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center font-medium tracking-tight text-transparent text-md md:text-xl'>
      <AnimatedShinyText className='inline-flex items-center justify-center px-4 py-1 transition ease-out'>
        {text}
      </AnimatedShinyText>
    </div>
  )
}
