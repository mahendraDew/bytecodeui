'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import { useMotionValue } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useMotionTemplate, motion, MotionValue } from 'framer-motion'
type ModernCardProps = {
  children?: React.ReactNode
  className?: string
}

export function ModernCard ({ children, className }: ModernCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const [randomString, setRandomString] = useState('')

  useEffect(() => {
    const str = generateRandomString(1500)
    setRandomString(str)
  }, [])

  function onMouseMove ({
    currentTarget,
    clientX,
    clientY
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)

    const str = generateRandomString(1500)
    setRandomString(str)
  }

  return (
    <>
      <div
        className={cn(
          'border border-black/[0.2] bg-gradient-to-tr from-zinc-400/10 to-transparent/5 dark:border-white/[0.2] flex flex-col items-start  relative h-full w-full px-5 ',
          className
        )}
      >
        <Icon className='absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black' />
        <Icon className='absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black' />
        <Icon className='absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black' />
        <Icon className='absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black' />
        <div
          className={cn(
            'p-0.5  bg-transparent aspect-square  flex items-center justify-center w-full h-full relative text-gray-500 hover:text-white cursor-pointer',
            className
          )}
        >
          <div
            onMouseMove={onMouseMove}
            className='group/card  w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full'
          >
            <CardPattern
              mouseX={mouseX}
              mouseY={mouseY}
              randomString={randomString}
            />
            <div className='relative z-10 flex items-center justify-center'>
              <div className='relative h-full w-full   flex flex-col gap-6  justify-center '>
                {/* <div className='absolute w-full h-full bg-white/[0.8] dark:bg-transparent blur-sm ' /> */}
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export function CardPattern ({
  mouseX,
  mouseY,
  randomString
}: {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
  randomString: string
}) {
  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`
  const style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className='pointer-events-none'>
      <div className='absolute inset-0   [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50'></div>
      <motion.div
        className='absolute inset-0  bg-gradient-to-r from-zinc-500 to-ornage-500 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500'
        style={style}
      />
      <motion.div
        className='absolute inset-0  opacity-0 mix-blend-overlay  group-hover/card:opacity-100'
        style={style}
      >
        <p className='absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500'>
          {randomString}
        </p>
      </motion.div>
    </div>
  )
}

const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
export const generateRandomString = (length: number) => {
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

export const Icon = ({
  className,
  ...rest
}: { className?: string } & React.SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className={className}
      {...rest}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m6-6H6' />
    </svg>
  )
}
