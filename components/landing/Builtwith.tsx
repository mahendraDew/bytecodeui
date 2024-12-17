import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Builtwith () {
    const staggerItem = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };

  return (
    <div className='m-32'>
     <motion.h1
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut'
          }}
          className='mt-8 bg-gradient-to-br from-slate-300 to-slate-500 shadow-md py-4 bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-7xl'
        >
          Built With
        </motion.h1>
      <motion.div
        className='flex flex-col mb-4 md:flex-row items-center justify-center mt-4 gap-5'
        variants={staggerItem}
      >
        <Image src='./nextjs.svg' height={60} width={160} alt='next js' />
        <Image src='./shadcn.svg' height={60} width={240} alt='shadcn ui' />
        <Image
          src='./tailwind.svg'
          height={60}
          width={240}
          alt='tailwind css'
        />
        <Image
          src='./aceternity.svg'
          height={60}
          width={250}
          alt='acternity ui'
        />
      </motion.div>
    </div>
  )
}
