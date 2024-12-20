import React from 'react'
import TextSVG from './ui/text-gradient-onhover'
import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  style: ['normal', 'italic']
})

export default function Footer () {
  return (
    <div className=' w-full h-1/2 text-zinc-300 p-5 pt-10  bg-zinc-950 flex flex-col justify-center items-center'>
      <div className='w-full h-full max-w-7xl flex flex-col gap-2 md:gap-0 md:flex-row'>
        <div className=' w-full max-w-7xl h-full flex flex-col gap-2 '>
            <span><Link href={"/ui"} className='italic text-gray-300 hover:text-white transition-colors '>/ui</Link></span>
            <span><Link href={"/template"} className='italic text-gray-300 hover:text-white transition-colors '>/template</Link></span>
            <span><Link href={"/inspiration"} className='italic text-gray-300 hover:text-white transition-colors '>/inspiration</Link></span>

        </div>
        <div className=' w-full max-w-7xl h-full flex flex-col md:items-end gap-2 '>
            <span><Link href={"/privacy-policy"} className='italic text-gray-300 hover:text-white transition-colors '>/privacy policy</Link></span>
            <span><Link href={"/tos"} className='italic text-gray-300 hover:text-white transition-colors '>/terms of service</Link></span>

        </div>
      </div>
      <div className=' w-full max-w-7xl h-full font-extrabold   flex justify-center items-center'>
        <TextSVG text='BYTECODE'/>
      </div>
      <p
        className={`cursor-default bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center font-thin tracking-tight text-transparent  text-zinc-500  text-sm md:text-base ${inter.className}`}
      >
        <span className='cursor-default'>crafted by </span>
        <a
          href='https://x.com/mahendra_dew'
          className='italic hover:text-white transition-colors uppercase'
          target='_blank'
        >
          mahendra
        </a>
      </p>
    </div>
  )
}
