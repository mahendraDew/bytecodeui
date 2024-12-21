'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'


export function WaitlistForm () {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add your form submission logic here
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setEmail('')
  }

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className='w-full space-y-8'
    >
      <div className='max-w-xs mx-auto w-full space-y-4 relative'>
        {/* <div className='relative flex justify-center gap-2 bg-blue-400/30 text-blue-500 p-2 rounded-lg'> */}
        {/* Decorative dots */}

        {/* Form container with background */}
        <div className='relative bg-blue-500/10 backdrop-blur-sm rounded-lg p-3 shadow-lg'>
        <div className='absolute top-2 left-2 size-1 bg-blue-500/40 rounded-full' />
        <div className='absolute top-2 right-2 size-1 bg-blue-500/40 rounded-full' />
        <div className='absolute bottom-2 left-2 size-1 bg-blue-500/40 rounded-full' />
        <div className='absolute bottom-2 right-2 size-1 bg-blue-500/40 rounded-full' />
          <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
            <input
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Your email...'
              required
              className='w-full px-2 py-1 rounded-lg bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm'
            />
            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full px-2 py-1 rounded-lg bg-[#14161A] text-white text-sm font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
            >
              {isSubmitting ? 'Joining...' : 'Join The Waitlist'}
            </button>
          </form>
        </div>
      </div>
      <div className='space-y-4'>
        <div className='flex justify-center -space-x-2'>
          {[
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop',
            'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop',
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop',
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
          ].map((src, i) => (
            <div
              key={i}
              className='size-8 rounded-full border-2 border-white overflow-hidden'
            >
              <Image
                src={src}
                alt={`Member ${i + 1}`}
                width={32}
                height={32}
                className='w-full h-full object-cover'
              />
            </div>
          ))}
        </div>
        <p className='text-sm text-gray-600'>
          Join the <span className='font-medium'>2,000+</span> members who have
          already signed up.
        </p>
      </div>
    </motion.div>
  )
}
