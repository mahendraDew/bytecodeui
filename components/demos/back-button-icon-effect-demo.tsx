import React from 'react'
import { ChevronLeft } from 'lucide-react'
import { Button } from '../examples/back-button-icon-effect'

function BackButtonIconDemo () {
  return (
    <Button variant='ghost' className='group gap-2 -ml-4'>
      <span className='relative w-4 h-4'>
        <ChevronLeft className='w-4 h-4 transition-all duration-200 group-hover:-translate-x-1' />
        <ChevronLeft className='w-4 h-4 absolute top-0 left-0 transition-all duration-200 opacity-0 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100' />
      </span>
      Back
    </Button>
  )
}

export default BackButtonIconDemo
