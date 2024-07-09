"use client"
import Modal from '@/components/items/GridItems';
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'


const page = () => {
  
  const [modalOn, setModalOn] = useState(false);

  const open = () => setModalOn(true)
  const close = () => setModalOn(false)


  return (
    <div className="w-100% h-100% p-10 flex justify-center items-center">
      <div className='flex justify-center items-center'>
        <motion.div
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          className='w-96 h-56 bg-white-100 border-white text-white flex items-center justify-center' 
          onClick={()=> (modalOn ? close(): open())}
          >
            <div className='text-black-100'>
              This is a Test
            </div>
        </motion.div>

        <AnimatePresence
          initial={false}
          onExitComplete={() => null}
        >
          {modalOn && <Modal modalOn={modalOn} handleClose={close} id={12}/>}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default page
