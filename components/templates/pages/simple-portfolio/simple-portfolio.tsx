'use client'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'Project One',
    subtitle: 'Web Design',
    image: 'https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1'
  },
  {
    title: 'Project Two',
    subtitle: 'Web Development',
    image: 'https://images.unsplash.com/photo-1614849286447-fb815456e5a5'
  },
  {
    title: 'Project Three',
    subtitle: 'Web Development',
    image: 'https://images.unsplash.com/photo-1508614999368-9260051292e5'
  },
  {
    title: 'Project Four',
    subtitle: 'Web Development',
    image: 'https://images.unsplash.com/photo-1614851099362-9adf73ccebe9'
  }
  // Add more projects...
]

const services = [
  {
    title: 'Art Direction',
    description:
      'We help with the creation and development of online advertising ideas, with particular focus on their visual appearance.'
  },
  {
    title: 'Web Design',
    description:
      'We build and optimize your online presence. Website is the digital entry point into your business and a powerful revenue channel.'
  },
  {
    title: 'Branding',
    description:
      'We design key brand elements such as the logo, color scheme, typography, and other design components that makes your brand stand out from competitors.'
  },
  {
    title: '3D Design',
    description:
      'We combine creative design and technical skills to build striking 3D visualisations that bring your project to life.'
  }
  // Add more services...
]

export const SimplePortfolio = () => {
  return (
    <div className='container mx-auto px-4 md:px-6'>
      {/* Nav */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='fixed top-5 left-0 right-0 z-50 flex justify-center items-center'
      >
        <nav className='w-full  flex justify-center items-center px-4 md:px-0'>
          <div className='w-full md:container flex items-center justify-between md:w-full px-3 py-4  rounded-lg bg-white/10 backdrop-blur-md'>
            <Link href='/' className='text-sm'>
              MAHENDRA
            </Link>
            <div className='hidden md:flex text-sm items-center space-x-6'>
              <Link
                href='#features'
                className='hover:text-purple-400 transition-colors'
              >
                ABOUT
              </Link>
              <Link
                href='#pricing'
                className='hover:text-purple-400 transition-colors'
              >
                WORK
              </Link>
              <Link
                href='#news'
                className='hover:text-purple-400 transition-colors'
              >
                PROJECT
              </Link>
            </div>
            <div className='md:hidden'>MENU</div>
          </div>
        </nav>
      </motion.header>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='relative flex flex-col items-left w-full  py-24 sm:py-32'
      >
        {/* Radial Gradient Background */}
        <div className='absolute -top-40 md:-top-96 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-[radial-gradient(circle,rgba(255,105,180,0.5),rgba(138,43,226,0.4),rgba(30,144,255,0.2))] rounded-full blur-xl opacity-50'></div>

        <h1 className='text-6xl sm:text-8xl font-bold mb-4'>Hello 👋</h1>
        <p className='text-3xl sm:text-5xl font-light leading-relaxed '>
          I&apos;m Mahendra Dewangan - curious designer and developer{' '}
          <br className='hidden md:block' /> based in India.
        </p>
        <motion.div
          className='flex flex-wrap gap-4 mt-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {['GitHub', 'LinkedIn', 'Twitter', 'Blog', 'Email'].map(link => (
            <a
              key={link}
              href='#'
              className='text-base sm:text-lg underline hover:text-gray-400 transition-colors'
            >
              {link}
            </a>
          ))}
        </motion.div>
      </motion.header>

      {/* Work */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='mt-16'
      >
        <h2 className='text-2xl sm:text-4xl font-bold mb-6'>Work.</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {projects.map(({ title, subtitle, image }, index) => (
            <motion.div
              key={index}
              className='relative group'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={image}
                alt={title}
                className='rounded-lg w-full h-auto'
                width={600}
                height={600}
              />
              <p className='mt-1 text-base sm:text-lg'>{title}</p>
              <motion.div
                className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition'
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className='flex flex-col items-center justify-center h-full text-white'>
                  <h3 className='text-xl font-bold'>{title}</h3>
                  <p className='text-sm'>{subtitle}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Services */}
      <section className='mt-16'>
        <h2 className='text-2xl sm:text-4xl font-bold mb-6'>Services.</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {services.map(({ title, description }, index) => (
            <motion.div
              key={index}
              className='p-4 sm:p-6 border border-gray-700 rounded-lg hover:bg-pink-100/90 transition-all duration-500'
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className='text-lg sm:text-xl font-bold mb-2'>{title}</h3>
              <p className='text-sm sm:text-base'>{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='mt-16 py-6 text-left'
      >
        <p className='text-4xl sm:text-6xl'>LET&apos;S WORK TOGETHER</p>
        <Button className='mt-4 px-6 py-2 text-sm sm:text-base text-black rounded-md'>
          Schedule a call
        </Button>
        <div
                  className='flex justify-left gap-4 mt-6'
>
          {['GitHub', 'LinkedIn', 'Twitter', 'Blog', 'Email'].map(link => (
            <a
              key={link}
              href='#'
              className='text-lg underline hover:text-gray-400 transition-colors'
            >
              {link}
            </a>
          ))}
        </div>
        <p className='mt-6'>Made with &lt;3 by <a href='https://x.com/mahendra_dew' className='underline'>Mahendra</a></p>
      </motion.footer>
    </div>
  )
}
