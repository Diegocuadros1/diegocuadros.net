"use client"
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'

const page = () => {
  


  return (
    <div className="w-100% h-100% p-10 flex justify-center items-center">
      <div className='flex justify-center items-center'>
        <motion.div
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          className='w-96 h-56 bg-white-100 border-white text-white' 
          >
          This is a Test
        </motion.div>
      </div>
    </div>
  )
}

export default page
