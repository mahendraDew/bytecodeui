import { Header } from './components/header'
import { WaitlistForm } from './components/waitlist-form'
import { Footer } from './components/footer'

import { Quintessential } from 'next/font/google'

const quintessential = Quintessential({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal']
})

export default function Home () {
  return (
    <div className='min-h-screen bg-white bg-[linear-gradient(180deg,_#5e79f044_0%,_#ffffff_33%,_#ffffff_100%)] flex flex-col'>
      <Header />
      <main className='flex-1 flex flex-col items-center justify-center px-4 py-16 md:py-24'>
        <div className='w-full max-w-3xl mx-auto text-center space-y-8'>
          <div className='w-full  flex justify-center items-center'>
            <div className='relative flex justify-center gap-2 bg-blue-500/10 text-blue-500 p-2 rounded-lg'>
              <div className='absolute top-1 left-1 size-1 bg-blue-500/40 rounded-full' />
              <div className='absolute top-1 right-1 size-1 bg-blue-500/40 rounded-full' />
              <div className='absolute bottom-1 left-1 size-1 bg-blue-500/40 rounded-full' />
              <div className='absolute bottom-1 right-1 size-1 bg-blue-500/40 rounded-full' />
              <span className='inline-flex items-center rounded-lg px-2 py-1 text-xs bg-white shadow-sm'>
                Waitlist v1
              </span>
              <span className='inline-flex items-center rounded-lg px-2 py-1 text-xs bg-white shadow-sm'>
                Coming Soon
              </span>
            </div>
          </div>
          <h1
            className={`text-4xl md:text-7xl font-normal tracking-tight text-gray-900 `}
          >
            The software that sparks
            <br />
            your{' '}
            <em className={`italic ${quintessential.className}`}>
              imagination
            </em>
          </h1>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>
          <WaitlistForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
