import React from 'react'
import { ArrowLeft } from 'lucide-react'

const Tos: React.FC = () => {
  return (
    <>
      <div className='min-h-screen bg-transparent flex flex-col justify-center items-center  mt-20  text-white'>
        <header className='max-w-7xl w-full px-4 md:px-2 h-14 flex items-center '>
          <a href={'/'} className=''>
            <span>
              <ArrowLeft />
            </span>
          </a>
        </header>
        <main className='max-w-7xl flex-grow  container mx-auto px-4 py-8'>
          <h1 className='text-4xl font-bold mb-6 text-purple-100'>
            Terms of Service
          </h1>
          <div className='prose max-w-none text-white'>
            <h2 className='text-2xl font-semibold mt-6 mb-4 text-white'>
            Introduction
            </h2>
            <p className='mb-4'>
            By accessing this website we assume you accept these terms of service in full. Do not continue to use the website if you do not accept all of the terms of service stated on this page.
            </p>

            <h2 className='text-2xl font-semibold mt-6 mb-4 text-white'>
            License
            </h2>
            <p className='mb-4'>
            Unless otherwise stated, we and/or our licensors own the intellectual property rights for all material on the website. All intellectual property rights are reserved. You may view and/or print pages from the website for your own personal use subject to restrictions set in these terms of service.


            </p>

            <h2 className='text-2xl font-semibold mt-6 mb-4 text-white'>
            User Comments
            </h2>
            <p className='mb-4'>
            Certain parts of this website offer the opportunity for users to post and exchange opinions, information, material and data or &apos;Comments&apos; in areas of the website. We do not screen, edit, publish or review Comments prior to their appearance on the website and Comments do not reflect our views or opinions.


            </p>

            <h2 className='text-2xl font-semibold mt-6 mb-4 text-white'>
            Hyperlinking to our Content
            </h2>
            <p className='mb-4'>
            The following organizations may link to our website without prior written approval: Government agencies, Search engines, News organizations, Online directory distributors, and System wide Accredited Businesses.


            </p>

            <h2 className='text-2xl font-semibold mt-6 mb-4 text-white'>
            Content Liability
            </h2>
            <p className='mb-4'>
            We shall have no responsibility or liability for any content appearing on your website. You agree to indemnify and defend us against all claims arising out of or based upon your website.
            </p>

            <h2 className='text-2xl font-semibold mt-6 mb-4 text-white'>
            Contact Us
            </h2>
            <p className='mb-4'>
            If you have questions or comments about these terms, you may email us{" "}<span className='underline italic'><a href='mailto:mahendradewangan195@gmail.com'>mahendradewangan195@gmail.com</a></span> {" "}.
            </p>
          </div>
        </main>
      </div>
    </>
  )
}

export default Tos