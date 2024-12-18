import React from 'react'
import { FlickeringBackground } from '../examples/flickering-background'

import { Manrope } from 'next/font/google'
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  style: ['normal']
})

export function FlickeringBackgroundDemo () {
  return (
    <div className='flex items-center justify-center h-full w-full overflow-hidden '>
      <div className='bg-black pointer-events-none absolute inset-0 z-20 size-full [mask-image:radial-gradient(transparent,black)]' />

      <FlickeringBackground
        className='bg-zinc-950/70 flex w-full h-full justify-center items-center '
        squareSize={4}
        gridGap={6}
        color='#a7a7a7'
        maxOpacity={0.7}
        flickerChance={0.1}
        // width={400}
        // height={300}
      />
      <div
        className={`w-full  flex justify-center items-center z-10 absolute top-0  h-full font-extrabold text-slate-300 text-3xl px-5 ${manrope.className}`}
      >
        BYTECODE
      </div>
    </div>
  )
}
