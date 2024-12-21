'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Sun, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='w-full px-4 py-4 flex justify-center items-center'
    >
      <div className='relative max-w-5xl bg-blue-500/10 p-3  rounded-lg w-full'>
        <div className='absolute top-2 left-2 size-1 bg-blue-500/40 rounded-full' />
        <div className='absolute top-2 right-2 size-1 bg-blue-500/40 rounded-full' />
        <div className='absolute bottom-2 left-2 size-1 bg-blue-500/40 rounded-full' />
        <div className='absolute bottom-2 right-2 size-1 bg-blue-500/40 rounded-full' />

        <div className='max-w-5xl bg-white p-1 mx-auto rounded-lg flex items-center justify-between'>
          <Link href='/' className='flex items-center space-x-2'>
            <div className='size-8 rounded bg-gradient-to-br from-[#6366F1] to-[#8B5CF6]' />
          </Link>
          <nav className='hidden md:flex items-center space-x-8'>
            <Link
              href='#'
              className='text-sm text-gray-600 hover:text-gray-900'
            >
              Updates
            </Link>
            <Link
              href='#'
              className='text-sm text-gray-600 hover:text-gray-900'
            >
              FAQ
            </Link>
            <Link
              href='#'
              className='text-sm text-gray-600 hover:text-gray-900'
            >
              Contact us
            </Link>
            <button className='size-8 flex items-center justify-center rounded-full bg-white shadow-sm'>
              <Sun className='size-4 text-blue-500' />
            </button>
          </nav>
          <button
            className='md:hidden size-8 flex items-center justify-center rounded-full bg-white shadow-sm'
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className='size-4 text-gray-800' />
            ) : (
              <Menu className='size-4 text-gray-800' />
            )}
          </button>
        </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className='absolute top-full z-10 left-0 right-0 bg-white shadow-lg rounded-lg overflow-hidden'
          >
            <nav className='flex flex-col py-4'>
              <Link
                href='#'
                className='px-4 py-2 text-sm text-gray-600 hover:bg-gray-100'
              >
                Updates
              </Link>
              <Link
                href='#'
                className='px-4 py-2 text-sm text-gray-600 hover:bg-gray-100'
              >
                FAQ
              </Link>
              <Link
                href='#'
                className='px-4 py-2 text-sm text-gray-600 hover:bg-gray-100'
              >
                Contact us
              </Link>
              <button className='mx-4 mt-2 py-2 flex items-center justify-center rounded-full bg-gray-100'>
                <Sun className='size-4 mr-2' />
                <span className='text-sm text-gray-600'>Toggle theme</span>
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      </div>

    </motion.header>
  )
}
