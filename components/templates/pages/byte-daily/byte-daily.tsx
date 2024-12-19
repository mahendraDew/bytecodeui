'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Home () {
  return (
    <main>
      {/* Nav */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='fixed top-5 left-0 right-0 z-50 flex justify-center items-center'
      >
        <nav className='container px-3 py-6 flex justify-center items-center rounded-xl bg-black/50   backdrop-blur-md max-w-5xl '>
          <div className='flex items-center justify-between   w-full '>
            <Link href='/' className='text-sm  '>
              BYTEDAILY
            </Link>
            <div className='hidden md:flex text-sm items-center space-x-8'>
              <Link
                href='#features'
                className='hover:text-purple-400 transition-colors'
              >
                About
              </Link>
              <Link
                href='#pricing'
                className='hover:text-purple-400 transition-colors'
              >
                Pricing
              </Link>
              <Link
                href='#news'
                className='hover:text-purple-400 transition-colors'
              >
                News
              </Link>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Hero */}
      <section className='pt-32 pb-16 px-4 flex items-center justify-center'>
        <div className='max-w-5xl w-full '>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-left w-full '
          >
            <p className='font-extrabold text-md text-gray-700 '>
              We deliver premium creative solution
            </p>
            <h1 className='text-5xl md:text-8xl font-bold mb-8'>
              Change starts with <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300'>
                a single click.
              </span>
            </h1>
            <div className='flex w-full max-w-sm items-center space-x-2'>
              <Input type='email' placeholder='Email' />
              <Button type='submit'>Subscribe</Button>
            </div>
            <div className='mt-16'>
              <Image
                src='/template/pages/byte-daily/main.jpg'
                alt='Platform Preview'
                width={1300}
                height={450}
                className='rounded-lg shadow-2xl'
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-16'
          >
            {[
              { number: '2.4M', label: 'Active Users' },
              { number: '7M', label: 'Total Downloads' },
              { number: '7.4%', label: 'Conversion Rate' },
              { number: '49K', label: 'Positive Reviews' }
            ].map((stat, index) => (
              <div
                key={index}
                className='group text-center h-48 flex justify-center items-center flex-col p-6 bg-zinc-900 hover:text-black hover:bg-gradient-to-tr from-pink-300 to-purple-300 transition-all duration-500 rounded-lg cursor-default'
              >
                <div className='text-3xl font-bold mb-2'>{stat.number}</div>
                <div className='text-gray-400 group-hover:text-black transition-all duration-500'>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section
        id='features'
        className='py-16 px-4 flex justify-center items-center'
      >
        <div className='max-w-5xl'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='space-y-32'
          >
            <div>
              <h2 className='text-4xl md:text-7xl font-bold mb-16'>
                From rough design files, to <br />
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300'>
                  powerful products
                </span>
              </h2>
              <div className='grid md:grid-cols-2 gap-8'>
                <div className='p-8 rounded-xl bg-gradient-to-br from-pink-300 to-purple-300'>
                  <h3 className='text-2xl font-bold mb-4'>Design System</h3>
                  <p className='text-white'>
                    Transform your design files into a living, breathing design
                    system
                  </p>
                  <ul>
                    <ul>
                      Year Founded <br />
                      {' - '}
                      <span className='text-gray-100'>2020</span>
                    </ul>
                    <ul>
                      Total Funding <br />
                      {' - '}
                      <span className='text-gray-100'>$30M</span>
                    </ul>
                    <ul>
                      Team Members <br />
                      {' - '}
                      <span className='text-gray-100'>120</span>
                    </ul>
                  </ul>
                </div>
                <div className='p-8 rounded-xl bg-zinc-900'>
                  <h3 className='text-2xl font-bold mb-4'>
                    Our Core Behaviours
                  </h3>
                  <p className='text-gray-400'>
                    We believe in making design systems accessible and easy to
                    implement
                  </p>
                  <span className='text-gray-500 text-sm'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h2 className='text-4xl md:text-7xl font-bold mb-16'>
                Work more easily with{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300'>
                  everyone
                </span>
              </h2>
              <div className='grid md:grid-cols-3 gap-8'>
                <div className='p-8 h-48 rounded-xl bg-gradient-to-br from-pink-300 to-purple-300'>
                  <h3 className='text-2xl font-bold mb-4'>
                    Team Collaboration
                  </h3>
                  <p className='text-white/80'>
                    Work together seamlessly across your organization
                  </p>
                </div>
                <div className='p-8 h-48 rounded-xl bg-zinc-900'>
                  <h3 className='text-2xl font-bold mb-4'>
                    Work From Anywhere
                  </h3>
                  <p className='text-gray-400'>
                    Access your design system from any device, anywhere
                  </p>
                </div>
                <div className='p-8 h-48 rounded-xl bg-zinc-900'>
                  <h3 className='text-2xl font-bold mb-4'>Chat and share</h3>
                  <p className='text-gray-400'>
                    Communicate with your team in real-time
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Testimonial */}
      <section className='py-16 px-4 flex justify-center items-center'>
        <div className='max-w-5xl'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='bg-zinc-900 p-8 md:p-12 rounded-xl'
          >
            <div className='grid md:grid-cols-2 gap-8 items-center'>
              <div>
                <blockquote className='text-xl md:text-2xl mb-6'>
                &apos;Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type.&apos;
                </blockquote>
                <cite className='text-lg font-semibold'>Ofelia Beshirian</cite>
              </div>
              <div className='flex justify-center md:justify-end'>
                <Image
                  src='https://images.unsplash.com/photo-1519085360753-af0119f7cbe7'
                  alt='Testimonial'
                  width={300}
                  height={300}
                  className='rounded-xl'
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Pricing */}
      <section
        id='pricing'
        className='py-32 px-4 flex justify-center items-center'
      >
        <div className='max-w-5xl w-full'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='bg-gradient-to-br h-screen from-pink-300 to-purple-300 p-8 md:p-16 rounded-3xl flex justify-center items-center'
          >
            <div className='max-w-2xl md:max-h-96 w-full bg-white md:pr-8 text-black  rounded-xl flex justify-center items-center flex-col md:flex-row'>
              <div className='w-full h-full p-8'>
                <h3 className='text-2xl font-bold mb-4'>
                  Unlimited access to all products.
                </h3>
                <p className='text-gray-600 mb-8'>
                  Get unlimited access to all our products and features with our
                  premium plan.
                </p>
                <div className='flex justify-between items-end mb-8'>
                  <div>
                    <h4 className='font-semibold mb-2'>What&apos;s included</h4>
                    <ul className='space-y-2 text-sm text-gray-600'>
                      <li>Premium Tools</li>
                      <li>Feature Keys</li>
                      <li>Custom Plan</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className='w-full h-full flex justify-center p-8 items-center gap-3 flex-col
                        bg-gradient-to-br  from-purple-400/70 to-pink-400/70 text-gray-100 rounded-bl-xl md:rounded-bl-none md:rounded-tr-none md:rounded-br-none rounded-br-xl '
              >
                <p>All updates for one year</p>
                <div className='text-6xl  font-extrabold'>$149</div>
                <Button>Purchase Now</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section
        id='news'
        className='py-16 px-4 flex items-center justify-center'
      >
        <div className='max-w-5xl w-full'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='space-y-16'
          >
            <div>
              <h2 className='text-4xl md:text-7xl font-bold mb-16'>
                Refreshing news for
                <br />
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300'>
                  developers and designers
                </span>
              </h2>
              <p className='text-gray-400 max-w-2xl'>
                Stay up to date with the latest trends and news in the design
                and development world.
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
              {[1, 2, 3].map(item => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                  viewport={{ once: true }}
                  className='group cursor-pointer'
                >
                  <Image
                    src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3'
                    alt={`News ${item}`}
                    width={400}
                    height={300}
                    className='rounded-lg '
                  />
                  <p className='mt-4 group-hover:translate-x-2 transition-all duration-300'>
                    Read blog
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className='flex items-center justify-center '>
        <div className='max-w-6xl h-full  w-full bg-zinc-900 rounded-md flex justify-center items-center'>
          <div className='max-w-5xl w-full rounded-lg py-8 '>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
              <div>
                <h3 className='text-xl font-bold mb-4'>Circle</h3>
                <p className='text-gray-400 max-w-md'>
                  Empowering designers and developers to create amazing
                  experiences.
                </p>
              </div>
              <div className='mt-8 md:mt-0'>
                <ul className='space-y-2 text-gray-400'>
                  <li>Support</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
            <div className='mt-16 pt-8 border-t border-gray-800 text-gray-400 text-sm'>
              © {new Date().getFullYear()} BYTEDAILY. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
