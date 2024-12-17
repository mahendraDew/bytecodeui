import Link from 'next/link'
import React from 'react'

type CardContainerProps = {
  children: React.ReactNode
  name: string
  description: string
  slug: string
}

export default function CardContainer ({
  children,
  name,
  description,
  slug
}: CardContainerProps) {
  return (
    <Link href={"/ui/" + slug}>
      <div className='relative flex h-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-[radial-gradient(#ffffff12_1px,transparent_1px)] bg-[size:16px_16px] py-10'>
        {children}
      </div>
      <p className='mb-2 mt-4 text-xl font-bold text-neutral-700 dark:text-neutral-100'>
        {name}
      </p>
      <p className='text-muted-foreground mt-2 text-sm font-normal'>
        {description}
      </p>
    </Link>
  )
}
