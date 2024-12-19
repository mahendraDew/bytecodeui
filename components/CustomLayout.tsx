import Footer from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import React from 'react'

export default function CustomLayout ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='px-4 mx-auto flex min-h-screen max-w-7xl flex-col'>
        <Navbar logoText='TL' logoUrl='/template' />
        {children}
      </div>
      <Footer />
    </>
  )
}