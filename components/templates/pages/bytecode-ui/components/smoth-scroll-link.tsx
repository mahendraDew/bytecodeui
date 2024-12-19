"use client"

import { ReactNode } from 'react'
import Link from 'next/link'

interface SmoothScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export function SmoothScrollLink({ href, children, className }: SmoothScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  )
}

