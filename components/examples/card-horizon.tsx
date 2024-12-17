"use client"

import { cn } from '@/lib/utils'
import React, { useState } from 'react'

type HorizonProps = {
  children: React.ReactNode
  className?: string
}

export function CardHorizon ({ children, className }: HorizonProps) {
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () =>{
        setHover(true);
    }
    const handleMouseLeave = () =>{
        setHover(false);
    }
    
  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          'relative size-full rounded-xl bg-background cursor-pointer text-gray-400 hover:text-white ',
          className
        )}
      >
        <div className='w-full absolute top-0 flex  justify-center items-center'>
            <div className={cn("h-[1px] w-[10px] bg-gradient-to-r from-[rgba(17,17,17,0)] via-yellow-100 to-[rgba(17,17,17,0)] opacity-0 transition-all duration-500", hover && "w-[100px] opacity-100 duration-500")}/>
        </div>
        {children}
      </div>
    </>
  )
}
