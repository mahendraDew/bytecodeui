'use client'
import Link from 'next/link'
import { ArrowRight, Github } from 'lucide-react'

interface Post {
  date: string
  title: string
  href: string
  github?: string
}


export default function TimeFrameListHoverEffect () {
  const posts: Post[] = [
    {
      date: 'Jan 21, 2025',
      title: 'Blog title #1',
      href: 'https://x.com/mahendra_Dew',
      github: 'https://github.com/mahendraDew'
    },
    {
      date: 'Jan 21, 2025',
      title: 'Blog title #2',
      href: 'https://x.com/mahendra_Dew',
      github: 'https://github.com/mahendraDew'
    },
    {
      date: 'Jan 21, 2025',
      title: 'Blog title #3',
      href: 'https://x.com/mahendra_Dew',
      github: 'https://github.com/mahendraDew'
    },
    {
      date: 'Jan 21, 2025',
      title: 'Blog title #4',
      href: 'https://x.com/mahendra_Dew',
      github: 'https://github.com/mahendraDew'
    }
  ]

  return (
    <main className=' max-w-6xl mx-auto px-6 py-12 '>
      <div className='max-w-2xl'>
        {/* ------------------you can add header here------------------ */}
        {/* <h1 className="text-2xl font-semibold mb-8">Selected posts</h1> */}
        <div className='space-y-6' data-archive-list>
          {posts.map((post, index) => (
            <div
              key={index}
              className='group transition-colors duration-200'
              onMouseEnter={e => {
                const list = e.currentTarget.parentElement
                if (!list) return
                Array.from(list.children).forEach(child => {
                  if (child !== e.currentTarget) {
                    child.classList.add('text-gray-400')
                  }
                })
              }}
              onMouseLeave={e => {
                const list = e.currentTarget.parentElement
                if (!list) return
                Array.from(list.children).forEach(child => {
                  child.classList.remove('text-gray-400')
                })
              }}
            >
              <div className='grid grid-cols-1 sm:grid-cols-[100px,1fr,auto] gap-2 sm:gap-4 items-baseline'>
                <span className='text-sm text-gray-500'>{post.date}</span>
                <Link
                  href={post.href}
                  className='text-lg inline-flex items-center gap-2'
                >
                  {post.title}
                  <ArrowRight className='w-4 h-4 opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 hover:text-gray-900' />
                </Link>
                {post.github && (
                  <Link
                    href={post.github}
                    className='hidden sm:inline-flex items-center gap-2 text-sm text-gray-500 opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 hover:text-gray-900'
                  >
                    <Github className='w-4 h-4' />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
