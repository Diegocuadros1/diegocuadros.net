"use client"

import React, { useState } from 'react'
import {navItems, projects} from '@/data'
import { PinContainer } from '@/components/ui/3d-pin'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from '@/components/items/ModalsProjects'
import { FaHome, FaLocationArrow } from 'react-icons/fa'
import { FloatingNav } from '@/components/ui/FloatingNav'
import Link from 'next/link'

const page = () => {
  const [modalOn, setModalOn] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const open = (id) => {
    console.log(`opening item for id ${id}`);
    setSelectedId(id);
    setModalOn(true);
  };

  const close = () => {
    console.log(`closing item`);
    setSelectedId(null);
    setModalOn(false);
  };
  return (
    <main className="relative h-[2500px] bg-black-100 flex justify-start items-center flex-col overflow-hidden mx-auto sm:px-10 px:5">
      <FloatingNav navItems={navItems}/>
      <div className='py-5'>
        <Link href={"/"} className='absolute flex justify-center mt-5 text-purple hover:text-white'>
          Back to Home
          <FaHome className='mt-1 ml-2'/>  
        </Link>
        <div className='w-full h-auto flex flex-row justify-center'>
          <h1 className='heading mt-10'>
            <span className='text-purple'>Projects</span>
          </h1>
        </div>
        <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
          {projects.map(({ id, title, des, img, iconLists, link}) => (
            <div 
              key={id} 
              className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'
              onClick={()=> (modalOn ? close(): open(id))}
            >
              <PinContainer title={link} href={link}>

                <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                  <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                    <img src="/bg.png" alt="bg-img" />
                  </div>
                  <img src={img} alt={title} className='z-10 absolute bottom-0'/>
                </div>

                <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                  {title}
                </h1>

                <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                  {des}
                </p>

                <div className='flex items-center justify-between mt-7 mb-3'>
                  <div className='flex items-center'>
                    {iconLists.map((icon, index) => (
                      <div 
                        key={icon} 
                        className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                        style={{transform:`translateX(-${5 * index * 2}px)`}}
                      >
                        <img src={icon} alt={icon} className='p-2' />
                      </div>
                    ))}
                  </div>

                  <div className='flex justify-center items-center'>
                    <p className='flex lg:text-x md:text-xs text-sm text-purple'>Check Live Site</p>
                    <FaLocationArrow className='ms-3' color='#CBACF9' />
                  </div>

                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence
        initial={false}
        onExitComplete={() => null}
      >
        {modalOn && selectedId && (
          <Modal modalOn={modalOn} handleClose={close} id={selectedId} />
        )}
      </AnimatePresence>
    </main>
  )
}

export default page
