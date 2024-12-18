import React from 'react'
import { FlickeringBackground } from '../examples/flickering-background'

export function FlickeringBackgroundDemo () {
  return (
    <div className='w-52 h-52 border  flex justify-center items-center'>
      <FlickeringBackground
        className='size-full bg-zinc-950'
        squareSize={4}
        gridGap={6}
        color='#a7a7a7'
        maxOpacity={0.7}
        flickerChance={0.1}
        width={300}
        height={300}
      />
    </div>
  )
}
