'use client'
import React, { useState } from 'react'
import Highlight from 'react-highlight'
import 'highlight.js/styles/github-dark.css'

import { Button } from '@/components/ui/button'
import { Copy, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CodeHighlightProps {
  code?: string
  lang?: 'tsx' | 'shell'
}

const CodeHighlight = ({ code, lang = 'tsx' }: CodeHighlightProps) => {
  const [copied, setCopied] = useState(false)
  return (
    <div className='relative rounded-md p-4 '>
      <Button
        className={cn(
          'absolute right-4 top-4 h-8 w-8 bg-secondary',
          lang === 'shell' && 'right-1 top-1'
        )}
        variant='ghost'
        size='icon'
        onClick={() => {
          navigator.clipboard.writeText(code || '')
          setCopied(true)
          setTimeout(() => {
            setCopied(false)
          }, 3000)
        }}
      >
        {copied ? (
          <Check className='h-4 w-4 text-green-600 dark:text-green-500' />
        ) : (
          <Copy className='h-4 w-4' />
        )}
      </Button>
      <div className={'h-full w-full '}>
        <Highlight className={cn('h-full w-full', lang)}>{code}</Highlight>
      </div>
    </div>
  )
}

export default CodeHighlight
