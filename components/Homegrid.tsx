"use client"

import React, { useState } from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { AnimatePresence } from 'framer-motion'
import { gridItems } from '@/data'
import Modal from './items/GridItems'


const Homegrid = () => {

  return (
    <section id='about'>
      <div className='flex justify-center items-center'>
        <h1 className="text-white p-10 lg:text-base">About <span className="text-purple">Me</span></h1>
      </div>

      <BentoGrid>
        {gridItems.map((item) => (
          
            <BentoGridItem
              id={item.id}
              key={item.id}
              title={item.title}
              description={item.description}
              className={item.className}
              img={item.img}
              imgClassName={item.imgClassName}
              titleClassName={item.titleClassName}
              spareImg={item.spareImg}
              
            />
        ))} 
      </BentoGrid>
    </section>
  )
}

export default Homegrid
