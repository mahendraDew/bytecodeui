import React from 'react'
import { CardAnimatedBorder, CardItem } from '@/components/examples/animated-border'

export function AnimatedBorderDemo () {
  return (
    <CardAnimatedBorder
      className='h-52 w-40'
      to='#1f1f1f'
      from='#ffffff'
      stop='#ffffff'
    >
      <CardItem text='Card Content' className='backdrop-blur-3xl' />
    </CardAnimatedBorder>
  )
}
