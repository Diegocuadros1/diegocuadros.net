"use client"
import Modal from '@/components/items/GridItems';
import { motion, AnimatePresence, easeOut, useAnimate, useAnimation } from 'framer-motion'
import React, { useEffect, useState } from 'react'


const page = () => {
  const lineVariantsVertical = {
    hidden: { width: 0 },
    visible: { 
      width: '100%',
      transition: { 
        duration: 2,
        ease: "easeOut"
      }
    }
  };

  const lineVariantsHorizontal = {
    hidden: {height: 0},
    visible: {
      height: '100px',
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const controlsVertical = useAnimation()
  const controlsHorizontal = useAnimation()

  useEffect(() => {
    const sequence = async () => {
      await controlsVertical.start("visible")
      await controlsHorizontal.start("visible")
    };

    sequence()
  }, [controlsVertical, controlsHorizontal]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className='text-black-100'>Hello</h1>
      <motion.div
        className="h-0.5 bg-blue-500"
        initial="hidden"
        animate={controlsVertical}
        variants={lineVariantsVertical}
      />
      <div className='w-full flex flex-row justify-between'>
        <div className='text-black'>
          Hello World
        </div>
        <motion.div 
          className='w-0.5 bg-blue-500'
          initial="hidden"
          animate={controlsHorizontal}
          variants={lineVariantsHorizontal}
        />
        <div className='text-black'>
          Hello World 2nd
        </div>
        <motion.div 
          className='w-0.5 bg-blue-500'
          initial="hidden"
          animate={controlsHorizontal}
          variants={lineVariantsHorizontal}
        />
        <div className='text-black'>
          Hello World 3rd
        </div>
      </div>
    </div>
  );
};
export default page
