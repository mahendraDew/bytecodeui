"use client"

import Hero from '@/components/landing/Hero'
import Footer from '@/components/Footer'
import { useState } from 'react'
import Preloader from '@/components/landing/preloader'
import Explore from '@/components/landing/Explore'
import Builtwith from '@/components/landing/Builtwith'


export default function Home () {
  const [loading, setLoading] = useState(true)

  return (
    <div className='w-full h-full'>
     {loading ? (
          <Preloader key="preloader" onComplete={() => setLoading(false)} />
        ) : (
          <>
            <Hero />

            <Explore />

            <Builtwith />
            
            <Footer /> 
          </>
        )}
    </div>
  )
}
