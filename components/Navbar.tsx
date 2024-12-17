import { Github } from 'lucide-react'
import Link from 'next/link'

export function Navbar ({ logoText, logoUrl }: { logoText: string, logoUrl: string }) {
  return (
    <>
      <header className='flex items-center justify-between py-7 '>
        <Link href={logoUrl}>
          <div className='text-xl font-bold text-white'>{logoText}</div>
        </Link>
        <nav className='flex gap-6'>
          <a
            href='https://github.com/mahendraDew'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex bg-zinc-900 p-2 rounded-full text-slate-400 transition-colors hover:text-white'
          >
            <Github className='size-5 ' />
          </a>
        </nav>
      </header>
      
    </>
  )
}
