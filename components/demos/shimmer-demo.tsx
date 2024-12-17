import React from 'react'
import { CardItem, CardShimmer } from '@/components/examples/shimmer'

export function ShimmerDemo () {
  return (
    <CardShimmer className='h-52 w-40 flex justify-center items-center'>
      <CardItem text='Card Content' className='border-0 backdrop-blur-3xl' />
    </CardShimmer>
  )
}
