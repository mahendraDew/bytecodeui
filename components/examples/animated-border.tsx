import { cn } from '@/lib/utils'
import React from 'react'

type AnimatedProps = {
  children?: React.ReactNode
  className?: string
  from?: string
  to?: string
  stop?: string
}

export function CardAnimatedBorder ({
  children,
  className,
  from,
  to,
  stop
}: AnimatedProps) {
  return (
    <div
      className={cn(
        'relative size-full overflow-hidden rounded-[calc(.75em+1.5px)] border p-[1px]',
        className
      )}
    >
      <div
        style={{
          backgroundImage: `conic-gradient(from 90deg at 50% 50%,${from} 0%,${to} 50%,${stop} 100%)`
        }}
        className='absolute inset-[-1000%] animate-[spin_3s_linear_infinite]'
      />
      {children}
    </div>
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
