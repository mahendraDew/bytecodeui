import React from 'react'

import { Inter } from 'next/font/google'
import { motion } from 'framer-motion'
import { Spotlight } from '../ui/SpotlightCard'
import Link from 'next/link'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  style: ['normal']
})
export default function Explore () {
  const cards = [
    { title: 'UI', href: '/ui' },
    { title: 'Template', href: '/template' },
    { title: 'Inspiration', href: '/inspiration' }
  ]
  return (
    <div
      className={`w-full h-full pb-10  flex justify-center items-center ${inter.className}`}
    >
      <div className='w-full h-full max-w-7xl px-4 flex flex-col'>
        <motion.h1
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut'
          }}
          className='mt-8 bg-gradient-to-br from-slate-300 to-slate-500 shadow-md py-4 bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-7xl'
        >
          Explore
        </motion.h1>
        {/* <div className='w-full h-full  flex-grow flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-8 md:gap-8 lg:gap-16 xl:gap-24 mt-12 sm:mt-24'>
          <Link
            href={'/ui'}
            className='w-full h-full  bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg flex justify-center items-center transform transition-transform duration-200 hover:scale-105'
          >
            <Spotlight
              spotlightColor='rgba(185, 185, 185, 0.1)'
              className='w-full h-full  bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg flex justify-center items-center transform transition-transform duration-200 hover:scale-105'
            >
              <span className='text-2xl sm:text-3xl md:text-4xl'>UI</span>
            </Spotlight>
          </Link>
          <Link
            href={'/template'}
            className='w-full h-full  bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg flex justify-center items-center transform transition-transform duration-200 hover:scale-105'
          >
            <Spotlight
              spotlightColor='rgba(185, 185, 185, 0.1)'
              className='w-full h-full  bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg flex justify-center items-center transform transition-transform duration-200 hover:scale-105'
            >
              <span className='text-2xl sm:text-3xl md:text-4xl'>Template</span>
            </Spotlight>
          </Link>
        </div> */}
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 mt-12 sm:mt-24  w-full h-full'>
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{scale: 0.99, transition: { duration: 0.15 },
            }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
                delay: index * 0.1
              }}
              className={`${index === 2 ? 'md:col-span-2' : ''}`}
            >
              <Link href={card.href} className='block h-full m-0 p-0'>
                <Spotlight
                  spotlightColor='rgba(185, 185, 185, 0.1)'
                  className={`w-full m-0 p-0 rounded-lg flex items-center justify-center transition-transform duration-300 ${
                    index === 2 ? 'h-64 md:h-80' : 'h-64'
                  }`}
                >
                  <span className='text-2xl sm:text-3xl font-semibold'>
                    {card.title}
                  </span>
                </Spotlight>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
