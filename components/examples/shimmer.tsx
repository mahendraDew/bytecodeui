import { cn } from '@/lib/utils'
import React from 'react'

type ShimmerProps = {
  children: React.ReactNode
  className?: string
}

export function CardShimmer ({
  children,
  className,
}: ShimmerProps) {
  return (
    <>
      <div
        className={cn(
          'relative overflow-hidden rounded-[calc(.75em+1.5px)] border p-[1px]',
          className
        )}
      >
        <div className='absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,_var(--tw-gradient-stops))] from-black via-gray-900 to-gray-400 opacity-100 transition-all' />
        {children}
      </div>
    </>
  )
}

export function CardItem ({
  text,
  className,
  children
}: {
  text: string
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div
      className={cn(
        'bg-background flex size-full items-center justify-center rounded-xl border',
        className
      )}
    >
      <span className='text-md text-card-foreground font-light tracking-wider'>
        {text}
      </span>
      {children}
    </div>
  )
}
