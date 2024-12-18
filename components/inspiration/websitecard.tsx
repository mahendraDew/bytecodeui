import Image from 'next/image'
import Link from 'next/link'

import { Inter } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  style: ['normal', 'italic']
})

interface WebsiteCardProps {
  title: string
  imageUrl: string
  websiteUrl: string
}

export default function WebsiteCard ({
  title,
  imageUrl,
  websiteUrl
}: WebsiteCardProps) {
  return (
    <Link
      href={websiteUrl}
      target='_blank'
      rel='noopener noreferrer'
      className='block group  transition-all duration-300'
    >
      <div className='bg-zinc-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300'>
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={300}
          className='w-full'
        />
      </div>
        <div className='py-4'>
          <h2 className={`text-xl  text-left transition-all duration-300 group-hover:translate-x-2 ${inter.className}`}>
            {title}
          </h2>
        </div>
    </Link>
  )
}
