'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { Inter } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  style: ['normal', 'italic']
})

export default function Preloader({ onComplete }: { onComplete: () => void }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount >= 1.0) {
            clearInterval(interval);
            setTimeout(onComplete, 500); // Wait 1.5 seconds before calling onComplete
            return 1.0; // Ensure it stays at 1.0 after reaching the maximum
          }
          return parseFloat((prevCount + 0.01).toFixed(2)); // Increment by 0.01 and round to 2 decimals
        });
      }, 20); // Adjust this delay for smoother or faster updates
  
      return () => clearInterval(interval);
    }, [onComplete]);
  return (
    <motion.div
      className={`fixed inset-0 flex flex-col items-center justify-center z-50 ${inter.className} text-lg`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className=""
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {count.toFixed(2)}%
      </motion.div>
    </motion.div>
  )
}

