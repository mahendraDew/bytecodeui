'use client'

import type { BundledLanguage } from 'shiki'
import { codeToHtml } from 'shiki'

import { useEffect, useState } from 'react'
import { CopyButton } from './copy-button'

interface Props {
  children: string
  lang: BundledLanguage
}

export function CodeBlock (props: Props) {
  const [html, setHtml] = useState<string>('')

  useEffect(() => {
    async function fetchHtml () {
      const out = await codeToHtml(props.children, {
        lang: props.lang,
        theme: 'github-dark'
      })
      setHtml(out)
    }
    fetchHtml()
  }, [props.children, props.lang])

  return (
    <div className='relative overflow-x-auto rounded-md border  border-neutral-800 p-4 mb-10'>
      <div className='relative'>
        <CopyButton
          className='absolute right-0 top-0'
          copyToClipboard={props.children}
        />
        <div dangerouslySetInnerHTML={{ __html: html }} className=' w-0 h-full'/>
      </div>
    </div>
  )
}
