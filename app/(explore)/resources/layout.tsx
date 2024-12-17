import Footer from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import React from 'react'

export default function layout ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='px-4 mx-auto flex min-h-screen max-w-7xl flex-col'>
        <Navbar logoText='RS' logoUrl='/resources' />
        {children}
      </div>
      <Footer />
    </>
  )
}
