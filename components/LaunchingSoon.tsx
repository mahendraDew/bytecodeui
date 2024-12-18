import React from 'react'
import { LampDemo } from './ui/lamp'

export default function LaunchingSoon({text}: {text:string}) {
  return (
    <div className='w-full h-screen'>
        <LampDemo text={text}/>
    </div>
  )
}
