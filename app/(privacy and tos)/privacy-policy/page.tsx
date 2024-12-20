import React from 'react'
import { ArrowLeft } from 'lucide-react'

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <div className='min-h-screen bg-transparent flex flex-col justify-center items-center mt-20 z-10'>
        <header className='max-w-7xl w-full px-4 md:px-2 h-14 flex items-center '>
          <a href={'/'} className=''>
            <span>
              <ArrowLeft />
            </span>
          </a>
        </header>
        <main className='max-w-7xl flex-grow container mx-auto px-4 py-8'>
          <h1 className='text-4xl font-bold mb-6 text-purple-100'>
            Privacy Policy
          </h1>
          <div className='prose max-w-none text-white'>
            <h2 className='text-2xl font-semibold mt-6 mb-4 text-white'>
              Introduction
            </h2>
            <p className='mb-4'>
              We are committed to protecting your personal information and your
              right to privacy. If you have any questions or concerns about this
              policy, or our practices with regards to your personal
              information, please contact us.
            </p>

            <h2 className='text-2xl font-semibold mt-6 mb-4 text-white'>
              Information We Collect
            </h2>
            <p className='mb-4'>
              We collect personal information that you voluntarily provide to us
              when you register on the website, express an interest in obtaining
              information about us or our products and services, when you
              participate in activities on the website or otherwise when you
              contact us.
            </p>

            <h2 className='text-2xl font-semibold mt-6 mb-4 text-white'>
              How We Use Your Information
            </h2>
            <p className='mb-4'>
              We use personal information collected via our website for a
              variety of business purposes described below. We process your
              personal information for these purposes in reliance on our
              legitimate business interests, in order to enter into or perform a
              contract with you, with your consent, and/or for compliance with
              our legal obligations.
            </p>

            <h2 className='text-2xl font-semibold mt-6 mb-4 text-white'>
              Sharing Your Information
            </h2>
            <p className='mb-4'>
              We only share information with your consent, to comply with laws,
              to provide you with services, to protect your rights, or to
              fulfill business obligations.
            </p>

            <h2 className='text-2xl font-semibold mt-6 mb-4 text-white'>
              Changes to This Policy
            </h2>
            <p className='mb-4'>
              We may change this privacy policy from time to time. If we make
              changes, we will notify you by revising the date at the top of the
              policy and, in some cases, provide you with additional notice.
            </p>
            <h2 className='text-2xl font-semibold mt-6 mb-4 text-white'>
              Contact Us
            </h2>
            <p className='mb-4'>
              If you have questions or comments about these terms, you may email
              us{' '}
              <span className='underline italic'>
                <a href='mailto:mahendradewangan195@gmail.com'>
                  mahendradewangan195@gmail.com
                </a>
              </span>{' '}
              .
            </p>
          </div>
        </main>
      </div>
    </>
  )
}

export default PrivacyPolicy
