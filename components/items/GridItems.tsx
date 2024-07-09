"use client"
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'


const expand = {
  hidden: {
    scale: 0,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,

    }
  },
  exit: {
    scale: 0,
    opacity: 0,
  }

}

const Backdrop = ({children, onClick}) => {
  return (
    <motion.div
      className='fixed top-0 left-0 h-full w-full bg-black-100 bg-opacity-50 flex items-center justify-center'
      onClick={onClick}
      initial={{ opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      {children}
    </motion.div>
  );
};

const Modal = ({handleClose, id}) => {
    return (
      <Backdrop onClick={handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className='w-clamp-50-700-90 h-min-50-300 m-auto py-2 border-r-12px flex flex-col items-center bg-white-100 z-50'
          variants={expand}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className='bg-white w-full h-full flex justify-center align-center text-black-100'>
            Hello!!!!! Item ID: {id}
          </div>
          <button onClick={handleClose} className='mt-4 px-4 py-2 bg-black text-white'>
            close
          </button>

        </motion.div>
      </Backdrop>
    )
}


export default Modal
